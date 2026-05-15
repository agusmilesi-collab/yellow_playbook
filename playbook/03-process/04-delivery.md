# 04: Entrega del proyecto

**SSOT** del proceso de ejecución de un proyecto cerrado.

Este archivo describe el flujo para Modelo B (Diagnóstico + plan), que es el servicio principal. Para Modelo A y C, ver al final del archivo.

---

## Objetivo

Ejecutar el proyecto contratado, cumplir entregables, y llegar al cierre con resultados medibles y testimonio.

---

## Inputs

- Contrato firmado.
- 50% de adelanto cobrado.
- Notas estructuradas de discovery call.
- Hipótesis preliminares.

## Outputs

- Service blueprint del cliente.
- Diagnóstico completo (siguiendo `../04-templates/diagnosis-template.md`).
- Propuesta de rediseño detallada.
- Plan de implementación.
- KPIs definidos para medición.
- **Prototipo manual** validado con 1 cliente final real.
- **Sistema operativo funcionando** — el profesional opera con su input técnico crudo, sale el entregable rediseñado. Ver la Tesis en `../00-start-here/principles.md`.

---

## Duración total

6-8 semanas. Dividido en 5 fases. La duración previa (3-4 semanas) era para entrega = documento. Con prototipo manual validado + build del sistema operativo (Tesis), el alcance real lleva más tiempo.

---

## Fase 1: Kickoff y research (Semana 1)

### Reunión de kickoff (60-90 min)

**Objetivo:** alinear expectativas, recolectar información detallada, conocer al equipo si lo hay.

**Agenda:**

1. (10 min) Presentación del proceso completo, fechas clave.
2. (30 min) Profundizar el contexto del negocio. Más allá de la discovery, ahora con tiempo.
3. (15 min) Identificar stakeholders relevantes (otros decisores, clientes finales a entrevistar, empleados a involucrar).
4. (15 min) Definir KPIs candidatos a medir.
5. (10 min) Acordar próximos pasos y comunicación.

### Después del kickoff

- Solicitar acceso a información del cliente: comunicaciones tipo, materiales actuales, estadísticas si las hay, customer journey actual mapeado de manera artesanal por el cliente.
- Agendar entrevistas con 2-3 clientes finales reales del cliente (principio P5 no-negociable).
- Agendar entrevistas con empleados/colaboradores si los hay (principio P9).

### Research — Switch Interviews (entrega principal de Fase 1)

Aplicar la **Switch Interview** completa (Moesta + Spiek) a:

- 2-3 clientes finales del cliente.
- 1-2 empleados del cliente si los hay.
- Si no hay empleados, profundizar con el dueño en distintos momentos.

**Protocolo completo (reclutamiento, timeline de 5 hitos, formato, rewind)** → SSOT en `../02-methodology/jtbd.md` sección "El protocolo completo: Switch Interview".

**Foco específico de esta fase:** señales del meta-patrón ("regala la ventaja real, cobra la commodity"). Detectar el momento "eso fue lo mejor" del cliente final, que casi siempre apunta a lo que el profesional regala sin cobrar.

Documentar todas las entrevistas en notas estructuradas. Las frases textuales del cliente son material directo para el rediseño.

---

## Fase 2: Diagnóstico (Semana 2)

### Service blueprint actual

Construir el blueprint del servicio actual. Cuatro filas (acciones del cliente, frontstage, backstage, soporte). Cronológico desde "primer contacto" hasta "post-entrega".

Herramientas: Miro, Figma, o Notion. Lo que sea, pero compartible con el cliente.

### Evaluación de touchpoints e identificación de pain points

Aplicar la **matriz de evaluación de touchpoints** (ver `../02-methodology/service-design.md` sección "Evaluación de touchpoints") a cada touchpoint del blueprint. Output: tabla completa con las 5 dimensiones (categoría temporal, estado actual, impacto en job, severidad, costo de fix) + principio de Good Services que falla en cada caso.

Los pain points prioritarios son los touchpoints con severidad **crítica** o **alta**. Listar 4-7 pain points principales con marcador ✅/🔵/❓ según nivel de certeza, y respetar la regla de orden del rediseño documentada en la matriz (primero críticas con costo bajo, después críticas con costo alto, después altas).

