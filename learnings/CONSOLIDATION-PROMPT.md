# Prompt de consolidación

Pegale a Claude este prompt cuando quieras procesar `learnings-pending.md` y mover items aprobados al playbook.

---

## Prompt

> Vamos a consolidar learnings pendientes.
>
> **Paso 1 — Lectura**
>
> 1. Leé `learnings/learnings-pending.md` completo.
> 2. Para cada entry con status `pendiente` o `en revisión`, leé los archivos del playbook que estén referenciados en su "Implicancia para el playbook".
>
> **Paso 2 — Propuesta de diffs**
>
> Para cada learning, propóneme un diff concreto:
> - Archivo de `playbook/` afectado.
> - Sección exacta.
> - Texto a agregar / modificar / quitar (en formato diff: `-` para sacar, `+` para agregar).
> - Justificación (link al learning por su ID).
>
> Mostrámelos agrupados por archivo, en orden de prioridad si detectás conflictos.
>
> **No apliques nada todavía. Esperá luz verde por cada uno.**
>
> **Paso 3 — Aplicación (después de mi OK por cada diff)**
>
> Cuando yo apruebe un diff:
> 1. Aplicalo al archivo del playbook.
> 2. Agregá entrada al changelog del archivo modificado con fecha (YYYY-MM-DD) y descripción del cambio.
> 3. Eliminá el item consolidado de `learnings-pending.md`.
>
> Cuando yo rechace o difiera un diff:
> 1. Dejá el item en `learnings-pending.md`.
> 2. Cambiale el status a `rechazado` o `diferido` y agregá una línea de razón.
>
> **Reglas durante la sesión**
>
> - Trabajá uno por uno. No batchees aprobaciones.
> - Si dos learnings entran en conflicto, marcalo y pediме que decida cuál prevalece.
> - No aproveches para "limpiar" o "mejorar" texto que no esté afectado por el learning.

---

## Cuándo correr este prompt

- Cuando `learnings-pending.md` tenga 5+ entries vivos y empiece a pesar mentalmente.
- Después de cerrar 2-3 casos seguidos (suelen aparecer patrones).
- Antes de un cambio mayor de versión del playbook.
- Cuando el owner sienta que el playbook empezó a quedar desactualizado vs. lo que aprende en sesión.

No hay frecuencia fija. La consolidación es trabajo del owner, no rutina automática.
