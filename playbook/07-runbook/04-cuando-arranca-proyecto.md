# Runbook — Cuando arranca un proyecto

## Trigger

Confirmaste pago del 50% inicial + tenés fecha de kickoff agendada.

## Output esperado

Reunión de kickoff completada + plan de research definido + entrevistas con clientes finales agendadas.

---

## Pasos

### Paso 1 — Preparación previa al kickoff

**Acción:** llegar al kickoff con tarea hecha.

**Archivo a abrir:** `../03-process/04-delivery.md` sección "Fase 1 — Kickoff y research".

**Tiempo estimado:** 60-90 minutos.

**Checklist:**

- [ ] Releer las notas de discovery call.
- [ ] Releer la propuesta enviada.
- [ ] Tener hipótesis preliminares de los 3 jobs.
- [ ] Preparar agenda del kickoff (60-90 min).
- [ ] Preparar lista de información que vas a pedir.
- [ ] Preparar 4-5 preguntas guía para profundizar contexto.

---

### Paso 2 — Reunión de kickoff (60-90 min)

**Acción:** reunión inicial con el cliente.

**Archivo a abrir:** `../03-process/04-delivery.md` sección "Fase 1 — Kickoff y research".

**Agenda sugerida:**

1. (10 min) Presentación del proceso completo, fechas clave.
2. (30 min) Profundizar contexto del negocio.
3. (15 min) Identificar stakeholders relevantes (clientes finales a entrevistar, empleados a involucrar).
4. (15 min) Definir KPIs candidatos a medir.
5. (10 min) Acordar próximos pasos y comunicación.

**Importante:** salir del kickoff con:
- Lista de clientes finales para entrevistar (2-3 mínimo).
- Lista de empleados/colaboradores para involucrar si los hay.
- KPIs candidatos identificados.
- Próxima reunión agendada (la de validación de research).

---

### Paso 3 — Pasar a limpio las notas del kickoff

**Acción:** dentro de las 4 horas posteriores, estructurar lo aprendido.

**Tiempo estimado:** 45 minutos.

**Output:**

Documento `clientes/[cliente]/01-kickoff-notes.md` con:
- Aprendizajes nuevos vs lo que ya sabíamos de discovery.
- Stakeholders confirmados.
- KPIs candidatos.
- Lista de próximas acciones.

---

### Paso 4 — Coordinar entrevistas con clientes finales

**Acción:** pedir al cliente los contactos y agendar.

**Tiempo estimado:** 30 minutos para coordinar.

**Texto sugerido al cliente:**

> "[nombre], como hablamos en kickoff, necesito hablar con 2-3 de tus clientes finales. ¿Podés presentarme a [tipo de cliente A] y [tipo de cliente B]? Idealmente alguien que esté contento con tu servicio + alguien que haya tenido alguna fricción.
>
> Yo me encargo de coordinar las llamadas con ellos. Lo único que necesito es que vos los pongas en cc en un email y le digas que es para mejorar tu servicio."

**Importante:** el cliente NO está presente en estas entrevistas (sesgaría las respuestas). Vos las hacés solo.

---

### Paso 5 — Preparar guion de entrevistas

**Acción:** adaptar las 5 preguntas JTBD al contexto específico.

**Archivo a abrir:** `../02-methodology/jtbd.md` sección "5 preguntas para descubrir jobs".

**Tiempo estimado:** 30 minutos.

**Preguntas base:**

1. ¿Cuándo fue la última vez que usaste/contrataste algo así?
2. ¿Qué estabas tratando de hacer ese día?
3. ¿Qué pasó antes? ¿Qué pasó después?
4. ¿Por qué elegiste este y no otro?
5. ¿Si esto no hubiera estado disponible, qué habrías hecho?

Adaptar el lenguaje al servicio específico del cliente.

---

### Paso 6 — Coordinar entrevistas con empleados (si hay)

**Acción:** si el cliente tiene equipo, agendar 1-2 sesiones con empleados clave.

**Tiempo estimado:** 30 minutos para coordinar.

**Importante:** los empleados saben cosas que el dueño no sabe (principio P9 de `../00-start-here/principles.md`). Estas entrevistas son obligatorias si hay equipo.

**Decisión if/then:**

- **Si el cliente trabaja solo** → saltar este paso.
- **Si tiene 1-5 empleados** → entrevistar al menos 1.
- **Si tiene 5+ empleados** → entrevistar 2-3 representativos.

---

## Decisiones if/then resumidas

| Situación | Acción |
|---|---|
| Cliente no quiere que hables con sus clientes finales | Recordar principio P5 (no negociable). Si insiste, declinar el proyecto. |
| Cliente solo (sin empleados) | Saltar Paso 6 |
| Cliente con equipo | Entrevistas con empleados obligatorias |
| Algún cliente final no responde a la coordinación | Pedir otro contacto al cliente |

---

## Errores comunes

### Llegar al kickoff sin haber leído las notas de discovery

Improvisás, repetís preguntas que el cliente ya respondió, parece desorganizado.

**Salida:** Paso 1 obligatorio. 60-90 minutos de prep. Sin atajos.

### Aceptar saltearse las entrevistas con clientes finales

El cliente dice "yo te cuento qué piensan, no necesitás hablar con ellos". Cedés. Pierdes la mitad del valor del proyecto.

**Salida:** principio P5 es no-negociable. Si el cliente no acepta, decline.

### Empezar a "diseñar" antes de research

Te entusiasmás con una idea y empezás a pensar el rediseño antes de hablar con clientes finales. Eso es opinión, no método.

**Salida:** research completo primero. Diseño después. En ese orden.

### Hacer entrevistas con el cliente presente

El cliente "quiere estar para ayudar". Eso sesga todas las respuestas. Los clientes finales dicen lo que el dueño quiere escuchar.

**Salida:** las entrevistas son sin el dueño presente. Sin excepciones.

---

## Próximo runbook

Cuando termines kickoff y tengas entrevistas agendadas → `05-cuando-estas-en-research.md`.
