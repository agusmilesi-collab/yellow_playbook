# Agustin UX Strategy — Playbook

**Versión:** 0.8
**Última actualización:** 2026-06-11
**Owner:** Agustin (Rosario, Argentina)

---

## Qué es este repo

Single Source of Truth (SSOT) del negocio de UX Strategy de Agustin, organizado como **sistema de aprendizaje continuo**.

Cualquier persona o IA que necesite operar este negocio (vender, diagnosticar, entregar) encuentra acá todo lo que necesita saber. **No hay conocimiento operativo del negocio fuera de este repo.**

---

## Para quién es este repo

1. **Para Agustin**, como referencia operativa y memoria externa.
2. **Para asistentes de IA** (Claude, GPT) que ayuden a generar entregables. La IA opera bajo el contrato definido en `CLAUDE.md`.
3. **Para futuros empleados o colaboradores** que necesiten onboardearse.

Cualquiera de los tres debería poder leer este repo y operar el negocio sin pedir información adicional.

---

## Estructura del repo (3 capas)

| Carpeta / archivo | Qué es | Quién lo modifica |
|---|---|---|
| `playbook/` | Conocimiento estable del negocio. Frameworks, plantillas, identidad, pricing, procedimientos operativos. | Solo el owner, vía consolidación de learnings. La IA NO toca esta carpeta. |
| `cases/<slug>/` | Un caso real por carpeta. 4 archivos: `transcript.md`, `diagnostico.md`, `plan.md`, `case-notes.md`. | Owner + IA durante la sesión del caso. |
| `learnings/` | `learnings-pending.md` (append-only, vivos) + `CONSOLIDATION-PROMPT.md`. | IA escribe pendientes; owner aprueba consolidación al playbook. |
| `CLAUDE.md` | Contrato operativo entre la IA y el repo. Reglas no-negociables. | Solo el owner. |
| `INDEX.md` | Mapa de navegación de un vistazo. | Owner cuando cambia la estructura. |

---

## Mapa interno del playbook

| Carpeta dentro de `playbook/` | Contiene | Cuándo se consulta |
|---|---|---|
| `00-start-here/` | Onboarding + principios | Al empezar / para revisar las reglas |
| `01-identity/` | Quién somos, qué vendemos, a quién | Para escribir copy, para calificar prospects |
| `02-methodology/` | Frameworks técnicos: 4 pilares (JTBD, Value-Based Strategy, Service Design, Good Services) en cascada | Durante diagnóstico y diseño |
| `03-process/` | El pipeline del caso (`00-pipeline.md`) + cómo se ejecuta cada fase | Durante venta y entrega |
| `04-templates/` | Plantillas reutilizables (discovery, entrevistas, diagnóstico, plan, spec, propuesta, lessons, case-notes) | Para generar entregables |
| `05-examples/` | Casos canónicos de referencia | Como referencia de profundidad esperada |
| `06-operations/` | Pricing, contratos, finanzas, AI workflow | Para administrar el negocio |
| `08-training/` | Plan de capacitación de 4 semanas | Para aprender la metodología o repasar |
| `09-library/` | Módulos reusables entre clientes (semilla del kit replicable) | Antes de construir un sistema desde cero |
| `quality-checklist.json` | Criterios de calidad con `applies-to` por tipo de output | La IA lo recorre antes de entregar (ver `CLAUDE.md` R4) |

---

## Onboarding

Si sos nuevo en el repo:

- **IA:** empezá por `CLAUDE.md` (contrato operativo).
- **Humano:** empezá por `playbook/00-start-here/onboarding.md` — ahí vive el SSOT del orden de lectura.

Para navegación rápida una vez familiarizado con el repo, ver `INDEX.md`.

---

## Cómo se usa el repo en el día a día

### Para arrancar un caso nuevo
1. Crear `cases/<slug-cliente>/` con los 4 archivos.
2. Pegar transcripción / notas en `transcript.md`.
3. La IA genera `diagnostico.md` siguiendo `playbook/04-templates/diagnosis-template.md`.
4. La IA genera `plan.md` derivado.
5. Ambos mantienen `case-notes.md` con decisiones, correcciones y desvíos durante toda la sesión.
6. Al cerrar el caso, la IA vuelca learnings a `learnings/learnings-pending.md`.

### Para consolidar aprendizajes al playbook
Pegar el prompt de `learnings/CONSOLIDATION-PROMPT.md`. La IA propone diffs concretos al `playbook/`, el owner aprueba uno por uno, y los items consolidados se eliminan de pending (el rastro queda en el changelog del archivo modificado).

---

## Estado actual del negocio

