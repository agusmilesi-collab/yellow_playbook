# Modelo de datos de Notion: sistema de Lisandro

**Objeto:** especificación de las bases de datos de Notion que sostienen el sistema (captura única, OKR, delegación, evidencia, planos personal y laboral unificados).
**Fecha:** 2026-06-01
**Deriva de:** `manual-sistema-lisandro.md` (modelo conceptual OKR), `diagnostico-lisandro-2026-06-01.md` (INT-1 a INT-7), `propuesta-lisandro4.md` (alcance y plan gratuito).

---

## Decisiones de arquitectura

Cinco decisiones ordenan todo el modelo. Cada una responde a algo ya definido en el caso.

1. **Un solo conjunto de bases de datos para lo personal y lo laboral, separado por una propiedad `Ámbito` y vistas distintas.** Es la decisión que tomaste en la conversación ("va a ser la misma base de datos con vistas distintas"). Evita duplicar el sistema y deja el plano personal como un filtro, no como otro proyecto técnico.

2. **La jerarquía OKR se modela como cuatro bases enlazadas, no como una sola tabla de tareas.** Objetivo, Key Result, Iniciativa y Tarea son entidades distintas con relaciones uno a muchos. Es lo que separa este sistema de una lista de tareas y lo que hace que la Iniciativa sea la unidad que se delega (manual, Parte 1).

3. **La Bandeja de entrada es el único punto de captura.** Todo lo que llega por cualquier canal entra primero acá como material crudo, y desde acá se convierte en Tarea o Iniciativa. Resuelve la fricción central del diagnóstico (INT-1): que no haya un lugar confiable que recoja lo disperso.

4. **La capa de evidencia vive en la Bandeja, no en una base aparte.** Cada item guarda quién lo pidió y por qué canal, y queda enlazado a lo que se convirtió. Así el rastro de "quién pidió qué y en qué quedó" (INT-7) sale solo, sin trabajo extra.

5. **El equipo toca una sola propiedad: el `Estado` de su Tarea.** Es la regla madre del manual ("una sola fricción"). El modelo se diseña para que los traders no creen registros ni llenen campos, solo muevan un estado, y para que eso pase en vivo en la reunión semanal.

---

## Las bases de datos

Seis bases. Las cuatro del medio son la cascada OKR.

### 1. Bandeja de entrada

Punto único de captura. Material crudo antes de clasificar. Es la base que más usa Lisandro en el día a día.

| Propiedad | Tipo | Opciones / detalle | Para qué |
|---|---|---|---|
| Título | Title | texto libre | qué entró, en una línea |
| Canal de origen | Select | WhatsApp, Mail, Reunión, Pasillo, Teléfono, Propio | de dónde vino (captura + evidencia) |
| Quién lo pidió | Text (o Relation a Equipo) | vacío = lo generó Lisandro | base de la capa de evidencia |
| Ámbito | Select | Personal, Laboral | separa los dos planos |
| Estado de triage | Select | Sin clasificar, Convertido, Descartado | cola de trabajo de clasificación |
| Fecha de captura | Created time | automática | cuándo entró |
| Se convirtió en | Relation | a Iniciativas y/o Tareas | enlaza el pedido con lo que produjo |
| Notas | Text | texto libre | contexto del pedido |

El tomado automático de notas de reunión (que ya usás) alimenta esta base: lo que sale de una reunión entra acá con Canal = Reunión.

### 2. Objetivos

El para qué del período. Cualitativo, sin número. Dos o tres por período (manual, Parte 1).

| Propiedad | Tipo | Opciones / detalle | Para qué |
|---|---|---|---|
| Nombre | Title | frase de estado deseado | el objetivo |
| Ámbito | Select | Personal, Laboral | separa planos |
| Período | Select (o Date) | ej. Q3 2026, o rango de fechas | a qué trimestre pertenece |
| Bajado por | Text (o Relation a Equipo) | ej. Mario Draga, o vacío | de dónde viene el objetivo |
| Estado | Select | En curso, Logrado, No logrado, Pausado | dónde está |
| Avance | Rollup | promedio del % de sus KR | progreso agregado |
| Descripción | Text | el para qué en palabras | que no se rompa el modelo |

### 3. Key Results (KR)

El cómo sé que lo logré. Acá sí hay número. Dos a cuatro por objetivo.

