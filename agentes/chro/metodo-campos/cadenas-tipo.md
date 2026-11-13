# Cadenas de valor tipo — biblioteca por configuración y modelo de negocio

Punto de partida del bloque 3. El motor instancia la plantilla que corresponde al negocio del cliente desde la entrevista al dueño y el relevamiento, y la ajusta: agrega, quita y renombra según lo relevado. La plantilla evita arrancar de cero y asegura que ninguna actividad quede sin mirar; la cadena real de cada cliente siempre la definen sus inputs (R2).

## Paso previo: identificar la configuración de valor

Antes de elegir plantilla, se clasifica el negocio por su **lógica de creación de valor** (Stabell & Fjeldstad, 1998), no por su industria:

****Cadena** (value chain)**

- **Cómo crea valor:** Transforma inputs en outputs; eficiencia secuencial
- **El "flujo" tiene forma de:** Línea
- **Ejemplos:** Fábricas, fazón, agro, gastronomía, comercio

****Taller** (value shop)**

- **Cómo crea valor:** Resuelve problemas únicos por cliente
- **El "flujo" tiene forma de:** Ciclo: diagnóstico → solución → ejecución → evaluación
- **Ejemplos:** Consultoras, estudios jurídicos, médicos, psicólogos, ingeniería

****Red** (value network)**

- **Cómo crea valor:** Conecta partes; intermediación y tamaño de red
- **El "flujo" tiene forma de:** Malla: captar miembros de ambos lados + facilitar intercambios
- **Ejemplos:** Bancos, corretaje, marketplaces, telcos, inmobiliarias

Casi todo negocio cae en una o es híbrido con una dominante; se modela por la dominante y se anotan los injertos. La configuración cambia qué significa "cuello de botella" (en la cadena es la etapa lenta; en el taller, la capacidad de diagnóstico o los seniors; en la red, la liquidez de la red: el lado que falta) y dónde se captura el valor. La biblioteca sigue la lógica APQC (Process Classification Framework): el esqueleto por arquetipo se repite muchísimo; lo individual de cada cliente (el 20-30%) son los handoffs, los cuellos de botella y qué eslabón captura el valor.

**Estructura de dos niveles.** Nivel 1: **actividades** (los grandes momentos en que el negocio crea valor, primarias y de soporte). Nivel 2: **pasos** (la secuencia concreta adentro de cada actividad). Las capacidades (bloque 4) se derivan por actividad; los puestos (bloque 6), de las capacidades. Así queda trazable: actividad → capacidad → puesto → perfil.

**Primaria o soporte: los tres criterios.** (1) *El viaje del pedido:* es primaria la actividad que está en el recorrido de un pedido concreto (pedir → planificar → producir → entregar → cobrar); las de soporte abastecen a muchos pedidos a la vez, por atrás, en otro ritmo. (2) *Qué paga el cliente:* lo primario crea valor que el cliente reconoce; lo de soporte lo habilita de forma invisible (y solo se vuelve visible cuando falla). (3) *El matiz de Porter:* comprar (elegir proveedor, negociar) es soporte, pero recibir y controlar el material que entra es primaria cuando ese material es el producto empezando su viaje (en el façon: la recepción del crudo del cliente es primaria; comprar insumos de proceso es soporte). La excepción que confirma el criterio: en el comercio, comprar es primaria, porque ahí el margen se gana comprando. La regla final siempre vuelve al negocio: es primaria la actividad donde el negocio se gana o se pierde.

**Regla de uso.** Si el cliente trae su cadena armada, se valida contra la plantilla (qué le falta, qué le sobra) en lugar de rehacerla. La plantilla funciona además como checklist de funciones huérfanas: toda actividad de la plantilla que en el cliente no tiene responsable es candidata (ver `framework.md`, función huérfana).

---

# Configuración CADENA (transformación)

## Manufactura a fazón (ejemplo de un cliente)

**Primarias:** 01 Desarrollo comercial (captar y retener a quien trae el material) → 02 Planificación (campaña, lotes, capacidad) → 03 Recepción y análisis (entrada de materia prima del cliente, laboratorio) → 04 Operaciones / proceso (la transformación, suele correr 24/7) → 05 Control de calidad (liberar producto) → 06 Despacho y logística → 07 Gestión del cliente (seguimiento, reclamos, facturación del servicio).

