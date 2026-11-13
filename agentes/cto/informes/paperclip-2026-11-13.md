# Paperclip: qué resolvieron que el Yellow OS no tiene

- **Puesto:** CTO
- **Tarea:** 0qbap0dr
- **Fecha:** 2026-11-13
- **Para:** board (decisión)

Referencias: ✅ leído hoy en la fuente oficial · 🔵 inferencia del CTO · ❓ falta el dato.

## Resumen

Paperclip es una plataforma de código abierto (licencia MIT, Paperclip Labs, Inc.) que organiza equipos de agentes de IA con tickets, presupuestos y aprobaciones. ✅ Está hecha para equipos técnicos: Node 24, PostgreSQL, adaptadores a Codex, Cursor, Gemini CLI y otros. ✅

Recomendación del CTO (🔵): no reutilizar su código ni cargar Yellow en Paperclip. Copiar 6 ideas chicas que cuestan pocas líneas en nuestro OS y no agregan pantallas de configuración. Ignorar el resto.

Por qué no reutilizar código: el OS de Yellow es una app Next.js sobre un documento en Supabase (3.400 líneas entre `components/os` y `lib/os`). Paperclip necesita su propio servidor y base. Traerlo agrega justo la complejidad que el board no quiere para un cliente que no es técnico.

Qué ya tenemos de lo que ofrece Paperclip (🔵, revisado en `lib/os/modelo.ts` y `scripts/os.mjs`):

- Organigrama con jefes y revisión de entregas por el jefe (aprobar, devolver, escalar).
- Bandeja de decisiones del board.
- Objetivos, KRs e iniciativas con historial.
- Traspasos entre puestos con criterio de "listo cuando".
- Tope de latidos por mes por puesto y registro de costo por latido en USD.
- Fichas de puesto exportables (`exportar`, `puesto crear`).

## Lista ordenada por ahorro

El ahorro se mide en trabajo del board o gasto de IA que evita. Primero lo que más ahorra.

### 1. Corte automático de gasto (hard stop de presupuesto)

- **Qué es:** cada agente y la empresa tienen un tope mensual en USD. Al 80% avisa y al 100% pausa solo ese agente hasta que el board suba el tope o llegue el día 1 (UTC). ✅ docs.paperclip.ing/guides/day-to-day/costs/
- **Qué nos ahorra:** hoy el campo `usdMes` existe pero está en `null` en el CTO y en los puestos de la plantilla de `modelo.ts` y nada corta el gasto. Con clientes que pagan su propia IA, un corte evita sorpresas en su tarjeta.
- **Decisión:** copiar la idea. Que `empezar` rechace el latido si el costo del mes de ese puesto superó `usdMes`, y avise al 80%.

### 2. Tope de rondas de devolución

- **Qué es:** si un revisor devuelve la misma entrega 3 veces seguidas, la entrega pasa a una persona y deja de rebotar entre agentes. El tope se puede cambiar de 1 a 50. ✅ docs.paperclip.ing/guides/power/execution-policy/
- **Qué nos ahorra:** latidos gastados en ciclos devolver, corregir, devolver. Cada ciclo cuesta un latido (hoy USD 0,75 de promedio).
- **Decisión:** copiar la idea. Contar devoluciones por tarea; a la tercera, `escalar` automático al board.

### 3. Comentario obligatorio al cerrar

- **Qué es:** toda ejecución atada a una tarea debe dejar un comentario. Si no lo deja, el agente se despierta una vez más; si sigue sin comentar, se registra la falla. ✅ misma página.
- **Qué nos ahorra:** entregas vacías que el board abre para nada. Hoy `entregar` acepta cualquier valor, incluso sin archivo (`scripts/os.mjs`, línea 409).
- **Decisión:** copiar la idea en una línea. `entregar` rechaza si el archivo del `dod` no existe en el repo.

### 4. Vigilante de trabajo trabado

