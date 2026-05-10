# Runbook: Cuando estás en research

## Trigger

Tenés entrevistas agendadas con clientes finales y/o empleados. Estás en la fase de levantamiento de información del proyecto.

## Output esperado

- Notas estructuradas de cada entrevista.
- Service blueprint del servicio actual.
- Identificación preliminar de pain points.
- Hipótesis validadas o refutadas de los 3 jobs.

---

## Pasos

### Paso 1: Antes de cada entrevista (5 min cada una)

**Acción:** prepararte para la entrevista específica.

**Checklist:**

- [ ] Leer brief del entrevistado (rol, relación con el cliente).
- [ ] Tener guion de preguntas a mano.
- [ ] Cargar batería del dispositivo de grabación.
- [ ] Pedir permiso para grabar al inicio.

---

### Paso 2: Conducir la entrevista (45-60 min)

**Acción:** entrevistar al cliente final o empleado.

**Archivo a abrir:** `../02-methodology/jtbd.md` sección "5 preguntas para descubrir jobs".

**Estructura sugerida:**

1. (5 min) Presentación: quién sos, para qué es la conversación.
2. (40 min) Las 5 preguntas JTBD + profundización con "¿por qué?".
3. (10 min) Cierre + agradecimiento.

**Reglas:**

- **Anotá frases textuales.** No interpretadas.
- **Silencio es tu herramienta.** Cuando alguien responde corto, no llenes el espacio.
- **Profundizá con "¿por qué?" 3-4 veces.** No te quedes en la primera respuesta.
- **NO promuevas tu solución.** Estás investigando, no vendiendo.

---

### Paso 3: Pasar a limpio cada entrevista (30 min cada una)

**Acción:** dentro de las 4 horas posteriores a la entrevista, estructurar las notas.

**Output:** documento `clientes/[cliente]/01-research/entrevista-[nombre].md` con:

- Datos del entrevistado.
- Frases textuales clave.
- Job dominante hipotetizado.
- Struggling moments identificados.
- Insights sorprendentes.

**Importante:** hacelo el mismo día. Después se pierden los detalles.

---

### Paso 4: Construir service blueprint del servicio actual

**Acción:** mapear cómo funciona el servicio hoy.

**Archivo a abrir:** `../02-methodology/service-design.md` sección "P3. El service blueprint es el plano del servicio".

**Tiempo estimado:** 4-6 horas.

**Output:** blueprint con cuatro filas:

1. Acciones del cliente.
2. Frontstage.
3. Backstage.
4. Procesos de soporte.

**Herramienta sugerida:** Figma o Miro.

---

### Paso 5: Identificar pain points

**Acción:** para cada touchpoint del blueprint, evaluar si hay pain.

**Archivo a abrir:** `../02-methodology/service-design.md` sección "P10. La calidad se define por la peor parte".

**Tiempo estimado:** 2-3 horas.

**Para cada touchpoint, preguntarse:**

- ¿El cliente final pierde valor acá?
- ¿El proveedor pierde tiempo / energía / margen acá?
- ¿Hay un mismatch entre lo que el cliente espera y lo que recibe?

**Output:** lista de 4-7 pain points principales, cada uno con:

- Descripción.
- Marcador ✅ verificado / 🔵 hipótesis / ❓ gap.
- Cliente o proveedor afectado.
- Severidad (alta / media / baja).

---

### Paso 6: Aplicar checklist de Good Services

**Acción:** chequear el servicio actual contra los 15 principios.

**Archivo a abrir:** `../02-methodology/good-services.md`.

**Tiempo estimado:** 1-2 horas.

**Para cada principio (1 al 15):**

- ¿Lo cumple? (Sí / Parcial / No)
- ¿Cómo lo verifiqué? (qué evidencia)
- Si no lo cumple: ¿es un pain point relevante para el job del cliente final?

**Output:** complementa la lista de pain points del Paso 5 con principios fallados.

---

### Paso 7: Análisis JTBD consolidado

**Acción:** sintetizar lo aprendido en research sobre los jobs del cliente final.

**Archivo a abrir:** `../02-methodology/jtbd.md`.

**Tiempo estimado:** 2-3 horas.

**Output:**

- Job dominante en formato Job Story (ahora ✅ verificado, no 🔵).
- Functional / Emotional / Social jobs confirmados.
- Contra qué compite realmente (3-5 alternativas).
- Struggling moments principales.

---

### Paso 8: Reunión de validación con el cliente

**Acción:** reunión de 60 min con el cliente para validar hallazgos.

**Tiempo estimado:** 60 min reunión + 30 min preparación.

**Agenda:**

1. (5 min) Recap del proceso.
2. (15 min) Service blueprint actual, ¿refleja la realidad?
3. (20 min) Pain points identificados, ¿hace sentido?
4. (15 min) Análisis JTBD, ¿el job dominante captura su realidad?
5. (5 min) Próximos pasos.

**Importante:** validar antes de pasar a fase de propuesta de rediseño. Si hay discrepancias grandes, hacer otra ronda de research.

---

## Decisiones if/then resumidas

| Situación | Acción |
|---|---|
| Entrevistado da respuestas muy cortas | Dejar silencio. Si sigue corto, profundizar con "contame más" |
| Los pain points difieren entre clientes finales | Anotar todos. La diferencia es información valiosa |
| El cliente no valida el blueprint | Volver a research. NO pasar a propuesta |
| Aparece un pain point que no estaba en hipótesis | Buena señal. Profundizar |
| El job dominante hipotetizado se confirma 100% | Sospechá. Probablemente sesgo de confirmación. Volvé a leer las entrevistas |

---

## Errores comunes

### Quedarse en la primera respuesta del entrevistado

Decís "ok" y pasás a la siguiente pregunta. Te quedaste con el síntoma, no llegaste a la causa.

**Salida:** profundizar con "¿y por qué?" 3-4 veces antes de pasar a la siguiente pregunta.

### Hacer todas las entrevistas y recién pasar a limpio al final

Pasaron 5 días, hiciste 4 entrevistas, las anotás todas juntas. Perdiste detalles importantes.

**Salida:** pasar a limpio cada entrevista el mismo día.

### Construir el blueprint solo (sin validar con cliente)

Tu interpretación puede estar mal. El cliente conoce su servicio mejor que vos en la primera vuelta.

**Salida:** Paso 8 obligatorio. Validar antes de seguir.

### Diseñar el rediseño antes de validar el diagnóstico

Te entusiasmás con una solución y empezás a "lo que vamos a hacer es...". Saltaste el paso de validar el problema.

**Salida:** primero validar diagnóstico (Paso 8). Después diseñar (siguiente runbook).

### Tomar todas las opiniones del cliente como verdad

El cliente puede estar equivocado sobre su propio servicio. Los empleados saben cosas que el dueño no sabe.

**Salida:** las entrevistas con clientes finales y empleados son las que mandan. La opinión del dueño es UN dato, no LA verdad.

---

## Próximo runbook

Cuando hayas validado el diagnóstico → `06-cuando-armas-diagnostico.md`.
