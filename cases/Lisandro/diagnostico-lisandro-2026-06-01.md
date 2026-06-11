# Diagnóstico: Lisandro Ruidía, sistema de gestión personal y de equipo

**Cliente:** Lisandro Ruidía, jefe de mesa de trading en Macro Agro (corredora de cereales), ascendido desde un rol operativo senior, con un equipo de cinco personas a cargo.
**Fecha:** 2026-06-01
**Versión:** Borrador

---

## Nota metodológica de entrada

Este diagnóstico se construye sobre una sola conversación con Lisandro (1 de junio de 2026, "Centralización de tareas con Notion"), posterior a la propuesta ya enviada. Se apoya además en el material previo del caso (`jtbd-lisandro.md`, `analisis-yellow-lisandro.md` del 2026-05-22, propuesta vigente v4).

Lisandro es a la vez comprador y usuario principal del sistema. Su experiencia, por lo tanto, es evidencia de primera mano: lo que dice de su propia semana se marca como verificado (✅). En cambio, el principio P5 (entrevistar a 2-3 clientes finales antes de rediseñar) no está cumplido: no se entrevistó a los cinco traders, ni a las personas de otras áreas que le derivan pedidos, ni a su jefe, ni a los integrantes de su familia que participan del plano personal. Toda afirmación sobre cómo va a operar el sistema con esos terceros viaja como hipótesis (🔵). Lo que aún no se sabe se marca como gap (❓).

Una salvedad de fondo, ya levantada en el análisis del 2026-05-22 y no resuelta: este servicio está en el borde del ICP de Yellow o afuera. El método Yellow asume un profesional independiente que vende un servicio a clientes finales, cuya experiencia se rediseña para subir la disposición a pagar de esos clientes. Acá no hay reventa: Lisandro compra un sistema para su propio uso y el de su equipo. El eje WTP (`value-based-strategy.md`) se reencuadra a lo largo del documento como la disposición a pagar del propio Lisandro por el sistema, medida contra el costo de no tenerlo. Esa traducción se hace explícita donde corresponde.

---

## 1. Contexto del cliente

Lisandro conduce la mesa de trading de una corredora de cereales. Llegó a ese lugar ascendido desde un rol operativo senior, y hoy tiene cinco personas a cargo. Se describe a sí mismo como *"un punto neurálgico de varias personas"* que *"carece de memoria"*: la coordinación de su área pasa por él, los pedidos le llegan de todos lados, y la sensación que reporta es la de *"creer que me acuerdo de todo y no acordarme de nada"* ✅. Reporta a un gerente, Mario Draga, que le dio luz verde para avanzar con esta iniciativa y le marcó una sola condición, el cuidado de la confidencialidad de los datos ✅.

Los pedidos que recibe no vienen solo de arriba. Vienen de toda la compañía, de manera lateral, y eso le genera una tensión de rol que nombra con claridad: *"todos me piden cosas a mí cuando yo le tendría que estar pidiendo al resto"* y *"parece que yo tengo que controlar a los otros cuando los otros me tienen que controlar a mí"* ✅. Esta es la marca del salto de operador senior a conductor de equipo, todavía sin resolver.

Lisandro ya empezó a moverse solo. Hace diez días usa Notion: tiene una bandeja de entrada donde se anota tareas y una tabla aparte a la que las pasa, y valora especialmente el tomado automático de notas en reuniones, que ya le baja la ansiedad de entrar a una reunión sin saber qué se habló antes ✅. Está en la versión gratuita de Notion, que vence en unos veinte días ✅. El plano que quiere ordenar no es solo el del trabajo: insiste, a lo largo de toda la conversación, en que lo personal (la logística agropecuaria de sus padres, su familia directa, sus finanzas y operaciones propias) es *"parte del todo"* y debe entrar al mismo sistema, tratado como un segundo trabajo con su propia estructura ✅.

---

## 2. Service blueprint actual

