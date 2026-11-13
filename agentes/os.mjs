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
//   node scripts/os.mjs entregar <tareaId> "<resultado>" [archivo] [--board]   la deja en "Para revisar":
//                                                     la revisa el jefe del puesto; con --board, es una decisión del board
//   node scripts/os.mjs aprobar <tareaId>             el jefe aprueba la entrega de un puesto a cargo (queda hecha)
//   node scripts/os.mjs devolver <tareaId> "<qué cambiar>"   el jefe la devuelve al puesto
//   node scripts/os.mjs escalar <tareaId>             el jefe la pasa al board (necesita una decisión)
//   node scripts/os.mjs estado <tareaId> pendiente|curso|devuelta|hecha
//   node scripts/os.mjs tarea-editar <tareaId> ["<nombre>"] [--detalle "<instrucciones>"] [--dod "<listo cuando>"] [--vence AAAA-MM-DD]
//   node scripts/os.mjs borrar <tareaId>
//   node scripts/os.mjs puesto crear <archivo.json>   da de alta un puesto aprobado por el board (ficha del CHRO)
//   node scripts/os.mjs empezar <puesto> [tareaId]    marca que el puesto está trabajando (su circulito late) y, si se pasa, la tarea En curso
//   node scripts/os.mjs latido <puesto> "<resumen>"   registra el latido y apaga el "trabajando"
//   node scripts/os.mjs terminar <puesto>             apaga el "trabajando" sin registrar latido
//   node scripts/os.mjs objetivo "<título>" [--dod "<texto>"] [--puesto <id>] [--padre <id>] [--primero]
//   node scripts/os.mjs latidos [puesto]             lista los latidos con su id y sus entregas
//   node scripts/os.mjs latido-entregas <latidoId> <tareaId,tareaId>   vincula entregas con un latido viejo
//   node scripts/os.mjs accountability <puesto> "<texto>"   el resultado por el que responde (aprobado por el board)
//   node scripts/os.mjs infra                        foto de infraestructura del día (planes y facturación), solo lectura
//   node scripts/os.mjs puesto-campo <puesto> <mision|limites|criterio> "<texto>"
//   node scripts/os.mjs traspaso-crear <de> <a> "<qué>" "<listo cuando>" ["<cuándo>"] ["<canal>"]
//   node scripts/os.mjs modelo <puesto> <claude-opus-5-5|claude-sonnet-5-5|claude-haiku-5-5|claude-fable-5-2>
//   node scripts/os.mjs presupuesto <puesto> <latidos por mes>
//   node scripts/os.mjs costo <puesto>               equivalente API de lo que lleva el latido en curso
//   node scripts/os.mjs objetivo-editar <id> "<título>" [--dod "<texto>"]
//   node scripts/os.mjs kr-borrar <puesto> "<nombre del KR>"
//   node scripts/os.mjs kr <puesto> "<nombre>" <meta> [--base N] [--unidad "<u>"] [--objetivo <id>]   crea o actualiza un KR
//   node scripts/os.mjs real <puesto> "<nombre del KR>" <número>   carga el valor actual de un KR
//   node scripts/os.mjs iniciativa <puesto> "<nombre>" [--kr "<nombre del KR>"] [--objetivo <id>]
//   node scripts/os.mjs tarea <puesto> "<nombre>" [claude|agustin] [--iniciativa <id>] [--detalle "<instrucciones>"] --dod "<listo cuando>"
//   node scripts/os.mjs reporte --archivo <json>      reporte del CEO al board: { resumen, areas: [{ puesto, anda, trabado }], decisiones: [{ que, recomienda, tarea }] }
//   node scripts/os.mjs transito <traspasoId> agregar|sacar "<texto>"
//
// Las transcripciones completas quedan en el repo local: a la web sube solo
// la lista de archivos y la línea de estado de cada case-notes.md.

