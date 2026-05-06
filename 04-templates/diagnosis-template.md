# Plantilla — Diagnóstico

**SSOT** de la plantilla de diagnóstico. Toda la entrega de un proyecto sigue esta estructura.

Para el proceso de cómo se construye el diagnóstico, ver `03-process/04-delivery.md`.
Para un caso completo aplicado, ver `05-examples/case-psicologa.md`.

---

## Estructura obligatoria

```markdown
# Diagnóstico — [Nombre del cliente / proyecto]

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

[Cualquier alternativa que cumpla el mismo job. Listar 3-5.]

---

## 4. Pain points identificados

### 1. [Nombre del pain point en lenguaje técnico] [✅ / 🔵 / ❓]

[Descripción del problema. Qué pasa, dónde se traba, qué pierde el cliente final por esto.]

### 2. [Nombre del pain point] [✅ / 🔵 / ❓]

[Descripción.]

[Continuar. Mínimo 3, máximo 7 pain points.]

---

## 5. Diagnóstico central

[Un párrafo punzante que sintetiza la causa raíz, no los síntomas.]

> *"El problema no es que [síntoma]. El problema es que [causa raíz]. Por eso [consecuencia visible]. Y por eso [consecuencia invisible que afecta el negocio]."*

---

## 6. Propuesta de rediseño

### 1. [Nombre técnico de la intervención]

**Qué:** [descripción concreta del cambio]
**Por qué:** [a qué pain point responde]
**Cómo se ve:** [cómo lo experimentaría el cliente final post-rediseño]

### 2. [Nombre técnico]

[...]

[Continuar. Mínimo 3, máximo 7 intervenciones.]

---

## 7. Hipótesis de impacto

| Métrica | Hipótesis | Cómo se mide |
|---|---|---|
| [KPI 1] | [Sube / baja X%] | [Método de medición] |
| [KPI 2] | [...] | [...] |

---

## 8. Riesgos y consideraciones

- **Riesgo 1:** [descripción] → **Mitigación:** [cómo se aborda]
- **Riesgo 2:** [...]

---

## 9. Próximos pasos sugeridos

1. [Acción concreta] — [responsable] — [plazo]
2. [...]

---

## 10. Gaps de información

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

- Vocabulario del `02-methodology/glossary.md`.
- Evitar buzzwords vacíos.
- Cada término técnico aporta precisión, no decoración.

### Honestidad metodológica

Marcar explícitamente cada afirmación según `02-methodology/glossary.md`:

- ✅ **Verificado:** información que el cliente confirmó.
- 🔵 **Hipótesis:** lo que el consultor infirió pero falta validar.
- ❓ **Gap:** lo que aún no se sabe.

### Estructura modular

Si el cliente quiere solo el diagnóstico (sin propuesta), entregar las secciones 1-5.
Si quiere el plan completo, entregar todo.
Si quiere solo la sesión exploratoria (Modelo A), entregar 1-3 + brief de 5.

---

## Notas para la IA

Cuando generes un borrador siguiendo esta plantilla:

1. **No inventes datos del cliente.** Si la información no está en las notas, marcalo como gap.
2. **Diferenciá hipótesis de hechos.** Usá los íconos ✅ 🔵 ❓.
3. **Aplicá los frameworks** de `02-methodology/`, no opinión.
4. **Usá el vocabulario exacto** del glossary, no sinónimos.
5. **Mantené la profundidad** de referencia de `05-examples/case-psicologa.md`.
6. **No sobreescribas.** Si una sección no aplica al caso, dejala vacía con "No aplica" en lugar de inventar contenido.
7. **Sugerí preguntas de seguimiento** al final para que Agustin pueda profundizar con el cliente en próxima sesión.

---

## Changelog del archivo

- **Mayo 2026:** versión inicial v0.2.