A diferencia del caso canónico, acá el blueprint no mapea un servicio que el cliente vende, sino el **flujo operativo del propio Lisandro**: cómo entra el trabajo, cómo lo retiene, cómo lo ejecuta y cómo lo muestra. La adaptación es deliberada y se declara, porque el objeto de rediseño es el sistema de gestión de Lisandro, no una experiencia entregada a un tercero pagador.

### Customer journey (cronológico)

*Llega un pedido por una de muchas fuentes (WhatsApp, mail, reunión, pasillo, teléfono) → Lisandro intenta retenerlo en la cabeza o, desde hace diez días, anotarlo en la bandeja de Notion → lo ejecuta, lo delega de palabra o lo olvida → aparece la instancia de control (una reunión, un pedido del jefe) → queda expuesto si algo no se hizo o reporta de memoria → el ciclo se reinicia sin registro de lo que se pidió, quién lo pidió y qué prioridad real tenía.*

### Capas del blueprint

| Acciones de Lisandro | Frontstage (lo que ven los demás) | Backstage (lo invisible) | Procesos de soporte |
|---|---|---|---|
| Recibe pedidos de múltiples fuentes | El que pide ve que "Lisandro se hace cargo" | Retención mental, sin registro unificado | WhatsApp, mail corporativo, voz, teléfono |
| Decide qué hacer y qué delegar | El equipo recibe pedidos de palabra | Priorización informal, en la cabeza | Bandeja de Notion (hace 10 días) |
| Ejecuta o delega | Avanza lo urgente, queda lo importante | Sin trazabilidad de quién pidió qué | Notas sueltas, memoria |
| Entra a reuniones | Lo exponen o se anticipa según lo que recuerde | Reconstrucción de estado a último momento | Notas automáticas de reunión ✅ |
| Reporta hacia arriba | El jefe escucha sensaciones más que datos | Armado de reporte de memoria | Sin tablero de estado |
| Cierra el ciclo personal (familia, finanzas) | La familia percibe que él "se ocupa" | Mezcla del plano personal con el laboral | Cabeza, sin sistema |

El touchpoint que hoy funciona y baja ansiedad es el tomado automático de notas ✅. El que concentra el riesgo es la **captura del pedido en el momento en que entra**, porque no hay ningún punto del sistema que recoja de forma confiable lo que llega por canales tan dispersos.

---

## 3. Job-to-be-Done del cliente final

El cliente final cuyo job se mapea es **Lisandro mismo**, porque es comprador y usuario. Los cinco traders, el jefe, las áreas que le piden y la familia son usuarios o partes interesadas del sistema, no compradores del servicio.

### Job dominante

> *"Cuando me ascendieron a conducir el equipo y los pedidos de todos lados empezaron a pasar por mi cabeza, quiero un sistema que capture todo y lo ordene, para poder responder con datos, dejar de ser el cuello de botella y que me vean como alguien que tiene el control."* 🔵

La formulación refina la del 2026-05-22 con material de esta conversación: aparece con fuerza la dimensión lateral (pedidos de toda la compañía, no solo del jefe) y la dimensión de evidencia (responder con datos, quedar cubierto).

### Los tres jobs en juego

- **Functional job** 🔵: capturar en un solo lugar lo que llega de muchas fuentes, traducir pedidos difusos en objetivos y tareas concretas, delegar y ver el avance sin tener que preguntar.
- **Emotional job** ✅: tranquilidad mental. Lo dice de forma directa, la sensación de *"estallar"* y de *"creer que me acuerdo de todo y no acordarme de nada"* es lo que quiere que desaparezca. Entrar a las reuniones *"sabiendo que no me la van a pegar por ningún lado"*.
- **Social job** ✅: ser visto como responsable y como gestor, no como el operador senior que ascendieron. Incluye una arista defensiva explícita: poder mostrar que un pedido se cumplió cuando el que lo pidió después le resta importancia.

Nota: el "performance job" de `jtbd-lisandro.md` no es un cuarto job en la nomenclatura Yellow. Es la capa de resultados medibles, que vive en la sección 8.

