# Runbook — Cuando el cliente dijo sí

## Trigger

El cliente respondió afirmativamente a la propuesta. *"Dale", "vamos", "me interesa, ¿cómo seguimos?"*.

## Output esperado

Contrato firmado + 50% adelanto cobrado + fecha de kickoff acordada.

---

## Pasos

### Paso 1 — Confirmación inicial al cliente

**Acción:** mandar respuesta confirmando recepción y especificando próximos pasos.

**Tiempo estimado:** 5 minutos.

**Texto sugerido:**

> "Excelente, [nombre]. Te paso ahora dos cosas:
>
> 1. Contrato simple para firmar (carta acuerdo de 1 página).
> 2. Factura por el 50% de adelanto.
>
> Una vez confirmado el pago, agendamos kickoff. ¿Te queda bien arrancar el [fecha concreta]?"

**Importante:** poner fecha concreta de inicio. No "cuando puedas".

---

### Paso 2 — Generar contrato

**Acción:** copiar el modelo y personalizar.

**Archivo a abrir:** `../06-operations/contracts.md`.

**Tiempo estimado:** 20 minutos.

**Personalizar:**
- Datos de las partes.
- Sección 1 (Objeto): descripción específica del proyecto.
- Sección 2 (Entregables): según el modelo elegido.
- Sección 3 (Plazos): fechas concretas.
- Sección 4 (Inversión): monto exacto desde `../06-operations/pricing.md`.

---

### Paso 3 — Generar factura del 50% inicial

**Acción:** emitir factura según situación impositiva.

**Archivo a abrir:** `../06-operations/finance.md`.

**Tiempo estimado:** 10 minutos.

**Importante:** la fecha de inicio del proyecto = fecha del primer pago. No la fecha del "sí" verbal.

---

### Paso 4 — Enviar contrato + factura juntos

**Acción:** un solo email/mensaje con ambos adjuntos.

**Texto sugerido:**

> "[nombre], te paso:
>
> - Contrato firmado por mí. Si está todo bien, firmá y devolveme.
> - Factura del 50% inicial.
>
> Una vez que tenga el contrato firmado y el pago confirmado, agendamos kickoff. Ya hice un hueco en mi calendario para [fecha de inicio]. Si necesitás cambiarla, decime."

**Tiempo estimado:** 5 minutos.

---

### Paso 5 — Esperar confirmación

**Acción:** esperar a que cliente firme y pague.

**Tiempo estimado:** variable, idealmente 2-5 días.

**Decisión if/then:**

- **Cliente firma y paga en menos de 5 días** → ir al Paso 6.
- **Cliente firma pero no paga** → mandar recordatorio amable.
- **Cliente no firma ni paga después de 7 días** → mandar follow-up.
- **Cliente no firma ni paga después de 14 días** → asumir que el "sí" no era firme. Archivar y pasar a otros prospects.

**Texto de recordatorio (día 5-7):**

> "[nombre], paso a recordarte que necesito el contrato firmado y la factura paga para confirmar el inicio del proyecto el [fecha]. Si pasó algo o necesitás más tiempo, avisame y vemos."

---

### Paso 6 — Confirmar inicio

**Acción:** una vez confirmado el pago, mandar mensaje de confirmación final.

**Texto sugerido:**

> "Confirmado el pago, [nombre]. Arrancamos el [fecha] con kickoff. Te paso link de Calendly para agendar la primera reunión: [link]. Es 60-90 minutos. Si podés mandar antes [información que necesitás del cliente: web, materiales, datos del negocio], me ayuda a llegar más preparado."

**Tiempo estimado:** 5 minutos.

---

### Paso 7 — Configurar carpeta del cliente

**Acción:** crear estructura para gestionar el proyecto.

**Tiempo estimado:** 10 minutos.

**Estructura sugerida:**

```
clientes/
└── [nombre-cliente]/
    ├── 00-discovery-notes.md  ← lo que ya tenés de la call
    ├── 01-research/
    ├── 02-blueprint/
    ├── 03-diagnostico-borrador.md
    ├── 04-diagnostico-final.md
    └── 99-comunicaciones/
        ├── propuesta.pdf
        ├── contrato-firmado.pdf
        └── factura-50.pdf
```

---

### Paso 8 — Actualizar tracking

**Acción:** anotar el cliente en planilla de tracking de pipeline.

**Tiempo estimado:** 5 minutos.

**Datos a anotar:**
- Nombre del cliente.
- Fecha de inicio.
- Modelo contratado.
- Fecha estimada de cierre.
- Monto facturado total.

---

## Decisiones if/then resumidas

| Situación | Acción |
|---|---|
| Cliente firma y paga en menos de 5 días | Confirmar inicio (Paso 6) |
| Cliente firma, no paga | Recordatorio amable día 5-7 |
| Cliente no responde después de 7 días | Follow-up |
| Cliente no responde después de 14 días | Archivar |
| Cliente pide cambiar precio o condiciones | NO renegociar. Mantener pricing. Si no, decline. |

---

## Errores comunes

### Empezar a trabajar sin cobrar el 50%

El cliente dijo sí, vos te entusiasmás, empezás a investigar. Después aparecen problemas con el pago y trabajaste gratis.

**Salida:** sin primer pago confirmado, no se hace nada. Ni research, ni blueprint, ni leer la web del cliente.

### Acordar fecha de inicio sin contrato firmado

Bloqueás un slot en tu calendario y el cliente no firma. Perdiste el slot.

**Salida:** la fecha se confirma DESPUÉS del primer pago, no antes.

### Cambiar precio porque el cliente "duda un poco"

Te tienta bajar el precio para asegurar el sí. NO. Eso enseña al cliente que tu pricing es flexible y vas a tener problemas todo el proyecto.

**Salida:** si el cliente duda por precio, ofrecé Modelo A en lugar de descontar B/C.

### Aceptar pago en cuotas no acordadas en propuesta

El cliente pide "te pago en 4 partes". No estaba en la propuesta. Vos cedés para no perder el cliente.

**Salida:** o se respeta el esquema 50/50 de la propuesta, o se renegocia formalmente todo el deal (incluyendo precio si pasás de 50/50 a 25/25/25/25 puede subir 10-15%).

---

## Próximo runbook

Cuando hayas confirmado pago y agendado kickoff → `04-cuando-arranca-proyecto.md`.
