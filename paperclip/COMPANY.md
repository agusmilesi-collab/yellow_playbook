---
name: Yellow
description: Consultora de rediseño de servicios para profesionales independientes, operada como empresa autónoma de IA
slug: yellow
schema: agentcompanies/v1
version: 0.1.0
authors:
  - name: Agustín Milesi
homepage: https://yellow.com.ar
tags:
  - rediseño-de-servicios
  - consultoría
  - empresa-autónoma
goals:
  - Cerrar 6 casos pagos de rediseño de servicios en 12 meses dentro del ICP Tier 1, con NPS post-entrega ≥ 8
---

# Yellow

Borrador de paquete de empresa para Paperclip, conforme a la spec `agentcompanies/v1`. El playbook completo del negocio vive en `../playbook/` y debe leerse como SSOT antes de operar.

## Misión

Liberamos a los profesionales independientes de competir por precio, rediseñando la experiencia que entregan.

La misión es el "para qué" de la empresa y vive acá (y en `description:` del frontmatter), no en el campo `goals:`. El campo `goals:` es para el norte operacional que el CEO agente puede traducir a estrategia y tasks.

## Goal primario

> Cerrar 6 casos pagos de rediseño de servicios en 12 meses dentro del ICP Tier 1, con NPS post-entrega ≥ 8.

Composición:

- **Outcome:** casos pagos de rediseño de servicios
- **Cantidad:** 6
- **Timeframe:** 12 meses
- **Filtro:** ICP Tier 1 (ver `../playbook/01-identity/icp.md`)
- **Constraint de calidad:** NPS post-entrega ≥ 8

El NPS está en la misma frase para que el CEO agente no canjee calidad por velocidad.

## Goals secundarios (agregar después desde la sección Goals)

Estos quedan fuera del modal inicial. Una vez que el goal primario esté corriendo y se vea cómo el CEO agente lo opera, se suman desde la UI de Paperclip:

1. Consolidar al menos 1 learning al playbook por caso cerrado (cierra el loop de aprendizaje del sistema)
2. Operar con 100% de checks del quality-checklist aprobados antes de cada entregable
3. (Si en algún momento el lab público pasa de consecuencia a goal explícito) Publicar al menos 3 casos como contenido del lab

## Modelo operativo

Yellow opera sin personal fijo. Agustín actúa como editor en jefe: aprueba contrataciones de agentes, califica prospects humanos, aprueba entregables al cliente y aprueba cambios al playbook. El resto del trabajo lo ejecutan agentes con roles definidos.

Es deliberado: Yellow es a la vez la consultora que vende rediseño de servicios y la demostración del método aplicado sobre sí misma.

## Organigrama

Pendiente. Por definir: roles de agentes, líneas de reporte, presupuestos mensuales y heartbeats.

Referencias para el diseño del organigrama:

- `../playbook/03-process/` define las fases operativas (discovery, propuesta, cierre, entrega, handoff)
- `../playbook/04-templates/` define los entregables producidos por cada fase
- `../playbook/quality-checklist.json` define los criterios de aceptación de cada entregable
- `../CLAUDE.md` define el contrato operativo no-negociable (R1-R6) que cualquier agente debe respetar

## Referencias internas

- `../playbook/` SSOT del know-how operativo, metodología, identidad, pricing y procesos
- `../CLAUDE.md` contrato operativo entre agentes y el repo
- `../playbook/quality-checklist.json` criterios de calidad para auto-evaluación
- `../cases/` casos reales en curso o cerrados
- `../learnings/learnings-pending.md` aprendizajes pendientes de consolidar

## Estado

Borrador inicial. No corre todavía en una instancia de Paperclip. Próximos pasos sugeridos:

1. Definir organigrama de agentes (CEO + Head of Delivery + sub-roles)
2. Decidir presupuestos mensuales por agente
3. Definir heartbeats y triggers por rol
4. Definir matriz de aprobaciones requeridas
5. Hacer un dry-run con un caso real antes de cortar de manos al sistema
