# Value-Based Strategy: Framework Yellow

**SSOT** del cuarto pilar metodológico. Cualquier mención a Value Stick, WTP, WTS o Value Map en otros archivos linkea acá.

Este pilar es la **capa estratégica** que ordena a los otros tres. JTBD (`./jtbd.md`) descubre qué progreso busca el cliente. Service Design (`./service-design.md`) audita y rediseña la entrega. Good Services (`./good-services.md`) valida la calidad de esa entrega. Value-Based Strategy responde la pregunta que ninguno de los tres responde: **por qué un rediseño habilita cobrar más y dónde se captura ese valor.**

**Origen:** *Better, Simpler Strategy* (Felix Oberholzer-Gee, Harvard Business Review Press, 2021).

---

## Salvedad metodológica declarada

El libro es de estrategia corporativa (firmas del S&P 500, efectos de red, cadenas de suministro, decisiones de cartera). Yellow adopta solo el núcleo (Value Stick, captura de valor, Value Map y la disciplina causal) y lo traduce al ICP real: el profesional independiente. La dimensión talento y proveedores del eje WTS no aplica a una práctica unipersonal y se reencuadra (ver más abajo). Es **pragmatismo declarado**, la misma postura que `./jtbd.md` toma frente a las dos interpretaciones de JTBD: se usa lo que sirve, sin trasladar el marco entero.

---

## Qué es

Toda estrategia se reduce a mover dos puntos:

- **WTP (disposición a pagar, willingness to pay):** lo máximo que un cliente pagaría por el servicio. Un centavo más y se va.
- **WTS (disposición a aceptar, willingness to sell):** lo mínimo por lo que el profesional aceptaría hacer ese trabajo. Un centavo menos y no lo hace.

Entre esos dos puntos vive el **valor creado = WTP − WTS**. Solo hay dos formas de crear valor: subir la WTP o bajar la WTS. Todo lo demás es ruido.

La **captura de valor** es cómo se reparte ese valor creado: la brecha entre WTP y precio es valor para el cliente; la brecha entre precio y WTS es la ganancia del profesional.

```
        WTP    lo máximo que el cliente pagaría
         │     (valor para el cliente)
       precio  lo que cobrás
         │     (tu ganancia)
        WTS    tu piso: lo mínimo por lo que lo harías
```

---

## Por qué lo usamos en Yellow

La oferta de Yellow ("rediseñar la experiencia para cobrar más") y el meta-patrón "regala la ventaja real, cobra la commodity" (`./jtbd.md`) afirman exactamente esto. Hasta la incorporación de este pilar se afirmaban de forma narrativa, sin el modelo económico que los sostiene. Este pilar es ese modelo.

- "Rediseñar la experiencia para cobrar más" es **subir la WTP**, dicho con rigor.
- "Regala la ventaja real, cobra la commodity" es un diagnóstico de **captura de valor mal hecha**: la WTP que el cliente final tiene por el criterio del profesional nunca se convierte en precio porque ese criterio se entrega gratis.

El eje WTP es el que trabaja Yellow casi siempre. El eje WTS se reencuadra para el profesional solo: es **el piso de pricing del propio profesional** (qué trabajo acepta hacer y por cuánto). Bajar la WTS propia rara vez es la jugada; subir la WTP del cliente final casi siempre lo es.

---

## La disciplina causal: preguntar "cómo"

Las recetas amplias ("diferenciate", "construí marca", "mejorá la experiencia") fallan porque no especifican **cómo** mueven la WTP. El libro muestra que el valor de marca no se correlaciona con resultado financiero salvo que exista una cadena causal explícita marca → WTP → precio.

**Regla Yellow:** ninguna recomendación de un diagnóstico entra al plan sin una cadena causal escrita hasta WTP (o, excepcionalmente, WTS).

- Insuficiente: "Rediseñar el onboarding." (receta, no recomendación)
- Correcto: "Rediseñar el onboarding para que el cliente perciba el criterio del profesional antes de pagar → eso sube la WTP porque el cliente deja de compararlo contra la commodity → habilita mover el precio."

Recomendaciones sin esa cadena se reescriben o se descartan. Esto está operacionalizado como check en `../quality-checklist.json` (`causal-chain-wtp`).

---

## El trade-off deliberado

Slack se concentró en tres funciones (búsqueda, sincronización, compartir archivos) y fue deliberadamente flojo en todo lo demás. Su memo interno "We Don't Sell Saddles Here" (vendé la cabalgata, no la montura) es el meta-patrón de Yellow dicho desde estrategia: vendé el progreso, no el producto.

Implicancia operativa: ser flojo a propósito en la commodity es **la decisión estratégica**, un acto consciente que se documenta, no un descuido a corregir. El rediseño no busca subir todos los drivers un poco; busca ganar de forma marcada los pocos que mueven la WTP y soltar de forma deliberada el resto. Esta es la columna estratégica del meta-patrón de `./jtbd.md`.

