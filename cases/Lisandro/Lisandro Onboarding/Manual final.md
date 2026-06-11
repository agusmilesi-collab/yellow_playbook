# 📖 Manual del sistema — Lisandro (v1.0)

Este manual te entrega una **metodología**, no una herramienta. La diferencia importa: las herramientas cambian (hoy es Notion + Claude, mañana puede ser otra cosa, en cinco años quién sabe), pero la metodología — cómo pensás los objetivos, cómo los bajás al equipo, cómo hacés que el sistema no se muera a las tres semanas — es lo que se queda con vos.

Automatizar sin metodología es repetir el caos más rápido. Por eso el primer objetivo de todo esto **no** es que uses Notion o Claude: es que adoptes una forma de gestionar, y que recién entonces la apoyes en la tecnología que tenés a mano. Hoy esa tecnología es Notion como sistema vivo y Claude como copiloto. Mañana puede ser un asistente de voz desde un smartwatch. La metodología sigue siendo la misma.

Está dividido en nueve partes, más un capítulo introductorio que conviene leer primero:

- **El método** — los tres principios que están debajo de Notion, OKR y la weekly. La columna conceptual del sistema.

1. **Setup técnico** — qué tenés que activar antes de empezar (Claude Pro, conexión Notion, skills).
2. **La metodología** — qué es OKR y los cuatro conceptos centrales.
3. **Cómo estimar fechas** — para que las fechas signifiquen algo.
4. **Tu Notion: cómo está armado** — la arquitectura, los ámbitos, las DBs, cómo navegar.
5. **Cómo opera el sistema** — el ritual semanal (la weekly), cómo se gestiona el incumplimiento, y cómo evoluciona el ritual con el tiempo.
6. **La estrategia** — cómo pensás los OKRs cuando tu jefe te baja objetivos.
7. **Las skills + cómo trabajar con Claude** — qué son las skills, cómo se usa cada una, y buenas prácticas con IA.
8. **Las fases de adopción** — el camino de ~60 días: externalización, seguimiento, norte estratégico.
9. **Qué hacer si algo se rompe** — diagnóstico y cuándo escalar.

Una advertencia importante antes de seguir: **el sistema arranca en modo "hábito antes que ambición"**. Las primeras semanas no buscamos objetivos comerciales ambiciosos: buscamos que vos uses el sistema y que el equipo adopte el hábito de reunirse cada semana. El resto se construye desde ahí.

---

# El método

Estás adoptando un **método de gestión visible**. Tiene tres principios. Si los tres se instalan, el resto fluye solo. Las herramientas (Notion, OKR, la weekly) son una forma específica de implementarlo — pero podrías llegar al mismo resultado con un Trello bien usado o con un cuaderno físico con disciplina.

## Principio 1 — Externalización

Lo importante no vive en tu cabeza. Vive en un lugar que podés mirar. Tu cabeza es para pensar — no para almacenar.

## Principio 2 — Seguimiento

Sabés qué está hecho, qué está en curso, qué quedó trabado. Y hacés algo con eso periódicamente — solo y con el equipo.

## Principio 3 — Norte

Cada acción importante sabe a qué pertenece. No flota suelta. Una tarea con norte te dice *para qué* la estás haciendo: a qué proyecto, iniciativa u objetivo de negocio.

## Por qué importa entender los tres

Notion, OKR, la weekly, los KRs son **una forma específica** de implementar estos 3 principios. Trello bien usado podría hacerlo — un cuaderno físico con disciplina también. **Si adoptás los principios, vas a poder migrar a cualquier otra herramienta y seguir gestionando bien. Si no los adoptás, ninguna herramienta te salva.**

Por eso lo importante no es que aprendas Notion. Es que adoptes el método. Notion es el vehículo.

## Cómo se construye sobre el método

Los tres principios se instalan secuencialmente. No se saltean — el segundo asume el primero instalado, el tercero asume los dos anteriores:

- **Fase 1 — Externalización.** Notion como sistema de tareas. Todo lo que aparezca va ahí, no a la cabeza. Esto se instala antes que cualquier otra cosa.
- **Fase 2 — Seguimiento.** La weekly del equipo como ritual de revisión y delegación. Asume que el sistema personal ya está andando solo.
- **Fase 3 — Norte estratégico.** El objetivo formal del trimestre con sus indicadores (KRs) comerciales. Asume que la weekly ya es ritual fijo.

El detalle operativo de cada fase está en la **Parte 7**.

## Cómo se mide el éxito

El éxito de adopción no se mide en "usa Notion" ni "ejecuta weeklies". Se mide en términos de los 3 principios:

- ¿Está externalizando? (¿deja de tener cosas importantes solo en la cabeza?)
- ¿Hay seguimiento? (¿revisa, ajusta, decide en momentos definidos en lugar de reaccionar?)
- ¿Sus acciones tienen norte? (¿sabe por qué hace lo que hace?)

Si esos 3 indicadores se mueven, ganaste — independientemente de qué tan ortodoxo sea el uso del sistema. Si no se mueven, perdiste — aunque ejecutes todas las weeklies del calendario.

---

# Parte 0 — Setup técnico

Antes de poder usar el sistema, hay que dejar listo tres cosas. Esto lo hacemos en la sesión de onboarding, pero conviene que llegues con los pre-requisitos cumplidos.

## Pre-requisitos

### Cuenta de Claude Pro activa (~20 USD/mes)

