# INDEX — Mapa rápido del repo

Hoja de navegación de un solo vistazo. Para humanos e IA que necesiten encontrar algo rápido.

Para entender qué es este repo y cómo se usa: `README.md`.
Para empezar de cero: `playbook/00-start-here/onboarding.md`.
Para reglas operativas de la IA: `CLAUDE.md`.

---

## Mapa de SSOT (Single Source of Truth)

Cada concepto vive en un solo archivo. Si lo necesitás en otro lado, linkealo, no lo dupliques.

### Operación de la IA

| Concepto | SSOT en |
|---|---|
| Contrato operativo de la IA (reglas duras) | `CLAUDE.md` |
| Workflow con IA (guía operativa para el humano) | `playbook/06-operations/ai-workflow.md` |
| Quality checklist (criterios para auto-evaluar outputs) | `playbook/quality-checklist.json` |
| Aprendizajes pendientes de consolidar | `learnings/learnings-pending.md` |
| Prompt de consolidación de learnings | `learnings/CONSOLIDATION-PROMPT.md` |

### Identidad y oferta

| Concepto | SSOT en |
|---|---|
| Qué vendemos | `playbook/01-identity/offer.md` |
| A quién le vendemos | `playbook/01-identity/icp.md` |
| Tagline oficial | `playbook/01-identity/offer.md` |
| Pitches conversacionales (1, 2, 3) | `playbook/01-identity/offer.md` |
| Pitch profesional 90s | `playbook/01-identity/offer.md` |

### Operaciones

| Concepto | SSOT en |
|---|---|
| Precios exactos | `playbook/06-operations/pricing.md` |
| Política de descuentos | `playbook/06-operations/pricing.md` |
| Modelo de carta acuerdo | `playbook/06-operations/contracts.md` |
| Manejo financiero | `playbook/06-operations/finance.md` |

### Metodología

| Concepto | SSOT en |
|---|---|
| Service Design (framework) | `playbook/02-methodology/service-design.md` |
| Evaluación de touchpoints (matriz) | `playbook/02-methodology/service-design.md` |
| Jobs to be Done (framework) | `playbook/02-methodology/jtbd.md` |
| Good Services (15 principios) | `playbook/02-methodology/good-services.md` |
| 4 Forces of Progress | `playbook/02-methodology/jtbd.md` |
| Vocabulario técnico | `playbook/02-methodology/glossary.md` |
| Términos a evitar | `playbook/02-methodology/glossary.md` |

### Proceso y plantillas

| Concepto | SSOT en |
|---|---|
| Proceso de discovery call | `playbook/03-process/01-discovery.md` |
| Proceso de propuesta | `playbook/03-process/02-proposal.md` |
| Proceso de cierre | `playbook/03-process/03-closing.md` |
| Proceso de entrega | `playbook/03-process/04-delivery.md` |
| Proceso de handoff y post-venta | `playbook/03-process/05-handoff.md` |
| Plantilla de diagnóstico | `playbook/04-templates/diagnosis-template.md` |
| Plantilla de propuesta | `playbook/04-templates/proposal-template.md` |
| Plantilla de notas de discovery | `playbook/04-templates/discovery-notes-template.md` |

### Referencia, principios y acción

| Concepto | SSOT en |
|---|---|
| Caso canónico de referencia | `playbook/05-examples/case-psicologa.md` |
| Principios no-negociables | `playbook/00-start-here/principles.md` |
| Acciones a ejecutar | `playbook/00-start-here/roadmap.md` |

### Capacitación

| Concepto | SSOT en |
|---|---|
| Plan de capacitación | `playbook/08-training/README.md` |

**Nota:** los procedimientos operativos paso a paso por escenario (antes en `07-runbook/`) ahora viven como sección "Runbook operativo" al final de cada archivo de `playbook/03-process/`. Una sola fuente por fase.

---

## Atajos por escenario

### "Necesito armar una propuesta"

1. `playbook/04-templates/discovery-notes-template.md` (estructurar notas de la call)
2. `playbook/04-templates/proposal-template.md` (plantilla de la propuesta)
3. `playbook/06-operations/pricing.md` (precio exacto)
4. `playbook/03-process/02-proposal.md` (proceso completo)

### "Llega un prospect nuevo"

1. `playbook/01-identity/icp.md` (¿califica?)
2. `playbook/03-process/01-discovery.md` (cómo hacer la call)
3. `playbook/04-templates/discovery-notes-template.md` (cómo documentar)

### "Tengo que hacer un diagnóstico"