### Checklist de Good Services

Aplicar los 15 principios de `../02-methodology/good-services.md` al servicio actual. Cada principio fallado que se conecta con el job dominante es un pain point complementario.

### Análisis JTBD

Para el cliente final del cliente, definir:

- Job dominante en formato Job Story.
- Los tres jobs (functional / emotional / social).
- Contra qué compite realmente (no solo otros del mismo rubro).
- Struggling moments principales.
- **Meta-patrón identificado:** qué regala el profesional (lo que sus clientes nombran como lo más valioso, idealmente con frase textual del corpus de Switch Interviews), qué cobra (lo que figura en factura). Ver `../02-methodology/jtbd.md` sección meta-patrón.

### Diagnóstico central

Un párrafo punzante que sintetiza la causa raíz, no los síntomas. Ejemplo template:

> *"El problema no es que [síntoma percibido]. El problema es que [causa raíz que el cliente no veía]. Por eso [consecuencia visible]. Y por eso [consecuencia invisible que afecta el negocio]."*

### Reunión de validación de diagnóstico

Antes de pasar a la fase 3, reunión de 60 min con el cliente para validar:
- ¿El blueprint refleja la realidad?
- ¿Los pain points hacen sentido?
- ¿Falta algo importante?

Ajustar según feedback. Si hay grandes discrepancias, hacer otra ronda de research.

---

## Fase 3: Propuesta de rediseño (Semana 3)

### Diseño de las intervenciones

Para cada pain point principal, diseñar 1-2 intervenciones concretas. Cada intervención tiene:

- **Nombre técnico** (vocabulario del glossary).
- **Qué hace** (descripción concreta).
- **Por qué resuelve un pain point específico.**
- **Cómo se ve** (cómo lo experimenta el cliente final post-rediseño).

Mínimo 3, máximo 7 intervenciones. Si son más de 7, hay que priorizar.

### Plan de implementación

Para cada intervención, definir:
- Plazo estimado de implementación.
- Recursos necesarios (¿requiere proveedor externo? ¿requiere tiempo del dueño?).
- Orden de prioridad.
- Dependencias entre intervenciones.

### KPIs definidos

Para cada intervención principal, definir:
- Métrica que se debería mover.
- Estado actual (baseline).
- Hipótesis de impacto a 90 días.
- Cómo se mide.

### Documento final

Compilar todo siguiendo `../04-templates/diagnosis-template.md`. Documento de 15-25 páginas máximo.

### Validación final del rediseño contra Good Services

Antes de presentar, chequear las intervenciones propuestas contra los 15 principios de `../02-methodology/good-services.md`. Cada principio que no quede mejorado por el rediseño se justifica (scope, prioridad, fase 2) o se incorpora al plan.

### Prototipo manual (paso obligatorio antes del sistema)

Antes de invertir en construir el sistema operativo, hacer **1 instancia del entregable rediseñado a mano** para 1 cliente final real. Este es el prototipo manual. Sirve para:

- Validar que el rediseño efectivamente cierra el gap descubierto.
- Obtener feedback del cliente final antes de automatizar.
- Acordar con el profesional la spec final del sistema antes de construirlo.

Si el prototipo no genera la reacción esperada en el cliente final, iterar la spec antes de seguir. Construir el sistema sobre un rediseño no validado es desperdicio garantizado.

---

## Fase 4: Build del sistema operativo (Semanas 5-6)

Con la spec validada por el prototipo manual, construir el motor generador. La Tesis establece que el cliente se va con un sistema que opera todos los días.

**Componentes típicos del sistema (varían según caso):**

- Plantillas activas (one-pager, microsite, consigna diaria, protocolo por momento crítico, curación por uso, otros).
- Prompts que convierten input técnico del profesional en output rediseñado.
- Integraciones con herramientas que el profesional ya usa (WhatsApp, Google Drive, agenda, etc.).
- Microsite o portal del cliente final si corresponde.

**Criterio de "sistema listo":**

