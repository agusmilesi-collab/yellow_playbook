# Diagnóstico: Web de Sentir Mindfulness

**Cliente:** Sentir Mindfulness (Rosario, Argentina). Equipo: Lorena Campos, Lucila Campos, Agustín Milesi.
**Foco:** la web (`Web Sentir/` desplegada en Vercel) como primer touchpoint del journey.
**Fecha:** 2026-05-14
**Versión:** Borrador v2 (incorpora la decisión de split de marca tomada por el owner el 2026-05-14)

---

## 1. Contexto del cliente

Sentir Mindfulness es una práctica de bienestar corporativo y formación en mindfulness con sede en Rosario, Argentina. La operación combina dos puertas de servicio diferenciadas. La puerta B2B atiende empresas con tres programas estructurados (HR Help Kit para equipos de Recursos Humanos, Liderazgos Humanos para mandos medios, Cultura Kind para el equipo completo) más una capa de productos transversales (coaching, charlas, encuentros regulares de meditación). La puerta B2C comercializa un taller de cuatro encuentros (Bienestar y Mindfulness) en modalidad presencial u online, y un catálogo incipiente de cursos grabados (uno disponible, cinco anunciados como próximos).

El equipo profesional son dos psicólogas con maestría en Mindfulness por la Universidad de Zaragoza (Lorena y Lucila Campos) y un socio de perfil comercial (Agustín Milesi, MBT por San Andrés). La presencia en clientes corporativos está respaldada por logos visibles en el sitio (Cargill, Electrolux, John Deere, Endava, entre otros). La presencia individual está respaldada por reseñas verificables (`4,9 / 332 opiniones en Google`).

El owner declaró una estrategia comercial específica: el nicho de individuos opera como vehículo para llegar al nicho de empresas. Los individuos se capturan vía Instagram y TikTok, atraviesan el taller, y se espera que recomienden la contratación corporativa adentro de sus organizaciones. A esto suma el sponsoring de eventos corporativos mediante charlas gratuitas como sustituto del presupuesto publicitario que no está disponible.

### Decisión estratégica del 2026-05-14: división de marcas

Tras revisar la versión inicial de este diagnóstico, el owner decidió dividir la operación en dos marcas. "Sentir Mindfulness" permanece como la marca dirigida a individuos. Una marca nueva, provisionalmente llamada "SM" y con nombre definitivo a definir (probablemente del tipo "Bienestar Corporativo"), atenderá la puerta empresas. La separación abarca identidad, sitio web e Instagram. La estrategia comercial cross-brand se mantiene: las dos marcas atienden el mismo problema raíz (estrés y carga emocional generada por el contexto laboral), una desde la puerta del individuo, la otra desde la puerta de la organización, con un puente intencional entre ambas. Esta decisión es la intervención madre del rediseño y reordena los pain points y la propuesta que siguen.

---

## 2. Service blueprint actual

### Customer journey, puerta empresas

El visitante llega al dominio raíz (`sentirmindfulness.com`), aterriza por defecto en `index.html` con un encabezado que enumera audiencias ("Trabajamos con RRHH, con líderes y con equipos"), atraviesa una sección de tres puertas (HR Help Kit, Liderazgos Humanos, Cultura Kind), cada una con una cita de dolor y un CTA "Ver tesis del programa". Cada puerta abre una landing en formato de paper académico (`hr-help-kit-paper.html`, `liderazgos-humanos.html`, `cultura-kind.html`) con código SHR-001, SLH-001 o SCK-001, notas al pie y la opción "Descargar programa" que dispara `window.print()`. Tras leer la tesis, el visitante vuelve a la página principal, encuentra "Próximos pasos" (meet de 30 minutos, propuesta en 48 horas, arrancamos), un bloque de productos transversales (coaching, charlas, encuentros regulares), los logos de Empresas Kind, y un formulario de contacto que envía a `formspree.io/lorecamposhr@gmail.com` y redirige a `gracias.html`.

### Customer journey, puerta individuos

El visitante puede llegar a `individuos.html` desde la navegación del sitio empresas o desde tráfico orgánico o pago de redes. El encabezado abre con una definición técnica de mindfulness y un subtítulo explicativo, sumado a una insignia de reseñas de Google. Sigue una sección "Para quién es / Qué vas a lograr", dos tarjetas de modalidad con precio (`$84.000` presencial, `$42.000` online), un carrusel de reseñas, la galería del salón con mapa, el detalle del programa de cuatro encuentros, un avance de los cursos grabados, y una presentación final del equipo dictante (Lorena y Lucila, sin Agustín). Los botones "Inscribirme" llevan a URLs externas en el dominio `sentirmindfulness.com.ar`.

### Customer journey, puerta cursos grabados

Desde `individuos.html`, el visitante salta a `ondemand.html`, donde encuentra un catálogo de seis tarjetas. Una está disponible (Descanso, `$15.000`), cinco están bloqueadas con la etiqueta "Próximamente". Si compra Descanso, accede a `descanso.html`, una landing extensa con pain, beneficios, módulos, objeciones, credenciales y un CTA final "Quiero descansar de verdad".

### Customer journey, soporte conversacional

