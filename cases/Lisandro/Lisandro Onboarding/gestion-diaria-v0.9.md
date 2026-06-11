---
name: gestion-diaria
description: "Operar el sistema vivo en Notion día a día vía el conector MCP de Claude: cargar tareas estructuradas (con o sin horario), capturar notas rápidas a la Bandeja, procesar la Bandeja en el ritual diario, extraer compromisos de un transcript de weekly y cargarlos como tareas, actualizar estados en lote, actualizar los valores actuales de indicadores, y reflejar tareas con horario en Google Calendar avisando si se pisan con algo. Úsala cuando el usuario pide 'agregá/cargá una tarea', 'anotá en la bandeja', 'procesá la bandeja', 'marcá como hecho/done', 'extraé los compromisos de esta reunión', 'actualizá el indicador / valor actual', o 'agendá esto a las X / metelo en el calendario'. Es la skill de uso diario del sistema —distinta de notion-construction (que CONSTRUYE el sistema) y de las skills de OKR (que DISEÑAN la estrategia)."
version: 0.2
author: Agustín Milesi
license: Uso interno de Agustín Milesi. Componente del catálogo de skills operativas.
---

# Skill: Gestión diaria del sistema vivo

Esta skill es para Claude cuando el usuario (el dueño del sistema vivo) le pide operaciones **cotidianas** sobre su Notion: cargar una tarea, tirar algo a la Bandeja, procesar la Bandeja, convertir una weekly grabada en tareas, marcar cosas como hechas, actualizar un indicador, o agendar una tarea con horario en su calendario.

El principio rector es **mínima fricción**. El sistema vive o muere por cuánto cuesta meter y mover cosas. Si Claude sobre-pregunta, agrega fricción y mata el hábito. La regla de oro: **inferí lo razonable y cargá; preguntá solo ante ambigüedad real.**

Esta skill NO construye el sistema (eso es `notion-construction`) ni diseña la estrategia (eso es la skill de OKR). Asume que el sistema ya existe y está andando.

---

## La arquitectura que asume esta skill

El sistema vivo tiene esta forma (patrón "líder individual"):

- **Dos ámbitos físicamente separados:** 🏢 Empresa y 🌱 Personal. Son DBs distintas.
- **Bandeja de entrada:** compartida, fuera de los dos ámbitos. Es el buffer de captura cruda.
- **Cadena del lado Empresa:** Objetivo → KRs → Iniciativas → Tareas Empresa.
- **Cadena del lado Personal:** Proyecto Personal → Tareas Personal.

Las DBs reales viven en una página "Databases (No borrar)"; las vistas Empresa/Personal son linked views. Para cargar datos, Claude escribe en la DB real (no importa desde qué vista lo pida el usuario).

> Antes de la primera operación de una sesión, si Claude no tiene los IDs de las data sources en contexto, los obtiene con un `fetch` del sistema. No adivina IDs.

### Notion y Google Calendar: quién manda

Cuando el sistema tiene Google Calendar conectado, la relación entre los dos es:

- **Notion es la fuente de verdad** de las tareas.
- **Google Calendar es un espejo** de las tareas que tienen horario (bloques de tiempo) y de las citas/eventos.
- **Claude mantiene la coherencia cuando se le pide.** No hay sincronización automática bidireccional corriendo por atrás. Si el usuario pide "moví la tarea de las 15 a las 17", Claude actualiza Notion **y** Calendar en la misma acción.
- **Limitación conocida:** si el usuario mueve un bloque a mano directamente en Google Calendar sin avisarle a Claude, Notion no se entera y los dos lados quedan desfasados. La regla práctica que el usuario tiene que respetar: *los cambios de horario se piden por Claude, no se hacen a mano en el calendario.*

Hay tres tipos de "cosa", y cada una tiene su hogar:

| Tipo | Ejemplo | Dónde vive |
|---|---|---|
| Tarea con deadline flexible | "Mandar el informe esta semana" | Solo Notion |
| Tarea con horario (bloque de tiempo) | "El jueves 15-16 preparo el informe" | Notion + bloque en Calendar |
| Cita/evento con otros | "Reunión con Cargill, jueves 15h" | Calendar (y en Notion solo si el usuario quiere) |

Regla de ruteo simple: **¿tiene hora? → toca el calendario. ¿Solo fecha o nada? → solo Notion.**

---

## Las 7 operaciones que cubre

### 1. Cargar una tarea estructurada

