# Runbook: Cuando llega un prospect

## Trigger

Alguien te escribió mostrando interés en el servicio. Por WhatsApp, email, LinkedIn, referido. Da igual el canal.

## Output esperado

Una de estas tres cosas:

- Discovery call agendada en calendario.
- Mensaje de decline mandado, prospect archivado.
- Pregunta abierta al prospect para calificar antes de agendar.

---

## Pasos

### Paso 1: Investigación rápida del prospect

**Acción:** googlearlo, ver su LinkedIn, su Instagram si tiene negocio. Tomar nota de: rubro, antigüedad aparente, tamaño aparente, posicionamiento actual.

**Archivo a abrir:** ninguno todavía. Solo investigás.

**Tiempo estimado:** 5-10 minutos.

**Qué buscás:**
- ¿Es del Tier 1, 2 o 3 del ICP?
- ¿Hay señales obvias de buen o mal fit?
- ¿Tiene un servicio que se entrega de manera artesanal con techo aparente?

---

### Paso 2: Calificación preliminar contra ICP

**Acción:** evaluar al prospect contra los criterios de ICP solo con la información disponible.

**Archivo a abrir:** `../01-identity/icp.md` sección "Sistema de calificación".

**Tiempo estimado:** 5 minutos.

**Output:** un score preliminar 1-25 + lectura inicial.

---

### Paso 3: Decisión: ¿avanzo, califico más, o decline?

**Decisión if/then:**

- **Si score ≥14 y no hay red flags** → ir al Paso 4 (agendar discovery).
- **Si score 10-13 o hay 1 red flag** → ir al Paso 4-bis (mandar mensaje de pre-calificación antes de agendar).
- **Si score <10 o hay 2+ red flags** → ir al Paso 5 (decline cordial).

---

### Paso 4: Agendar discovery call

**Acción:** mandar mensaje al prospect con dos cosas:
1. Acuse de recibo + interés genuino.
2. Link de Calendly o propuesta de horarios.

**Archivo a abrir:** plantilla de respuesta (si no existe, está en backlog).

**Texto sugerido (si no hay plantilla):**

> "Hola [nombre], gracias por escribir. Me interesa entender bien tu situación antes de proponerte algo. ¿Te queda bien una llamada de 30 minutos esta semana? Te paso link para agendar: [link]. Si preferís otro horario, decime y vemos."

**Tiempo estimado:** 5 minutos.

---

### Paso 4-bis: Pre-calificación antes de agendar

**Acción:** mandar 2-3 preguntas cortas para determinar si vale la pena agendar.

**Texto sugerido:**

> "Hola [nombre], gracias por escribir. Antes de agendar, dos preguntas rápidas para asegurarme de que te puedo ayudar:
>
> 1. ¿Hace cuánto tenés tu negocio?
> 2. ¿Qué te llevó a buscar a alguien como yo?
>
> Si las respuestas calzan, agendamos call. Si no, te puedo derivar a alguien que te sirva más."

**Tiempo estimado:** 5 minutos para mandar.

**Decisión if/then después de la respuesta:**

- **Respuestas alineadas con ICP** → ir al Paso 4 (agendar).
- **Respuestas confirman mal fit** → ir al Paso 5 (decline).

---

### Paso 5: Decline cordial

**Acción:** mandar mensaje cordial declinando o derivando.

**Texto sugerido:**

> "Hola [nombre], gracias por escribir. Mirando lo que me contás, creo que no soy la persona ideal para esto en este momento, yo trabajo más con [descripción ICP]. Te recomiendo [alternativa si la tenés] / Si en algún momento la situación cambia, escribime."

**Tiempo estimado:** 5 minutos.

---

### Paso 6: Preparar la call

**Si avanzaste con Paso 4 (call agendada):**

**Acción:** abrir nota nueva en Notion con:
- Datos del prospect.
- Notas de la investigación del Paso 1.
- Hipótesis preliminares.
- Las 4 preguntas core de discovery (de `../03-process/01-discovery.md`).

**Archivo a abrir:** `../04-templates/discovery-notes-template.md` (copiar para crear nota del prospect).

**Tiempo estimado:** 10 minutos.

---

## Decisiones if/then resumidas

| Situación | Acción |
|---|---|
| Score ICP ≥14, sin red flags | Agendar discovery directo |
| Score 10-13 o 1 red flag | Pre-calificar con 2-3 preguntas |
| Score <10 o 2+ red flags | Decline cordial |
| El prospect no responde la pre-calificación en 7 días | Archivar, sin follow-up |

---

## Errores comunes

### Agendar sin investigar

Te metés a la call sin saber del prospect. Tres riesgos: perdés tiempo con uno mal calificado, sonás improvisado, no podés profundizar bien.

**Salida:** siempre Paso 1 antes de agendar.

### Justificar score bajo con "buena vibra"

El prospect te cae bien, te divierte la conversación, y te encontrás bajando el filtro de calificación. Eso es ruido emocional, no método.

**Salida:** si el score dice <10, decline aunque te caiga bien. Si querés mantener la relación, "decline + dejo puerta abierta para más adelante".

### Mandar propuesta sin discovery formal

Algunos prospects son charlatanes y te quieren que les pases precio sin pasar por discovery. Si lo hacés, perdés filtro y vendés mal.

**Salida:** la propuesta sale después de discovery, sin excepciones.

---

## Próximo runbook

Cuando hayas hecho la discovery call → `02-cuando-hay-que-mandar-propuesta.md`.
