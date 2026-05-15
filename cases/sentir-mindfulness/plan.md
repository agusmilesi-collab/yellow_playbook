# Plan de implementación — Sentir Mindfulness

**Cliente:** Sentir Mindfulness (Rosario, Argentina). Equipo: Lorena Campos, Lucila Campos, Agustín Milesi.
**Foco:** rediseño del primer touchpoint del journey (la web), con foco en la decisión de marca tomada por el owner el 2026-05-14 (split en dos marcas).
**Fecha:** 2026-05-14
**Deriva de:** `diagnostico.md` v2 (incorpora correcciones del owner sobre pain 3 y pain 6).

---

## 1. Intervenciones priorizadas

Cada fila se referencia con el código del diagnóstico (`INT-N`). La intervención 4 del diagnóstico no aparece en la tabla porque depende de una pieza operativa externa (plataforma de cobro de ondemand) y se registra en la sección 4 de este plan como dependencia bloqueante reconocida.

| # | Intervención | Pain points que resuelve | Esfuerzo | Owner principal | Fecha objetivo |
|---|---|---|---|---|---|
| INT-1 | Split de marca (Sentir individuos + marca corporativa nueva) | 1, 7, 8, 9 | Alto | Agustín, con equipo de diseño existente | 2026-07-23 |
| INT-2 | Puente cross-brand explícito en touchpoints clave | 1, 8 (subsidiario de INT-1) | Medio | Agustín, con Lucila para rama de KB de Lore | 2026-07-30 |
| INT-3 | Sincronización web / KB / plataforma de cobro y transición de dominio | 2, 5 | Bajo | Agustín, con Lucila para KB | 2026-05-21 |
| INT-5 | Voz al nicho declarado y limpieza estilística en Sentir individuos | 7, 9, 11 | Medio | Agustín, con Lorena y Lucila como autoras de la voz | 2026-06-25 |
| INT-6 | Página de Speaker / charla en eventos dentro de la marca corporativa | 10 | Bajo | Agustín, con Lorena para criterios editoriales | 2026-07-16 |
| INT-7 | Acompañamiento conversacional para la marca corporativa (MVP de chatbot) | 8 | Medio | Lucila como dueña del activo Lore, Agustín en orquestación | 2026-08-13 |

Las fechas asumen ejecución en serie de la intervención madre (INT-1) y ejecución parcialmente paralela de INT-3 y INT-5. Si la operación tiene capacidad para más frentes simultáneos, las fechas adelantan; si no, se respeta el orden de la sección 3 (cronograma).

---

## 2. KPIs y línea de base

Traslado directo de la sección 7 del diagnóstico, ajustado para reflejar la salida de ondemand del scope. Baseline declarado como ❓ donde no hay medición previa: el primer trabajo de la ola 1 es justamente fijarlo.

| Métrica | Baseline actual | Target a 90 días desde el lanzamiento | Cómo se mide |
|---|---|---|---|
| Tasa de entrada corporativa directa a la marca nueva (sin pasar por Sentir individuos) | 0% (la marca no existe hoy) | 60 a 80% del tráfico corporativo en 6 a 12 meses; primer hito a 90 días: ≥40% | GA4 cross-domain, atribución de origen del lead |
| Tasa de conversión del encabezado al formulario en el sitio corporativo nuevo | ❓ (definir baseline del `index.html` actual en ola 1) | 1,5x a 2x sobre el baseline | GA4 funnel del sitio corporativo |
| Tasa de referral cross-brand (individuo Sentir genera consulta corporativa) | 0% (sin touchpoint) | 3 a 5% sobre inscriptos al taller a 6 meses; primer hito a 90 días: primeros leads atribuidos | Formulario cross-brand con campo de atribución, CRM |
| Leads de eventos / charlas en la marca corporativa | 0 (sin touchpoint) | 1 a 3 leads por mes al lanzar | Formulario `eventos` del sitio corporativo |
| Discrepancia precio web Sentir vs KB | $42.000 web ↔ $45.000 KB | 0 (SSOT único consumido por web, KB y plataforma de cobro) | Auditoría manual periódica, alerta automática si se reabre |
| Tiempo de respuesta a consultas corporativas | 24 horas declaradas en `gracias.html` | 15 minutos a 2 horas hábiles con chatbot corporativo MVP | Timestamp del primer contacto al primer mensaje del equipo |
| Reconocimiento de marca corporativa nueva entre decisores de RRHH del entorno | 0% (la marca no existe) | 15 a 30% a 12 meses en muestra acotada (50 decisores Rosario más cuentas Kind actuales) | Encuesta anual breve, fuera del horizonte de 90 días |

**Status:** todas son hipótesis. Pendiente medición real post-implementación. El baseline ❓ del segundo KPI se cierra al final de la ola 1.

---

## 3. Cronograma

