---
name: okr-head-of-grain-trading
description: "Definir OKRs específicos para el rol de Head of Grain Trading en empresas de corretaje agropecuario (Macroagro y similares). Úsala cuando el usuario en ese rol necesita armar el objetivo del trimestre, definir KRs comerciales (margen, volumen, cross-sell, cobertura), o pensar iniciativas para mover esos indicadores. Conoce el menú del negocio (corretaje, futuros, canjes, insumos), sabe que el jefe del trader mira margen y volumen, y aplica tres tests antes de proponer cualquier KR (¿se puede hacer? ¿se puede medir? ¿no sobrecarga al equipo?). Es una versión específica por rol de la skill genérica okr-lider-de-equipo. Crítico: NO la apliques antes de Fase 3 del método del onboarding (ver guardrail abajo)."
version: 0.1
author: Agustín Milesi
license: Uso interno de Agustín Milesi. Componente del catálogo de skills operativas.
---

# Skill: Definición de OKRs para Head of Grain Trading

Esta skill ayuda a un Head of Grain Trading en empresa de corretaje agropecuario a definir el objetivo del trimestre y los indicadores comerciales que lo miden. Es una **adaptación específica** de la skill genérica `okr-lider-de-equipo` (método de Christina Wodtke, *Radical Focus*) al contexto del negocio de granos.

La diferencia con la genérica: esta skill **ya conoce el menú del negocio** (corretaje, futuros, canjes, insumos), las palancas comerciales típicas (margen por operación, volumen, % de clientes con cobertura, cross-sell entre líneas), y la lectura habitual del jefe en ese rol (margen y volumen como métricas-techo). Eso le permite proponer KRs con vocabulario del sector sin que el usuario tenga que explicarlo desde cero.

---

## Guardrail de fase: no apliques esta skill antes de Fase 3

Esta skill diseña objetivos formales del trimestre con indicadores comerciales. Eso pertenece a la **Fase 3 del método** (norte estratégico). Si el usuario pide objetivos/OKRs comerciales mientras todavía está en Fase 1 (externalización) o Fase 2 (seguimiento/weekly), **no los armes de una**: el sistema arranca en "hábito antes que ambición", y meter objetivos ambiciosos antes de que el sistema esté andando es la forma número uno de sobrecargarlo y matarlo.

Cómo reconocer que todavía no es momento:

- La weekly todavía no funciona como ritual fijo.
- No hay datos de delegación efectiva del trimestre en curso.
- El usuario está recién adoptando Notion como sistema de tareas personal.

Qué hacer en ese caso: explicá que los objetivos formales son de Fase 3, que primero conviene asentar el hábito (sistema personal + weekly), y ofrecé ayuda con lo que SÍ corresponde a la fase actual.

**La excepción:** si el usuario insiste con conocimiento de causa (sabe que se está adelantando y aun así quiere explorar), podés hacer un **borrador exploratorio** — pero dejá explícito que no es para cargar todavía en el sistema, sino para tener una idea de hacia dónde va.

---

## Antes de empezar: las preguntas que no se saltan

No se escribe ningún OKR hasta tener estas respuestas. Si el usuario las saltea, la skill las pide.

**1. ¿Qué trimestre y año?**
Sin ventana de tiempo, los OKRs son aspiración sin fecha.

**2. ¿Cuál es la prioridad estratégica de la empresa para este trimestre?**
En el negocio de granos, las prioridades típicas suelen ser: aumentar margen por operación, consolidar una línea (futuros, canjes), recuperar clientes inactivos, profesionalizar el equipo, abrir un canal nuevo. Si el usuario no la sabe, la skill insiste: sin esa prioridad, los OKRs no tienen brújula y se vuelven lista de tareas.

**3. ¿Qué te está pidiendo tu jefe este trimestre?**
Esta es la pregunta más importante. En el rol de Head of Grain Trading, el jefe (típicamente Director Comercial o Gerente General) rara vez baja un OKR limpio; baja algo difuso como "hay que mejorar el margen", "el equipo nuevo tiene que rendir", "tenemos que mover más volumen en futuros". La skill ayuda a traducir esa baja al objetivo cualitativo del trimestre.

