# Agustin UX Strategy — Playbook

**Versión:** 0.3
**Última actualización:** Mayo 2026
**Owner:** Agustin (Rosario, Argentina)

---

## Qué es este repo

Single Source of Truth (SSOT) del negocio de UX Strategy de Agustin.

Cualquier persona o IA que necesite operar este negocio (vender, diagnosticar, entregar) encuentra acá todo lo que necesita saber. **No hay conocimiento operativo del negocio fuera de este repo.**

---

## Para quién es este repo

1. **Para Agustin**, como referencia operativa y memoria externa.
2. **Para asistentes de IA** (Claude, GPT) que ayuden a generar entregables.
3. **Para futuros empleados o colaboradores** que necesiten onboardearse.

Cualquiera de los tres debería poder leer este repo y operar el negocio sin pedir información adicional.

---

## Cómo está organizado (mapa rápido)

| Carpeta | Contiene | Cuándo se consulta |
|---|---|---|
| `00-start-here/` | Onboarding + roadmap de acción | Al empezar / cuando hay que decidir qué hacer |
| `01-identity/` | Quién somos, qué vendemos, a quién | Para escribir copy, para calificar prospects |
| `02-methodology/` | Frameworks técnicos (Service Design, JTBD, Good Services) | Durante diagnóstico y diseño |
| `03-process/` | Cómo se ejecuta cada fase del trabajo | Durante venta y entrega |
| `04-templates/` | Plantillas reutilizables (calls, propuestas, diagnósticos) | Para generar entregables |
| `05-examples/` | Casos reales documentados | Como referencia de profundidad esperada |
| `06-operations/` | Pricing, contratos, herramientas | Para administrar el negocio |
| `07-runbook/` | Procedimientos paso a paso por escenario | Cuando estás en el momento y necesitás "qué hago ahora" |
| `08-training/` | Plan de capacitación de 4 semanas | Para aprender la metodología o repasar |

---

## Onboarding obligatorio (en este orden)

Si sos nuevo en el repo (humano o IA), leé estos archivos en este orden:

1. `00-start-here/onboarding.md` — qué es este negocio en 5 minutos.
2. `00-start-here/principles.md` — los principios no-negociables que rigen todo lo que hacemos.
3. `01-identity/offer.md` — qué vendemos exactamente.
4. `01-identity/icp.md` — a quién le vendemos.
5. `02-methodology/service-design.md` — el primer pilar metodológico.
6. `02-methodology/jtbd.md` — el segundo pilar metodológico.
7. `05-examples/case-psicologa.md` — caso completo de referencia.

Después de eso, el resto del repo se consulta por necesidad. Para navegación rápida una vez familiarizado con el repo, ver `INDEX.md`.

---

## Estado actual del negocio

**Servicio:** definido y documentado.
**Pricing:** definido (ver `06-operations/pricing.md`).
**Caso de referencia:** 1 (psicóloga, en ejecución como caso piloto real).
**Clientes pagos:** 0.
**Próximo hito:** terminar playbook v0.2 → empezar venta con primer cliente real.

Para ver qué hay que hacer y cuándo, consultar `00-start-here/roadmap.md`.

---

## Reglas de mantenimiento del repo

1. **SSOT estricto.** Cada concepto vive en un solo archivo. Otros archivos lo referencian con link, no lo duplican.
2. **Onboarding-ready.** Cualquier archivo nuevo debe ser comprensible por alguien que lee el repo por primera vez.
3. **Acción separada de conocimiento.** El conocimiento del negocio vive en el playbook. Las acciones a tomar viven en `00-start-here/roadmap.md`. No mezclar.
4. **Versionar.** Cuando un archivo cambia significativamente, actualizar el changelog al final del archivo y la versión en este README.

---

## Changelog

