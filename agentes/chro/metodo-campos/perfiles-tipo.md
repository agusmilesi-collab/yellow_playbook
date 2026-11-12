# Perfiles de puesto tipo — biblioteca por familia, refinada con resultados

Hermano de `cadenas-tipo.md`. Si aquella es la biblioteca de arranque para la cadena de valor, esta es la biblioteca de arranque para el **perfil esperado** del bloque 6. En vez de derivar cada perfil desde cero, el motor propone el perfil-tipo de la **familia de puesto** que corresponde, y la psicóloga lo ajusta a las exigencias del puesto concreto, lo valida y lo firma.

Y tiene una segunda mitad que la vuelve única: los perfiles-tipo **se refinan con los resultados reales** de las personas que entraron a cada puesto, medidos a los 90 días. La librería deja de ser una hipótesis clínica y pasa a ser evidencia acumulada.

## Regla de uso (igual que cadenas-tipo)

El perfil-tipo es **punto de partida, no sentencia**. Da el 70-80% del perfil; lo específico del puesto (el 20-30%) se ajusta exigencia por exigencia, con el criterio de traducción del bloque 6 (`framework.md`). No contradice el principio "nunca un perfil genérico completo": el perfil-tipo es el borrador, y el ajuste caso por caso lo vuelve específico. La psicóloga valida, corrige y firma; el motor solo propone.

## La biblioteca de familias

Cada familia ocupa una región del espacio de las cinco exigencias del puesto (problemas, presión, interacción, cambio, autonomía). El perfil-tipo traduce esa región a los tres instrumentos.

Las familias son las mismas ocho del campo **Familia de puesto** de la base (línea de selección), para que las dos líneas compartan un solo vocabulario.

| Familia (de la base) | Problemas | Presión | Interacción | Autonomía | Raven mínimo | Benziger | Foco Exner (3 a 5) |
|---|---|---|---|---|---|---|---|
| **Comercial / Ventas** | mixtos | media a alta (rechazo) | mucha gente | media a alta | promedio superior | frontal derecho (vínculo, acción) | gente (CDI, H), aguante del rechazo (D, AdjD) |
| **Administración / Contable / Finanzas** | claros | baja a media | poca gente | baja | promedio | basal izquierdo (orden, procedimiento) | control de impulsos (FC:CF+C), prolijidad (XA% razonable) |
| **Operaciones / Producción / Logística** | claros | media a alta (ritmo) | equipo | baja | promedio | basal izquierdo | presión sostenida (D, AdjD), tolerancia a la rutina |
| **IT / Sistemas / Tecnología** | complejos | media | poca gente | alta | alto | frontal izquierdo (análisis, lógica) | juicio y calidad del pensamiento (XA%, X-%), flexibilidad |
| **RRHH / Capital Humano** | mixtos | media | mucha gente | media | promedio superior | basal derecho + frontal | lectura de gente (H, COP, CDI) |
| **Marketing / Comunicación** | mixtos | media | media a mucha | alta | promedio superior | frontal derecho (creación, riesgo) | apertura, trabajo con gente |
| **Ingeniería / Técnica** | complejos | media a alta | equipo | alta | alto a superior | frontal izquierdo (análisis, números) | juicio (XA%, WDA%, X-%), recursos (EA) |
| **Dirección / Gerencia** | complejos | alta | visión de conjunto | total | alto a superior | frontal, con peso de visión | juicio (XA%, X-%) + recursos y aguante (EA, es, D-score) + gente |

Las familias son un punto de partida, no una caja cerrada. Un puesto puede ser híbrido (un jefe de planta técnico pesa más al frontal izquierdo; un comercial que además cobra suma la exigencia administrativa). El arquetipo se elige por el trabajo que llena la mayor parte de la semana, y se ajusta.

## El loop de validación a 90 días

Acá está lo que ninguna consultora de psicotécnicos hace, y lo que convierte la librería en foso.

1. **Se etiqueta.** Cada evaluación queda marcada con la familia del puesto que se buscaba.
2. **Se sigue.** A los 90 días de que la persona recomendada entró a la empresa, se registra el **resultado real**: le fue bien, regular, o no funcionó (con la nota del porqué, del dueño o del jefe directo).
3. **Se acumula.** Para cada familia se junta, caso a caso, qué indicadores acompañaron a los que funcionaron y cuáles a los que no.
4. **Se refina.** El perfil-tipo de la familia se corrige con esa evidencia. "Para cobranzas, el control de impulsos predijo mejor el resultado que el Raven" deja de ser corazonada y pasa a ser dato.

El resultado: la librería mejora sola con cada caso cerrado, y es un activo que solo lo tiene quien siguió los resultados durante años. Un competidor puede copiar el método y hasta la librería de arranque; no puede copiar tu historial de qué funcionó en qué puesto.

## Dos cautelas honestas (van escritas, no se ocultan)

- **Necesita volumen.** Con pocos casos por familia, esto es señal cualitativa, una corazonada respaldada, no estadística. La relación entre un indicador y el resultado recién se vuelve confiable con N alto (decenas por familia). Al principio se acumula y se lee con cuidado; con el tiempo se vuelve dato duro. No se vende "predicción científica" desde el caso tres.
- **Restricción de rango.** Solo se puede seguir a quienes entraron (los recomendados). A los rechazados no se los ve, así que no se sabe si el descarte fue un error. Es un sesgo real y conocido de toda validación de selección. No invalida el aprendizaje, pero obliga a leer la data con humildad: dice qué funcionó entre los que pasaron, no qué habría pasado con los que no.

## Cómo vive en la base (Airtable)

- **Pedidos** ya lleva el campo **Familia de puesto** (las ocho de arriba); **Puestos** lleva el mismo campo **Familia / arquetipo** con esas mismas opciones, para agrupar los puestos del mapeo y aplicar el perfil-tipo.
- **Individuo** ya tiene el seguimiento a 90 días en el campo **Fit a 90 días** (Alto / Medio / Bajo), que es el resultado estructurado que se cruza con los indicadores del test, más **Notas seguimiento** para el porqué.
- El motor, por familia, lista qué indicadores acompañaron a los que funcionaron: esa lista es la que refina el perfil-tipo.

## Conexión con el resto del método

- El perfil-tipo es la entrada del **bloque 6** (`framework.md`): acelera el criterio de traducción resultado → perfil, sin reemplazarlo.
- La validación a 90 días es la contraparte empírica del cruce perfil-persona: mide si el encaje que predijimos se cumplió.
- Todo esto es el **conocimiento que se acumula** del que habla la cascada aplicada a Campos HR (`../CORE de Negocios/cascada-campos-hr.html`): el activo defensivo del negocio, la parte más pura del foso.