---

## El Value Map: única herramienta de priorización del playbook

> **Decisión de arquitectura.** El Value Map es el **único** mecanismo de priorización del playbook. La matriz de touchpoints de `./service-design.md` audita estado de ejecución y costo, no prioriza. JTBD descubre, no prioriza. Antes existían tres mecanismos "importancia × brecha" (matriz de touchpoints, opportunity scoring de Ulwick, este). Se consolidaron en uno solo, acá, para no violar SSOT.

### Qué es

Un mapa que ordena los **value drivers** (lo que al cliente final del profesional realmente le importa) por importancia, y mide para cada uno la **brecha** entre lo que el cliente recibe hoy y la mejor alternativa que consideró.

### El eje de brecha, reencuadrado para el ICP solo

El libro mide el desempeño contra competidores nombrados (Expedia vs Booking vs Google). Un profesional independiente rara vez tiene competidores nombrables: compite **transcategorialmente** (`./jtbd.md`). Por eso el eje se reformula:

> La brecha no se mide contra "los competidores", se mide contra **las alternativas que el cliente final consideró**, que es exactamente el output de la pregunta 5 de la Switch Interview ("si esto no hubiera estado disponible, ¿qué habrías hecho?").

No entra ningún concepto nuevo: el Value Map consume lo que JTBD ya produce.

### Construcción (5 pasos)

1. **Identificar drivers:** de las Switch Interviews y de la síntesis de jobs, extraer qué le importa al cliente final (functional, emotional, social).
2. **Ordenar por importancia** para el cliente, no por lo que el profesional cree que importa.
3. **Medir la brecha** de cada driver contra la alternativa que el cliente consideró, no contra un ideal abstracto.
4. **Agrupar en temas:** los grupos de drivers dan la "personalidad" del servicio rediseñado. Insumo directo para `../01-identity/offer.md`.
5. **Segmentar:** distintos segmentos del cliente final tienen mapas distintos. No promediar segmentos.

### Output

El Value Map produce **la lista priorizada de drivers donde el rediseño debe ganar**. Esa lista es el input que ordena el trabajo de Service Design: la matriz de touchpoints audita el estado de ejecución de los touchpoints que sirven a esos drivers, y la regla de orden del rediseño sigue la prioridad del Value Map.

---

## Conectar todo el stick

Un movimiento real toca los cuatro elementos del stick: WTP, precio, costo, WTS. No alcanza con mover la WTP y suponer que el resto queda igual.

- **Dual advantage:** subir WTP y bajar WTS a la vez. Para el profesional solo, el equivalente es un rediseño que sube la WTP del cliente y a la vez vuelve el trabajo más liviano o más alineado con lo que el profesional quiere hacer.
- **Caución de pricing:** antes de cerrar un rediseño, revisar el stick completo. Subir la WTP sin mover el precio regala el valor al cliente (el síntoma exacto del meta-patrón). Subir la WTP pero disparar el costo de entrega puede dejar la ganancia igual o peor. Ver `../06-operations/pricing.md`.

---

## Cómo se ordena con los otros tres pilares

Cascada sin solapamiento:

1. **JTBD** descubre el job, las fuerzas y la competencia transcategorial. No prioriza.
2. **Value-Based Strategy** (este pilar) prioriza los drivers vía Value Map y define dónde se captura el valor. Único priorizador.
3. **Service Design** audita la entrega de los drivers priorizados (estado de ejecución + costo de fix) y rediseña. No prioriza.
4. **Good Services** valida que cada touchpoint rediseñado no rompa los 15 principios de calidad.

---

## Vocabulario clave

WTP, WTS, value stick, valor creado, captura de valor, value driver, value map, dual advantage, disciplina causal.

Para definiciones precisas, ver `../02-methodology/glossary.md`.

---

## Lectura de referencia

*Better, Simpler Strategy: A Value-Based Guide to Exceptional Performance*, Felix Oberholzer-Gee. Harvard Business Review Press, 2021. Núcleo en Parte 1 (cap 3, "Think Value, Not Profit"), Parte 2 (cap 4, WTP) y Parte 5 completa (implementación: Value Map y disciplina causal, caps 16-19).

---

## Changelog del archivo

- **2026-05-18 (v0.2):** versión inicial. Consolidación de LRN-004 (sesión de refinamiento de KB, E1). Cuarto pilar metodológico. Deriva de la verificación de *Better, Simpler Strategy* (Oberholzer-Gee, 2021). Acoplado a la baja de Ulwick a nota en `jtbd.md` y a la matriz sin severidad en `service-design.md`. Aprobado por el owner para consolidación en bloque (sesión 2026-05-18).
