# Plantilla: Plan de implementación

**SSOT** de la plantilla del plan. Es el `plan.md` de cada caso (exigido por `CLAUDE.md`). Se deriva de las secciones 7-10 del diagnóstico y las desarrolla a nivel ejecutable.

Para el proceso, ver `../03-process/04-delivery.md` Fase 3.

---

## Estructura obligatoria

```markdown
# Plan: [Nombre del cliente / proyecto]

**Cliente:** [Nombre]
**Fecha:** [Fecha]
**Deriva de:** diagnostico.md [versión / fecha]
**Modelo:** [B / C]

---

## 1. Síntesis del diagnóstico

[3-5 líneas: diagnóstico central + los 2-3 drivers priorizados del Value Map donde el rediseño debe ganar. Puntero al diagnóstico completo, sin repetirlo.]

---

## 2. Intervenciones

### 1. [Nombre técnico de la intervención]

- **Qué:** [descripción concreta]
- **Cadena causal a WTP:** [pain point → driver del Value Map → movimiento de WTP → captura de valor]
- **Cómo se ve:** [experiencia del cliente final post-rediseño]
- **Prioridad:** [heredada del driver del Value Map]
- **Costo de fix:** [bajo / medio / alto]
- **Plazo estimado:** [días / semanas]
- **Recursos:** [lo hace el profesional / requiere proveedor / requiere build Yellow]
- **Dependencias:** [intervenciones previas necesarias, o ninguna]

[Repetir por intervención. Mínimo 3, máximo 7, en orden de prioridad del Value Map.]

---

## 3. Roadmap de implementación

| Orden | Intervención | Plazo | Responsable | Depende de |
|---|---|---|---|---|

---

## 4. Spec del sistema operativo

[Puntero al system-spec del caso (siguiendo `system-spec-template.md`). Si el caso cierra en Modelo B, este es el documento con el que el cliente puede cotizar el build.]

---

## 5. KPIs y baseline

| Métrica | Baseline actual | Hipótesis a 90 días | Cómo se mide |
|---|---|---|---|

[Mínimo 3 KPIs medibles. Baseline sin dato disponible se marca "a medir en primer mes".]

---

## 6. Riesgos

- **Riesgo:** [descripción] → **Mitigación:** [cómo se aborda]

---

## 7. Próximo paso

[Acción concreta, responsable, fecha. Si el caso es Modelo B: la oferta de ejecución (Fases 4-5) cotizada por alcance.]
```

---

## Reglas para usar la plantilla

- Cada intervención conserva su cadena causal a WTP escrita (checks `causal-chain-wtp` e `intervention-pain-link`).
- El orden lo da el Value Map, sin scoring paralelo (check `single-prioritization`).
- Largo total: 3-8 páginas. El plan ejecuta; el argumento vive en el diagnóstico.
- Honestidad metodológica: ✅ 🔵 ❓ donde aplique.

---

## Changelog del archivo

- **2026-06-10 (v0.1):** versión inicial. Consolidación de LRN-017 (la plantilla del plan era exigida por CLAUDE.md y faltaba). Aprobado por el owner para consolidación en bloque (sesión 2026-06-10).
