# Semana 3: Diagnóstico & Sistema

Objetivo: convertir el material de research de Semana 2 en los tres entregables de un proyecto Yellow: **diagnóstico completo**, **prototipo manual** y **spec del sistema operativo**.

Al final de la semana tenés un diagnóstico escrito con la profundidad del caso de la psicóloga + la spec del sistema que el cliente operaría todos los días (no solo el documento).

**Tiempo total:** 7 horas (1 hora por día).

---

## Preparación previa

Tenés que arrancar con el material de Semana 2:

- Notas de las 2 Switch Interviews.
- Hipótesis del meta-patrón con frase textual.
- Las 4 fuerzas dominantes identificadas.
- Job dominante en formato Job Story.

Si te falta algo de eso, **volvé a Semana 2 antes de seguir**. Sin material de research, el diagnóstico de esta semana queda inventado.

---

## Día 1: Service blueprint del servicio analizado

### Honestidad metodológica antes de empezar

Toda afirmación del blueprint y del diagnóstico se marca con uno de tres íconos:

- ✅ **Verificado:** confirmado por el cliente o por las Switch Interviews.
- 🔵 **Hipótesis:** inferido por vos, falta validar.
- ❓ **Gap:** no se sabe todavía.

**Regla:** ningún diagnóstico se entrega sin estos íconos aplicados a cada afirmación. **Inventar información para que la propuesta se vea más completa es la falta más grave que se puede cometer.**

---

### Construir el blueprint del servicio actual

Del servicio que analizaste, construí el service blueprint completo. Cuatro filas en orden cronológico, desde "primer contacto" hasta "post-entrega":

1. **Acciones del cliente** (qué hace, ve, siente).
2. **Frontstage** (lo que el personal hace y el cliente ve).
3. **Backstage** (lo que el personal hace pero el cliente NO ve).
4. **Procesos de soporte** (sistemas, software, proveedores).

**Estructura mínima de momentos a mapear:**

- Cómo descubrió el servicio.
- Cómo decidió contratarlo.
- Cómo arrancó el proceso (primer contacto, agendamiento, pago).
- Qué pasa durante la prestación central.
- Qué entregable o resultado recibe.
- Qué pasa después (seguimiento, recordatorio, recomendación).

**Herramientas:** Figma, Miro, Notion, Excel. Lo que sea, pero compartible.

### Marcaje de honestidad metodológica

Para cada momento del blueprint, indicá con ícono:

- ✅ verificado en Switch Interviews.
- 🔵 hipótesis basada en tu observación.
- ❓ gap (no tenés data todavía).

---

### Ejercicio del día (60 min)

Armá el blueprint del servicio con al menos **8-12 momentos** mapeados. Cronológico. Cada fila con sus 4 columnas llenas (si una columna queda vacía repetidamente, probablemente el backstage está incompleto).

Después marcá cada afirmación con ícono ✅/🔵/❓.

**Self-check del día:** ¿el blueprint cuenta la historia del journey desde fuera (cliente) y desde adentro (proveedor) en la misma tabla? ¿Tenés más ✅ que 🔵 en los touchpoints clave? Si no, faltó research.

---

## Día 2: Análisis JTBD integrado + meta-patrón

### Aplicar el modelo Jobs-As-Progress al material de research

#### Moesta (capa de entrevista) — ya está hecho

Tenés las timelines de 2 Switch Interviews + las 4 fuerzas dominantes. Eso fue el output de Semana 2. Hoy lo usás como input.

#### Christensen (capa narrativa)

A partir de las 2 timelines, extraé:

- **Job dominante** (formato Job Story): *"Cuando [SITUACIÓN], quiero [MOTIVACIÓN], para poder [RESULTADO]."*
- **Los 3 tipos de jobs:**
  - Functional ✅ (basado en evidencia de las entrevistas).
  - Emotional ✅/🔵 (basado en cómo describieron sentirse).
  - Social ✅/🔵 (basado en menciones de "qué pensaría mi jefe / mi pareja / mi círculo").
- **Contra qué compite realmente** — incluí al menos 1 opción que NO sea del mismo rubro.

#### Ulwick light (capa de priorización)

Listá 5-10 **desired outcomes** que aparecen en las entrevistas. Formato:

> Minimizar/maximizar [variable] al [hacer X paso del job].

