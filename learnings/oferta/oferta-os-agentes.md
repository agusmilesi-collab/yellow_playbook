# Oferta de Yellow en dos capas: rediseño del servicio más equipo de agentes

- **Puesto:** CPO (Diseño de servicio), Yellow OS
- **Fecha:** 2026-11-13
- **Tarea:** qjs913nz
- **Para:** el board, que aprueba o veta la oferta y el learning de la sección 9
- **Base:** las decisiones del board del 13/11 (en `agentes/decisiones.md`), las entregas del INV del 12/11 (benchmark y segmentos), la arquitectura del CTO y las reglas de datos del CISO
- **Leyenda:** ✅ confirmado, 🔵 inferencia del puesto, ❓ falta el dato

Este archivo es trabajo del puesto y queda fuera de `playbook/` por la regla R1. Los cambios a la oferta y al ICP van como learning (sección 9).

---

## 1. La frase

Frase de trabajo del board ✅:

> **"Rediseño cómo entregás tu servicio y te armo el equipo de agentes que lo opera."**

Versión para alguien fuera del rubro, propuesta del puesto 🔵:

> "Ayudo a profesionales independientes, por ejemplo una nutricionista, a ordenar cómo atienden a sus pacientes. Primero rediseño cómo entregan su servicio, y después les instalo agentes de IA que se ocupan de los turnos, los cobros y el seguimiento, para que ellos se dediquen a atender."

## 2. A quién, este año

- **Quién:** profesionales independientes que atienden en consultorio ✅ (decisión del 13/11). Primer grupo: las nutricionistas que alquilan consultorio en el Centro de Sentir ✅.
- **Por qué ellas primero:** hay acceso directo (el board conoce el Centro) y el INV ya tiene la tarea de medir el segmento (z6cbtdu1) ✅.
- **Qué les pasa:** atienden, dan turnos, cobran, facturan y hacen el seguimiento ellas mismas. Cada hora en administración es una hora sin atender 🔵.
- **Tamaño de la primera venta:** un solo agente, el Administrador, y después se suma de a uno ✅ (decisión del 13/11).

## 3. Qué incluye cada capa

**Capa 1: rediseño de cómo la profesional entrega su servicio**

- Es el método Yellow: JTBD, mapa de valor y diseño del servicio ✅.
- Se entrevista a la profesional y a 2 o 3 de sus pacientes, se dibuja cómo se vive hoy la atención de punta a punta y se decide qué cambia 🔵.
- Sale un plan con el servicio rediseñado: qué pasa antes, durante y después de cada consulta, quién lo hace y con qué herramienta.
- Es la diferencia de Yellow: los agentes solo operan un servicio que ya se rediseñó ✅ (decisión del 13/11: "nunca se automatiza un servicio sin rediseñarlo antes").
- Se cobra una vez ✅.

**Capa 2: el equipo de agentes que opera el servicio rediseñado**

- Agentes de un catálogo, cada uno con su DPT, objetivos, límites y presupuesto, igual que los puestos de este OS ✅.
- Catálogo inicial ✅: Administrador (turnos, cobros, facturación), Seguimiento de pacientes y Marketing.
- Se instala de a uno. El primero es el Administrador (DPT en `agentes/cpo/catalogo/administrador-consultorio.md`).
- La profesional aprueba lo que el agente propone desde una bandeja, como el board aprueba en este OS 🔵.
- Se cobra por mes ✅.

## 4. Qué no incluye

- Atención clínica ni decisiones de salud: el agente deriva siempre a la profesional ✅ (reglas del CISO).
- Guardar la historia clínica en la primera etapa: sigue en el sistema actual de la profesional ✅ (reglas del CISO).
- Campañas pagas, anuncios o manejo de redes como servicio aparte. El agente de Marketing trabaja sobre los pacientes que ya llegaron y sobre el contenido que la profesional aprueba 🔵.
- Automatizar sin rediseñar antes ✅.

## 5. Resultado que se mide

Se toma la línea de base en la capa 1 y se vuelve a medir a los 30 y 60 días de instalado cada agente 🔵.

- **Horas de la profesional en administración por semana:** tienen que bajar.
- **Pacientes atendidos por mes:** tienen que subir, o mantenerse con menos horas de trabajo.
- **Turnos perdidos (ausentes sin aviso):** tienen que bajar.
- **Cobros al día y facturas emitidas en término:** tienen que llegar al 100%.
- **Facturación mensual de la profesional:** es el techo que el board quiere subir ✅. Se mide, pero se promete solo después del primer caso con datos.

## 6. Precio en dos partes

**Primer cliente (decisión del board del 13/11) ✅**