**Soporte:** mantenimiento, administración y finanzas, compras, personal, normas y certificaciones.

**Rasgo distintivo:** el activo es la capacidad instalada y el driver es la utilización. Planificación y mantenimiento pesan más que la venta puntual; el cuello de botella físico manda sobre todo lo demás.

## Manufactura propia (producto propio)

**Primarias:** desarrollo de producto → compras y abastecimiento → planificación → producción → calidad → almacén y logística → venta y distribución → posventa.

**Soporte:** mantenimiento, administración y finanzas, personal, sistemas.

**Rasgo distintivo:** a diferencia del fazón, aparecen el inventario y el riesgo comercial propio; compras y venta pesan tanto como producción.

# Configuración TALLER (resolución de problemas)

## Servicios profesionales (estudio, consultora, agencia, salud)

**Primarias:** generación de demanda → venta y propuesta → **el ciclo del taller por cliente**: diagnóstico (entender el problema) → diseño de la solución → ejecución → evaluación y cierre → facturación y cobranza → relación y recompra.

**Soporte:** administración, personal, metodología y gestión del conocimiento.

**Rasgo distintivo:** el activo es la gente y su criterio; el driver es tarifa por utilización de horas senior. El flujo es un ciclo que se repite por cliente, no una línea: cada caso vuelve a arrancar en diagnóstico. El cuello suele ser el socio que vende, diagnostica y entrega a la vez; la gestión del conocimiento (que el método viva en la organización y no en las cabezas) es la capacidad que separa al taller maduro del inmaduro.

## Comercio y distribución

**Primarias:** compras y abastecimiento → logística de entrada y almacén → venta (mostrador, vendedores, canal digital) → logística de salida y entrega → posventa y cobranza.

**Soporte:** administración y finanzas, personal, sistemas.

**Rasgo distintivo:** el driver es margen por rotación y el capital de trabajo (stock y cobranza) manda. Compras es un puesto tan crítico como ventas.

## Obra o proyecto (construcción, montajes, ingeniería)

**Primarias:** desarrollo comercial y licitaciones → presupuesto e ingeniería → planificación de obra → ejecución → certificación y cobro → cierre y garantía.

**Soporte:** compras, equipos y logística, administración, seguridad e higiene, personal.

**Rasgo distintivo:** híbrido taller-cadena. Cada proyecto arranca como taller (diagnóstico y presupuesto a medida) y se ejecuta como cadena (secuencia de obra). El driver es el desvío entre presupuesto y ejecución. El jefe de obra es casi siempre puesto crítico.

---

# Configuración RED (intermediación)

## Corretaje e intermediación (corredores, brokers, inmobiliarias, agencias de colocación)

**Primarias:** desarrollar el lado oferta (captar y retener a quienes tienen lo que se vende) → desarrollar el lado demanda (captar y retener a quienes lo compran) → matching (juntar las puntas: cotizar, negociar, cerrar la operación) → ejecución de la operación (documentación, logística si la hay, coordinación entre las partes) → liquidación (facturar la comisión, rendir a las partes) → mantenimiento de la red (que ambos lados vuelvan).

**Soporte:** administración y finanzas, información de mercado (precios, disponibilidad, referencias), sistemas, personal.

**Rasgo distintivo:** el activo es la red misma (cuántos de cada lado, y la confianza de ambos); el driver es volumen de operaciones por comisión. El cuello de botella es la **liquidez de la red**: el lado que falta (sin vendedores no hay qué ofrecer; sin compradores, nadie lista). La reputación es el capital: una operación mal ejecutada cuesta miembros de los dos lados a la vez. Puesto crítico típico: el que tiene la relación con cada lado (y el riesgo típico: que la red viva en la agenda personal de una persona, no de la empresa).

## Plataforma / marketplace (versión digital de la red)

Misma lógica que corretaje con dos diferencias: el matching lo hace el producto (el sistema, no una persona), y aparecen dos actividades primarias nuevas: desarrollo del producto/plataforma y confianza y arbitraje (reglas, disputas, calidad de los miembros). El driver agrega el take rate (qué porcentaje de cada operación captura la plataforma).
