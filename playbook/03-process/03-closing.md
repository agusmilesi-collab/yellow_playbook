# 03: Cierre

**SSOT** del proceso de cierre de venta post-propuesta.

---

## Objetivo

Convertir un "sí, dale" verbal en un proyecto firmado y pagado.

---

## Inputs

- Propuesta enviada al prospect.
- Respuesta del prospect (sí, no, "lo voy a pensar").

## Outputs

- Contrato firmado.
- Primer pago (50%) recibido.
- Fecha de kickoff acordada.

---

## Las tres respuestas posibles del cliente

### A. "Sí, dale"

**Acción:**
1. Mandar contrato corto + factura del 50% adelanto.
2. Acordar fecha de kickoff.
3. **No empezar a trabajar antes del cobro.** Principio P8 (`../00-start-here/principles.md`).

**Texto sugerido de respuesta:**

> "Excelente. Te paso ahora contrato + factura por el 50% de adelanto. Una vez confirmado el pago, agendamos kickoff. ¿Te queda bien arrancar el [fecha concreta]?"

### B. "Está caro / no tengo presupuesto"

**Acción:**
1. **NO bajar precio.** Principio fundamental.
2. Ofrecer Modelo A (entrada baja) como alternativa.
3. Si la respuesta sigue siendo no, dejar puerta abierta y archivar.

**Texto sugerido:**

> "Entiendo. Te puedo ofrecer una versión más acotada: una sesión estratégica única que te deja con un diagnóstico inicial y recomendaciones macro. Es Modelo A, [precio]. Sirve para validar si querés avanzar con un proyecto más grande después. ¿Te interesa por ahí?"

Si dice no a Modelo A también:

> "Perfecto, sin problema. Si en algún momento se libera el espacio, escribime. Te dejo en mi radar."

### C. "Lo voy a pensar"

**Acción:**
1. NO presionar.
2. Preguntar qué necesita resolver para decidir.
3. Acordar fecha concreta para volver a hablar.
4. Si en 14 días no contesta, asumir que es no y archivar.

**Texto sugerido:**

> "Genial. Para no quedar en el aire, ¿qué necesitás resolver para tomar la decisión? Y ¿cuándo te queda bien que volvamos a hablar?"

---

## Reglas no-negociables del cierre

**Reglas que vienen de principios** (no reformular acá, aplican como están):

- **P8** — Cobrar antes de empezar. Sin excepciones. La fecha de inicio = fecha del primer pago.
- **Contrato siempre.** Carta acuerdo de 1 página alcanza (ver `../06-operations/contracts.md`). Sin firma, no hay proyecto.

**Reglas operativas específicas del cierre** (viven acá, no en principios):

### 1. La primera persona que habla después del precio, pierde

Cuando se nombra el precio, callar y esperar. La presión psicológica sobre el cliente es la fuerza que cierra. Si vos rompés el silencio antes, el cliente lee inseguridad.

### 2. No regalar trabajo

Si el cliente pide "una pequeña adelanto" o "una llamada extra para evaluar", la respuesta es: el alcance del proyecto está en el contrato. Lo extra se cotiza.

### 3. No tomar el "no" personal

El "no" es información. Significa que en este momento, para este cliente, no es. Puede cambiar en 6 meses. Archivar bien para volver más adelante.

---

## Sistema de seguimiento

| Estado | Acción | Plazo |
|---|---|---|
| Propuesta enviada | Esperar respuesta | 5 días |
| Sin respuesta a los 5 días | Follow-up corto | "¿Pudiste mirar la propuesta?" |
| Sin respuesta a los 10 días | Follow-up final | "Veo que se complicó. ¿Querés que la dejemos para más adelante?" |
| Sin respuesta a los 14 días | Archivar como "no" | Reactivar en 3-6 meses |

---

## Follow-up texto sugerido (a los 5 días sin respuesta)

> "Hola [nombre], paso para saber si pudiste mirar la propuesta y si tenés alguna duda. Si necesitás más tiempo está bien, solo avisame por las dudas."

## Follow-up texto sugerido (a los 10 días sin respuesta)

> "Hola [nombre], última: veo que se complicó. Si por ahora no es el momento, está perfecto. Avisame y la dejamos para más adelante. Si todavía estás interesado, también, decime y vemos."

---

## Una vez confirmado el sí

Inmediatamente:

