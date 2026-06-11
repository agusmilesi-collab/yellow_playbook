# Análisis Yellow — Propuesta para Lisandro

**Objeto:** auditoría de la propuesta (documento) y diagnóstico del servicio bajo método Yellow.
**Material analizado:** `jtbd-lisandro.md`, `manual-sistema-lisandro.md`, `propuesta-lisandro.md` (v1), `propuesta-lisandro2.md` (v2), `propuesta-lisandro3.md` (v3).
**Marco:** Yellow Playbook v0.7 (cascada de 4 pilares, guía de estilo, plantilla de propuesta, checklist de calidad).
**Fecha:** 2026-05-22.

---

## Nota de registro

La guía de estilo (`style-guide.md`) pide voz neutra, autor invisible y tercera persona, y rige diagnósticos y auditorías. La propuesta tiene su propio SSOT (`proposal-template.md`, `03-process/02-proposal.md`), que prescribe segunda persona, primera persona del consultor y tono argentino directo, firmado. Por lo tanto, la voz en segunda persona de la propuesta cumple el método. Las reglas de estilo que atraviesan los dos registros, y que la propuesta incumple, son la E (em dashes) y la F (recurso de negación-afirmación).

---

# Parte I — Auditoría del documento

## Veredicto de entrada

Las tres versiones cuentan la misma historia con creciente fidelidad al método. La v3 es la única que merece enviarse: su esqueleto reproduce, casi línea por línea, la plantilla de propuesta del playbook. La evolución v1 a v3 es una convergencia hacia el SSOT.

## Lo que la propuesta hace bien

1. **Captura de valor corregida entre versiones.** La v1 vendía la commodity (template de Notion, asistente, onboarding). La v3 incorpora "La implementación de la metodología" y la nombra "el corazón de todo". Ese movimiento opera el meta-patrón del playbook bien: lo difícil de producir (el criterio de gestión) pasa a ser lo que se cobra, y el Notion queda como soporte.
2. **Encuadre de P1 explícito.** "El trabajo que hacés sigue siendo el mismo. Lo que cambia es cómo se ordena el equipo y cómo se muestra el resultado" es la formulación textual de P1.
3. **Apertura por devolución.** "Lo que escuché" abre con la situación del cliente y cita material real de la conversación. Trabaja el push.
4. **Diseño de adopción.** "Cómo se sostiene" (una sola fricción para el equipo, la reunión semanal como ritual) conecta con el principio 8 de Good Services.

## Donde rompe el estilo Yellow (transversal a todo registro)

**Regla E, em dashes.** Aparecen en las tres versiones, sobre todo como separador en viñetas y como paréntesis largo. El check `no-em-dash` es duro. Ejemplos v3: "Saber en 60 segundos cómo viene el trimestre — listo para...", "Frente al costo de seguir como estás —vivir apagando incendios...— se paga solo", "con la pantalla compartida — no en su casa un domingo".

**Regla F, negación-afirmación.** También pervasiva. Ejemplos v3: "El problema no es que estés desorganizado (...) El problema es que el sistema vive en tu cabeza", "No es la herramienta — es el criterio", "Reportar con números, no con sensaciones", "Salís de la sesión trabajando en el sistema, no con un manual para leer después".

### Reescrituras (matan E y F, conservan el tono de propuesta)

