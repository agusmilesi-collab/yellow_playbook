# Roadmap — Acciones del negocio

**Última actualización:** Mayo 2026
**Owner:** Agustin

Este archivo contiene todas las acciones a ejecutar. El playbook (resto del repo) contiene el know-how. **Acción y conocimiento están separados a propósito.**

Cuando una acción se completa, se mueve a la sección "Done" con fecha. Las acciones nuevas se agregan a "Backlog" y se promueven a "Sprint actual" cuando corresponda.

---

## Decisión estratégica vigente

> **Terminar playbook v0.2 antes de iniciar venta.**
> Decisión tomada en mayo 2026. A revisar el 1 de junio 2026 con datos: si el playbook no se completó y/o aún no se ejecutó la primera venta, evaluar si la decisión fue correcta o si fue procrastinación productiva.

---

## Sprint actual: Completar playbook v0.2

**Objetivo:** dejar el playbook listo para soportar el primer caso real (psicóloga).

### Pendiente

- [ ] Completar todos los archivos de `../03-process/` (5 archivos: discovery, proposal, closing, delivery, handoff).
- [ ] Completar `../04-templates/` con todas las plantillas.
- [ ] Completar `../06-operations/contracts.md` con modelo de contrato.
- [ ] Completar `../06-operations/tools.md` con stack de herramientas.
- [ ] Completar `../06-operations/finance.md` con cómo facturar y manejo de caja.
- [ ] Revisar todo el repo aplicando reglas SSOT (no debe haber duplicación entre archivos).
- [ ] Validar que el repo es onboarding-ready: pedirle a una IA fresca que lo lea y produzca un diagnóstico de prueba.

### En curso

(nada aún)

### Done

### Mayo 2026 — v0.3
- ✅ Integración de Good Services (Lou Downe) como `../02-methodology/good-services.md`.
- ✅ Carpeta `../07-runbook/` con 7 archivos de procedimiento por escenario.
- ✅ Carpeta `../08-training/` con plan de capacitación de 4 semanas.
- ✅ Integración de Good Services al flujo de delivery.

---

## Sprint siguiente: Caso piloto con psicóloga

**Objetivo:** ejecutar el primer caso real completo, documentado, con resultados medidos. Convertirlo en caso de venta replicable.

### Pendiente

- [ ] Sentarse formalmente con la psicóloga como cliente piloto: definir alcance, plazos, expectativas.
- [ ] Aplicar el método punta a punta (discovery → diagnóstico → rediseño → implementación → medición).
- [ ] Implementar el rediseño técnico:
  - [ ] One-pager visual (capa 1).
  - [ ] Capa intermedia con dimensiones y scores.
  - [ ] Capa técnica con análisis extendido.
  - [ ] Sistema de codificación asistida con IA.
- [ ] Hacer test con 2-3 clientes finales reales de la psicóloga (RRHH, legal, deportivo).
- [ ] Medir KPIs durante 60-90 días post-implementación.
- [ ] Actualizar `../05-examples/case-psicologa.md` con resultados reales (no hipótesis).
- [ ] Pedir testimonio formal.

---

## Sprint siguiente al piloto: Activar venta

**Objetivo:** vender el primer cliente pago a precio normal usando el caso de la psicóloga como prueba social.

### Pendiente (sin abrir aún)

- [ ] Identificar 10-15 prospects que califiquen contra el ICP.
- [ ] Reescribir messaging con balance push-pull (ver `../03-process/01-discovery.md`).
- [ ] Convertir el HTML existente en landing simple con Calendly.
- [ ] Posicionar LinkedIn personal como UX Strategist (headline + about).
- [ ] Mandar primer round de mensajes a prospects.
- [ ] Atender discovery calls que surjan.
- [ ] Cerrar primer cliente a precio normal (Modelo B según `../06-operations/pricing.md`).

---

## Próxima iniciativa estratégica — Repo como sistema de aprendizaje continuo

**Status:** prompt redactado, pendiente de ejecución. A iniciar apenas se complete la revisión actual del playbook.

**Origen:** este prompt vivía al final del `README.md` como recordatorio. Se movió acá para no perderlo y para que tenga el peso estratégico que merece.

**Tesis del cambio:** hoy el playbook se desactualiza porque las correcciones que doy en sesión (con IA o internas) no quedan capturadas. Necesito un sistema con tres capas separadas — playbook estable, casos por cliente, aprendizajes pendientes — inspirado en el harness de agentes long-running de Anthropic.

### Prompt completo a ejecutar

