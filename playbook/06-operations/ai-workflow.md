# AI Workflow

**SSOT** del flujo de trabajo con asistentes de IA.

Define qué hace la IA, qué hace Agustin, y cómo se conectan.

---

## Premisa fundamental

La IA es un **asistente**, no un reemplazo. Acelera la entrega y mantiene consistencia. NO toma decisiones estratégicas, NO vende, NO atiende clientes.

**Regla:** human-in-the-loop. Cualquier output de la IA pasa por revisión y curaduría de Agustin antes de llegar al cliente.

---

## Plataforma de operación

**La operación real es Claude Code sobre este repo.** El repo entero es el contexto: `CLAUDE.md` es el contrato duro (R1-R6), `playbook/` es el conocimiento, `cases/<slug>/` son los expedientes de trabajo y `learnings/` es el canal de mejora. No hace falta cargar nada a mano: la IA lee y escribe archivos del caso directamente, bajo las reglas del contrato.

**El mapa que ordena la operación es `../03-process/00-pipeline.md`:** por etapa define qué archivos entran, qué archivos salen contra qué plantilla, qué checks aplican y quién cierra cada Definition of Done. La IA ubica el caso por el bloque YAML de su `case-notes.md` y opera la etapa correspondiente.

**Alternativa de bolsillo** (para trabajar desde el teléfono o fuera del repo): Claude Projects con el playbook cargado como contexto. Sirve para borradores rápidos; el resultado se vuelca después a los archivos del caso. El repo es siempre la fuente de verdad.

---

## Qué hace la IA

### Generación de borradores

A partir de los archivos del caso, generar primer borrador de:

- Notas estructuradas de discovery (`../04-templates/discovery-notes-template.md`).
- Notas de Switch Interview (`../04-templates/switch-interview-notes-template.md`).
- Diagnóstico (`../04-templates/diagnosis-template.md`).
- Plan (`../04-templates/plan-template.md`).
- Spec del sistema (`../04-templates/system-spec-template.md`).
- Propuesta (`../04-templates/proposal-template.md`).
- Contrato y factura (desde `contracts.md` y `finance.md`).
- Emails de cierre, follow-up, testimonio, referidos; lessons learned (`../04-templates/lessons-learned-template.md`).

### Aplicación de frameworks

Aplicar de manera consistente la cascada de 4 pilares (`../02-methodology/`), el vocabulario del glossary y los principios no-negociables (`../00-start-here/principles.md`).

### Gate de calidad

Antes de presentar cualquier output al owner, recorrer `../quality-checklist.json` filtrado por `applies-to` según el tipo de output (R4). Ante un fail, reescribir.

### Identificación de gaps

- Marcar información faltante con ❓, hipótesis con 🔵, verificado con ✅.
- Sugerir preguntas de seguimiento al cliente.

---

## Qué NO hace la IA

### Interacción con clientes

- NO hace discovery calls ni Switch Interviews.
- NO presenta propuestas ni diagnósticos.
- NO maneja objeciones en vivo.
- NO cobra ni firma contratos.

### Decisiones estratégicas

- NO decide qué cliente tomar y cuál declinar.
- NO decide pricing fuera del rango establecido.
- NO avanza la etapa de un caso: el estado lo cambia quien cierra el DoD, siempre una acción humana (regla 2 del pipeline).

### Co-creación

- NO sustituye sesiones con clientes finales (P5) ni con empleados del cliente (P9).
- NO interpreta señales no-verbales del cliente.

---

## Flujos de trabajo concretos

### Flujo 1: Post discovery call

**Input:** notas crudas o transcripción en `cases/<slug>/transcript.md`.

1. Pedir a la IA: "Estructurá la discovery del caso <slug>".
2. La IA produce notas estructuradas + score ICP + hipótesis (3 jobs, meta-patrón) + gaps, y actualiza la bitácora del caso.
3. Revisar y curar. Decidir si avanzar.

**Tiempo Agustin:** 10-15 minutos de revisión.

### Flujo 2: Generación de propuesta

**Input:** notas estructuradas del caso + decisión de modelo.

1. Pedir: "Generá la propuesta del caso <slug>, Modelo [X]".
2. La IA produce el borrador con palabras textuales del cliente, pricing exacto y el gate de propuesta pasado.
3. Refinar "Lo que creo que está pasando", validar pricing, enviar.

**Tiempo Agustin:** 30-45 minutos.

### Flujo 3: Diagnóstico y plan

**Input:** transcript + notas de Switch Interviews del caso.

1. Pedir: "Generá el diagnóstico del caso <slug>" (la IA corre la cascada en orden: blueprint → JTBD → Value Map → touchpoints → Good Services → diagnóstico central).
2. Revisar a fondo (es el documento más importante). Validar con el cliente.
3. Pedir: "Derivá el plan y la spec del sistema" (plantillas de plan y system-spec).

**Tiempo Agustin:** 4-6 horas de revisión entre ambos.

### Flujo 4: Comunicaciones y cierre de caso

1. Pedir el texto que toque (cierre, follow-up, testimonio, referidos) con el caso como contexto.
2. Al cerrar: la IA genera lessons learned, propone módulos para `../09-library/` y vuelca learnings a `learnings/learnings-pending.md` (R3).

**Tiempo Agustin:** 5-10 minutos por comunicación.

---

## Validación periódica

Cada 5 outputs generados, revisar:

- ¿Se mantiene el vocabulario del glossary y los íconos de certeza?
- ¿La profundidad es la esperada?
- ¿El gate de calidad está filtrando lo que debería?
- ¿Aparecen patrones de error? → entry en `learnings/learnings-pending.md`.

---

## Lo que NO se puede automatizar (por ahora)

Por más que la IA mejore, estos pasos son irreductiblemente humanos:

1. **Detectar lo que el cliente NO dice.** Lectura corporal, silencios significativos, omisiones reveladoras.
2. **Construir confianza.** Solo se construye persona-a-persona.
3. **Cobrar.** Aunque la factura la genere un sistema, la decisión de cobrar es humana.
4. **Decidir cuándo declinar un cliente.** Requiere criterio acumulado.
5. **Co-crear con clientes finales.** Requiere presencia, empatía, improvisación.
6. **Presentar el diagnóstico y conducir el onboarding.** Requiere defender hallazgos e instalar el sistema en vivo.

Estas tareas son el 80% del valor cobrado. La IA libera tiempo de las tareas mecánicas para que Agustin se concentre en estas.

---

## Changelog del archivo

- **2026-06-10 (v0.4):** consolidación de LRN-018. Reescritura a la plataforma real de operación: Claude Code sobre el repo con `CLAUDE.md` como contrato y `00-pipeline.md` como mapa; Claude Projects pasa a alternativa de bolsillo. Flujos reformulados como flujos sobre archivos del caso, con el gate de `quality-checklist.json` filtrado por `applies-to`. Lista de borradores ampliada a las plantillas nuevas (LRN-017). Aprobado por el owner para consolidación en bloque (sesión 2026-06-10).
- **2026-05-13 (v0.3):** reglas del system prompt sugerido apuntan a `CLAUDE.md` + `principles.md` en lugar de duplicar 8 ítems inline. Evita drift entre el contrato del repo y el system prompt del Claude Project. Aprobado directo por owner en sesión.
- **Mayo 2026:** versión inicial v0.2.
