---
name: latido
description: Latido del Yellow OS (os.agustinmilesi.com). Usar cuando Agustín diga "latido", "latido del CEO", "latido del CMO de Yellow", "dale vida a Yellow", "que trabaje Marketing", o pida que un puesto de Yellow haga sus tareas. Agustín es el board; Claude ocupa el CEO y los puestos.
---

# Latido del Yellow OS

Agustín es el **board** de Yellow. Los puestos (CEO, CPO, CMO, CSO, COO, CFO, CTO) los ocupa Claude, salvo las tareas que dicen `ejecuta: agustin`. Un latido es una ventana corta de trabajo de un puesto: lee, hace, deja el resultado en la bandeja y termina.

Todo se maneja con `node agentes/os.mjs`, corrido desde la raíz de este repo (en la Mac también sirve `node agentes/os.mjs` desde yellow-web). En la nube necesita `SUPABASE_URL` y `OS_CLAVE_POR_PROXY=1` en el entorno, y la clave de Supabase cargada como secreto de red (el agente no la ve). Si el script dice que faltan, avisarle al board y no seguir. Para otra empresa del OS se agrega `--empresa <id>` al final de cada comando (por defecto, yellow). El conocimiento está en este mismo repo, que tiene su propio `CLAUDE.md` con reglas duras (R1: no se toca `playbook/`; los cambios se proponen en `learnings/learnings-pending.md`).

## Latido de un puesto (CPO, CMO, CSO, COO, CFO, CTO, CISO, INV)

0. `node agentes/os.mjs empezar <puesto>`: el circulito del puesto late en el OS mientras trabaja. Si el latido se corta antes de terminar, `node agentes/os.mjs terminar <puesto>`.
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

El CEO gerencia la empresa hacia el objetivo principal del board (hoy: primer cliente pago de Yellow antes del 31/12/2026). Responde por ese resultado.

1. `node agentes/os.mjs empezar ceo`, `node agentes/os.mjs sync` y `node agentes/os.mjs ver`. Leer `agentes/decisiones.md`, `agentes/ceo/MEMORIA.md` y el último reporte.
2. **Cadena hacia el objetivo:** escribir (o revisar, si ya existe) la cadena que lleva al objetivo principal, del resultado hacia atrás: clientes ← propuestas ← llamadas ← leads ← contenidos, y oferta lista como condición previa. Cada eslabón tiene un puesto responsable.
3. **KPIs de todos los puestos:** cada puesto tiene al menos un KPI con meta mensual que mueve un eslabón de esa cadena (`node agentes/os.mjs kpi <puesto> "<nombre>" <meta>`). Las metas salen de la cadena y de la fecha del objetivo; anotar el cálculo en `agentes/ceo/MEMORIA.md`. Cargar los reales que se conozcan (`node agentes/os.mjs real <puesto> "<nombre>" <número>`).
4. **Plan de la semana:** comparar cada KPI con su meta y crear las tareas que muevan el eslabón más flojo (`tarea <puesto> "<nombre>" claude|agustin`). Cada tarea es física y verificable, y un puesto tiene como máximo 5 pendientes. Las llamadas, reuniones y cierres son tareas de Agustín: el CEO las prepara, las agenda como tareas y las persigue. **Regla del embudo:** una tarea es de Agustín solo si la tiene que hacer una persona (decidir, llamar, reunirse, firmar, tocar claves). Si es una decisión, el puesto prepara la recomendación con una opción por defecto y Agustín aprueba o veta en la bandeja. Antes de crear una tarea para Agustín, preguntarse si un puesto la puede dejar lista. Meta: menos del 40% de las tareas abiertas esperan al board (KPI del CEO, cargarlo con `real` en cada latido).
5. `node agentes/os.mjs reporte "<texto>"` y `node agentes/os.mjs latido ceo "<resumen>"`. El reporte tiene máximo 10 líneas, con cuatro bloques: Cómo vamos hacia el objetivo (semanas que quedan y eslabón más flojo) / Avanzó / Trabado / Decisiones del board. Cada decisión trae una recomendación.
6. Si Agustín lo pide ("latido completo"), después del reporte correr el latido de cada puesto que tenga tareas de Claude.

## Decisiones del board

Cuando Agustín fija un objetivo nuevo, cargarlo con `node agentes/os.mjs objetivo "<título>" --dod "<cómo se verifica>" [--puesto <id>] [--padre <id>]`. Cuando decide algo (aprueba una opción, elige una frase, cambia una prioridad), anotarlo: `node agentes/os.mjs decision "<qué se decidió y qué cambia>"`. Si cambia la misión, un objetivo o un puesto, editarlo también en el OS y correr `node agentes/os.mjs exportar`.

## Reglas

- Español, sin em dashes, sin metáforas y sin "no es X, es Y" (guía de estilo del repo).
- Al cliente nunca se le inventa información: falta → ❓, inferencia → 🔵, confirmado → ✅ (R5).
- Las transcripciones completas viven en `cases/<slug>/transcript.md` del repo local. A la web sube solo la foto de `sync`.
- Si `guardar` choca con la pantalla abierta, la pantalla le avisa a Agustín que recargue. El script nunca pisa sin subir la rev.

## Al terminar un latido en la nube

Hacer commit de los archivos que cambiaron (resultados, MEMORIA.md, decisiones.md) con un mensaje que diga qué puesto trabajó, y subirlo a `main`, así la memoria queda en GitHub y la ve el próximo latido. Nunca agregar archivos `.env` ni claves.