- El profesional puede generar al menos 1 instancia del entregable rediseñado sin asistencia.
- El input que requiere de él es el que ya genera naturalmente en su trabajo.
- El cliente final recibe el output sin saber que existe un sistema atrás.

---

## Fase 5: Presentación, instalación y cierre (Semanas 7-8)

### Reunión de presentación + handoff técnico (120 min)

Esta reunión presenta el sistema funcionando, con el profesional operándolo en vivo.

**Agenda:**

1. (15 min) Resumen del journey del proyecto.
2. (20 min) Hallazgos principales de las Switch Interviews + meta-patrón identificado.
3. (10 min) Service blueprint.
4. (15 min) Diagnóstico central y pain points.
5. (20 min) Spec del rediseño con prototipo manual validado.
6. (30 min) **Demostración del sistema en vivo** — el profesional genera 1 instancia con su propio input, acompañado por el consultor.
7. (10 min) Próximos pasos: cómo va a operar el sistema solo, qué soporte tiene durante las próximas 2 semanas.

### Instalación

Durante o inmediatamente después de la reunión, el profesional genera 1-2 instancias del entregable rediseñado con su propio input, frente al consultor. Si hay fricciones técnicas, se resuelven en el momento. Si hay fricciones conceptuales, se ajusta el sistema.

**Criterio de "instalación cumplida":** el profesional puede operar el sistema sin presencia del consultor.

### Entrega del documento y accesos

Mandar documento final de diagnóstico + grabación de la reunión (si se grabó) + accesos al sistema operativo (credenciales, links, manuales mínimos).

### Cobranza del 50% restante

Al confirmar instalación cumplida, mandar factura por el 50% restante.

### Pedido de testimonio

A las 2-3 semanas post-entrega, pedir testimonio formal:

> "Hola [nombre], pasaron unas semanas desde que cerramos el proyecto. ¿Cómo viene la implementación? ¿Te puedo pedir un testimonio breve para mostrar a futuros clientes? Idealmente: qué situación tenías antes, qué hicimos juntos, y qué cambió. 3-5 líneas alcanza."

### Pedido de referidos

Junto con el testimonio:

> "Una más: ¿conocés a 2-3 profesionales que estén en una situación parecida a la tuya hace [tiempo del proyecto], antes de trabajar conmigo? Si pensás en alguien, decímelo, me presento de tu parte."

---

## Adaptaciones para Modelo A

Modelo A es 1 semana, no 3-4. Adaptaciones:

- Fase 1 y 2 se comprimen en 3 días.
- Fase 3 se hace en 1-2 días.
- Fase 4 (presentación) es la sesión de 4 horas con el cliente.
- Entregable es 5-10 páginas, no 15-25.
- **Al menos 1 entrevista** a cliente final del profesional (alcance reducido, pero el principio P5 sigue siendo no-negociable). Si no se puede concretar, declinar el proyecto. El resto se nombra como "recomendado para fase siguiente".
- No incluye build de sistema operativo. El entregable es spec de rediseño + prototipo manual de 1 instancia. El sistema se contrata aparte si el cliente quiere avanzar.

---

## Adaptaciones para Modelo C

Modelo C es 3-4 meses, no 3-4 semanas. Diferencia principal: post-entrega del sistema operativo, hay 8-12 semanas de acompañamiento y evolución.

Estructura del acompañamiento:

- Reunión semanal de 60 min con el cliente.
- Coordinación con proveedores externos (vos no ejecutás, pero los dirigís).
- **Evolución del sistema operativo** según uso real (templates nuevos, prompts ajustados, módulos que aparecen). El sistema mejora con cada caso real que el profesional procesa.
- Iteración del rediseño según feedback de campo.
- Medición continua de KPIs.
- Reunión de cierre con resultados medidos.
- Documento de cierre con lessons learned.

---

## Reglas durante la entrega

### 1. Honestidad metodológica

Distinguir siempre ✅ verificado / 🔵 hipótesis / ❓ gap. Principio P3.

### 2. Co-creación obligatoria

Mínimo 2-3 clientes finales entrevistados. Mínimo 1 sesión con empleados si los hay. Principio P5.

### 3. KPIs siempre

Sin métricas, no hay éxito medible. Principio P6.

