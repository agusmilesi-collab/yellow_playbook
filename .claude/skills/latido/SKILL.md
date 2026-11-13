---
name: latido
description: Latido del Yellow OS (os.agustinmilesi.com). Usar cuando Agustín diga "latido", "latido del CEO", "latido del CMO de Yellow", "dale vida a Yellow", "que trabaje Marketing", o pida que un puesto de Yellow haga sus tareas. Agustín es el board; Claude ocupa el CEO y los puestos.
---

# Latido del Yellow OS

Agustín es el **board** de Yellow. Los puestos los ocupa Claude, salvo las tareas que dicen `ejecuta: agustin`. Un latido es una ventana corta de trabajo de un puesto: lee, hace, deja el resultado en la bandeja y termina.

Todo se maneja con `node agentes/os.mjs` desde la raíz de este repo. En la nube necesita `SUPABASE_URL` y `OS_CLAVE_POR_PROXY=1`; si el script dice que faltan, avisarle al board y no seguir. Otra empresa: `--empresa <id>` al final de cada comando.

**Si el latido es del CEO, seguir `ceo.md` (en esta misma carpeta) en vez de esta página.** Los jueves, el CTO y el CFO leen además `semanal.md`.

## Latido de un puesto

Cada paso cuesta: en cada uno se reenvía todo lo leído. Juntar comandos en un solo Bash (`&&`) y no releer lo que ya trajo `ver`.

1. `node agentes/os.mjs empezar <puesto> <tareaId> && node agentes/os.mjs ver <puesto>`. Nunca prender el latido sin una tarea En curso. `ver` trae el DPT (misión, límites, modelo), OKRs, tareas con su detalle y Listo cuando, entregas para revisar, traspasos, la ficha, la memoria del puesto y las decisiones del board: no hace falta leer esos archivos aparte. Si avisa que agotó los latidos del mes, pedir autorización al board. Si `empezar` frena por presupuesto de IA agotado, no trabajar: avisarle al board y terminar. Solo con autorización del board se usa `--autorizado`. Si el latido se corta, `terminar <puesto>`.
2. **OKRs:** el puesto traduce el objetivo de la empresa en su objetivo, 2 a 4 KRs (línea de base → meta) e iniciativas. Si falta algo, crearlo (`kr <puesto> "<nombre>" <meta> --base N --unidad "<u>"`, `iniciativa <puesto> "<nombre>" --kr "<KR>"`) y avisar en el cierre. Cargar los KRs medibles con `real <puesto> "<KR>" <número>`.
3. **Primero, las entregas del equipo** (`paraRevisar`): contra su Listo cuando, `aprobar <id>`, `devolver <id> "<qué cambiar>"` o `escalar <id>` si necesita al board.
4. **Tareas con `ejecuta: claude`** (pendiente, curso o devuelta; la devuelta trae `devolucion` y va primero). Una por vez: `estado <id> curso`, hacerla, entregar.
5. El resultado es un archivo en este repo (`agentes/<puesto>/`, `cases/<slug>/` o `learnings/`, nunca `playbook/`). Después `entregar <id> "<resumen en 2-4 líneas>" "<ruta>"`; lo revisa el jefe. Agregar `--board` solo si necesita una decisión del board (opciones, cambio de puesto, oferta o precio, gastar plata, tocar claves), con la opción recomendada en el resumen.
6. Respetar los `limites`: nada se publica, envía, factura ni cobra.
7. Lo que el puesto siguiente tiene que recibir: `transito <traspasoId> agregar "<qué>"`.
8. En `agentes/<puesto>/MEMORIA.md`, una línea por hecho aprendido (fecha y fuente), solo lo que evita volver a preguntar.
9. `latido <puesto> "<qué hizo, en una o dos líneas>"` y cerrar con un mensaje corto: qué entregó, qué quedó para revisar, qué tareas de Agustín siguen abiertas.

## Tareas nuevas (test de una tarea)

Si una tarea no pasa las cuatro, es una iniciativa y se parte. La parte el Chief dueño de la iniciativa.

1. Un solo entregable (si el nombre une dos cosas con "y", son dos).
2. Primer paso obvio.
3. Entra en un latido.
4. `--dod "<qué archivo se entrega y cuándo está terminado>"` (obligatorio). Nombre de hasta 150 caracteres; las instrucciones van en `--detalle`. Siempre `--iniciativa <id>`.

Una tarea es de Agustín solo si la tiene que hacer una persona (decidir, llamar, reunirse, firmar, tocar claves).

## Reglas

- Español, sin em dashes, sin metáforas y sin "no es X, es Y".
- Cada tarea tiene un código legible (`codigo` en `ver`, por ejemplo CMO003). En reportes, resúmenes de entrega, memorias y mensajes, nombrá la tarea como #CMO003 y su nombre, nunca con el id interno. Los comandos aceptan el código o el id.
- Nunca inventar datos del cliente: falta → ❓, inferencia → 🔵, confirmado → ✅.
- Los entregables se leen en el celular: tablas de 2 columnas como máximo; para comparar opciones, un subtítulo por opción con una lista debajo; el encabezado (puesto, fecha, tarea) como lista.
- Datos de pacientes o clientes confidenciales nunca van al repo, a tareas ni a reportes.
- En la nube, al terminar: commit de los archivos cambiados (resultados, MEMORIA.md) con el puesto en el mensaje, y push a `main`. Nunca `.env` ni claves.
