# Runbook — Cuando armás el diagnóstico

## Trigger

Research validado con el cliente. Service blueprint actual mapeado. Pain points identificados. Hora de armar el documento final del diagnóstico + propuesta de rediseño.

## Output esperado

Documento de 15-25 páginas con:
- Diagnóstico completo.
- Propuesta de rediseño (3-7 intervenciones).
- Plan de implementación.
- KPIs definidos.

---

## Pasos

### Paso 1 — Diseñar las intervenciones

**Acción:** para cada pain point principal, diseñar 1-2 intervenciones concretas.

**Archivo a abrir:** `../02-methodology/service-design.md` (frameworks) + `../02-methodology/glossary.md` (vocabulario).

**Tiempo estimado:** 4-6 horas.

**Para cada intervención, definir:**

- **Nombre técnico** (vocabulario del glossary).
- **Qué hace** (descripción concreta).
- **Por qué resuelve** un pain point específico.
- **Cómo se ve** (cómo lo experimenta el cliente final post-rediseño).

**Reglas:**

- Mínimo 3, máximo 7 intervenciones.
- Cada intervención ataca al menos un pain point identificado.
- Si una intervención no se conecta a un pain point, no va.

---

### Paso 2 — Chequear las intervenciones contra Good Services

**Acción:** validar que el rediseño cumple los 15 principios.

**Archivo a abrir:** `../02-methodology/good-services.md`.

**Tiempo estimado:** 1-2 horas.

**Para cada principio (1-15):**

- ¿El rediseño lo cumple mejor que el servicio actual? (Sí / No / No aplica)
- Si no aplica: ¿está justificado dentro del scope?
- Si no lo mejora pero debería: ¿se incorpora al plan o se difiere a fase 2?

**Output:** lista de principios cubiertos + lista de gaps justificados.

---

### Paso 3 — Plan de implementación

**Acción:** para cada intervención, definir cómo se ejecuta.

**Tiempo estimado:** 2-3 horas.

**Para cada intervención:**

- Plazo estimado de implementación.
- Recursos necesarios (¿requiere proveedor externo? ¿requiere tiempo del dueño?).
- Orden de prioridad.
- Dependencias entre intervenciones.

**Output:** roadmap de implementación con orden + plazos.

---

### Paso 4 — Definir KPIs

**Acción:** para cada intervención principal, definir cómo se mide el éxito.

**Tiempo estimado:** 1-2 horas.

**Para cada KPI:**

- Métrica que se debería mover.
- Estado actual (baseline).
- Hipótesis de impacto a 90 días.
- Cómo se mide.

**Importante:** sin KPIs, no hay éxito medible (principio P6 de `../00-start-here/principles.md`). Aunque los valores sean estimados, hay que ponerlos.

---

### Paso 5 — Escribir el documento final

**Acción:** compilar todo siguiendo la plantilla.

**Archivo a abrir:** `../04-templates/diagnosis-template.md`.

**Tiempo estimado:** 4-6 horas.

**Estructura obligatoria (10 secciones):**

1. Contexto del cliente.
2. Service blueprint actual.
3. Job-to-be-Done del cliente final.
4. Pain points identificados.
5. Diagnóstico central.
6. Propuesta de rediseño.
7. Hipótesis de impacto.
8. Riesgos y consideraciones.
9. Próximos pasos sugeridos.
10. Gaps de información.

**Reglas:**

- Largo: 15-25 páginas. Nunca más.
- Cada afirmación marcada con ✅ / 🔵 / ❓.
- Vocabulario del glossary, no buzzwords.
- Diagnóstico central (sección 5): un párrafo punzante con causa raíz.

---

### Paso 6 — Revisión contra checklist

**Acción:** chequeo de calidad antes de presentar.

**Tiempo estimado:** 30 minutos.

**Checklist:**

- [ ] Las 10 secciones están completas.
- [ ] Todas las afirmaciones tienen ícono de honestidad metodológica.
- [ ] El diagnóstico central es de 3-5 líneas, punzante.
- [ ] Las intervenciones están conectadas a pain points.
- [ ] Los KPIs son medibles y con baseline.
- [ ] El documento no excede 25 páginas.
- [ ] El vocabulario es del glossary.
- [ ] La profundidad es similar a `../05-examples/case-psicologa.md`.

---

### Paso 7 — Reunión de presentación (90 min)

**Acción:** presentar el diagnóstico al cliente.

**Tiempo estimado:** 90 min reunión + 30 min preparación.

**Agenda:**

1. (15 min) Resumen del journey del proyecto.
2. (20 min) Hallazgos principales de research.
3. (10 min) Service blueprint.
4. (15 min) Diagnóstico central y pain points.
5. (20 min) Propuesta de rediseño con cada intervención.
6. (10 min) Plan de implementación y KPIs.

**Reglas:**

- Llevar el documento impreso O proyectado, no improvisar.
- Pausar para preguntas en cada sección, no al final.
- Si el cliente cuestiona algo, validar honestamente. NO defender por defender.

---

### Paso 8 — Entrega + cobranza del 50% restante

**Acción:** mandar documento + factura final.

**Tiempo estimado:** 15 minutos.

**Texto sugerido:**

> "[nombre], te paso:
>
> - Documento final con todo lo que charlamos.
> - Factura del 50% restante.
>
> Cualquier pregunta o cosa que quieras profundizar después, decime. En 30 días te voy a escribir para ver cómo viene la implementación."

---

## Decisiones if/then resumidas

| Situación | Acción |
|---|---|
| El cliente cuestiona un pain point | Validar honestamente. Si tiene razón, ajustar. Si no, defender con evidencia |
| El cliente pide agregar intervenciones que no atacan pain points | Decir que se difieren a "fase 2" o "post-implementación" |
| Un principio de Good Services no se cubre | Justificar por qué (scope, prioridad, fase 2) |
| KPI sin baseline disponible | Marcar como "a medir en primer mes de implementación" |
| El documento excede 25 páginas | Recortar. Si no se puede, está sobre-scopeado |

---

## Errores comunes

### Diseñar intervenciones que no atacan pain points específicos

Tirás "buenas ideas" que no se conectan al diagnóstico. El documento parece bonito pero no resuelve nada concreto.

**Salida:** cada intervención debe linkear explícitamente a uno o más pain points. Si no, no va.

### Olvidar los íconos de honestidad metodológica

Mezclás hipótesis con hechos verificados. El cliente toma decisiones sobre información mal etiquetada.

**Salida:** chequeo final del Paso 6 incluye revisar que CADA afirmación tenga su ícono.

### Documento de 50 páginas

Te entusiasmás y querés "mostrar valor" con extensión. El cliente no lo lee. Pierde valor.

**Salida:** principio P4 de `../00-start-here/principles.md`. Punzante > extenso.

### Defender el diagnóstico contra evidencia del cliente

El cliente dice "esto no es así". Vos defendés porque ya lo escribiste. Es ego, no método.

**Salida:** si el cliente tiene información que vos no tenías, ajustar. La evidencia siempre gana.

### Saltarse los KPIs

"No tenemos baseline, lo medimos después". Para un mes después se olvidaron.

**Salida:** definir cómo se va a establecer baseline en las primeras semanas. Sin métrica = no proyecto, según principio P6.

---

## Próximo runbook

Cuando hayas presentado y cobrado → `07-cuando-termina-proyecto.md`.