import { readFileSync, readdirSync, statSync, existsSync, mkdirSync, writeFileSync, appendFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { homedir } from "node:os";

// En la nube la salida a internet pasa por un proxy (HTTPS_PROXY) con su propio
// certificado. El fetch de Node ignora el proxy salvo con NODE_USE_ENV_PROXY=1, y
// rechaza el certificado salvo con NODE_EXTRA_CA_CERTS. Si falta alguna de las
// dos, el script se vuelve a lanzar a sí mismo con ellas.
if (process.env.HTTPS_PROXY || process.env.https_proxy) {
  const { existsSync: existe } = await import("node:fs");
  const ca = [process.env.NODE_EXTRA_CA_CERTS, process.env.SSL_CERT_FILE, "/root/.ccr/ca-bundle.crt"].find((f) => f && existe(f));
  if (process.env.NODE_USE_ENV_PROXY !== "1" || (ca && process.env.NODE_EXTRA_CA_CERTS !== ca)) {
    const { spawnSync } = await import("node:child_process");
    const env = { ...process.env, NODE_USE_ENV_PROXY: "1", ...(ca ? { NODE_EXTRA_CA_CERTS: ca } : {}) };
    const r = spawnSync(process.execPath, process.argv.slice(1), { stdio: "inherit", env });
    process.exit(r.status ?? 1);
  }
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
  if (!d || d.version !== 3) throw new Error(`El documento ${CLAVE} no existe o está en la versión vieja: abrí os.agustinmilesi.com una vez y se actualiza solo.`);
  return d;
}
// Cada escritura sube la rev: si la pantalla estaba abierta, avisa en vez de pisar.
const guardarOS = (d) => escribir(CLAVE, { ...d, rev: (d.rev ?? 0) + 1 });
const ahora = () => {
  const p = Object.fromEntries(new Intl.DateTimeFormat("en-CA", { timeZone: "America/Argentina/Buenos_Aires", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hour12: false }).formatToParts(new Date()).map((x) => [x.type, x.value]));
  return `${p.year}-${p.month}-${p.day}T${p.hour === "24" ? "00" : p.hour}:${p.minute}`;
};

// Precios de la API por millón de tokens (entrada, salida, lectura de caché, escritura de caché 5 min y 1 hora).
const PRECIOS = {
  "claude-opus-5-5": [4, 20, 0.2, 5, 8],
  "claude-sonnet-5-5": [2, 10, 0.1, 2.5, 4],
  "claude-fable-5-2": [8, 40, 0.2, 10, 16],
  "claude-haiku-5-5": [0.1, 0.5, 0.01, 0.125, 0.2],
};
/**
 * Lo que costaría por API el trabajo de esta sesión desde una hora dada: lee el registro de Claude Code
 * (el .jsonl más reciente en ~/.claude/projects), suma el uso de cada respuesta (una vez por mensaje) y lo valúa.
 * Si no encuentra el registro, devuelve null y el latido queda sin medir.
 */
function costoDesde(desdeIso) {
  try {
    const raizP = join(homedir(), ".claude", "projects");
    const archivos = [];
    // Recorre también las subcarpetas: los latidos que el CEO corre como subagentes guardan su registro ahí.
    const recorrer = (dir, nivel) => {
      for (const a of readdirSync(dir)) {
        const full = join(dir, a);
        const st = statSync(full);
        if (st.isDirectory() && nivel < 4) recorrer(full, nivel + 1);
        else if (a.endsWith(".jsonl")) archivos.push(full);
      }
    };
    recorrer(raizP, 0);
    if (!archivos.length) return null;
    const ultimo = archivos.sort((a, b) => statSync(b).mtimeMs - statSync(a).mtimeMs)[0];
    const desde = Date.parse(desdeIso);
    const porMensaje = new Map();
    for (const linea of readFileSync(ultimo, "utf8").split("\n")) {
      if (!linea.includes('"usage"')) continue;
      let j; try { j = JSON.parse(linea); } catch { continue; }
      const m = j.message;
      if (!m?.usage || !j.timestamp || Date.parse(j.timestamp) < desde) continue;
      porMensaje.set(m.id ?? j.uuid, { modelo: m.model, u: m.usage });
    }
    let usd = 0, tokens = 0;
    for (const { modelo, u } of porMensaje.values()) {
      const [pi, po, pr, p5, p1] = PRECIOS[modelo] ?? PRECIOS["claude-opus-5-5"];
      const w1 = u.cache_creation?.ephemeral_1h_input_tokens ?? 0;
      const w5 = u.cache_creation?.ephemeral_5m_input_tokens ?? Math.max(0, (u.cache_creation_input_tokens ?? 0) - w1);
      const ent = u.input_tokens ?? 0, sal = u.output_tokens ?? 0, lec = u.cache_read_input_tokens ?? 0;
      usd += (ent * pi + sal * po + lec * pr + w5 * p5 + w1 * p1) / 1e6;
      tokens += ent + sal + lec + w5 + w1;
    }
    return porMensaje.size ? { usd: Math.round(usd * 100) / 100, tokens } : null;
  } catch {
    return null;
  }
}

function estadoKR(d, k) {
  if (k.meta === null) return "sin meta";
  if (k.actual === null) return "sin medir";
  const base = k.base ?? 0;
  const a = k.meta === base ? (k.actual >= k.meta ? 1 : 0) : (k.actual - base) / (k.meta - base);
  if (a >= 1) return "logrado";
  const ini = Date.parse(d.ciclo.inicio), fin = Date.parse(d.ciclo.fin);
  const t = fin > ini ? Math.max(0, Math.min(1, (Date.now() - ini) / (fin - ini))) : 1;
  return a >= t - 0.05 ? "en línea" : a >= t - 0.15 ? "en riesgo" : "atrasado";
}
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
        "";
      const campo = (n) => (notas.match(new RegExp(`\\*\\*${n}:\\*\\*\\s*(.+)`, "i"))?.[1] ?? "").trim().slice(0, 160);
      return {
        slug,
        status: status.trim().slice(0, 400),
        modelo: campo("Modelo"),
        inicio: campo("Inicio"),
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
  l.push(`**Reporta a:** ${sigla(p.reportaA)} · **Agente:** ${AGENTES[p.agente ?? "claude-code"] ?? p.agente} · **Modelo:** ${p.modelo ?? "claude-opus-5-5"} · **Ocupa:** ${p.ocupa} · **Estado:** ${p.estado}`);
  l.push("");
  l.push("## Misión", "", p.mision, "");
  if (p.accountability) l.push("## Accountability: el resultado por el que responde", "", p.accountability, "");
  if (p.criterio) l.push("## Criterio: cómo piensa y decide", "", "Aplicar estos principios en cada decisión del latido, y decir en el cierre cuál se aplicó cuando cambió una decisión.", "", p.criterio, "");
  l.push("## Objetivo actual", "");
  if (!objetivos.length) l.push("Sin objetivo activo. Antes de trabajar, preguntarle al board qué resultado se espera de este puesto.", "");
  for (const o of objetivos) {
    const padre = d.objetivos.find((x) => x.id === o.padre);
    l.push(`**${o.titulo}**`, "");
    if (o.dod) l.push(`- Definition of Done: ${o.dod}`);
    if (padre) l.push(`- Viene del objetivo del board: ${padre.titulo}`);
    l.push("");
  }
  const krs = d.krs.filter((k) => objetivos.some((o) => o.id === k.objetivo));
  if (krs.length) {
    l.push(`## Key Results (${d.ciclo.nombre}, hasta ${d.ciclo.fin})`, "");
    for (const k of krs) l.push(`- ${k.nombre}: ${k.base ?? 0} → ${k.meta ?? "sin meta"} ${k.unidad} (actual ${k.actual ?? "sin medir"}; ${estadoKR(d, k)})`);
    l.push("");
  }
  const inis = d.iniciativas.filter((i) => objetivos.some((o) => o.id === i.objetivo) && i.estado === "activa");
  if (inis.length) {
    l.push("## Iniciativas activas", "");
    for (const i of inis) l.push(`- ${i.nombre}${i.kr ? ` (mueve: ${d.krs.find((k) => k.id === i.kr)?.nombre ?? "-"})` : ""}`);
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
  // Lo que el puesto tiene que leer antes de trabajar va en la misma salida: un paso en vez de cuatro.
  const leerSi = (ruta) => (existsSync(ruta) ? readFileSync(ruta, "utf8").trim() : "(no existe)");
  const contexto = (pid) => {
    const a = join(REPO, "agentes");
    const partes = pid ? [["FICHA", join(a, pid, "SKILL.md")], ["MEMORIA", join(a, pid, "MEMORIA.md")]] : [["MEMORIA DEL CEO", join(a, "ceo", "MEMORIA.md")]];
    partes.push(["DECISIONES DEL BOARD", join(a, "decisiones.md")]);
    for (const [t, r] of partes) console.log(`\n===== ${t} (${r.slice(REPO.length + 1)}) =====\n${leerSi(r)}`);
  };
  const d = await leerOS();
  const [pid] = args;
  const mes = ahora().slice(0, 7);
  const lat = (p) => d.latidos.filter((l) => l.puesto === p && l.fecha.startsWith(mes)).length;
  if (!pid) {
    console.log(`Empresa: ${EMPRESA}\nMisión: ${d.mision}\nCiclo: ${d.ciclo.nombre} (${d.ciclo.inicio} a ${d.ciclo.fin})\nObjetivos del board y de los Chiefs:`);
    for (const o of d.objetivos.filter((x) => !x.padre)) {
      console.log(`- [${o.estado}] ${o.titulo}`);
      for (const h of d.objetivos.filter((x) => x.padre === o.id)) {
        console.log(`    · ${h.puesto ?? "sin puesto"}: [${h.estado}] ${h.titulo}`);
        for (const k of d.krs.filter((x) => x.objetivo === h.id)) console.log(`        KR ${k.nombre}: ${k.actual ?? "-"} / ${k.meta ?? "-"} ${k.unidad} (${estadoKR(d, k)})`);
      }
    }
    console.log("\nPuestos:");
    for (const p of d.puestos) {
      const ts = d.tareas.filter((t) => t.puesto === p.id);
      const abierta = (t) => t.estado === "pendiente" || t.estado === "curso" || t.estado === "devuelta";
      const c = (e, q) => ts.filter((t) => (e === "abierta" ? abierta(t) : t.estado === e) && (!q || t.ejecuta === q)).length;
      console.log(`${p.id.padEnd(4)} ${p.sigla} ${p.titulo} (reporta a ${p.reportaA}, ${p.estado}) · Claude ${c("abierta", "claude")}, Agustín ${c("abierta", "agustin")}, para revisar ${c("revisar")} · latidos ${lat(p.id)}/${p.presupuesto.latidosMes ?? "∞"}`);
    }
    console.log("\nTraspasos:");
    for (const x of d.traspasos) console.log(`${x.id}: ${x.de} → ${x.a} (${x.que}; listo cuando: ${x.criterio || "-"}) en tránsito: ${x.enTransito.length ? x.enTransito.join("; ") : "-"}`);
    if (d.reporte) console.log(`\nÚltimo reporte del CEO (${d.reporte.fecha}):\n${d.reporte.texto}`);
    if (!args.includes("--corto")) contexto(null);
  } else {
    const p = d.puestos.find((x) => x.id === pid);
    if (!p) throw new Error(`No hay puesto "${pid}". Puestos: ${d.puestos.map((x) => x.id).join(", ")}`);
    const objetivos = d.objetivos.filter((o) => o.puesto === pid).map((o) => ({ ...o, delBoard: d.objetivos.find((x) => x.id === o.padre)?.titulo ?? null }));
    console.log(JSON.stringify({
      ...p,
      latidosEsteMes: lat(pid),
      objetivos,
      krs: d.krs.filter((k) => objetivos.some((o) => o.id === k.objetivo)).map((k) => ({ ...k, estado: estadoKR(d, k) })),
      iniciativas: d.iniciativas.filter((i) => objetivos.some((o) => o.id === i.objetivo)),
      tareas: d.tareas.filter((t) => t.puesto === pid && t.estado !== "hecha"),
      // Entregas de los puestos a cargo que revisa este puesto (aprobar, devolver o escalar al board).
      paraRevisar: d.tareas.filter((t) => t.estado === "revisar" && !t.decide && d.puestos.find((x) => x.id === t.puesto)?.reportaA === pid),
      traspasos: d.traspasos.filter((x) => x.de === pid || x.a === pid),
      repo: REPO,
    }, null, 1));
    if (p.presupuesto.latidosMes && lat(pid) >= p.presupuesto.latidosMes) console.log(`\nAVISO: ${p.sigla} ya usó sus ${p.presupuesto.latidosMes} latidos del mes. Pedirle al board que lo autorice antes de trabajar.`);
    if (!args.includes("--corto")) contexto(pid);
  }
} else if (cmd === "tarea") {
  const iIni = args.indexOf("--iniciativa");
  const iniciativa = iIni >= 0 ? args.splice(iIni, 2)[1] : null;
  const iDet = args.indexOf("--detalle");
  const detalle = iDet >= 0 ? args.splice(iDet, 2)[1] : "";
  const iDod = args.indexOf("--dod");
  const dod = iDod >= 0 ? args.splice(iDod, 2)[1] : "";
  const [puesto, nombre, ejecuta = "claude"] = args;
  const d = await leerOS();
  if (!d.puestos.some((p) => p.id === puesto) || !nombre) throw new Error("Uso: tarea <puesto> \"<nombre>\" [claude|agustin] --dod \"<listo cuando>\"");
  if (ejecuta !== "agustin" && !dod) throw new Error('Falta --dod "<listo cuando>": toda tarea de un puesto dice cuándo está terminada.');
  const ini = iniciativa ? d.iniciativas.find((i) => i.id === iniciativa) : null;
  if (iniciativa && !ini) throw new Error(`No hay iniciativa "${iniciativa}".`);
  const objetivo = ini?.objetivo ?? d.objetivos.find((o) => o.puesto === puesto && o.estado === "activo")?.id ?? null;
  const t = { id: nuevoId(), puesto, objetivo, iniciativa: ini?.id ?? null, nombre, ejecuta: ejecuta === "agustin" ? "agustin" : "claude", estado: "pendiente", fecha: null, resultado: "", archivo: "", devolucion: "", decide: false, entregada: null, detalle, dod };
  d.tareas.push(t);
  await guardarOS(d);
  console.log(`Tarea ${t.id} creada en ${puesto}.`);
} else if (cmd === "entregar" || cmd === "estado") {
  const iBoard = args.indexOf("--board");
  const alBoard = iBoard >= 0;
  if (alBoard) args.splice(iBoard, 1);
  const [tid, valor, archivo = ""] = args;
  const d = await leerOS();
  const t = d.tareas.find((x) => x.id === tid);
  if (!t) throw new Error(`No hay tarea "${tid}".`);
  if (cmd === "entregar") Object.assign(t, { estado: "revisar", resultado: valor ?? "", archivo, devolucion: "", decide: alBoard, entregada: new Date().toISOString() });
  else if (["pendiente", "curso", "devuelta", "hecha"].includes(valor)) t.estado = valor;
  else throw new Error("Estado: pendiente, curso, devuelta o hecha (para revisar se usa entregar).");
  await guardarOS(d);
  console.log(`Tarea ${tid}: ${t.estado}.`);
} else if (cmd === "aprobar" || cmd === "devolver" || cmd === "escalar") {
  const [tid, motivo] = args;
  const d = await leerOS();
  const t = d.tareas.find((x) => x.id === tid);
  if (!t) throw new Error(`No hay tarea "${tid}".`);
  if (t.estado !== "revisar") throw new Error(`La tarea ${tid} no está para revisar (está ${t.estado}).`);
  if (cmd === "aprobar") Object.assign(t, { estado: "hecha", devolucion: "" });
  else if (cmd === "devolver") {
    if (!motivo) throw new Error('Uso: devolver <tareaId> "<qué cambiar>"');
    Object.assign(t, { estado: "devuelta", devolucion: motivo });
  } else t.decide = true;
  await guardarOS(d);
  console.log(cmd === "aprobar" ? `Tarea ${tid}: aprobada.` : cmd === "devolver" ? `Tarea ${tid}: devuelta al puesto.` : `Tarea ${tid}: pasa a la bandeja del board.`);
} else if (cmd === "tarea-editar") {
  // tarea-editar <tareaId> ["<nombre nuevo>"] [--detalle "<instrucciones>"]
  const iDet = args.indexOf("--detalle");
  const detalle = iDet >= 0 ? args.splice(iDet, 2)[1] : null;
  const iDod = args.indexOf("--dod");
  const dodN = iDod >= 0 ? args.splice(iDod, 2)[1] : null;
  const iVen = args.indexOf("--vence");
  const vence = iVen >= 0 ? args.splice(iVen, 2)[1] : null;
  const [tid, nombre] = args;
  const d = await leerOS();
  const t = d.tareas.find((x) => x.id === tid);
  if (vence !== null && t) t.fecha = /^\d{4}-\d{2}-\d{2}$/.test(vence) ? vence : null;
  if (!t || (!nombre && detalle === null && dodN === null && vence === null)) throw new Error('Uso: tarea-editar <tareaId> ["<nombre>"] [--detalle "<texto>"] [--dod "<listo cuando>"]');
  if (nombre) t.nombre = nombre;
  if (detalle !== null) t.detalle = detalle;
  if (dodN !== null) t.dod = dodN;
  await guardarOS(d);
  console.log(`Tarea ${tid} renombrada.`);
} else if (cmd === "borrar") {
  const d = await leerOS();
  const antes = d.tareas.length;
  d.tareas = d.tareas.filter((t) => t.id !== args[0]);
  if (d.tareas.length === antes) throw new Error(`No hay tarea "${args[0]}".`);
  await guardarOS(d);
  console.log(`Tarea ${args[0]} borrada.`);
} else if (cmd === "puesto") {
  const [accion, archivo] = args;
  if (accion !== "crear" || !archivo) throw new Error("Uso: puesto crear <archivo.json>");
  const f = JSON.parse(readFileSync(archivo, "utf8"));
  const d = await leerOS();
  if (!/^[a-z0-9-]{2,20}$/.test(f.id ?? "")) throw new Error("El id del puesto tiene que ser corto, en minúsculas (ej. chro).");
  if (d.puestos.some((p) => p.id === f.id)) throw new Error(`Ya existe un puesto "${f.id}".`);
  if (f.reportaA !== "board" && !d.puestos.some((p) => p.id === f.reportaA)) throw new Error(`No existe el jefe "${f.reportaA}".`);
  const agentes = ["claude-code", "api", "openclaw", "hermes", "persona"];
  const p = {
    id: f.id, sigla: String(f.sigla ?? f.id.toUpperCase()).slice(0, 8), titulo: String(f.titulo ?? "").slice(0, 80),
    icono: String(f.icono ?? "persona"), reportaA: f.reportaA, agente: agentes.includes(f.agente) ? f.agente : "claude-code",
    ocupa: String(f.ocupa ?? "Claude"), estado: "activo", mision: String(f.mision ?? ""), criterio: String(f.criterio ?? ""), accountability: String(f.accountability ?? ""), modelo: String(f.modelo ?? "claude-opus-5-5"),
    kpis: [], skills: Array.isArray(f.skills) ? f.skills.filter((k) => k && k.ruta).map((k) => ({ nombre: String(k.nombre ?? k.ruta), ruta: String(k.ruta) })) : [],
    presupuesto: { latidosMes: Number(f.presupuesto?.latidosMes) || 4, usdMes: null }, limites: String(f.limites ?? ""), trabajando: null,
  };
  d.puestos.push(p);
  await guardarOS(d);
  exportar(d);
  console.log(`Puesto ${p.sigla} creado (reporta a ${p.reportaA}). Falta cargarle objetivo, KRs y traspasos.`);
} else if (cmd === "empezar" || cmd === "terminar") {
  const [puesto, tid] = args;
  const d = await leerOS();
  const p = d.puestos.find((x) => x.id === puesto);
  if (!p) throw new Error(`Uso: ${cmd} <puesto> [tareaId]`);
  p.trabajando = cmd === "empezar" ? new Date().toISOString() : null;
  if (cmd === "empezar" && tid) {
    const t = d.tareas.find((x) => x.id === tid && x.puesto === puesto);
    if (!t) throw new Error(`${p.sigla} no tiene la tarea "${tid}".`);
    t.estado = "curso";
  }
  await guardarOS(d);
  console.log(cmd === "empezar" ? `${p.sigla} trabajando.` : `${p.sigla} terminó.`);
} else if (cmd === "latidos") {
  // latidos [puesto]: lista los latidos con su id, fecha y entregas vinculadas
  const d = await leerOS();
  for (const l of d.latidos.filter((x) => !args[0] || x.puesto === args[0])) console.log(`${l.id} ${l.fecha} ${l.puesto.padEnd(4)} entregas:${(l.entregas ?? []).length} ${l.usd != null ? `USD ${l.usd} (${Math.round((l.tokens ?? 0) / 1000)}k tokens)` : ""} · ${l.resumen.slice(0, 70)}`);
} else if (cmd === "latido-entregas") {
  // latido-entregas <latidoId> <tareaId,tareaId>: vincula a mano entregas con un latido (para latidos viejos)
  const [lid, lista] = args;
  const d = await leerOS();
  const l = d.latidos.find((x) => x.id === lid);
  if (!l || !lista) throw new Error("Uso: latido-entregas <latidoId> <tareaId,tareaId>");
  l.entregas = lista.split(",").filter((id) => d.tareas.some((t) => t.id === id));
  await guardarOS(d);
  console.log(`Latido ${lid}: ${l.entregas.length} entregas.`);
} else if (cmd === "accountability") {
  // accountability <puesto> "<resultado por el que responde>" (lo carga el CHRO cuando el board aprueba)
  const [puesto, texto] = args;
  const d = await leerOS();
  const p = d.puestos.find((x) => x.id === puesto);
  if (!p || !texto) throw new Error('Uso: accountability <puesto> "<texto>"');
  p.accountability = texto;
  await guardarOS(d);
  console.log(`${p.sigla}: accountability cargado.`);
} else if (cmd === "infra") {
  // infra: la foto de infraestructura del día (planes y facturación de Vercel y Supabase). Solo lectura.
  const f = await leer(`${CLAVE}-infra`);
  if (!f) throw new Error("Todavía no hay foto de infraestructura (la toma el cron de las 8).");
  console.log(JSON.stringify(f, null, 2));
} else if (cmd === "puesto-campo") {
  // puesto-campo <puesto> <mision|limites|criterio> "<texto>": cambia un campo del DPT (aprobado por el board)
  const [puesto, campo, texto] = args;
  const d = await leerOS();
  const p = d.puestos.find((x) => x.id === puesto);
  if (!p || !["mision", "limites", "criterio"].includes(campo) || !texto) throw new Error('Uso: puesto-campo <puesto> <mision|limites|criterio> "<texto>"');
  p[campo] = texto;
  await guardarOS(d);
  console.log(`${p.sigla}: ${campo} actualizado.`);
} else if (cmd === "traspaso-crear") {
  // traspaso-crear <de> <a> "<qué>" "<listo cuando>" ["<cuándo>"] ["<canal>"]
  const [de, a, que, criterio, cuando = "", canal = ""] = args;
  const d = await leerOS();
  if (!d.puestos.some((x) => x.id === de) || !d.puestos.some((x) => x.id === a) || !que || !criterio) throw new Error('Uso: traspaso-crear <de> <a> "<qué>" "<listo cuando>" ["<cuándo>"] ["<canal>"]');
  const t = { id: nuevoId(), de, a, que, criterio, cuando, canal, enTransito: [] };
  d.traspasos.push(t);
  await guardarOS(d);
  console.log(`Traspaso ${t.id} creado: ${de} → ${a}.`);
} else if (cmd === "modelo") {
  // modelo <puesto> <claude-opus-5-5|claude-sonnet-5-5|claude-haiku-5-5|claude-fable-5-2>
  const [puesto, m] = args;
  const d = await leerOS();
  const p = d.puestos.find((x) => x.id === puesto);
  if (!p || !PRECIOS[m]) throw new Error(`Uso: modelo <puesto> <${Object.keys(PRECIOS).join("|")}>`);
  p.modelo = m;
  await guardarOS(d);
  console.log(`${p.sigla}: ${m}.`);
} else if (cmd === "presupuesto") {
  // presupuesto <puesto> <latidos por mes>
  const [puesto, n] = args;
  const d = await leerOS();
  const p = d.puestos.find((x) => x.id === puesto);
  if (!p || !Number.isFinite(Number(n))) throw new Error("Uso: presupuesto <puesto> <latidos por mes>");
  p.presupuesto.latidosMes = Number(n);
  await guardarOS(d);
  console.log(`${p.sigla}: ${n} latidos por mes.`);
} else if (cmd === "costo") {
  // costo <puesto>: equivalente API de lo que lleva el latido en curso (sin registrarlo)
  const d = await leerOS();
  const p = d.puestos.find((x) => x.id === args[0]);
  if (!p?.trabajando) throw new Error("Uso: costo <puesto> (el puesto tiene que estar trabajando)");
  const c = costoDesde(p.trabajando);
  console.log(c ? `${p.sigla}: USD ${c.usd.toFixed(2)} (${Math.round(c.tokens / 1000)}k tokens) desde ${p.trabajando}` : "Sin registro de la sesión.");
} else if (cmd === "latido") {
  const [puesto, resumen] = args;
  const d = await leerOS();
  const p = d.puestos.find((x) => x.id === puesto);
  if (!p || !resumen) throw new Error("Uso: latido <puesto> \"<resumen>\"");
  // Equivalente API: tokens de la sesión desde que el puesto empezó (empezar) hasta ahora.
  const costo = p.trabajando ? costoDesde(p.trabajando) : null;
  // Entregas de este latido: las que el puesto entregó desde que empezó (o desde su latido anterior).
  const previo = [...d.latidos].reverse().find((l) => l.puesto === puesto);
  // La fecha del latido está en hora de Argentina sin zona: se le agrega -03:00 para compararla bien en la nube.
  const desde = p.trabajando ? Date.parse(p.trabajando) : previo ? Date.parse(`${previo.fecha}:00-03:00`) : 0;
  const entregas = d.tareas.filter((t) => t.puesto === puesto && t.entregada && Date.parse(t.entregada) >= desde).map((t) => t.id);
  p.trabajando = null;
  d.latidos = [...d.latidos, { id: nuevoId(), fecha: ahora(), puesto, resumen, tokens: costo?.tokens ?? null, usd: costo?.usd ?? null, entregas }].slice(-400);
  await guardarOS(d);
  console.log(`Latido de ${puesto} registrado.${costo ? ` Equivalente API: USD ${costo.usd.toFixed(2)} (${Math.round(costo.tokens / 1000)}k tokens).` : ""}`);
} else if (cmd === "objetivo-editar") {
  // objetivo-editar <id> "<título nuevo>" [--dod "<texto>"]
  const iD = args.indexOf("--dod");
  const dod = iD >= 0 ? args.splice(iD, 2)[1] : null;
  const [oid, titulo] = args;
  const d = await leerOS();
  const o = d.objetivos.find((x) => x.id === oid);
  if (!o || !titulo) throw new Error('Uso: objetivo-editar <id> "<título>" [--dod "<texto>"]');
  o.titulo = titulo;
  if (dod !== null) o.dod = dod;
  await guardarOS(d);
  console.log(`Objetivo ${oid} actualizado.`);
} else if (cmd === "kr-borrar") {
  // kr-borrar <puesto> "<nombre del KR>": las iniciativas que lo movían quedan sin KR
  const [puesto, nombre] = args;
  const d = await leerOS();
  const objs = d.objetivos.filter((o) => o.puesto === puesto);
  const k = d.krs.find((x) => objs.some((o) => o.id === x.objetivo) && x.nombre.toLowerCase() === String(nombre ?? "").toLowerCase());
  if (!k) throw new Error(`Uso: kr-borrar <puesto> "<nombre del KR>"`);
  d.krs = d.krs.filter((x) => x.id !== k.id);
  for (const i of d.iniciativas) if (i.kr === k.id) i.kr = null;
  await guardarOS(d);
  console.log(`KR "${k.nombre}" borrado de ${puesto}.`);
} else if (cmd === "objetivo") {
  const flag = (n) => { const i = args.indexOf(`--${n}`); return i >= 0 ? args.splice(i, n === "primero" ? 1 : 2)[1] ?? true : null; };
  const dod = flag("dod"), puesto = flag("puesto"), padre = flag("padre"), primero = flag("primero");
  const [titulo] = args;
  if (!titulo) throw new Error('Uso: objetivo "<título>" [--dod "<texto>"] [--puesto <id>] [--padre <id>] [--primero]');
  const d = await leerOS();
  if (puesto && !d.puestos.some((p) => p.id === puesto)) throw new Error(`No hay puesto "${puesto}".`);
  if (padre && !d.objetivos.some((o) => o.id === padre)) throw new Error(`No hay objetivo "${padre}".`);
  const o = { id: nuevoId(), titulo, dod: typeof dod === "string" ? dod : "", padre: padre ?? null, puesto: puesto ?? null, estado: "activo" };
  d.objetivos = primero ? [o, ...d.objetivos] : [...d.objetivos, o];
  await guardarOS(d);
  console.log(`Objetivo ${o.id} creado.`);
} else if (cmd === "kr" || cmd === "kpi" || cmd === "real" || cmd === "iniciativa") {
  const flag = (n) => { const i = args.indexOf(`--${n}`); return i >= 0 ? args.splice(i, 2)[1] : null; };
  const base = flag("base"), unidad = flag("unidad"), objetivoId = flag("objetivo"), krNombre = flag("kr");
  const [puesto, nombre, valor] = args;
  const d = await leerOS();
  const p = d.puestos.find((x) => x.id === puesto);
  if (!p || !nombre) throw new Error(`Uso: ${cmd} <puesto> "<nombre>" ${cmd === "iniciativa" ? '[--kr "<KR>"]' : "<número>"}`);
  const objs = d.objetivos.filter((o) => o.puesto === p.id && o.estado === "activo");
  const obj = objetivoId ? d.objetivos.find((o) => o.id === objetivoId) : objs[0];
  const krsPuesto = d.krs.filter((k) => objs.some((o) => o.id === k.objetivo) || k.responsable === p.id);
  const buscarKr = (n) => krsPuesto.find((k) => k.nombre.toLowerCase() === n.toLowerCase());
  if (cmd === "iniciativa") {
    if (!obj) throw new Error(`${p.sigla} no tiene objetivo activo: crearlo primero con objetivo ... --puesto ${p.id}`);
    const kr = krNombre ? buscarKr(krNombre) : null;
    if (krNombre && !kr) throw new Error(`${p.sigla} no tiene el KR "${krNombre}".`);
    const i = { id: nuevoId(), objetivo: obj.id, kr: kr?.id ?? null, nombre, responsable: p.id, estado: "activa" };
    d.iniciativas.push(i);
    await guardarOS(d);
    console.log(`Iniciativa ${i.id} creada en ${p.sigla}.`);
  } else {
    const n = Number(valor);
    if (!Number.isFinite(n)) throw new Error(`Uso: ${cmd} <puesto> "<nombre>" <número>`);
    let k = buscarKr(nombre);
    if (cmd === "real") {
      if (!k) throw new Error(`${p.sigla} no tiene el KR "${nombre}". KRs: ${krsPuesto.map((x) => x.nombre).join(", ") || "ninguno"}`);
      k.actual = n;
      k.historial = [...k.historial, { fecha: ahora().slice(0, 10), valor: n }].slice(-60);
    } else {
      if (!obj) throw new Error(`${p.sigla} no tiene objetivo activo: crearlo primero con objetivo ... --puesto ${p.id}`);
      if (!k) d.krs.push((k = { id: nuevoId(), objetivo: obj.id, nombre, unidad: "", base: null, meta: null, actual: null, responsable: p.id, historial: [] }));
      k.meta = n;
      if (base !== null) k.base = Number(base);
      if (unidad !== null) k.unidad = unidad;
    }
    await guardarOS(d);
    console.log(`${p.sigla} · ${k.nombre}: ${k.base ?? 0} → ${k.meta ?? "-"} ${k.unidad} (actual ${k.actual ?? "sin medir"}; ${estadoKR(d, k)}).`);
  }
} else if (cmd === "reporte") {
  const d = await leerOS();
  // reporte --archivo <json> con { resumen, areas: [{ puesto, anda, trabado }], decisiones: [{ que, recomienda, tarea }] }
  const iA = args.indexOf("--archivo");
  if (iA >= 0) {
    const j = JSON.parse(readFileSync(args[iA + 1], "utf8"));
    d.reporte = { fecha: hoy(), texto: "", resumen: String(j.resumen ?? ""), areas: Array.isArray(j.areas) ? j.areas : [], decisiones: Array.isArray(j.decisiones) ? j.decisiones : [], gastos: String(j.gastos ?? "") };
  } else d.reporte = { fecha: hoy(), texto: args[0] ?? "", resumen: "", areas: [], decisiones: [], gastos: "" };
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
  console.log(readFileSync(fileURLToPath(import.meta.url), "utf8").split("\n").slice(1, 26).join("\n"));
}
