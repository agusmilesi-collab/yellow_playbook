# Oferta de Yellow: estado actual y tres frases candidatas

**Puesto:** CPO (Diseño de servicio), Yellow OS
**Fecha:** 2026-11-12
**Foco:** Oferta redefinida
**Para:** el board (Agustín), que elige la frase y decide a quién se le vende hoy

Este archivo es trabajo del puesto y queda fuera de `playbook/` por la regla R1. Cuando el board elija, el cambio a `offer.md` e `icp.md` se registra como learning y se consolida.

---

## 1. Qué dice hoy la oferta

Fuentes: `playbook/01-identity/offer.md` (v0.10, 2026-06-11) e `icp.md`.

- **Tagline:** ayudar a profesionales independientes a que sus clientes tengan una mejor experiencia, vuelvan y los recomienden, rediseñando cómo entregan su servicio.
- **Formulación operativa:** el trabajo de un Gerente de Experiencia del Cliente, contratado por proyecto (fractional).
- **ICP:** profesionales independientes, emprendimientos chicos y comercios con oficio sólido cuyo servicio es mejor que su forma de entregarlo. Tres tiers por complejidad: Tier 1 profesionales de bienestar y servicios artesanales, Tier 2 PyME con producto indiferenciado, Tier 3 marcas de producto y comercios con criterio.
- **Modelos:** A Lectura experta (USD 300-600, lo único que se vende en frío), B Diagnóstico + plan (USD 2.000), C Sistema vivo instalado (desde USD 3.000).

## 2. Qué choca con la realidad

| # | Lo que dice el playbook | Lo que muestran los casos y los learnings | Fuente |
|---|---|---|---|
| 1 | El cliente es el profesional independiente | La única venta real (Lisandro) fue a un empleado con mando dentro de una empresa, para su equipo. ✅ | `cases/Lisandro/case-notes.md`, LRN-013 |
| 2 | Se vende el rediseño de la entrega, con diagnóstico y plan | Lisandro compró un sistema instalado y funcionando; el documento fue soporte. El producto fue el sistema. ✅ | LRN-013: "el documento fue soporte, el sistema fue el producto" |
| 3 | El tagline apunta al Tier 1 | La propia `offer.md` dice que quien más paga es el dueño de PyME (Tier 2) y que el Tier 1 sirve como fábrica de casos | `offer.md`, "Recomendación de modelo por perfil" |
| 4 | Tier 2 = PyME trabada en la profesionalización (ejemplo del agro) | Es exactamente el cliente de Campos HR ("profesionalización organizacional para PYMEs en transición de fase"). Las dos marcas le hablarían al mismo dueño. 🔵 | `icp.md` Tier 2; `Campos HR/README.md` |
| 5 | Pitch nivel 3: "eso le permitió subir el precio" | No hay resultado medido. El caso `psicologa-rosario` sigue en discovery desde el 9/5/2026 con el transcript vacío. El texto del playbook ya pide reemplazarlo cuando haya números. ❓ | `cases/psicologa-rosario/`, `offer.md` nivel 3 |
| 6 | Dos maneras de presentarse: "rediseño servicios" y "Gerente de Experiencia del Cliente fractional" | Ninguna de las dos se entiende sin explicación, que es el problema que trae el board ("me cuesta explicar qué hago") | `offer.md` |
| 7 | Decisión abierta de LRN-013: reencuadrar el ICP para incluir al profesional con mando, o abrir una línea aparte | Sigue sin decidir desde el 10/6/2026, y bloquea cualquier frase nueva | LRN-013, `analisis-yellow-lisandro.md` Parte III |

**Lectura del puesto (🔵):** la evidencia apunta a que lo que Yellow vende con éxito es armar e instalar el sistema con el que alguien entrega su trabajo (Lisandro, y las herramientas que el board construye para sí: OS de Campos, tools, este OS). El rediseño de la experiencia es el método; el sistema instalado es lo que el cliente paga. La frase tiene que elegir entre esas dos cosas, y elegir a quién.

## 3. Tres frases candidatas

Cada una elige un cliente distinto. Las tres pasan la guía de estilo: sin metáforas, sin "no es X, es Y", con mecanismo concreto.

### Frase A: el profesional independiente (lo que dice hoy el playbook)

> **"Rediseño cómo un profesional le entrega su trabajo a sus clientes, para que se note lo que vale y pueda cobrarlo."**

- **Para quién:** psicólogas, nutricionistas, abogados, contadores (Tier 1).
- **A favor:** es la que mejor se entiende en una charla. Coincide con el ejemplo del informe de 16 páginas.
- **En contra:** según la propia oferta, es el cliente que menos paga. No hay ninguna venta cerrada en este segmento.

### Frase B: el dueño de PyME (el que más paga según el playbook)

> **"Ayudo a dueños de PyME que venden lo mismo que la competencia a diferenciarse por cómo atienden y entregan, para dejar de competir por precio."**

- **Para quién:** PyMEs con producto rentable pero parecido al de otros (Tier 2).
- **A favor:** mayor disposición a pagar, y reconocen el problema sin que haya que explicárselo.
- **En contra:** es el mismo dueño al que le habla Campos HR. Con las dos marcas, ese dueño recibe dos propuestas de Agustín y no sabe cuál comprar.

### Frase C: el sistema instalado (lo que efectivamente se vendió)

> **"Armo e instalo el sistema con el que un profesional o un equipo entrega su servicio, para que salga bien siempre sin que tenga que estar encima."**

- **Para quién:** profesionales y responsables de equipo (incluye el perfil de Lisandro) que hoy entregan a mano, con planillas y mensajes sueltos.
- **A favor:** es lo único con una venta real. Se separa de Campos: Campos ordena personas y estructura, Yellow instala el sistema de entrega. Usa lo que el board ya demuestra que sabe hacer.
- **En contra:** obliga a resolver LRN-013 (reencuadrar el ICP) y a reescribir el tagline. Se puede confundir con "desarrollo web o programación", que `offer.md` excluye; hay que aclarar que el sistema sale del rediseño.

## 4. Recomendación del puesto

**Frase C** (🔵), por tres razones: tiene la única venta como prueba, no compite con Campos HR por el mismo dueño, y responde a la pregunta del board ("qué hago") con algo que se puede mostrar funcionando. Si el board elige C, el siguiente paso del CPO es redactar el learning que reencuadra el ICP (cierra LRN-013) y la nueva versión de `offer.md` para aprobar.

**Decisión del board:** elegir A, B o C (o pedir una mezcla), y decir a quién le vendería hoy, con un nombre concreto si lo hay.