1. `playbook/03-process/04-delivery.md` (proceso completo de entrega)
2. `playbook/04-templates/diagnosis-template.md` (plantilla)
3. `playbook/02-methodology/service-design.md` + `playbook/02-methodology/jtbd.md` (frameworks)
4. `playbook/05-examples/case-psicologa.md` (referencia de profundidad)
5. `playbook/quality-checklist.json` (criterios para auto-evaluar antes de entregar)

### "Cliente dijo sí"

1. `playbook/03-process/03-closing.md` (cierre y cobranza)
2. `playbook/06-operations/contracts.md` (carta acuerdo)
3. `playbook/06-operations/finance.md` (cómo facturar)

### "Tengo que decidir si tomar este cliente"

1. `playbook/01-identity/icp.md` (sistema de scoring)
2. `playbook/00-start-here/principles.md` (no-negociables)

### "Quiero generar algo con IA"

1. `CLAUDE.md` (contrato duro: qué puede y qué no puede hacer la IA)
2. `playbook/06-operations/ai-workflow.md` (flujos por escenario)
3. Cargar todo el repo como contexto en Claude Project / Custom GPT

### "Voy a arrancar un caso real con un cliente"

1. Crear `cases/<slug-cliente>/` con los 4 archivos (templates en `playbook/04-templates/`).
2. Seguir el flujo de `playbook/03-process/` según etapa, revisando la sección "Runbook operativo" al final de cada archivo.
3. Mantener `case-notes.md` durante toda la sesión.
4. Al cerrar el caso, volcar learnings a `learnings/learnings-pending.md`.

### "Quiero consolidar aprendizajes al playbook"

1. Ejecutar el prompt de `learnings/CONSOLIDATION-PROMPT.md`.
2. La IA propone diffs concretos.
3. Aprobar uno por uno.

### "No sé qué hacer hoy"

1. `playbook/00-start-here/roadmap.md` (sprint actual)

### "Estoy operando con un cliente, ¿qué hago ahora?"

Ir al archivo de proceso correspondiente y revisar la sección "Runbook operativo" al final:

- Llegó un prospect → `playbook/03-process/01-discovery.md`
- Hice discovery, falta propuesta → `playbook/03-process/02-proposal.md`
- Cliente dijo sí → `playbook/03-process/03-closing.md`
- Arranca proyecto, research, diagnóstico → `playbook/03-process/04-delivery.md`
- Termina proyecto → `playbook/03-process/05-handoff.md`

### "Quiero capacitarme en la metodología"

`playbook/08-training/README.md`. Plan de 4 semanas, 1 hora por día.

---

## Reglas de oro del repo (resumen)

1. **SSOT estricto.** Cada concepto en un solo archivo.
2. **Acción separada de conocimiento.** Las acciones van a `playbook/00-start-here/roadmap.md`. Los aprendizajes en tránsito a `learnings/`.
3. **Honestidad metodológica.** ✅ verificado / 🔵 hipótesis / ❓ gap.
4. **Vocabulario del glossary.** Términos técnicos siempre desde `playbook/02-methodology/glossary.md`.
5. **Profundidad de referencia.** El caso de la psicóloga es el espejo.
6. **Playbook intocable sin aprobación.** Toda IA pasa por `learnings/` antes de proponer cambios al `playbook/`.

Para los 10 principios no-negociables completos: `playbook/00-start-here/principles.md`.

---

## Changelog del archivo

- **2026-05-13 (v0.6):** eliminada fila "Stack de herramientas" tras borrar `06-operations/tools.md` (era inventario, no SSOT metodológico). Costos y "stack mínimo" absorbidos en `finance.md` y `ai-workflow.md`; integraciones futuras movidas a `roadmap.md` backlog. Aprobado directo por owner en sesión (saltó protocolo de learnings).
- **2026-05-13 (v0.5):** eliminada sección "Runbook por escenario" tras consolidación de `07-runbook/` dentro de `03-process/`. Atajos por escenario apuntan ahora a la sección "Runbook operativo" al final de cada archivo de proceso. Aprobado vía LRN-009.
- **Mayo 2026 (v0.4):** estructura tripartita reflejada (`playbook/` + `cases/` + `learnings/`). Sumadas referencias a `CLAUDE.md`, `quality-checklist.json` y atajos para arrancar caso real / consolidar learnings.
- **Mayo 2026 (v0.3):** agregado Good Services, runbook por escenarios y plan de capacitación.
- **Mayo 2026 (v0.2):** versión inicial.