**Servicio:** definido y documentado (oferta v0.10: modelos A/B/C, núcleo estandarizado + ejecución por alcance).
**Pricing:** definido (ver `playbook/06-operations/pricing.md`).
**Caso de referencia (canónico):** 1 (psicóloga, en `playbook/05-examples/case-psicologa.md`), pendiente de rehacer con corpus real (proyecto Caso Campos HR).
**Clientes pagos:** 1 (Lisandro, primera venta real, en `cases/Lisandro/`).
**Caso piloto abierto:** `cases/psicologa-rosario/` (en discovery).
**Próximo hito:** cerrar el piloto con resultados medidos y activar venta sistemática (Modelo A en frío).

Para ver qué hay que hacer y cuándo, consultar la base de Notion "Projects & Tasks" del owner (la acción de negocio vive fuera del repo) y los `case-notes.md` de cada caso activo.

---

## Reglas de mantenimiento del repo

1. **SSOT estricto.** Cada concepto vive en un solo archivo. Otros archivos lo referencian con link, no lo duplican.
2. **Onboarding-ready.** Cualquier archivo nuevo debe ser comprensible por alguien que lee el repo por primera vez.
3. **Acción separada de conocimiento.** El conocimiento vive en `playbook/`. Las acciones de negocio viven en Notion "Projects & Tasks" (fuera del repo); el estado de cada caso, en su `case-notes.md`. Los aprendizajes en tránsito viven en `learnings/`. No mezclar.
4. **Playbook intocable sin aprobación.** La IA no modifica `playbook/` directamente. Cambios pasan siempre por el flujo de consolidación.
5. **Versionar.** Cuando un archivo cambia significativamente, actualizar el changelog al final del archivo y la versión en este README.

---

## Changelog

- **v0.8 (2026-06-11):** actualización al estado real tras la auditoría T04, la consolidación de LRN-013 a 020 y la limpieza del repo. Primera venta registrada (Lisandro); oferta a v0.10 (modelos con núcleo + ejecución por alcance). Mapa interno actualizado: sumada `09-library/`, `00-pipeline.md` en proceso, `quality-checklist.json` con `applies-to`; "herramientas" quitado de 06-operations (tools.md ya no existe). `roadmap.md` eliminado del repo: la acción de negocio vive en Notion "Projects & Tasks". Aprobado directo por el owner en sesión.
- **v0.7 (2026-05-18):** consolidación del cuarto pilar metodológico (sesión de refinamiento de KB, E1). Nuevo `playbook/02-methodology/value-based-strategy.md` (Value Stick / Value Map, deriva de Oberholzer-Gee 2021). La metodología pasa de 3 a 4 pilares en cascada (JTBD descubre → Value Map prioriza → Service Design audita la entrega → Good Services valida). Cambios acoplados: `jtbd.md` (Ulwick a nota, System of Progress sumado), `service-design.md` (matriz sin severidad), `04-delivery.md`, `diagnosis-template.md` (de 10 a 11 secciones), `quality-checklist.json`, `glossary.md`, `INDEX.md`. Consolidó LRN-003 y LRN-004. Aprobado por el owner para consolidación en bloque.
- **v0.6 (2026-05-13):** sección "Onboarding obligatorio" colapsada a un puntero único. SSOT del orden de lectura → `playbook/00-start-here/onboarding.md` (era el único archivo cuyo nombre prometía hacer eso). Aprobado directo por owner en sesión.
- **v0.5 (2026-05-13):** consolidación de `playbook/07-runbook/` dentro de `playbook/03-process/` como sección "Runbook operativo" al final de cada archivo. La carpeta `07-runbook/` se eliminó. Una sola fuente de verdad por fase. Aprobado vía LRN-009.
- **v0.4 (mayo 2026):** reestructuración tripartita (`playbook/` + `cases/` + `learnings/`) para operar como sistema de aprendizaje continuo. Agregados `CLAUDE.md` (contrato operativo con la IA) y `playbook/quality-checklist.json` (criterios de calidad consolidados). Reescritos los links internos del playbook a rutas relativas.
- **v0.3 (mayo 2026):** integración de Good Services (Lou Downe). Carpeta nueva `07-runbook/` con procedimientos paso a paso por escenario. Carpeta nueva `08-training/` con plan de capacitación de 4 semanas. Reescritura de oferta a v0.3 (sin promesa de % específico).
- **v0.2 (mayo 2026):** reestructuración con principios SSOT y onboarding-ready. Pricing definido. Roadmap separado del playbook.
- **v0.1 (mayo 2026):** primera versión del playbook con metodología, caso de referencia y plantillas.
