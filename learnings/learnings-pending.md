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

**Descripción:** la metodología llega hasta diagnóstico + propuesta + plan, y se detiene ahí. Falta una capa de autonomía operativa: cómo el cliente replica el entregable en cada nuevo caso sin volver a contratar al consultor. El owner formuló el concepto como "Kit replicable" el 2026-05-11: un conjunto de artefactos ejecutables (prompts para IA, plantillas, trainings interactivos en HTML, instrucciones paso a paso) que se entregan junto con el plan y dejan al cliente operando el sistema en autonomía. Cada item con estructura consistente: problema que resuelve, momento de uso, contenido, instrucciones de uso, ejemplo de salida.

**Implicancia para el playbook:** pieza metodológica que se puede consolidar de manera independiente al resto del concepto. Dos cambios sugeridos:

1. `playbook/02-methodology/`: incorporar "autonomía replicable" como principio o subprincipio (la metodología cierra cuando el cliente puede operar solo, no cuando el consultor entrega el plan).
2. `playbook/04-templates/diagnosis-template.md` y `proposal-template.md`: agregar el Kit como entregable explícito.

Variantes según cliente: cliente solo (plantilla + prompt + manual), cliente con equipo administrativo (plantilla + protocolo, IA opcional), cliente que delega a proveedor externo (especificación técnica en lugar de plantilla terminada).

**Dependencias técnicas (van al roadmap como módulos a construir):**

- Microsite por cliente (`yellow.com.ar/c/<slug>`) para entregar el kit en HTML navegable. Stack candidato: Next.js + Vercel + Supabase.
- Biblioteca de kits replicables dentro del playbook para almacenar y categorizar los items reutilizables que se acumulan caso tras caso.

**Status:** diferido. Por decisión del owner (2026-05-11), los módulos técnicos van al roadmap y la pieza metodológica se valida primero contra el caso piloto de la psicóloga antes de consolidar al playbook.
