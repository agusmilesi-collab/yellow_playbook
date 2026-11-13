# Memoria del QA (Yellow)

Lo que este puesto aprendió trabajando y no tiene que volver a preguntar. Una línea por hecho, con fecha y fuente. La actualiza el propio puesto al final de cada latido.

- 2026-11-13 (#QA001, app/os/psicotecnicos/ficha/[id]/page.tsx:524): en camposhr-site el sumario de manchas se guarda como texto en sumario_exner.crudo.texto y solo se rehace con el botón "Calcular sumario"; un cambio de formato en lib/exner.ts no llega a sumarios ya guardados.
- 2026-11-13 (#QA001): para probar lib/exner.ts sin base ni servidor: `node --experimental-strip-types <script>.ts` con datos inventados; para comparar contra antes, `git show HEAD:lib/exner.ts` a un archivo temporal (no tiene imports).