Paralelamente al sitio, el equipo opera un asistente WhatsApp (`Lore`, KB en `/ChatBot/KB Sentir/`) para el segmento individuos. Lore aplica un método consultivo de siete pasos (empatizar, agitar, aislar, revelar, resolver, validar, cerrar), con reglas de tono y derivación. La inscripción al taller, por política expresa de la KB, se realiza solo a través del sitio (no por mensaje). No existe un asistente equivalente para la puerta empresas.

### Capas del blueprint

| Acciones del cliente | Frontstage | Backstage | Procesos de soporte |
|---|---|---|---|
| Llega al sitio (raíz) | Hero empresas, sección de puertas | Configuración de Vercel, copy redactado en bloque | DNS, hosting, fonts (Google Fonts), GTM, Vercel Analytics |
| Explora una puerta corporativa | Paper SHR-001 / SLH-001 / SCK-001 con tesis larga | `window.print()` simula descarga; no hay PDF servido | Navegador del usuario |
| Llena formulario de contacto | Formspree + redireccionamiento a `gracias.html` | Notificación a `lorecamposhr@gmail.com` | Formspree, dataLayer push `lead_submit` |
| Llega a `individuos.html` | Modalidad y precio; CTA "Inscribirme" | Redirección a `sentirmindfulness.com.ar` (dominio externo) | Plataforma de e-commerce no documentada en el repo |
| Escribe por WhatsApp | Lore responde con método de 7 pasos | Inscripción solo por web; pago por transferencia | KB en /ChatBot/KB Sentir/, WhatsApp Business |
| Recibe la confirmación | Comprobante enviado a `info@sentirmindfulness.com` | Verificación manual del pago | Email, banco |
| Atraviesa el taller | Cuatro encuentros presenciales u online | Operación de las facilitadoras | Salón Santiago 1269, Zoom |
| Termina | Certificado de asistencia bajo pedido | Solicitud manual | Email |

El customer journey corta en el touchpoint "termina el taller". No existe en el sitio (ni en la KB) infraestructura para el momento posterior, donde el owner declara que vive su motor de negocio (referral interno hacia empresas).

---

## 3. Job-to-be-Done de cada puerta

### Puerta individuos

Job dominante propuesto:

> *"Cuando llego al final del día agotado y siento que el ritmo me superó, quiero algo concreto y rápido que me devuelva calma en esta misma semana, para poder dormir sin rumiar, dejar de descargar mi día en mi familia, y volver a sentir que tengo el control sobre mi propia cabeza."*

Los tres jobs en juego:

- **Functional job:** incorporar técnicas validadas que bajen el nivel de alerta y se sostengan en la rutina, sin requerir conversión a un estilo de vida nuevo.
- **Emotional job:** dejar de sentir que perdí control sobre mi propia atención.
- **Social job:** poder decir "estoy haciendo algo serio" sin que el entorno laboral lo lea como esoterismo o como signo de fragilidad.

Contra qué compite realmente:

- Aplicaciones de meditación tipo Calm, Headspace, Insight Timer.
- Psicoterapia individual.
- Yoga, pilates, gimnasio (descarga somática).
- La copa de vino, la pastilla y la hora de masaje que el propio encabezado del sitio nombra.
- Retiros de fin de semana.
- "Aguantar".

### Puerta empresas

Job dominante propuesto:

> *"Cuando me piden ejecutar la estrategia de bienestar de la organización, quiero un partner que traiga un programa con método, cronograma y métricas, para poder defender la decisión ante el directorio con evidencia, y para dejar de cargar yo solo el peso emocional de toda la empresa."*

Los tres jobs en juego:

- **Functional job:** comprar un programa estructurado con contenido, fechas, modalidades y entregables, en lugar de diseñarlo internamente.
- **Emotional job:** sentir que del otro lado hay alguien que entiende el rol y que no se necesita explicar cada vez por qué la persona de RH carga lo que carga.
- **Social job:** poder presentar la decisión ante el directorio o ante pares de gerencia con un entregable que se lea como criterio profesional, no como gasto blando.

Contra qué compite realmente:

- Consultoras grandes de DO (Great Place to Work y similares).
- Plataformas SaaS de bienestar (Bonusly, Tutu, suscripciones corporativas a Calm / Headspace).
- Speakers individuales contratados por charla.
- Hacer el programa internamente con el propio equipo de RH.
- Universidades corporativas y áreas de aprendizaje internas.
- Postergar la decisión.

### Meta-patrón observable

Existe en Sentir el patrón "regala la ventaja real, cobra la commodity" descrito en `playbook/02-methodology/jtbd.md`. La ventaja real (lectura clínica de la dinámica grupal, criterio de cuándo una conversación organizacional necesita intervención versus cuándo necesita límite, capacidad de detectar el riesgo psicosocial antes de que el indicador aparezca) está distribuida en la voz de los papers SHR-001, SLH-001, SCK-001, pero no se ofrece como un servicio cobrable separado. Lo que se cobra es la grilla de encuentros (4,5 horas, 6 horas, 12 horas).

Hipótesis 🔵: existe una franja de cliente corporativo que pagaría por la lectura clínica anticipada (auditoría de riesgo psicosocial, diagnóstico de equipo, segunda opinión sobre una situación específica) sin contratar el programa completo. Hoy esa ventana no está expuesta en el sitio.