- **v0.3 (mayo 2026):** integración de Good Services (Lou Downe). Carpeta nueva `07-runbook/` con procedimientos paso a paso por escenario. Carpeta nueva `08-training/` con plan de capacitación de 4 semanas.
- **v0.2 (mayo 2026):** reestructuración con principios SSOT y onboarding-ready. Pricing definido. Roadmap separado del playbook.
- **v0.1 (mayo 2026):** primera versión del playbook con metodología, caso de referencia y plantillas.

###prompt para el proximo paso

Quiero reestructurar este repo (playbook de Yellow) para que funcione como un sistema de aprendizaje continuo, inspirado en el harness de agentes long-running de Anthropic (initializer + coding agent con progress file).

CONTEXTO
- Yellow es mi empresa de service design. Este repo es el SSOT de mi metodología: service design by doing, jobs to be done, etc.
- Hoy te clono y te paso entrevistas de cliente para que me devuelvas diagnóstico y plan de implementación basados en el playbook.
- Problema: cuando aprendo cosas nuevas o te corrijo en una sesión, ese conocimiento se pierde. El playbook queda desactualizado.

OBJETIVO
Armar una estructura de repo + reglas en CLAUDE.md que separen tres capas:
1. Playbook estable (solo se modifica con mi aprobación explícita).
2. Casos (un folder por entrevista de cliente, con inputs y outputs).
3. Aprendizajes pendientes (append-only, capturados automáticamente al final de cada caso, revisados y consolidados al playbook por mí).

QUE QUIERO QUE HAGAS AHORA

Paso 1 — Diagnóstico
- Listá la estructura actual del repo y leé los archivos principales del playbook.
- Identificá qué piezas ya tengo y qué falta para soportar la estructura propuesta.
- No modifiques nada todavía. Mostrame el diagnóstico y esperá luz verde.

Paso 2 — Propuesta (después de mi OK)
- Proponé estructura concreta de carpetas: playbook/, cases/, learnings/.
- Proponé el formato de:
  - cases/<slug-cliente>/ con: transcript.md, diagnostico.md, plan.md, case-notes.md
  - learnings/learnings-pending.md (append-only, formato: [fecha] [caso] [tipo: refinamiento|gap|contraejemplo] [descripción] [implicancia para playbook])
  - playbook/quality-checklist.json (criterios de calidad que todo diagnóstico debe cumplir, en JSON porque los modelos lo respetan más que markdown)
- Proponé el contenido de CLAUDE.md con reglas duras:
  - Nunca modificar playbook/ directamente. Los cambios se proponen como diff en learnings-pending.md y requieren mi aprobación.
  - Antes de diagnosticar un caso: leer playbook/ Y learnings/learnings-pending.md (los pendientes son conocimiento vigente).
  - Al terminar un caso: escribir obligatoriamente en learnings-pending.md cualquier insight, corrección que te di durante la sesión, gap del playbook, o contraejemplo. Si no detectaste nada, dejarlo explícito.
  - Auto-evaluar el diagnóstico contra quality-checklist.json antes de entregármelo.
- Proponé también un prompt de consolidación separado: cuando yo lo dispare, leés learnings-pending.md + playbook actual y me proponés un diff concreto al playbook (qué sección tocar, qué agregar, qué reformular). Yo apruebo el commit.
- Mostrame todo como propuesta, no apliques cambios.

Paso 3 — Implementación (después de mi OK al paso 2)
- Aplicá la reestructuración en commits chicos y descriptivos.
- Si hay contenido del playbook actual que conviene reorganizar para encajar en la nueva estructura, mostrame el plan de movimiento antes de tocar archivos.
- Al final, dejame un README breve que explique cómo usar el repo en el día a día (cómo arrancar un caso nuevo, cómo correr la consolidación).

REGLAS DURANTE ESTA SESIÓN
- Trabajá incremental, paso por paso. No intentes one-shot todo.
- Después de cada paso, parás y esperás mi confirmación.
- Si encontrás ambigüedad, preguntá antes de asumir.
