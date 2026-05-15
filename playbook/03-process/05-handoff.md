# 05: Handoff y post-venta

**SSOT** del proceso post-entrega del proyecto.

---

## Objetivo

Cerrar el proyecto bien, capturar valor para futuras ventas (testimonio + referidos + caso de estudio), y mantener relación abierta para futuras colaboraciones.

---

## Inputs

- Proyecto entregado.
- Cobranza completa (100%).

## Outputs

- **Profesional operando su sistema con autonomía** (Tesis).
- **Módulos reusables capturados** en la biblioteca Yellow para próximos clientes del mismo vertical.
- Testimonio formal.
- Referidos calificados (idealmente 2-3).
- Caso de estudio actualizado en `../05-examples/`.
- Lessons learned incorporadas al playbook.
- Cliente en lista de "alumni" para futuras colaboraciones.

---

## Timeline post-entrega

### Día 0: Entrega final

- **Sistema operativo funcionando** en la operación del profesional.
- Profesional operando el sistema con autonomía (instalación cumplida en Fase 5 del delivery).
- Documento de diagnóstico entregado como referencia.
- Reunión de presentación realizada.
- Factura del 50% restante enviada.

### Semana 1 post-entrega

- Confirmar cobranza completa.
- Mandar email de cierre formal con todos los entregables consolidados (incluye accesos al sistema, manuales mínimos, contacto de soporte).
- **Validar autonomía operativa:** ¿el profesional pudo generar al menos 1 instancia del entregable rediseñado solo durante la semana? Si no, sesión de training adicional incluida (1 hora, sin costo).
- Acuse de recibo del cliente.

### Semana 2-3 post-entrega

- Pedir testimonio formal (texto sugerido más abajo).
- Pedir referidos.
- Disponibilidad para 1 reunión de seguimiento si el cliente la pide.

### 30 días post-entrega

- Mensaje de check-in: "¿cómo viene la implementación?".
- Capturar updates para el caso de estudio.

### 60-90 días post-entrega

- Pedido formal de KPIs medidos para incluir en caso de estudio.
- Si los resultados son buenos: pedir actualización del testimonio con números.

### 6 meses post-entrega

- Reactivación opcional: ¿necesita acompañamiento adicional? ¿hay un siguiente nivel?

---

## Texto sugerido: Pedido de testimonio

> "Hola [nombre], pasaron [tiempo] desde que cerramos el proyecto. ¿Cómo viene la implementación?
>
> Te quería pedir un testimonio breve para mostrar a futuros clientes. La idea: 3-5 líneas con (1) qué situación tenías antes, (2) qué hicimos juntos, (3) qué cambió.
>
> No tiene que ser perfecto, escribilo como te salga. Después si querés lo pulimos juntos."

---

## Texto sugerido: Pedido de referidos

> "Una más: ¿conocés a 2-3 profesionales que estén en una situación parecida a la tuya hace [tiempo del proyecto], antes de trabajar conmigo?
>
> Si pensás en alguien, decímelo. Si te queda bien me presentás vos, perfecto. Si no, lo contacto directo y le digo que vengo de tu parte."

---

## Texto sugerido: Check-in 30 días

> "Hola [nombre], pasaron 30 días desde que cerramos el proyecto. ¿Cómo viene la implementación?
>
> ¿Hay algo que quedó dando vueltas, alguna duda que te surgió cuando empezaron a aplicarlo?
>
> Si querés, te invito a 30 minutos de seguimiento sin costo para repasar."

---

## Texto sugerido: Pedido de KPIs (60-90 días)

> "Hola [nombre], cumplimos 90 días desde el cierre. Te pido un favor: ¿podemos medir los KPIs que definimos al inicio?
>
> Específicamente: [listar los KPIs concretos del proyecto, ej: tiempo hasta decisión, NPS, disposición a pagar, rendimiento].
>
> Si los números son buenos, sirven para que actualicemos el testimonio con datos reales. Y a vos te sirve confirmar el ROI del rediseño."

---

## Documentación interna post-cierre

Para cada proyecto cerrado, completar:

### 1. Caso de estudio en `../05-examples/`

Crear archivo `case-[clientname].md` siguiendo estructura de `../05-examples/case-psicologa.md`. Incluir:

- Contexto del cliente.
- Service blueprint.
- Pain points identificados.
- Propuesta de rediseño.
- **Meta-patrón identificado** (qué regalaba / qué cobraba).
- **Spec del sistema operativo construido.**
- KPIs medidos (cuando estén disponibles).
- Testimonio.

### 2. Lessons learned

Crear archivo `lessons-[clientname].md` con:

- ¿Qué funcionó bien del proceso?
- ¿Qué se trabó?
- ¿Qué haría distinto la próxima vez?
- ¿Qué documentación nueva del playbook surge de este proyecto?
- **¿Qué patrón de rediseño se validó y es reusable cross-cliente del mismo vertical?**
- **¿Qué módulo del sistema operativo se puede agregar a la biblioteca Yellow** (templates, prompts, microsite components, protocolos por momento crítico)?

### 3. Actualización del playbook

Si el proyecto generó:

- Una herramienta nueva → agregar a `../04-templates/`.
- Un patrón de pain point recurrente → documentar en `../02-methodology/`.
- Una nueva forma de pricing → actualizar `../06-operations/pricing.md`.
- Un nuevo tipo de cliente → actualizar `../01-identity/icp.md`.
- **Un módulo de sistema operativo reusable** (template de microsite, prompt generador, protocolo por momento crítico, microsite component) → agregar a la biblioteca de módulos Yellow para próximos clientes del mismo vertical.