1. Mandar contrato (de `../06-operations/contracts.md`).
2. Mandar factura por 50% del proyecto.
3. Confirmar canal de comunicación durante el proyecto.
4. Agendar reunión de kickoff (en cuanto el pago esté confirmado).
5. **Acordar lista preliminar de 2-3 clientes finales** para la Fase B del delivery (Switch Interviews). Pedirle al profesional que empiece a pensar a quiénes querría entrevistar, con qué perfil. Esto destraba el primer paso del trabajo y reduce fricción en kickoff.
6. **Confirmar disponibilidad operativa** del profesional para revisar y validar el sistema generado al cierre del proyecto. La Tesis obliga a entregar un sistema vivo; el profesional tiene que tener tiempo agendado para hacerlo suyo.
7. Crear carpeta del cliente en sistema de archivos.
8. Actualizar tracking de clientes activos.

---

## Notas para la IA

Cuando recibas información de cierre de venta:

1. **Identificar la respuesta del cliente** entre las tres categorías (A, B, C).
2. **Generar el mensaje de respuesta** apropiado.
3. **NO inventar precio ni alcance** que no esté en la propuesta original.
4. **Marcar próxima acción** clara para Agustin.

---

## Siguiente paso del proceso

Ver `../03-process/04-delivery.md`.

---

## Runbook operativo

### Flujo post-"sí" paso a paso (con tiempos)

1. **Confirmación inicial al cliente** (5 min). Con fecha concreta de inicio.
2. **Generar contrato** (20 min). Desde `../06-operations/contracts.md`.
3. **Generar factura del 50%** (10 min). Según `../06-operations/finance.md`.
4. **Enviar contrato + factura juntos** (5 min). Un solo mensaje, dos adjuntos.
5. **Esperar firma + pago** (2-7 días).
6. **Confirmar inicio** (5 min). Una vez confirmado el pago.
7. **Acordar lista preliminar de 2-3 clientes finales** para Fase B (ver sección "Una vez confirmado el sí").
8. **Configurar carpeta del cliente** (10 min, estructura abajo).
9. **Actualizar tracking de clientes activos** (5 min).

### Estructura de carpeta del cliente

```
clientes/
└── [nombre-cliente]/
    ├── 00-discovery-notes.md
    ├── 01-research/
    ├── 02-blueprint/
    ├── 03-diagnostico-borrador.md
    ├── 04-diagnostico-final.md
    └── 99-comunicaciones/
        ├── propuesta.pdf
        ├── contrato-firmado.pdf
        └── factura-50.pdf
```

### Decisiones if/then en seguimiento

| Situación | Acción |
|---|---|
| Cliente firma y paga en <5 días | Confirmar inicio |
| Cliente firma, no paga | Recordatorio amable día 5-7 |
| No responde después de 7 días | Follow-up |
| No responde después de 14 días | Archivar |
| Cliente pide cambiar precio o condiciones | NO renegociar. Si insiste, decline |
| Cliente pide pago en cuotas no acordadas | Renegociar formalmente o sumar 10-15% al precio |

### Errores comunes

**Empezar a trabajar sin cobrar el 50%.** El cliente dijo sí, te entusiasmás. **Salida:** sin primer pago confirmado, no se hace nada. Ni research, ni blueprint, ni leer la web del cliente.

**Acordar fecha de inicio sin contrato firmado.** Bloqueás un slot en tu calendario y el cliente no firma. **Salida:** la fecha se confirma después del primer pago.

**Cambiar precio porque el cliente "duda un poco".** Te tienta bajar el precio para asegurar el sí. **Salida:** ofrecé Modelo A en lugar de descontar B/C. Enseñar que el pricing es flexible genera problemas todo el proyecto.

**Aceptar pago en cuotas no acordadas en propuesta.** El cliente pide "te pago en 4 partes". **Salida:** respetar el esquema 50/50 de la propuesta, o renegociar formalmente todo el deal (con suba de 10-15% al pasar de 50/50 a 25/25/25/25).

---

## Changelog del archivo

- **2026-05-13 (v0.5):** reglas "Cobrar antes de empezar" y "Contrato siempre" pasan de regla independiente a referencia a P8 + contracts.md (eran reformulación de principios). Las 3 reglas operativas únicas del cierre se mantienen inline. Aprobado directo por owner en sesión.
- **2026-05-13:** v0.4, sumada sección "Runbook operativo" con flujo post-"sí" paso a paso, estructura de carpeta del cliente, decisiones if/then en seguimiento, errores comunes. Consolidación desde `07-runbook/03-cuando-cliente-dijo-si.md` (carpeta eliminada). Aprobado vía LRN-009.
- **2026-05-13:** v0.3, refinamiento contra nueva metodología. Sumados dos pasos en "Una vez confirmado el sí": acordar lista preliminar de clientes finales para Fase B y confirmar disponibilidad operativa del profesional para validar el sistema operativo final. Aprobado vía LRN-008.
- **Mayo 2026:** versión inicial v0.2.