---

## 4. Pain points identificados

### 1. La marca opera como barrera de entrada para el decisor corporativo ✅

El nombre "Sentir Mindfulness" contiene dos cargas semánticas que penalizan la entrada del decisor corporativo. La palabra "sentir" empuja la propuesta hacia la categoría wellness emocional. La palabra "mindfulness" la cataliza hacia la subcategoría espiritual o esotérica, en un mercado donde la última década llenó esa palabra con app stores, retiros pagos, y contenidos de baja densidad clínica. El responsable de RRHH o de Bienestar de una empresa grande, evaluando un proveedor para una iniciativa con presupuesto del directorio, atraviesa ese filtro semántico antes de leer una sola línea del contenido real (que es serio, basado en evidencia y operado por psicólogas con maestría). La web actual carga todo el peso de superar esa barrera en lugar de evitarla: hace falta llegar al encabezado de empresas, navegar a un paper SHR-001, leer una nota al pie sobre Edmondson y ver los logos de Cargill o John Deere para que la barrera se rompa. Buena parte del tráfico se evapora antes. La decisión del owner (2026-05-14) de dividir la operación en dos marcas reconoce este pain como causa raíz y lo trata desde el origen del touchpoint, no desde su superficie. El subsidiario inmediato de la división es que el motor B2C hacia B2B declarado, hoy sin infraestructura web, necesita rediseñarse como puente cross-brand explícito ("hiciste el taller en Sentir, conocé SM para tu empresa") con copy, atribución y formulario propio.

### 2. Discrepancia material entre la web y la knowledge base sobre precio y medios de pago ✅

La tarjeta de modalidad online en `individuos.html` declara `$42.000` con la etiqueta "transferencia o tarjeta". La KB del chatbot (`05 precios y pagos.md`) declara `$45.000` y excluye explícitamente "tarjeta de crédito" y "cuotas". Dos consecuencias inmediatas. Primero, un usuario que cotice por el chatbot recibe una cifra distinta a la que vio en el sitio, lo cual viola Good Services P3 (establecer expectativas) y P9 (consistencia). Segundo, si la cifra que se cobra es la de la KB, la web está promoviendo un precio menor al real y un medio de pago que después no se acepta, situación que en términos de defensa del consumidor argentino puede leerse como publicidad engañosa.

### 3. Pieza ondemand publicada sin plataforma de cobro detrás ✅

El botón principal de `descanso.html` tiene `href="#"`. La lectura inicial fue "CTA roto, reparación trivial". El owner aclara que no es un bug: la plataforma de cobro del catálogo ondemand todavía no existe. La pieza está publicada como si fuera un producto activo, pero detrás no hay infraestructura para cobrar. Cada visita que llega motivada al CTA encuentra un producto sin transacción posible. El pain real no es el `href`; es que el sitio expone un producto cuya pieza operativa de cobro está pendiente. La reparación requiere construir la plataforma de cobro de ondemand antes que tocar la web. Mientras tanto, `descanso.html` opera como punto muerto Good Services P10. Esta intervención queda fuera del scope del plan de rediseño y se trata como dependencia bloqueante separada.

### 4. Cul-de-sac en cinco de las seis tarjetas del catálogo ondemand ✅

El 83% del catálogo (Estrés y Burnout, Ansiedad, Foco, Amabilidad, Alimentación) está bloqueado con la etiqueta "Próximamente". El visitante que entra atraído por uno de esos títulos se encuentra con tarjetas sin acción posible. Good Services P10 (no tener puntos muertos) queda violado: cinco usuarios sobre seis no tienen a dónde ir desde su card. La narrativa "tenemos un sistema de cursos" entrega "tenemos un curso y una promesa". El costo de oportunidad no es solo la conversión perdida; es la confianza erosionada en el resto del catálogo y en el taller, que también es un producto Sentir. Tratamiento dependiente del pain 3: mientras no exista plataforma de cobro de ondemand, el catálogo entero queda en pausa estructural.

### 5. La inscripción al taller sale a un dominio externo no atado a la marca canónica ✅

El sitio canónico declarado vía `<link rel="canonical">` es `sentirmindfulness.com`. Los botones "Inscribirme al presencial" e "Inscribirme al online" en `individuos.html` saltan a `sentirmindfulness.com.ar/e/taller-mindfulness-presencial`. El usuario atraviesa un cambio de dominio sin señal explícita, en el momento exacto de mayor sensibilidad: el momento del pago. Sumado a esto, la KB declara `sentirmindfulness.com.ar/` como la única vía de inscripción, lo que confirma que la operación de cobro vive en un sistema separado. Falta un puente visual o de mensaje que diga "salís a la plataforma de inscripción". Good Services P7 (agnóstico de la estructura organizacional) y P9 (consistencia a lo largo del servicio) quedan tocados.

### 6. La modalidad Intensiva existe en la KB y no en la web — retirado ✅

Lectura inicial: la KB describe dos ediciones (estándar e intensiva) y la web sólo muestra una, dejando oferta oculta para el canal con mayor tráfico. El owner aclara que la edición intensiva es de tirada única y se gestiona deliberadamente desde el canal conversacional (Lore), no desde la web. La asimetría es decisión de canal, no un touchpoint faltante. Pain retirado del plan. La nota se conserva acá para que la decisión quede trazada en futuras revisiones.

