# AI Workflow

**SSOT** del flujo de trabajo con asistentes de IA.

Define qué hace la IA, qué hace Agustin, y cómo se conectan.

---

## Premisa fundamental

La IA es un **asistente**, no un reemplazo. Acelera la entrega y mantiene consistencia. NO toma decisiones estratégicas, NO vende, NO atiende clientes.

**Regla:** human-in-the-loop. Cualquier output de la IA pasa por revisión y curaduría de Agustin antes de llegar al cliente.

---

## Qué hace la IA

### Generación de borradores

A partir de inputs estructurados, generar primer borrador de:

- Notas estructuradas de discovery call (a partir de notas crudas).
- Diagnóstico siguiendo `../04-templates/diagnosis-template.md`.
- Propuesta siguiendo `../04-templates/proposal-template.md`.
- Email de cierre, follow-up, pedido de testimonio, pedido de referidos.
- Service blueprint inicial a partir de notas de research.
- Análisis JTBD a partir de entrevistas a clientes finales.

### Aplicación de frameworks

Aplicar de manera consistente:

- Los 10 principios de Service Design (`../02-methodology/service-design.md`).
- El framework JTBD (`../02-methodology/jtbd.md`).
- El vocabulario técnico (`../02-methodology/glossary.md`).
- Los principios no-negociables (`../00-start-here/principles.md`).

### Mantenimiento de consistencia

- Mismo tono y vocabulario en todos los entregables.
- Misma estructura en diagnósticos.
- Misma profundidad esperada (referencia: `../05-examples/case-psicologa.md`).

### Identificación de gaps

- Marcar información faltante con ❓.
- Distinguir hipótesis (🔵) de hechos verificados (✅).
- Sugerir preguntas de seguimiento al cliente.

---

## Qué NO hace la IA

### Interacción con clientes

- NO hace discovery calls.
- NO presenta propuestas.
- NO presenta diagnósticos.
- NO maneja objeciones en vivo.
- NO cobra.
- NO firma contratos.

### Decisiones estratégicas

- NO decide qué pain point priorizar.
- NO decide qué cliente tomar y cuál declinar.
- NO decide pricing fuera del rango establecido.
- NO decide cuándo subir precios.

### Co-creación

- NO sustituye sesiones con clientes finales (principio P5).
- NO sustituye reuniones con empleados del cliente (principio P9).
- NO interpreta señales no-verbales del cliente.

---

## Setup recomendado

### Plataforma

**Recomendado:** Claude Projects.

**Por qué:** permite cargar el playbook completo como contexto persistente. La IA tiene acceso a toda la metodología y plantillas en cada conversación.

**Alternativa:** Custom GPT en ChatGPT con todo el playbook subido como knowledge base.

### Configuración

System prompt sugerido:

```
Sos asistente de Agustin, UX Strategist. Tu base de conocimiento es el playbook completo cargado en este proyecto.

REGLAS NO-NEGOCIABLES:

1. SSOT estricto: nunca dupliques información que está en otro archivo. Linkeá.
2. Honestidad metodológica: marcá ✅ verificado / 🔵 hipótesis / ❓ gap.
3. Vocabulario del glossary: nunca uses sinónimos genéricos para términos técnicos.
4. Profundidad de referencia: el caso de la psicóloga es el espejo de cualquier output.
5. NO inventes información del cliente. Si falta, marcalo como gap.
6. NO tomes decisiones estratégicas. Generá opciones para que Agustin elija.
7. Tono argentino, directo, sin buzzwords.
8. Si una decisión contradice un principio, no la ejecutes y marcala para revisión.

FLUJO TÍPICO:

Cuando Agustin te pase notas crudas de una discovery call:
- Estructurar siguiendo ../04-templates/discovery-notes-template.md.
- Calificar prospect contra ICP.
- Hipotetizar los 3 jobs y struggling moment.
- Marcar gaps de información.

Cuando Agustin te pida generar diagnóstico:
- Seguir ../04-templates/diagnosis-template.md.
- Aplicar frameworks de ../02-methodology/.
- Mantener profundidad de ../05-examples/case-psicologa.md.
- Marcar todo con íconos de honestidad metodológica.

Cuando Agustin te pida generar propuesta:
- Seguir ../04-templates/proposal-template.md.
- Pricing exacto desde ../06-operations/pricing.md.
- Devolver palabras del cliente sin parafrasear.
- Una sola opción de modelo, no tres.
```

---

## Flujos de trabajo concretos

### Flujo 1 — Post discovery call

**Input:** notas crudas (texto, audio transcripto, video transcripto).

**Pasos:**

1. Pegar las notas en Claude.
2. Pedir: "Generá las notas estructuradas siguiendo el template, calificá el prospect, hipotetizá los 3 jobs."
3. Revisar y curar.
4. Decidir si avanzar con propuesta.

**Tiempo Agustin:** 10-15 minutos de revisión.
**Tiempo sin IA:** 1-2 horas.

### Flujo 2 — Generación de propuesta

**Input:** notas estructuradas de discovery + decisión de modelo (A/B/C).

**Pasos:**

1. Pegar las notas en Claude.
2. Pedir: "Generá borrador de propuesta para Modelo [X] siguiendo el template."
3. Revisar y refinar (especialmente sección "Lo que creo que está pasando").
4. Validar pricing.
5. Enviar al cliente.

**Tiempo Agustin:** 30-45 minutos.
**Tiempo sin IA:** 2-3 horas.

### Flujo 3 — Generación de diagnóstico

**Input:** notas de research, blueprint inicial, entrevistas a clientes finales.

**Pasos:**

1. Compartir todo el material con Claude.
2. Pedir: "Generá borrador de diagnóstico siguiendo el template y la profundidad del caso de la psicóloga."
3. Revisar y refinar (es el documento más importante, dedicar tiempo).
4. Validar con el cliente antes de finalizar.

**Tiempo Agustin:** 4-6 horas de revisión.
**Tiempo sin IA:** 12-15 horas.

### Flujo 4 — Comunicaciones rutinarias

**Input:** contexto del cliente + tipo de comunicación necesaria.

**Pasos:**

1. Pedir a Claude: "Generá [email de cierre / follow-up / pedido de testimonio] para [cliente X]."
2. Revisar tono.
3. Personalizar últimos detalles.
4. Enviar.

**Tiempo Agustin:** 5-10 minutos.

---

## Validación periódica

Cada 5 outputs generados, revisar:

- ¿La IA está manteniendo el vocabulario del glossary?
- ¿Está marcando bien los íconos de certeza?
- ¿La profundidad es la esperada?
- ¿Aparecen patrones de error que requieren ajustar el system prompt?

Si aparecen problemas recurrentes, actualizar este archivo y el system prompt.

---

## Lo que NO se puede automatizar (por ahora)

Por más que la IA mejore, estos pasos son irreductiblemente humanos:

1. **Detectar lo que el cliente NO dice.** Lectura corporal, silencios significativos, omisiones reveladoras.
2. **Construir confianza.** Solo se construye persona-a-persona.
3. **Cobrar.** Aunque la factura la genere un sistema, la decisión de cobrar es humana.
4. **Decidir cuándo declinar un cliente.** Requiere criterio acumulado.
5. **Co-crear con clientes finales.** Requiere presencia, empatía, improvisación.
6. **Presentar el diagnóstico.** Requiere defender hallazgos en vivo.

Estas tareas son el 80% del valor cobrado. La IA libera tiempo de las tareas mecánicas para que Agustin se concentre en estas.

---

## Changelog del archivo

- **Mayo 2026:** versión inicial v0.2.
