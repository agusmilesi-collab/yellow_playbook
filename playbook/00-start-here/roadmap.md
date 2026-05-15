# Roadmap: Acciones del negocio

**Última actualización:** Mayo 2026
**Owner:** Agustin

Este archivo contiene todas las acciones a ejecutar. El playbook (resto del repo) contiene el know-how. **Acción y conocimiento están separados a propósito.**

Cuando una acción se completa, se mueve a la sección "Done" con fecha. Las acciones nuevas se agregan a "Backlog" y se promueven a "Sprint actual" cuando corresponda.

---

## Decisión estratégica vigente

> **Terminar playbook v0.2 antes de iniciar venta.**
> Decisión tomada en mayo 2026. A revisar el 1 de junio 2026 con datos: si el playbook no se completó y/o aún no se ejecutó la primera venta, evaluar si la decisión fue correcta o si fue procrastinación productiva.

---

## Sprint actual: Caso piloto con psicóloga + auditoría SSOT

**Objetivo:** ejecutar el primer caso real completo (psicóloga) y mantener el playbook limpio mientras se ejecuta.

### Pendiente

- [ ] Sentarse formalmente con la psicóloga como cliente piloto: definir alcance, plazos, expectativas.
- [ ] Aplicar el método punta a punta (discovery → diagnóstico → rediseño → implementación → medición).
- [ ] Validar que el repo es onboarding-ready: pedirle a una IA fresca que lo lea y produzca un diagnóstico de prueba.

### En curso

- Auditoría SSOT del repo (iteración 2026-05-13: eliminado `tools.md`, consolidados pricing/forma de pago/moneda/modelos en offer.md, barrido completo de duplicaciones del playbook).

### Done

### Mayo 2026: v0.5 / v0.6
- ✅ **2026-05-13:** auditoría SSOT iteración 1: eliminado `06-operations/tools.md`; "forma de pago 50/50" y "moneda USD" consolidadas en `pricing.md`; reglas del system prompt de `ai-workflow.md` apuntando a `CLAUDE.md`/`principles.md` en vez de duplicar inline.
- ✅ **2026-05-13:** SSOT de modelos A/B/C consolidado en `01-identity/offer.md`; `pricing.md` queda solo con precio + datos económicos; `onboarding.md` y `03-process/02-proposal.md` colapsados a punteros.
- ✅ **2026-05-13:** auditoría SSOT iteración 2 completa: bug "4 vs 5 preguntas" del discovery template arreglado; protocolo Switch Interview triplicado consolidado en `jtbd.md`; README onboarding flow colapsado a puntero; "Lo que hago/cómo se nombra", pitch 90s, red/green flags y reglas de cierre consolidados a sus SSOT.
- ✅ **2026-05-13:** training de 4 semanas reescrito completo (`08-training/`). Ahora autocontenido (toda la teoría inline, sin lecturas externas) y alineado con metodología actual: 3 escuelas JTBD, meta-patrón, P0 sistemas operativos, Switch Interview completa, 5 preguntas + 35 min de discovery, prototipo manual + spec del sistema. Archivos renombrados: `semana-2-discovery-research.md`, `semana-3-diagnostico-sistema.md`.

### Mayo 2026: v0.3 / v0.4
- ✅ Reestructuración tripartita (`playbook/` + `cases/` + `learnings/`). Agregados `CLAUDE.md` y `quality-checklist.json`.
- ✅ Integración de Good Services (Lou Downe) como `../02-methodology/good-services.md`.
- ✅ Carpeta `../07-runbook/` con 7 archivos de procedimiento por escenario (consolidados el 2026-05-13 dentro de `../03-process/` como sección "Runbook operativo" al final de cada archivo; carpeta eliminada vía LRN-009).
- ✅ Carpeta `../08-training/` con plan de capacitación de 4 semanas.
- ✅ Integración de Good Services al flujo de delivery.
- ✅ Completados todos los archivos de `../03-process/`, `../04-templates/`, `../06-operations/contracts.md` y `../06-operations/finance.md`.

---

## Sprint siguiente: Cierre del piloto + activar venta

**Objetivo del piloto:** documentar el caso real completo con resultados medidos. Convertirlo en caso de venta replicable.