### Contra qué compite realmente

La pregunta 5 de la Switch Interview no se hizo, así que el eje de competencia sigue parcialmente abierto ❓. Candidatos, ahora con más sustento del transcript:

- El statu quo: seguir resolviéndolo en la cabeza. Inertia fuerte, es lo que viene haciendo hace años ✅.
- Notion solo, sin capa de inteligencia. Lisandro ya lo usa hace diez días y percibe que *"Notion se queda un poco"* en el análisis y los recordatorios ✅.
- Agentes de IA sueltos que den recordatorios, idea que él mismo trae como hipótesis precaria pero suficiente para arrancar ✅.
- Sumar un asistente humano o delegar la coordinación a alguien del equipo 🔵.
- Herramientas de gestión de estantería (Asana, ClickUp, Monday, un curso de OKR) 🔵.

Esta lista alimenta el eje de brecha del Value Map y debe cerrarse con la pregunta 5 en la sesión de onboarding.

---

## 4. Value Map

Único mecanismo de priorización del diagnóstico (`value-based-strategy.md`). Acá el eje WTP se lee como la disposición de Lisandro a pagar por el sistema, medida contra el costo de no tenerlo y contra las alternativas que consideró.

### Value drivers priorizados

| # | Driver (lo que le importa a Lisandro) | Importancia | Brecha vs alternativa | Tema |
|---|---|---|---|---|
| 1 | Capturar en un solo lugar lo que llega de todos los canales | Alta ✅ | Grande ✅ (hoy vive en la cabeza y en notas sueltas) | captura |
| 2 | Tranquilidad mental, dejar de "estallar" | Alta ✅ | Grande ✅ | núcleo |
| 3 | Responder y reportar con datos, no con sensaciones | Alta ✅ | Grande 🔵 (hoy arma de memoria) | visible hacia arriba |
| 4 | Traducir pedidos difusos en objetivos e iniciativas (OKR) | Alta 🔵 | Media 🔵 | criterio |
| 5 | Delegar iniciativas enteras y ver el avance sin preguntar | Alta 🔵 | Media 🔵 | criterio |
| 6 | Quedar cubierto, dejar rastro de lo pedido y lo cumplido | Media-alta ✅ | Grande 🔵 | defensa política |
| 7 | Unificar lo personal y lo laboral en un mismo esquema | Media-alta ✅ | Grande 🔵 | alcance |
| 8 | Reducir las consultas del equipo | Media 🔵 | ❓ (depende de la adopción del equipo) | depende de terceros |

Cambios respecto del Value Map del 2026-05-22: los drivers de captura (1), tranquilidad (2) y reporte con datos (3) suben a importancia verificada porque Lisandro los nombró en primera persona. Aparecen dos drivers nuevos que el análisis anterior no tenía: la **defensa política** (driver 6, dejar rastro para no quedar expuesto) y la **unificación de lo personal con lo laboral** (driver 7), ambos surgidos con fuerza en esta conversación.

### Lectura del stick

El valor creado vive en dos capas. La primera es la **captura confiable** de todo lo que entra, que es la condición de posibilidad de todo lo demás: sin captura no hay datos para reportar, ni rastro para cubrirse, ni base para delegar. La segunda es el **criterio de gestión** (la metodología OKR que baja lo difuso a concreto y reparte iniciativas), que es lo difícil de producir y, por lo tanto, lo cobrable.

La commodity es el tablero de Notion y el asistente como herramientas. La propuesta vigente ya cobra el criterio y deja la herramienta como soporte, lo cual opera bien el meta-patrón. La fuga de captura de valor identificada el 2026-05-22 sigue vigente: las notas de costo (Notion gratis, Claude alrededor de 20 dólares) puestas al lado del precio invitan a leer el sistema como "un template más un ChatGPT" y anclan la disposición a pagar hacia abajo. Conviene moverlas a un anexo de menor peso visual.

