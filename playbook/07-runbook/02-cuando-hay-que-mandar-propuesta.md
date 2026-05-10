# Runbook — Cuando hay que mandar propuesta

## Trigger

Hiciste la discovery call. El prospect calificó. Toca mandar propuesta.

## Output esperado

Propuesta enviada al prospect con plazo claro de respuesta.

---

## Pasos

### Paso 1 — Pasar las notas de la call a limpio

**Acción:** dentro de las 2 horas posteriores a la call, estructurar las notas.

**Archivo a abrir:** `../04-templates/discovery-notes-template.md`.

**Tiempo estimado:** 30 minutos.

**Importante:** capturar **frases textuales** del prospect entre comillas. Esas frases son el oro de la propuesta.

---

### Paso 2 — Calificación final contra ICP

**Acción:** ahora con la información completa de la call, recalcular el score contra ICP.

**Archivo a abrir:** `../01-identity/icp.md`.

**Tiempo estimado:** 10 minutos.

**Decisión if/then:**

- **Si score final ≥14** → seguir al Paso 3.
- **Si score final <14** → decline cordial con explicación honesta. NO mandes propuesta a un prospect mal calificado.

---

### Paso 3 — Hipotetizar los 3 jobs y el struggling moment

**Acción:** completar la sección "Hipótesis preliminares" del template de notas.

**Archivo a abrir:** `../02-methodology/jtbd.md` para guía conceptual.

**Tiempo estimado:** 20 minutos.

**Output:**
- Job dominante en formato Job Story.
- Functional / Emotional / Social jobs hipotetizados.
- Struggling moment principal identificado.

Marcar todo con 🔵 (hipótesis) hasta validar con el cliente.

---

### Paso 4 — Decidir modelo de servicio

**Acción:** elegir A, B o C según las señales de la call.

**Archivo a abrir:** `../01-identity/offer.md` (descripción) + `../06-operations/pricing.md` (precios).

**Tiempo estimado:** 10 minutos.

**Decisión if/then:**

- **Cliente con duda o capacidad de pago limitada pero buen perfil** → Modelo A.
- **Caso típico, sin razones para escalar o desescalar** → Modelo B (default).
- **Cliente pidió acompañamiento explícito o el rediseño es complejo** → Modelo C.

**Regla:** UNA sola opción. No mandes 3 opciones. Genera parálisis.

---

### Paso 5 — Redactar propuesta

**Acción:** escribir la propuesta siguiendo la plantilla.

**Archivo a abrir:** `../04-templates/proposal-template.md`.

**Tiempo estimado:** 60-90 minutos.

**Importante:**
- Sección 1 ("Lo que escuché"): usar las frases textuales del prospect.
- Sección 2 ("Lo que creo que está pasando"): la causa raíz, no los síntomas. Punzante.
- Sección 4 ("Inversión"): pricing exacto desde `../06-operations/pricing.md`.
- Largo total: 1-2 páginas.

---

### Paso 6 — Revisar contra checklist antes de enviar

**Acción:** chequeo de calidad antes de mandar.

**Checklist:**

- [ ] La sección 1 usa palabras textuales del prospect, no parafraseadas.
- [ ] La sección 2 es corta (5-7 líneas) y nombra causa raíz.
- [ ] El pricing es el correcto según `../06-operations/pricing.md`.
- [ ] Hay UNA opción de modelo, no 3.
- [ ] El plazo de inicio es realista.
- [ ] Hay un próximo paso claro al final.
- [ ] La validez (14 días) está incluida.
- [ ] El tono es directo, sin buzzwords.
- [ ] El largo es 1-2 páginas, no más.

**Tiempo estimado:** 15 minutos.

---

### Paso 7 — Enviar

**Acción:** enviar la propuesta como PDF o link a doc compartido.

**Texto sugerido del email/mensaje de envío:**

> "Hola [nombre], te adjunto la propuesta. Está pensada en función de lo que charlamos. Si te hace sentido, respondé 'dale' y arrancamos con contrato y primer pago. Si tenés dudas o querés ajustar algo, agendá 30 minutos más con este link: [link]."

**Tiempo estimado:** 5 minutos.

---

### Paso 8 — Programar follow-ups

**Acción:** anotar en calendario fechas de follow-up.

**Tiempo estimado:** 5 minutos.

**Esquema (de `../03-process/03-closing.md`):**

- Día 5 sin respuesta: follow-up corto.
- Día 10 sin respuesta: follow-up final.
- Día 14 sin respuesta: archivar.

---

## Decisiones if/then resumidas

| Situación | Acción |
|---|---|
| Score final <14 | Decline cordial, no propuesta |
| Cliente con duda o capacidad ajustada | Modelo A |
| Caso típico | Modelo B |
| Cliente pide acompañamiento o caso complejo | Modelo C |
| Sin respuesta a los 5 días | Follow-up corto |
| Sin respuesta a los 14 días | Archivar |

---

## Errores comunes

### Mandar la propuesta el mismo día de la call

Parece improvisado. Mejor tomarse 2-5 días.

**Salida:** la propuesta sale entre día 2 y día 5 post-call. Ni antes ni después.

### Inventar palabras del cliente que no dijo

Te tienta poner una frase "más ordenada" en lugar de la frase real. No lo hagas.

**Salida:** si la frase del cliente es desprolija, dejala desprolija. Esa fidelidad es lo que hace que la propuesta resuene.

### Cambiar el pricing al momento de mandar

Te entra el miedo y bajás el precio. O lo subís porque "este parece pagar más".

**Salida:** pricing siempre desde `../06-operations/pricing.md`. Sin variantes.

### Mandar 3 opciones para "que el cliente elija"

Genera parálisis. El cliente no sabe elegir, queda dudando, demora la decisión.

**Salida:** UNA opción, la que vos pensás que mejor calza. Si el cliente la rechaza, ofrecés alternativa después.

---

## Próximo runbook

Cuando el cliente diga sí → `03-cuando-cliente-dijo-si.md`.