### 7. Job dominante diluido en el encabezado de ambas puertas ✅

El encabezado de `index.html` (empresas) abre con "Trabajamos con RRHH, con líderes y con equipos para mejorar el bienestar en las empresas". Es una descripción de audiencias; el job del cliente queda implícito. El encabezado de `individuos.html` abre con una definición técnica de mindfulness ("estar en el momento presente"). Es una descripción de la categoría; el job del cliente queda postergado hasta la sección "¿Para quién es?". El owner ya posee un copy preciso para el job individuo ("salí del modo automático, llevate herramientas concretas para frenar la ansiedad, desde la primera semana"). Ese copy no aparece en la página. La promesa que vende está fuera del touchpoint donde más se decide. Con el split de marca confirmado, este pain se desacopla por marca: Sentir necesita migrar el copy del nicho individuo a su encabezado; SM nace con encabezado job-dominante desde el día cero, sin arrastrar la inercia de hablar como descripción de oferta.

### 8. Asimetría de soporte entre puertas ✅

El segmento individuos tiene un chatbot (Lore) con KB completa, método consultivo de siete pasos, reglas de tono específicas y derivación a humano. El segmento empresas, que el owner declara como el de mayor ticket, tiene un formulario que dispara un email a `lorecamposhr@gmail.com` y una promesa de respuesta en 24 horas. La inversión operativa para acompañar individuos (con menor ticket y mayor volumen) está hecha. La inversión equivalente para acompañar al decisor corporativo, que típicamente quiere preguntar primero y completar formularios después, no está hecha. Con el split, SM puede heredar la arquitectura conversacional de Lore (KB modular, método de siete pasos, reglas de tono) y reentrenarla para el rol corporativo: un asistente que califica al lead, responde dudas operativas frecuentes y deriva al equipo humano para la propuesta. Es un activo replicable más que un desarrollo nuevo.

### 9. Nicho declarado por el owner ausente del copy y de la KB ✅

El owner brifeó un nicho específico: profesionales de 30 a 50 años con cargos de responsabilidad (gerentes, mandos medios, emprendedores, independientes), con descripciones conductuales precisas ("se despiertan a las 3 de la mañana pensando en el mail que no respondieron", "reaccionan con sus hijos de formas que después lamentan"). Ese perfil no se refleja ni en el copy de `individuos.html` ni en la KB del chatbot, donde la audiencia se describe como "personas que sienten estrés o ansiedad, mayores de 16, sin restricción de género". El producto le habla a un perfil más genérico que el que el owner declara querer atender. El costo es competir por atención con cualquier otro producto de bienestar, en lugar de competir solo con productos para la franja específica. Con el split, este pain se vuelve más fácil de capitalizar: Sentir afina toda su voz hacia el profesional 30 a 50 con cargo (y deja afuera el "mayores de 16" que no traía clientes corporativos), mientras SM construye una segunda voz desde cero, calibrada al decisor de RRHH y Bienestar. Cada marca habla a un solo perfil, sin el costo de cubrir todo el espectro.

### 10. La puerta "Speaker / charla gratis en eventos" está declarada sin touchpoint ✅

El owner declaró que un canal de captación, justificado por la ausencia de presupuesto publicitario, es ofrecer charlas gratuitas en eventos corporativos. Ese canal no tiene página propia. Las dos socias se presentan como "Speaker · Facilitadora corporativa" en el bloque de equipo, pero no hay una ruta para el organizador de evento que llega buscando un speaker. Quien entra a `index.html` con esa intención no encuentra el camino. El canal declarado existe en la operación; no existe en el sitio.

### 11. Marcadores de generación automática en el copy de las landings individuos y descanso ✅

`individuos.html` y `descanso.html` contienen, en el cuerpo del copy, raya larga usada como recurso retórico, y la fórmula "no es X, sino Y" repetida. Ejemplos verificables: "La forma más efectiva de llegar a ese estado es a través de la meditación. No la meditación de inciensos y mantras, sino la meditación como entrenamiento de la atención" (`individuos.html`); "Sentís que siempre estás 'on', y que no tenés un botón de apagado" (`descanso.html`); "Probaste apps de meditación y a los 3 días las abandonaste" (`descanso.html`). El playbook Yellow (`style-guide.md` regla E y F) los identifica como marcadores estilísticos típicos de salida automatizada de modelos de lenguaje. El cliente final del taller probablemente no nombre el patrón; aún así percibe, vía sesgo de afluencia retórica, una mezcla con la categoría "contenido generado por IA". Para un producto que se vende como criterio clínico ("psicólogas con maestría, sin misticismo, basado en evidencia"), ese pequeño ruido erosiona el principal activo de la propuesta: la autoridad humana de las profesionales.

---

## 5. Diagnóstico central