**4. ¿Cuáles son las dos o tres cosas que hoy te están consumiendo tiempo y no deberían?**
Detecta el cuello de botella operativo. Los OKRs deberían atacar al menos uno de esos.

**5. ¿Qué cosa importante de tu trimestre va a quedar afuera de estos OKRs?**
Esta pregunta se hace al final, antes de cerrar la lista. Hacer explícito qué se deja de lado es la conversación más valiosa del proceso.

---

## El menú del negocio que la skill conoce

Cuando la skill propone KRs o iniciativas, los formula en el vocabulario del sector. Los grandes ejes:

**Corretaje (negocio histórico).** Operaciones de compraventa a fijar precio o a precio cerrado. Métricas típicas: número de operaciones, toneladas mensuales, margen promedio por operación, % de cartera activa.

**Futuros y opciones.** Cobertura de precio para clientes que producen o consumen grano. Métricas típicas: número de operaciones de futuros/mes, % de clientes de corretaje que también usan futuros (cross-sell), tiempo de respuesta a consultas de cobertura.

**Canjes (grano por insumo).** Operaciones donde el productor entrega grano a cambio de insumos. Métricas típicas: volumen canjeado/mes, número de proveedores de insumo con convenio activo, margen comparado vs venta directa.

**Insumos.** Venta directa de insumos al productor (semilla, fitosanitario, fertilizante). Métricas típicas: % de cartera comprando insumo, recurrencia por campaña, ticket promedio.

**Cross-sell entre líneas.** Lo más jugoso desde la mirada del jefe: un cliente que opera corretaje + futuros + insumos vale 3-5x más que uno solo de corretaje. KRs típicos: % de clientes con 2+ líneas activas, número de clientes que sumaron una línea nueva en el trimestre.

**Cómo lee el jefe el trimestre.** Margen (qué tan rentable fue cada toneleada movida) y volumen (cuánto movió la mesa). Cualquier objetivo del trimestre tiene que poder traducirse a uno de los dos sin esfuerzo — si no se traduce, el jefe no lo va a comprar.

---

## Los tres tests que la skill aplica antes de proponer un KR

Cada KR propuesto pasa por estos tres tests antes de mostrarse:

**1. ¿Se puede hacer?**
¿Está dentro del control razonable del Head of Grain Trading o depende de variables externas? Ejemplo: "Subir el precio internacional de la soja" no pasa el test. "Aumentar el % de operaciones con margen objetivo cumplido" sí.

**2. ¿Se puede medir?**
¿Hay una fuente de datos accesible para sacar el valor actual cada semana o cada mes? Si la métrica requiere armar un dashboard nuevo desde cero, hay que cargar la creación del dashboard como iniciativa antes — o elegir otra métrica.

**3. ¿No sobrecarga al equipo?**
Si para mover el KR el equipo tiene que hacer 3 cosas nuevas en paralelo además de su trabajo habitual, no pasa el test. Mejor 2 KRs bien atendidos que 4 con sobrecarga que no se ejecutan.

Si un KR propuesto falla alguno de los tres tests, la skill lo marca y propone una alternativa.

---

## Reglas que esta skill aplica sin excepción

**Un solo objetivo por trimestre, máximo dos.** Tres o más ya son lista de tareas, no foco.

**Tres KRs por objetivo, máximo cuatro.** Más es ruido.

**Cero KRs binarios o de output.** "Lanzar el plan de cobertura" no es KR — es tarea. "% de clientes con cobertura activa sube de 20% a 35%" sí.

**Cero vanity metrics.** "Tener 50 reuniones con productores este trimestre" no es KR — es actividad. "Productores que firman después de primera reunión sube de 30% a 50%" sí.

**Cada KR tiene baseline y meta.** Sin baseline, no se escribe el target — se marca como "dato a recolectar en las próximas dos semanas".

