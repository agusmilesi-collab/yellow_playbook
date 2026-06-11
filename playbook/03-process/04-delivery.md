# 04: Entrega del proyecto

**SSOT** del proceso de ejecución de un proyecto cerrado.

Este archivo describe el flujo completo de entrega y es **SSOT de la duración por modelo**. El Modelo B (servicio principal) ejecuta las Fases 1 a 3 y entrega diagnóstico + plan + prototipo manual validado + spec del sistema. El Modelo C suma las Fases 4 y 5 (build, instalación) más acompañamiento, con la ejecución cotizada por alcance. Para el Modelo A, ver las adaptaciones al final.

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

**Modelo B (Fases 1-3):**

- Service blueprint del cliente.
- Diagnóstico completo (siguiendo `../04-templates/diagnosis-template.md`).
- Plan de implementación con cadena causal a WTP (siguiendo `../04-templates/plan-template.md`).
- KPIs definidos para medición.
- **Prototipo manual** validado con 1 cliente final real.
- **Spec del sistema operativo** (siguiendo `../04-templates/system-spec-template.md`), lista para cotizar el build.

**Modelo C (suma Fases 4-5 + acompañamiento):**

- **Sistema operativo funcionando**: el profesional opera con su input técnico crudo, sale el entregable rediseñado. Ver la Tesis en `../00-start-here/principles.md`.

---

## Duración total

- **Modelo B:** 2-3 semanas (Fases 1-3). El cuello de botella es coordinar las Switch Interviews con los clientes del cliente.
- **Modelo C:** 2-3 meses (Fases 1-5 + acompañamiento). La duración exacta la define el alcance del plan.
- **Techo duro: ningún proyecto supera los 3 meses.** Si el plan excede el techo, se recorta el plan; el proyecto jamás se estira.

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

**Orden interno de Fase 2 (cascada del método):** blueprint → Análisis JTBD → Value Map → Evaluación de touchpoints → Checklist de Good Services → Diagnóstico central. JTBD descubre, el Value Map prioriza, recién entonces se audita la entrega. No invertir este orden.

### Service blueprint actual

Construir el blueprint del servicio actual. Cuatro filas (acciones del cliente, frontstage, backstage, soporte). Cronológico desde "primer contacto" hasta "post-entrega".

Herramientas: Miro, Figma, o Notion. Lo que sea, pero compartible con el cliente.

### Análisis JTBD

Para el cliente final del cliente, definir:

- Job dominante en formato Job Story.
- Los tres jobs (functional / emotional / social).
- Contra qué compite realmente (no solo otros del mismo rubro). Incluir las alternativas que el cliente final consideró (pregunta 5 de la Switch Interview): son el input del Value Map.
- Struggling moments principales.
- **Meta-patrón identificado:** qué regala el profesional (lo que sus clientes nombran como lo más valioso, idealmente con frase textual del corpus de Switch Interviews), qué cobra (lo que figura en factura). Ver `../02-methodology/jtbd.md` sección meta-patrón.

### Value Map

Construir el **Value Map** (ver `../02-methodology/value-based-strategy.md`) a partir del análisis JTBD: extraer los value drivers del cliente final, ordenarlos por importancia, medir la brecha de cada uno contra las alternativas que el cliente consideró, agrupar en temas, segmentar si hay más de un segmento.

Output: **lista priorizada de drivers donde el rediseño debe ganar**. Esta lista es la que ordena todo lo que sigue. Es el único mecanismo de priorización del proyecto.

### Evaluación de touchpoints e identificación de pain points

Aplicar la **matriz de evaluación de touchpoints** (ver `../02-methodology/service-design.md` sección "Evaluación de touchpoints") a cada touchpoint del blueprint. Output: tabla con las 4 dimensiones (categoría temporal, driver del Value Map que sirve, estado de ejecución ✅/⚠️/❌, costo de fix) + principio de Good Services que falla.

La matriz **no calcula severidad propia**: la prioridad de cada touchpoint se hereda del driver del Value Map al que sirve. Los pain points prioritarios son los touchpoints en estado ❌ o ⚠️ que sirven a los drivers de mayor prioridad del Value Map. Listar 4-7 pain points principales con marcador ✅/🔵/❓, y respetar la regla de orden del rediseño documentada en la matriz (ordenada por prioridad del Value Map, no por scoring interno). Los touchpoints que no sirven a ningún driver priorizado se sueltan de forma deliberada (trade-off declarado).