**Disparadores:** "agregá / cargá una tarea", "meté esto como tarea", "anotá que tengo que…" cuando viene con contexto.

**Decisiones que Claude toma (inferí, no preguntes salvo ambigüedad real):**

- **¿Empresa o Personal?** Trabajo, equipo, clientes, jefe, operaciones → Empresa. Familia, salud, casa, lo personal → Personal. Si es genuinamente ambiguo, preguntá una sola vez y corto.
- **¿Lleva norte (iniciativa/proyecto)?** Si la tarea claramente pertenece a una iniciativa o proyecto existente, vinculala. Si no encaja en ninguno, **dejala sin norte — está perfecto** (sobre todo en Fase 1; no fuerces una iniciativa que no existe).
- **Fecha:** si el usuario la dice, usala. Si dice "el viernes", "mañana", traducí a fecha concreta (consultá la fecha actual). Si no menciona fecha, dejala sin fecha — no inventes.
- **¿Tiene hora específica?** Si el usuario da una hora ("a las 15", "de 9 a 10"), esto es una tarea con horario → seguí a la **operación 7** (se carga en Notion con fecha+hora y se refleja en Calendar). Si no hay hora, queda solo en Notion.
- **Prioridad:** si no la dice, dejá la default. No preguntes.
- **Estado:** siempre arranca en Not started salvo que el usuario diga que ya la está haciendo.

**Campos a completar:** título (verbo de acción — ver más abajo), ámbito (vía la DB correcta), responsable (el usuario por default; otro si lo indica), fecha si aplica, norte si aplica.

**Calidad del título:** aplicá la regla de buena tarea — verbo de acción + final reconocible. Si el usuario tira algo vago ("tema Pérez"), reformulalo a algo accionable ("Llamar a Pérez por la zafra") y mostrá lo que cargaste. No cargues títulos sin verbo.

**Responsable por default en Empresa:** si la tarea es para Lisandro (el usuario), siempre asignarla a él automáticamente — no dejarlo vacío ni preguntar. URL de su perfil en Notion: `https://app.notion.com/p/376ef9c677ed8187b763e3e3b3273628`. Solo preguntar el responsable cuando la tarea es para otra persona del equipo.

**Reglas para tareas de Empresa vinculadas a una Iniciativa:**
- Toda tarea de Empresa **debe tener responsable y fecha**. Si no las tiene, preguntá antes de cargar.
- Las fechas de las tareas tienen que caer **dentro del rango de la Iniciativa** (entre su fecha de inicio y su fecha objetivo).
- Escaloná las fechas según dependencias lógicas: si B depende de A, B va después. Si B y C no dependen entre sí, pueden ir en paralelo (misma fecha), incluso si son de la misma persona.
- Si el usuario no da fechas para las tareas pero sí la fecha límite de la Iniciativa, distribuí las tareas en el rango disponible respetando dependencias.

**Reglas para Iniciativas:**
- Toda Iniciativa debe tener **fecha de inicio y fecha objetivo** (rango). Si el usuario no lo dice, preguntá "¿para cuándo tiene que estar lista?" antes de cargar.
- Al crear una Iniciativa con sus tareas, asegurate de que las tareas queden vinculadas a ella (campo Iniciativa en Tareas Empresa).

### 2. Captura a Bandeja (nota rápida)

**Disparadores:** "anotá rápido", "tirá en la bandeja", "que no me olvide de…", "guardá esto".

**Comportamiento:** la operación más rápida del sistema. **Cero preguntas, cero estructura.** Tomá el texto tal cual, cargalo como ítem en la Bandeja, confirmá en una línea. No clasifiques, no asignes ámbito, no pongas fecha. Eso se resuelve después, en el procesamiento de Bandeja.

> Regla mental que el usuario internalizó: *si tiene tiempo de pensar, va a Tareas (operación 1). Si no, va a Bandeja (operación 2).* Respetá esa distinción: si el pedido vino crudo y apurado, no lo "mejores" convirtiéndolo en tarea estructurada — dejalo en Bandeja como pidió.

### 3. Procesar la Bandeja (ritual diario)

**Disparadores:** "procesá la bandeja", "ayudame con la bandeja", "qué tengo en la bandeja".

**Comportamiento:** traé los ítems pendientes de la Bandeja y, para cada uno, proponé una de tres salidas:

1. **Convertir en tarea** (con ámbito, norte si aplica, fecha si aplica). La mayoría cae acá.
2. **Archivar/descartar** si ya no aplica o es información que no requiere acción.
3. **Dejar en Bandeja** si todavía no está claro qué hacer con eso.