### 4. No tocar el oficio

Solo rediseñamos cómo se entrega el servicio, no qué se entrega. Principio P1.

### 5. Documentar todo

Cada proyecto deja lecciones que se incorporan al playbook. Principio P9.

### 6. Sistema antes de documento

El entregable principal es el sistema operativo. El documento de diagnóstico existe como referencia y para anclar el proceso, pero el cliente paga por el sistema que va a operar todos los días. Tesis.

---

## Notas para la IA

Durante la fase de entrega, la IA puede ayudar con:

1. **Generar borradores del service blueprint** a partir de notas de research.
2. **Estructurar el análisis JTBD** a partir de entrevistas a clientes finales.
3. **Redactar el documento de diagnóstico** siguiendo `../04-templates/diagnosis-template.md`.
4. **Generar plan de implementación** a partir de las intervenciones definidas.
5. **Sugerir KPIs** según el tipo de servicio rediseñado.

La IA NO hace:

1. Las entrevistas (las hace Agustin).
2. La validación con el cliente (la hace Agustin).
3. La presentación (la hace Agustin).
4. El criterio sobre qué pain point priorizar (lo decide Agustin).

---

## Siguiente paso del proceso

Ver `../03-process/05-handoff.md`.

---

## Runbook operativo

### Tiempos estimados por fase

| Fase | Duración | Foco |
|---|---|---|
| Fase 1 — Kickoff + Switch Interviews | 1-2 semanas | Kickoff + 2-3 entrevistas + research |
| Fase 2 — Diagnóstico | 1-2 semanas | Blueprint + pain points + análisis JTBD + meta-patrón |
| Fase 3 — Spec del rediseño + prototipo manual | 1 semana | Intervenciones + 1 prototipo validado con cliente final |
| Fase 4 — Build del sistema operativo | 2-3 semanas | Templates + prompts + integraciones |
| Fase 5 — Presentación, instalación y cierre | 1 semana | Demo en vivo + instalación + cobranza |

### Preparación previa al kickoff (60-90 min)

Checklist obligatorio antes de la reunión:

- [ ] Releer las notas de discovery call.
- [ ] Releer la propuesta enviada.
- [ ] Tener hipótesis preliminares de los 3 jobs.
- [ ] Tener hipótesis preliminar del meta-patrón.
- [ ] Preparar agenda del kickoff (60-90 min).
- [ ] Preparar lista de información que vas a pedir.
- [ ] Preparar 4-5 preguntas guía para profundizar contexto.

### Coordinación de Switch Interviews (Fase 1)

**Texto sugerido al cliente para pedirle contactos:**

> "[nombre], como hablamos en kickoff, necesito hablar con 2 o 3 de tus clientes. ¿Podés presentarme a [tipo A] y [tipo B]? Idealmente alguien que esté contento + alguien que haya tenido alguna fricción. Yo coordino las llamadas. Solo necesito que vos los pongas en cc en un email diciendo que es para mejorar tu servicio."

**Reglas durante cada entrevista:**

- Anotá frases textuales. No interpretadas.
- Silencio es tu herramienta. Cuando responden corto, dejá el espacio.
- Profundizá con "¿por qué?" 3-4 veces antes de pasar a la siguiente pregunta.
- NO promuevas tu solución. Estás investigando.
- Pasá a limpio las notas el mismo día.

### Decisiones if/then

| Situación | Acción |
|---|---|
| Cliente no quiere que hables con sus clientes finales | Recordar P5 (no negociable). Si insiste, declinar el proyecto |
| Algún cliente final no responde a la coordinación | Pedir otro contacto al cliente |
| El cliente no valida el blueprint | Volver a research. NO pasar a propuesta |
| El job dominante hipotetizado se confirma 100% | Sospechá. Probablemente sesgo de confirmación. Revisar entrevistas |
| El cliente cuestiona un pain point | Validar honestamente. Si tiene razón, ajustar |
| El prototipo manual no genera la reacción esperada en el cliente final | Iterar la spec antes de seguir. NO construir sistema sobre rediseño no validado |
| El documento de diagnóstico excede 25 páginas | Recortar. Si no se puede, está sobre-scopeado |
| Un principio de Good Services no se cubre con el rediseño | Justificar por qué (scope, prioridad, fase 2) |
| KPI sin baseline disponible | Marcar como "a medir en primer mes de implementación" |

