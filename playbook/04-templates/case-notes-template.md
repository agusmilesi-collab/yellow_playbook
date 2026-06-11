# Plantilla: Case notes (bitácora + estado del caso)

**SSOT** del formato de `case-notes.md`, el archivo obligatorio de cada caso (`CLAUDE.md`, "Cómo arrancar un caso nuevo"). Tiene dos funciones: bitácora viva para humanos y **estado del caso legible por agentes** (bloque YAML al tope).

Para el mapa de etapas, ver `../03-process/00-pipeline.md`.

---

## Estructura obligatoria

```markdown
# Notas del caso — [slug]

```yaml
caso: <slug>
etapa: prospect | discovery | propuesta | cierre | delivery-f1 | delivery-f2 | delivery-f3 | delivery-f4 | delivery-f5 | handoff | archivado
modelo: A | B | C | sin-definir
score_icp: <1-25 o sin-calificar>
cobrado: ninguno | 50 | 100
proxima_accion: "<acción concreta + fecha>"
ultima_actualizacion: <YYYY-MM-DD>
```

---

## Decisiones tomadas

- [fecha] [decisión]

## Correcciones del owner durante la sesión

(Cada corrección con fecha. Input directo para `learnings/learnings-pending.md`.)

## Desvíos del playbook

(Todo lo que se hizo distinto a lo que dice el playbook, con la razón. Contraejemplo potencial.)

## Ideas surgidas (no resueltas en este caso)

(Material crudo para futuras iteraciones.)

## Learnings volcados

- LRN-XXX | [descripción breve]
```

---

## Reglas

1. **El bloque YAML se actualiza en cada sesión de trabajo sobre el caso.** Quien cierra el Definition of Done de una etapa (ver `00-pipeline.md`) actualiza `etapa` y `proxima_accion`. La IA jamás avanza la etapa sin la acción humana que la cierra.
2. La bitácora se escribe durante la sesión, sin esperar al final.
3. Al cerrar el caso: learnings a `learnings/learnings-pending.md` (R3) y `etapa: archivado`.

---

## Changelog del archivo

- **2026-06-10 (v0.1):** versión inicial. Consolidación de LRN-017: formaliza la convención existente de los casos y suma el bloque de estado legible por agentes (pieza base de la automatización, LRN-018). Aprobado por el owner para consolidación en bloque (sesión 2026-06-10).
