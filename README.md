# Agustin UX Strategy — Playbook

**Versión:** 0.6
**Última actualización:** Mayo 2026
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
| `00-start-here/` | Onboarding + principios + roadmap de acción | Al empezar / cuando hay que decidir qué hacer |
| `01-identity/` | Quién somos, qué vendemos, a quién | Para escribir copy, para calificar prospects |
| `02-methodology/` | Frameworks técnicos (Service Design, JTBD, Good Services) | Durante diagnóstico y diseño |
| `03-process/` | Cómo se ejecuta cada fase del trabajo | Durante venta y entrega |
| `04-templates/` | Plantillas reutilizables (calls, propuestas, diagnósticos) | Para generar entregables |
| `05-examples/` | Casos canónicos de referencia | Como referencia de profundidad esperada |
| `06-operations/` | Pricing, contratos, herramientas, AI workflow | Para administrar el negocio |
| `08-training/` | Plan de capacitación de 4 semanas | Para aprender la metodología o repasar |
| `quality-checklist.json` | Criterios de calidad consolidados que aplican a todo output | La IA lo recorre antes de entregar (ver `CLAUDE.md` R4) |

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

**Servicio:** definido y documentado (oferta v0.3).
**Pricing:** definido (ver `playbook/06-operations/pricing.md`).
**Caso de referencia (canónico):** 1 (psicóloga, en `playbook/05-examples/case-psicologa.md`).
**Caso piloto real abierto:** `cases/psicologa-rosario/` (en discovery).
**Clientes pagos:** 0.
**Próximo hito:** ejecutar caso piloto real → empezar venta con primer cliente nuevo.

Para ver qué hay que hacer y cuándo, consultar `playbook/00-start-here/roadmap.md`.

---

## Reglas de mantenimiento del repo

1. **SSOT estricto.** Cada concepto vive en un solo archivo. Otros archivos lo referencian con link, no lo duplican.
2. **Onboarding-ready.** Cualquier archivo nuevo debe ser comprensible por alguien que lee el repo por primera vez.
3. **Acción separada de conocimiento.** El conocimiento vive en `playbook/`. Las acciones a tomar viven en `playbook/00-start-here/roadmap.md`. Los aprendizajes en tránsito viven en `learnings/`. No mezclar.
4. **Playbook intocable sin aprobación.** La IA no modifica `playbook/` directamente. Cambios pasan siempre por el flujo de consolidación.
5. **Versionar.** Cuando un archivo cambia significativamente, actualizar el changelog al final del archivo y la versión en este README.

---

## Changelog

- **v0.6 (2026-05-13):** sección "Onboarding obligatorio" colapsada a un puntero único. SSOT del orden de lectura → `playbook/00-start-here/onboarding.md` (era el único archivo cuyo nombre prometía hacer eso). Aprobado directo por owner en sesión.
- **v0.5 (2026-05-13):** consolidación de `playbook/07-runbook/` dentro de `playbook/03-process/` como sección "Runbook operativo" al final de cada archivo. La carpeta `07-runbook/` se eliminó. Una sola fuente de verdad por fase. Aprobado vía LRN-009.
- **v0.4 (mayo 2026):** reestructuración tripartita (`playbook/` + `cases/` + `learnings/`) para operar como sistema de aprendizaje continuo. Agregados `CLAUDE.md` (contrato operativo con la IA) y `playbook/quality-checklist.json` (criterios de calidad consolidados). Reescritos los links internos del playbook a rutas relativas.
- **v0.3 (mayo 2026):** integración de Good Services (Lou Downe). Carpeta nueva `07-runbook/` con procedimientos paso a paso por escenario. Carpeta nueva `08-training/` con plan de capacitación de 4 semanas. Reescritura de oferta a v0.3 (sin promesa de % específico).
- **v0.2 (mayo 2026):** reestructuración con principios SSOT y onboarding-ready. Pricing definido. Roadmap separado del playbook.
- **v0.1 (mayo 2026):** primera versión del playbook con metodología, caso de referencia y plantillas.