- ARS 500.000 por el rediseño (capa 1) y la instalación del Administrador.
- Dos pagos de ARS 250.000: el primero antes de empezar y el segundo antes de la entrega o de la reunión de onboarding.
- Nada se entrega sin el pago de esa parte (aprendizaje del caso Lisandro, LRN-024).
- Es precio de prueba: sirve para practicar y encontrar errores.

**Abono mensual del agente (propuesta del puesto, a aprobar) 🔵**

- El costo de un cliente es de unos USD 21 por mes (base de datos e IA), más su parte de USD 45 fijos de hosting ✅ (informe del CTO, opción C, todavía sin aprobar).
- La meta de margen del CFO es 60% ✅. Para cubrir USD 21 con ese margen, el abono tiene que ser de unos USD 53 por mes (21 / 0,4) 🔵.
- Propuesta: **USD 50 a 60 por mes por agente, cobrado en pesos al MEP del día**, empezando el mes siguiente a la instalación 🔵.
- ❓ No hay dato de cuánto paga hoy una nutricionista por herramientas de gestión. El INV lo puede medir junto con el segmento (z6cbtdu1).

**Riesgo que hay que mirar 🔵**

El INV le dio a este segmento el puntaje más bajo en disposición a pagar: una sesión cuesta entre ARS 3.000 y 20.000 en Rosario ✅ (`2026-11-12-inv-segmentos.md`). ARS 500.000 son entre 25 y 160 sesiones. La primera venta va a decir si el precio entra. Si las primeras tres dicen que no por precio, se anota y se revisa con el board, sin bajar el precio en la llamada.

## 7. El caso Lisandro, contado con esta secuencia

✅ Hechos del caso, 🔵 la lectura del puesto:

1. **Rediseño (capa 1):** Lisandro es jefe de traders. Se rediseñó cómo él gestiona a su equipo y cómo responde ante sus jefes: qué se mide, cuándo se revisa y quién hace cada cosa ✅.
2. **Sistema que lo opera (capa 2):** se instaló un tablero de OKR en Notion con un asistente de IA, un manual y un onboarding en tres reuniones ✅.
3. **Lo que enseñó:** pagó solo el primer tramo, porque el onboarding no se terminó ✅. De ahí sale la regla de cobrar antes de entregar ✅.

Cómo se cuenta en una llamada 🔵:

> "A un jefe de traders le rediseñé cómo gestiona a su equipo y le instalé un sistema con un asistente de IA que lo ayuda a seguirlo. Lo mismo hago con un consultorio: primero ordeno cómo atendés, y después te instalo un agente que se ocupa de los turnos y los cobros."

Lisandro sirve como prueba del producto, no del segmento ✅ (memoria del CEO, 12/11).

## 8. Choques con el playbook actual

Lo que hoy dice el playbook y la oferta nueva contradice:

- **`offer.md`, "Lo que NO vendemos":** excluye desarrollo web o programación. Los agentes son software que Yellow construye y opera.
- **`offer.md`, "Lo que NO vendemos":** excluye marketing. El catálogo tiene un agente de Marketing.
- **`offer.md`, modelos A, B y C:** la capa 1 se parece al Modelo B y la suma de las dos capas al Modelo C, pero el precio es otro (B es USD 2.000; el primer cliente paga ARS 500.000 por las dos capas).
- **`icp.md`, Tier 1:** dice que el profesional de bienestar B2C sirve para fábrica de casos y no como destino comercial. Ahora es el primer segmento.
- **`pricing.md`:** no tiene abono mensual.

## 9. Learning listo para aprobar

Se agrega a `learnings/learnings-pending.md` como LRN-025.

- **`offer.md`:** tagline y oferta principal pasan a la frase de la sección 1. Se suma la sección "Dos capas" (sección 3 de este archivo). Los modelos A, B y C quedan así: A sigue como entrada (consulta y devolución); B pasa a ser la capa 1; C pasa a ser capa 1 más capa 2. En "Lo que NO vendemos" salen programación y marketing, y entran atención clínica y automatizar sin rediseñar. El pitch de nivel 3 suma el caso Lisandro contado como en la sección 7.
- **`icp.md`:** el Tier 1 pasa a ser el segmento comercial de este año, empezando por consultorios. Se suma la señal de buen fit "hace la administración ella misma y le quita horas de atención".
- **`pricing.md`:** se suma el abono mensual por agente y el precio del primer cliente como precio de prueba.

## 10. Lo que el board tiene que decidir

1. **Aprobar la oferta en dos capas y el learning LRN-025.** Recomendado: aprobar.
2. **El abono mensual del agente.** Recomendado por defecto: USD 50 a 60 por mes por agente, en pesos al MEP del día.
3. **Qué incluyen los ARS 500.000 del primer cliente.** Recomendado por defecto: rediseño más la instalación del Administrador, y el abono empieza el mes siguiente.
