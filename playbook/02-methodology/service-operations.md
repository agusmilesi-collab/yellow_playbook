# Ingeniería de operaciones del servicio (capa de rendimiento)

**SSOT** de la capa de operaciones. Cualquier mención a restricción, cuello de botella, rendimiento, flujo o productización en otros archivos linkea acá.

Esta capa **no es un quinto pilar de la cascada de diagnóstico.** Los 4 pilares (`./jtbd.md`, `./value-based-strategy.md`, `./service-design.md`, `./good-services.md`) trabajan la **demanda**: qué valora el cliente final y cómo percibe la entrega. Esta capa trabaja la **oferta**: cómo el profesional produce el entregable rediseñado con menos fricción, más rendimiento y sin ser él mismo el cuello de botella. Opera en la Fase 4 del delivery (build del sistema vivo) y en las decisiones de escala.

---

## Salvedad metodológica declarada

Se adopta el núcleo conceptual de la ingeniería de procesos en servicios (restricción, flujo, estandarización contra personalización, productización), reencuadrado para el ICP real: el profesional solo o la PyME chica. Queda fuera el aparato industrial de alto volumen (Six Sigma, control estadístico de procesos, teoría de colas cuantitativa): está pensado para fábricas, call centers y hospitales, y es escala equivocada para un consultor que rediseña el informe de una psicóloga. Es la misma postura pragmática que `./value-based-strategy.md` toma con la estrategia corporativa y `./jtbd.md` con el Ulwick cuantitativo: se usa el core, no se traslada el marco entero.

---

## Por qué lo usamos en Yellow

Dos razones concretas, ambas ancladas en lo que el playbook ya afirma:

1. **La Tesis entrega un sistema vivo que opera todos los días.** Construir ese sistema y que escale es un problema de operaciones, no de experiencia. Los 4 pilares dicen qué rediseñar; esta capa dice cómo producirlo de forma eficiente.
2. **El cuarto pilar nombra la jugada pero no da el método.** `./value-based-strategy.md` señala que bajar la WTS (volver el trabajo más liviano y más alineado con lo que el profesional quiere hacer) es media parte del dual advantage, pero no da herramientas para lograrlo. Esta capa es ese método.

Evidencia en los casos reales:

- **Psicóloga:** el diagnóstico nombra "rendimiento limitado por codificación manual" como lo que ancla su techo de facturación. Es una restricción de capacidad, no un problema de experiencia.
- **Lisandro:** el cliente es, literalmente, el cuello de botella de su propio equipo. Su job es dejar de serlo.

---

## Conceptos operativos

### 1. La restricción (Teoría de Restricciones, Goldratt)

Todo sistema tiene un cuello de botella que limita el rendimiento del conjunto. Mejorar cualquier otra parte no mueve el resultado: solo mover la restricción lo hace. Cinco pasos: identificar la restricción, explotarla (sacarle el máximo sin invertir), subordinar el resto a ella, elevarla (invertir para ampliarla) y volver a empezar, porque al elevarla la restricción se muda a otro lado.

**Aplicación Yellow:** en la Fase 4, antes de construir, se identifica qué paso del proceso del profesional limita su rendimiento o su percepción de valor. El sistema se diseña para elevar esa restricción, no para mejorar todo un poco. Conecta con el principio P10 de Service Design (la calidad la define la peor parte) y con el meta-patrón de JTBD (lo que el profesional regala suele ser su restricción real de captura de valor).

### 2. Flujo y pasos mínimos (Lean)

Un buen proceso entrega el resultado con la mínima fricción. Cada paso que no agrega valor al cliente final es candidato a eliminar o a automatizar.

**Aplicación Yellow:** profundiza el principio 8 de Good Services (pasos mínimos). En el build, el flujo de operación (del input crudo del profesional al output rediseñado) se cuenta paso por paso y cada paso se justifica o se saca. Operacionaliza la sección 5 de `../04-templates/system-spec-template.md`.

### 3. Estandarización contra personalización (Levitt, production-line approach to service)

Industrializar un servicio significa separar lo que conviene estandarizar (lo repetible, lo que el profesional regala como commodity) de lo que conviene mantener artesanal (el criterio, la ventaja real). La estandarización libera tiempo del profesional para ejercer su criterio donde sí diferencia.

**Aplicación Yellow:** es el meta-patrón operacionalizado en producción. El sistema vivo estandariza la commodity para que el profesional capture y ejerza su ventaja. Cuidado con el error simétrico: estandarizar el criterio (lo que diferencia) destruye el valor.

### 4. Productización (del proyecto al activo replicable)

Cuando el mismo sistema sirve a varios clientes del mismo vertical, deja de ser un proyecto y pasa a ser un producto: un kit replicable (ver LRN-001 y `../09-library/`). La biblioteca de módulos es el inventario de esa productización; tres módulos del mismo vertical son la señal de que conviene productizar.

---

## Cómo se conecta con los otros pilares

Esta capa no descubre (eso es JTBD) ni prioriza (eso es el Value Map). Es la **contraparte de oferta del Value Stick**:

- Los 4 pilares de demanda suben la **WTP** (lo que el cliente está dispuesto a pagar).
- Esta capa baja la **WTS** y el costo de entrega (vuelve el trabajo más liviano y rápido de producir).
- Juntos cierran el stick completo, que es lo que `./value-based-strategy.md` pide y no resolvía por sí solo.

Momento de uso en el proceso: Fase 4 del delivery (`../03-process/04-delivery.md`) y las decisiones de escala del negocio.

---

## Vocabulario clave

Restricción, cuello de botella, rendimiento (throughput), flujo, pasos mínimos, estandarización contra personalización, industrialización del servicio, productización.

Para definiciones precisas, ver `../02-methodology/glossary.md`.

---

## Lecturas de referencia

- **"La Meta"**, Eliyahu Goldratt (1984). Teoría de Restricciones en forma de novela. Núcleo de esta capa.
- **"Production-Line Approach to Service"**, Theodore Levitt (HBR, 1972). Raíz intelectual de industrializar un servicio en un sistema replicable. Mismo autor que "Marketing Myopia".
- **"Designing Services That Deliver"**, G. Lynn Shostack (HBR, 1984). Origen del service blueprint, anterior a Stickdorn. Sumado por rigor de atribución.
- **"Lean Thinking"**, James Womack y Daniel Jones (1996). Flujo y eliminación de desperdicio. Núcleo de flujo, contexto del resto.

**Fuera de scope (documentado para blindar la decisión):** Six Sigma, control estadístico de procesos, teoría de colas cuantitativa. Aparato de alto volumen, escala equivocada para el ICP de Yellow.

---

## Changelog del archivo

- **2026-06-11 (v0.1):** versión inicial. Consolidación de LRN-021. Capa de operaciones (supply-side) sumada como SSOT, explícitamente fuera de la cascada de 4 pilares de diagnóstico. Núcleo: Teoría de Restricciones (Goldratt), flujo Lean, estandarización contra personalización (Levitt 1972), productización. Salvedad de scope declarada (fuera el aparato industrial pesado). Aprobado directo por el owner en sesión.