Una sola marca atiende dos jobs estructuralmente distintos. La marca actual ("Sentir Mindfulness") está optimizada para el job del individuo: nombre con carga emocional, vocabulario de la práctica, prueba social Google con reseñas personales. Esa misma marca se intenta proyectar al decisor corporativo, que llega con un job radicalmente distinto (defender una decisión de bienestar ante el directorio con criterio técnico y métrica) y atraviesa la palabra "mindfulness" como filtro negativo antes de tocar el contenido. El esfuerzo que se hace sobre la web actual (papers SHR-001, footnotes a Edmondson, logos de Cargill o John Deere) trabaja en superar la barrera; no en evitarla. Con el split de marca confirmado, el rediseño cambia de naturaleza: pasa de optimizar una web para dos audiencias a construir dos sistemas (marca, web, Instagram, voz) cada uno calibrado a su job, con un puente cross-brand intencional que sostiene el motor B2C hacia B2B que el owner ya opera. La web actual no necesita reconstruirse para Sentir individuos; necesita afinar la voz y reparar las inconsistencias operativas. La operación corporativa necesita una marca nueva, no una refactorización de la actual.

---

## 6. Propuesta de rediseño

### 1. Split de marca: Sentir Mindfulness (individuos) y marca corporativa nueva

**Qué:** ejecutar la división de marca decidida por el owner. La operación queda con dos marcas independientes en identidad, sitio web, Instagram, presumiblemente dominio. Sentir Mindfulness retiene la puerta individuos con su voz actual (afinada al nicho 30 a 50 con cargo). La marca corporativa nueva (placeholder "SM", nombre real a definir vía ejercicio de naming acotado) atiende empresas con un vocabulario propio que evita la barrera "mindfulness". Ambas marcas comparten equipo, salón físico, KB clínica y prueba social de fondo, pero comunican como dos productos distintos.

**Por qué:** responde a los pain points 1, 7, 8 y 9 desde la causa raíz. Evita la barrera lingüística que penaliza la entrada corporativa en lugar de intentar superarla en cada touchpoint. Habilita dos voces calibradas, dos arquitecturas de prueba social y dos sistemas de captación operando en paralelo, sin competir por la home del mismo dominio.

**Cómo se ve:** un mini-ejercicio de naming previo a la ejecución (briefing de 1 página con criterios funcionales, emocionales y operativos; propuesta de 5 a 8 nombres evaluados contra esos criterios; testeo informal con 3 a 5 decisores de RRHH del entorno antes de definir). Después del naming: identidad visual nueva (paleta, tipografía, tono fotográfico) que use el equipo de diseño existente del proyecto, sitio dedicado con dominio propio, Instagram propio. La separación operativa de identidad y comunicación, no de equipo ni de oficio.

### 2. Puente cross-brand explícito (motor B2C hacia B2B)

**Qué:** materializar el puente entre Sentir y la marca corporativa en los touchpoints donde el referral interno se vuelve económicamente accionable. Bloques al final de `individuos.html`, `ondemand.html`, `descanso.html` y la página de gracias post-inscripción, más una rama nueva en la KB de Lore. Mensaje tipo: "Si querés traer esto al equipo donde trabajás, te presentamos a [marca corporativa]". Formulario acotado con tres campos (nombre, empresa, rol) y un menú desplegable del programa que el visitante sospecha que aplica. Atribución cross-brand pre-llenada ("vine desde Sentir individuos") para medir el motor.

**Por qué:** subsidiario directo de la intervención 1. El split de marca preserva la estrategia comercial del owner solo si el puente cross-brand existe; sin él, el motor B2C hacia B2B se rompe. Captura el momento donde la disposición a recomendar es máxima.

**Cómo se ve:** una sección breve y honesta al final de las páginas Sentir individuos, sin agresividad comercial. En la KB de Lore, una rama nueva: cuando el usuario menciona "empresa", "trabajo" o "equipo", Lore presenta la marca corporativa y deriva al canal correspondiente. Inverso opcional: en la marca corporativa, un bloque "tu empresa todavía no contrató, pero querés arrancar vos" que deriva a Sentir individuos.

### 3. Sincronización web, KB y plataforma de cobro de Sentir individuos

**Qué:** resolver la discrepancia entre la web (`$42.000`, "transferencia o tarjeta") y la KB (`$45.000`, "solo transferencia o depósito"). Definir un único precio oficial y los medios de pago oficiales. Propagar a web, KB y plataforma de cobro la misma información. Documentar el SSOT en un lugar único. Agregar señales explícitas en el momento del salto del dominio canónico (`sentirmindfulness.com`) a la plataforma de inscripción (`sentirmindfulness.com.ar`), con un mensaje del tipo "Te llevamos a nuestra plataforma de inscripción" antes del redireccionamiento.

**Por qué:** responde a los pain points 2 y 5. Cierra un riesgo operativo y un riesgo legal de menor a mediana magnitud y reduce la fricción en el momento de mayor sensibilidad del journey.

**Cómo se ve:** un archivo de configuración o una tabla en Notion (donde el owner ya opera Projects & Tasks) que actúe como SSOT. Web, KB y plataforma de cobro consumen el mismo valor. Una pantalla de transición sobria en el clic de "Inscribirme".

### 4. Ondemand: dependencia bloqueante reconocida, fuera del scope del plan

**Qué:** declarar explícitamente que la pieza ondemand (`descanso.html` y las cinco tarjetas "Próximamente" de `ondemand.html`) queda pausada hasta que exista la plataforma de cobro propia. La intervención sobre la web no puede arreglar el síntoma sin esa pieza operativa detrás. El plan de rediseño no toca ondemand; lo registra como dependencia.

