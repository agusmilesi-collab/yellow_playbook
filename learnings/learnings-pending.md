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

**Status:** diferido parcial. Por decisión del owner (2026-05-11), los módulos técnicos se registran como proyectos en Notion y la pieza metodológica se valida contra el caso piloto antes de consolidar. **Actualización 2026-06-10:** la parte de biblioteca quedó activada vía LRN-019 (e): existe `playbook/09-library/` sembrada con los módulos del caso Lisandro. El microsite por cliente sigue diferido (registrado en Notion "Projects & Tasks", ya no en el repo).

---

### LRN-002 | 2026-05-14 | caso:meta | tipo:gap

**Descripción:** misión explícita de Yellow. El owner propuso y aprobó en su momento: *"Liberamos a los profesionales independientes de competir por precio, rediseñando la experiencia que entregan."*

**Status:** rechazado (2026-05-18). La dirección de identidad la fija LRN-011 ("Gerente de Experiencia del Cliente", fractional). La frase de misión queda acá como rastro por si se quiere recuperar; no se consolida `mission.md`.

---

### LRN-003 y LRN-004 — CONSOLIDADOS el 2026-05-18

System of Progress (LRN-003) y cuarto pilar Value-Based Strategy (LRN-004) consolidados en bloque. Rastro en los changelogs de los archivos modificados (ver versiones v0.7/v0.4/v0.3 del 2026-05-18).

---

### LRN-005 | 2026-05-18 | caso:meta | tipo:gap

**Descripción:** dos piezas del playbook quedaron desactualizadas respecto del cuarto pilar. Deuda conocida y deliberada, con dueño y fecha:

1. **`playbook/05-examples/case-psicologa.md` (caso canónico, espejo de `depth-reference`).** Sin Value Map, lógica vieja de severidad y violaciones de regla F. Se rehace recién en el **proyecto Caso Campos HR** (caso real, posterior a E1) con corpus real de Switch Interviews. Mientras tanto rige el check `template-precedence` de `quality-checklist.json` v0.4: ante conflicto, mandan plantilla + checklist por sobre el espejo.
2. **`playbook/08-training/`.** Semana 3 enseña el flujo de 3 pilares con severidad; el README declara "2 modelos JTBD" mientras semana 1 habla de "3 escuelas" (drift interno detectado en T04). Se actualiza junto con el rehacer del caso canónico, para no reescribir dos veces.

**Status:** pendiente. Se cierra en el proyecto Caso Campos HR.

---

### LRN-006 y LRN-007 — CONSOLIDADOS el 2026-05-18

Bio real de Agustín y onboarding como índice de entrada, consolidados a `00-start-here/onboarding.md` (v0.4).

---

### LRN-008, LRN-009 y LRN-010 — CONSOLIDADOS el 2026-06-10 vía LRN-014

El trío diferido (estructura núcleo + ejecución, Modelo A sin validación con P5 acotado, duraciones con techo de 3 meses) se resolvió con la propuesta integral LRN-014, aprobada en bloque. Rastro en los changelogs de `principles.md` (v0.4), `03-process/04-delivery.md` (v0.8), `01-identity/offer.md` (v0.9) y `06-operations/pricing.md` (v0.4).

---

### LRN-011 — CONSOLIDADO COMPLETO el 2026-06-10

El núcleo (oferta reanclada a "Gerente de Experiencia del Cliente", fractional) se había consolidado el 2026-05-18 (`offer.md` v0.7). El residual (swap de "VP of Customer" en `03-process/01-discovery.md` y `02-proposal.md`) se aplicó el 2026-06-10 (v0.6 de ambos).

---

### LRN-012 — CONSOLIDADO PARCIAL el 2026-05-18

Tiers por complejidad, job dominante por tier y salvedad del scoring consolidados a `01-identity/icp.md` (v0.4).

**Residual pendiente:** revisión de "Señales de buen/mal fit" y rework del scoring (la dimensión "Problema bien diagnosticado" castiga al Tier 1). Guardarraíl vigente: no afinar tanto el ICP que termine siendo un nicho de 3 empresas.

**Status:** parcial. Residual pendiente de definición del owner.

---

### LRN-013 | 2026-06-10 | caso:lisandro | tipo:contraejemplo

**Descripción:** primera venta real del negocio (contrato ARS 500.000, sistema de gestión instalado + onboarding + refinamiento). La venta valida y tensiona el playbook a la vez. Valida: el cliente compró exactamente lo que la Tesis promete (sistema vivo instalado y operando); el documento fue soporte, el sistema fue el producto. Tensiona: (a) el cliente está fuera del ICP (empleado con mando dentro de una empresa); (b) no hubo Switch Interviews (el comprador es el usuario); (c) el precio (~USD 400-500) quedó en rango Modelo A por un alcance con forma de C chico; (d) se facturó en ARS.

