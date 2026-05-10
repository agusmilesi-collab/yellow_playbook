# Runbook — Cuando termina el proyecto

## Trigger

Presentaste el documento final + cobraste el 50% restante.

## Output esperado

- Caso documentado en `../05-examples/`.
- Lessons learned capturadas.
- Testimonio solicitado y recibido (en algunos casos).
- Referidos pedidos.
- Cliente en lista de "alumni".

---

## Pasos

### Paso 1 — Email de cierre formal (día 0-1)

**Acción:** mandar email consolidando todos los entregables.

**Tiempo estimado:** 15 minutos.

**Texto sugerido:**

> "[nombre], te dejo todo consolidado:
>
> - Documento final del proyecto: [link/adjunto].
> - Service blueprint: [link Figma/Miro].
> - Plan de implementación: [link].
> - Reuniones grabadas (si aplica): [link].
>
> Lo que te recomiendo en este momento es revisar el plan de implementación y empezar por la intervención #1 que es la más alta prioridad.
>
> Cualquier pregunta o cosa que quieras profundizar después, decime. En 30 días te voy a escribir para ver cómo viene."

---

### Paso 2 — Lessons learned internas (día 1-3)

**Acción:** documentar aprendizajes mientras están frescos.

**Tiempo estimado:** 60 minutos.

**Output:** archivo `clientes/[cliente]/lessons-learned.md` con:

- ¿Qué funcionó bien del proceso?
- ¿Qué se trabó?
- ¿Qué haría distinto la próxima vez?
- ¿Qué documentación nueva del playbook surge de este proyecto?
- ¿Qué frase/insight del cliente vale la pena recordar?

---

### Paso 3 — Crear caso de estudio interno (día 3-7)

**Acción:** crear documento del caso siguiendo estructura de `../05-examples/case-psicologa.md`.

**Archivo a abrir:** `../05-examples/case-psicologa.md` como referencia.

**Tiempo estimado:** 2-3 horas.

**Crear:** `../05-examples/case-[nombrecliente].md`

**Importante:** anonimizar si el cliente no autorizó uso público todavía. Lo escribís igual para uso interno.

---

### Paso 4 — Actualizar el playbook con lessons learned (día 3-7)

**Acción:** si el proyecto generó nueva información, incorporarla.

**Tiempo estimado:** 1-2 horas.

**Decisión if/then:**

- **Generó una herramienta nueva** → agregar a `../04-templates/`.
- **Generó un patrón de pain point recurrente** → documentar en `../02-methodology/`.
- **Generó una nueva forma de pricing** → actualizar `../06-operations/pricing.md`.
- **Generó un nuevo tipo de cliente** → actualizar `../01-identity/icp.md`.
- **Generó un nuevo error común** → actualizar el runbook correspondiente.

---

### Paso 5 — Pedir testimonio (día 14-21)

**Acción:** pedir testimonio formal.

**Archivo a abrir:** `../03-process/05-handoff.md` sección "Texto sugerido — Pedido de testimonio".

**Tiempo estimado:** 10 minutos para mandar + esperar respuesta.

**Texto sugerido:**

> "Hola [nombre], pasaron [tiempo] desde que cerramos el proyecto. ¿Cómo viene la implementación?
>
> Te quería pedir un testimonio breve para mostrar a futuros clientes. La idea: 3-5 líneas con (1) qué situación tenías antes, (2) qué hicimos juntos, (3) qué cambió.
>
> No tiene que ser perfecto, escribilo como te salga. Después si querés lo pulimos juntos."

---

### Paso 6 — Pedir referidos (mismo mensaje del Paso 5)

**Acción:** en el mismo email/mensaje del testimonio, pedir referidos.

**Texto sugerido:**

> "Una más: ¿conocés a 2-3 profesionales que estén en una situación parecida a la tuya hace [tiempo del proyecto], antes de trabajar conmigo?
>
> Si pensás en alguien, decímelo. Si te queda bien me presentás vos, perfecto. Si no, lo contacto directo y le digo que vengo de tu parte."

