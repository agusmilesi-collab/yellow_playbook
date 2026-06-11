# Plantilla: Diagnóstico

**SSOT** de la plantilla de diagnóstico. Toda la entrega de un proyecto sigue esta estructura.

Para el proceso de cómo se construye el diagnóstico, ver `../03-process/04-delivery.md`.
Para un caso completo aplicado, ver `../05-examples/case-psicologa.md`.

---

## Estructura obligatoria

```markdown
# Diagnóstico: [Nombre del cliente / proyecto]

**Cliente:** [Nombre, profesión, especialidad]
**Fecha:** [Fecha]
**Versión:** [Borrador / Final]

---

## 1. Contexto del cliente

[2-3 párrafos descriptivos. Quién es, qué hace, hace cuánto, qué tamaño tiene su operación. Sin juicios todavía.]

---

## 2. Service blueprint actual

### Customer journey (cronológico)

[Describir el journey desde el primer contacto del cliente final con el servicio hasta el cierre. En forma de flecha o lista numerada.]

### Capas del blueprint

| Acciones del cliente | Frontstage | Backstage | Procesos de soporte |
|---|---|---|---|
| [qué hace, ve, siente] | [lo que el cliente ve del trabajo] | [lo invisible al cliente] | [sistemas, herramientas] |

[Llenar para cada paso del journey.]

---

## 3. Job-to-be-Done del cliente final

### Job dominante

> *"Cuando [SITUACIÓN], quiero [MOTIVACIÓN], para poder [RESULTADO ESPERADO]."*

### Los tres jobs en juego

- **Functional job:** [qué quiere lograr concretamente]
- **Emotional job:** [cómo quiere sentirse]
- **Social job:** [cómo quiere ser percibido por otros]

### Contra qué compite realmente

[Cualquier alternativa que cumpla el mismo job. Listar 3-5. Estas alternativas son el input del eje de brecha del Value Map (sección 4).]

---

## 4. Value Map

Único mecanismo de priorización del diagnóstico. Ver `../02-methodology/value-based-strategy.md`.

### Value drivers priorizados

| # | Driver (lo que le importa al cliente final) | Importancia | Brecha vs alternativa que consideró | Tema |
|---|---|---|---|---|
| 1 | [driver] | [alta/media/baja] | [grande/media/chica] | [grupo] |
| 2 | [...] | [...] | [...] | [...] |

[Ordenar de mayor a menor prioridad. Segmentar si hay más de un segmento de cliente final.]

### Lectura del stick

[Dónde se está creando valor (WTP) y dónde se está fugando la captura: qué se regala, qué se cobra. Conecta con el meta-patrón.]

---

## 5. Pain points identificados

[Derivados del Value Map + estado de ejecución de los touchpoints. Ordenados por la prioridad del driver al que sirven, no por criterio propio.]

### 1. [Nombre del pain point en lenguaje técnico] [✅ / 🔵 / ❓]

[Descripción del problema. Qué pasa, dónde se traba, qué pierde el cliente final por esto. A qué driver priorizado del Value Map afecta.]

### 2. [Nombre del pain point] [✅ / 🔵 / ❓]

[Descripción.]

[Continuar. Mínimo 3, máximo 7 pain points.]

---

## 6. Diagnóstico central

[Un párrafo punzante que sintetiza la causa raíz por encima de los síntomas. Molde en afirmativo, regla F de `../02-methodology/style-guide.md`.]

> *"[Síntoma] es la parte visible. La causa está en [causa raíz]. Por eso [consecuencia visible]. Y por eso [consecuencia invisible que afecta el negocio]."*

---

## 7. Propuesta de rediseño

### 1. [Nombre técnico de la intervención]

**Qué:** [descripción concreta del cambio]
**Cadena causal a WTP:** [a qué pain point responde → a qué driver del Value Map → cómo eso mueve la WTP → cómo habilita captura de valor. Cadena escrita, no implícita.]
**Cómo se ve:** [cómo lo experimentaría el cliente final post-rediseño]

### 2. [Nombre técnico]

[...]

[Continuar. Mínimo 3, máximo 7 intervenciones.]

---

## 8. Hipótesis de impacto

| Métrica | Hipótesis | Cómo se mide |
|---|---|---|
| [KPI 1] | [Sube / baja X%] | [Método de medición] |
| [KPI 2] | [...] | [...] |

---

## 9. Riesgos y consideraciones

- **Riesgo 1:** [descripción] → **Mitigación:** [cómo se aborda]
- **Riesgo 2:** [...]

---

## 10. Próximos pasos sugeridos

1. [Acción concreta], [responsable], [plazo]
2. [...]

---

## 11. Gaps de información

- [Información faltante 1]
- [Información faltante 2]
```

---

## Reglas para usar la plantilla

### Profundidad

- **Mínimo:** 8 páginas (en formato word/pdf) o equivalente.
- **Máximo:** 25 páginas. Más allá está sobreescrito.
- **Tono:** profesional pero directo. Sin floritura.

### Lenguaje

- Vocabulario del `../02-methodology/glossary.md`.
- Evitar buzzwords vacíos.
- Cada término técnico aporta precisión, no decoración.

### Honestidad metodológica

Marcar explícitamente cada afirmación según `../02-methodology/glossary.md`:

- ✅ **Verificado:** información que el cliente confirmó.
- 🔵 **Hipótesis:** lo que el consultor infirió pero falta validar.
- ❓ **Gap:** lo que aún no se sabe.

### Estructura modular

Si el cliente quiere solo el diagnóstico (sin propuesta), entregar las secciones 1-6.
Si quiere el plan completo, entregar todo.
Si quiere solo la sesión exploratoria (Modelo A), entregar 1-4 + brief de 6.

---

## Notas para la IA

Cuando generes un borrador siguiendo esta plantilla:

1. **No inventes datos del cliente.** Si la información no está en las notas, marcalo como gap.
2. **Diferenciá hipótesis de hechos.** Usá los íconos ✅ 🔵 ❓.
3. **Aplicá los frameworks** de `../02-methodology/`, no opinión.
4. **Usá el vocabulario exacto** del glossary, no sinónimos.
5. **Mantené la profundidad** de referencia de `../05-examples/case-psicologa.md`.
6. **No sobreescribas.** Si una sección no aplica al caso, dejala vacía con "No aplica" en lugar de inventar contenido.
7. **Sugerí preguntas de seguimiento** al final para que Agustin pueda profundizar con el cliente en próxima sesión.

---

## Changelog del archivo

- **2026-06-10 (v0.4):** consolidación de LRN-015. Molde del diagnóstico central (sección 6) reescrito en afirmativo: la plantilla prescribía la fórmula de negación-afirmación que la regla F prohíbe (el origen del error estaba en el playbook, confirmado en el caso Lisandro). Aprobado por el owner para consolidación en bloque (sesión 2026-06-10).
- **2026-05-18 (v0.3):** consolidación de LRN-004 (sesión de refinamiento de KB, E1). Sección nueva **4. Value Map** entre JTBD y pain points. Renumeración: la plantilla pasa de 10 a **11 secciones**. Pain points (ahora 5) se derivan del Value Map + estado de ejecución, sin criterio de priorización propio. Intervenciones (ahora 7) reemplazan "Por qué" por **"Cadena causal a WTP"**. "Estructura modular" reajustada a la nueva numeración. Acoplado a `value-based-strategy.md` y al check `diagnostic-structure` de `quality-checklist.json` (10 → 11). Aprobado por el owner para consolidación en bloque (sesión 2026-05-18).
- **Mayo 2026:** versión inicial v0.2.