- **Qué es:** un agente revisa tareas que quedaron detenidas sin camino de salida (bloqueo mal leído, "listo" sin prueba) y crea o destraba trabajo. Solo se vuelve a activar si el estado cambia. Cada revisión cuesta una ejecución normal. ✅ docs.paperclip.ing/experimental/task-watchdogs/
- **Qué nos ahorra:** tareas olvidadas en `curso` o `revisar`. Hoy el CEO las detecta leyendo el tablero.
- **Decisión:** copiar la idea, sin agente extra. Una regla del latido del CEO: listar tareas en `curso` o `revisar` hace más de 3 días o vencidas (`fecha`). Cero costo de IA.

### 5. Rutinas (tareas que se repiten solas)

- **Qué es:** un trabajo repetido con disparador por horario o por webhook; cada disparo crea una tarea con dueño. Si llega otro disparo mientras corre el anterior, se une en uno solo. Si hubo caída, no acumula ejecuciones perdidas. ✅ docs.paperclip.ing/guides/projects-workflow/routines/
- **Qué nos ahorra:** hoy Agustín tiene que decir "latido" para que trabaje cada puesto, y la revisión de los jueves es una iniciativa escrita en texto. Una rutina crea la tarea sin que nadie la acuerde.
- **Decisión:** copiar la idea mínima. Campo `repite: semanal|mensual` en la tarea; al aprobarla, el OS crea la siguiente. Sin cron ni servidor.

### 6. Cola de decisiones con opciones

- **Qué es:** una sola lista ordenada de lo que necesita una persona. Un agente que no puede decidir propone una pregunta con hasta 8 opciones, cada una con su efecto exacto. Se responde con un clic. Las propuestas sin respuesta vencen a los 7 días. ✅ docs.paperclip.ing/guides/day-to-day/decisions/
- **Qué nos ahorra:** idas y vueltas del board. Hoy la decisión va en el texto del resumen y el board contesta escribiendo (la tarea vbm88toh volvió con una devolución larga).
- **Decisión:** copiar la idea. `entregar --board` acepta opciones numeradas y la bandeja las muestra como botones. Es una mejora de pantalla, sin configuración.

### 7. Paquete de empresa para instalar un cliente

- **Qué es:** exportar agentes, habilidades, rutinas y tareas a una carpeta de texto (diffable en Git) sin los secretos, e importarla como empresa nueva con vista previa. Los agentes importados arrancan pausados. ✅ docs.paperclip.ing/guides/power/export-import/
- **Qué nos ahorra:** el alta de cada cliente (decisión del 13/11: cuenta Gmail, Vercel Hobby, Supabase Free). Hoy `puesto crear` da de alta de a un puesto.
- **Decisión:** copiar la idea. Un comando `plantilla exportar|importar <catalogo>` que cargue el equipo del catálogo (Administrador, Seguimiento, Marketing) en la empresa nueva, con agentes pausados hasta que el cliente active cada uno.

### 8. Conector de Telegram

- **Qué es:** un bot de Telegram vinculado a un agente. Cada conversación nueva crea una tarea y las respuestas vuelven al mismo chat. Requiere una dirección HTTPS pública. Cualquiera que encuentre el bot puede escribirle; por defecto los desconocidos quedan como invitados restringidos. ✅ docs.paperclip.ing/connectors/telegram/
- **Qué nos ahorra:** el cliente no tiene que abrir el OS para pedir algo. No se mide el ahorro (❓).
- **Decisión:** ignorar por ahora. El board dijo "Telegram solo si es gratis": la API de bots es gratis, pero hace falta un servidor receptor y control de acceso por cliente. Reevaluar cuando haya 2 clientes y el primero lo pida.

### 9. Skills versionadas con Skill Studio

