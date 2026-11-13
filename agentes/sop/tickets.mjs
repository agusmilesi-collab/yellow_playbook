#!/usr/bin/env node
// Tickets de los clientes de Yellow (hoy, Campos HR): leer, cambiar el estado y conversar.
// Lo usa Soporte (Tony). Corre igual en la Mac y en la nube.
//
//   node agentes/sop/tickets.mjs abiertos              tickets Nuevo, En curso y Bloqueado, con su último mensaje
//   node agentes/sop/tickets.mjs ver <N>               un ticket con toda su conversación
//   node agentes/sop/tickets.mjs estado <N> "<estado>" Nuevo | En curso | Bloqueado | Hecho | Descartado
//   node agentes/sop/tickets.mjs mensaje <N> "<texto>" escribe en la conversación, firmado "Tony · Soporte Yellow"
//
// Credenciales:
// - En la Mac, las lee de ~/Documents/camposhr-site/.env.local, solo dentro de este proceso.
//   Así nunca quedan cargadas en la terminal (si quedan, el script del OS de Yellow se conecta a la base equivocada).
// - En la nube: CAMPOS_SUPABASE_URL y CAMPOS_CLAVE_POR_PROXY=1. La clave la agrega el proxy como secreto de red
//   y el agente nunca la ve.
//
// Nunca copiar datos de candidatos o pacientes a nada de Yellow: el caso se nombra por el número de ticket.

import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { homedir } from "node:os";

// En la nube la salida pasa por un proxy con su propio certificado (igual que agentes/os.mjs).
if (process.env.HTTPS_PROXY || process.env.https_proxy) {
  const ca = [process.env.NODE_EXTRA_CA_CERTS, process.env.SSL_CERT_FILE, "/root/.ccr/ca-bundle.crt"].find((f) => f && existsSync(f));
  if (process.env.NODE_USE_ENV_PROXY !== "1" || (ca && process.env.NODE_EXTRA_CA_CERTS !== ca)) {
    const { spawnSync } = await import("node:child_process");
    const env = { ...process.env, NODE_USE_ENV_PROXY: "1", ...(ca ? { NODE_EXTRA_CA_CERTS: ca } : {}) };
    const r = spawnSync(process.execPath, process.argv.slice(1), { stdio: "inherit", env });
    process.exit(r.status ?? 1);
  }
}

const FIRMA = "Tony · Soporte Yellow";
const ESTADOS = ["Nuevo", "En curso", "Bloqueado", "Hecho", "Descartado"];

function credenciales() {
  if (process.env.CAMPOS_SUPABASE_URL && process.env.CAMPOS_CLAVE_POR_PROXY === "1") return { url: process.env.CAMPOS_SUPABASE_URL, clave: null };
  const archivo = join(homedir(), "Documents/camposhr-site/.env.local");
  if (!existsSync(archivo)) throw new Error("Faltan CAMPOS_SUPABASE_URL y CAMPOS_CLAVE_POR_PROXY=1 (nube) o ~/Documents/camposhr-site/.env.local (Mac).");
  const env = Object.fromEntries(readFileSync(archivo, "utf8").split("\n").map((l) => l.match(/^\s*([A-Z0-9_]+)\s*=\s*"?([^"\n]*)"?\s*$/)).filter(Boolean).map((m) => [m[1], m[2]]));
  if (!env.SUPABASE_URL || !env.SUPABASE_SERVICE_KEY) throw new Error("El .env.local de Campos no trae SUPABASE_URL y SUPABASE_SERVICE_KEY.");
  return { url: env.SUPABASE_URL, clave: env.SUPABASE_SERVICE_KEY };
}

const { url, clave } = credenciales();
const H = { "Content-Type": "application/json", Prefer: "return=representation", ...(clave ? { apikey: clave, Authorization: `Bearer ${clave}` } : {}) };

async function pedir(ruta, opciones = {}) {
  const r = await fetch(`${url}/rest/v1/${ruta}`, { ...opciones, headers: H });
  if (!r.ok) throw new Error(`La base de Campos respondió ${r.status}: ${await r.text()}`);
  return r.json();
}

const corto = (iso) => iso.slice(0, 16).replace("T", " ");
const [cmd, numero, valor] = process.argv.slice(2);
const n = Number(numero);

if (cmd === "abiertos") {
  const filas = await pedir("tickets?estado=in.(Nuevo,En%20curso,Bloqueado)&select=numero,pide,estado,prioridad,donde,texto,created_at,ticket_mensajes(autor,texto,created_at)&order=numero.asc");
  if (!filas.length) console.log("No hay tickets abiertos.");
  for (const t of filas) {
    const ms = [...(t.ticket_mensajes ?? [])].sort((a, b) => a.created_at.localeCompare(b.created_at));
    const ult = ms[ms.length - 1];
    const espera = !ult ? "sin mensajes" : ult.autor === FIRMA ? "último mensaje de Soporte (espera al cliente)" : `último mensaje del cliente (${ult.autor}): responde Soporte`;
    console.log(`#${t.numero} [${t.estado} · ${t.prioridad}] pide ${t.pide} · ${corto(t.created_at)} · ${espera}\n   ${t.texto.replace(/\s+/g, " ").slice(0, 300)}`);
  }
} else if (cmd === "ver" && n > 0) {
  const [t] = await pedir(`tickets?numero=eq.${n}&select=*,ticket_mensajes(autor,texto,created_at)`);
  if (!t) throw new Error(`No hay ticket #${n}.`);
  console.log(`#${t.numero} [${t.estado} · ${t.prioridad}] pide ${t.pide} · ${corto(t.created_at)}${t.donde ? ` · dónde: ${t.donde}` : ""}\n\n${t.texto}\n\nConversación:`);
  const ms = [...(t.ticket_mensajes ?? [])].sort((a, b) => a.created_at.localeCompare(b.created_at));
  if (!ms.length) console.log("(sin mensajes)");
  for (const m of ms) console.log(`- ${corto(m.created_at)} ${m.autor}: ${m.texto}`);
} else if (cmd === "estado" && n > 0 && ESTADOS.includes(valor)) {
  const [t] = await pedir(`tickets?numero=eq.${n}`, { method: "PATCH", body: JSON.stringify({ estado: valor }) });
  console.log(`Ticket #${t.numero}: ${t.estado}.`);
} else if (cmd === "mensaje" && n > 0 && valor?.trim()) {
  await pedir("ticket_mensajes", { method: "POST", body: JSON.stringify({ numero: n, autor: FIRMA, texto: valor.trim() }) });
  console.log(`Mensaje escrito en el ticket #${n}.`);
} else {
  console.log('Uso: tickets.mjs abiertos | ver <N> | estado <N> "<Nuevo|En curso|Bloqueado|Hecho|Descartado>" | mensaje <N> "<texto>"');
  process.exit(1);
}
