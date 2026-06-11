# 00: Pipeline del caso (mapa operable por agentes)

**SSOT** del mapa de etapas de un caso y sus contratos de datos. Este archivo conecta y referencia; la prosa de cada etapa sigue siendo SSOT en su archivo de `03-process/`. Si algo de acá contradice un SSOT, manda el SSOT y este archivo se corrige.

**Para qué existe:** el resto de la carpeta describe el proceso para humanos. Este archivo lo describe para agentes: por etapa, qué dispara el trabajo, qué archivos entran, qué archivos salen contra qué plantilla, qué checks de `../quality-checklist.json` aplican (filtrados por `applies-to`), cuándo la etapa está terminada (DoD) y qué hace la IA versus qué hace Agustín. Un agente que opera un caso lee el bloque YAML de `case-notes.md` (ver `../04-templates/case-notes-template.md`), ubica la etapa y ejecuta.

---

## Etapas

### 0. Prospect (intake)

- **SSOT:** `01-discovery.md` (runbook pre-discovery).
- **Trigger:** alguien escribe mostrando interés.
- **Inputs:** mensaje del prospect + investigación rápida (LinkedIn, web, Google).
- **Outputs:** carpeta `cases/<slug>/` con `case-notes.md` (etapa: prospect) + score ICP preliminar.
- **IA:** investiga, califica preliminar contra `../01-identity/icp.md`, propone texto de agendado, pre-calificación o decline.
- **Agustín:** decide y envía el mensaje.
- **DoD:** decisión if/then tomada (score ≥14 agenda; 10-13 pre-califica; <10 decline cordial).

### 1. Discovery

- **SSOT:** `01-discovery.md`. Plantilla: `../04-templates/discovery-notes-template.md`.
- **Trigger:** discovery call realizada.
- **Inputs:** notas crudas o transcripción de la call.
- **Outputs:** `transcript.md` (crudo) + notas estructuradas (5 preguntas, frases textuales, score final, 3 jobs 🔵, meta-patrón 🔵, gaps ❓).
- **Checks:** `applies-to: todos`.
- **IA:** estructura, califica, hipotetiza, marca gaps. Sin propuesta todavía.
- **Agustín:** hace la call, decide avanzar o declinar.
- **DoD:** notas estructuradas completas + decisión registrada en case-notes.

### 2. Propuesta

- **SSOT:** `02-proposal.md`. Plantilla: `../04-templates/proposal-template.md`.
- **Trigger:** decisión de avanzar; envío día 2-5 post-call.
- **Inputs:** notas estructuradas + `../01-identity/icp.md` + `../06-operations/pricing.md`.
- **Outputs:** propuesta de 1-2 páginas, un solo modelo recomendado.
- **Checks:** `applies-to: propuesta` + `todos`.
- **IA:** borrador completo con palabras textuales del cliente y pricing exacto.
- **Agustín:** refina "Lo que creo que está pasando", valida pricing, envía, agenda follow-ups (día 5, 10, 14).
- **DoD:** propuesta enviada + follow-ups agendados.

### 3. Cierre

- **SSOT:** `03-closing.md`. Contrato: `../06-operations/contracts.md`. Factura: `../06-operations/finance.md`.
- **Trigger:** respuesta del prospect (sí / caro / lo pienso).
- **Outputs:** contrato + factura 50% + kickoff agendado + lista preliminar de 2-3 clientes finales (modelos B/C).
- **IA:** genera contrato (con las cláusulas que corresponden al modelo), factura y mensajes.
- **Agustín:** maneja la conversación (sin bajar precio; la alternativa es Modelo A), firma, confirma cobro.
- **DoD:** P8 cumplido: primer pago acreditado. Sin pago, la etapa sigue abierta.

### 4. Delivery (F1-F5 según modelo)

- **SSOT:** `04-delivery.md` (incluida la duración por modelo y el techo de 3 meses).
- **F1 Research:** kickoff + 2-3 Switch Interviews → notas por entrevista (`../04-templates/switch-interview-notes-template.md`). IA prepara y estructura; Agustín conduce todo lo humano. DoD: entrevistas pasadas a limpio el mismo día.
- **F2 Diagnóstico:** cascada en orden fijo (blueprint → JTBD → Value Map → matriz de touchpoints → Good Services → diagnóstico central) → `diagnostico.md` (`../04-templates/diagnosis-template.md`). Checks `applies-to: diagnostico` + `todos`. DoD: diagnóstico validado con el cliente en reunión.
- **F3 Plan + prototipo + spec (cierra Modelo B):** `plan.md` (`../04-templates/plan-template.md`) + 1 prototipo manual validado con 1 cliente final + spec (`../04-templates/system-spec-template.md`). Checks `applies-to: plan`. DoD: reacción del cliente final obtenida, presentación hecha, 50% restante facturado, oferta de ejecución entregada.
- **F4 Build (Modelo C / ejecución):** sistema construido según spec, reutilizando `../09-library/`. DoD: el profesional genera 1 instancia sin asistencia.
- **F5 Instalación y cierre (Modelo C):** demo en vivo + instalación + factura final. DoD: instalación cumplida + cobro enviado.
- **Modelo A:** sin pipeline de delivery completo; consulta + devolución de 1 página en 1 semana (ver adaptaciones en `04-delivery.md`).

### 5. Handoff

- **SSOT:** `05-handoff.md`.
- **Trigger:** cobro 100% confirmado.
- **Outputs:** email de cierre, lessons learned (`../04-templates/lessons-learned-template.md`, días 1-3), caso de estudio en `../05-examples/`, testimonio (día 14-21), check-in 30 días, KPIs 60-90 días, módulos a `../09-library/`, learnings a `learnings/learnings-pending.md` (R3).
- **IA:** genera todos los textos y archivos internos; deja programados los recordatorios.
- **Agustín:** envía y sostiene la relación.
- **DoD:** lessons learned escritas + learnings volcados + `etapa: archivado` en case-notes.

---

## Reglas transversales

1. Todo output pasa el gate de `../quality-checklist.json` filtrado por `applies-to` antes de llegar al owner (R4 de `CLAUDE.md`).
2. **La IA jamás avanza la etapa de un caso.** El estado lo cambia quien cierra el DoD, y todos los DoD de avance dependen de una acción humana (call, cobro, validación, envío).
3. Pendientes de `learnings/learnings-pending.md` prevalecen sobre el playbook también acá (R2).
4. Ante conflicto entre este mapa y un SSOT de proceso, manda el SSOT.

---

## Changelog del archivo

- **2026-06-10 (v0.1):** versión inicial. Consolidación de LRN-018 (columna de automatización): mapa de etapas con triggers, contratos de datos, checks por `applies-to`, DoD y reparto humano/IA. Reemplaza al borrador `learnings/pipeline-DRAFT.md` (eliminado al consolidarse). Aprobado por el owner para consolidación en bloque (sesión 2026-06-10).