Ejemplo del psicotécnico: *"Minimizar el tiempo entre recibir el informe y tomar la decisión de contratación."* / *"Maximizar la confianza en justificar la decisión ante el directorio."*

No hace falta encuesta cuantitativa (es Ulwick **light**). Suficiente: priorizar los 5-10 outcomes según frecuencia + intensidad de mención en las entrevistas.

---

### El meta-patrón aplicado al servicio

Volvé a la hipótesis del meta-patrón del Día 7 de Semana 2 (qué regala / qué cobra). Escribilo formal:

> **Qué regala el profesional:** [con frase textual del cliente final, ej: *"él me dijo que me convenía contratar a Juan, ese tip me ahorró 2 meses de errores"*].
>
> **Qué cobra el profesional:** [lo que figura en factura].
>
> **Implicancia para rediseño:** lo primero que se rediseña es qué se cobra. La ventaja real (lo que está siendo regalado) se captura en un sistema cobrable. La pelea por la commodity se deja caer.

---

### Ejercicio del día (60 min)

Escribí un documento de 1-2 páginas titulado **"Análisis JTBD del servicio"** que tenga:

1. Job dominante en formato Job Story.
2. Los 3 tipos de jobs con marcador ✅/🔵.
3. Contra qué compite realmente (3-5 alternativas, una transcategorial).
4. 5-10 desired outcomes priorizados.
5. Meta-patrón con frase textual.

**Self-check del día:** ¿podés conectar cada job/outcome con una frase textual de las Switch Interviews? Si tenés hipótesis sin frase textual asociada, marcalas 🔵 (estás interpretando, no verificando).

---

## Día 3: Matriz de touchpoints + Good Services check + pain points

### Paso 1: Matriz de evaluación de touchpoints

Antes de aplicar Good Services al servicio en general, evaluá **touchpoint por touchpoint** con la matriz formal de Yellow. Para cada touchpoint del blueprint del Día 1, completá 5 dimensiones:

**Dimensiones:**

a. **Categoría temporal:** ¿antes del servicio, durante o después? Los touchpoints olvidados suelen estar en "antes" y "después".

b. **Estado actual:** ✅ bien diseñado (intencional, alineado con el job) / ⚠️ pasable (existe pero sin foco) / ❌ olvidado o roto (no se cuidó, genera fricción).

c. **Impacto en el job dominante:** alto (esencial para que el job se cumpla) / medio (contribuye pero no es central) / bajo (tangencial).

d. **Severidad:** cruce de estado × impacto:

| Estado \ Impacto | Alto | Medio | Bajo |
|---|---|---|---|
| ❌ Olvidado/roto | Crítica | Alta | Media |
| ⚠️ Pasable | Alta | Media | Baja |
| ✅ Bien diseñado | Mantener | Mantener | Mantener |

e. **Costo de fix:** bajo (horas o pocos días) / medio (1-2 semanas, requiere plantilla) / alto (semanas, requiere sistema completo).

**Formato:**

| Touchpoint | Categoría | Estado | Impacto | Severidad | Costo de fix |
|---|---|---|---|---|---|

**Regla de orden del rediseño:**

1. **Críticas con costo bajo:** primero. Quick wins de alto impacto.
2. **Críticas con costo medio o alto:** obligatorias, entran al plan con plazo.
3. **Altas con costo bajo:** segunda capa, otro quick win.
4. **Severidad media o baja:** backlog. Fuera de scope si el rediseño es de modelo B.

**Conexión con P10:** la calidad se define por la peor parte (sesgo pico-final). Las severidades críticas son los touchpoints rotos de alto impacto que el cliente recuerda al final del journey. Esos se arreglan primero, aunque sean chicos.

### Paso 2: Aplicar los 15 principios de Good Services al servicio actual

Para cada principio del 1 al 15, evaluá el servicio actual:

| Principio | Cumple (Sí/Parcial/No) | Evidencia | ¿Es relevante para el job dominante? |
|---|---|---|---|
| 1. Fácil de encontrar | | | |
| 2. Explica para qué sirve | | | |
| 3. Establece expectativas | | | |
| 4. Permite completar el resultado | | | |
| 5. Funciona de manera familiar | | | |
| 6. No requiere conocimiento previo | | | |
| 7. Agnóstico de la estructura | | | |
| 8. Pasos mínimos | | | |
| 9. Consistente en todo el servicio | | | |
| 10. Sin puntos muertos | | | |
| 11. Usable por todos por igual | | | |
| 12. Promueve comportamientos correctos | | | |
| 13. Responde al cambio con rapidez | | | |
| 14. Explica por qué se toma una decisión | | | |
| 15. Acceso fácil a asistencia humana | | | |