**KRs ambiciosos: 0.7 es el sweet spot.** Si todos los KRs van a llegar a 1.0 sin esfuerzo, fueron tibios.

---

## Anti-patterns típicos en el rol y su corrección

| Anti-pattern | Ejemplo en mundo grain trading | Versión corregida |
|---|---|---|
| Tarea disfrazada de KR | "Implementar weekly de la mesa" | "% de semanas con weekly ejecutada sube de 30% a 90%" |
| Vanity metric | "Hacer 20 visitas a productores en el trimestre" | "Productores activos en cartera sube de 80 a 100" |
| KR binario | "Capacitar al equipo en futuros" | "% del equipo que cierra operaciones de futuros sin consultarme sube de 0% a 70%" |
| KR de proceso disfrazado de outcome | "Reducir tiempo de respuesta a consultas de futuros" | "Tiempo promedio de respuesta a consulta de futuros baja de 3 días a 1 día hábil" |
| Sin baseline | "Mejorar el margen" | "Margen promedio por operación de corretaje sube de USD X/tn a USD Y/tn" (con dato a recolectar si no se sabe el X) |
| Métrica fuera del control | "Aumentar el precio internacional de la soja" | "% de operaciones cerradas con margen objetivo sube de 60% a 80%" |
| KR copiado del jefe sin traducir | "Aumentar facturación del área" | "Clientes nuevos no recurrentes que cierran al menos una operación sube de 4 a 10 por trimestre" |

Cuando la skill detecta uno de estos patrones, marca el error, explica por qué, y propone reescritura.

---

## Proceso de definición, paso a paso

La skill conduce al usuario por seis pasos. Cada paso tiene un timebox para evitar paralización.

**Paso 1 — Brainstorm libre del objetivo (10 minutos).** El usuario tira ideas sueltas de qué sería un trimestre exitoso. La skill recolecta sin filtrar.

**Paso 2 — Conexión con la prioridad estratégica + el pedido del jefe (5 minutos).** La skill mapea cada idea contra (a) la prioridad de la empresa y (b) lo que pidió el jefe. Las que no conectan con ninguna se descartan o se posterga.

**Paso 3 — Formulación del objetivo único (10 minutos).** La skill propone una formulación cualitativa, ambiciosa, con horizonte trimestral. Ejemplo: *"Consolidar la operación de futuros como herramienta del equipo, no solo del head"*.

**Paso 4 — Brainstorm de métricas (10 minutos timeboxed).** Para el objetivo elegido, el usuario tira métricas posibles. La skill las recolecta sin filtrar.

**Paso 5 — Agrupación y elección de 2-3 KRs (10 minutos).** La skill aplica los tres tests a cada métrica, agrupa similares, descarta vanity y outputs, y propone los más distintivos. Cada uno con baseline (si se sabe) y meta. Si falta baseline, marca el dato a recolectar.

**Paso 6 — Trade-off explícito (5 minutos).** La skill pregunta qué queda afuera. El usuario nombra una o dos cosas. La skill anota: "trabajado fuera del foco OKR este trimestre".

Total estimado: 50 minutos.

---

## Output format: listo para cargar en el sistema

La skill produce un bloque estructurado para copiar al Notion del usuario:

