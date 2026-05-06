# Caso — Psicóloga independiente (Evaluación psicotécnica)

**Estado:** En ejecución como caso piloto. Resultados aún no medidos en campo.
**Modelo aplicado:** B (Diagnóstico + plan).
**Tipo de cliente:** profesional independiente Tier 1 (psicóloga, ámbito laboral/legal/deportivo).

---

## Por qué este caso es la referencia oficial

Este es el **primer caso real del negocio**. Sirve como:

1. Referencia de profundidad esperada en cualquier diagnóstico nuevo.
2. Caso de prueba social para futuros clientes.
3. Validación práctica del método (Service Design + JTBD).
4. Material de comunicación (pitch, propuestas, contenido).

Cuando se ejecute la implementación y se midan resultados reales, este archivo se actualiza con números medidos.

---

## 1. Contexto del cliente

Psicóloga independiente con varios años de oficio en evaluaciones psicotécnicas. Trabaja para tres tipos de clientes finales:

- **Empresas de RRHH:** evaluaciones para procesos de selección laboral.
- **Estudios jurídicos:** evaluaciones en contexto pericial / legal.
- **Clubes deportivos:** evaluaciones psicotécnicas para deportistas.

Su trabajo profesional es serio y técnicamente sólido. **El problema no está en el oficio, está en cómo entrega el resultado.**

---

## 2. Service blueprint actual

### Customer journey

*Cliente solicita evaluación → toma de tests presencial → codificación manual de resultados → redacción artesanal del informe → entrega del PDF de 16 páginas → cliente "lee" el informe → cliente toma decisión.*

### Capas del blueprint

| Acciones del cliente | Frontstage | Backstage | Procesos de soporte |
|---|---|---|---|
| Empresa solicita evaluación | Recibe brief, agenda con candidato | Coordinación de espacio, materiales | Email, calendar |
| Candidato toma tests | Sesión presencial guiada | Aplicación de batería de tests | Tests psicométricos |
| Espera resultados | Sin contacto durante 5-10 días | Codificación manual de cada test | Plantillas en Word |
| Recibe informe | PDF de 16 páginas por email | Redacción artesanal de informe | Word + email |
| Lee y decide | Lectura densa, busca síntesis | (No hay frontstage post-entrega) | (No hay) |

---

## 3. Job-to-be-Done del cliente final

### Job dominante

> *"Cuando tengo que contratar a alguien para un puesto crítico, quiero una evaluación que me dé una recomendación clara y respaldada, para poder decidir con seguridad y justificar la elección ante mi directorio."*

### Los tres jobs en juego

- **Functional job:** obtener información sobre el candidato para decidir.
- **Emotional job:** sentirse seguro y respaldado en la decisión, reducir la ansiedad de "¿y si me equivoco?".
- **Social job:** poder justificar la decisión ante el directorio o el jefe ("contratamos en base a una evaluación profesional, no por intuición").

### Contra qué compite realmente

- Evaluaciones psicotécnicas de otras psicólogas (competencia directa).
- Entrevistas internas más profundas (alternativa de RRHH).
- Tests online estandarizados (alternativa low-cost).
- Decisión por intuición / referencias (no contratar evaluación).

---

## 4. Pain points identificados

### 1. Information overload ✅

El entregable principal (informe de 16 páginas) supera la capacidad de procesamiento del cliente final. El usuario no necesita 16 páginas de contenido técnico; necesita una decisión.

### 2. Mismatch entre formato y job-to-be-done ✅

El job que el cliente contrata NO es "leer un informe psicológico exhaustivo". Es: "tomar una decisión sobre una persona". El formato actual obliga al usuario a hacer él mismo la síntesis.

### 3. Friction en la entrega ✅

PDF estático, formato denso, sin jerarquía visual. Genera resistencia a la lectura y baja percepción de valor.

### 4. Pricing perception comprimido 🔵

Un servicio que se entrega como "documento Word denso" se compara mentalmente con cualquier informe de cualquier profesional. No hay diferenciación visible. Esto comprime el precio hacia abajo.

### 5. Throughput limitado por codificación manual ✅

Cada evaluación requiere horas de codificación manual de tests, lo que limita la cantidad de evaluaciones posibles por mes. Esto ancla el techo de facturación.

---

## 5. Diagnóstico central

> El problema no es que el informe sea malo. El informe es excelente desde lo profesional. El problema es que el formato del informe NO está alineado con el trabajo real que viene a hacer el cliente cuando contrata: tomar una decisión clara sobre una persona. Por eso el cliente lee parcialmente, percibe el servicio como "uno más", y el precio queda anclado a "cuánto cuesta un informe psicológico" en lugar de "cuánto vale tomar una buena decisión de contratación".
>
> El rediseño no toca el oficio profesional. Toca cómo se entrega el resultado para que cumpla los tres jobs (functional, emotional, social) simultáneamente, justificando un pricing 30-50% mayor.

---

## 6. Propuesta de rediseño

### 1. Progressive disclosure

**Qué:** rediseñar el entregable principal como un one-pager visual con la conclusión y los 3-4 datos clave. El usuario obtiene la decisión en 30 segundos.

**Por qué:** resuelve el information overload y el mismatch con el job (decidir, no leer).

**Cómo se ve:** primera vista del informe = conclusión + recomendación + scores principales en una pantalla. Lo demás está disponible bajo demanda.

### 2. Drill-down on demand