---

### Paso 3: Convertir fallas en pain points

Cruzá los dos análisis. Cada pain point prioritario nace de la intersección de:

- Un touchpoint con severidad **crítica o alta** en la matriz del Paso 1.
- Al menos un principio de Good Services del Paso 2 que falla en ese touchpoint y afecta el job dominante.

Si un touchpoint tiene severidad crítica pero ningún principio de Good Services falla, sospechá: probablemente la evaluación de impacto está sobreestimada.

Listá 4-7 **pain points principales** del servicio. Para cada uno:

- **Nombre del pain point** (descriptivo, no genérico).
- **Touchpoint donde ocurre** (del blueprint del Día 1).
- **Severidad y costo de fix** (de la matriz del Paso 1).
- **Principio de Good Services fallado** (o varios, del Paso 2).
- **Job afectado** (functional / emotional / social).
- **Marcador:** ✅/🔵/❓.

**Ejemplo del psicotécnico:**

> **Information overload ✅**
> - Touchpoint: entrega del informe (16 páginas PDF).
> - Severidad (matriz): crítica. Costo de fix: medio.
> - Principios de Good Services fallados: 4 (no permite completar el objetivo "decidir"), 8 (más pasos que los esenciales).
> - Job afectado: functional + emotional (decisión + sentirse seguro).

---

### Ejercicio del día (90 min)

#### Parte 1 (40 min): matriz de touchpoints

Aplicá la matriz a cada touchpoint del blueprint del Día 1. Tabla completa con las 5 dimensiones. Identificá los touchpoints con severidad crítica o alta.

#### Parte 2 (30 min): Good Services check

Tabla de 15 principios sobre el servicio. Si te traba algún principio porque no aplica, marcalo "no aplica" y seguí.

#### Parte 3 (20 min): listar pain points

4-7 pain points cruzando las dos tablas anteriores (matriz × Good Services).

**Self-check del día:** ¿cada pain point prioritario tiene severidad crítica/alta en la matriz Y al menos un principio de Good Services que falla? Si una de las dos dimensiones queda vacía, faltó rigor.

---

## Día 4: Diagnóstico central + propuesta de intervenciones

### El diagnóstico central

**Un párrafo punzante de 3-5 líneas que sintetiza la causa raíz, no los síntomas.** Es la sección más importante del entregable. Si está bien, vende solo. Si está mal, todo lo demás no alcanza.

**Estructura template:**

> *"El problema no es que [síntoma percibido]. El problema es que [causa raíz que el cliente no veía]. Por eso [consecuencia visible]. Y por eso [consecuencia invisible que afecta el negocio]."*

**Ejemplo del psicotécnico:**

> *"El problema no es que el informe sea malo. El informe es excelente desde lo profesional. El problema es que el formato del informe NO está alineado con el trabajo real que viene a hacer el cliente cuando contrata: tomar una decisión clara sobre una persona. Por eso el cliente lee parcialmente, percibe el servicio como 'uno más', y el precio queda anclado a 'cuánto cuesta un informe psicológico' en lugar de 'cuánto vale tomar una buena decisión de contratación'."*

Tres reglas para el diagnóstico central:

1. **Diferenciar síntoma de causa.** Síntoma es lo visible. Causa es lo estructural. El cliente describe síntomas; vos detectás la causa.
2. **3-5 líneas máximo.** Si excede, está sobreescrito. Editar y cortar.
3. **NO tocar el oficio profesional** (principio P1 de Yellow). El rediseño cambia cómo se entrega, no qué se entrega.

---

### Propuesta de intervenciones

Para cada pain point principal del Día 3, diseñá 1-2 intervenciones concretas. Cada intervención tiene:

- **Nombre técnico** del vocabulario UX (revelación progresiva, cambio de soporte, arquitectura por capas, etc.).
- **Qué hace** (descripción concreta en 2-3 líneas).
- **Por qué resuelve** el pain point específico.
- **Cómo se ve** (cómo lo experimenta el cliente final post-rediseño).
- **Qué principio de Good Services mejora.**
- **A qué job atiende** (functional / emotional / social).