- **Qué es:** habilidades con carpeta `SKILL.md`, versión fijada a un commit de GitHub, y escritura segura que falla si alguien cambió el archivo (`expectedVersionId`). La documentación consultada no describe cómo funciona Skill Studio ni cómo restaurar una versión anterior. ✅ docs.paperclip.ing/reference/skills/
- **Qué nos ahorra:** poco. Nuestras skills ya son `SKILL.md` y viven en un repo con historial.
- **Decisión:** ignorar. Copiar solo la idea de que un latido registre con qué versión de la skill trabajó, si el CTO la necesita para medir costo.

### 10. Adaptadores de agentes (Codex, Cursor, Gemini CLI, Hermes, OpenClaw y otros)

- **Qué es:** conexión a 10 o más entornos de agentes. ✅ github.com/paperclipai/paperclip
- **Qué nos ahorra:** nada hoy. Yellow corre con Claude Code y los clientes pagan la API de Claude (decisión del 13/11).
- **Decisión:** ignorar.

### 11. Multi-organización, multiusuario y permisos por conexión

- **Qué es:** un despliegue con muchas empresas aisladas, usuarios con roles y permisos por conexión (Permitido, Preguntar antes, Apagado). ✅ github.com/paperclipai/paperclip
- **Qué nos ahorra:** nada hoy. Decidimos un OS por cliente con su propia cuenta. La idea de "Preguntar antes" por acción sirve al agente Administrador cuando facture: nada se emite sin un sí.
- **Decisión:** ignorar la multi-organización; copiar solo "Preguntar antes" cuando el CTO construya la facturación.

### 12. Plugins, espacios de trabajo aislados, entornos de prueba, OpenTelemetry, Sentry, almacenamiento S3

- **Qué es:** infraestructura para equipos de ingeniería. ✅ github.com/paperclipai/paperclip
- **Qué nos ahorra:** nada.
- **Decisión:** ignorar. Es la complejidad que el criterio del board manda no copiar.

## Orden de trabajo propuesto (🔵)

- **Esta semana:** 1 (corte de gasto), 2 (tope de rondas), 3 (verificar archivo).
- **Antes del primer cliente:** 7 (paquete de equipo) y 6 (opciones en la bandeja).
- **Después del primer cliente:** 4, 5 y revisar 8.

Cada una es una tarea de un entregable y entra en un latido. Si el board aprueba, las creo en `iniciativa uz6r2pmt` (modelos y costo) o en `n1zvmjfx` (instalación de clientes).

## Qué decide el board

- **Pregunta 1:** ¿aprobar copiar las ideas 1, 2 y 3 (control de costo)? Opción por defecto: sí.
- **Pregunta 2:** ¿aprobar la idea 7 (paquete de equipo) antes del primer cliente? Opción por defecto: sí.
- **Pregunta 3:** ¿dejar Telegram para cuando haya 2 clientes? Opción por defecto: sí.

## Fuentes

- github.com/paperclipai/paperclip (README: funciones, licencia MIT, stack), leído 2026-11-13.
- docs.paperclip.ing (índice de la documentación), leído 2026-11-13.
- docs.paperclip.ing/guides/power/execution-policy/, /guides/day-to-day/approvals/, /guides/day-to-day/costs/, /guides/day-to-day/decisions/, /guides/projects-workflow/routines/, /guides/power/export-import/, /experimental/overview/, /experimental/task-watchdogs/, /connectors/telegram/, /reference/skills/ (todas leídas 2026-11-13).
- Código del Yellow OS: `yellow-web/lib/os/modelo.ts`, `yellow-web/scripts/os.mjs`.

## Límites de este relevamiento

- ❓ No leí el código fuente de Paperclip, solo el README y la documentación. Antes de reutilizar código habría que revisar su calidad.
- ❓ La página de presupuestos propia (/guides/day-to-day/budgets/) no existe; los datos de presupuesto salen de la página de costos.
- 🔵 El estado "Yellow ya tiene" sale de leer el modelo y el script, no de usar la app.