**Importante:** pedir aunque el proyecto haya sido difícil. Aunque el cliente no esté 100% satisfecho. Es el canal de adquisición más rentable.

---

### Paso 7 — Check-in 30 días

**Acción:** mensaje de seguimiento.

**Tiempo estimado:** 5 minutos.

**Texto sugerido:**

> "Hola [nombre], pasaron 30 días desde que cerramos. ¿Cómo viene la implementación?
>
> ¿Hay algo que quedó dando vueltas, alguna duda que te surgió cuando empezaron a aplicarlo?
>
> Si querés, te invito a 30 minutos de seguimiento sin costo para repasar."

---

### Paso 8 — Pedir KPIs medidos (día 60-90)

**Acción:** pedir mediciones para incluir en caso de estudio.

**Archivo a abrir:** `../03-process/05-handoff.md` sección "Texto sugerido — Pedido de KPIs".

**Tiempo estimado:** 15 minutos.

**Texto sugerido:**

> "Hola [nombre], cumplimos 90 días desde el cierre. Te pido un favor: ¿podemos medir los KPIs que definimos al inicio?
>
> Específicamente: [listar los KPIs concretos del proyecto].
>
> Si los números son buenos, sirven para que actualicemos el testimonio con datos reales. Y a vos te sirve confirmar el ROI del rediseño."

---

### Paso 9 — Actualizar caso con resultados reales (día 90+)

**Acción:** una vez que tengas los KPIs reales, actualizar el caso.

**Tiempo estimado:** 1-2 horas.

**Importante:** este es el momento donde el caso pasa de "propuesta" a "caso completo con resultados". Es el material de venta más valioso que tenés.

---

## Decisiones if/then resumidas

| Situación | Acción |
|---|---|
| Cliente no responde al pedido de testimonio en 7 días | Recordatorio una vez. Si no responde, dejar |
| Cliente da testimonio pero negativo o tibio | Aprender de eso. NO usarlo. NO presionar para uno mejor |
| Cliente da referidos | Contactarlos en menos de 7 días |
| Cliente pide ayuda adicional post-entrega | Una llamada de seguimiento incluida. Más, cotizar |
| Cliente NO quiere que uses el caso públicamente | Respetar. Usarlo internamente como referencia |

---

## Errores comunes

### No documentar lessons learned

Pasaron 2 meses, otro proyecto está activo, los detalles del anterior se perdieron. Información valiosa que no se captura.

**Salida:** Paso 2 obligatorio dentro de los 3 días post-cierre.

### Mendigar testimonio

Pedís una vez, el cliente no responde, mandás otro mensaje, después otro. La presión arruina la relación.

**Salida:** un pedido + un recordatorio. Si no responde, dejarlo.

### No pedir referidos por miedo

Sentís que pedir referidos es "poco profesional". Es lo más profesional que podés hacer en servicios.

**Salida:** Paso 6 obligatorio. Forma parte del proceso, no es un favor.

### No actualizar el caso con KPIs reales

Tenés el caso documentado como propuesta pero nunca lo actualizás con resultados medidos. Pierde la mitad de su valor de venta.

**Salida:** Paso 9 es CRÍTICO. Sin esto, el caso es teórico, no probado.

### Olvidarse del cliente después del cierre

Pasan 6 meses, no le escribiste nunca. Cuando aparece otro problema en su negocio, te olvidó.

**Salida:** check-in cada 6 meses como mínimo. Aunque sea un mensaje corto.

---

## Cierre del runbook

Después del Paso 9, el cliente queda en lista de "alumni". Reactivar cada 6 meses con mensaje breve. Pueden:

- Volver a contratar.
- Recomendar a otros.
- Compartir contenido tuyo.
- Aparecer cuando menos lo esperás.

El proyecto técnicamente terminó. La relación, no.