Mínimo 3, máximo 7 intervenciones. Si son más de 7, hay que priorizar.

**Ejemplo del psicotécnico:**

> **Intervención 1: Revelación progresiva**
> - Qué hace: rediseñar el entregable como informe de una página visual con conclusión + 3-4 datos clave. El usuario obtiene la decisión en 30 segundos.
> - Por qué: resuelve el information overload (pain point 1) y el mismatch con el job (decidir, no leer).
> - Cómo se ve: primera vista = conclusión + recomendación + scores en una pantalla. Lo demás bajo demanda.
> - Good Services mejora: principios 4 (permite completar el objetivo) y 8 (solo pasos esenciales).
> - Job: functional (decidir) + emotional (sentirse seguro).

---

### Ejercicio del día (60 min)

Escribí:

1. **Diagnóstico central** (3-5 líneas).
2. **3-5 intervenciones** completas con el formato de arriba.

**Self-check del día:** ¿el diagnóstico central distingue síntoma de causa? ¿Cada intervención está conectada a un pain point específico Y a un principio de Good Services? Si una intervención no se conecta con nada, probablemente es opinión, no método.

---

## Día 5: Prototipo manual

### Qué es el prototipo manual

**Principio operativo de Yellow:** antes de invertir en construir el sistema operativo, hacé **UNA instancia del entregable rediseñado a mano** para 1 cliente final real.

Sirve para:

- **Validar que el rediseño efectivamente cierra el gap descubierto.** No alcanza con que la idea suene bien.
- **Obtener feedback del cliente final** antes de automatizar.
- **Acordar con el profesional la spec final del sistema** antes de construirlo.

**Si el prototipo no genera la reacción esperada en el cliente final, iterar la spec antes de seguir.** Construir el sistema sobre un rediseño no validado es desperdicio garantizado.

### Por qué importa

Esto operacionaliza P6 (Doing > thinking) de Service Design. Aprendés en el campo, no en el plan. Una hora de prototipo manual te dice más que una semana de revisión teórica.

---

### Cómo diseñar el prototipo manual

Para el servicio analizado, elegí UNA de tus intervenciones del Día 4 (la más central, la que ataca el pain point más alto). Diseñá el prototipo manual:

1. **Qué se le entrega al cliente final** (1 instancia concreta del rediseño).
2. **Quién es el cliente final del prototipo** (alguien real, no hipotético).
3. **Cómo se construye a mano** (sin sistema todavía, hecho artesanalmente).
4. **Qué señales mirás post-entrega** para saber si funcionó.
5. **Cómo recoges feedback** (entrevista de 20 min, encuesta de 3 preguntas, observación directa).

**Ejemplo del psicotécnico:**

> **Prototipo manual: informe de una página visual**
> - Qué se entrega: 1 informe de una página con la conclusión + 3 scores, hecho a mano en Figma sobre el caso de Juan (cliente final real del cliente).
> - A quién: la empresa de RRHH que está evaluando a Juan para un puesto.
> - Cómo se construye: la psicóloga hace su evaluación normal, después la psicóloga + Yellow extraen la conclusión y scores en una página visual. 2-3 horas de trabajo manual.
> - Señales: ¿la empresa toma la decisión más rápido? ¿pregunta menos? ¿pide la capa profunda?
> - Feedback: llamada de 15 min con el referente de RRHH 3 días después.

---

### Reglas del prototipo manual

- **NO es un mockup.** Es el entregable real, hecho a mano para 1 caso real.
- **NO se automatiza todavía.** El sistema se construye después de validar.
- **NO es perfecto.** Es funcional. La estética se pule en el sistema.
- **Tiene que ir al cliente final real** del profesional. No al profesional, no a vos. Al cliente final.

---

### Ejercicio del día (60 min)

Diseñá el prototipo manual de la intervención principal. Documentalo con el formato de arriba.

Si tenés acceso al servicio real (porque lo elegiste con esa idea), planificá cómo coordinarías la entrega del prototipo manual a un cliente final real. Si no tenés acceso, describí cómo lo harías si tuvieras el caso real.