---

## 5. Pain points identificados

Derivados del Value Map y del estado de ejecución de los touchpoints. Ordenados por la prioridad del driver al que sirven.

### 1. Captura dispersa, sin punto único de entrada ✅

El trabajo entra por WhatsApp, mail, reuniones, pasillo y teléfono, y no hay ningún lugar que lo recoja de forma confiable. Agustín lo nombra en la conversación como la fricción más grande de todo el sistema. Afecta directamente al driver 1 y, en cascada, a los drivers 3 y 6: sin captura no hay datos ni rastro. Estado de ejecución: ❌ (la bandeja de Notion de hace diez días cubre solo lo que Lisandro recuerda anotar).

### 2. El sistema vive en la cabeza y no escala ✅

Lisandro es el punto por el que pasa todo y opera de memoria. La consecuencia que él mismo describe es *"estallar"*. La consecuencia de negocio es que el área depende de que él esté encima: unos días afuera y la coordinación se frena. Afecta a los drivers 2 y 5. Estado: ❌.

### 3. Reporte hacia arriba armado de memoria 🔵

Lisandro entra a reuniones reconstruyendo el estado a último momento y reporta con sensaciones más que con números. Esto lo deja expuesto y debilita cómo lo ve su jefe. Afecta al driver 3. Estado: ⚠️ (hoy se sostiene con esfuerzo, sin tablero de estado). Falta el dato de qué reporta, cada cuánto y cuánto le cuesta hoy ❓.

### 4. Inversión de rol: pide quien debería recibir pedidos ✅

Los pedidos le llegan de toda la compañía cuando, por su rol, debería ser él quien baja el trabajo al equipo. Sin un registro de quién pidió qué, no puede mostrar la carga real ni poner límites. Afecta a los drivers 6 y 8. Estado: ❌.

### 5. Pedidos que llegan difusos ✅

Lo que le bajan, sobre todo desde arriba, llega sin forma concreta (*"te lo tiran ahí y te dicen arreglate"*). Sin un método para traducir eso a objetivos medibles e iniciativas, el pedido difuso se vuelve trabajo sin foco. Afecta al driver 4. Estado: ❌.

### 6. Plano personal y laboral sin un esquema común ✅

Lisandro lleva familia, logística agropecuaria de sus padres y finanzas propias en paralelo al trabajo, sin estructura. Lo vive como un segundo trabajo y quiere que entre al mismo sistema. Afecta al driver 7. Estado: ❌.

### 7. Adopción del equipo no asegurada 🔵

El valor de los drivers 5 y 8 depende de que los cinco traders marquen estado y entren a la reunión semanal. Ese comportamiento no está validado: el equipo no fue entrevistado. Es el pain point con más riesgo a futuro y el menos verificado. Estado: ❓.

---

## 6. Diagnóstico central

> Lisandro ya construyó más orden personal que la mayoría: arrancó solo con Notion y sostiene la disciplina de anotarse. El cuello de botella está en otro lado. Todo el trabajo de su área entra por canales dispersos y se almacena en su cabeza, sin un punto único que lo capture ni un criterio que lo ordene. Por eso vive apagando incendios, llega a las reuniones reconstruyendo de memoria y queda expuesto cuando alguien le resta importancia a lo que pidió. Y por eso, mientras la coordinación dependa de que él esté encima, el área no escala y su salto de operador a conductor queda trabado.

---

## 7. Propuesta de rediseño

Cada intervención conecta con un pain point y lleva su cadena causal hasta la disposición a pagar de Lisandro (reencuadre del eje WTP para este caso: el valor que recibe justifica el precio que paga, medido contra el costo de no tenerlo).

### 1. Bandeja única de captura