Andá ítem por ítem, rápido, proponiendo la salida más probable para que el usuario solo confirme o corrija. No conviertas todo automáticamente sin mostrar — pero tampoco hagas una pregunta larga por cada ítem. Ritmo de triage: "Esto lo paso a tarea Empresa con fecha viernes; esto lo archivo; este lo dejo. ¿Va?".

**Regla crítica — cerrar el ciclo:** cada vez que un ítem de la Bandeja se convierte en tarea, se archiva, o se descarta, **actualizá el campo Triage del ítem en la Bandeja** según corresponda: `Convertido`, `Descartado`, o dejalo en `Sin procesar` si queda pendiente. Esto también aplica cuando la conversión ocurre fuera del ritual formal de Bandeja (ej: el usuario menciona algo que ya estaba en Bandeja y lo convierte en tarea durante la conversación). No dejes ítems en `Sin procesar` si ya fueron procesados.

### 4. Procesar transcript de weekly

**Disparadores:** "extraé los compromisos de esta reunión", "armá las tareas de la weekly", + un transcript o archivo adjunto.

**Comportamiento:**

1. Leé el transcript e identificá **un compromiso concreto por persona** (a veces más). Ignorá la charla, los bloqueos sin acción, las divagaciones.
2. Para cada compromiso armá una tarea: responsable (la persona que se comprometió), título con verbo de acción, deadline tentativo, descripción con el compromiso textual.
3. **Aplicá la regla de "la tarea más una":** si alguien dijo "lo tengo el miércoles", poné fecha jueves (buffer de imprevistos). No lo anuncies como desconfianza — es margen.
4. **Mostrá la lista identificada ANTES de cargar.** El usuario confirma o corrige. Recién entonces cargás en Tareas Empresa con cada responsable asignado.

> Las opciones de los Select y los responsables tienen que existir previamente en el sistema. Si un nombre del transcript no está en la DB Equipo, avisá — no inventes un responsable nuevo vía API (no se puede crear options/personas así; ver `notion-construction`).

### 5. Actualización masiva de estados

**Disparadores:** "marcá como hecho/Done estas…", "movemé estas a esta semana", "cerrá las que ya hice".

**Comportamiento:** identificá las tareas referidas (por título, por filtro, o por lo que el usuario señale), aplicá el cambio en lote, confirmá qué cambiaste. Si la referencia es ambigua ("marcá las del cliente"), mostrá las candidatas antes de tocar. No marques Done nada que el usuario no haya nombrado.

> Si una tarea que se marca como Done o se reprograma tenía un bloque en Calendar (operación 7), actualizá también el calendario: una tarea cerrada no necesita seguir ocupando su bloque futuro. Preguntá si no está claro.

### 6. Actualizar valores actuales de indicadores (Fase 3)

**Disparadores:** "actualizá el indicador X", "el valor actual ahora es…", "moví los KRs".

**Comportamiento:** los indicadores (KRs) tienen tres números: baseline, actual, meta. **Solo se toca el "actual".** No modifiques baseline ni meta salvo pedido explícito. Cargá el valor que el usuario indique en el campo actual del KR correspondiente.

> Cuidado técnico: la API no devuelve el valor renderizado de fórmulas (devuelve `formulaResult://`). Si necesitás mostrar el % de avance, calculalo del lado del cliente con baseline/actual/meta, no lo leas de la fórmula. Ver `notion-construction`.

### 7. Tarea con horario + sincronización con Calendar

**Disparadores:** una tarea que viene con hora específica ("a las 15", "de 9 a 10 el jueves"), o "agendá esto", "metelo en el calendario", "reservame el bloque".

**Pre-requisito:** el conector de Google Calendar tiene que estar activo. Si no lo está, cargá la tarea en Notion con su hora igual y avisá que el bloque en el calendario se va a poder reflejar cuando se conecte el calendario (no bloquees la carga por esto).

**Fecha actual — regla crítica:** Nunca asumir la fecha por el contexto de la conversación. Siempre llamar a `user_time_v0` antes de cualquier operación que involucre fechas relativas ("hoy", "mañana", "en 10 días"). Es una llamada barata que evita cargar cosas en el día equivocado.

**Zona horaria — regla crítica:** Notion interpreta los timestamps como UTC. El usuario está en `America/Argentina/Buenos_Aires` (UTC-3, sin cambio de horario). **Siempre sumá 3 horas** al convertir la hora local a UTC antes de pasarla a Notion. Ejemplo: el usuario dice "a las 19" → cargar `T22:00:00` en el campo date. Para Google Calendar, en cambio, usá siempre `timeZone: "America/Argentina/Buenos_Aires"` y pasá la hora local tal cual — el conector hace la conversión solo.

