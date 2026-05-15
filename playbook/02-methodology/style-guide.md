# Guía de estilo Yellow

**SSOT** del estilo de escritura y presentación para cualquier salida formal del repo: diagnóstico, propuesta, audit, plan, comunicación al cliente. Aplica también a la prosa interna del playbook cuando se actualizan archivos.

---

## Principio rector

La estética que perseguimos es la del paper académico clásico: claridad, seriedad y autoridad sin grandilocuencia. Cuando una decisión de escritura o de presentación visual no aporta a esa estética, se descarta.

---

## Reglas de escritura

### A. Apertura con premisa, no con promesa

Las secciones formales abren afirmando la tensión, el contexto o el problema en tercera persona profesional. Quedan fuera fórmulas tipo *"te ofrecemos esto"*, *"este servicio hace"* o *"queremos proponer"*. La primera frase establece el objeto, no al emisor.

### B. Voz neutra, autor invisible

El argumento se sostiene solo. Quedan fuera fórmulas tipo *"nosotros pensamos"*, *"nuestro equipo decidió"*, *"diseñamos esto porque"*. Cuando hay que atribuir, se hace en tercera persona o con una cita formal.

### C. Claridad por sobre estilo

Frases completas y argumentativas. Si una idea pide un párrafo, va párrafo. La lista con viñetas se reserva para enumeraciones reales (mecanismos del problema, intervenciones del rediseño, KPIs). Los bullets cortos sin verbos, típicos del brochure de marketing, no aplican.

### D. Vocabulario en español

Cero anglicismos innecesarios. Los nombres canónicos de framework se mantienen en su forma original cuando no tienen traducción establecida (Job-to-be-Done, push, pull, anxiety, inertia, Jobs-As-Progress, Jobs-As-Activities). El resto se castellaniza según la tabla del glossary (`glossary.md`).

### E. Cero em dashes

Las parentéticas largas se resuelven con paréntesis, comas o reescritura. El em dash (—) hoy señala salida automatizada de IA y queda fuera del estilo Yellow.

### F. Sin recurso de negación-afirmación

Queda fuera la fórmula *"no es X, es Y"* y sus variantes. Cuando se necesita contrastar, se afirma directamente lo que es y se ofrece un ejemplo concreto.

### G. Términos técnicos con precisión

Los términos técnicos no se suavizan cuando son precisos. La primera vez que aparece un término técnico se escribe en *itálica*. Las definiciones canónicas viven en el glossary.

---

## Reglas de presentación visual

### H. Tipografía serif

Body y títulos en familia serif clásica. Para mantener los entregables HTML autocontenidos (sin dependencia de webfonts externas), la familia primaria es Georgia, con fallback a *Times New Roman* y *serif* genérica. Interlineado 1.6. Márgenes amplios.

### I. Jerarquía sobria

La estructura visual respeta tres niveles: título, subtítulo, cuerpo. Sin pirotecnia decorativa. Los íconos del playbook (✅, 🔵, ❓) se reservan a su función metodológica.

### J. Aprovechar HTML donde aporta

La estética del paper manda como referencia. El HTML agrega lo que el papel no puede: tablas para datos, secciones colapsables para detalle opcional, navegación interna. Cuando una decisión visual no aporta claridad, se descarta.

### K. Paleta blanco y negro

El cuerpo de los entregables va en blanco y negro estricto. El acento amarillo Yellow se reserva a elementos de identidad de marca (header del portal, estados activos), nunca al cuerpo argumentativo.

---

## Patrones disponibles, no obligatorios

Algunos patrones de paper académico sirven cuando aportan a la claridad, pero no son molde forzado:

- **Enumeraciones etiquetadas** (a, b, c, d) cuando los elementos son paralelos y la cantidad la dicta el contenido. Pueden ser tres, pueden ser siete.
- **Componentes numerados en romanos** (i, ii, iii) cuando se describe la estructura interna de una solución.
- **Citas con superscript a autoridad bibliográfica** (Lou Downe, Edmondson, Christensen, Klement) cuando el argumento se respalda en literatura específica.

Estos patrones son herramientas. Cuando el contenido no los pide, prosa argumentativa.

---

## Aplicación

La IA recorre esta guía antes de entregar cualquier output formal (`../../CLAUDE.md` R4 más check `style-guide` en `../quality-checklist.json`). Cuando un fragmento incumple una regla, se reescribe antes de presentar al owner.

---

## Changelog del archivo

- **2026-05-09:** versión inicial v0.1.