**Qué:** un solo punto de entrada en Notion donde baja todo lo que llega, sin importar el canal. Lisandro reescribe ahí el pedido del pasillo, reenvía el de WhatsApp, pega el del mail. El sistema lo trata como material crudo a clasificar después.
**Cadena causal:** responde al pain point 1 (captura dispersa) → sirve al driver 1 (capturar en un solo lugar), condición de los drivers 3 y 6 → al existir un registro confiable, Lisandro deja de operar de memoria y el sistema empieza a tener datos → eso sube el valor percibido del sistema completo, porque sin captura las otras capas no funcionan, y justifica el precio frente al costo de seguir estallando.
**Cómo se ve:** Lisandro abre una sola vista, vuelca lo que entró y sigue. La clasificación y la calendarización ocurren después, con ayuda del asistente.

### 2. Skill de OKR: bajar lo difuso a concreto

**Qué:** una skill de Claude entrenada en la metodología OKR que toma un pedido amplio (el ejemplo de la conversación, *"desarrollá IA para trading"*) y lo baja a objetivos, resultados clave medibles e iniciativas como hipótesis de avance.
**Cadena causal:** responde al pain point 5 (pedidos difusos) → sirve al driver 4 (traducir lo difuso a concreto), que es el criterio cobrable → instalar ese criterio es lo difícil de producir y lo que diferencia al sistema de un Notion vacío → mueve la disposición a pagar de Lisandro porque lo que compra es el criterio de gestión, no la herramienta.
**Cómo se ve:** Lisandro le dicta a Claude lo que le bajaron y recibe cuatro ideas medibles para acercarse al objetivo, listas para revisar y aprobar.

### 3. Delegación por iniciativa con asignación por fortalezas

**Qué:** cada iniciativa aprobada se asigna a una de las cinco personas del equipo, con dueño, plazo y forma de medir avance. El asistente puede sugerir a quién, según las fortalezas de cada integrante cargadas en el sistema.
**Cadena causal:** responde a los pain points 2 y 4 (todo pasa por él, inversión de rol) → sirve al driver 5 (delegar iniciativas enteras) → al delegar la unidad completa y no tareas sueltas, Lisandro deja de ser el cuello de botella → eso habilita el salto de rol y sostiene el valor del sistema en el tiempo, no solo en la primera semana.
**Cómo se ve:** Lisandro aprueba la asignación, el equipo recibe la iniciativa con todo lo necesario para avanzar sin volver a preguntarle.

### 4. Tablero con vistas: arriba y abajo, personal y laboral

**Qué:** una misma base de datos con vistas distintas. Vista hacia arriba (qué reportar al jefe, estado de los objetivos del trimestre), vista hacia abajo (qué está haciendo cada trader), vista personal y vista laboral, y un filtro propio ("solo las tareas de Lisandro").
**Cadena causal:** responde a los pain points 3 y 6 (reporte de memoria, planos sin esquema común) → sirve a los drivers 3 y 7 → ver el estado en segundos reemplaza la reconstrucción a último momento, y un solo esquema para todo absorbe el plano personal sin duplicar sistema → sube el valor porque cubre la totalidad que Lisandro pide, no solo el trabajo.
**Cómo se ve:** Lisandro abre la vista que necesita en cada momento. Para el jefe, el estado del trimestre. Para él, su semana completa, laboral y personal.

### 5. Calendarización automática

**Qué:** las tareas e iniciativas se bajan al calendario de Notion de forma automática, con dos calendarios diferenciados, personal y laboral, que evitan que se superpongan los compromisos.
**Cadena causal:** responde al pain point 6 (planos sin esquema común) → sirve a los drivers 2 y 7 → ver los dos planos en un mismo calendario sin choques baja la carga mental de sostenerlos por separado → refuerza la tranquilidad, que es el driver emocional central.
**Cómo se ve:** Lisandro pide "calendarizá esto" y el sistema ubica cada cosa donde corresponde, respetando lo personal y lo laboral.

### 6. Reunión semanal como ritual de control pasivo