**Self-check del día:** ¿el prototipo se entrega a un cliente final real, no al profesional? ¿Tenés claro qué señal post-entrega te diría que el rediseño funciona?

---

## Día 6: Spec del sistema operativo

### Principio madre: la Tesis (Sistemas vivos)

Recordatorio crítico: en Yellow, el entregable final NO es un documento. Es un **sistema que el cliente opera todos los días**.

Si al cerrar el proyecto el cliente solo tiene un archivo para leer, hay que rediseñar la entrega. **El diagnóstico es referencia; el sistema es el activo.**

### Componentes típicos de un sistema operativo

Varían según el caso, pero los componentes habituales son:

- **Plantillas activas:** one-pager, microsite, consigna diaria, protocolo por momento crítico, curación por uso.
- **Prompts:** convierten el input técnico del profesional (lo que ya genera naturalmente) en el output rediseñado.
- **Integraciones:** con herramientas que el profesional ya usa (WhatsApp, Google Drive, agenda, Notion, etc.).
- **Microsite o portal del cliente final** si corresponde.

### Criterio de "sistema listo"

Tres condiciones que el sistema cumple para considerarse entregable:

1. **El profesional puede generar al menos 1 instancia del entregable rediseñado sin asistencia.**
2. **El input que requiere de él es el que ya genera naturalmente en su trabajo.** No tiene que producir input nuevo solo para alimentar el sistema.
3. **El cliente final recibe el output sin saber que existe un sistema atrás.**

Si alguna de las 3 falla, el sistema no está listo. Falta refinar.

---

### Cómo se conecta con el prototipo manual

El prototipo manual del Día 5 valida el **rediseño**. El sistema del Día 6 automatiza **la producción** de ese rediseño para que escale.

Flujo:

1. Diseño la intervención (Día 4).
2. Construyo prototipo manual de 1 instancia (Día 5).
3. Valido con cliente final real.
4. Si valida → defino spec del sistema que produce eso a escala (Día 6).
5. Si no valida → itero la intervención, vuelvo al paso 2.

---

### Diseñar la spec del sistema

Para el rediseño del servicio analizado, diseñá la spec del sistema operativo. Documentá:

1. **Componentes del sistema** (lista concreta: qué plantillas, qué prompts, qué integraciones).
2. **Input del profesional:** qué necesita ingresar y en qué formato. Idealmente lo que ya genera naturalmente.
3. **Output del sistema:** qué recibe el cliente final y en qué formato.
4. **Diagrama de flujo simple:** input → procesamiento → output.
5. **Herramientas/stack candidato:** Notion, Google Drive, Figma, microsite custom, etc.
6. **Plan de build:** 3-5 hitos concretos para construir el sistema.

**Ejemplo del psicotécnico:**

> **Sistema operativo del rediseño**
> - **Componentes:**
>   - Plantilla en Figma del informe de una página.
>   - Prompts para asistir codificación de tests con IA.
>   - Microsite custom con arquitectura por capas (capa 1 / 2 / 3).
> - **Input:** la psicóloga ingresa los resultados de tests + su recomendación profesional, como ya lo hace hoy.
> - **Output:** el cliente recibe un link único al microsite con su informe visual + posibilidad de profundizar.
> - **Stack:** Next.js + Vercel + Supabase + Figma para plantillas.
> - **Plan de build:** (1) plantilla one-pager, (2) prompts de codificación asistida, (3) microsite MVP, (4) integración con el flujo actual de la psicóloga, (5) test con 1 cliente real.

---

### Ejercicio del día (60 min)

Diseñá la spec del sistema operativo del servicio analizado, con los 6 puntos listados arriba.

**Self-check del día:** ¿el sistema cumple las 3 condiciones de "sistema listo"? Si el input requiere que el profesional cambie su forma de trabajar, está mal diseñado — tiene que aceptar el input que ya genera.

---

## Día 7: Diagnóstico escrito completo + self-check

### El diagnóstico final

Compilá todo el material de la semana en un documento de **12-20 páginas** estructurado así:

