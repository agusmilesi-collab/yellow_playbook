# CLAUDE.md — Contrato operativo del repo Yellow Playbook

Claude Code lee este archivo automáticamente al iniciar cualquier sesión sobre el repo. Define qué tiene permitido hacer, qué no, y cómo operar.

## Idioma

Español argentino. Sin floritura. Sin buzzwords. Vocabulario técnico siempre del `playbook/02-methodology/glossary.md`.

## Estructura del repo

- `playbook/` — conocimiento estable. **Solo lectura para la IA.**
- `cases/<slug>/` — un caso real por carpeta. 4 archivos: `transcript.md`, `diagnostico.md`, `plan.md`, `case-notes.md`.
- `learnings/` — pendientes vivos + prompt de consolidación.

## Reglas duras (no-negociables)

### R1 — NUNCA modificar `playbook/` directamente

Toda propuesta de cambio se anota en `learnings/learnings-pending.md` y requiere aprobación explícita del owner antes de aplicar. La aplicación del cambio solo ocurre durante una sesión de consolidación (ver `learnings/CONSOLIDATION-PROMPT.md`). Fuera de ese contexto, los archivos bajo `playbook/` no se tocan.

### R2 — Antes de diagnosticar un caso, leer

1. Los archivos relevantes de `playbook/` para el caso en cuestión.
2. `learnings/learnings-pending.md` completo. **Los pendientes son conocimiento vigente** y pueden contradecir o refinar lo que dice el playbook.

Si un pending contradice el playbook: prevalece el pending. El playbook todavía no fue actualizado, pero el conocimiento ya está validado.

### R3 — Al cerrar un caso, escribir obligatoriamente en `learnings/learnings-pending.md`

- Cualquier insight surgido en la sesión.
- Cualquier corrección que dio el owner.
- Cualquier gap del playbook detectado al ejecutar.
- Cualquier contraejemplo (regla del playbook que no aplicó).

Si la sesión no produjo learnings, escribirlo explícitamente como un entry tipo:
`### LRN-NNN | YYYY-MM-DD | caso:<slug> | tipo:none — Sin learnings nuevos en este caso.`

### R4 — Auto-evaluar contra `playbook/quality-checklist.json`

Antes de entregar cualquier output al owner (diagnóstico, propuesta, plan, comunicación al cliente), recorrer cada check del JSON. Marcar pass/fail mentalmente. Si hay fails, reescribir antes de presentar.

### R5 — Honestidad metodológica

Nunca inventar información del cliente. Falta de info → ❓. Inferencia → 🔵. Confirmado por el cliente → ✅.

### R6 — Recordar consolidación al cerrar sesión

Al detectar señales claras de cierre de sesión del owner (mensajes tipo *"listo"*, *"gracias por esto"*, *"nos vemos"*, *"perfecto, ahí queda"*, *"es todo por hoy"*), si `learnings/learnings-pending.md` tiene entries vivos sin consolidar, preguntar UNA vez:

> "¿Querés que ejecutemos el prompt de consolidación antes de cerrar?"

Si la respuesta es afirmativa, ejecutar `learnings/CONSOLIDATION-PROMPT.md`. Si es negativa, manejar según el tipo de "no":

- **Diferido** (*"no, después"*, *"más tarde"*, *"cuando terminemos"*, *"ahora no, después sí"*) → registrar como snooze. Volver a preguntar al próximo cierre detectado en la misma sesión.
- **Descartado** (*"no, hoy no"*, *"dejá para otra sesión"*, *"no quiero ahora"*, *"mañana"*) → no volver a preguntar en esta sesión.
- **Ambiguo** → asumir diferido. Preferir preguntar una vez más a perder un learning.

**Cuándo NO preguntar:**

- Si `learnings-pending.md` está vacío.
- Si la señal de cierre aparece en medio de un trabajo activo (*"gracias por esto, ahora hagamos lo siguiente"* es continuación, no cierre). Distinguir el contexto.
- Si la consolidación ya fue descartada en esta sesión.

## Cómo arrancar un caso nuevo

1. Crear `cases/<slug-cliente>/` con los 4 archivos vacíos. Convención de slug: `<oficio>-<ciudad>` o `<apellido>-<oficio>`, lowercase y kebab-case.
2. Pegar notas/transcripción en `transcript.md`.
3. Generar `diagnostico.md` siguiendo `playbook/04-templates/diagnosis-template.md` y la profundidad de `playbook/05-examples/case-psicologa.md`.
4. Generar `plan.md` derivado del diagnóstico.
5. Mantener `case-notes.md` actualizado durante toda la sesión (no esperar al final): decisiones tomadas, correcciones del owner, desvíos del playbook, ideas surgidas.
6. Antes de cerrar la sesión: revisar `case-notes.md` y volcar entries a `learnings/learnings-pending.md` (R3).

## Consolidación

Solo cuando el owner ejecuta el prompt de `learnings/CONSOLIDATION-PROMPT.md`. Fuera de ese contexto, `playbook/` no se toca.

## Lo que la IA NO hace

Para flujos operativos (qué hace y qué no hace la IA con clientes, configuración del Claude Project, flujos por escenario), ver `playbook/06-operations/ai-workflow.md`. Este archivo (`CLAUDE.md`) es **contrato**; el otro es **guía operativa**. Audiencias distintas, sin solapamiento.
