---
name: notion-construction
description: "Construir sistemas vivos en Notion (databases, propiedades, relaciones, vistas) vía API/conector MCP de Claude. Usar cuando el usuario pide armar un sistema nuevo en Notion, replicar un patrón documentado (Company OS, sistema de líder, captura de KRs), o cuando hay que cargar plantillas para clientes. Esta skill captura qué se puede hacer vía API, qué no se puede (y requiere intervención manual), y los workarounds documentados que ahorran iteraciones de prueba y error."
version: 0.1
author: Agustín Milesi
license: Uso interno de Agustín Milesi. Componente del catálogo de skills operativas.
---

# Skill: Construcción de Notion vía API

Esta skill es para el operador (Agustín o quien use el sistema) cuando va a construir un sistema vivo en Notion usando el conector MCP de Claude. Documenta qué funciona, qué no funciona y los workarounds, basado en armados reales (Campos HR de Federada, sistema de Lisandro Ruidia, y los proyectos Yellow SSOT).

El objetivo es **no gastar tiros probando sintaxis** ni descubrir limitaciones a los golpes. Si vas a construir un Notion nuevo, leé esta skill primero.

---

## Lo que el conector MCP de Notion sí permite hacer

### Crear databases

Con `notion-create-database`. Sintaxis del schema:

```sql
CREATE TABLE "Nombre con emoji 🎯" (
  "Nombre" TITLE,
  "Texto libre" RICH_TEXT,
  "Categoría" SELECT,
  "Etiquetas" MULTI_SELECT,
  "Número" NUMBER,
  "Cuándo" DATE,
  "Marca" CHECKBOX,
  "Relación" RELATION('id-del-data-source-destino')
)
```

**Reglas no negociables del schema:**

- Los nombres de columna van entre **dobles comillas**.
- Los strings de RELATION van entre **comillas simples**.
- El ID de la data source destino va **sin el prefijo** `collection://`. Solo el UUID, así: `'c3e558f8-0a16-419b-a87c-c16cd65a01f5'`.
- El tipo TEXT no existe: usar `RICH_TEXT`.
- El tipo CHECKBOX en Notion se mapea a 1 o 0 cuando se inserta vía API.

### Crear relaciones entre databases

Funciona perfecto pero **la base destino tiene que existir antes**. Por eso el orden de creación importa:

1. Primero las bases sin relaciones (las hojas del grafo).
2. Después las que dependen de las anteriores.
3. Las relaciones bidireccionales se crean **automáticamente** del lado destino — no hay que hacer nada extra.

### Crear páginas con propiedades

Con `notion-create-pages`. Las propiedades se pasan como strings:

```json
{
  "properties": {
    "Nombre": "Mi tarea",
    "Estado": "Pendiente",
    "Etiquetas": "Urgente,Cliente A",
    "Relación": "[\"https://www.notion.so/url-de-la-pagina\"]"
  }
}
```

**Detalles importantes:**

- **MULTI_SELECT** se pasa como string con valores separados por coma (sin espacios entre ellos): `"Etiquetas": "A,B,C"`.
- **RELATION** se pasa como JSON array de URLs dentro de un string: `"[\"https://...\"]"`. Notar el escape de las comillas internas.
- **DATE** se pasa con propiedades expandidas: `"date:Fecha:start": "2026-05-29"`, `"date:Fecha:is_datetime": 0`.

### Actualizar páginas existentes

Con `notion-update-page` command `update_properties`. Mismas reglas que crear.

### Mover páginas entre parents

Con `notion-move-pages`. Útil para reorganizar.

### Crear vistas con filtros

Con `notion-create-view`. Funciona para Board, Table, Calendar, Timeline. Los filtros se pasan como objeto estructurado.

---

## Lo que el conector NO permite hacer

Esto es lo más valioso de la skill — saber qué pedirle al usuario que haga manualmente antes de gastar llamadas intentando.

### No se pueden agregar options a Select o Multi-Select vía API

**Es la limitación más importante y costosa.** El conector permite *declarar* propiedades de tipo Select/Multi-Select, pero las options (los valores posibles) quedan vacías y **no hay forma de cargarlas vía API**.

Síntomas:
- `update_schema` ejecuta sin error pero las options siguen vacías.
- Intentar crear una página con un valor de Select inexistente da error: *"Invalid select value... If a new select option is needed, the data source must be updated to add it."*
- Trampa circular: el "update" del schema no agrega options, y sin options no podés insertar pages.

**Workaround:** el usuario tiene que abrir la base en Notion y agregar las options manualmente. No hay alternativa.

**Implicancia para diseño del trabajo:** cuando armes un sistema nuevo, **dejá las options para el final** y avisale al usuario que va a tener que cargar a mano:

- Options de cada Select/Multi-Select.
- Colores de cada option si querés ese nivel de detalle.

### No se pueden crear fórmulas vía API

