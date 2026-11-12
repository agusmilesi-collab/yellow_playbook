#!/usr/bin/env node
// Comandos del latido del OS (os.agustinmilesi.com). Lee y escribe el documento
// "os-<empresa>" de tools_config con la service key de .env.local.
// Empresa por defecto: yellow. Otra: agregar --empresa <id> al final.
//
//   node scripts/os.mjs sync                          sube la foto del repo y exporta las fichas de los puestos
//   node scripts/os.mjs exportar                      escribe agentes/<puesto>/SKILL.md en el repo (y MEMORIA.md si falta)
//   node scripts/os.mjs decision "<texto>"            anota una decisión del board en agentes/decisiones.md
//   node scripts/os.mjs ver [puesto]                  muestra la empresa, o un puesto con sus tareas
//   node scripts/os.mjs tarea <puesto> "<nombre>" [claude|agustin]
//   node scripts/os.mjs entregar <tareaId> "<resultado>" [archivo]   la deja en "Para revisar"
//   node scripts/os.mjs estado <tareaId> pendiente|hecha
//   node scripts/os.mjs borrar <tareaId>
//   node scripts/os.mjs latido <puesto> "<resumen>"   registra el latido (cuenta contra el presupuesto)
//   node scripts/os.mjs reporte "<texto>"             reporte del CEO al board
//   node scripts/os.mjs transito <traspasoId> agregar|sacar "<texto>"
//
// Las transcripciones completas quedan en el repo local: a la web sube solo
// la lista de archivos y la línea de estado de cada case-notes.md.