**Implicancia para el playbook:** la decisión estratégica sigue abierta, ya planteada en `cases/Lisandro/analisis-yellow-lisandro.md` Parte III: reencuadrar el ICP para incluir al "profesional con mando que entrega gestión hacia adentro", o declarar línea de producto aparte con su propio nombre y pricing. Si se reencuadra: ajustar `icp.md` con el job de Lisandro como variante del job base.

**Status:** parcial (2026-06-10). Consolidadas las partes mecánicas: política de moneda ARS y nota de precio fundacional en `pricing.md` (v0.4), cláusulas del contrato real absorbidas en `contracts.md` (v0.3), tracking en `finance.md` (v0.4). **Pendiente del owner:** la decisión de línea de producto / reencuadre del ICP.

---

### LRN-014 a LRN-019 — CONSOLIDADOS el 2026-06-10 (aprobación en bloque del owner)

Hallazgos de la auditoría T04, aplicados en la sesión de consolidación del 2026-06-10:

- **LRN-014** (resolución integral de 008/009/010): `principles.md` v0.4, `04-delivery.md` v0.8, `offer.md` v0.9, `pricing.md` v0.4.
- **LRN-015** (regla F en plantillas): `diagnosis-template.md` v0.4, `proposal-template.md` v0.4, `04-delivery.md` v0.8.
- **LRN-016** (checklist v0.4 con `applies-to`, fuentes arregladas, checks de propuesta absorbidos, checks nuevos): `quality-checklist.json` v0.4, `02-proposal.md` v0.6.
- **LRN-017** (plantillas faltantes): `plan-template.md`, `switch-interview-notes-template.md`, `system-spec-template.md`, `lessons-learned-template.md`, `case-notes-template.md` (v0.1), `CLAUDE.md` e `INDEX.md` actualizados.
- **LRN-018** (columna de automatización): `03-process/00-pipeline.md` v0.1, `ai-workflow.md` v0.4 reescrito a Claude Code. Borrador `pipeline-DRAFT.md` eliminado al consolidarse.
- **LRN-019** (barrido de coherencia): `jtbd.md` v0.8, `onboarding.md` v0.5, `01-discovery.md` v0.6, `05-handoff.md` v0.5, `contracts.md` v0.3, `finance.md` v0.4, `09-library/` v0.1.

**Residual pendiente de LRN-019 (b):** denominación paraguas del negocio. "UX Strategy" sigue como nombre en `glossary.md`, `contracts.md` (título de la carta), `finance.md` y `onboarding.md`, mientras la oferta se ancla a "Gerente de Experiencia del Cliente (fractional)" y la marca es Yellow. Decisión de naming del owner; al decidirse, barrido en una pasada.

---

### LRN-021 — CONSOLIDADO el 2026-06-11

**Descripción:** la metodología tenía un hueco del lado de la oferta: los 4 pilares trabajan la demanda (qué valora el cliente, cómo percibe la entrega) y ninguno daba herramientas para rendimiento, cuello de botella, capacidad o estandarización, que es justo lo que necesitan la Fase 4 (build del sistema vivo) y la escala. El cuarto pilar incluso nombra "bajar la WTS" como media jugada del dual advantage sin dar el método. Evidencia en casos: psicóloga (codificación manual = restricción que ancla la facturación), Lisandro (es el cuello de botella de su equipo).

**Resolución:** sumada la capa "Ingeniería de operaciones del servicio" como SSOT nuevo (`playbook/02-methodology/service-operations.md`), explícitamente fuera de la cascada de 4 pilares de diagnóstico. Núcleo: Teoría de Restricciones (Goldratt, "La Meta"), flujo Lean (Womack/Jones), estandarización contra personalización (Levitt, "Production-Line Approach to Service", 1972), productización. Atribución del service blueprint corregida a su origen (Shostack, 1984). Salvedad de scope declarada: fuera el aparato industrial pesado (Six Sigma, control estadístico, teoría de colas), escala equivocada para el ICP.

**Consolidado el 2026-06-11** (aprobación directa del owner en sesión). Archivos: `service-operations.md` v0.1 (nuevo), `value-based-strategy.md` v0.3 (conexión del stick), `04-delivery.md` v0.9 (restricción antes del build), `glossary.md` v0.6 (términos nuevos), `INDEX.md` v0.10, `onboarding.md` y `README.md` (capa de oferta sumada al mapa). Rastro en los changelogs de cada archivo.

