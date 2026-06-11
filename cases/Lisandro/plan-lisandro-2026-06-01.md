# Plan de implementación: Lisandro Ruidía

**Cliente:** Lisandro Ruidía, jefe de mesa de trading en Macro Agro. Equipo: cinco traders a cargo.
**Foco:** instalar un sistema de gestión personal y de equipo (captura única + criterio OKR + tablero Notion + asistente de Claude), con la adopción sostenida como objetivo real, no solo el armado.
**Fecha:** 2026-06-01
**Deriva de:** `diagnostico-lisandro-2026-06-01.md` (intervenciones INT-1 a INT-7 de la sección 7, KPIs de la sección 8, riesgos de la sección 9).

---

## Nota de encuadre

El armado del sistema se concentra en una semana de desarrollo, según lo acordado en la conversación del 1 de junio. Pero el sistema solo crea valor si se sostiene en el tiempo, así que el plan no termina en la entrega: incluye la sesión de onboarding, el ajuste temprano con uso real y el seguimiento a 30 días.

Dos restricciones atraviesan todo el plan. La primera, la confidencialidad: todo se monta sobre cuenta personal (Gmail + Claude), por fuera de los sistemas del trabajo, según la condición que puso el jefe. La segunda, P5: los cinco traders no fueron entrevistados, así que las intervenciones que dependen del equipo (INT-3 y INT-6) arrancan como hipótesis y se validan antes de darlas por cerradas.

---

## 1. Intervenciones priorizadas

Cada fila referencia el código del diagnóstico (`INT-N`). El orden sigue la prioridad del Value Map: primero la captura (condición de todo lo demás), después el criterio cobrable, al final la capa que depende del equipo.

| # | Intervención | Pain points que resuelve | Esfuerzo | Owner principal | Fecha objetivo |
|---|---|---|---|---|---|
| INT-1 | Bandeja única de captura (integra el tomado de notas ya validado) | 1, 2 | Bajo | Agustín (armado), Lisandro (carga diaria) | 2026-06-06 |
| INT-2 | Skill de OKR: bajar pedidos difusos a objetivos, KR e iniciativas | 5 | Alto | Agustín | 2026-06-06 |
| INT-4 | Tablero con vistas (arriba/abajo, personal/laboral, "tareas de Lisandro") | 3, 6 | Medio | Agustín | 2026-06-06 |
| INT-5 | Calendarización automática con dos calendarios (personal y laboral) | 6 | Bajo | Agustín | 2026-06-06 |
| INT-7 | Capa de evidencia y trazabilidad (rastro de quién pidió qué) | 1, 4 | Bajo | Agustín (emerge de INT-1) | 2026-06-06 |
| INT-3 | Delegación por iniciativa con asignación por fortalezas del equipo | 2, 4 | Medio | Agustín (motor), Lisandro (datos del equipo) | 2026-06-10, validación en onboarding |
| INT-6 | Reunión semanal como ritual de control pasivo | 7 | Bajo de armar, alto de sostener | Lisandro (conduce), Agustín (acompaña la primera) | Primera semana posterior al onboarding |

INT-3 e INT-6 dependen de contenido y de comportamiento del equipo que todavía no están relevados. Se construye el motor en la semana de desarrollo, pero se cargan con datos reales y se validan recién en y después del onboarding (ver sección 4, dependencias).

---

## 2. KPIs y línea de base

Traslado directo de la sección 8 del diagnóstico. Varios baselines son ❓: fijarlos es parte del trabajo del onboarding, no un dato que ya exista.

| Métrica | Baseline actual | Target a 30-90 días | Cómo se mide |
|---|---|---|---|
| Pedidos capturados vs perdidos | ❓ (hoy depende de lo que recuerde anotar) | Cerca del 100% de captura a 30 días | Conteo en la bandeja única, primeras 4 semanas |
| Tiempo de armado del reporte al jefe | ❓ (hoy reconstruye a último momento) | De "reconstruir" a minutos | Registro de tiempos en las primeras reuniones con Mario |
| Consultas operativas del equipo por semana | ❓ (relevar en onboarding) | Baja marcada a 90 días | Baseline en onboarding, conteo posterior |
| Iniciativas delegadas con dueño, plazo y métrica | 0 | Sube desde cero, primeras iniciativas activas en semana 1 | Conteo en Notion |
| Sensación de control (carga mental) | "Estallar", todo en la cabeza | Mejora reportada a 30 días | Autoevaluación de Lisandro en el seguimiento |

**Status:** todas son hipótesis. El primer trabajo del onboarding es cerrar los baselines ❓ de las tres primeras métricas, para que el seguimiento a 30 días pueda medir contra algo.

---

## 3. Cronograma

### Fase 1, del 2026-06-02 al 2026-06-06: desarrollo

Agustín construye, sobre cuenta personal de Lisandro:

- **INT-1, INT-4, INT-5, INT-7:** tablero de Notion con la bandeja única, las vistas (arriba/abajo, personal/laboral, filtro propio), la calendarización con dos calendarios y la trazabilidad que emerge de la captura. Diseñado para funcionar sobre Notion gratuito.
- **INT-2:** skill de Claude entrenada en OKR, que toma un pedido amplio y lo baja a objetivos, KR e iniciativas, y al aprobarse lo manda a Notion con estados (por hacer / en progreso / realizada).
- **INT-3 (motor):** la lógica de asignación de iniciativas por fortalezas queda armada, lista para cargar con el equipo real en el onboarding.

**Salida de la Fase 1:** sistema armado y operable por Agustín, listo para mostrar.