El conector permite declarar columnas básicas (TITLE, RICH_TEXT, SELECT, etc.) pero **no existe un tipo FORMULA en el DDL**. Las fórmulas se crean abriendo la base en Notion y agregando una propiedad de tipo Formula.

**Workaround:** entregarle al usuario las fórmulas exactas a copiar, listas para pegar. Por ejemplo:

```
Avance % (en KRs):
if(prop("Meta") - prop("Baseline") == 0, 0, 
   (prop("Valor actual") - prop("Baseline")) / (prop("Meta") - prop("Baseline")))
```

### No se pueden crear rollups vía API

Mismo caso que las fórmulas. Los rollups se agregan manualmente desde la UI.

**Workaround:** documentar qué rollup va dónde, con sus parámetros: data source origen, propiedad a rollear, función (sum, average, count, percent, show original).

### No se pueden setear permisos por fila o por database vía API

Notion no tiene permisos a nivel fila ni siquiera vía UI. Y los permisos a nivel database/page solo se configuran desde Share manualmente.

### No se pueden ejecutar acciones de la UI: cambiar layout, ordenar columnas visuales, set icon de propiedad

Cosas estéticas y de UX quedan para configurar a mano.

### Limitaciones del motor de fórmulas (importante saberlas antes de diseñar)

Aunque las fórmulas se cargan manualmente, conviene saber qué se puede expresar y qué no para no diseñar imposibles:

- **NO existe `let`** en el motor de fórmulas de Notion. Repetir cálculos inline si son necesarios.
- **NO se pueden encadenar fórmulas que devuelven date** leyendo otra fórmula-date con `prop()`. Da type error. Workaround: usar campos date directos como insumo.
- **Para comparar fechas:** usar `dateBetween(fechaA, fechaB, "minutes") >= 0` en lugar de `fechaA <= fechaB`. La comparación directa con `<=` puede dar type error.
- **Los rollups con relaciones encadenadas tienen profundidad limitada:** máximo 1 nivel. Para más niveles, replicar el rollup en cada DB intermedia.
- **Los rollups que devuelven date** se pueden mostrar pero **no operar** (no se pueden filtrar ni sumar).

### El tipo STATUS no se reconfigura libremente

STATUS tiene grupos internos (to-do/in-progress/complete) que no se cambian vía API. Si necesitás opciones totalmente custom, usar **SELECT** en lugar de STATUS.

### La API no devuelve valores calculados de fórmulas

Cuando hagas `fetch` de una página, el campo de tipo formula devuelve una referencia `formulaResult://`, **no el valor renderizado**. Para leer el valor real, recalcular del lado del cliente o leer los valores base que la fórmula usa.

### El parent_page_url al crear databases no siempre anida

Cuando creás una database con `parent_page_url`, el conector tiende a crear la database como **hermana** de la página, no como hija. Resultado: la database queda fuera del lugar esperado.

**Workaround:** después de crear, usar `notion-move-pages` para mover la database adentro de la página padre. O avisar al usuario que va a tener que arrastrar a mano.

### La API no permite borrar vistas

Solo crear. Borrado de vistas: manual.

---

## Orden recomendado de construcción

Para un sistema nuevo que tiene varias databases interrelacionadas (típico de un Company OS o de cualquier patrón documentado):

**Paso 1: planificar antes de tocar API.**

Listá las databases que vas a crear, sus propiedades, las relaciones entre ellas, las fórmulas, los rollups y las vistas. **No empieces a crear sin el diagrama completo.** Cada llamada a la API cuesta tiempo y a veces requiere rehacer.

**Paso 2: crear databases en orden topológico.**

Las bases sin relaciones primero (hojas del grafo). Después las que dependen. Ejemplo del sistema de Lisandro:

1. Equipo (sin relaciones afuera).
2. Bandeja de entrada (sin relaciones afuera).
3. Objetivos (sin relaciones afuera).
4. Key Results (relaciona a Objetivos).
5. Iniciativas (relaciona a KRs, Equipo, Bandeja).
6. Tareas (relaciona a Iniciativas, Equipo, Bandeja).

**Paso 3: anotar los IDs de cada data source.**

Después de cada creación, la API devuelve el ID con prefijo `collection://`. Guardalo limpio (sin prefijo) para usarlo en las relaciones de las siguientes bases.

**Paso 4: NO intentar agregar options de Select via API.**

Pasar directo al paso 5 y dejar todas las options para configuración manual.

**Paso 5: entregar al usuario un checklist de configuración manual.**

Mostrale exactamente qué tiene que hacer:

- Para cada Select y Multi-Select: opciones a agregar (con colores sugeridos si aplica).
- Para cada fórmula: nombre de la columna, base, código de la fórmula.
- Para cada rollup: nombre, base, relación a usar, propiedad a rollear, función.
- Para cada vista: base, tipo (Board/Table/Calendar), filtros, agrupación, sort.

**Paso 6: cargar datos de prueba.**

Una vez configurado manualmente, cargar 3-5 filas de cada base para validar que las relaciones funcionan, las fórmulas calculan bien, y los rollups muestran lo esperado.