### Checklist de Good Services

Aplicar los 15 principios de `../02-methodology/good-services.md` al servicio actual. Cada principio fallado que se conecta con un driver priorizado es un pain point complementario.

### Diagnóstico central

Un párrafo punzante que sintetiza la causa raíz por encima de los síntomas. Molde en afirmativo (regla F de `../02-methodology/style-guide.md`):

> *"[Síntoma percibido] es la parte visible. La causa está en [causa raíz que el cliente no veía]. Por eso [consecuencia visible]. Y por eso [consecuencia invisible que afecta el negocio]."*

### Reunión de validación de diagnóstico

Antes de pasar a la fase 3, reunión de 60 min con el cliente para validar:
- ¿El blueprint refleja la realidad?
- ¿Los pain points hacen sentido?
- ¿Falta algo importante?

Ajustar según feedback. Si hay grandes discrepancias, hacer otra ronda de research.

---

## Fase 3: Plan, prototipo manual y spec (Semanas 2-3, cierra el Modelo B)

### Diseño de las intervenciones

Para cada pain point principal, diseñar 1-2 intervenciones concretas. Cada intervención tiene:

- **Nombre técnico** (vocabulario del glossary).
- **Qué hace** (descripción concreta).
- **Cadena causal a WTP.** Por qué resuelve un pain point específico Y cómo ese cambio mueve la WTP (o, excepcionalmente, la WTS). Cadena escrita, no implícita: intervención → driver del Value Map → movimiento de WTP → habilita captura de valor. Una intervención sin esta cadena se reescribe o se descarta (ver `../02-methodology/value-based-strategy.md` y el check `causal-chain-wtp` en `../quality-checklist.json`).
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

### Cierre del Modelo B

Con el prototipo validado y la spec escrita, el Modelo B cierra acá: reunión de presentación (diagnóstico + plan + prototipo + spec), cobranza del 50% restante y **oferta concreta de la ejecución** (Fases 4-5 + acompañamiento) cotizada por alcance contra el plan. El cliente queda en condiciones de contratar el build con cualquier proveedor, idealmente Yellow (ver la Tesis en `../00-start-here/principles.md`).

---

## Fase 4: Build del sistema operativo (Modelo C / ejecución contratada)

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

## Fase 5: Presentación, instalación y cierre (Modelo C / ejecución contratada)

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

El Modelo A es una **consulta de lectura experta**: sesión de 40-60 minutos donde Agustín escucha y diagnostica apalancado en expertise, más una devolución escrita de 1 página (lectura del caso, hipótesis del meta-patrón, recomendación de siguiente paso). Dura 1 semana de punta a punta.

- **Sin Switch Interviews:** P5 queda explícitamente fuera de alcance para A (ver `../00-start-here/principles.md`). La devolución marca todo 🔵 hipótesis y lo declara: el rediseño con evidencia es trabajo de B/C.
- El entregable se presenta como criterio experto con límites declarados, jamás como rediseño.
- Función comercial: puerta de entrada y filtro. La devolución cierra con la oferta concreta del Modelo B.
- Es el único producto que se vende en frío.

---

## Adaptaciones para Modelo C

Modelo C dura 2-3 meses, con techo duro de 3 meses. Ejecuta las Fases 4 y 5 sobre el núcleo de B y suma acompañamiento post-instalación. La ejecución se cotiza por alcance contra el plan (ver `../06-operations/pricing.md`).

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

| Fase | Duración | Modelo | Foco |
|---|---|---|---|
| Fase 1, Kickoff + Switch Interviews | Semana 1 | B y C | Kickoff + 2-3 entrevistas + research |
| Fase 2, Diagnóstico | Semana 2 | B y C | Blueprint + JTBD + Value Map + pain points (en ese orden) |
| Fase 3, Plan + prototipo manual + spec | Semanas 2-3 | B y C (cierra B) | Intervenciones + 1 prototipo validado + spec del sistema |
| Fase 4, Build del sistema operativo | 2-6 semanas según alcance | C | Templates + prompts + integraciones |
| Fase 5, Presentación, instalación y cierre | 1 semana | C | Demo en vivo + instalación + cobranza |

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

**Diseñar intervenciones que no atacan pain points específicos.** Documento bonito que no resuelve nada. **Salida:** cada intervención debe linkear a uno o más pain points Y tener cadena causal escrita hasta WTP (ver Fase 3).