import { readFileSync, readdirSync, statSync, existsSync, mkdirSync, writeFileSync, appendFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { homedir } from "node:os";

// En la nube la salida a internet pasa por un proxy (HTTPS_PROXY). El fetch de
// Node lo ignora salvo con NODE_USE_ENV_PROXY=1: si hay proxy y falta esa
// variable, el script se vuelve a lanzar a sí mismo con ella.
if ((process.env.HTTPS_PROXY || process.env.https_proxy) && process.env.NODE_USE_ENV_PROXY !== "1") {
  const { spawnSync } = await import("node:child_process");
  const r = spawnSync(process.execPath, process.argv.slice(1), { stdio: "inherit", env: { ...process.env, NODE_USE_ENV_PROXY: "1" } });
  process.exit(r.status ?? 1);
}

const raiz = join(dirname(fileURLToPath(import.meta.url)), "..");
const argv = process.argv.slice(2);
const iEmp = argv.indexOf("--empresa");
const EMPRESA = iEmp >= 0 ? argv.splice(iEmp, 2)[1] : "yellow";
const REPOS = { yellow: "yellow playbook", campos: "Campos HR" };
// Si el script corre desde agentes/ del repo de la empresa (copia que deja exportar), el repo es ese.
const REPO = process.env.OS_REPO ?? (existsSync(join(raiz, "agentes")) && existsSync(join(raiz, "CLAUDE.md")) ? raiz : join(homedir(), "Desktop/Codigo Proyectos", REPOS[EMPRESA] ?? EMPRESA));
const CLAVE = `os-${EMPRESA}`;

// Las claves salen del entorno (en la nube, variables del entorno de Claude Code)
// o de .env.local si existe (en la Mac).
if (existsSync(join(raiz, ".env.local")))
  for (const linea of readFileSync(join(raiz, ".env.local"), "utf8").split("\n")) {
    const m = linea.match(/^([A-Z_]+)=(.*)$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
// En la nube la clave va como "secreto de red": el proxy de Anthropic agrega el
// header apikey a los pedidos a Supabase y el agente nunca la ve. En ese caso
// el entorno trae OS_CLAVE_POR_PROXY=1 y el script no manda la clave.
const PROXY = process.env.OS_CLAVE_POR_PROXY === "1";
if (!process.env.SUPABASE_URL || (!PROXY && !process.env.SUPABASE_SERVICE_KEY)) {
  console.error("Faltan SUPABASE_URL y SUPABASE_SERVICE_KEY (o OS_CLAVE_POR_PROXY=1 con el secreto de red cargado) en el entorno.");
  process.exit(1);
}
const URL_BASE = `${process.env.SUPABASE_URL}/rest/v1/tools_config`;
const H = PROXY
  ? { "Content-Type": "application/json" }
  : { apikey: process.env.SUPABASE_SERVICE_KEY, Authorization: `Bearer ${process.env.SUPABASE_SERVICE_KEY}`, "Content-Type": "application/json" };

async function leer(clave) {
  const r = await fetch(`${URL_BASE}?clave=eq.${clave}&usuario=eq.agustin&select=valor`, { headers: H });
  if (!r.ok) throw new Error(`Supabase respondió ${r.status}`);
  return (await r.json())[0]?.valor ?? null;
}
async function escribir(clave, valor) {
  const r = await fetch(URL_BASE, {
    method: "POST",
    headers: { ...H, Prefer: "resolution=merge-duplicates,return=minimal" },
    body: JSON.stringify({ usuario: "agustin", clave, valor, actualizado: new Date().toISOString() }),
  });
  if (!r.ok) throw new Error(`Supabase respondió ${r.status}: ${await r.text()}`);
}

async function leerOS() {
  const d = await leer(CLAVE);
  if (!d || d.version !== 2) throw new Error(`El documento ${CLAVE} no existe o está en la versión vieja: abrí os.agustinmilesi.com una vez y se actualiza solo.`);
  return d;
}
// Cada escritura sube la rev: si la pantalla estaba abierta, avisa en vez de pisar.
const guardarOS = (d) => escribir(CLAVE, { ...d, rev: (d.rev ?? 0) + 1 });
const ahora = () => {
  const p = Object.fromEntries(new Intl.DateTimeFormat("en-CA", { timeZone: "America/Argentina/Buenos_Aires", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hour12: false }).formatToParts(new Date()).map((x) => [x.type, x.value]));
  return `${p.year}-${p.month}-${p.day}T${p.hour === "24" ? "00" : p.hour}:${p.minute}`;
};

const hoy = () => new Intl.DateTimeFormat("en-CA", { timeZone: "America/Argentina/Buenos_Aires" }).format(new Date());
const nuevoId = () => Math.random().toString(36).slice(2, 10);

function sync() {
  const dirCasos = join(REPO, "cases");
  const casos = readdirSync(dirCasos)
    .filter((s) => statSync(join(dirCasos, s)).isDirectory())
    .map((slug) => {
      const dir = join(dirCasos, slug);
      const archivos = readdirSync(dir).filter((a) => !a.startsWith("."));
      let modificado = 0;
      for (const a of archivos) modificado = Math.max(modificado, statSync(join(dir, a)).mtimeMs);
      const notas = existsSync(join(dir, "case-notes.md")) ? readFileSync(join(dir, "case-notes.md"), "utf8") : "";
      const status =
        notas.match(/\*\*Status:\*\*\s*(.+)/i)?.[1] ??
        notas.match(/^etapa:\s*(.+)$/im)?.[1] ??
        notas.split("\n").find((l) => l.trim() && !l.startsWith("#") && !l.startsWith(">")) ??
        "";
      return {
        slug,
        status: status.trim().slice(0, 400),
        archivos,
        modificado: new Date(modificado).toISOString().slice(0, 10),
      };
    })
    .sort((a, b) => b.modificado.localeCompare(a.modificado));

  const texto = readFileSync(join(REPO, "learnings/learnings-pending.md"), "utf8");
  const learnings = [];
  const bloques = texto.split(/^### /m).slice(1);
  for (const b of bloques) {
    const cabeza = b.split("\n")[0];
    if (!/^LRN-\d{3} \|/.test(cabeza) || /CONSOLIDAD/i.test(cabeza)) continue;
    const [codigo, , caso, tipo] = cabeza.split("|").map((x) => x.trim());
    const desc = (b.match(/\*\*Descripción:\*\*\s*([^\n]+)/)?.[1] ?? "").split(/(?<=\.)\s/)[0];
    learnings.push({ codigo, titulo: `${caso} · ${tipo}: ${desc}`.slice(0, 300) });
  }
  return { sincronizado: hoy(), casos, learnings };
}

const AGENTES = { "claude-code": "Claude Code", api: "Clave de API", openclaw: "OpenClaw", hermes: "Hermes", persona: "Persona" };
const NOMBRE_EMPRESA = { yellow: "Yellow", campos: "Campos HR" }[EMPRESA] ?? EMPRESA;

// Ficha del puesto en formato SKILL.md (agentskills.io): la puede leer Claude Code,
// Hermes, OpenClaw u otro agente. La fuente es el OS; el archivo se regenera.
function fichaSkill(d, p) {
  const sigla = (id) => (id === "board" ? "Board" : d.puestos.find((x) => x.id === id)?.sigla ?? id);
  const objetivos = d.objetivos.filter((o) => o.puesto === p.id && o.estado === "activo");
  const recibe = d.traspasos.filter((x) => x.a === p.id);
  const entrega = d.traspasos.filter((x) => x.de === p.id);
  const l = [];
  l.push("---");
  l.push(`name: ${EMPRESA}-${p.id}`);
  l.push(`description: Puesto ${p.sigla} (${p.titulo}) de ${NOMBRE_EMPRESA}. Usar cuando el board pida un latido de este puesto o trabajo de su misión: ${p.mision.replace(/\s+/g, " ").slice(0, 300)}`);
  l.push("---");
  l.push("");
  l.push(`<!-- Generado por el OS (os.agustinmilesi.com). Se edita en el OS y se vuelve a exportar con: node scripts/os.mjs exportar${EMPRESA === "yellow" ? "" : " --empresa " + EMPRESA} -->`);
  l.push("");
  l.push(`# ${p.sigla} · ${p.titulo} (${NOMBRE_EMPRESA})`);
  l.push("");
  l.push(`**Reporta a:** ${sigla(p.reportaA)} · **Agente:** ${AGENTES[p.agente ?? "claude-code"] ?? p.agente} · **Ocupa:** ${p.ocupa} · **Estado:** ${p.estado}`);
  l.push("");
  l.push("## Misión", "", p.mision, "");
  l.push("## Objetivo actual", "");
  if (!objetivos.length) l.push("Sin objetivo activo. Antes de trabajar, preguntarle al board qué resultado se espera de este puesto.", "");
  for (const o of objetivos) {
    const padre = d.objetivos.find((x) => x.id === o.padre);
    l.push(`**${o.titulo}**`, "");
    if (o.dod) l.push(`- Definition of Done: ${o.dod}`);
    if (padre) l.push(`- Viene del objetivo del board: ${padre.titulo}`);
    l.push("");
  }
  if (p.kpis.length) {
    l.push("## KPIs (meta por mes)", "");
    for (const k of p.kpis) l.push(`- ${k.nombre}: ${k.meta ?? "sin meta todavía"}`);
    l.push("");
  }
  l.push("## Presupuesto", "", `${p.presupuesto.latidosMes ?? "Sin tope de"} latidos por mes${p.presupuesto.usdMes ? ` y USD ${p.presupuesto.usdMes} por mes` : ""}. Si se agotan, se le pide autorización al board antes de seguir.`, "");
  l.push("## Antes de trabajar, leer", "");
  l.push("- `CLAUDE.md` del repo: reglas duras de la empresa.");
  l.push("- `agentes/decisiones.md`: lo que decidió el board.");
  l.push(`- \`agentes/${p.id}/MEMORIA.md\`: lo que este puesto ya aprendió.`);
  for (const k of p.skills) l.push(`- \`${k.ruta}\`: ${k.nombre}.`);
  l.push("");
  if (recibe.length || entrega.length) {
    l.push("## Traspasos", "");
    for (const x of recibe) l.push(`- **Recibe de ${sigla(x.de)}:** ${x.que}. Listo cuando: ${x.criterio || "sin criterio"}. Canal: ${x.canal || "sin definir"}.`);
    for (const x of entrega) l.push(`- **Entrega a ${sigla(x.a)}:** ${x.que}. Listo cuando: ${x.criterio || "sin criterio"}. Plazo: ${x.cuando || "sin definir"}. Canal: ${x.canal || "sin definir"}.`);
    l.push("");
  }
  l.push("## Límites", "", p.limites || "Sin límites escritos: ante la duda, preguntar al board.", "");
  l.push("## Cómo trabaja en un latido", "");
  l.push("1. Lee las tareas abiertas del puesto (en el OS: `node scripts/os.mjs ver " + p.id + "`). Hace solo las que ejecuta el agente; las de una persona quedan para esa persona.");
  l.push("2. Si una tarea volvió del board con una devolución, corrige según lo pedido.");
  l.push("3. Guarda cada resultado como archivo del repo, en el caso del cliente o en `learnings/`, y lo deja en la bandeja del board para aprobar.");
  l.push("4. Nada se publica, se envía, se factura ni se cobra sin aprobación del board.");
  l.push(`5. Al terminar, anota en \`agentes/${p.id}/MEMORIA.md\` lo que aprendió (una línea por hecho, con fecha y fuente) y registra el latido.`);
  l.push("");
  return l.join("\n");
}

function exportar(d) {
  const dir = join(REPO, "agentes");
  mkdirSync(dir, { recursive: true });
  const dec = join(dir, "decisiones.md");
  if (!existsSync(dec))
    writeFileSync(dec, `# Decisiones del board (${NOMBRE_EMPRESA})\n\nCada decisión con fecha, qué se decidió y qué cambia. La leen todos los puestos antes de trabajar. Se agrega con: node scripts/os.mjs decision "<texto>"\n`);
  // Copia del script en el repo, para dar latidos desde una sesión en la nube sin yellow-web.
  writeFileSync(join(dir, "os.mjs"), readFileSync(fileURLToPath(import.meta.url), "utf8"));
  for (const p of d.puestos) {
    mkdirSync(join(dir, p.id), { recursive: true });
    writeFileSync(join(dir, p.id, "SKILL.md"), fichaSkill(d, p));
    const mem = join(dir, p.id, "MEMORIA.md");
    if (!existsSync(mem))
      writeFileSync(mem, `# Memoria del ${p.sigla} (${NOMBRE_EMPRESA})\n\nLo que este puesto aprendió trabajando y no tiene que volver a preguntar. Una línea por hecho, con fecha y fuente. La actualiza el propio puesto al final de cada latido.\n\n`);
  }
  return d.puestos.length;
}

const [cmd, ...args] = argv;

if (cmd === "sync") {
  const foto = sync();
  await escribir(`${CLAVE}-repo`, foto);
  const n = exportar(await leerOS());
  console.log(`Sincronizado: ${foto.casos.length} casos, ${foto.learnings.length} learnings pendientes. Fichas exportadas: ${n} puestos.`);
} else if (cmd === "exportar") {
  console.log(`Fichas exportadas en ${join(REPO, "agentes")}: ${exportar(await leerOS())} puestos.`);
} else if (cmd === "decision") {
  if (!args[0]) throw new Error('Uso: decision "<texto>"');
  const dec = join(REPO, "agentes", "decisiones.md");
  if (!existsSync(dec)) exportar(await leerOS());
  appendFileSync(dec, `\n- **${ahora().slice(0, 10)}:** ${args[0]}\n`);
  console.log("Decisión anotada en agentes/decisiones.md.");
} else if (cmd === "ver") {
  const d = await leerOS();
  const [pid] = args;
  const mes = ahora().slice(0, 7);
  const lat = (p) => d.latidos.filter((l) => l.puesto === p && l.fecha.startsWith(mes)).length;
  if (!pid) {
    console.log(`Empresa: ${EMPRESA}\nMisión: ${d.mision}\nObjetivos del board:`);
    for (const o of d.objetivos.filter((x) => !x.padre)) {
      console.log(`- [${o.estado}] ${o.titulo}`);
      for (const h of d.objetivos.filter((x) => x.padre === o.id)) console.log(`    · ${h.puesto ?? "sin puesto"}: [${h.estado}] ${h.titulo}`);
    }
    console.log("\nPuestos:");
    for (const p of d.puestos) {
      const ts = d.tareas.filter((t) => t.puesto === p.id);
      const c = (e, q) => ts.filter((t) => t.estado === e && (!q || t.ejecuta === q)).length;
      console.log(`${p.id.padEnd(4)} ${p.sigla} ${p.titulo} (reporta a ${p.reportaA}, ${p.estado}) · Claude ${c("pendiente", "claude")}, Agustín ${c("pendiente", "agustin")}, para revisar ${c("revisar")} · latidos ${lat(p.id)}/${p.presupuesto.latidosMes ?? "∞"}`);
    }
    console.log("\nTraspasos:");
    for (const x of d.traspasos) console.log(`${x.id}: ${x.de} → ${x.a} (${x.que}; listo cuando: ${x.criterio || "-"}) en tránsito: ${x.enTransito.length ? x.enTransito.join("; ") : "-"}`);
    if (d.reporte) console.log(`\nÚltimo reporte del CEO (${d.reporte.fecha}):\n${d.reporte.texto}`);
  } else {
    const p = d.puestos.find((x) => x.id === pid);
    if (!p) throw new Error(`No hay puesto "${pid}". Puestos: ${d.puestos.map((x) => x.id).join(", ")}`);
    const objetivos = d.objetivos.filter((o) => o.puesto === pid).map((o) => ({ ...o, delBoard: d.objetivos.find((x) => x.id === o.padre)?.titulo ?? null }));
    console.log(JSON.stringify({
      ...p,
      latidosEsteMes: lat(pid),
      objetivos,
      tareas: d.tareas.filter((t) => t.puesto === pid && t.estado !== "hecha"),
      traspasos: d.traspasos.filter((x) => x.de === pid || x.a === pid),
      repo: REPO,
      ficha: join(REPO, "agentes", pid, "SKILL.md"),
      memoria: join(REPO, "agentes", pid, "MEMORIA.md"),
      decisiones: join(REPO, "agentes", "decisiones.md"),
    }, null, 2));
    if (p.presupuesto.latidosMes && lat(pid) >= p.presupuesto.latidosMes) console.log(`\nAVISO: ${p.sigla} ya usó sus ${p.presupuesto.latidosMes} latidos del mes. Pedirle al board que lo autorice antes de trabajar.`);
  }
} else if (cmd === "tarea") {
  const [puesto, nombre, ejecuta = "claude"] = args;
  const d = await leerOS();
  if (!d.puestos.some((p) => p.id === puesto) || !nombre) throw new Error("Uso: tarea <puesto> \"<nombre>\" [claude|agustin]");
  const objetivo = d.objetivos.find((o) => o.puesto === puesto && o.estado === "activo")?.id ?? null;
  const t = { id: nuevoId(), puesto, objetivo, nombre, ejecuta: ejecuta === "agustin" ? "agustin" : "claude", estado: "pendiente", fecha: null, resultado: "", archivo: "", devolucion: "" };
  d.tareas.push(t);
  await guardarOS(d);
  console.log(`Tarea ${t.id} creada en ${puesto}.`);
} else if (cmd === "entregar" || cmd === "estado") {
  const [tid, valor, archivo = ""] = args;
  const d = await leerOS();
  const t = d.tareas.find((x) => x.id === tid);
  if (!t) throw new Error(`No hay tarea "${tid}".`);
  if (cmd === "entregar") Object.assign(t, { estado: "revisar", resultado: valor ?? "", archivo, devolucion: "" });
  else if (valor === "pendiente" || valor === "hecha") t.estado = valor;
  else throw new Error("Estado: pendiente o hecha (para revisar se usa entregar).");
  await guardarOS(d);
  console.log(`Tarea ${tid}: ${t.estado}.`);
} else if (cmd === "borrar") {
  const d = await leerOS();
  const antes = d.tareas.length;
  d.tareas = d.tareas.filter((t) => t.id !== args[0]);
  if (d.tareas.length === antes) throw new Error(`No hay tarea "${args[0]}".`);
  await guardarOS(d);
  console.log(`Tarea ${args[0]} borrada.`);
} else if (cmd === "latido") {
  const [puesto, resumen] = args;
  const d = await leerOS();
  if (!d.puestos.some((p) => p.id === puesto) || !resumen) throw new Error("Uso: latido <puesto> \"<resumen>\"");
  d.latidos = [...d.latidos, { id: nuevoId(), fecha: ahora(), puesto, resumen }].slice(-400);
  await guardarOS(d);
  console.log(`Latido de ${puesto} registrado.`);
} else if (cmd === "reporte") {
  const d = await leerOS();
  d.reporte = { fecha: hoy(), texto: args[0] ?? "" };
  await guardarOS(d);
  console.log("Reporte del CEO guardado.");
} else if (cmd === "transito") {
  const [xid, accion, texto] = args;
  const d = await leerOS();
  const x = d.traspasos.find((y) => y.id === xid);
  if (!x || !texto) throw new Error("Uso: transito <traspasoId> agregar|sacar \"<texto>\"");
  if (accion === "agregar") x.enTransito.push(texto);
  else x.enTransito = x.enTransito.filter((y) => y !== texto);
  await guardarOS(d);
  console.log(`Traspaso ${xid}: ${x.enTransito.length} en tránsito.`);
} else {
  console.log(readFileSync(fileURLToPath(import.meta.url), "utf8").split("\n").slice(1, 18).join("\n"));
}