```
OKR DEL TRIMESTRE — [Q] [Año] — Head of Grain Trading
═══════════════════════════════════════════════════════

PRIORIDAD ESTRATÉGICA DE LA EMPRESA
[Frase corta]

LO QUE PIDIÓ EL JEFE
[Traducción del pedido difuso a un resultado concreto]

OBJETIVO
[Formulación inspiracional, cualitativa, ambiciosa]

Por qué importa: [una o dos oraciones conectando con la prioridad
y con lo que pidió el jefe]

│ # │ KR                                  │ Baseline │ Meta   │ Cómo se mide        │ Cadencia │
│ 1 │ [outcome medible]                   │ [valor]  │ [valor]│ [fuente del dato]   │ semanal  │
│ 2 │ [outcome medible]                   │ [valor]  │ [valor]│ [fuente del dato]   │ semanal  │
│ 3 │ [outcome medible]                   │ [valor]  │ [valor]│ [fuente del dato]   │ mensual  │

Owner: [el head]
Iniciativas que mueven estos KRs:
- [iniciativa 1, con dueño tentativo del equipo]
- [iniciativa 2, con dueño tentativo del equipo]
- [iniciativa 3, con dueño tentativo del equipo]

TRADE-OFF DECLARADO
Quedó afuera del foco este trimestre:
- [cosa 1]
- [cosa 2]
Razón: [corta]

DATOS A RECOLECTAR (si hay KRs sin baseline)
- KR #X requiere establecer baseline en las próximas dos semanas.
  Fuente sugerida: [...]

NOTAS METODOLÓGICAS
Estos OKRs son herramienta de gestión del head y de su mesa. No se
usan para evaluación formal de desempeño ni para definir bonos.
El sweet spot de cumplimiento es 0.7 — si todos llegan a 1.0,
fueron tibios.
```

---

## Integración con el sistema vivo del cliente

El output mapea directamente a las DBs del sistema (Notion patrón "sistema vivo de líder"):

- **Objetivo** → fila en DB Objetivos
- **KR** → fila en DB KRs, con relación al Objetivo
- **Iniciativas** → filas en DB Iniciativas, con relación a los KRs
- **Trade-off declarado** → texto al pie del objetivo en la página del trimestre

La carga al Notion la hace `gestion-diaria` (operación de cargar tareas/iniciativas). Esta skill produce el output en formato copiable.

---

## Calidad: lo que la skill chequea antes de entregar

Antes de devolver los OKRs finales, la skill se autocomprueba:

- [ ] Cada KR tiene baseline (o está marcado como pendiente de medir).
- [ ] Cada KR tiene meta numérica, no cualitativa.
- [ ] Cero KRs binarios.
- [ ] Cero KRs que midan output en lugar de outcome.
- [ ] Cada KR pasó los 3 tests (¿se puede hacer? ¿se puede medir? ¿no sobrecarga al equipo?).
- [ ] El objetivo conecta con la prioridad estratégica y con el pedido del jefe.
- [ ] El trade-off está explícito.
- [ ] La cadencia de revisión está definida.
- [ ] Hay máximo 2 objetivos, máximo 4 KRs por objetivo.
- [ ] La nota sobre separación de OKRs y evaluación de desempeño está incluida.

Si alguna casilla queda sin tildar, la skill lo marca como "punto débil que conviene revisar antes de empezar el trimestre".

---

## Cuándo NO usar esta skill

- **Antes de Fase 3 del método.** Ver guardrail al inicio.
- **Cuando el head está en crisis aguda** (jefe enojado, equipo roto, cash flow). Los OKRs son herramienta de gestión normal; no resuelven crisis. Atender la crisis primero.
- **Cuando la empresa tiene OKRs corporativos formales que chocan con este formato.** Adaptar al formato vigente, no introducir uno nuevo.
- **Cuando el rol es distinto** (analista de mesa, comercial sin equipo, gerente comercial multi-área). Para esos casos, volver a la skill genérica `okr-lider-de-equipo` o adaptarla.

---

## Lectura de referencia

Christina Wodtke, *Radical Focus*. La metodología base. Las ideas operativas están destiladas en la skill `okr-lider-de-equipo` y heredadas acá.

---

## Changelog

- **2026-06-08 (v0.1):** versión inicial. Especialización de `okr-lider-de-equipo` para el rol de Head of Grain Trading. Suma el menú del negocio (corretaje, futuros, canjes, insumos), la lectura habitual del jefe (margen y volumen), los anti-patterns típicos del sector, y los tres tests específicos antes de proponer un KR. Suma guardrail explícito de no aplicar antes de Fase 3 del método del onboarding. Lead que activó la skill: Lisandro Ruidia (Macroagro, junio 2026).