**Comportamiento (en orden):**

1. **Cargá la tarea en Notion** con fecha + hora. El campo date va con hora: `"date:Fecha:start"` con timestamp ISO **en UTC** (hora local + 3 hs), y `"date:Fecha:is_datetime": 1`.
2. **Antes de crear el bloque en Calendar, consultá el calendario en ese rango horario.**
3. **Si hay solapamiento con algo existente, NO agendes en silencio.** Mostrá el conflicto y ofrecé salidas:
   > *"Ojo: el jueves de 15 a 16 ya tenés 'Reunión con Cargill'. ¿Lo agendo igual (se van a pisar), lo muevo a otra franja, o lo dejo como tarea sin hora en Notion?"*
4. **Si no hay conflicto** (o el usuario confirma que agende igual), creá el bloque en Calendar con el mismo título y horario que la tarea.
5. Confirmá en una línea qué quedó cargado y dónde.

**Duración por default:** si el usuario da hora de inicio pero no de fin ("a las 15"), asumí 1 hora de bloque salvo que el tipo de tarea sugiera otra cosa. No hagas una pregunta por esto — usá el default y mostralo.

**Mantenimiento de coherencia:** si después el usuario pide mover, reprogramar o cancelar esa tarea, actualizá **los dos lados** (Notion y Calendar) en la misma acción. Nunca dejes uno actualizado y el otro no.

---

## Reglas transversales (aplican a todas las operaciones)

**No sobre-preguntar.** Es la regla más importante. Cada pregunta innecesaria es fricción que erosiona el hábito. Inferí lo razonable, cargá, y mostrá lo que hiciste para que el usuario corrija si hace falta. Una corrección post-hoc cuesta menos que una pregunta previa.

**Confirmá antes de cargas grandes o destructivas.** Cargar 1-3 ítems: hacelo directo. Cargar 8 tareas de un transcript, o marcar muchas como Done: mostrá la lista primero.

**Nunca agendes pisando algo en silencio.** Si una tarea con horario se solapa con algo en el calendario, siempre mostrá el conflicto antes de crear el bloque (operación 7).

**Los cambios de horario se piden por Claude, no a mano en el calendario.** Es la condición para que Notion y Calendar no se desfasen. Si el usuario comenta que movió algo a mano, ofrecé resincronizar.

**Respetá el ámbito.** Nunca mezcles una tarea personal en Empresa ni viceversa. Ante duda real, preguntá una vez.

**No fuerces estructura que no existe.** Si no hay una iniciativa que encaje, la tarea va sin norte. Si el sistema está en Fase 1 (sin objetivos formales), no propongas colgar tareas de KRs que no existen.

**Hablá el idioma del usuario.** Confirmaciones cortas, en su registro. "Listo, cargué la tarea en Empresa con fecha viernes" — no un párrafo explicando el proceso.

**Reglas técnicas del MCP** (resumen — el detalle está en `notion-construction`):
- RELATION se pasa como JSON array de URLs dentro de un string, con las comillas escapadas.
- DATE con propiedades expandidas (`date:Campo:start`, `date:Campo:is_datetime`). Para tareas con hora, `is_datetime` va en 1 y el start incluye la hora.
- MULTI_SELECT separado por coma sin espacios.
- Las options de Select y las personas deben existir; no se crean vía API.
- **Calendar con alarmas:** `event_create_v1` es un tool nativo del sistema que soporta alarmas, pero no siempre está disponible. Intentarlo primero; si falla con "tool not found", caer a `Google Calendar:create_event` (que no soporta reminders) y avisarle a Lisandro que la alarma no se pudo configurar para que la agregue a mano.

**DB correcta para Iniciativas de Lisandro:** usar siempre `collection://2df8eb21-c3ae-4b4d-a348-787472fc762a`. Existe otra DB de Iniciativas (`collection://8d7ac07b...`) que es un duplicado/viejo — NO usar. La forma de verificar: el campo título se llama `Iniciativa` (singular) en la correcta, e `Iniciativas` (plural) en la incorrecta. Las Tareas Empresa apuntan a la correcta via el campo `Iniciativa`.

---

## Lo que esta skill NO hace