Se contrata en [claude.ai](https://claude.ai). Es lo que te permite:

- Usar las skills personalizadas que armamos.
- Conectar Claude con tu Notion (vía MCP).
- Tener una cantidad de tokens razonable para trabajar (la cuenta gratis se agota rápido).

Activala uno o dos días antes del onboarding y **no la uses para nada hasta la sesión**. Si llegás con los tokens del mes ya gastados, no podemos hacer las pruebas en vivo.

### Modelo a usar

Dentro de la cuenta Pro tenés acceso a varios modelos (Opus, Sonnet, Haiku). Más sobre esto en la Parte 6 — por ahora, dejá el default que viene seleccionado.

## Conectar Claude con tu Notion

Claude usa un protocolo llamado **MCP (Model Context Protocol)** para conectarse a servicios externos como Notion. La configuración se hace una vez y queda persistente.

**Pasos** (los hacemos juntos en el onboarding):

1. En claude.ai, ir a Settings → Connectors.
2. Buscar "Notion" en la lista y hacer click en Connect.
3. Se abre una ventana de Notion. Aceptás los permisos para que Claude pueda leer y escribir en tu workspace.
4. Hacemos una prueba en vivo: le pedís a Claude "abrí mi Notion y mostrame los Objetivos" y debería traer los datos.

Si en algún momento la conexión se cae (te da error o no encuentra el workspace), repetí los pasos 1 y 2.

## Instalar las skills

Las **skills** son módulos de conocimiento que Claude carga automáticamente cuando detecta que se aplican a lo que estás pidiendo. Te vamos a dejar tres:

- `gestion-diaria`
- `okr-head-of-grain-trading`
- `notion-construction`

La instalación se hace copiando el contenido de cada skill al directorio de skills de tu cuenta de Claude. Los pasos exactos los hacemos en la sesión de onboarding. Para que tengas idea de qué hace cada una y cómo se usa, ver Parte 6.

## Configurar el Project en Claude.ai

Claude.ai permite agrupar conversaciones en **Projects**. Cada Project tiene instrucciones propias que Claude tiene siempre en contexto cuando entrás. Para vos vamos a crear un Project llamado "Macroagro – Head of Trading" con un bloque de instrucciones que le dice a Claude quién sos, cómo es tu sistema, cuáles son tus skills, y cómo te gusta que te hablen.

Fuera del Project, Claude queda neutro: si le preguntás una receta de cocina o algo personal, no arrastra el contexto de Macroagro.

---

# Parte 1 — La metodología

Esta metodología se llama **OKR** (Objectives and Key Results). Es la forma de gestionar que usan empresas como Google, Intel o LinkedIn — no por moda, sino porque resuelve un problema que casi todos los managers tienen: cómo bajar una idea estratégica difusa a un equipo, sin que se pierda en el camino ni se vuelva burocracia.

La idea central es simple: separás **qué querés lograr** (objetivo) de **cómo sabés que lo lograste** (key results) y de **qué vas a hacer para moverlo** (iniciativas). Sin esa separación, todo se mezcla y nadie sabe si está siendo efectivo.

No te tenés que volver experto en OKR para usar el sistema. **La skill de Claude (`okr-head-of-grain-trading`) te asiste para escribir y refinar los OKRs**, así no arrancás desde una hoja en blanco. Lo que sí tenés que entender son los cuatro conceptos de abajo. Si los manejás, manejás todo el sistema.

## Objetivo

Es el **para qué** del trimestre. Una frase que describe un estado deseado, no una tarea. No tiene número: es cualitativo, inspirador, corto.

> *"Consolidar al equipo ampliado para que opere con autonomía."*

Un buen objetivo se nota porque, si lo lográs, el trimestre fue un éxito aunque no hayas hecho nada más. Tenés 2 o 3 por trimestre, no más. Si tenés ocho objetivos, no tenés ninguno.

## Key Result (KR)

Es el **cómo sé que lo logré**. Acá sí hay número. El KR traduce el objetivo difuso en algo medible: un valor de partida (baseline), una meta, y un valor actual que se mueve con el tiempo.

> Objetivo: consolidar al equipo. → KR: *"reducir las consultas operativas de 15 a 3 por semana."*

La regla de oro del KR: **es un resultado, no una actividad.** "Hacer reuniones de capacitación" no es un KR (es una actividad). "Que el equipo cierre el 80% de las operaciones sin consultarme" sí lo es (es un resultado). Si lo podés tildar como "hecho", es tarea. Si lo medís con un número que sube o baja, es KR.

Tenés 2 a 4 KRs por objetivo.

## Iniciativa

Es la **apuesta** para mover el KR. Acá está lo que diferencia este sistema de una lista de tareas: la iniciativa es un paquete de trabajo con nombre propio, dueño y forma de medir avance. Es la unidad que delegás.

> KR: reducir consultas. → Iniciativa: *"Documentar el proceso de cierre a fijar precio en un instructivo."*

La iniciativa es una **hipótesis**: "creo que si hacemos esto, el número se va a mover". Puede salir bien o mal. Si la terminás y el KR no se movió, la apuesta era mala — y eso es información valiosa, no un fracaso.

Cuando le decís a un trader "hacete cargo de esto", le estás delegando una **iniciativa**, no una tarea suelta. Eso es lo que te saca del micromanagement: delegás el qué y el para qué, no el paso a paso.

## Tarea

Es el **paso concreto** dentro de una iniciativa. Tiene responsable, fecha y un estado (por hacer / haciendo / hecho). Es lo más granular del sistema.

> Iniciativa: documentar el proceso. → Tarea: *"Entrevistar a 2 traders senior sobre cómo cierran hoy."*

### Cómo se describe una buena tarea

Una tarea mal escrita es la causa número uno de que un sistema muera. "Ver tema forecast" no es una tarea — nadie sabe cuándo está hecha. Una buena tarea cumple tres cosas:

- **Empieza con un verbo de acción.** Entrevistar, redactar, enviar, revisar, definir. No "tema X" ni "seguimiento Y".
- **Tiene un final reconocible.** Tenés que poder saber, sin preguntar, si está hecha o no. "Redactar borrador del instructivo" tiene final (existe el borrador o no existe). "Avanzar con el instructivo" no lo tiene.
- **Está acotada en tiempo.** Una tarea no debería llevar más de medio día o un día de trabajo concentrado. Esto es flexible — no es la regla rígida de "una sentada" (sería absurdo descomponer al nivel de "abrir Notion" o "sentarme en la silla"). El test es: si llevás tres semanas trabajando en algo, no es una tarea — es una iniciativa disfrazada. Partila en pasos chequeables.

| Mal | Bien |
|---|---|
| Ver tema cartera | Exportar el listado de empresas activas del sistema |
| Forecast | Cargar el forecast de mayo con cada trader |
| Hablar con el equipo | Comunicar los nuevos límites de autorización en la reunión del lunes |

---

# Parte 2 — Cómo estimar fechas

Las fechas son el otro gran motivo por el que los sistemas mueren: si las fechas son mentira, nadie las respeta, y si nadie las respeta, el sistema no sirve para nada. Cuatro reglas para que las fechas signifiquen algo.

## 1. La fecha es un compromiso, no un deseo

La fecha no es "cuándo me gustaría que esté". Es "cuándo me comprometo a que esté". Esa diferencia es todo. Una fecha puesta con optimismo es una fecha que vas a incumplir, y cada incumplimiento le enseña al equipo que las fechas son decorativas.

## 2. Estimá en esfuerzo, después ubicá en el calendario

Son dos preguntas distintas y la gente las mezcla:

- **¿Cuánto esfuerzo lleva?** (2 horas, medio día, dos días de trabajo concentrado)
- **¿Cuándo entra en la semana?** (depende de todo lo demás que esa persona tiene)

Primero estimá el esfuerzo puro. Después ubicalo en el calendario contemplando que esa persona tiene otras cosas. Una tarea de 2 horas de esfuerzo puede tener fecha de entrega a 5 días si la persona está ocupada — y está bien.

## 3. Usá la regla de "la tarea más una"

La gente subestima sistemáticamente cuánto tarda algo. No por mentir: por optimismo natural. La contramedida simple: cuando alguien estime, anotá esa estimación y agregale un margen. Si dice "lo tengo el miércoles", poné el jueves. No se lo digas como desconfianza — es buffer para imprevistos, que siempre aparecen.

## 4. Pocas fechas, pero reales

No le pongas fecha a todo. Ponéle fecha a lo que tiene que pasar esta semana o la próxima. Lo que está más lejos, dejalo sin fecha o con fecha tentativa. Un calendario lleno de fechas pasadas en rojo es un calendario que la gente deja de mirar. Mejor pocas fechas que se cumplen que muchas que se incumplen.

> **Regla práctica:** si una fecha ya pasó y la tarea no está hecha, no la dejes en rojo eternamente. En la reunión semanal se reprograma o se cierra. Una fecha vencida sin gestionar es ruido que entrena al equipo a ignorar el sistema.

---

# Parte 3 — Tu Notion: cómo está armado

Esta parte explica la arquitectura física del sistema. El diseño está pensado para que en el futuro puedas compartir parte del sistema con tu equipo sin exponer lo personal. Si entendés cómo está armado, vas a poder pedirle a Claude que lo modifique sin romperlo.

## La home y la navegación

La home se llama **🦁 Lisandro Ruidia** y tiene tres puertas de entrada:

- **🏢 Empresa** — todo lo laboral.
- **🌱 Personal** — todo lo personal (familia, salud, lo que sea).
- **Databases (No borrar)** — donde viven las DBs reales. No tocar a mano.

Además, la home tiene una sección **📌 Notas rápidas** (para anotar lo que sea en 5 segundos) y una vista rápida de la **Bandeja de entrada**.

## Los dos ámbitos: Empresa y Personal

Esto es lo más importante de la arquitectura: **los dos ámbitos están físicamente separados**.

- En el lado **Empresa** viven: Equipo, Objetivos, KRs, Iniciativas y Tareas Empresa.
- En el lado **Personal** viven: Proyectos Personal y Tareas Personal.
- La **Bandeja de entrada** es compartida (no es ni de Empresa ni de Personal: es donde tirás cualquier cosa que te aparece y después clasificás).

¿Por qué importa esto? Porque cuando llegue el momento (más adelante, después del onboarding) en que quieras compartir parte del sistema con tu equipo, vas a compartir solo la página **Empresa**. El equipo no va a tener forma de ver Tareas Personal ni Proyectos Personal porque son databases distintas.

## Las DBs viven en "Databases (No borrar)"

Las databases reales están centralizadas en la página **Databases (No borrar)**. Las páginas Empresa y Personal son **vistas vinculadas** (linked views) con filtros — son ventanas hacia las DBs reales.

Esto significa:

- Si querés modificar la estructura de una DB (agregar una columna, cambiar un tipo), se hace en Databases (No borrar).
- Si querés agregar una tarea, lo hacés desde la vista que más te convenga — la tarea se guarda en la DB real.
- **No borres la página "Databases (No borrar)"**, como dice el nombre.

## Cómo se relacionan las DBs

La cadena de relaciones del lado Empresa:

```
🎯 Objetivo
  └── 📊 KRs (varios por objetivo)
        └── 🚀 Iniciativas (varias por KR)
              └── ✅ Tareas Empresa (varias por iniciativa)
```

Del lado Personal:

```
📂 Proyecto Personal
  └── ✅ Tareas Personal
```

La **Bandeja de entrada** queda fuera de esa estructura — son ítems sueltos hasta que decidís dónde van.

Un detalle clave: el campo "Responsable" en Tareas Empresa apunta a la DB Equipo. Por eso cuando armás una tarea, podés elegir a cualquier miembro de tu equipo y la tarea queda asociada a su perfil. La DB Equipo se completa en el onboarding con los nombres reales y un par de líneas sobre el perfil de cada uno (eso le sirve a Claude para asignar dueños de iniciativas según fortalezas).

## Las vistas operativas

En la página Empresa tenés cuatro bloques (linked views):

- **Mis tareas en la empresa** — solo las tuyas, las que vos tenés que hacer.
- **Objetivos** — los 1-2 objetivos del trimestre.
- **Iniciativas** — todas las iniciativas activas, agrupadas por KR.
- **Tareas del equipo** — todas las tareas del equipo (no solo las tuyas), para ver quién está cargado y quién no.

En Personal tenés vistas equivalentes para Proyectos Personal y Tareas Personal.

## Cómo actualizar estados

La única acción que vas a hacer todos los días es **cambiar el estado de una tarea**. Las opciones son:

- **Not started** (Sin empezar) — cargada pero no arrancada.
- **In progress** (En curso) — la estás haciendo o está arrancada.
- **Done** (Listo) — terminada.

La forma más rápida: abrís el Notion en tu computadora, vas a la vista "Mis tareas en la empresa", y arrastrás las tareas entre columnas si está en vista Kanban, o cambiás el dropdown si está en vista tabla. **Dos clicks**. Si te lleva más, algo está mal.

### Buena práctica: una sola tarea "En curso" a la vez

Recomendación (flexible pero útil): mantené **una sola tarea en estado "En curso" en cada momento**. Cuando la terminás, la pasás a "Listo" y traés la siguiente desde "Sin empezar" (las encontrás por prioridad o fecha).

¿Por qué? Cuando tenés cinco cosas "En curso" en simultáneo, ninguna avanza realmente — el contexto se rompe entre una y otra y perdés tiempo en switcheo. Una sola "En curso" te obliga a terminar antes de empezar lo siguiente. La regla es flexible (a veces es razonable tener dos en paralelo si una está bloqueada esperando a alguien), pero como default conviene esta disciplina.

---

# Parte 4 — Cómo opera el sistema (operar para abajo)

Acá está el problema real: **nadie se toma el trabajo de actualizar tareas.** Cuesta que la gente marque "hecho", cuesta que entren a Notion, hay fricción. Si no resolvés esto, el sistema más lindo del mundo está muerto en tres semanas. La solución no es disciplina. Es diseño.

## La regla madre: una sola fricción

El equipo solo tiene que cambiar **una cosa**: el estado de su tarea (por hacer → haciendo → hecho). Nada más. No tienen que crear tareas, no tienen que escribir reportes, no tienen que llenar campos. Una sola acción. Cuantas más cosas les pidas, menos van a hacer.

## El ritual semanal (la weekly)

La weekly se introduce a partir de **Fase 2 del método** (ver Parte 7). Es el ritual que mantiene el sistema vivo: sin la weekly, no hay seguimiento — y sin seguimiento, todo el sistema se vuelve decorativo en 3 semanas.

### Por qué necesitamos hacer una weekly

Antes de implementarla, conviene que tengas claro vos mismo el "para qué" — porque si vos no lo tenés claro, el equipo lo va a notar y la weekly se va a sentir como una reunión más sin sentido.

La weekly sirve para tres cosas concretas:

1. **Alineación.** Que cada miembro del equipo sepa en qué están los demás y dónde está el foco de la semana. Evita el clásico "yo pensé que estabas con esto, vos pensaste que estaba con lo otro".
2. **Accountability suave.** Decir lo que vas a hacer adelante de tus compañeros te compromete más que decírselo solo al jefe. No es para presionar — es para que cada uno sienta que su trabajo es visible y valorado.
3. **Bloqueos a la vista.** Es el espacio donde algo trabado se pone arriba de la mesa y se resuelve, en vez de quedar acumulándose y explotar a fin de mes.

Lo que la weekly **no** es: no es una reunión de operativa diaria, no es para discutir el negocio en general, no es para informes de gestión. Si necesitás eso, hacelo en otro espacio.

### Cómo presentárselo al equipo (primera vez)

La primera vez que les anunciás la weekly, conviene tener listas tres cosas que vas a decir. Una propuesta concreta de palabras:

> *"A partir de la semana que viene vamos a tener una reunión corta de 15-20 minutos, una vez por semana, [día y hora]. La idea es alinear: ver qué hizo cada uno la semana anterior, qué va a hacer esta semana, y si hay algo trabado donde necesitan ayuda del equipo o mía. No es para informes ni para reportar — es para que sepamos en qué estamos y nos ayudemos a destrabar. Va a ser corta. Si en algún momento se vuelve burocracia o pierde sentido, lo ajustamos. Pero quiero arrancar con esto."*

Si alguien pregunta "¿por qué?", la respuesta corta: *"Para que no perdamos tiempo persiguiéndonos y para que las cosas trabadas no se acumulen."*

### Cómo se ejecuta cada weekly

Formato vuelta de mesa, 15-20 minutos máximo. **Sin pantalla compartida, sin Notion proyectado.**

A cada uno le pedís tres cosas:

1. **Qué cerraste la semana pasada** (no todo — una cosa importante, la que vale la pena que el equipo sepa).
2. **A qué te comprometés esta semana** (una cosa, la prioridad). No "voy a trabajar en X" sino un compromiso concreto y dirigido: *"para el viernes voy a tener entregado X"*. Una sola, no cinco.
3. **¿Necesitás algo del equipo o de mí para destrabar?** Acá podés responder "no, todo bien" o nombrar un bloqueo concreto.

El compromiso de cada uno tiene que ser **dirigido y verificable** — no "voy a avanzar con el listado de clientes" sino "voy a terminar el listado de clientes activos del segmento X para el jueves". Si alguien tira algo vago, repreguntale: *"¿Qué significa 'avanzar'? ¿Cómo sé el lunes que viene si está hecho?"* Eso lo aprenden rápido y mejora la calidad de los compromisos.

### Qué pasa después de la weekly

Acá viene la parte tuya, solo, después de la reunión. Necesitás convertir lo que se dijo en tareas cargadas en Notion (Tareas Empresa, con cada persona asignada). Dos formas:

**Forma manual (10-15 min):** abrís Notion, creás las tareas una por una, asignás responsable, asignás fecha tentativa, escribís el compromiso textual.

**Forma asistida con Claude (si grabás la reunión):** si la weekly queda grabada (Meet, Zoom y Teams tienen transcript automático, o usás cualquier app de transcript), le pasás el archivo a Claude y le pedís: *"Extrae los compromisos de cada persona y armá las tareas en mi Notion con responsable, deadline tentativo y descripción"*. Claude procesa el transcript, te muestra los compromisos identificados, vos confirmás, y se cargan en Tareas Empresa automáticamente. **Esta forma le saca a la weekly el costo de tarea manual** — que es lo que hace que los sistemas se mueran.

Cuando arranques, lo más probable es que hagas la manual hasta agarrarle la mano. A la 3ra o 4ta weekly, probá con el transcript. Cuanta menos tarea manual, más sostenible es el sistema.

## Cómo evoluciona la weekly con el tiempo

La weekly no es igual todo el tiempo. Evoluciona con el sistema y el equipo:

**Versión inicial (durante Fase 2 del método).** Weekly de 15-20 min, vuelta de mesa, **sin pantalla compartida, sin Notion proyectado**. El equipo todavía no conoce el sistema. Vos sos el único que carga las tareas en Notion después de la reunión.

**Versión intermedia (durante Fase 3 del método).** Misma weekly de 15-20 min, pero ahora vos tenés Notion abierto **en tu computadora** (en tu pantalla, no compartida). Lo usás para refrescar qué se comprometió cada uno la semana anterior y para actualizar los valores actuales de tus indicadores al cerrar. El equipo todavía no entra al sistema. Empieza a darse cuenta de que vos llevás todo registrado — eso solo ya genera más accountability.

**Versión madura (después del onboarding formal).** En algún momento — no es parte del onboarding, ocurre cuando el sistema ya está internalizado y vos lo decidís — podés evolucionar a una weekly con Notion **proyectado en pantalla** y el equipo entrando al sistema. La transición se ve así:

1. La weekly pasa de 15-20 min a 30-45 min.
2. Abrís el tablero del equipo en pantalla (la vista "Tareas del equipo").
3. **Vas trader por trader.** "¿Esto está? Dale, lo marco." Y lo marcás vos o lo marca la persona ahí mismo.
4. Lo que no se hizo, se conversa en 10 segundos: ¿sigue para esta semana, se reprograma, o se cae?
5. Lo nuevo que apareció, se carga ahí.

El truco psicológico: **la reunión hace el trabajo de actualización que nadie haría solo.** Nadie carga datos en su tiempo libre, pero todos actualizan su tarea cuando está proyectada y el resto del equipo está mirando. Lo convertís de "tarea individual aburrida" a "ritual grupal".

> Si te llevás una sola cosa de este manual: **el sistema no se mantiene con voluntad, se mantiene con la reunión semanal.** Sin la weekly, no hay sistema.

Una vez que pasaste a la versión madura y el equipo ya está actualizando tareas, podés dar un paso más: **pedirles que lleguen a la weekly con sus tareas ya actualizadas** (estados marcados, lo terminado en "Listo", lo nuevo cargado). Así la weekly deja de gastar minutos en actualizar tareas en vivo y se enfoca en lo que realmente importa: **bloqueos, decisiones, alineación estratégica**. Es la diferencia entre una weekly que actualiza un sistema y una weekly que mueve el negocio.

## Qué pasa si alguien no cumple una fecha

La respuesta corta: **no se reta, se hace visible.** Y la clave es que reaccionás al *patrón*, no al *episodio*.

### Tres niveles de respuesta

**Nivel 1 — Una fecha incumplida = ruido.** Pasa. Surgió algo, la operación del día se comió la tarea, lo que sea. No es nada. En la reunión se reprograma sin drama y se sigue. Si reaccionás fuerte a cada fecha incumplida, generás miedo y la gente empieza a mentirte sobre el estado real.

**Nivel 2 — Un patrón = señal.** Si la misma persona incumple seguido, o la misma tarea se reprograma tres veces, eso ya no es ruido: es información. Pero no es para retar — es para **entender**. Una conversación 1:1, corta, genuinamente curiosa: *"Veo que esto se viene reprogramando. ¿Qué está pasando? ¿Está mal estimado, te faltan recursos, hay algo que no depende de vos?"* El 90% de las veces el problema es real: la tarea estaba mal definida, dependía de otro, o la persona está tapada. Lo arreglás y listo.

**Nivel 3 — Un patrón sostenido = problema de fondo.** Si después de la conversación 1:1 el patrón sigue, ya no es un tema de gestión de tareas: es un tema de la persona (capacidad, compromiso, o que está en el rol equivocado). Eso se gestiona como lo que es — una conversación seria de desempeño — y ya excede al sistema. Pero ahora la tenés con datos, no con sensaciones: "estas cinco tareas, estas fechas, esta es la conversación que tuvimos". No es tu palabra contra la suya.

### Por qué esto te saca del rol de policía

El sistema hace visible el incumplimiento **por sí solo** — está ahí, en pantalla, en la reunión, para todos. Vos no tenés que ser el que señala. El dato ya está expuesto. Tu trabajo no es retar: es decidir en qué nivel estás (ruido, señal o problema) y actuar en consecuencia. Eso baja muchísimo la carga emocional: dejás de ser el que persigue y pasás a ser el que lee la información y decide.

Y el efecto secundario es cultural: cuando el equipo ve que el incumplimiento se conversa con calma en vez de castigarse, **te dicen la verdad sobre el estado real de las cosas.** Que es exactamente lo que necesitás para no volverte ciego.

---

# Parte 5 — La estrategia (operar para arriba)

Esto es lo más valioso del sistema y lo que no viene en ningún template. Cómo pensás como gestor: del objetivo que te baja tu jefe, hasta el control del trabajo del equipo.

## Cuando tu jefe te baja un objetivo

Tu jefe rara vez te va a dar un OKR limpio. Te va a dar algo difuso: *"necesito que el área venda más"*, *"hay que ordenar el equipo nuevo"*, *"tenemos que mejorar los márgenes"*. Tu trabajo es traducir eso en un objetivo con KRs. El proceso:

**1. Preguntá "¿cómo vas a saber vos que esto salió bien?"**
Esa pregunta, hecha a tu jefe, te da el KR. Si te dice "vender más", repreguntá: *"¿más volumen, más margen, más clientes nuevos? ¿Contra qué número lo comparás?"* Salí de esa charla con un número, no con un deseo. Si tu jefe no tiene el número claro, ayudalo a definirlo — y de paso quedás como alguien que piensa en resultados.

**2. Quedate con 2 o 3 objetivos, no más.**
Tu jefe te va a tirar diez cosas. Tu trabajo de gestor es elegir las 2-3 que de verdad mueven la aguja este trimestre y dejar el resto para después. Decir que no a lo que no es prioritario es la parte más difícil y más valiosa del rol. Un área con foco rinde más que un área que persigue diez cosas a la vez.

**3. Convertí cada objetivo en KRs medibles.**
Por cada objetivo, definí 2-4 resultados que, si se cumplen, significan que el objetivo se logró. Recordá: resultados, no actividades. El test: ¿lo puedo medir con un número que se mueve? Si no, no es KR.

## Cómo derivás iniciativas de un KR

Ahora tenés un KR con una meta. ¿Cómo lo movés? Acá viene el pensamiento de iniciativas.

**1. Preguntate: ¿qué tendría que ser verdad para que este número se mueva?**
KR: reducir consultas de 15 a 3 por semana. ¿Qué tendría que pasar? Que el equipo sepa decidir solo lo que hoy te consulta. ¿Y para eso? Que haya un instructivo claro, y que tengan autoridad para decidir. Ahí salieron dos iniciativas: "documentar el proceso" y "delegar autorización hasta cierto monto".

**2. Cada iniciativa es una hipótesis, no una certeza.**
Estás apostando a que esas iniciativas van a mover el número. Capaz acertás, capaz no. Por eso conviene tener 2-3 iniciativas por KR y no una sola: diversificás la apuesta. Si una no funciona, las otras pueden compensar.

**3. No te enamores de la iniciativa, enamorate del KR.**
La iniciativa es un medio. Si a mitad de trimestre ves que una iniciativa avanza pero el número no se mueve, **matala y probá otra cosa.** El error clásico es seguir ejecutando una iniciativa porque está en el plan, aunque ya sabés que no está funcionando. El KR manda, no la iniciativa.

## Cómo bajás las iniciativas al equipo

**1. Delegá la iniciativa entera, con su para qué.**
No le des a un trader una lista de tareas. Dale la iniciativa completa y el motivo: *"Necesito que documentes el proceso de cierre, porque queremos que el equipo deje de consultarme cada operación. Vos sos el que mejor lo conoce."* La persona entiende el objetivo, no solo el paso. Eso le da criterio para resolver lo imprevisto sin volver a preguntarte.

**2. Definí el resultado esperado, no el método.**
Decí qué tiene que estar logrado, no cómo hacerlo. "Quiero un instructivo que cualquier trader nuevo pueda seguir solo" es un resultado. "Hacé un documento de Word con estos diez pasos" es micromanagement. Dejá que la persona elija el cómo: es donde aprende y donde te liberás vos.

**3. Acordá el punto de control, no persigas.**
"Lo revisamos en la reunión del lunes" es un acuerdo. Preguntar todos los días "¿cómo va?" es asfixia. El sistema ya te muestra el avance — no necesitás perseguir, necesitás esperar al punto de control acordado.

## Cómo controlás sin asfixiar

**El control pasivo le gana al control activo.** Control activo es vos preguntando. Control pasivo es el sistema mostrándote. Todo el diseño apunta a que mires el tablero en vez de perseguir personas.

- **Diario (30 segundos):** un vistazo al tablero del equipo. ¿Alguien tapado? ¿Algo trabado hace días? No actúes todavía, solo registrá.
- **Semanal (la reunión):** ahí sí, la actualización y las decisiones. Reprogramar, cerrar, redistribuir carga.
- **Quincenal/mensual (con vos mismo):** ¿los KRs se están moviendo? Si una iniciativa lleva semanas y el número no cambia, es momento de replantear la apuesta.

Y para arriba, con tu jefe: **el sistema es tu reporte.** No armás nada especial. Abrís la vista de objetivos, mostrás los KRs con su progreso, y la conversación pasa de "creo que vamos bien" a "el KR de consultas está al 60%, vamos en línea; el de margen está trabado y esta es la iniciativa con la que lo estoy atacando". Eso es lo que te hace ver como gestor y no como operador.

---

# Parte 6 — Las skills + cómo trabajar con Claude

Las **skills** son módulos de conocimiento que Claude carga automáticamente cuando detecta que aplican a lo que estás pidiendo. Tenés tres instaladas. Conviene que entiendas qué hace cada una y, sobre todo, **cómo se usa cada una** — para pedirle a Claude lo correcto y para no esperar de una skill algo que hace otra.

El arco mental es simple: son tres roles distintos.

| Skill | Rol | Cuándo la usás | Frecuencia |
|---|---|---|---|
| **`gestion-diaria`** | Operar el sistema | Todos los días, desde Fase 1 | Alta |
| **`okr-head-of-grain-trading`** | Pensar la estrategia | Al armar objetivos, desde Fase 3 | Baja |
| **`notion-construction`** | Construir y reparar | Cuando algo se rompe o hay que cambiar la estructura | Muy baja |

Ninguna de las tres se invoca con un comando especial. Claude las detecta solo según lo que le pedís. Lo único que tenés que hacer es **pedirle en lenguaje natural lo que querés** — la skill correcta se activa sola.

## Skill 1: `gestion-diaria` — operar el sistema todos los días

**Qué hace:** es tu copiloto de uso diario. Carga tareas, captura notas a la Bandeja, procesa la Bandeja, arma las tareas de la weekly a partir del transcript, marca cosas como hechas, actualiza tus indicadores, y agenda tareas con horario en tu calendario avisándote si se pisan con algo.

**Cómo se usa — las frases que la activan:**

- *"Agregá una tarea: llamar a Pérez el viernes, alta prioridad."* → la carga en Notion con todos los campos.
- *"Anotá rápido en la bandeja: ver si llegó el mail de Cargill."* → captura cruda, sin estructura.
- *"Procesá la bandeja."* → te ayuda a triar lo que cayó ayer.
- *"Marcá como hechas las tres que terminé hoy."* → actualiza estados en lote.
- *"Agendá el informe el jueves de 15 a 16."* → lo pone en Notion y en el calendario, y te avisa si se pisa con otra cosa.
- *"Acá está el transcript de la weekly, armá las tareas."* → extrae los compromisos por persona y los carga.

**En qué fase entra:** desde el día 1 (Fase 1). Es la que más vas a usar — el resto son ocasionales.

**¿Vos la invocás?** No. Pedile lo que querés y se activa sola.

## Skill 2: `okr-head-of-grain-trading` — pensar tus objetivos

**Qué hace:** te ayuda a diseñar los objetivos del trimestre y sus indicadores. Conoce tu negocio (corretaje, futuros, canjes, insumos), sabe que tu jefe mira margen y volumen, y aplica tres tests antes de proponerte algo (¿se puede hacer? ¿se puede medir? ¿no sobrecarga al equipo?).

**Cómo se usa — las frases que la activan:**

- *"Ayudame a definir el objetivo del trimestre."*
- *"Repensemos el indicador de margen, no se está moviendo."*
- *"¿Qué iniciativas se me están escapando para mover este número?"*

**En qué fase entra:** Fase 3, no antes. Si le pedís objetivos comerciales en Fase 1 o 2, te va a frenar — porque el sistema arranca en "hábito antes que ambición", y los objetivos formales recién tienen sentido cuando el sistema ya está andando. Eso es a propósito, no un error.

**¿Vos la invocás?** Podés ser explícito (*"usá la skill de OKR para esto"*), pero Claude la suele detectar solo.

## Skill 3: `notion-construction` — construir y reparar el sistema

**Qué hace:** documenta cómo construir y modificar tu Notion sin romperlo. Tiene las limitaciones conocidas del conector y los workarounds para cada una. Es la skill técnica.

**Cómo se usa — las frases que la activan:**

- *"Agregame una columna nueva en Tareas."*
- *"¿Por qué esta tarea no me aparece en la vista?"*
- *"Quiero sumar una base de notas al sistema."*

**En qué fase entra:** ninguna en particular — es de mantenimiento o de emergencia. La vas a usar poco, y casi siempre va a ser para diagnosticar algo que dejó de funcionar (ver Parte 8).

**¿Vos la invocás?** No. Claude la lee solo cuando detecta que vas a tocar la estructura del sistema.

## Cómo actualizar una skill cuando descubrís algo nuevo

Las skills no son estáticas. A medida que vas usando el sistema, descubrís cosas (un patrón que funciona, un anti-patrón nuevo, una mejor manera de plantear un KR). Eso conviene volcarlo a la skill para que Claude las próximas veces ya lo sepa.

La forma de hacerlo: le decís a Claude algo como *"actualizá la skill `okr-head-of-grain-trading` con este aprendizaje: [lo que descubriste]"*. Claude edita el archivo, vos lo revisás, y queda persistente para próximas conversaciones.

## Buenas prácticas con Claude

Unas cuantas cosas que te van a ahorrar tiempo y plata.

### 1. No tires PDFs cuando puedas tirar Markdown

Claude lee mejor texto plano (.md) que PDFs nativos. Cuando un PDF tiene mucho formato visual, gráficos, columnas raras, Claude se confunde más. Y cuando es un PDF generado desde Word, la calidad de extracción de texto es variable.

**Práctica:** si tenés un documento importante que querés discutir con Claude (una propuesta del cliente, un contrato, un reporte interno), convertilo a Markdown primero. Hay varias formas:

- **Convertidor online gratis:** [pdf.ai/tools/pdf-to-markdown](https://pdf.ai/tools/pdf-to-markdown) — subís el PDF, te devuelve el .md. Funciona bien para la mayoría de los casos.
- Si el PDF tiene texto seleccionable: alternativamente podés copiar el texto y pegarlo en un editor (Notion sirve), guardarlo como .md.
- Si el PDF tiene mucho formato visual: pedile a Claude que lo procese pero contale qué partes te importan, así no se distrae con lo gráfico.
- Si es un Word, exportalo a Markdown directamente desde Word (File → Save as → Markdown). Notion también permite exportar páginas como Markdown.

**Ejemplo:** te llega un PDF de 30 páginas con la propuesta de un proveedor. En vez de tirárselo entero a Claude, lo convertís a .md y le pedís que te resuma las cláusulas clave. Más rápido, más preciso, menos tokens.

### 2. Modelo fuerte para planificar, modelo económico para iterar

Dentro de Claude Pro tenés acceso a varios modelos. El más fuerte es **Opus** (mejor razonamiento, más caro en tokens). Los más económicos son **Sonnet** y **Haiku** (más rápidos, más baratos, suficiente para tareas simples).

**Regla práctica:**

- Cuando estás **planificando** algo grande (diseñar los OKRs del trimestre, analizar una propuesta comercial compleja, repensar la estrategia con tu jefe) → **usá Opus**. Es donde el razonamiento profundo paga la diferencia.
- Cuando estás **iterando** sobre detalles (refinar una tarea, ajustar un mensaje, actualizar el estado de algo) → **usá Sonnet o Haiku**. Mismo resultado, fracción del costo.

**Ejemplos concretos:**

- *"Ayudame a diseñar los OKRs del Q3 desde cero"* → **Opus**.
- *"Reescribime esta tarea para que arranque con verbo de acción"* → **Haiku**.
- *"Analizá este reporte del INTA sobre cosecha gruesa y sacame las 3 implicancias para nuestra mesa"* → **Opus**.
- *"Marcá como Done las tareas que ya hice esta semana"* → **Haiku**.
- *"Repensemos por qué este KR no se está moviendo y qué iniciativas faltan"* → **Opus**.
- *"Reagregame esta tarea pero con fecha del martes que viene"* → **Haiku**.

El cambio de modelo se hace desde el selector arriba de la conversación. Si tenés dudas, **arrancá con Sonnet** (es el equilibrio razonable) y subí a Opus si la respuesta queda corta o superficial.

### 3. Conversaciones largas: cortá y abrí una nueva

Claude tiene un límite de contexto por conversación. Cuanto más larga, más lento y más errores. **Práctica:** si una conversación pasa de 30-40 mensajes, cerrala y abrí una nueva. Si necesitás continuidad, resumí lo importante en el primer mensaje de la nueva.

### 4. No le pidas "todo" en una sola pregunta

Las peticiones grandes ("hacé un plan completo del trimestre con OKRs, iniciativas, tareas, fechas y responsables") salen mejor cuando se descomponen. Pedí primero los objetivos, después los KRs, después las iniciativas. Cada paso es chequeable. Es más trabajo de hacer pero menos de corregir.

---

# Parte 7 — Las fases de adopción

El sistema **no arranca a pleno desde el día uno**. Tiene tres fases — cada una instala uno de los tres principios del método (ver capítulo "El método"). Saltearse fases es la forma número uno de matar el sistema.

Las 3 fases acompañan 3 reuniones del onboarding (R1, R2, R3). Cada fase tiene que asentarse antes de avanzar a la siguiente. **Si una fase no se asienta, iteramos — no avanzamos.** Sin culpa: es información sobre qué ajustar.

## Fase 1 — Externalización (~10 días, después de R1)

**Principio que instala:** afuera de tu cabeza. Todo lo importante vive en un lugar que podés mirar.

**Objetivo de la fase:** que uses Notion como tu sistema de tareas mejorado. Que todo lo que aparezca vaya al sistema y no a la cabeza. **Eso es todo.**

**Lo que SÍ pasa:**

- Usás Notion para tus tareas con 3 mejoras chicas sobre lo que ya hacés: cada tarea tiene **fecha**, **estado** (Not started → In progress → Done), y cuando aplica un **norte** (proyecto/iniciativa).
- Procesás la Bandeja de entrada cada mañana (ritual diario de 5-7 min: abrir Notion, procesar Bandeja, marcar In progress las tareas del día, cerrar Done al terminar).
- Cargás tareas en 3 modos según el momento:
  - **Manual en Notion** — con calma, en el escritorio.
  - **Asistido con Claude en lenguaje natural** — durante el día, carga estructurada. *"Claude, agregá tarea: revisar el contrato de Pérez mañana, alta prioridad."*
  - **Nota rápida con Claude a la Bandeja** — auto, reunión, celular, sin estructura. *"Claude, anotá rápido en la Bandeja: ver si Pérez ya firmó."*
- Vida personal también va al sistema, no solo trabajo.

**La regla simple para vos:** si tenés tiempo de pensar, va a Tareas. Si no, va a Bandeja.

**Lo que NO pasa:**

- No hay weekly del equipo todavía (eso es Fase 2).
- El equipo no toca Notion.
- No hay objetivos formales del trimestre (eso es Fase 3).
- No se proyecta Notion ante nadie.

**Criterio de éxito (validamos en R2):**

- Abriste Notion 3+ veces por semana sin que nadie te lo recuerde.
- Cargaste al menos 10 tareas con fecha y estado.
- Marcaste cosas como Done.

Si esas 3 cosas pasaron, avanzamos a Fase 2. Si no, iteramos sin culpa.

## Fase 2 — Seguimiento (~4 semanas, después de R2)

**Principio que instala:** seguimiento. La delegación deja de ser una intención y pasa a ser un hecho.

**Objetivo de la fase:** instalar la weekly del equipo como ritual fijo de delegación y seguimiento. Que cada semana salgas habiendo delegado al menos una cosa concreta a cada uno del equipo.

**Lo que SÍ pasa:**

- Weekly de 15-20 min, vuelta de mesa, **sin pantalla compartida, sin Notion proyectado** (ver Parte 4 para el detalle del ritual).
- Después de la weekly (10-15 min, vos solo) cargás los compromisos en Notion. Manual o asistido con Claude usando transcript.
- Cargás 2 indicadores semanales en tu Notion, 30 segundos cada lunes:
  - **¿Ejecuté la weekly esta semana?** Sí / No.
  - **Tareas delegadas vs cumplidas.** Ej: *"Delegué 3, se cumplieron 3"* → te sacaste laburo de encima. *"Delegué 4, se cumplieron 2, hice yo las otras 2"* → el ritual todavía no está consolidado, hay que mirar por qué.
- El sistema de Fase 1 sigue activo (ritual diario, Bandeja, los 3 modos de carga).

**Lo que NO pasa:**

- No definir objetivos formales del trimestre todavía (eso es Fase 3).
- El equipo todavía no entra a Notion. Solo vos lo tocás.
- No proyectar Notion durante la weekly. Sin pantalla.

**Criterio de éxito (validamos en R3):**

- Al menos 3 de 4 weeklies ejecutadas.
- Hay datos del indicador de delegación efectiva — y dicen algo (sea bueno o malo, sirve para iterar).

Si esas 2 cosas pasaron, avanzamos a Fase 3. Si no, iteramos sin culpa.

## Fase 3 — Norte estratégico (continuo, después de R3)

**Principio que instala:** norte. Cada acción importante pertenece a un objetivo de negocio.

**Objetivo de la fase:** definir tu primer objetivo formal del trimestre con sus 2-3 indicadores (KRs) comerciales y empezar a actualizarlos cada semana. El sistema deja de servirte solo a vos — empieza a servirte también para rendir hacia arriba.

**Lo que SÍ pasa:**

- Definimos juntos UN objetivo cualitativo del trimestre (lo que tu jefe te está pidiendo, traducido a un resultado — ver Parte 5 para el método de armado).
- Cargás 2-3 indicadores medibles (KRs) por objetivo, cada uno con baseline + actual + meta.
- Cargás 2-3 iniciativas por indicador, con dueño tentativo del equipo.
- La weekly del equipo sigue igual (15-20 min, sin pantalla compartida).
- Después de cada weekly, dedicás **5 minutos extra** (solo) para actualizar los valores actuales de tus indicadores. Tenés la info fresca de la semana.
- El sistema empieza a ser tu reporte hacia tu jefe: en vez de improvisar cuando te pregunta cómo viene algo, abrís Notion y le mostrás dónde estás.

### Cómo se actualizan los valores actuales de los indicadores

Los indicadores (KRs) tienen tres valores: **baseline** (de dónde arrancaste), **actual** (dónde estás hoy), y **meta** (a dónde querés llegar). El baseline y la meta se cargan al definir el indicador y casi no se tocan. **El actual sí se mueve, y alguien tiene que actualizarlo manualmente** — no hay captura de datos automática.

El ritual recomendado: **al cerrar la weekly, dedicale 5 minutos extra a actualizar los valores actuales**. Tenés la información fresca de la semana, sabés qué pasó. Es el momento natural.

La regla: **si nunca actualizás los valores actuales, los indicadores son decorativos**. Un indicador que dice "actual: 0" todo el trimestre no le sirve a nadie. Mejor pocos indicadores que actualizás religiosamente que muchos que abandonás.

**Cómo se sabe que Fase 3 funcionó:**

- Los indicadores se mueven (no hace falta llegar a meta — basta con que cambien del baseline).
- Las iniciativas están vivas.
- Cuando tu jefe te pregunta cómo viene algo, abrís Notion y le mostrás datos. No improvisás.

## Después de Fase 3: la evolución natural

R3 cierra el onboarding del método. De acá en adelante el sistema corre solo. Vos lo movés.

Hay una evolución natural posterior — proyectar Notion en las weeklies, invitar al equipo al sistema, marcar tareas en vivo durante la reunión (ver Parte 4, "Versión madura") — pero **no es parte del onboarding formal**. Ocurre cuando vos sentís que el equipo está listo y querés dar ese paso. Sin presión, sin calendario fijo.

Si en algún momento aparece algo (los indicadores no se mueven, la weekly se cae, tu jefe cambia el rumbo, o querés armar los objetivos del próximo trimestre), me escribís y lo conversamos.

---

# Parte 8 — Qué hacer si algo se rompe

## Diagnóstico rápido

| Síntoma | Qué chequear primero | Solución |
|---|---|---|
| Claude no encuentra mi Notion | Settings → Connectors → ¿Notion está conectado? | Reconectar desde cero |
| Una skill no carga | Que el archivo SKILL.md esté en `/mnt/skills/user/[nombre]/` | Revisar el path con Claude |
| Una tarea "desapareció" del tablero | Revisar la papelera de Notion | Restaurar desde Trash o recrear |
| El rollup de Progreso no se actualiza | ¿Los KRs tienen valor cargado? | Cargar baseline, actual y meta |
| La vista no me muestra lo que espero | ¿Tiene filtros viejos? | Editar filtros desde el menú de la vista |
| Claude responde "raro" o pierde el hilo | La conversación está muy larga | Cerrar y abrir nueva conversación |
| Una weekly no llegó a hacerse | Ruido, está bien (Nivel 1) | Reprogramá la siguiente y seguí |
| Varias weeklies seguidas no se hicieron | Señal (Nivel 2) | Conversación con vos mismo: ¿qué está pasando? Refinamiento con Agustín |

## Cuándo escalar a Agustín

Mandame mensaje si:

- El Notion no responde o se rompió algo estructural (perdiste DBs, relaciones rotas).
- Las skills no cargan a pesar de seguir el diagnóstico.
- Estás considerando saltarte una fase y querés validar conmigo.
- Pasaron 3 weeklies seguidas sin hacerse y no sabés por qué.
- Cualquier duda metodológica que te bloquee.

No me esperes a la sesión programada si estás trabado hoy. Resolverlo rápido es mejor que postergar.

---

# El resumen de una página

Si tuvieras que pegar esto en la pared:

- **Objetivo** = para qué (sin número). **KR** = cómo lo mido (con número). **Iniciativa** = la apuesta para moverlo. **Tarea** = el paso concreto.
- **Una buena tarea** empieza con verbo, tiene final reconocible, y está acotada en tiempo (medio día o un día de trabajo, no tres semanas).
- **Las fechas son compromisos, no deseos.** Pocas y reales le ganan a muchas y mentirosas.
- **El Notion es 100% tuyo durante todo el onboarding.** El equipo entra al sistema después, cuando vos decidís que está listo.
- **El sistema se mantiene con la reunión semanal**, no con voluntad individual. Una sola fricción para el equipo cuando entren: marcar el estado de su tarea.
- **El incumplimiento no se reta, se hace visible.** Reaccionás al patrón, no al episodio: ruido → señal → problema de fondo.
- **Estrategia:** del objetivo difuso de tu jefe sacás un indicador medible preguntando "¿cómo sabés que salió bien?". Derivás iniciativas preguntando "¿qué tendría que ser verdad para mover el número?". Delegás la iniciativa entera con su para qué. Controlás mirando el tablero, no persiguiendo personas.
- **Las fases mandan.** Fase 1 = externalización (Notion como sistema de tareas, ~10 días). Fase 2 = seguimiento (weekly del equipo, ~4 semanas). Fase 3 = norte estratégico (objetivo formal + indicadores, continuo). No saltar fases.
- **Las tres skills.** `gestion-diaria` opera el sistema todos los días. `okr-head-of-grain-trading` te ayuda a pensar la estrategia en Fase 3. `notion-construction` es para construir y reparar — rara vez la usás. Las tres se activan solas con pedidos en lenguaje natural.
- **Claude:** Opus para planificar, Haiku para iterar. Markdown mejor que PDF. Conversaciones cortas mejor que largas.