**Por qué:** los pain points 3 y 4 son síntomas de la misma causa raíz (ausencia de infraestructura de cobro para producto digital). Construir esa plataforma es un proyecto separado, con scope, equipo y plazo propios. Forzar una solución web (lista de espera, despublicación, cambio de copy) antes de decidir qué hacer con el producto subyacente posterga la decisión de fondo y agrega trabajo descartable.

**Cómo se ve:** registro formal en el plan como dependencia externa. Cuando la plataforma de cobro entre al roadmap, se abre un caso o intervención dedicada para reconectar la web con ese sistema. Hasta entonces, `descanso.html` y `ondemand.html` permanecen con su estado actual.

### 5. Voz al nicho declarado y limpieza estilística (Sentir individuos)

**Qué:** trabajo editorial en dos planos sobre los archivos de Sentir individuos. Primero, voz al nicho: reescribir el encabezado de `individuos.html` para abrir con el job del cliente, migrar el copy del nicho que el owner brifeó ("Salí del modo automático. Llevate herramientas concretas para frenar la ansiedad y empezar a vivir con más calma, desde la primera semana") y propagar la conducta del nicho a las secciones de beneficios y objeciones. Actualizar la KB del chatbot Lore (archivos `01 identidad y mindfulness.md`, `02 el taller.md`, `prompt_lore.md`) para reflejar el ICP declarado (profesionales 30 a 50 con cargos de responsabilidad) en lugar del ICP genérico actual. Segundo, limpieza estilística: retirar del cuerpo argumentativo las rayas largas usadas como recurso retórico y las construcciones "no es X, sino Y" en `individuos.html` y `descanso.html`. Reemplazar por puntos, comas o reescritura. Mantener las cursivas y la voz de Lorena y Lucila Campos.

**Por qué:** responde a los pain points 7, 9 y 11. El copy que falta ya existe en el brief del owner; la operación es editorial, no creativa. Los marcadores estilísticos retirados son los que `playbook/02-methodology/style-guide.md` (reglas E y F) identifica como señales de salida automatizada de modelos de lenguaje, que erosionan la credibilidad clínica del producto.

**Cómo se ve:** un encabezado reescrito, dos a tres bloques actualizados en `individuos.html`, una pasada sobre los archivos de KB mencionados, y una revisión editorial focalizada de dos a tres horas sobre `individuos.html` y `descanso.html` con criterio explícito de patrones a evitar. La marca corporativa nueva nace con su voz desde cero, sin arrastrar estos pasivos.

### 6. Página de Speaker / charla en eventos para la marca corporativa

**Qué:** dentro del sitio de la marca corporativa nueva, una página dedicada que explicite la oferta de charlas en eventos. Temas disponibles, formato (presencial Rosario o remoto), lo que el organizador del evento provee, lo que aporta la marca, formulario específico. Posicionar como una decisión editorial de la marca ("participamos en X eventos por año, sin honorarios, cuando hay coincidencia de propósito") más que como un servicio recurrente y gratuito.

**Por qué:** responde al pain point 10. Hace visible un canal que el owner ya opera de hecho y que es declarado como sustituto del presupuesto publicitario que no tiene. Funciona como funnel de captación nativo de la marca corporativa, sin tener que apoyarse en Sentir individuos para esa función.

**Cómo se ve:** una página breve dentro del sitio de la marca corporativa, en el formato paper que ya existe en los tres papers SHR-001, SLH-001 y SCK-001 (con título, premisa, qué se aporta, qué se pide, y formulario). Adicional opcional: una galería de eventos pasados si los hubo.

### 7. Acompañamiento conversacional para la marca corporativa

**Qué:** dentro de la marca corporativa nueva, replicar la arquitectura del chatbot Lore que ya opera para Sentir individuos. Construir una KB equivalente para el decisor corporativo (preguntas frecuentes sobre formato del programa, cómo se mide impacto, modalidades para equipos remotos, condiciones de contratación, casos referenciales). En una primera versión, un asistente que califica al lead y lo deriva a una llamada. En una segunda iteración, atraviesa el método consultivo completo, calibrado al rol corporativo (más formal, menos emocional, ancla en métricas y precedentes).

**Por qué:** responde al pain point 8. Iguala la inversión de soporte con el segmento de mayor ticket y aprovecha el activo conversacional ya construido para individuos. El sistema operativo del chatbot se reutiliza; el reentrenamiento es de tono, vocabulario y rama de derivación.

**Cómo se ve:** una KB en el mismo formato que `/ChatBot/KB Sentir/` con archivos específicos para empresas (identidad, programas, modalidades, casos, contratación, derivación). Un asistente WhatsApp con número dedicado al canal corporativo, identidad propia y un saludo distinto al de Lore.

---

## 7. Hipótesis de impacto