**Qué:** una reunión semanal de Lisandro con su equipo para revisar el avance de las iniciativas contra sus resultados clave. Es el latido del sistema.
**Cadena causal:** responde al pain point 7 (adopción del equipo) → sirve a los drivers 5 y 8 → el ritual semanal es lo que mantiene los datos vivos y convierte el control activo (preguntar uno por uno) en control pasivo (mirar el tablero) → sostiene en el tiempo el valor de todo lo anterior, que sin ritual se apaga.
**Cómo se ve:** una vez por semana, Lisandro mira el tablero con su equipo y ve qué avanzó y qué no, sin perseguir a nadie durante la semana.

### 7. Capa de evidencia y trazabilidad

**Qué:** dado que todo pedido queda capturado con origen y estado, el sistema produce, sin trabajo extra, un rastro de quién pidió qué, cuándo y en qué quedó.
**Cadena causal:** responde a los pain points 1 y 4 (captura, inversión de rol) → sirve al driver 6 (quedar cubierto) → poder mostrar lo pedido y lo cumplido cambia la posición de Lisandro frente a quien le resta importancia a su trabajo → es un valor que él nombró de forma explícita y que ninguna alternativa de estantería le da igual de integrada.
**Cómo se ve:** cuando alguien minimiza un pedido que le costó trabajo, Lisandro puede mostrar el registro en lugar de discutir de memoria.

**Logro inmediato ya validado:** el tomado automático de notas en reuniones ya funciona y ya le baja la ansiedad ✅. Conviene integrarlo formalmente al flujo de captura (las notas de la reunión alimentan la bandeja única).

**Restricción de diseño declarada.** Funciona como límite del alcance, no como una intervención del rediseño. La cuenta se monta sobre el Gmail personal y la cuenta personal de Claude, por fuera de los sistemas del trabajo. El mail corporativo queda fuera del alcance de la conexión. Esto responde a la condición de confidencialidad que puso el jefe y a la decisión de Lisandro de que el sistema sea propio. El diseño no debe asumir acceso a datos corporativos.

---

## 8. Hipótesis de impacto

| Métrica | Hipótesis | Cómo se mide |
|---|---|---|
| Pedidos capturados vs perdidos | Sube a cerca del 100% de captura | Conteo en la bandeja única durante las primeras 4 semanas |
| Tiempo de armado del reporte al jefe | Baja de "reconstruir a último momento" a minutos | Registro de tiempos en las primeras reuniones con el jefe |
| Consultas operativas del equipo por semana | Baja de forma marcada | Baseline a relevar en onboarding, conteo posterior |
| Iniciativas delegadas con dueño, plazo y métrica | Sube desde cero | Conteo en Notion |
| Sensación de control (carga mental) | Mejora reportada | Autoevaluación de Lisandro a 30 días |

**Status:** todas son hipótesis. Los baselines de varias (consultas por día, costo del reporte actual) son gaps a cerrar en el onboarding ❓. Se incluyen cinco indicadores para cumplir el mínimo de tres medibles del checklist, sabiendo que dos arrancan sin baseline.

---

## 9. Riesgos y consideraciones

- **Riesgo: disciplina de carga de datos.** Es la fricción más grande del sistema, nombrada por Agustín en la conversación. Si Lisandro no baja lo que entra por canales dispersos, el sistema se vacía. **Mitigación:** una sola bandeja de captura lo más simple posible, integrada con lo que ya usa (el tomado de notas), y la reunión semanal como ritual que obliga a mantenerlo vivo.

- **Riesgo: confidencialidad de datos corporativos.** El jefe lo marcó como condición. **Mitigación:** montar todo sobre cuenta personal, no conectar el mail corporativo, no asumir acceso a datos del banco. Declarado como restricción de diseño en la sección 7.

- **Riesgo: adopción del equipo no validada (P5).** El valor de la delegación y de la baja de consultas depende de cinco personas que no fueron entrevistadas. **Mitigación:** observación corta con uno o dos traders antes o durante el onboarding, y que la primera reunión semanal la conduzca Lisandro con Agustín mirando.