| Propiedad | Tipo | Opciones / detalle | Para qué |
|---|---|---|---|
| Nombre | Title | resultado medible | el KR |
| Objetivo | Relation | a Objetivos | a qué objetivo sirve |
| Baseline | Number | valor de partida | desde dónde se mide |
| Meta | Number | valor objetivo | a dónde se quiere llegar |
| Valor actual | Number | se actualiza en el tiempo | dónde va hoy |
| % avance | Formula | (actual - baseline) / (meta - baseline) | progreso normalizado |
| Unidad | Text | %, consultas/semana, USD, etc. | qué mide el número |
| Ámbito | Rollup | desde Objetivo | hereda el plano |
| Estado | Select | En línea, Trabado, Cumplido | lectura rápida para el reporte |

Fórmula de `% avance` (maneja el divisor cero):

```
if(prop("Meta") - prop("Baseline") == 0, 0,
   (prop("Valor actual") - prop("Baseline")) / (prop("Meta") - prop("Baseline")))
```

### 4. Iniciativas

La apuesta para mover un KR. Es la unidad que se delega (manual, Parte 1 y 4). Dos o tres por KR.

| Propiedad | Tipo | Opciones / detalle | Para qué |
|---|---|---|---|
| Nombre | Title | la apuesta | la iniciativa |
| KR | Relation | a Key Results | qué número busca mover |
| Dueño | Relation | a Equipo | quién se hace cargo (delegación) |
| Hipótesis | Text | "creo que si hacemos X, el número se mueve" | que no se confunda con certeza |
| Estado | Select | Propuesta, En curso, Terminada, Matada | ciclo de vida de la apuesta |
| Esfuerzo | Select | Bajo, Medio, Alto | estimar antes de calendarizar |
| Fecha objetivo | Date | compromiso, no deseo | cuándo se espera el resultado |
| Avance | Rollup | % de Tareas en estado Hecho | progreso real |
| Ámbito | Rollup | desde KR | hereda el plano |
| Origen | Relation | a Bandeja de entrada | de qué pedido salió (evidencia) |

### 5. Tareas

El paso concreto de una sentada. Es donde interactúa el equipo, y la única base donde tocan algo.

| Propiedad | Tipo | Opciones / detalle | Para qué |
|---|---|---|---|
| Nombre | Title | empieza con verbo | la tarea (ver reglas del manual) |
| Iniciativa | Relation | a Iniciativas | a qué apuesta pertenece |
| Responsable | Relation | a Equipo | quién la hace |
| Estado | Select | Por hacer, Haciendo, Hecho | **la única propiedad que mueve el equipo** |
| Fecha | Date | compromiso | cuándo se entrega |
| Esfuerzo | Select | 2 h, Medio día, 1 día, 2+ días | estimar en esfuerzo (manual, Parte 2) |
| Ámbito | Rollup | desde Iniciativa | hereda el plano |
| Activa | Formula | `prop("Estado") != "Hecho"` | base del cálculo de carga del equipo |
| Origen | Relation | a Bandeja de entrada | de qué pedido salió (opcional) |

### 6. Equipo

Las personas. Unifica a los traders del trabajo y a los participantes del plano personal (hermano, padres), separados por `Ámbito`. Carga la asignación por fortalezas (INT-3).

| Propiedad | Tipo | Opciones / detalle | Para qué |
|---|---|---|---|
| Nombre | Title | la persona | quién es |
| Rol | Text | ej. trader senior, hermano, padre | qué hace |
| Ámbito | Select | Personal, Laboral | de qué plano es |
| Fortalezas | Multi-select | etiquetas de fortaleza | que la skill sugiera a quién delegar |
| Tareas asignadas | Relation | a Tareas (inversa de Responsable) | qué tiene encima |
| Carga actual | Rollup | suma de `Activa` de sus Tareas | quién está cargado, quién libre |

---

## Mapa de relaciones

```
Bandeja de entrada ──(se convirtió en)──> Iniciativas / Tareas
Objetivo 1 ────< N Key Result
Key Result 1 ──< N Iniciativa
Iniciativa 1 ─< N Tarea
Iniciativa N >── 1 Equipo (Dueño)
Tarea N ──────> 1 Equipo (Responsable)
```

El `Ámbito` se setea una sola vez en Objetivo (y en Bandeja/Equipo) y baja por rollup a KR, Iniciativa y Tarea. Así un mismo árbol OKR es todo Personal o todo Laboral, y las vistas filtran por esa propiedad sin que haya que marcarla en cada nivel.

---

## Las vistas