**Priorizar pain points con criterio propio en vez del Value Map.** Vuelve a meter un mecanismo de priorización paralelo. **Salida:** el orden lo da el Value Map, siempre. La matriz de touchpoints audita, no prioriza.

**Construir el sistema operativo sin prototipo manual validado.** Inversión a ciegas. **Salida:** prototipo manual + reacción del cliente final, obligatorios antes de Fase 4.

**Olvidar los íconos ✅/🔵/❓.** Hipótesis se mezclan con hechos. **Salida:** chequeo final antes de presentar.

**Defender el diagnóstico contra evidencia del cliente.** Es ego, no método. **Salida:** si el cliente tiene información que vos no tenías, ajustar.

**Saltarse los KPIs.** "Lo medimos después" se olvida un mes después. **Salida:** definir baseline antes de cerrar Fase 2. Principio P6.

---

## Changelog del archivo

- **2026-06-10 (v0.8):** consolidación de LRN-014 (resuelve LRN-008/009/010, con la evidencia comercial de LRN-013: la primera venta compró build + instalación). El archivo pasa a SSOT de duración por modelo. Modelo B = Fases 1-3, 2-3 semanas, cierra en prototipo manual + spec del sistema (sección nueva "Cierre del Modelo B"); Fases 4-5 pasan a Modelo C / ejecución contratada, cotizada por alcance; techo duro de 3 meses. Modelo A redefinido como consulta de lectura experta sin Switch Interviews (P5 fuera de alcance, LRN-009). Molde del diagnóstico central reescrito en afirmativo (LRN-015). Outputs divididos por modelo, con punteros a plantillas nuevas (LRN-017). Tabla de tiempos del runbook ajustada. Aprobado por el owner para consolidación en bloque (sesión 2026-06-10).
- **2026-05-18 (v0.7):** consolidación de LRN-004 (sesión de refinamiento de KB, E1). Fase 2 reordenada a la cascada del método (blueprint → JTBD → Value Map → touchpoints → Good Services → diagnóstico central) con paso nuevo **Value Map** y nota de orden interno. "Evaluación de touchpoints" reescrita: 4 dimensiones, sin severidad propia, prioridad heredada del Value Map. Fase 3: cada intervención exige **cadena causal escrita a WTP** (link a `value-based-strategy.md` y al check `causal-chain-wtp`). Runbook: ajustada la tabla de tiempos de Fase 2 y sumados dos errores comunes (intervención sin cadena causal, priorización paralela al Value Map). Aprobado por el owner para consolidación en bloque (sesión 2026-05-18).
- **2026-05-13 (v0.6):** sección "Identificación de pain points" reemplazada por aplicación explícita de la matriz de evaluación de touchpoints (SSOT en `02-methodology/service-design.md`). Antes había 3 preguntas sueltas; ahora hay método canónico. Aprobado directo por owner en sesión.
- **2026-05-13 (v0.5):** protocolo detallado de Switch Interview (4 ítems) en Fase 1 colapsado a puntero hacia `02-methodology/jtbd.md` (SSOT). Queda inline solo el foco específico de fase (meta-patrón). Aprobado directo por owner en sesión.
- **2026-05-13:** v0.4, sumada sección "Runbook operativo" con tiempos por fase, checklist de preparación al kickoff, coordinación de Switch Interviews, decisiones if/then completas, errores comunes con salida. Consolidación desde `07-runbook/04-cuando-arranca-proyecto.md`, `05-cuando-estas-en-research.md` y `06-cuando-armas-diagnostico.md` (carpeta eliminada). Aprobado vía LRN-009.
- **2026-05-13:** v0.3, refinamiento completo contra nueva metodología. Outputs incluyen prototipo manual + sistema operativo. Duración pasa de 3-4 a 6-8 semanas. Fase 1 nombra Switch Interviews con protocolo Moesta detallado. Fase 2 incorpora meta-patrón en Análisis JTBD. Sumada sub-sección "Prototipo manual" como paso obligatorio antes del sistema. Sumada Fase 4 "Build del sistema operativo" (Semanas 5-6). Renombrada Fase 4 vieja a Fase 5 "Presentación, instalación y cierre" (Semanas 7-8) con demostración en vivo y sub-sección de instalación. Modelo A requiere ahora al menos 1 entrevista. Modelo C incluye evolución del sistema. Sumada regla "Sistema antes de documento" (P0). Aprobado vía LRN-008.
- **Mayo 2026:** versión inicial v0.2.
