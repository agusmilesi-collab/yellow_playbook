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
| Evaluación de touchpoints (matriz, audita, no prioriza) | `playbook/02-methodology/service-design.md` |
| Jobs to be Done (framework, descubrimiento puro) | `playbook/02-methodology/jtbd.md` |
| Good Services (15 principios) | `playbook/02-methodology/good-services.md` |
| Value-Based Strategy (Value Stick, 4to pilar) | `playbook/02-methodology/value-based-strategy.md` |
| Value Map (único mecanismo de priorización) | `playbook/02-methodology/value-based-strategy.md` |
| 4 Forces of Progress | `playbook/02-methodology/jtbd.md` |
| Sistema de progreso | `playbook/02-methodology/jtbd.md` |
| Vocabulario técnico | `playbook/02-methodology/glossary.md` |
| Términos a evitar | `playbook/02-methodology/glossary.md` |

### Proceso y plantillas

| Concepto | SSOT en |
|---|---|
| Pipeline del caso (mapa operable por agentes, estados y DoD) | `playbook/03-process/00-pipeline.md` |
| Proceso de discovery call | `playbook/03-process/01-discovery.md` |
| Proceso de propuesta | `playbook/03-process/02-proposal.md` |
| Proceso de cierre | `playbook/03-process/03-closing.md` |
| Proceso de entrega (incluye duración por modelo) | `playbook/03-process/04-delivery.md` |
| Proceso de handoff y post-venta | `playbook/03-process/05-handoff.md` |
| Plantilla de diagnóstico | `playbook/04-templates/diagnosis-template.md` |
| Plantilla de propuesta | `playbook/04-templates/proposal-template.md` |
| Plantilla de notas de discovery | `playbook/04-templates/discovery-notes-template.md` |
| Plantilla de notas de Switch Interview | `playbook/04-templates/switch-interview-notes-template.md` |
| Plantilla de plan | `playbook/04-templates/plan-template.md` |
| Plantilla de spec del sistema | `playbook/04-templates/system-spec-template.md` |
| Plantilla de lessons learned | `playbook/04-templates/lessons-learned-template.md` |
| Plantilla de case notes (bitácora + estado del caso) | `playbook/04-templates/case-notes-template.md` |
| Biblioteca de módulos reusables | `playbook/09-library/README.md` |

### Referencia, principios y acción

| Concepto | SSOT en |
|---|---|
| Caso canónico de referencia | `playbook/05-examples/case-psicologa.md` |
| Principios no-negociables | `playbook/00-start-here/principles.md` |
| Acciones a ejecutar (negocio) | Notion "Projects & Tasks" (fuera del repo) |
| Estado de un caso activo | `cases/<slug>/case-notes.md` (bloque YAML) |

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
3. `playbook/02-methodology/jtbd.md` → `playbook/02-methodology/value-based-strategy.md` → `playbook/02-methodology/service-design.md` (la cascada del método: descubrir → priorizar → auditar la entrega)
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
2. `playbook/03-process/00-pipeline.md` (mapa de etapas: inputs, outputs, checks, DoD)
3. `playbook/06-operations/ai-workflow.md` (flujos por escenario)

### "Voy a arrancar un caso real con un cliente"

1. Crear `cases/<slug-cliente>/` con los 4 archivos (`case-notes.md` desde `playbook/04-templates/case-notes-template.md`, con su bloque YAML de estado).
2. Seguir `playbook/03-process/00-pipeline.md` según etapa, con el detalle del "Runbook operativo" al final de cada archivo de proceso.
3. Mantener `case-notes.md` (bitácora + estado) durante toda la sesión.
4. Al cerrar el caso, volcar learnings a `learnings/learnings-pending.md`.

### "Quiero consolidar aprendizajes al playbook"

1. Ejecutar el prompt de `learnings/CONSOLIDATION-PROMPT.md`.
2. La IA propone diffs concretos.
3. Aprobar uno por uno.

### "No sé qué hacer hoy"

1. Notion "Projects & Tasks" del owner (sprint y backlog del negocio, fuera del repo).
2. `cases/<slug>/case-notes.md` de cada caso activo (próxima acción por proyecto).

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
2. **Acción separada de conocimiento.** Las acciones de negocio van a Notion "Projects & Tasks" (fuera del repo); el estado por caso, a su `case-notes.md`. Los aprendizajes en tránsito, a `learnings/`.
3. **Honestidad metodológica.** ✅ verificado / 🔵 hipótesis / ❓ gap.
4. **Vocabulario del glossary.** Términos técnicos siempre desde `playbook/02-methodology/glossary.md`.
5. **Profundidad de referencia.** El caso de la psicóloga es el espejo.
6. **Playbook intocable sin aprobación.** Toda IA pasa por `learnings/` antes de proponer cambios al `playbook/`.

Para los 10 principios no-negociables completos: `playbook/00-start-here/principles.md`.

---

## Changelog del archivo

- **2026-06-11 (v0.9):** eliminado `roadmap.md` del repo (decisión del owner: la acción de negocio vive en Notion "Projects & Tasks"). Filas y atajos de "acciones" re-apuntados a Notion + `case-notes.md`. Aprobado directo por el owner en sesión.
- **2026-06-10 (v0.8):** consolidación de LRN-016/017/018/019 (sesión T04). Sumadas filas: pipeline del caso (`00-pipeline.md`), 5 plantillas nuevas, biblioteca de módulos (`09-library/`). Atajos "Quiero generar algo con IA" y "Voy a arrancar un caso real" actualizados al modelo Claude Code + pipeline. Aprobado por el owner para consolidación en bloque (sesión 2026-06-10).
- **2026-05-18 (v0.7):** consolidación del cuarto pilar (LRN-003 + LRN-004, sesión de refinamiento de KB, E1). Sumadas filas Value-Based Strategy, Value Map y Sistema de progreso en el mapa de SSOT de Metodología. Matriz de touchpoints reetiquetada como "audita, no prioriza"; JTBD como "descubrimiento puro". Atajo "Tengo que hacer un diagnóstico" reordenado a la cascada del método. La metodología pasa de 3 a 4 pilares.
- **2026-05-13 (v0.6):** eliminada fila "Stack de herramientas" tras borrar `06-operations/tools.md` (era inventario, no SSOT metodológico). Costos y "stack mínimo" absorbidos en `finance.md` y `ai-workflow.md`; integraciones futuras movidas a `roadmap.md` backlog. Aprobado directo por owner en sesión (saltó protocolo de learnings).
- **2026-05-13 (v0.5):** eliminada sección "Runbook por escenario" tras consolidación de `07-runbook/` dentro de `03-process/`. Atajos por escenario apuntan ahora a la sección "Runbook operativo" al final de cada archivo de proceso. Aprobado vía LRN-009.
- **Mayo 2026 (v0.4):** estructura tripartita reflejada (`playbook/` + `cases/` + `learnings/`). Sumadas referencias a `CLAUDE.md`, `quality-checklist.json` y atajos para arrancar caso real / consolidar learnings.
- **Mayo 2026 (v0.3):** agregado Good Services, runbook por escenarios y plan de capacitación.
- **Mayo 2026 (v0.2):** versión inicial.