### Pendiente piloto

- [ ] Implementar el rediseño técnico:
  - [ ] Informe de una página visual (capa 1).
  - [ ] Capa intermedia con dimensiones y scores.
  - [ ] Capa técnica con análisis extendido.
  - [ ] Sistema de codificación asistida con IA.
- [ ] Hacer test con 2-3 clientes finales reales de la psicóloga (RRHH, legal, deportivo).
- [ ] Medir KPIs durante 60-90 días post-implementación.
- [ ] Actualizar `../05-examples/case-psicologa.md` con resultados reales (no hipótesis).
- [ ] Pedir testimonio formal.

### Pendiente venta (post-piloto)

- [ ] Identificar 10-15 prospects que califiquen contra el ICP.
- [ ] Reescribir messaging con balance push-pull (ver `../03-process/01-discovery.md`).
- [ ] Convertir el HTML existente en landing simple con Calendly.
- [ ] Posicionar LinkedIn personal como UX Strategist (headline + about).
- [ ] Mandar primer round de mensajes a prospects.
- [ ] Atender discovery calls que surjan.
- [ ] Cerrar primer cliente a precio normal (Modelo B según `../06-operations/pricing.md`).

---

## Backlog (post-primer cliente)

Ideas y acciones que no son prioridad ahora pero hay que registrar para no perderlas.

### Producto y servicio

- [ ] Definir si conviene productizar parte del servicio (workshop grabado, plantillas vendibles).
- [ ] Evaluar si tiene sentido un servicio "lite" para profesionales con menor capacidad de pago.
- [ ] Pensar versión enterprise para empresas medianas (ticket más alto).

### Módulos a construir (dependen del primer caso real)

- [ ] **Microsite por cliente.** Cada cliente recibe su propio microsite navegable en `yellow.com.ar/c/<slug-cliente>` con cuatro secciones: propuesta, diagnóstico, plan y kit. Todo HTML navegable, acceso por magic link al mail, URL persistente para consulta posterior. La fuente de verdad sigue siendo este repo; el microsite renderiza desde los archivos del caso. Pila técnica candidata: Next.js sobre Vercel para frontend y hosting, Supabase para autenticación y base de datos. Concepto desarrollado por el owner el 2026-05-11; el portfolio público queda explícitamente descartado.
- [ ] **Biblioteca de kits replicables.** Estructura nueva dentro del playbook para almacenar y categorizar los items reutilizables (prompts para IA, plantillas, trainings interactivos en HTML, instrucciones paso a paso) que se diseñan en cada caso y se vuelven activos para clientes futuros con problemas parecidos. Cada item con estructura consistente: problema que resuelve, momento de uso, contenido, instrucciones de uso, ejemplo de salida.

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

### Integraciones a sumar cuando se justifique

Movidas desde `06-operations/tools.md` al consolidarse SSOT (2026-05-13, aprobado directo por owner).

- [ ] Calendly + Google Calendar automático para agendamiento.
- [ ] CRM simple (HubSpot Free o Notion) cuando el pipeline crezca.
- [ ] Gestión de contratos digital (DocuSign / Pandadoc) — referenciado en `../06-operations/contracts.md`.
- [ ] Newsletter (Beehiiv / Substack) si arranca contenido escrito sostenido.

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
- ✅ **2026-05-09:** Reescritura de oferta v0.3, eliminada la promesa de "30-50% más" como número específico (no validado empíricamente). Reordenada la jerarquía: rediseño de la entrega + diferenciación + experiencia alineada con el cliente como promesas primarias; cobrar más pasa a consecuencia. Nivel 1 reemplazado por versión llana con oficios concretos. Cambios propagados a `onboarding.md`, `jtbd.md` y `case-psicologa.md`.

---

## Métricas de tracking

Para revisar mensualmente:

| Métrica | Mayo 2026 | Junio 2026 | Julio 2026 |
|---|---|---|---|
| Avance playbook v0.2 | 60% |: |: |
| Caso piloto cerrado | No |: |: |
| Discovery calls hechas | 0 |: |: |
| Propuestas enviadas | 0 |: |: |
| Clientes pagos | 0 |: |: |
| Facturación del servicio | $0 |: |: |