| Métrica | Hipótesis | Cómo se mide |
|---|---|---|
| Tasa de entrada corporativa que llega a la marca nueva sin atravesar Sentir | Hoy 100% del tráfico corporativo pasa por `index.html` con la palabra mindfulness en URL y branding. Hipótesis: con marca propia, 60 a 80% del tráfico corporativo entra directo a la marca nueva en seis a doce meses. | GA4 cross-domain. Atribución de origen del lead. |
| Tasa de conversión del encabezado al formulario en el sitio corporativo nuevo | Hoy ❓ baseline en `index.html`. Hipótesis: con voz job-dominante y sin la palabra mindfulness, conversión 1,5x a 2x sobre la actual. | GA4 funnel del sitio nuevo. |
| Tasa de referral cross-brand (individuo Sentir genera consulta corporativa) | Hoy 0% por ausencia de touchpoint. Hipótesis: 3 a 5% en seis meses sobre la base de inscriptos al taller. | Formulario cross-brand dedicado con campo de atribución. CRM. |
| Leads de eventos / charlas en la marca corporativa | Hoy 0 por ausencia de touchpoint. Hipótesis: 1 a 3 leads por mes al lanzar la página. | Formulario `eventos` del sitio corporativo. |
| Discrepancia precio web Sentir vs KB | Hoy declarada. Hipótesis: cae a 0 al consolidar SSOT. | Auditoría manual periódica más alerta automática. |
| Tiempo de respuesta en consultas corporativas | Hoy 24 horas declaradas en `gracias.html`. Hipótesis: con asistente conversacional dedicado, 15 minutos a 2 horas hábiles. | Timestamp del primer contacto a primer mensaje del equipo. |
| Reconocimiento de marca corporativa nueva entre decisores de RRHH del entorno | Hoy 0. Hipótesis: 15 a 30% de reconocimiento en doce meses sobre una muestra acotada (50 decisores del entorno Rosario más cuentas Kind actuales). | Encuesta anual breve. |

**Status:** todas son hipótesis. Pendiente medición real post-implementación.

---

## 8. Riesgos y consideraciones

- **Riesgo:** la marca corporativa nueva pierde el activo de prueba social que Sentir construyó (4,9 estrellas y 332 reseñas en Google, logos de Empresas Kind, antigüedad demostrable). Nace en blanco. **Mitigación:** documentar explícitamente en el sitio de la marca nueva la relación con Sentir Mindfulness ("nacida del equipo clínico de Sentir Mindfulness, con X años de experiencia en empresas como Cargill, Electrolux, John Deere") sin que la palabra "mindfulness" aparezca en el encabezado. La continuidad del equipo es activo defendible; la palabra es lo que se descarta. La prueba social Google de Sentir es transferible vía cita ("nuestra contraparte para individuos tiene 4,9 estrellas en Google sobre 332 reseñas") sin necesidad de duplicar el sistema de reviews.

- **Riesgo:** los clientes Kind actuales (Cargill, Electrolux, John Deere, etc.), que conocen a Sentir Mindfulness, se confunden ante la marca nueva o leen el cambio como inestabilidad. **Mitigación:** comunicación dirigida individual con cada cuenta Kind antes del lanzamiento público, explicando la decisión (claridad para el mercado, no cambio de equipo ni de método). Migrar los contratos vigentes a la marca nueva con continuidad de facturación documentada.

- **Riesgo:** el ejercicio de naming dilata la ejecución y termina en parálisis decisional. **Mitigación:** caja de tiempo de dos semanas para naming, con criterio explícito de aprobación (decisor único o pareja decisora, no comité) y un Plan B operativo de "lanzamos con un placeholder durante 90 días y rebauteamos si aparece algo mejor". El sitio nuevo se puede subir con marca placeholder. La operación corporativa no se frena por el nombre definitivo.

- **Riesgo:** abrir el puente cross-brand sin equipo dispuesto a calificar y responder en plazo razonable degrada la experiencia que el rediseño busca crear. **Mitigación:** arrancar con un volumen contenido (formulario con expectativa explícita de 48 horas), priorizar respuesta humana sobre automática en las primeras 20 a 30 consultas, y solo después decidir si se automatiza la calificación inicial.

- **Riesgo:** ofrecer la "charla en eventos" como puerta visible puede atraer organizadores que asumen que es un servicio recurrente y gratuito. **Mitigación:** redactar el copy como una decisión editorial ("participamos en X eventos por año, sin honorarios, cuando hay coincidencia de propósito") y establecer criterios públicos de elegibilidad. La aparente generosidad se convierte en posicionamiento.

- **Riesgo:** propagar el cambio de precio (si la cifra real es `$45.000`) ante usuarios que vieron `$42.000` puede generar reclamos puntuales en el corto plazo. **Mitigación:** redactar una nota de cambio con fecha efectiva, honrar a usuarios en curso de conversación el precio menor por una ventana acotada (por ejemplo, 7 días), y propagar el cambio simultáneamente en web, KB y plataforma de cobro.

- **Riesgo:** la limpieza estilística puede leerse internamente como reescritura del estilo de Lorena y Lucila. **Mitigación:** explicitar el criterio (los patrones que se retiran son marcadores tipográficos asociados a salida automatizada de modelos, no a la voz de las hermanas Campos) y limitar la pasada a esos dos patrones específicos.

- **Riesgo:** la implementación simultánea de las siete intervenciones requiere capacidad técnica y editorial que el equipo puede no tener disponible. **Mitigación:** secuenciar por prioridad (split de marca y reparaciones críticas primero, voz al nicho y puente cross-brand en paralelo, Speaker y chatbot corporativo después).

---