| Original (v3) | Reescritura afirmativa, sin em dash |
|---|---|
| "Saber en 60 segundos cómo viene el trimestre — listo para mostrárselo a tu jefe, sin reconstruirlo a último momento." | "Saber en 60 segundos cómo viene el trimestre, listo para mostrárselo a tu jefe sin reconstruirlo a último momento." |
| "No es la herramienta — es el criterio que hace que la herramienta sirva." | "El valor está en el criterio que hace funcionar la herramienta. Te instalo ese criterio: cómo se eligen los objetivos que importan, cómo se traducen en indicadores y cómo se arman y delegan las iniciativas." |
| "El problema no es que estés desorganizado. (...) El problema es que el sistema vive en tu cabeza, y eso no escala." | "Armaste más orden personal que la mayoría. El cuello de botella está en otro lado: el sistema vive en tu cabeza, y desde ahí no escala. Cuando toda la coordinación pasa por vos, unos días afuera frenan el área." |
| "Frente al costo de seguir como estás —vivir apagando incendios, llegar sin datos a las reuniones, no poder despegarte de la operación— se paga solo." | "Frente al costo de seguir como estás (vivir apagando incendios, llegar sin datos a las reuniones, depender de estar encima de la operación), se paga solo." |

**Hallazgo de playbook:** la regla F choca con las propias plantillas. La de diagnóstico (sección 6) prescribe "El problema no es que [síntoma]. El problema es que [causa raíz]", y la de propuesta (sección 2) prescribe "el problema no es [síntoma]. Es [causa raíz]". La v3 siguió la plantilla al pie y por eso incumplió la regla F. El origen está en el playbook. Candidato para `learnings-pending.md`.

## Fugas de captura de valor (lectura del value stick)

1. **Las notas de costo anclan la WTP hacia abajo.** Poner "Notion gratis" y "Claude ~USD 20/mes" al lado de "Inversión" invita al cliente a descomponer el precio en piezas baratas y a leer el servicio como "un template más un ChatGPT". Cadena causal: foregrounding de la commodity → comparación contra herramientas baratas → baja la WTP → erosiona el precio sostenible. Mover esas notas a un anexo con peso visual menor.
2. **Precio en blanco contra un costo de no-tener enorme.** En `jtbd-lisandro.md` la WTP se construye con el costo de no tenerlo (promociones perdidas de USD 6.000 a 12.000 por año, margen perdido, riesgo de burn-out) y después se ancla en "USD 600 es una bicoca". El cuarto pilar advierte este síntoma: subir la WTP y dejar el precio quieto regala el valor creado al cliente. Salvedad: USD 600 se justifica como precio deliberado de Modelo A (entrada, primer caso, prueba social). Como precio real del servicio, deja casi todo el valor del lado del cliente.

---

# Parte II — Diagnóstico Yellow del servicio

Íconos: ✅ verificado, 🔵 hipótesis, ❓ gap. La discovery parece haber sido una conversación, suficiente para "Lo que escuché", pero el cuestionario estructurado de `jtbd-lisandro.md` no figura cerrado. Por eso casi todo el JTBD viaja como hipótesis.

## 1. Contexto

Lisandro, jefe de traders en una corredora de cereales, ascendido desde un rol operativo senior, con un equipo ampliado a cargo 🔵. Explora Notion y agentes de IA por cuenta propia ✅. Reporta a un jefe ✅.

## 3. Job-to-be-Done del cliente final

El cliente final cuyo job se mapea es Lisandro mismo, porque es a la vez comprador y usuario. Los traders son los usuarios finales del sistema, no del servicio que se vende.

**Job dominante (Job Story sintetizada)** 🔵:

> "Cuando me ascendieron a conducir el equipo y empecé a sentir que se me iba de las manos, quiero un sistema que ordene al equipo y muestre resultados hacia arriba, para poder que me vean como gestor y dejar de ser el cuello de botella de mi propia área."

**Los tres jobs canónicos:**

- Functional 🔵: pasar de operar a gestionar sin perder visibilidad del resultado.
- Emotional 🔵: tranquilidad mental, dejar de cargar todo en la cabeza, poder tomarse días sin que se frene el área.
- Social 🔵: ser visto como líder con el área bajo control (hacia el equipo) y con potencial de crecer (hacia el jefe).

Nota metodológica: el "Performance job" de `jtbd-lisandro.md` no es un cuarto job en la nomenclatura de Yellow. Es la capa de resultados medibles, que vive en la sección 8 (hipótesis de impacto). Yellow opera tres jobs.

