# ¿Yellow necesita un Project manager?

- **Puesto:** CHRO, Yellow OS
- **Fecha:** 2026-11-13
- **Tarea:** oo7bqfmx (iniciativa "Auditoría del organigrama con el método Campos")
- **Base:** `agentes/chro/diseno-de-agentes.md` (cuándo hace falta un puesto, orden de prueba, accountability por nivel), `agentes/chro/metodo-campos/framework.md` (función huérfana, alcance de control) y `agentes/chro/metodo-campos/modelo-operativo-y-gobierno.md` (tipos de interdependencia), `agentes/decisiones.md` y la skill del latido. Leyenda: ✅ dato del OS o del repo, 🔵 lectura del puesto, ❓ falta el dato.

## Respuesta

**No, hoy no hace falta.** El síntoma que llevó a la pregunta (una tarea del CFO que juntaba tres trabajos) fue una falla de cómo se escribían las tareas, no de un puesto faltante, y ya se corrigió con una regla en la skill del latido. Las funciones que cubriría un PM ya tienen dueño. Se deja anotado el disparador que justificaría un puesto de coordinación de entregas bajo el COO.

## 1. Qué pasó

- El board vio una tarea del CFO que juntaba tres trabajos en uno ✅ (detalle de la tarea).
- Desde entonces la skill del latido tiene el **Test de una tarea**: un solo entregable, primer paso obvio, entra en un latido y Listo cuando escrito ✅. El script no crea una tarea de un puesto sin `--dod` ✅, y el CEO cargó el Listo cuando de las tareas abiertas ✅ (commit 2b2dad8).
- Las tareas abiertas del CFO hoy son de un entregable cada una (fecha del primer pago, gastos y margen, estado de resultados, contrato, formas de cobrar, datos para facturar) ✅.

Lectura 🔵: el problema era un estándar que nadie había escrito. El método Campos dice que ante trabajo secuencial lo que resuelve es el criterio escrito, no sumar a alguien que coordine (`modelo-operativo-y-gobierno.md`, tabla de interdependencias). Se escribió el criterio y alcanzó.

## 2. Qué función cubriría un PM y quién la tiene hoy

**Partir iniciativas en tareas de una sentada**

- **¿Huérfana?:** No
- **Quién la tiene hoy:** Cada Chief dueño de la iniciativa, en su latido ✅ (skill del latido, "Quién parte las iniciativas en tareas")

**Seguir plazos y avance de los KRs**

- **¿Huérfana?:** No
- **Quién la tiene hoy:** CEO, con la escalera de accountability (ruido, señal, problema) y el semáforo ✅

**Que cada tarea tenga Listo cuando y se revise contra él**

- **¿Huérfana?:** No
- **Quién la tiene hoy:** El jefe de cada puesto revisa con `aprobar` o `devolver` ✅; el CEO carga el `dod` si falta ✅

**Coordinar el trabajo que pasa de un puesto a otro**

- **¿Huérfana?:** No
- **Quién la tiene hoy:** Traspasos con criterio de listo en el OS ✅; los procesos que cruzan puestos los escribe el COO ✅ (decisión del 12/11)

**Llevar el proyecto de cada cliente (etapas, plazos, entrega)**

- **¿Huérfana?:** No
- **Quién la tiene hoy:** COO, según `playbook/03-process/00-pipeline.md` ✅

**Que el board no reciba tareas que no son suyas**

- **¿Huérfana?:** No
- **Quién la tiene hoy:** CEO, con la regla del embudo y su KR de menos del 40% ✅

Ninguna es huérfana. Un PM interno sobre los Chiefs, además, rompería dos reglas de diseño 🔵:

1. **Un resultado, un dueño:** el avance de los KRs ya es del CEO. Un PM que también responda por "que las iniciativas avancen a tiempo" pone dos dueños sobre lo mismo.
2. **Accountability por nivel:** un PM responde por un proceso (que las tareas salgan bien y a tiempo), es nivel responsable o analista. No puede ir arriba de los Chiefs ni al lado del CEO.

## 3. Orden de prueba (`diseno-de-agentes.md`)

1. **¿Lo absorbe un puesto existente sin juntar perfiles opuestos?** Sí: partir tareas es de los Chiefs, seguir avance es del CEO, coordinar la entrega al cliente es del COO. Ninguna de las tres pide un criterio contrario al del puesto que la tiene.
2. **¿Alcanza con una iniciativa o una skill?** Sí, y ya se hizo: el Test de una tarea y el `--dod` obligatorio en la skill del latido.
3. **Puesto nuevo:** no corresponde.

Alcance de control: un PM no le saca reportes al CEO (los Chiefs le siguen reportando), así que tampoco resuelve el borde de 8 reportes directos ✅. Para eso sigue vigente el candidato "Responsable comercial" del plan de crecimiento.

## 4. Disparador

Donde sí puede aparecer un puesto de coordinación es en la entrega a clientes, cuando haya varios proyectos a la vez que cruzan puestos y se ajustan entre sí (interdependencia recíproca). Hoy hay un caso (Lisandro) y ningún cliente pago ✅.

**Coordinación de entregas**

- **Nivel:** Responsable
- **Bajo:** COO
- **Responde por:** Que cada proyecto de cliente cumpla sus etapas en fecha
- **Disparador:** 3 casos en entrega al mismo tiempo, o 2 casos con una etapa vencida en el mismo mes
- **Hoy lo absorbe:** COO

Notas 🔵:

- Se superpone con "Implementación" (bajo COO, disparador: 2 sistemas en instalación a la vez) del plan de crecimiento (`accountability-y-crecimiento-2026-11-12.md`, tabla 2). Cuando se cumpla cualquiera de los dos disparadores, el CHRO evalúa si es un solo puesto o dos antes de proponer el alta.
- Señal de abajo que también lo dispararía: en dos revisiones seguidas, el CEO tiene que partir tareas de un Chief porque no pasan el test. En ese caso lo primero es ajustar el criterio o la skill de ese Chief (sección Desempeño de la guía), no un PM.
- El disparador se suma a la tabla 2 del plan de crecimiento, que está pendiente de aprobación del board ✅ (decisión del 12/11). Se aprueba junto con esa entrega.

## Principios aplicados

- Criterio 2 del CHRO: antes de un puesto nuevo, probar si alcanza con una iniciativa, una skill o un puesto existente. Alcanzó con una regla de la skill.
- Criterio 3: un resultado, un dueño. Un PM sobre los Chiefs duplicaba el dueño del avance de los KRs.