### Errores comunes

**Llegar al kickoff sin haber leído las notas de discovery.** Improvisás, repetís preguntas que el cliente ya respondió. **Salida:** 60-90 minutos de prep obligatoria.

**Aceptar saltearse las entrevistas con clientes finales.** El cliente dice "yo te cuento qué piensan". **Salida:** P5 es no-negociable. Si el cliente no acepta, declinar.

**Hacer entrevistas con el dueño presente.** Sesga todas las respuestas. **Salida:** las entrevistas son sin el dueño presente.

**Quedarse en la primera respuesta del entrevistado.** Te quedaste con el síntoma. **Salida:** profundizar con "¿y por qué?" varias veces.

**Hacer todas las entrevistas y recién pasar a limpio al final.** Detalles perdidos después de 5 días. **Salida:** pasar a limpio cada entrevista el mismo día.

**Construir el blueprint sin validar con cliente.** Tu interpretación puede estar mal. **Salida:** reunión de validación obligatoria antes de pasar a propuesta.

**Empezar a "diseñar" antes de research.** Te entusiasmás con una idea. Eso es opinión, no método. **Salida:** research completo primero, diseño después.

**Diseñar intervenciones que no atacan pain points específicos.** Documento bonito que no resuelve nada. **Salida:** cada intervención debe linkear a uno o más pain points.

**Construir el sistema operativo sin prototipo manual validado.** Inversión a ciegas. **Salida:** prototipo manual + reacción del cliente final, obligatorios antes de Fase 4.

**Olvidar los íconos ✅/🔵/❓.** Hipótesis se mezclan con hechos. **Salida:** chequeo final antes de presentar.

**Defender el diagnóstico contra evidencia del cliente.** Es ego, no método. **Salida:** si el cliente tiene información que vos no tenías, ajustar.

**Saltarse los KPIs.** "Lo medimos después" se olvida un mes después. **Salida:** definir baseline antes de cerrar Fase 2. Principio P6.

---

## Changelog del archivo

- **2026-05-13 (v0.6):** sección "Identificación de pain points" reemplazada por aplicación explícita de la matriz de evaluación de touchpoints (SSOT en `02-methodology/service-design.md`). Antes había 3 preguntas sueltas; ahora hay método canónico. Aprobado directo por owner en sesión.
- **2026-05-13 (v0.5):** protocolo detallado de Switch Interview (4 ítems) en Fase 1 colapsado a puntero hacia `02-methodology/jtbd.md` (SSOT). Queda inline solo el foco específico de fase (meta-patrón). Aprobado directo por owner en sesión.
- **2026-05-13:** v0.4, sumada sección "Runbook operativo" con tiempos por fase, checklist de preparación al kickoff, coordinación de Switch Interviews, decisiones if/then completas, errores comunes con salida. Consolidación desde `07-runbook/04-cuando-arranca-proyecto.md`, `05-cuando-estas-en-research.md` y `06-cuando-armas-diagnostico.md` (carpeta eliminada). Aprobado vía LRN-009.
- **2026-05-13:** v0.3, refinamiento completo contra nueva metodología. Outputs incluyen prototipo manual + sistema operativo. Duración pasa de 3-4 a 6-8 semanas. Fase 1 nombra Switch Interviews con protocolo Moesta detallado. Fase 2 incorpora meta-patrón en Análisis JTBD. Sumada sub-sección "Prototipo manual" como paso obligatorio antes del sistema. Sumada Fase 4 "Build del sistema operativo" (Semanas 5-6). Renombrada Fase 4 vieja a Fase 5 "Presentación, instalación y cierre" (Semanas 7-8) con demostración en vivo y sub-sección de instalación. Modelo A requiere ahora al menos 1 entrevista. Modelo C incluye evolución del sistema. Sumada regla "Sistema antes de documento" (P0). Aprobado vía LRN-008.
- **Mayo 2026:** versión inicial v0.2.
