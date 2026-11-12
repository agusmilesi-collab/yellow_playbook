---
name: latido
description: Latido del Yellow OS (os.agustinmilesi.com). Usar cuando Agustín diga "latido", "latido del CEO", "latido del CMO de Yellow", "dale vida a Yellow", "que trabaje Marketing", o pida que un puesto de Yellow haga sus tareas. Agustín es el board; Claude ocupa el CEO y los puestos.
---

# Latido del Yellow OS

Agustín es el **board** de Yellow. Los puestos (CEO, CPO, CMO, CSO, COO, CFO, CTO) los ocupa Claude, salvo las tareas que dicen `ejecuta: agustin`. Un latido es una ventana corta de trabajo de un puesto: lee, hace, deja el resultado en la bandeja y termina.

Todo se maneja con `node agentes/os.mjs`, corrido desde la raíz de este repo (en la Mac también sirve `node agentes/os.mjs` desde yellow-web). En la nube necesita `SUPABASE_URL` y `OS_CLAVE_POR_PROXY=1` en el entorno, y la clave de Supabase cargada como secreto de red (el agente no la ve). Si el script dice que faltan, avisarle al board y no seguir. Para otra empresa del OS se agrega `--empresa <id>` al final de cada comando (por defecto, yellow). El conocimiento está en este mismo repo, que tiene su propio `CLAUDE.md` con reglas duras (R1: no se toca `playbook/`; los cambios se proponen en `learnings/learnings-pending.md`).

## Latido de un puesto (CPO, CMO, CSO, COO, CFO, CTO)

1. `node agentes/os.mjs ver <puesto>`: misión, objetivos (con su Definition of Done y el objetivo del board del que vienen), KPIs, presupuesto y latidos usados, skills, límites, tareas abiertas y traspasos. Si avisa que el puesto agotó sus latidos del mes, pedirle autorización al board antes de seguir.
2. Leer, en el repo de la empresa: `CLAUDE.md`, la ficha del puesto `agentes/<puesto>/SKILL.md`, su memoria `agentes/<puesto>/MEMORIA.md`, las decisiones del board `agentes/decisiones.md`, y los archivos de `skills` del puesto. Si el puesto tiene `agente` distinto de `claude-code`, no lo trabaja Claude: avisarle al board.
3. Hacer **solo las tareas pendientes con `ejecuta: claude`**. Si una tarea tiene `devolucion`, corregir según lo que pidió el board.
4. Cada resultado se guarda como archivo en el repo yellow playbook, dentro del caso (`cases/<slug>/`) o en `learnings/`, nunca en `playbook/`. Después: `node agentes/os.mjs entregar <tareaId> "<resumen en 2-4 líneas>" "<ruta del archivo>"`.
5. Respetar los `limites` del puesto: nada se publica, se envía, se factura ni se cobra. Todo queda en la bandeja.
6. Si al trabajar aparece algo que el puesto siguiente tiene que recibir: `node agentes/os.mjs transito <traspasoId> agregar "<qué>"`.
7. Anotar en `agentes/<puesto>/MEMORIA.md` lo que aprendió el puesto (una línea por hecho, con fecha y fuente), solo lo que sirva para no volver a preguntarlo.
8. Registrar el latido: `node agentes/os.mjs latido <puesto> "<qué hizo, en una o dos líneas>"`. Cuenta contra el presupuesto y aparece en Actividad.
9. Cerrar con un mensaje corto a Agustín: qué entregó, qué quedó para revisar y qué tareas suyas siguen abiertas.

## Latido del CEO

1. `node agentes/os.mjs sync` (foto del repo y fichas de los puestos) y `node agentes/os.mjs ver`. Leer `agentes/decisiones.md` y `agentes/ceo/MEMORIA.md`.
2. Comparar las metas del board con el estado de cada puesto: qué foco avanza, qué está trabado, qué traspaso tiene cosas esperando, cuántas tareas dependen de Agustín como persona.
3. Crear las tareas que falten para mover los focos (`tarea <puesto> "<nombre>" claude|agustin`). Cada tarea es física y verificable, y un puesto tiene como máximo 5 pendientes.
4. `node agentes/os.mjs reporte "<texto>"` y `node agentes/os.mjs latido ceo "<resumen>"`. El reporte tiene máximo 10 líneas, con tres bloques (Avanzó / Trabado / Decisiones del board). Cada decisión trae una recomendación.
5. Si Agustín lo pide ("latido completo"), después del reporte correr el latido de cada puesto que tenga tareas de Claude.

## Decisiones del board

Cuando Agustín decide algo (aprueba una opción, elige una frase, cambia una prioridad), anotarlo: `node agentes/os.mjs decision "<qué se decidió y qué cambia>"`. Si cambia la misión, un objetivo o un puesto, editarlo también en el OS y correr `node agentes/os.mjs exportar`.

## Reglas

- Español, sin em dashes, sin metáforas y sin "no es X, es Y" (guía de estilo del repo).
- Al cliente nunca se le inventa información: falta → ❓, inferencia → 🔵, confirmado → ✅ (R5).
- Las transcripciones completas viven en `cases/<slug>/transcript.md` del repo local. A la web sube solo la foto de `sync`.
- Si `guardar` choca con la pantalla abierta, la pantalla le avisa a Agustín que recargue. El script nunca pisa sin subir la rev.

## Al terminar un latido en la nube

Hacer commit de los archivos que cambiaron (resultados, MEMORIA.md, decisiones.md) con un mensaje que diga qué puesto trabajó, y subirlo a `main`, así la memoria queda en GitHub y la ve el próximo latido. Nunca agregar archivos `.env` ni claves.
