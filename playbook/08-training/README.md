# Capacitación: Plan de 4 semanas

Plan de aprendizaje para dominar la metodología Yellow a nivel operativo. **Autocontenido por diseño**: toda la teoría que necesitás para graduarte vive dentro de los 4 archivos de esta carpeta.

---

## Premisas

- **4 semanas, 1 hora por día = ~28 horas totales.**
- Formato: cada día, un concepto + un ejercicio práctico.
- **El training reproduce intencionalmente material del playbook** para que sea autocontenido. Esta es una excepción explícita al SSOT estricto del repo, justificada por motivo pedagógico: una persona en capacitación no debería ir saltando entre archivos. Si hay drift entre el training y el resto del playbook, prevalece la versión de `playbook/02-methodology/`, `playbook/03-process/` y `playbook/00-start-here/principles.md`.

---

## Estructura del plan

| Semana | Foco | Output al final |
|---|---|---|
| **Semana 1** | Fundamentos: la Tesis + Service Design (10 principios) + JTBD en sus 2 modelos (Jobs-As-Progress y Jobs-As-Activities) + meta-patrón + Good Services (15 principios) | Explicar la metodología Yellow completa en 10 min sin notas |
| **Semana 2** | Discovery & research: discovery call (5 preguntas, 35 min) + Switch Interview completa aplicada a un servicio real | Notas estructuradas de 2 Switch Interviews + hipótesis del meta-patrón |
| **Semana 3** | Diagnóstico & sistema: blueprint + análisis JTBD + Good Services + prototipo manual + spec del sistema operativo | Diagnóstico completo + spec del sistema (no documento) |
| **Semana 4** | Operación end-to-end: prospect → discovery → propuesta → cierre → kickoff del delivery + consolidación de learnings | Simulación full del flujo + criterio para operar caso real |

---

## Cómo usarlo

1. Cada día abrís el archivo de la semana correspondiente.
2. Hacés el ejercicio del día. No saltés ejercicios.
3. Al final de cada semana, completás el "Self-check".
4. No avanzás de semana hasta haber completado el self-check con honestidad.

---

## Reglas

- **Si un día te perdés**, hacelo al día siguiente. No saltees.
- **Si una semana te lleva más**, alargá. Es plan, no carrera.
- **Si te aburre algo**, eso es señal de que ya lo dominás. Saltá ese ejercicio y profundizá en otro.
- **Si algo no te queda claro**, anotalo. Al final de la semana, ese es tu material para volver a las secciones del playbook que profundizan el tema (cuando ya te graduaste y necesitás referencia, no antes).

---

## Archivos

- `semana-1-foundations.md` — fundamentos teóricos completos (Tesis + SD + JTBD + Good Services + meta-patrón)
- `semana-2-discovery-research.md` — discovery call + Switch Interview aplicada
- `semana-3-diagnostico-sistema.md` — diagnóstico completo + spec del sistema operativo
- `semana-4-operacion.md` — flujo end-to-end + simulación

---

## Después del plan

Al terminar las 4 semanas, deberías poder:

- Explicar Service Design (10 principios), JTBD (2 modelos: Jobs-As-Progress y Jobs-As-Activities), Good Services (15 principios), el meta-patrón y la Tesis sin notas.
- Hacer un blueprint de cualquier servicio en 1-2 horas.
- Conducir una discovery call de 35 min con las 5 preguntas + ancla de Fase B.
- Conducir una Switch Interview de 60-90 min con timeline de 5 hitos y técnica de "rewind".
- Identificar el meta-patrón ("qué regala, qué cobra") de un cliente en una conversación.
- Escribir un diagnóstico completo con la profundidad del caso de la psicóloga.
- Diseñar la spec de un sistema operativo + prototipo manual para validarlo antes de construir.
- Operar el runbook entero sin saltarte pasos.

**El criterio de "listo" no es 100% confianza** — es 60-70%. El resto se construye con el primer cliente real. Si seguís sintiendo inseguridad después de 4 semanas, el repo tiene los archivos de profundización para referencia.

---

## Changelog

- **2026-05-13 (v0.3):** reescritura completa. Training reorganizado en torno a la metodología actualizada (3 escuelas JTBD, meta-patrón, P0 sistemas operativos, Switch Interview completa, 5 preguntas de discovery, 35 min). Declarado oficialmente autocontenido — excepción al SSOT por motivo pedagógico. Eliminada sección "Material de lectura complementario" (la teoría va inline en cada semana). Aprobado directo por owner en sesión.
- **Mayo 2026:** v0.2 versión inicial.