- **No construye ni modifica la estructura** del sistema (DBs, propiedades, relaciones, vistas, fórmulas, rollups). Eso es `notion-construction`.
- **No diseña OKRs ni define la estrategia.** Si el usuario pide "ayudame a pensar los objetivos del trimestre", esa es la skill de OKR, no esta.
- **No decide la metodología.** Esta skill ejecuta operaciones sobre un sistema que ya tiene su método definido.
- **No corre sincronización automática Notion↔Calendar.** Solo mantiene coherencia cuando se le pide explícitamente.

Si el pedido del usuario cae en alguna de esas categorías, Claude no improvisa con esta skill: usa la skill correcta o lo aclara.

---

## Cuándo NO usar esta skill

- **Cuando el sistema todavía no existe.** Si hay que crearlo, es `notion-construction` primero.
- **Cuando el usuario quiere pensar estrategia**, no cargar datos. Es la skill de OKR.
- **Cuando el pedido es un diagnóstico** ("por qué no me aparece esta tarea en la vista"). Eso es troubleshooting de `notion-construction`.

---

## Changelog

- **2026-06-10 (v0.9):** se corrige regla de Calendar con alarmas: `event_create_v1` no siempre está disponible; intentar primero y caer a `Google Calendar:create_event` si falla, avisando que la alarma quedó sin configurar.
- **2026-06-10 (v0.8):** responsable por default en Empresa: si la tarea es para Lisandro, asignarla automáticamente a su perfil (`376ef9c6...`). No preguntar ni dejar vacío.
- **2026-06-10 (v0.7):** dos reglas nuevas: (1) siempre llamar a `user_time_v0` antes de operar con fechas relativas, nunca asumir la fecha por contexto; (2) usar `event_create_v1` para eventos con alarma en Calendar — el conector Google Calendar no acepta el parámetro reminders.
- **2026-06-09 (v0.6):** se documenta el bug de DB duplicada de Iniciativas: hay dos colecciones con ese nombre; la correcta es `collection://2df8eb21...` (campo título "Iniciativa" singular), la incorrecta es `collection://8d7ac07...` (campo título "Iniciativas" plural). Siempre verificar contra cuál apunta el campo Iniciativa de Tareas Empresa antes de crear. Se agrega regla en sección técnica del MCP.
- **2026-06-09 (v0.5):** se agregan reglas para Iniciativas (fecha inicio + fecha objetivo obligatorias, preguntar si no está dicho) y para tareas de Empresa vinculadas a Iniciativa (responsable y fecha obligatorios, fechas dentro del rango de la Iniciativa, escalonado por dependencias, paralelo cuando no hay dependencia).
- **2026-06-09 (v0.4):** se agrega regla crítica en operación 3: siempre actualizar el campo Triage de la Bandeja al convertir, archivar o descartar un ítem — incluso cuando la conversión ocurre fuera del ritual formal de Bandeja.
- **2026-06-09 (v0.3):** se documenta el bug de zona horaria en Notion: la API interpreta timestamps como UTC, por lo que hay que sumar 3 horas (UTC-3) al cargar tareas con hora local de Argentina. Google Calendar no tiene este problema si se pasa `timeZone: "America/Argentina/Buenos_Aires"`. Se agrega regla explícita en operación 7.
- **2026-06-08 (v0.2):** se suma la operación 7 (tareas con horario + sincronización con Google Calendar + detección de conflictos). Se documenta el modelo Notion-fuente / Calendar-espejo / sin sync automática, con su limitación conocida (mover a mano en Calendar desfasa). Se agrega la distinción de 3 tipos de "cosa" (deadline flexible / bloque con horario / cita). Se actualiza la operación 1 (deriva a la 7 ante hora específica) y la 5 (limpiar bloque de Calendar al cerrar/reprogramar). Regla transversal nueva: nunca agendar pisando algo en silencio; cambios de horario por Claude.
- **2026-06-08 (v0.1):** versión inicial. Cubre las 6 operaciones diarias del sistema vivo: carga de tarea estructurada, captura a Bandeja, procesamiento de Bandeja, procesamiento de transcript de weekly, actualización masiva de estados, y actualización de valores actuales de indicadores. Principio rector: mínima fricción / no sobre-preguntar. Diseñada como genérica reusable para cualquier cliente con el patrón "sistema vivo de líder". Separa responsabilidades respecto de `notion-construction` (construcción) y las skills de OKR (estrategia). Lead que activó la skill: onboarding de Lisandro Ruidia (junio 2026), donde se definieron los 3 modos de carga de tareas en Fase 1.