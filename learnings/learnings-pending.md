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

### LRN-001 | 2026-05-10 | caso:meta | tipo:gap

**Descripción:** la metodología llega hasta diagnóstico + propuesta de rediseño + plan de implementación, y se detiene ahí. Falta una capa de autonomía operativa: cómo el cliente replica el entregable en cada nuevo caso (la psicóloga, en su caso #6, sin volver a contratar al consultor). Hoy el cliente queda dependiente del consultor o de la IA del consultor para producir cada nueva instancia.

**Implicancia para el playbook:** introducir el concepto de "Kit de replicación" como entregable adicional al cierre de cada proyecto. Tres piezas mínimas: (a) plantilla del entregable con placeholders, (b) prompt operativo afinado para Claude o ChatGPT que tome notas crudas del cliente y genere la instancia, (c) manual corto de uso con un caso resuelto como ejemplo. Cuarto componente opcional: sesión de transferencia de 1-2 horas. Tres lugares del repo a tocar:

1. `playbook/02-methodology/`: incorporar "autonomía replicable" como principio o subprincipio (la metodología cierra cuando el cliente puede operar solo, no cuando el consultor entrega el plan).
2. `playbook/04-templates/diagnosis-template.md`: agregar sección "Kit de replicación" después de la propuesta de rediseño.
3. `playbook/04-templates/proposal-template.md`: incluir el kit en "Lo que te propongo" como entregable explícito desde la propuesta.

Variantes según cliente: cliente solo (plantilla + prompt + manual), cliente con equipo administrativo (plantilla + protocolo paso a paso, IA opcional), cliente que delega a proveedor externo (especificación técnica del entregable en lugar de plantilla terminada).

**Status:** pendiente