---

### LRN-020 | 2026-06-10 | caso:meta | tipo:gap

**Descripción:** idea del owner: las Switch Interviews tocan clientes de los clientes que muchas veces calzan en el ICP. La entrevista misma podría precalentarlos como leads y revelar de antemano si tienen un gap propio. **Guardarraíl ético antes de operar:** la entrevista se hace en nombre del cliente y para su rediseño. Vender durante la entrevista sesga la evidencia (degrada el corpus de P5) y traiciona la confianza del cliente que presentó el contacto. La forma segura: jamás pitchear en la entrevista; registrar al entrevistado en un radar comercial interno; reactivar recién después del cierre del proyecto, idealmente con el propio cliente como puente, o cuando el entrevistado pregunta espontáneamente.

**Implicancia para el playbook:** (1) `05-handoff.md`: paso nuevo post-cierre "revisar radar de entrevistados" (contacto con permiso del cliente). (2) `switch-interview-notes-template.md`: campo interno opcional "señal de gap propio del entrevistado" (anotación, sin actuar en vivo). (3) `01-discovery.md` runbook pre-discovery: "radar de entrevistas" como origen de prospect. Definir redacción exacta con el owner antes de consolidar.

**Status:** pendiente

---

### LRN-022 | 2026-07-30 | caso:meta | tipo:gap

**Descripción:** el owner elevó una regla de copy al mismo rango que la prohibición de *"no es X, es Y"*: **prohibidas las metáforas**. Se dice literalmente el mecanismo (quién hace qué y qué consecuencia observable produce). Ejemplo que la disparó, corregido en un documento de cliente: *"la forma más común de que un cambio se caiga es que el dueño siga atendiendo por la ventanilla vieja"* pasó a *"el dueño delega la conducción y sigue respondiendo consultas que ahora le corresponden a otro, con lo cual el equipo aprende que la vía rápida sigue siendo él y deja de usar la nueva"*. Razón: la metáfora obliga al lector a traducir y admite varias lecturas, mientras que el mecanismo dicho literalmente se puede discutir y verificar. Prueba operativa: si la frase no se puede verificar mirando la empresa, todavía es figurada. Excepciones: los términos técnicos ya instalados (cuello de botella, restricción) y el ejemplo didáctico declarado como tal.

**Implicancia para el playbook:** `playbook/02-methodology/style-guide.md`, sección nueva al mismo nivel que la F ("Sin recurso de negación-afirmación"). Sugerido: **"H. Sin metáforas"**, con la prueba de verificación y las dos excepciones. Revisar además si `quality-checklist.json` tiene un ítem de reglas de copy donde sumarla, para que la auto-evaluación de R4 la controle.

**Status:** pendiente

**Nota:** ya está aplicada en el repo de Campos HR (contrato `CLAUDE.md`, los 7 prompts de `engine/`, `engine/validacion-humana.md` y `templates/outputs/propuesta.md`). Acá queda pendiente porque R1 reserva los cambios de `playbook/` a una sesión de consolidación.

---

### LRN-023 | 2026-11-13 | caso:meta | tipo:gap

**Descripción:** en el latido del CFO del 13/11/2026 (estado de resultados de noviembre, margen de Lisandro, contrato modelo, medios de pago, cómo facturar) aparecieron tres huecos de `playbook/06-operations/finance.md`: (a) la situación impositiva sigue como "[Definir según tu monotributo / responsable inscripto]", aunque el contrato de Lisandro dice Monotributo; (b) los costos baseline hablan de Claude Pro USD 20 y hoy el gasto confirmado es Claude Max USD 100, más Vercel, Supabase, Resend y dominios sin monto; (c) no hay registro de horas por caso, y sin horas el margen por cliente (KR del CFO) no se puede medir.

**Implicancia para el playbook:** `finance.md`: completar situación impositiva cuando el board conteste `agentes/cfo/como-facturar.md`; actualizar costos del negocio con los montos que conteste el board (`agentes/cfo/informes/2026-11-estado-de-resultados.md`, sección 5); agregar "horas por caso" a la planilla de tracking y la definición de margen que apruebe el board (`agentes/cfo/margen-lisandro.md`, sección 4). `contracts.md`: evaluar sumar la cláusula de atrasos de `agentes/cfo/contrato-modelo.md` si el board aprueba el modelo.

**Status:** pendiente (espera respuestas del board)
