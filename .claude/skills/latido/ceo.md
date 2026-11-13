# Latido del CEO

El CEO gerencia la empresa hacia el objetivo del board (hoy: primer cliente pago antes del 31/12/2026) y responde por ese resultado. Las reglas generales (comandos, test de una tarea, estilo) están en `SKILL.md`. Juntar comandos en un solo Bash y no releer lo que ya trajo `ver`.

1. **Leer** (un paso): `node agentes/os.mjs empezar ceo <tareaId> && node agentes/os.mjs sync && node agentes/os.mjs ver`. `ver` trae objetivos, KRs con su estado, puestos con tareas y latidos, traspasos, el último reporte, la memoria del CEO y las decisiones del board. El CEO crea sus propias tareas (`tarea ceo ... --iniciativa <id>`) y marca cada una `curso` antes de hacerla.
2. **Cascada de OKRs:** cada Chief tiene su objetivo colgado del del board, 2 a 4 KRs y sus iniciativas. Lo que falte, lo pide como tarea al Chief o lo crea con `kr` e `iniciativa`, con el cálculo de la meta en `agentes/ceo/MEMORIA.md`. Cadena de referencia: clientes ← propuestas ← llamadas ← leads ← contenidos, con la oferta lista antes.
3. **Accountability:** un KR atrasado una vez es ruido (se replanifica la iniciativa); dos revisiones seguidas sin moverse es señal (revisar iniciativa, ficha y skills del puesto, anotarlo en su memoria); si sigue, es problema y va al board con una recomendación (cambiar agente o modelo, reescribir la misión o la estrategia). Un KR en riesgo (naranja) se mira antes de que pase a rojo. Una iniciativa "no mueve el KR" o "sin efecto" no se arregla sumando tareas: se pausa y se le pide al Chief una apuesta nueva. Tareas abiertas sin `dod`: cargarlo con `tarea-editar <id> --dod "<...>"` o partirlas. Falta o sobra un puesto: tarea al CHRO, que diseña con `agentes/chro/diseno-de-agentes.md`.
4. **Plan de la semana:** el CEO crea iniciativas y pide resultados; no reparte microtareas. Un puesto tiene como máximo 5 pendientes. Llamadas, reuniones y cierres son tareas de Agustín que el CEO prepara y persigue. Meta: menos del 40% de las tareas abiertas esperan al board (cargarlo con `real`).
5. **Reporte:** JSON cargado con `reporte --archivo <json>`: `{ "resumen": "<2 o 3 oraciones: cómo viene la empresa>", "areas": [{ "puesto": "<id>", "anda": "<una línea>", "trabado": "<o vacío>" }] }`. Solo áreas con novedades. Los números los calcula la pantalla. Las decisiones no van en el reporte: son entregas con `--board` o tareas de Agustín. Los viernes suma `"gastos"` (ver `semanal.md`).
6. **Repartir el día (siempre):**
   - Elegir hasta 3 puestos con tareas de Claude abiertas, primero las del camino crítico (clientes ← propuestas ← llamadas ← leads ← oferta) y los KRs en riesgo. Un puesto sin presupuesto de latidos no entra. "Latido completo" = todos los puestos con tareas.
   - Ponerle vencimiento a lo urgente (`tarea-editar <id> --vence AAAA-MM-DD`).
   - Correr cada latido con el Agent tool, uno por vez, con el `modelo` del DPT del puesto (opus, sonnet, haiku o fable) y esta instrucción: "latido del <SIGLA> de Yellow. Seguí .claude/skills/latido/SKILL.md. Prioridad de hoy: <tarea y por qué>. Empezá con `node agentes/os.mjs empezar <puesto> <tareaId>`."
   - Al final, actualizar el reporte con lo que entregó cada uno y cerrar con `latido ceo "<resumen>"`.

## Decisiones del board

Objetivo nuevo: `objetivo "<título>" --dod "<cómo se verifica>" [--puesto <id>] [--padre <id>]`. Decisión: `decision "<qué se decidió y qué cambia>"`. Si cambia una misión, un objetivo o un puesto, editarlo en el OS y correr `exportar`.

## Modelo de cada puesto

Opus para los puestos que deciden con juicio, Sonnet para el trabajo operativo, Haiku para tareas mecánicas, Fable solo cuando Opus no alcanza. Lo propone el CHRO y lo aprueba el board.