**Qué:** las 16 páginas siguen existiendo, pero pasan de ser el producto principal a ser información de respaldo accesible bajo click.

**Por qué:** preserva el rigor profesional sin saturar al usuario. Cada usuario consume hasta donde necesita.

**Cómo se ve:** desde el one-pager, links a "Ver dimensión X en detalle" → capa intermedia → capa técnica completa.

### 3. Medium reframing: PDF → HTML

**Qué:** cambiar el soporte del entregable de PDF estático a HTML interactivo.

**Por qué:** un PDF es un documento; un HTML es una experiencia. Permite jerarquía visual real, navegación, interactividad.

**Cómo se ve:** el cliente recibe un link único (no descarga). Acceso desde cualquier dispositivo. Actualizable si hace falta.

### 4. Layered content architecture

**Qué:** organizar el contenido en tres capas explícitas:
- Capa 1: conclusión y recomendación (el 80% de los usuarios solo necesita esto).
- Capa 2: dimensiones evaluadas con scores visuales.
- Capa 3: análisis técnico extendido para casos legales o cuestionamientos.

**Por qué:** cada usuario tiene un job distinto y una profundidad distinta. La arquitectura por capas respeta los tres usos.

### 5. AI-assisted coding

**Qué:** automatizar la codificación de tests con asistencia de IA, manteniendo la supervisión profesional.

**Por qué:** reduce el tiempo de procesamiento manual sin perder rigor. Libera horas para escalar el servicio.

**Cómo se ve:** la psicóloga sigue siendo quien interpreta y firma. La IA solo ayuda en la codificación inicial de los tests estandarizados.

---

## 7. Hipótesis de impacto

| Métrica | Hipótesis | Cómo se mide |
|---|---|---|
| **NPS / satisfacción del cliente final** | Sube significativamente | Encuesta post-entrega |
| **Time-to-decision del cliente** | Baja de horas a minutos | Time-tracking en cliente piloto |
| **Willingness to pay** | Aumento de precio 30-50% sin caída de demanda | Test de pricing en próximas evaluaciones |
| **Throughput de la profesional** | +40-60% de evaluaciones/mes con el mismo esfuerzo | Tracking interno de horas/evaluación |
| **Tasa de recomendación** | Sube por mejor experiencia + diferenciación | Tracking de origen de nuevos clientes |

**Status:** todas las hipótesis. Pendiente medición real post-implementación.

---

## 8. Riesgos y consideraciones

- **Riesgo:** el contexto legal puede requerir formato extenso por exigencia normativa. **Mitigación:** mantener la capa 3 con todo el detalle técnico que un perito o juez pueda necesitar. El one-pager es interfaz, no reemplazo.

- **Riesgo:** clientes acostumbrados al PDF tradicional pueden percibir el HTML como "menos serio". **Mitigación:** comunicar el rediseño como upgrade premium, no como simplificación. Framing importa.

- **Riesgo:** uso de IA puede generar dudas éticas en contextos sensibles. **Mitigación:** la IA solo asiste en codificación; la interpretación profesional la sigue haciendo la psicóloga, con firma profesional.

---

## 9. Próximos pasos sugeridos

1. **Sesión de validación con 2-3 clientes finales** del cliente (RRHH, estudio jurídico, club).
2. **Prototipo del one-pager con un caso real.**
3. **Test piloto con próximas 5 evaluaciones.**
4. **Ajustes según feedback + lanzamiento oficial con nuevo pricing.**
5. **Medición de KPIs a los 90 días.**

---

## 10. Pitch profesional aplicado al caso (90 segundos)

> "El servicio era una evaluación psicotécnica entregada como PDF de 16 páginas. Hice un service blueprint y detecté que el formato no estaba alineado con el job-to-be-done del cliente: él contrata 'tomar una decisión sobre una persona', no 'leer un informe técnico'. Rediseñé la entrega usando progressive disclosure: el cliente recibe un one-pager con la conclusión y, si quiere profundizar, accede al detalle por capas. Cambiamos el medio de PDF a HTML interactivo y sumamos asistencia de IA en la codificación. La hipótesis es que el rediseño habilita un aumento de precio del 30–50% y mejora throughput sin tocar el core profesional."

---

## Glosario aplicado al caso

| Lo que se hizo | Vocabulario UX Strategy |
|---|---|
| Mapeé el servicio entero | Service blueprint |
| Identifiqué el verdadero trabajo del cliente | Jobs-to-be-done |
| Encontré dónde se traba el usuario | Pain point identification |
| Rediseñé qué muestra primero el informe | Progressive disclosure |
| Capa básica + capas profundas | Layered information architecture |
| Cambio de PDF a HTML interactivo | Medium reframing |
| El servicio sigue siendo el mismo, cambia el envoltorio | Service redesign |
| Sube el precio sin perder demanda | Value perception uplift |
| Métricas para validar el rediseño | KPI framework |

---

## Lo que falta documentar

Cuando se ejecute la implementación, agregar:

- [ ] Resultados reales de research con clientes finales (RRHH, jurídico, deportivo).
- [ ] Versión final del one-pager (link o screenshot).
- [ ] Mediciones reales a 30, 60, 90 días.
- [ ] Testimonio de la psicóloga.
- [ ] Lessons learned del proyecto.

---

## Changelog del archivo

- **Mayo 2026:** versión inicial como propuesta. Pendiente actualizar post-implementación con datos reales.