> Quiero reestructurar este repo (playbook de Yellow) para que funcione como un sistema de aprendizaje continuo, inspirado en el harness de agentes long-running de Anthropic (initializer + coding agent con progress file).
>
> **CONTEXTO**
> - Yellow es mi empresa de service design. Este repo es el SSOT de mi metodología: service design by doing, jobs to be done, etc.
> - Hoy te clono y te paso entrevistas de cliente para que me devuelvas diagnóstico y plan de implementación basados en el playbook.
> - Problema: cuando aprendo cosas nuevas o te corrijo en una sesión, ese conocimiento se pierde. El playbook queda desactualizado.
>
> **OBJETIVO**
> Armar una estructura de repo + reglas en CLAUDE.md que separen tres capas:
> 1. Playbook estable (solo se modifica con mi aprobación explícita).
> 2. Casos (un folder por entrevista de cliente, con inputs y outputs).
> 3. Aprendizajes pendientes (append-only, capturados automáticamente al final de cada caso, revisados y consolidados al playbook por mí).
>
> **QUE QUIERO QUE HAGAS AHORA**
>
> **Paso 1 — Diagnóstico**
> - Listá la estructura actual del repo y leé los archivos principales del playbook.
> - Identificá qué piezas ya tengo y qué falta para soportar la estructura propuesta.
> - No modifiques nada todavía. Mostrame el diagnóstico y esperá luz verde.
>
> **Paso 2 — Propuesta (después de mi OK)**
> - Proponé estructura concreta de carpetas: `playbook/`, `cases/`, `learnings/`.
> - Proponé el formato de:
>   - `cases/<slug-cliente>/` con: `transcript.md`, `diagnostico.md`, `plan.md`, `case-notes.md`
>   - `learnings/learnings-pending.md` (append-only, formato: [fecha] [caso] [tipo: refinamiento|gap|contraejemplo] [descripción] [implicancia para playbook])
>   - `playbook/quality-checklist.json` (criterios de calidad que todo diagnóstico debe cumplir, en JSON porque los modelos lo respetan más que markdown)
> - Proponé el contenido de `CLAUDE.md` con reglas duras:
>   - Nunca modificar `playbook/` directamente. Los cambios se proponen como diff en `learnings-pending.md` y requieren mi aprobación.
>   - Antes de diagnosticar un caso: leer `playbook/` Y `learnings/learnings-pending.md` (los pendientes son conocimiento vigente).
>   - Al terminar un caso: escribir obligatoriamente en `learnings-pending.md` cualquier insight, corrección que te di durante la sesión, gap del playbook, o contraejemplo. Si no detectaste nada, dejarlo explícito.
>   - Auto-evaluar el diagnóstico contra `quality-checklist.json` antes de entregármelo.
> - Proponé también un prompt de consolidación separado: cuando yo lo dispare, leés `learnings-pending.md` + playbook actual y me proponés un diff concreto al playbook (qué sección tocar, qué agregar, qué reformular). Yo apruebo el commit.
> - Mostrame todo como propuesta, no apliques cambios.
>
> **Paso 3 — Implementación (después de mi OK al paso 2)**
> - Aplicá la reestructuración en commits chicos y descriptivos.
> - Si hay contenido del playbook actual que conviene reorganizar para encajar en la nueva estructura, mostrame el plan de movimiento antes de tocar archivos.
> - Al final, dejame un README breve que explique cómo usar el repo en el día a día (cómo arrancar un caso nuevo, cómo correr la consolidación).
>
> **REGLAS DURANTE ESA SESIÓN**
> - Trabajá incremental, paso por paso. No intentes one-shot todo.
> - Después de cada paso, parás y esperás mi confirmación.
> - Si encontrás ambigüedad, preguntá antes de asumir.

---

## Backlog (post-primer cliente)

Ideas y acciones que no son prioridad ahora pero hay que registrar para no perderlas.

### Producto y servicio

- [ ] Definir si conviene productizar parte del servicio (workshop grabado, plantillas vendibles).
- [ ] Evaluar si tiene sentido un servicio "lite" para profesionales con menor capacidad de pago.
- [ ] Pensar versión enterprise para empresas medianas (ticket más alto).

### Crecimiento y canales

- [ ] Sistema de referidos estructural post-cierre.
- [ ] Calendario de contenido en LinkedIn (1 post semanal sobre service redesign / JTBD aplicado).
- [ ] Workshop público "Cómo dirigir tu servicio como una experiencia premium".
- [ ] Identificar 3-5 comunidades profesionales donde está mi ICP (colegios profesionales, asociaciones, grupos LinkedIn).

### Operaciones e IA

- [ ] Configurar Claude Project con todo el repo cargado.
- [ ] Probar a fondo la generación de borradores de diagnóstico con notas crudas.
- [ ] Definir flujo de trabajo human-in-the-loop: dónde la IA propone y dónde Agustin decide.
- [ ] Documentar el flujo en `../06-operations/ai-workflow.md`.

### Branding y posicionamiento

- [ ] Decidir si conviene marca personal (Agustin) o marca de servicio (un nombre distinto).
- [ ] Definir paleta visual y tipografía consistente para entregables.
- [ ] Diseñar plantilla de propuesta y diagnóstico con identidad visual.

---

## Done (histórico)

### Mayo 2026

- ✅ Articulación de identidad profesional como UX Strategist.
- ✅ Definición de oferta principal y los 3 niveles de pitch.
- ✅ Documentación de Service Design (10 principios) y JTBD (Christensen + Klement).
- ✅ Diagnóstico completo del caso psicóloga como propuesta.
- ✅ Auto-aplicación del método al propio servicio.
- ✅ Definición de pricing (A entrada / B 2000 USD / C 3000 USD).
- ✅ Restructuración del playbook con SSOT y onboarding-ready (v0.2).
- ✅ Decisión: completar playbook antes de vender, con revisión 1 de junio.
- ✅ **2026-05-09:** Reescritura de oferta v0.3 — eliminada la promesa de "30-50% más" como número específico (no validado empíricamente). Reordenada la jerarquía: rediseño de la entrega + diferenciación + experiencia alineada con el cliente como promesas primarias; cobrar más pasa a consecuencia. Nivel 1 reemplazado por versión llana con oficios concretos. Cambios propagados a `onboarding.md`, `jtbd.md` y `case-psicologa.md`.

---

## Métricas de tracking

Para revisar mensualmente:

| Métrica | Mayo 2026 | Junio 2026 | Julio 2026 |
|---|---|---|---|
| Avance playbook v0.2 | 60% | — | — |
| Caso piloto cerrado | No | — | — |
| Discovery calls hechas | 0 | — | — |
| Propuestas enviadas | 0 | — | — |
| Clientes pagos | 0 | — | — |
| Facturación del servicio | $0 | — | — |