Las vistas son lo que convierte una sola base en "arriba/abajo, personal/laboral" (INT-4). Cada una es un filtro sobre las bases de arriba, sin duplicar datos.

### Hacia arriba (para el jefe)

- **Tablero del trimestre.** Sobre Objetivos, filtro `Ámbito = Laboral`, agrupado por Período. Muestra cada objetivo con su `Avance` y los KR con su `% avance` y `Estado`. Esta es la vista que abrís frente a Mario: el reporte es el sistema, no se arma nada aparte (manual, Parte 4).

### Hacia abajo (para el equipo)

- **Tablero por persona.** Sobre Tareas, filtro `Ámbito = Laboral`, agrupado por `Responsable`, con `Estado` como tablero kanban. Es la vista que se proyecta en la reunión semanal: se va trader por trader moviendo estados en vivo (manual, Parte 3).
- **Carga del equipo.** Sobre Equipo, filtro `Ámbito = Laboral`, ordenado por `Carga actual`. El vistazo diario de 30 segundos: quién está tapado, quién libre.

### Para Lisandro

- **Mis tareas.** Sobre Tareas, filtro `Responsable = Lisandro`. Lo que tiene que hacer él.
- **Bandeja sin clasificar.** Sobre Bandeja de entrada, filtro `Estado de triage = Sin clasificar`. La cola de captura a procesar.

### Plano personal

- Las mismas vistas anteriores con `Ámbito = Personal`. El árbol OKR personal (con el hermano como par y los padres como nivel superior, según lo que describiste) usa exactamente la misma estructura.

### Calendarios

- **Calendario laboral.** Vista calendario de Tareas, filtro `Ámbito = Laboral`, por `Fecha`.
- **Calendario personal.** Vista calendario de Tareas, filtro `Ámbito = Personal`, por `Fecha`.

Dos calendarios sobre la misma base de Tareas evitan la superposición que mencionaste y mantienen los planos separados a la vista, juntos en el sistema.

---

## El flujo de un dato (cómo se mueve)

1. Entra un pedido por cualquier canal. Lisandro lo vuelca en la **Bandeja de entrada** con su canal, quién lo pidió y el ámbito. Esta es la única disciplina diaria.
2. En un momento de clasificación (o con ayuda de la skill de Claude), el item se convierte: si es un paso de una sentada, en **Tarea**; si es una apuesta con dueño, en **Iniciativa**. Queda el enlace `Origen` a la Bandeja, y el item de Bandeja pasa a `Convertido`.
3. La Iniciativa se asigna a un **dueño** del Equipo (la skill puede sugerirlo por `Fortalezas`) y se cuelga del **KR** que busca mover, que a su vez cuelga de un **Objetivo**.
4. El equipo, en la reunión semanal, mueve el `Estado` de sus **Tareas**. Eso actualiza por rollup el `Avance` de la Iniciativa, el `% avance` del KR y el `Avance` del Objetivo.
5. El reporte hacia arriba ya está armado: es la vista del trimestre, viva.

---

## Restricciones del modelo

- **Plan gratuito de Notion.** Relaciones, rollups y fórmulas funcionan en el plan gratuito, y alcanza hasta 10 personas en el espacio. El modelo se diseña sin depender de funciones pagas. Los indicadores gráficos (charts) requieren plan plus y quedan como mejora opcional, no como base.
- **Una sola fricción para el equipo.** Ninguna vista ni automatización debe pedirle al equipo más que mover el `Estado` de su Tarea. Si una funcionalidad agrega un campo que el equipo tiene que llenar, se descarta o la hace la skill.
- **Confidencialidad.** Todo vive en la cuenta personal de Lisandro. La Bandeja se carga a mano o desde el tomado de notas, sin conexión al mail corporativo ni a sistemas del banco.

---

## Qué arma la skill de Claude y qué carga Lisandro

- **La skill de Claude** baja un pedido difuso a Objetivo + KR + Iniciativas, sugiere dueño por fortalezas, desglosa Iniciativas en Tareas con fecha y esfuerzo, y al aprobarse las crea en las bases con sus relaciones ya armadas. También procesa la Bandeja (clasifica Sin clasificar → Tarea o Iniciativa).
- **Lisandro** carga la Bandeja en el día a día (la disciplina mínima), aprueba lo que la skill propone, y conduce la reunión semanal donde el equipo mueve estados.

Esta división mantiene en cero el trabajo de modelado para Lisandro: el criterio y la estructura los pone el sistema, él pone el contenido crudo y la decisión.
