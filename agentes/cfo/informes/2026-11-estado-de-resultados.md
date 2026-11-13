# Estado de resultados de Yellow, noviembre 2026

- **Corte:** parcial al 13/11/2026 (el mes sigue abierto). Moneda: USD.
- **Fuentes:** detalle de la tarea wwt13as6 (dato del board), `node agentes/os.mjs latidos` (registro del OS al 13/11), casos en `cases/`.
- **Convención (R5):** ✅ confirmado o sale de un registro · 🔵 inferencia · ❓ falta el dato (pregunta al board al final).

## 1. Ingresos

- **Clientes nuevos de noviembre:** Facturado: 0 · Cobrado: 0. Fuente: ✅ detalle de la tarea: hoy no hay ingresos en el mes
- **Caso Lisandro, segunda mitad (ARS 250.000):** Facturado: ❓ · Cobrado: ❓. Fuente: `cases/Lisandro/case-notes.md`: "¿segunda mitad cobrada?" sigue abierto. El caso es de junio; si se cobró, no fue en noviembre 🔵
- **Caso Sentir Mindfulness (contrato USD 3.000):** Facturado: ❓ · Cobrado: ❓. Fuente: `cases/sentir-mindfulness/contrato.md`: no hay registro de cobro en el repo
- **Total ingresos del mes:** Facturado: **0** · Cobrado: **0**

## 2. Gastos

- **Suscripción Claude Max:** USD del mes: 100,00. Fuente: ✅ detalle de la tarea
- **Vercel:** USD del mes: ❓. Fuente: Sin registro. Falta plan (gratis o pago) y monto
- **Supabase:** USD del mes: ❓. Fuente: Sin registro. El OS usa un proyecto de Supabase ✅; falta plan y monto
- **Resend:** USD del mes: ❓. Fuente: Sin registro. Falta plan y monto
- **Dominios (agustinmilesi.com y otros):** USD del mes: ❓. Fuente: Sin registro. Falta cuáles, costo anual y mes de renovación
- **Total gastos conocidos:** USD del mes: **100,00**. Fuente: Más los ❓

## 3. Costo de cada puesto

Latidos registrados en noviembre al 13/11: 7, más este latido del CFO = 8.
- **Equivalente API:** suma del campo `usd` de los latidos del mes del puesto. Solo el último latido del CHRO tiene medición; los demás se dieron antes de que el OS midiera tokens (❓ sin medición, no recuperable).
- **Parte de la suscripción:** USD 100 / 8 latidos = USD 12,50 por latido. Esta cifra baja a medida que haya más latidos en el mes: se recalcula al cierre.

- **CEO:** Latidos del mes: 1 · Equivalente API (USD): ❓ sin medición · Parte de la suscripción (USD): 12,50
- **CPO:** Latidos del mes: 1 · Equivalente API (USD): ❓ sin medición · Parte de la suscripción (USD): 12,50
- **CTO:** Latidos del mes: 1 · Equivalente API (USD): ❓ sin medición · Parte de la suscripción (USD): 12,50
- **INV:** Latidos del mes: 1 · Equivalente API (USD): ❓ sin medición · Parte de la suscripción (USD): 12,50
- **CHRO:** Latidos del mes: 3 · Equivalente API (USD): 0,46 (514k tokens, 1 de 3 latidos medido) · Parte de la suscripción (USD): 37,50
- **CFO:** Latidos del mes: 1 (este latido) · Equivalente API (USD): ~0,96 (1.323k tokens) medido al terminar las entregas; el valor final queda en `node agentes/os.mjs latidos cfo` · Parte de la suscripción (USD): 12,50
- **CMO, CSO, COO, CISO:** Latidos del mes: 0 · Equivalente API (USD): 0 · Parte de la suscripción (USD): 0
- **Total:** Latidos del mes: **8** · Equivalente API (USD): **~1,42 medido + ❓** · Parte de la suscripción (USD): **100,00**

Lectura de las dos columnas: la parte de la suscripción es lo que Yellow paga de verdad (sale de los USD 100). El equivalente API es lo que costaría el mismo trabajo pagando por uso; sirve para saber si la suscripción conviene, no es un gasto adicional.

## 4. Resultado del mes

| | USD |
|---|---|
| Ingresos | 0 |
| Gastos conocidos | -100,00 |
| Gastos sin dato | ❓ (Vercel, Supabase, Resend, dominios) |
| **Resultado** | **-100,00 o peor** |

Margen por cliente (KR zia4y33t): sin medir este mes, porque no hay cliente activo con ingresos en noviembre.

**Lectura para el board:** noviembre cierra en pérdida de al menos USD 100, todo en la suscripción de Claude que mueve a los puestos; con un cliente de USD 2.000 por mes, ese gasto es el 5% del ingreso. Para que el informe salga de registros y no de supuestos, faltan los montos de las otras cuatro herramientas.

## 5. Preguntas para el board

1. ❓ Vercel, Supabase y Resend: ¿qué plan tiene cada uno y cuánto se pagó en noviembre (USD 0 si es plan gratis)?
2. ❓ Dominios: ¿cuáles paga Yellow, cuánto sale cada uno por año y en qué mes renuevan?
3. ❓ Caso Lisandro: ¿se cobró la segunda mitad (ARS 250.000)? ¿En qué fecha y a qué tipo de cambio?
4. ❓ Caso Sentir Mindfulness: ¿se cobró algo del contrato de USD 3.000? ¿Cuánto y cuándo?
5. ❓ ¿Hay otros gastos de Yellow en el mes (contador, Google Workspace, otra suscripción) que no estén en esta lista?