### Ola 1, del 2026-05-15 al 2026-05-21 — limpieza operativa y baseline

- **2026-05-15 a 2026-05-16:** confirmar el SSOT del precio del taller online ($42.000 o $45.000) y de los medios de pago. Propagar a `individuos.html`, KB de Lore (`05 precios y pagos.md`) y plataforma de cobro en `sentirmindfulness.com.ar`. Documentar el valor en una tabla única en Notion (DB Projects & Tasks).
- **2026-05-15 a 2026-05-21:** definir métricas baseline del sitio actual con Vercel Analytics y GA4. Tráfico mensual por puerta (empresas, individuos), conversión hoy del formulario corporativo, conversión hoy de inscripción al taller individuos, origen del tráfico (IG, TikTok, Google, referido). Registro en Notion.
- **2026-05-15:** registrar formalmente "plataforma de cobro ondemand" como proyecto separado en Projects & Tasks, fuera del plan de rediseño. Sin avanzar sobre `descanso.html` ni `ondemand.html` hasta que ese proyecto tenga scope propio.
- **2026-05-21:** primera pasada de transición de dominio. Agregar al clic de "Inscribirme" en `individuos.html` una pantalla sobria que diga "Te llevamos a nuestra plataforma de inscripción" antes del redireccionamiento a `sentirmindfulness.com.ar`.

**Salida de la ola 1:** discrepancia de precio cerrada, baseline medible, decisión explícita sobre ondemand registrada como dependencia, fricción del salto de dominio mitigada.

### Ola 2, del 2026-05-22 al 2026-06-11 — intervención madre (split de marca)

- **2026-05-22 a 2026-06-05:** ejercicio de naming para la marca corporativa nueva. Briefing de una página con criterios funcionales, emocionales, sociales, operativos y fonéticos. Propuesta de cinco a ocho nombres evaluados contra esos criterios. Testeo informal con tres a cinco decisores de RRHH del entorno. Decisión final del owner o pareja decisora (no comité). Caja de tiempo cerrada de dos semanas; si vence sin decisión, se aplica el Plan B (lanzar con placeholder por 90 días).
- **2026-05-29 a 2026-06-11:** identidad visual de la marca corporativa nueva en paralelo al naming. Paleta, tipografía, tono fotográfico, primera maqueta del sitio. Trabaja el equipo de diseño existente sobre el brief del owner.
- **2026-05-29 a 2026-06-19:** validar con tres a cinco clientes Kind actuales (Cargill, Electrolux, John Deere u otra de la cartera vigente) el job dominante propuesto para la puerta empresas, vía Switch Interview (referencia: `playbook/02-methodology/jtbd.md`). Sumar a la conversación el sondeo informal sobre los nombres candidatos del naming.

**Salida de la ola 2:** nombre definitivo (o decisión explícita de lanzar con placeholder), identidad visual aprobada, validación del job dominante con voces externas reales.

### Ola 3, del 2026-06-12 al 2026-07-23 — despliegue de ambas marcas

- **2026-06-12 a 2026-07-02:** desarrollo del sitio de la marca corporativa nueva con dominio propio. Encabezado job-dominante, los tres papers existentes (SHR-001, SLH-001, SCK-001) reubicados con identidad nueva, formulario corporativo, sin la palabra "mindfulness" en el cuerpo argumentativo.
- **2026-06-19 a 2026-07-02:** refinamiento de Sentir individuos en paralelo. Reescritura del encabezado de `individuos.html` con el copy del nicho que el owner ya brifeó ("Salí del modo automático. Llevate herramientas concretas para frenar la ansiedad y empezar a vivir con más calma, desde la primera semana"). Actualización de la KB de Lore (`01 identidad y mindfulness.md`, `02 el taller.md`, `prompt_lore.md`) para reflejar el ICP declarado (profesionales 30 a 50 con cargos de responsabilidad). Limpieza estilística focalizada en `individuos.html` y `descanso.html`: retirada de em dashes retóricos y de la fórmula "no es X, sino Y" (referencias E y F de `style-guide.md`). Mantener la voz de Lorena y Lucila.
- **2026-07-03 a 2026-07-09:** QA cruzado de ambos sitios. Pasada por la checklist de calidad del repo (`playbook/quality-checklist.json`).
- **2026-07-10 a 2026-07-16:** página de Speaker / charlas en eventos dentro del sitio corporativo (formato paper similar a SHR-001, SLH-001 y SCK-001). Posicionada como decisión editorial acotada, no como servicio recurrente gratuito.
- **2026-07-17 a 2026-07-23:** activación del puente cross-brand. Bloques al final de `individuos.html`, `gracias.html` post-inscripción, y rama nueva en la KB de Lore (cuando el usuario menciona "empresa", "trabajo" o "equipo", Lore presenta la marca corporativa). Inverso opcional en la marca corporativa.
- **2026-07-23:** lanzamiento público de la marca corporativa nueva. Comunicación dirigida individual a cada cuenta Kind actual (Lorena), en paralelo al cambio público, anclada en continuidad de equipo y método.