**Contra qué compite (transcategorial)** ❓: la pregunta 5 de la Switch Interview no está respondida. Gap crítico, porque el eje de brecha del Value Map se alimenta de ahí. Candidatos a validar: statu quo (resolverlo en la cabeza, inertia fuerte), template gratis de YouTube, herramienta de OKR de estantería (Asana, ClickUp, Monday), curso de OKR, sumar un asistente, pedirle a la IA que ya usa.

## 4. Value Map

| # | Value driver | Importancia | Brecha vs alternativa | Estado |
|---|---|---|---|---|
| 1 | Ser visto como gestor (equipo y jefe) | Alta 🔵 | ❓ depende de pregunta 5 | core |
| 2 | Tranquilidad mental / poder despegarse | Alta 🔵 | ❓ | core |
| 3 | Reportar al jefe con datos en segundos | Alta 🔵 | grande 🔵 (hoy lo arma de memoria) | visible hacia arriba |
| 4 | Delegar iniciativas enteras con confianza | Alta 🔵 | media 🔵 | core |
| 5 | Reducir consultas del equipo | Media-alta 🔵 | ❓ (depende de adopción del equipo) | depende de terceros |
| 6 | Controlar sin asfixiar (control pasivo) | Media 🔵 | media 🔵 | core |

**Lectura del stick** 🔵: el valor creado vive en el criterio (el método de gestión, que mueve los drivers 1, 2 y 4). La commodity es el template más el asistente. La v3 ya cobra el criterio. La fuga restante está en cómo el precio y las notas de costo comunican ese valor.

## Service Design y Good Services

1. **El touchpoint que define la calidad es la reunión semanal.** El manual lo dice: sin la reunión, no hay sistema. Por P10, el momento más frágil es la adopción del ritual por el equipo en las primeras semanas.
2. **El equipo no está en la sala (P5 y P9).** El éxito depende de que los traders marquen estado y entren a la reunión, pero la discovery y el onboarding son 1:1 con Lisandro. Intervención correcta: observación corta con uno o dos traders en discovery, y que la primera reunión semanal la conduzca Lisandro con Agustín mirando.
3. **El blueprint mapea a Lisandro, no al trader.** Falta el journey del usuario final: cómo recibe una iniciativa delegada, cómo marca estado, cómo vive la reunión.

## 11. Gaps de información (❓)

- Un episodio concreto de pérdida de control, con día y hora.
- Número y tipo de consultas por día (baseline del KR).
- Qué reporta al jefe, cada cuánto y cuánto le cuesta hoy.
- Dos o tres objetivos reales del trimestre, en sus palabras.
- Nivel de carga de datos del equipo (alto o bajo). Crítico: la premisa de diseño "una sola fricción" se apoya en esto.
- Una herramienta abandonada antes y por qué.
- La pregunta 5 (alternativa real), que ordena el Value Map.

---

# Parte III — La pregunta estratégica de fondo

¿Esto es Yellow? La oferta de Yellow es rediseñar cómo un profesional independiente entrega su servicio a sus clientes. Su ICP es el profesional independiente. Su lista de "lo que NO vendemos" incluye "coaching personal o consultoría general de negocio".

El servicio para Lisandro es un sistema de gestión productizado, vendido a un empleado con mando dentro de una empresa, para uso personal y de su equipo. Toma prestada la forma de Yellow (la plantilla, la etiqueta "Service Redesign", el meta-patrón) con un job, un ICP y un objeto de rediseño distintos. Está en el borde de la oferta de Yellow, o afuera.

Puede ser una línea de producto nueva y buena. Conviene decidirlo a propósito: reencuadrarlo para que entre en la definición de Yellow, o reconocerlo como un producto aparte con su propio ICP y posicionamiento. Venderlo bajo la marca Yellow sin esa decisión mezcla dos ofertas y diluye las dos.