1. **Contexto del cliente** (1 página).
2. **Service blueprint actual** (1-2 páginas con tabla).
3. **Análisis JTBD del cliente final** (2-3 páginas: job dominante, 3 jobs, contra qué compite, outcomes, **meta-patrón**).
4. **Pain points identificados** (2-3 páginas, lista con Good Services check).
5. **Diagnóstico central** (1 párrafo punzante, 3-5 líneas).
6. **Propuesta de rediseño** (3-5 páginas: las intervenciones).
7. **Prototipo manual + plan de validación** (1 página).
8. **Sistema operativo: spec** (2-3 páginas: componentes, input, output, plan de build).
9. **Hipótesis de impacto / KPIs** (1 página, tabla de métricas).
10. **Riesgos y consideraciones** (1 página).

---

### Reglas del diagnóstico

- **Todas las afirmaciones marcadas con ✅/🔵/❓.** Inventar es la falta más grave.
- **NO excede 25 páginas.** Si excede, está sobreescrito.
- **NO toca el oficio profesional** (P1).
- **Diagnóstico central de 3-5 líneas.** No más.
- **Cada intervención conectada a un pain point específico.**
- **El entregable incluye spec del sistema operativo.** Tesis.

---

### Self-check de la semana (60 min)

#### Acción 1 (40 min): completar el diagnóstico

Si llegaste con todo el material de los días 1-6, el diagnóstico se compila relativamente rápido. Si te trabás escribiendo, identificá cuál sección te frena y volvé al día correspondiente.

**Checklist final:**

- [ ] Las 10 secciones están completas.
- [ ] Todas las afirmaciones tienen ícono ✅/🔵/❓.
- [ ] El diagnóstico central es punzante (3-5 líneas).
- [ ] Las intervenciones se conectan a pain points + Good Services.
- [ ] El meta-patrón aparece con frase textual.
- [ ] El sistema operativo tiene spec concreta (no solo "después se ve").
- [ ] El prototipo manual está descrito con cliente final real.
- [ ] Los KPIs son medibles.
- [ ] No excede 25 páginas.

#### Acción 2 (20 min): explicación oral de 5 minutos

Imaginate que estás presentando el diagnóstico al profesional dueño del servicio. Explicalo en voz alta en 5 minutos, sin notas. Grabate.

**Estructura sugerida:**

1. "Lo que descubrimos en research" (30 seg).
2. "El problema real, no el síntoma" — diagnóstico central (1 min).
3. "Las intervenciones" — 3 más importantes (2 min).
4. "El sistema que te llevás" — cómo opera (1 min).
5. "Qué medimos para saber si funcionó" — KPIs (30 seg).

---

### Criterio de "pase"

- ✅ **Si pudiste completar el diagnóstico Y explicarlo en 5 minutos sin trabarte:** pasá a Semana 4. Ya producís entregables comparables al caso de la psicóloga.
- 🔵 **Si el diagnóstico está bien pero la explicación oral fue confusa:** practicá la explicación 2-3 veces más antes de seguir. Saber escribirlo y saber decirlo son habilidades distintas.
- ❌ **Si el diagnóstico te quedó superficial o no pudiste hacer la spec del sistema:** la semana próxima va a quedar inflada con dudas pendientes. Mejor sumar un día extra para reforzar lo que falta.

---

## Notas

- Lo más difícil de esta semana es escribir el **diagnóstico central** (3-5 líneas). Suele salir mucho texto que en realidad es síntoma, no causa. Si tu diagnóstico central tiene más de 5 líneas, está mal. Releelo y buscá la causa real, la que está debajo de los síntomas.
- Los **KPIs cualitativos** ("mejorar la experiencia", "aumentar satisfacción") son trampa. No son métricas. Métricas son números: NPS de X a Y, tiempo de Z minutos a W minutos, conversión de tal a tal.
- Si el diagnóstico te quedó largo (30+ páginas), es señal de inseguridad. Cortalo a 20.
- **El sistema operativo es la diferencia entre Yellow y consultoría tradicional.** Un consultor común entrega plan. Yellow entrega sistema. Si tu spec del Día 6 quedó débil, repetilo — sin sistema no hay valor cobrable.
- El **prototipo manual** se ve simple pero es clave. Te ahorra construir un sistema entero sobre un rediseño que no funciona. Tomate en serio el Día 5.

---

## Próxima semana

Semana 4: integrar todo en el **flujo operativo end-to-end** — desde "llega un prospect" hasta "primer pago + kickoff del proyecto". Vas a simular el flujo completo y validar que podés operar sin trabarte.