---

## Reglas del handoff

### 1. No mendigar testimonio

Pedirlo una sola vez con claridad. Si el cliente no responde en 7 días, dejarlo. La presión arruina la relación.

### 2. Pedir referidos siempre

Aunque el proyecto haya sido difícil. Aunque el cliente no esté 100% satisfecho. Es el canal de adquisición más rentable.

### 3. Mantener relación abierta

Aunque el cliente no contrate más, queda en la red. En 6 meses puede:
- Volver a contratar.
- Recomendar a otro.
- Compartir un post.
- Aparecer cuando menos se espera.

### 4. Documentar antes de olvidar

Las lessons learned se escriben en la primera semana post-cierre. Después se pierden los detalles importantes.

### 5. No regalar acompañamiento extra

Si el cliente pide ayuda adicional post-entrega, cotizar. Una llamada extra puntual está bien. Diez llamadas no.

---

## Notas para la IA

Cuando un proyecto entra en handoff:

1. **Generar el email de cierre** con todos los entregables consolidados.
2. **Generar el pedido de testimonio** personalizado al caso.
3. **Generar el pedido de referidos** personalizado.
4. **Programar recordatorios** para Agustin: check-in 30 días, KPIs 90 días.
5. **Crear el archivo del caso de estudio** en `../05-examples/` con la información disponible.
6. **Generar el archivo de lessons learned** con preguntas guía para que Agustin complete.

---

## Runbook operativo

### Flujo post-entrega paso a paso (con tiempos)

1. **Email de cierre formal** (día 0-1, 15 min). Consolidar entregables + accesos al sistema.
2. **Validar autonomía operativa** (Semana 1). ¿El profesional pudo generar al menos 1 instancia del entregable rediseñado solo? Si no, sesión de training adicional incluida (1 hora, sin costo).
3. **Lessons learned internas** (día 1-3, 60 min). Documentar mientras está fresco.
4. **Crear caso de estudio** en `../05-examples/` (día 3-7, 2-3 hs). Anonimizar si el cliente no autorizó uso público.
5. **Actualizar el playbook con lessons learned** (día 3-7, 1-2 hs).
6. **Pedir testimonio + referidos** (día 14-21, 10 min). Mismo mensaje.
7. **Check-in 30 días** (día 30, 5 min).
8. **Pedir KPIs medidos** (día 60-90, 15 min).
9. **Actualizar caso con resultados reales** (día 90+, 1-2 hs).

### Decisiones if/then

| Situación | Acción |
|---|---|
| Profesional no logra operar el sistema solo en Semana 1 | Sesión de training adicional incluida (1 hora) |
| Cliente no responde al pedido de testimonio en 7 días | Recordatorio una vez. Si no responde, dejar |
| Cliente da testimonio negativo o tibio | Aprender de eso. NO usarlo. NO presionar |
| Cliente da referidos | Contactarlos en menos de 7 días |
| Cliente pide ayuda adicional post-entrega | Una llamada incluida. Más, cotizar |
| Cliente NO autoriza uso público del caso | Respetar. Usarlo internamente como referencia |

### Errores comunes

**No documentar lessons learned.** Otro proyecto entra, los detalles del anterior se pierden. **Salida:** día 1-3 obligatorio.

**Mendigar testimonio.** Pedís, recordás, repetís. La presión arruina la relación. **Salida:** un pedido + un recordatorio. Si no responde, dejarlo.

**No pedir referidos por miedo.** Sentís que es "poco profesional". Salida: es lo más profesional en servicios. Parte del proceso.

**No actualizar el caso con KPIs reales.** El caso queda teórico. **Salida:** día 90+ es crítico. Sin KPIs medidos, el caso pierde la mitad de su valor de venta.

**Olvidarse del cliente después del cierre.** Pasan 6 meses sin escribir. **Salida:** check-in cada 6 meses como mínimo. Aunque sea un mensaje corto.

---

## Cierre del proceso

Después del Paso 9, el cliente queda en lista de "alumni". Reactivar cada 6 meses con mensaje breve. Pueden volver a contratar, recomendar a otros, compartir contenido tuyo, aparecer cuando menos lo esperás. El proyecto técnicamente terminó; la relación, no.

---

## Changelog del archivo

- **2026-05-13:** v0.4, sumada sección "Runbook operativo" con flujo post-entrega paso a paso, decisiones if/then, errores comunes con salida, cierre del proceso. Consolidación desde `07-runbook/07-cuando-termina-proyecto.md` (carpeta eliminada). Aprobado vía LRN-009.
- **2026-05-13:** v0.3, refinamiento contra nueva metodología. Outputs incluyen autonomía operativa (P0) + módulos reusables. Día 0 redefine entrega como sistema funcionando. Semana 1 valida autonomía operativa con sesión de training adicional si no se cumple. Caso de estudio captura meta-patrón identificado y spec del sistema construido. Lessons learned suma preguntas sobre patrones reusables cross-cliente y módulos de sistema reusables. "Actualización del playbook" incluye destino para módulos de sistema reusables. Aprobado vía LRN-008.
- **Mayo 2026:** versión inicial v0.2.