## 9. Próximos pasos sugeridos

Secuencia recomendada en tres olas:

### Ola 1 (semana 1, costo bajo, severidad crítica)

1. **Confirmar el SSOT del precio del taller online** (`$42.000` o `$45.000`) y propagarlo a web, KB y plataforma de cobro. Owner. Plazo: medio día.
2. **Definir métricas baseline** (tráfico mensual por puerta, conversión hoy del taller individuos, leads corporativos por mes, distribución del origen del tráfico). Owner con Vercel Analytics y GA4. Plazo: una semana.
3. **Registrar la plataforma de cobro de ondemand como dependencia externa**. No es parte del plan de rediseño; abrir como proyecto separado en el sistema de Projects & Tasks del owner. Hasta entonces, `descanso.html` y `ondemand.html` quedan congelados.

### Ola 2 (semanas 2 a 4, intervención madre)

4. **Ejercicio de naming** para la marca corporativa nueva. Briefing de una página con criterios (funcional, emocional, social, operativo, fonético), propuesta de cinco a ocho nombres evaluados contra esos criterios, testeo informal con tres a cinco decisores de RRHH del entorno, decisión final. Owner como decisor único o pareja decisora (no comité). Plazo: dos semanas, caja de tiempo cerrada.
5. **Identidad visual y arquitectura de la marca corporativa nueva**. Paleta, tipografía, tono fotográfico, primera maqueta de sitio. Equipo de diseño existente del proyecto. Plazo: dos a tres semanas en paralelo al naming.
6. **Validar con tres a cinco clientes finales reales** (Empresas Kind actuales) el job dominante propuesto para empresas, vía Switch Interview (ver `playbook/02-methodology/jtbd.md`). Sumar a la validación el sondeo informal sobre los nombres candidatos. Plazo: tres a cuatro semanas.

### Ola 3 (semanas 4 a 10, despliegue)

7. **Sitio de la marca corporativa nueva**, con dominio propio, encabezado job-dominante, los tres papers existentes (SHR-001, SLH-001, SCK-001) reubicados, la página de Speaker / eventos, y formulario corporativo. Plazo: dos a tres semanas de desarrollo más una de QA.
8. **Sentir individuos refinado** (encabezado nuevo con copy del nicho, KB de Lore actualizada, sincronización web/KB/plataforma, modalidad Intensiva visible, transición de dominio explicitada, limpieza estilística de `individuos.html` y `descanso.html`, replanteo del catálogo ondemand). Plazo: dos semanas, parcialmente en paralelo al sitio corporativo.
9. **Puente cross-brand** activo en los touchpoints definidos en intervención 2. Plazo: una semana, después de que ambos sitios estén operativos.
10. **Chatbot corporativo** versión MVP (asistente que califica y deriva). Plazo: dos a tres semanas, después de la ola 3.
11. **Comunicación a clientes Kind actuales** sobre el cambio de marca. Mensaje individual a cada cuenta, anclado en continuidad de equipo y método. Plazo: una semana, en paralelo al lanzamiento público.

---

## 10. Gaps de información

- ❓ Métricas reales de la web hoy: tráfico mensual por página, conversión del formulario de empresas, conversión del taller individuos, origen del tráfico (IG / TikTok / Google / referido).
- ❓ Porcentaje real de facturación por puerta (individuos versus empresas) y ticket promedio de cada una.
- ❓ Origen real del cliente corporativo actual (prospección outbound de Lorena Campos, referidos profesionales, LinkedIn, búsqueda orgánica). Si efectivamente el motor B2C hacia B2B está operando informalmente o no.
- ❓ Identidad y operación de la plataforma de cobro alojada en `sentirmindfulness.com.ar`. Quién la mantiene, qué medios de pago acepta realmente.
- ❓ Estado de los logos de Empresas Kind del index. Son clientes activos del estudio Sentir Mindfulness o son clientes del CV individual de Lorena Campos en su firma de Estrategia y Cultura Organizacional.
- ❓ Si existe algún caso documentado de "individuo hizo el taller, su empresa después contrató". Si sí, qué pasó en el medio.
- ❓ Disponibilidad operativa real para abrir un nuevo canal (Speaker / eventos) o un nuevo asistente conversacional para empresas.
- ❓ Quién mantiene técnicamente la web hoy y qué capacidad de iteración tiene el equipo.

### Preguntas de seguimiento para profundizar con el owner

1. ¿Qué porcentaje aproximado de la facturación de 2025 vino de individuos versus empresas?
2. ¿Existió en los últimos doce meses algún cliente corporativo cuya conexión inicial vino de un individuo que había hecho el taller?
3. ¿La plataforma de cobro en `sentirmindfulness.com.ar` es propia, una herramienta SaaS (Tienda Nube, Mercado Pago Checkout, otra) o un servicio externo?
4. ¿Los precios de los programas corporativos (HR Help Kit, Liderazgos Humanos, Cultura Kind) existen formalizados o se cotizan caso por caso?
5. ¿Hay capacidad operativa (Lorena, Lucila o un asistente externo) para responder en franja de 15 minutos a 2 horas a un canal corporativo conversacional?
6. ¿Las hipótesis sobre el job dominante de cada nicho resuenan con la realidad cotidiana del equipo?