### Coordinación, 2026-06-05 (viernes)

Agustín escribe a Lisandro para fijar la fecha de la sesión de la semana siguiente. Lisandro avisó que el lunes 8 y el martes 9 pueden estar complicados porque visita la oficina el jefe máximo, así que la sesión apunta al **miércoles 10 de junio**, con el lunes/martes como alternativa solo si se libera.

### Fase 2, semana del 2026-06-08 (objetivo miércoles 10): onboarding

Sesión 1:1 de 60 a 90 minutos, idealmente desde la casa de Lisandro para trabajar sin interrupciones. Agenda:

- Recorrido del sistema y cómo se opera (Agustín muestra, Lisandro prueba en vivo).
- **Cierre de gaps (sección 11 del diagnóstico):** episodio concreto de pérdida de control, número y tipo de consultas por día, qué reporta al jefe y cada cuánto, dos o tres objetivos reales del trimestre, una herramienta abandonada antes, y la pregunta 5 del Value Map.
- **Carga de contenido real:** los objetivos del trimestre reemplazan los de ejemplo, y los datos del equipo (las cinco personas y sus fortalezas) cargan INT-3.
- **Relevamiento del nivel de carga de datos del equipo**, que es la premisa del diseño "una sola fricción".
- Entrega del manual escrito.

**Salida de la Fase 2:** Lisandro opera el sistema con su propio contenido, baselines fijados, INT-3 cargada con el equipo real.

### Fase 3, 3 a 5 días después del onboarding (objetivo 2026-06-15): ajuste temprano

Sesión corta. Lisandro reporta qué funcionó, qué se trabó y qué no le gustó con uso real. Agustín ajusta el sistema. Es el momento de corregir antes de que la fricción de carga se vuelva hábito de abandono.

### Fase 4, primera semana posterior al onboarding: primera reunión semanal (INT-6)

Lisandro conduce la primera reunión semanal con su equipo, con Agustín acompañando. Es el touchpoint que define la calidad del sistema: sin el ritual, los datos se apagan. Acá se observa por primera vez el comportamiento real del equipo (validación parcial de P5).

### Fase 5, a 30 días del onboarding (objetivo 2026-07-10): seguimiento

Sesión de seguimiento para evaluar si la metodología se sostiene, medir las hipótesis de impacto contra los baselines fijados en el onboarding, y decidir si hay frentes nuevos para meterle (Lisandro fue claro en que, si le agarra la mano, "le mete mucho").

---

## 4. Dependencias y riesgos

### Dependencias

- **Cuenta personal paga de Claude.** El Notion gratuito de Lisandro vence en unos veinte días (alrededor del 2026-06-21). Lisandro pasa a la versión paga de Claude (17 a 20 dólares) sobre su Gmail personal. Sin esto, la skill no corre. Prerrequisito de la Fase 2.
- **Confidencialidad (restricción de diseño bloqueante).** Todo se monta sobre cuenta personal, sin conectar el mail corporativo ni asumir acceso a datos del banco. Condición del jefe, Mario Draga. El diseño de INT-1 no debe depender de fuentes corporativas.
- **Contenido real de Lisandro (Fase 2).** Los objetivos del trimestre y los datos del equipo no existen en el sistema hasta el onboarding. INT-3 y la carga útil del tablero dependen de esto.
- **Apertura a uno o dos traders (P5).** La validación de INT-3 e INT-6 necesita observar al equipo. A coordinar con Lisandro, idealmente antes o durante la primera reunión semanal.
- **Disciplina de carga diaria de Lisandro.** INT-1 solo funciona si baja lo que entra por canales dispersos. Es la dependencia de comportamiento más crítica del plan.

### Riesgos y mitigaciones

- **Riesgo: la carga de datos no se sostiene** (la fricción más grande, nombrada en la conversación). **Mitigación:** bandeja única lo más simple posible, integrada con el tomado de notas que ya usa, y la reunión semanal como ritual que obliga a mantenerla viva. El ajuste de la Fase 3 existe para corregir esto antes de que se vuelva abandono.
- **Riesgo: adopción del equipo no validada.** **Mitigación:** observación con uno o dos traders y primera reunión semanal conducida por Lisandro con Agustín mirando. Si el equipo resulta de baja carga de datos, simplificar el input que se les pide a marcar estado, nada más.
- **Riesgo: el alcance crece al sumar el plano personal.** **Mitigación:** misma base de datos con vistas distintas, no sistemas paralelos (decisión ya tomada). Mantener lo personal como otra vista, no como otro proyecto técnico.
- **Riesgo: la visita del jefe máximo (8 y 9 de junio) corre la sesión.** **Mitigación:** la coordinación del viernes 5 deja la fecha abierta al miércoles 10 o más adelante en la semana.
- **Riesgo: el sistema se lee como "un Notion más un ChatGPT" y el precio se erosiona** (fuga de captura de valor del diagnóstico). **Mitigación:** en la comunicación, el criterio de gestión (INT-2) es lo que se cobra; las notas de costo de las herramientas van a un anexo de menor peso, no al lado del precio.

---

## 5. Próxima revisión

El plan se revisa en la sesión de ajuste (Fase 3, objetivo 2026-06-15) contra lo que funcionó con uso real, y de nuevo en el seguimiento a 30 días (Fase 5, objetivo 2026-07-10), donde las hipótesis de impacto se actualizan con números medidos contra los baselines fijados en el onboarding. Si en el seguimiento el sistema demostró sostenerse, se evalúa abrir frentes nuevos (más profundidad en el plano personal, más automatización de la captura) como una etapa aparte con su propio alcance.