**Salida de la ola 3:** dos sitios operativos, voz alineada al nicho declarado en cada puerta, motor cross-brand activo, canal Speaker visible, clientes Kind actuales informados.

### Ola 4, del 2026-07-24 al 2026-08-13 — acompañamiento conversacional corporativo

- **2026-07-24 a 2026-08-06:** construcción de la KB del chatbot corporativo en el formato de `/ChatBot/KB Sentir/`, calibrada al rol de RRHH y Bienestar (preguntas frecuentes sobre formato de programa, medición de impacto, modalidades remotas, condiciones de contratación, casos referenciales).
- **2026-08-07 a 2026-08-13:** asistente WhatsApp corporativo en versión MVP, con número dedicado y saludo propio. Califica al lead y deriva al equipo humano. La iteración hacia método consultivo de siete pasos completo queda como segunda fase, fuera del horizonte de este plan.

**Salida de la ola 4:** asimetría de soporte cerrada, primer lead corporativo atendido por el canal conversacional dedicado.

---

## 4. Dependencias y riesgos

### Dependencias

- **Dependencia bloqueante reconocida (fuera del scope):** plataforma de cobro propia para los cursos ondemand. Hasta que esa pieza exista como proyecto con scope, equipo y plazo, la web no toca `descanso.html` ni `ondemand.html`. El owner abre el ítem en Projects & Tasks el 2026-05-15.
- **Capacidad operativa para responder consultas corporativas en franja de 15 minutos a 2 horas hábiles.** El KPI de tiempo de respuesta y la intervención INT-7 dependen de que Lorena, Lucila o un asistente externo puedan sostener esa ventana. Pendiente confirmación operativa antes de la ola 4.
- **Equipo de diseño existente disponible** durante la ola 2 (identidad de la marca nueva) y ola 3 (sitios y página de eventos).
- **Acceso a Vercel Analytics y GA4** con permisos de configuración para fijar baseline en la ola 1.
- **Apertura de tres a cinco clientes Kind actuales** para Switch Interview en la ola 2. La gestión de los contactos la lleva Lorena.

### Riesgos y mitigaciones

- **Naming dilatado:** caja de tiempo cerrada de dos semanas (2026-05-22 a 2026-06-05). Si vence sin decisión, se ejecuta Plan B: sitio sale con marca placeholder por 90 días. La operación corporativa no se frena por el nombre definitivo.
- **Marca corporativa nueva sin prueba social heredada:** documentar explícitamente la continuidad con Sentir ("nacida del equipo clínico de Sentir Mindfulness, con presencia en Cargill, Electrolux, John Deere") sin que la palabra "mindfulness" aparezca en el encabezado. Citar las reseñas Google de Sentir sin duplicar el sistema de reviews.
- **Clientes Kind actuales confundidos por el cambio:** comunicación individual a cada cuenta antes del lanzamiento público (semana del 2026-07-17), llevada por Lorena. Anclar el mensaje en continuidad de equipo y método. Migrar contratos vigentes con facturación documentada.
- **Puente cross-brand abierto sin capacidad de respuesta:** arrancar con expectativa explícita de 48 horas en el formulario, priorizar respuesta humana en las primeras 20 a 30 consultas, automatizar la calificación inicial sólo después.
- **Charla gratis en eventos leída como servicio recurrente:** redactar el copy como decisión editorial acotada ("participamos en X eventos por año, sin honorarios, cuando hay coincidencia de propósito") y publicar criterios de elegibilidad.
- **Reclamos por cambio de precio:** redactar nota con fecha efectiva, honrar a usuarios en curso de conversación el precio menor por ventana acotada (7 días), propagar simultáneamente en web, KB y plataforma de cobro.
- **Limpieza estilística leída como reescritura de la voz de las hermanas Campos:** explicitar el criterio a las autoras (los patrones que se retiran son los identificados en `style-guide.md` reglas E y F como marcadores tipográficos de salida automatizada, no la voz de Lorena y Lucila). Limitar la pasada a esos dos patrones.
- **Capacidad simultánea del equipo:** secuenciar como propone la sección 3, no ejecutar las cuatro olas en paralelo. Si en algún tramo la capacidad cae, postergar INT-7 (la ola más diferible) antes que comprometer INT-1.

---

## 5. Próxima revisión

El plan se revisa al cierre de cada ola contra los entregables comprometidos. Cierre formal previsto al final de la ola 4 (2026-08-13), con primera medición real de los KPIs a 90 días del lanzamiento de la ola 3 (2026-10-23). Las hipótesis de impacto se actualizan en ese momento con números medidos.
