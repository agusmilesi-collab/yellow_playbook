# Transcript — Sentir Mindfulness

> Notas literales de la sesión de discovery con el owner del caso (Agustín, socio de Sentir Mindfulness). Convertir a diagnóstico recién al cerrar el briefing.

---

## Sesión 2026-05-14

### Contexto del caso

Sentir Mindfulness ya tiene auditoría previa bajo Yellow del 2026-05-08 (registro en memoria del owner, no en `cases/`). Esta sesión abre el caso de forma formal en el repo. Foco aún por confirmar: la web (`Web Sentir/` en Vercel) o el servicio entero.

Material de referencia que ya está en disco:
- `/Users/agusmilesi/Desktop/Codigo Proyectos/Web Sentir/` — HTML estático en Vercel. Páginas: `index`, `cultura-kind`, `descanso`, `hr-help-kit` (+ paper), `liderazgos-humanos`, `individuos`, `ondemand`, `gracias`, `404`.
- `/Users/agusmilesi/Desktop/Codigo Proyectos/Web Sentir/Programas Sentir.md` — doc con descripción de los programas, ICP declarado, equipo y testimonios.

### Equipo

- **Lorena Campos** — Lic. en Psicología (Mat. 5217), corriente cognitiva, Máster en Mindfulness (U. Zaragoza). 15 años en RRHH; lidera firma propia de estrategia y cultura organizacional.
- **Lucila Campos** — Lic. en Psicología (Mat. 6338), corriente cognitiva, Máster en Mindfulness (U. Zaragoza). 10 años en clínica con foco en adultos con trastornos de ansiedad + procesos soft de RRHH.
- **Agustín Milesi** — Lic. en Publicidad, MBT por San Andrés. Background en agencias y emprendimientos. Es el owner del caso en este repo.

### Oferta declarada (del doc `Programas Sentir.md`)

- **Sesiones temáticas** (1h c/u, presencial/online): Mindfulness intro, Team Building, Stress & Burnout, Descanso, Alimentación.
- **Encuentros regulares de meditación** (1h/semana, online vía Zoom; exclusivo empresa o compartido miércoles 19–20).
- **Programa Experiencia en Bienestar & Mindfulness** — 6h en 4 encuentros de 1.5h. Presencial/online. 4 módulos: Cuerpo / Sentidos / Conciencia / Mente.
- **Programa Transformación Liderazgos Humanos** — 12h en 8 encuentros de 1.5h. Presencial. 3 módulos: Individuo / Equipo / Organización.
- **HR Help Kit** — capacitación de 3 encuentros para equipos de RRHH. 4 pilares: programa de capacitación + toolbox + intervenciones organizacionales + plan e indicadores de impacto. Posicionamiento: "que RH deje de ser el punching ball emocional de la empresa".

### Estrategia comercial declarada por el owner

> "Tengo mi nicho de individuos como un medio para llegar a nicho empresas. Mi estrategia es esa… de individuos a empresas."

Mecánica:
1. Captar **individuos** que trabajen en empresas vía contenido en Instagram y TikTok.
2. Que esos individuos **recomienden Sentir adentro de su empresa** (referral B2C → B2B).
3. **Sponsoreo de eventos corporativos**: no hay budget para invertir en sponsor, pero sí pueden ofrecer dar una charla gratis en eventos.

### Nicho INDIVIDUOS (texto del owner, literal)

> Profesionales de 30 a 50 años con cargos de responsabilidad — gerentes, mandos medios, emprendedores, independientes — que llegan al final del día agotados pero no pueden soltar el celular. Que se despiertan a las 3 de la mañana pensando en el mail que no respondieron. Que reaccionan con sus hijos o su pareja de formas que después lamentan y no entienden. Que ya buscaron "cómo manejar el estrés" o se descargaron Calm y lo abrieron dos veces. Que cuando alguien les dice "deberías meditar" piensan "no tengo tiempo para eso" — pero en el fondo saben que así como están no pueden seguir, solo que no encuentran algo que sea rápido, concreto y que no les parezca una pérdida de tiempo.

Promesa propuesta:

> "Salí del modo automático. Llevate herramientas concretas para frenar la ansiedad y empezar a vivir con más calma — desde la primera semana."

