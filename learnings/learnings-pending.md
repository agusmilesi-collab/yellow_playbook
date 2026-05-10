# Learnings pendientes — Yellow

Este archivo contiene aprendizajes detectados en casos reales que aún no fueron consolidados al playbook. Son **conocimiento vigente**: cualquier IA que opere el repo debe leerlos antes de actuar (ver `../CLAUDE.md` R2).

Items consolidados se **eliminan** de este archivo. El rastro queda en el changelog del archivo de `playbook/` que se modificó. Decisión deliberada: no acumular histórico para mantener el archivo liviano.

---

## Formato de cada entry

```
### LRN-NNN | YYYY-MM-DD | caso:<slug> | tipo:<refinamiento|gap|contraejemplo|none>

**Descripción:** una frase, qué surgió.

**Implicancia para el playbook:** qué archivo + sección + qué cambio sugerido.

**Status:** pendiente | en revisión | aprobado-pendiente-aplicar | rechazado | diferido
```

### Tipos

- **refinamiento:** algo del playbook que hay que ajustar (ej: cambiar un pricing, ajustar un pitch, reescribir un principio).
- **gap:** algo que falta en el playbook (ej: no había template para X, no había principio para manejar Y).
- **contraejemplo:** un caso donde una regla del playbook no aplicó o se rompió. Útil para refinar el alcance de la regla.
- **none:** la sesión no produjo learnings. Se documenta igual para dejar rastro de que se revisó.

### Numeración LRN-NNN

Correlativa, sin reuso. Aunque un item se elimine al consolidarse, su número queda quemado. Permite referenciar learnings desde otros lugares (ej: `case-notes.md` puede mencionar "ver LRN-007").

---

## Entries vivos

(Vacío. Los entries se van apendiendo al cerrar cada caso.)