- **Riesgo: el alcance crece al unificar lo personal y lo laboral.** Sumar familia, logística agropecuaria y finanzas multiplica las bases de datos y los planos. **Mitigación:** resolverlo con la misma base de datos y vistas distintas (decisión que Agustín ya tomó en la conversación), no con sistemas paralelos.

- **Consideración: Notion gratuito vence en unos veinte días.** Lisandro va a tener que pasar a la versión paga de Claude (alrededor de 17 a 20 dólares) y, si quiere, a Notion pago. El tablero se diseña para funcionar sobre Notion gratuito.

- **Consideración: independencia del equipo físico.** El sistema vive en la cuenta de Lisandro, no en su computadora del trabajo. Si le cambian el equipo, no pierde nada ✅.

---

## 10. Próximos pasos sugeridos

1. **Una semana de desarrollo** del tablero de Notion y la skill de Claude, Agustín, a partir del 2 de junio ✅ (acordado en la conversación).
2. **Coordinación de fecha**, Agustín escribe el viernes 5 de junio para fijar la sesión de la semana siguiente ✅ (acordado).
3. **Sesión de onboarding 1:1** de 60 a 90 minutos, semana del 8 de junio, idealmente desde la casa de Lisandro para trabajar tranquilo ✅. En esta sesión, además del armado, cerrar los gaps de información de la sección 11 y la pregunta 5 del Value Map.
4. **Validación con uno o dos traders** del equipo, para no diseñar la capa de delegación a ciegas (P5). A coordinar con Lisandro.
5. **Sesión de ajuste a los 3-5 días** del onboarding, para corregir lo que no funcionó con uso real ✅.
6. **Seguimiento a los 30 días**, para evaluar si la metodología se sostiene y medir las hipótesis de impacto ✅.

---

## 11. Gaps de información

- Un episodio concreto de pérdida de control, con día y hora. Lo más cercano es la descripción de *"estallar"*, pero falta el caso puntual ❓.
- Número y tipo de consultas que recibe por día, baseline del KR de consultas ❓.
- Qué le reporta al jefe, cada cuánto y cuánto le cuesta hoy ❓.
- Dos o tres objetivos reales del trimestre en sus palabras. En la conversación, *"desarrollar IA para trading"* aparece como ejemplo hipotético, no confirmado como objetivo real ❓.
- Nivel de carga de datos del equipo (alto o bajo). Crítico, porque la premisa de diseño "una sola fricción" se apoya en esto ❓.
- Una herramienta de organización abandonada antes y por qué (señal de riesgo de abandono) ❓.
- La pregunta 5 de la Switch Interview (qué haría si el sistema no existiera), que ordena el eje de brecha del Value Map ❓.
- Cómo se estructura realmente el plano personal (qué decisiones toma con su hermano, qué con sus padres, qué ritmo tiene la logística agropecuaria) ❓.

---

## Preguntas de seguimiento para la próxima sesión

Para profundizar con Lisandro en el onboarding:

1. Contame el último día que sentiste que se te fue de las manos. ¿Qué pasó, qué hiciste, cuánto te llevó resolverlo?
2. ¿Cuántas veces por día te consultan algo que el equipo debería poder resolver solo, y de qué tipo son esas consultas?
3. ¿Qué le reportás hoy a Mario, cada cuánto, y cómo armás ese reporte?
4. ¿Qué te está pidiendo tu jefe a vos específicamente este trimestre? (Esto da los objetivos reales, no los de ejemplo.)
5. Tus cinco traders, ¿son de cargar cosas en sistemas o les cuesta? ¿Qué pasaría si les pedís que marquen sus tareas como hechas?
6. ¿Usaste alguna herramienta de organización antes de Notion? ¿Qué pasó con ella?
7. Si el sistema no existiera, ¿qué harías para resolver esto? (Pregunta 5, cierra el Value Map.)
8. En el plano personal, ¿quién es tu par para ejecutar y quién decide por encima? ¿Cómo querés que se vea ese plano en el tablero?