### Nicho EMPRESAS (texto del owner, literal)

> Responsables de RRHH, Bienestar o Desarrollo Organizacional en multinacionales y grandes empresas con operación en Argentina — que ya tienen mandato y presupuesto para ejecutar una estrategia de wellness, pero cargan solos con el peso emocional de toda la organización: reciben las quejas de clima, contienen a los equipos, apagan incendios entre áreas, y al final del día son los que peor la pasan y los que menos ayuda piden. Buscan un partner que no solo les traiga un programa llave en mano, sino que entienda lo que implica estar en su rol — y que al trabajar juntos, ellos también respiren.

### Foco del caso confirmado

> "audita la web" (2026-05-14)

Auditoría aplica a `Web Sentir/`. El servicio entero queda fuera de scope salvo cuando la web lo expone como touchpoint.

### Knowledge base del chatbot (sumada al briefing)

Path: `/Users/agusmilesi/Desktop/ChatBot/KB Sentir/`. Owner aclara que es la KB del bot de individuos, sin anichar.

Contenido relevante:

- `01 identidad y mindfulness.md`, `02 el taller.md`, `03 modalidades.md`, `04 fechas y cupos.md`, `05 precios y pagos.md`, `06 inscripcion.md`, `07 objeciones.md`, `08 reglas y derivacion.md`.
- `prompt_lore.md` define un asistente ("Lore") que opera por WhatsApp (+54 9 3412 547 244), con método consultivo de 7 pasos (empatizar, agitar, aislar, revelar, resolver, validar, cerrar) y reglas de tono explícitas (voseo, máximo 2 a 3 oraciones por mensaje, sin emojis automatizados, sin frases tipo "¡claro!").
- KB define dos ediciones del taller: **estándar de junio** (martes una vez por semana, 4 encuentros) e **intensivo de julio** (martes y jueves, dos semanas). Ambas se ofrecen en presencial u online.
- Inscripción "únicamente a través de la página web sentirmindfulness.com.ar". Inscripción por mensaje queda explícitamente prohibida.

Discrepancias detectadas entre Web Sentir y KB:

- **Precio online:** la web declara `$42.000`; la KB declara `$45.000`.
- **Medios de pago online:** la web etiqueta el botón como "transferencia o tarjeta"; la KB declara que no se acepta tarjeta de crédito ni cuotas.
- **Modalidad intensiva julio:** existe en la KB; no aparece en `individuos.html`.

Anti-personas / posicionamiento de la KB:

- ICP declarado en KB: "personas que sienten estrés o ansiedad, mayores de 16, sin restricción de género". El nicho que el owner brifeó (profesionales 30 a 50, cargos de responsabilidad) no está reflejado.

### Decisión estratégica del owner (post-presentación del diagnóstico)

> "vamos a proponer dividir en 2 marcas. sentir mindfulness para individuos y SM para empresas."

> "el problema es la marca. Sentir mindfulness, al decir mindfulness nos pone una barrera de entrada para lo corporativo. SM puede llamarse bienestar corporativo o algo similar. La division sera en identidad, web, instagram, etc. La estrategia permanece resolvemos problemas originados en el stress o emocionales a una empresa a un individuo que se lo genera la empresa."

Tres elementos clave que esta decisión deja firmes:

- **Diagnóstico de la barrera:** la palabra "mindfulness" en el nombre opera como filtro negativo en la audiencia corporativa (asociación con la categoría wellness blanda).
- **Alcance de la separación:** identidad, sitio web, Instagram, presumiblemente dominio y operación de marketing. El nombre "SM" es placeholder; la marca real puede ser tipo "Bienestar Corporativo" o variantes.
- **Estrategia comercial intacta:** el funnel B2C hacia B2B se mantiene. La transformación que vende Sentir al individuo y la que vende SM a la empresa son el mismo problema (stress y carga emocional generada por la empresa), entrado desde puertas distintas. El puente cross-brand entre las dos marcas es parte del modelo.

### Pendiente de briefing

(Acá voy agregando todo lo que el owner siga contando: precios corporativos, captación detallada, post-venta, métricas actuales, dolores observados, contexto de competencia, etc.)
