# Principios: Reglas no-negociables del negocio

Estos principios rigen todas las decisiones operativas y comerciales. Cualquier persona o IA que opere este negocio los aplica sin excepción.

Si una decisión contradice un principio, la decisión está mal. No el principio.

---

## Tesis. Sistemas vivos

Cuando un profesional contrata Yellow, se lleva un sistema vivo que opera todos los días: plantillas, prompts, microsites, protocolos. Cosas que usa con sus manos para sostener el nuevo servicio, cargadas con la evidencia que descubrimos entrevistando a sus clientes finales. El proyecto cierra con ese sistema funcionando en su operación.

**En operación (alcance por modelo):** el sistema vivo es el destino del método y el entregable del Modelo C. El Modelo B entrega la spec validada de ese sistema (diagnóstico + plan + prototipo manual probado con 1 cliente final): cierra cuando el profesional puede contratar el build con cualquier proveedor, idealmente Yellow. El Modelo A entrega criterio experto, sin rediseño. Si al cerrar un Modelo C el cliente solo tiene un archivo para leer, hay que rediseñar la entrega. La evidencia para diseñar el sistema viene siempre de entrevistas a clientes finales (ver P5).

*Los principios P1-P10 son operacionalizaciones de la Tesis en distintos momentos del trabajo.*

---

## P1. Servicio sin tocar el oficio

Nunca rediseñamos lo que el profesional sabe hacer. Solo rediseñamos cómo lo entrega, cómo se ve y cómo se vive desde el lado del cliente.

**En operación:** si una propuesta sugiere que el profesional cambie su técnica, su disciplina o su oficio, está mal y se reescribe.

---

## P2. Diagnosticar antes de proponer

No mandamos propuestas sin haber hecho una discovery call con preguntas estructuradas. No improvisamos soluciones en la primera conversación.

**En operación:** una pregunta como "¿cuánto sale?" en la primera conversación se responde con "primero entendamos tu situación, después te puedo dar un número con sentido".

**Nota de estructura:** el bloque diagnóstico + entrevistas + plan es un producto estandarizado con precio propio (Modelo B). La implementación del plan varía de forma extrema según la solución y se cotiza por alcance (ver `../06-operations/pricing.md`).

---

## P3. Honestidad metodológica

Distinguimos siempre entre:
- ✅ **Verificado:** lo que el cliente confirmó.
- 🔵 **Hipótesis:** lo que inferimos pero falta validar.
- ❓ **Gap:** lo que no se sabe todavía.

**En operación:** ningún diagnóstico se entrega sin estos íconos aplicados a cada afirmación. Inventar información para que la propuesta se vea más completa es la falta más grave que se puede cometer.

---

## P4. El cliente paga por criterio, no por cantidad

Nuestros entregables son punzantes y directos. Nunca infladuos. Una página clara vale más que veinte páginas decoradas.

**En operación:** si un diagnóstico excede 25 páginas, está sobreescrito. Si una propuesta excede 2 páginas, está sobreescrita. Editar y cortar.

---

## P5. Co-creación con clientes finales

Ningún entregable de rediseño (Modelos B y C) se produce sin haber hablado con al menos 2-3 clientes finales del cliente (no solo el dueño del negocio).

**Alcance:** la regla aplica a los entregables de rediseño. El Modelo A (consulta diagnóstica apalancada en expertise, sin rediseño) queda fuera de P5: entrega lectura experta con sus límites declarados, todo marcado 🔵. El Modelo A jamás se usa como atajo para producir un rediseño sin evidencia; si el cliente quiere rediseño, pasa por B o C con sus entrevistas.

**En operación:** si el cliente de un B/C dice "no necesito que hables con mis clientes, yo te cuento", se le explica que las entrevistas son parte del método. Si insiste, declinamos el proyecto.

---

## P6. Métricas medibles desde el inicio

Todo proyecto define KPIs medibles antes de empezar. Sin métricas, no sabemos si el rediseño funcionó.

**En operación:** la sección "Hipótesis de impacto" del diagnóstico nunca queda vacía. Aunque sea con valores estimados, hay que ponerlas.

---

## P7. Calificar duro antes de aceptar

No tomamos cualquier cliente. La señal más temprana de un mal cliente es: pregunta el precio antes que el problema, quiere ejecución (no estrategia), pidió rebaja antes de empezar, decide con comité grande.

**En operación:** ante red flags, declinamos cordialmente. Mejor cero clientes que cliente equivocado.

---

## P8. Cobrar antes de empezar

Nunca empezamos un proyecto sin haber cobrado al menos el 50% de adelanto. Sin excepciones.

**En operación:** la fecha de inicio del proyecto es la fecha del primer pago, no la fecha del "sí" verbal del cliente.

---

## P9. Documentar todo en el playbook

Cualquier cosa nueva que aprendamos en un proyecto se incorpora al playbook. El conocimiento del negocio no vive en la cabeza de Agustin: vive en el repo.

**En operación:** después de cada proyecto cerrado, revisar el playbook y actualizar lo que corresponda.

---

## P10. Acción separada de conocimiento

Este playbook documenta know-how y procedimiento. Las cosas a hacer (campaña de venta, próximo cliente, próxima entrega) viven en la base de Notion "Projects & Tasks" del owner, fuera de este repo. El estado por caso vive en el bloque YAML de cada `cases/<slug>/case-notes.md`.

**En operación:** si encontrás algo "para hacer" dentro de un archivo del playbook, está mal ubicado. Pertenece a Notion (acción de negocio) o al case-notes del caso (acción de un proyecto en curso).

---

## Cómo se aplican

Cuando una IA o un humano va a tomar una decisión sobre el negocio, antes de actuar revisa estos 10 principios. Si la acción contradice alguno, no se ejecuta y se levanta una bandera para que Agustin decida.

Si Agustin mismo va a tomar una decisión que contradice un principio, debe pararse y preguntarse:

> "¿Estoy cambiando un principio o estoy violándolo por comodidad / urgencia?"

Si es lo primero, se actualiza el principio antes de actuar.
Si es lo segundo, no se actúa.

---

## Changelog del archivo

- **2026-06-11 (v0.5):** P10 re-apuntado. La acción de negocio deja de vivir en `roadmap.md` (eliminado del repo por decisión del owner) y pasa a la base de Notion "Projects & Tasks"; el estado por caso vive en el YAML de `case-notes.md`. El principio (acción separada del conocimiento) no cambia, solo el destino. Aprobado directo por el owner en sesión.
- **2026-06-10 (v0.4):** consolidación de LRN-014 (resuelve los diferidos LRN-008/009/010). Tesis con alcance por modelo (sistema vivo = entregable de C; B cierra en prototipo + spec; A entrega criterio). P2 gana nota de núcleo estandarizado precificado (LRN-008). P5 acotado a entregables de rediseño B/C; Modelo A explícitamente fuera, con guardarraíl anti-atajo (LRN-009). Aprobado por el owner para consolidación en bloque (sesión 2026-06-10).
- **2026-05-14 (v0.3):** P0 renombrado a "Tesis. Sistemas vivos". El meta-principio pasa a categoría propia (Tesis) separada de los principios operativos (P1-P10). Cuerpo actualizado para reflejar "sistema vivo" como sujeto. Referencias a "P0" barridas en todo el playbook y training (md + HTML). Las menciones a "P0" en changelogs históricos quedan como rastro de la versión anterior. Aprobado directo por owner en sesión.
- **2026-05-13:** v0.2, agregado P0 "Sistemas, no documentos" como meta-principio del que P1-P10 son operacionalizaciones. P1-P10 sin cambios. Aprobado vía LRN-003.