---

## Patrones de error comunes y su diagnóstico

### Error: "Cannot create relation on collecti-on:/-/..."

Causa: estás pasando el ID con prefijo `collection://`. Quitalo y dejá solo el UUID.

### Error: "Expected data source ID in single quotes"

Causa: el ID de RELATION va entre **comillas simples**, no dobles. Las columnas sí van entre dobles.

### Error: "Expected a type keyword, got TEXT"

Causa: usaste `TEXT` en lugar de `RICH_TEXT`. El conector no acepta `TEXT`.

### Error: "Invalid select value... If a new select option is needed..."

Causa: estás intentando insertar un valor en una Select cuyas options están vacías. **No hay workaround vía API.** Hay que agregar la option manualmente en Notion.

### Error: "Invalid arguments for tool notion-..."

Causa: nombre de parámetro incorrecto. Revisar la firma del tool con `tool_search`.

### Síntoma silencioso: `update_data_source` ejecuta sin error pero las options no aparecen

No hay error porque el conector "acepta" el update, pero internamente no aplica los cambios de options. Lo viví como bug pero parece comportamiento intencional. **Asumir que options siempre se agregan a mano.**

---

## Cómo entregar al cliente el checklist de configuración manual

Cuando termines la fase API y dejes al usuario configurar lo manual, entregale el checklist en este formato:

```markdown
## Configuración manual pendiente

### Options de Select a agregar

Base "👥 Equipo":
- Propiedad "Ámbito": Laboral (azul), Personal (verde)
- Propiedad "Fortalezas": Analítico (azul), Comercial (naranja), Operativo (verde), 
  Relacional (rosa), Detallista (púrpura), Estratégico (rojo), Comunicador (amarillo)

Base "🎯 Objetivos":
- Propiedad "Estado": En curso (azul), Logrado (verde), No logrado (rojo), Pausado (gris)
- Propiedad "Período": Q1 2026, Q2 2026, Q3 2026, Q4 2026
- Propiedad "Ámbito": Laboral, Personal

[etc por cada base]

### Fórmulas a agregar

Base "📊 Key Results":
- Nombre: "% Avance"
- Tipo: Formula
- Código: 
```
  if(prop("Meta") - prop("Baseline") == 0, 0, 
     (prop("Valor actual") - prop("Baseline")) / (prop("Meta") - prop("Baseline")))
```

[etc por cada fórmula]

### Rollups a agregar

Base "🎯 Objetivos":
- Nombre: "Avance"
- Relación a usar: KRs relacionados
- Propiedad a rollear: % Avance
- Función: Average

[etc por cada rollup]

### Vistas a crear

Base "✅ Tareas":
- Vista 1: "Tablero por persona" — Tipo Board, Group by Responsable, Filter Ámbito=Laboral
- Vista 2: "Mis tareas hoy" — Tipo Table, Filter Responsable=Me AND Fecha=Today

[etc por cada vista]
```

Eso reduce el trabajo manual del usuario de "descubrir qué hay que configurar" a "ejecutar la lista". Es la diferencia entre 4 horas frustrantes y 1 hora ordenada.

---

## Workflow recomendado

Cuando vayas a construir un sistema nuevo en Notion, seguí este flujo:

1. **Leé esta skill primero**. Confirmá qué se puede y qué no.
2. **Diseñá el modelo de datos completo** en un .md aparte (databases, propiedades, relaciones, fórmulas, rollups, vistas).
3. **Identificá lo automatizable vs manual** según las limitaciones documentadas acá.
4. **Construí lo automatizable** vía API, en orden topológico.
5. **Generá el checklist de configuración manual** para el usuario.
6. **Cargá datos de prueba** para validar que todo funciona.
7. **Documentá nuevos aprendizajes** en esta skill si descubriste algo nuevo (versión, fecha en changelog).

---

## Lo que falta investigar (TODO)

Cosas que no validé en los armados que hice y conviene probar:

- ¿Se pueden crear iconos de página vía API? (íconos custom, no emojis).
- ¿La creación de vistas Board funciona igual que Table? Probé Table; Board está documentado pero no validado.
- ¿Se pueden crear botones de Notion (automations) vía API? Probable que no, pero confirmar.
- ¿Hay forma de "duplicar database con datos" vía API? Probable que no (el conector no expone duplicar), pero sería útil para crear plantillas reusables.
- ¿Cuál es el rate limit real del conector? No lo medí, pero conviene saberlo cuando construyas algo grande.

---

## Changelog del archivo

- **2026-06-01 (v0.1):** versión inicial. Aprendizajes capturados de los armados de Campos HR (Federada, mayo 2026) y del sistema de Lisandro Ruidia (junio 2026). Limitación más importante documentada: no se pueden agregar options de Select via API, hay que hacerlo manualmente. Workflow de 7 pasos para no gastar tiros. Lista de patrones de error con causa identificada. Pendiente investigar: vistas Board, duplicación de databases con datos, rate limits.