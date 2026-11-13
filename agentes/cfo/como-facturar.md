# Cómo facturar el primer cobro de Yellow

**Tarea:** gugpi21u · **Fecha:** 13/11/2026 · **Puesto:** CFO
**Regla:** ningún dato fiscal se inventa (R5). Lo único que hay en el repo es que el contrato de Lisandro (junio 2026) dice "Agustín Milesi (Monotributo)" y "el Consultor emite comprobante de Monotributo por cada pago" 🔵 (puede haber cambiado desde junio). `playbook/06-operations/finance.md` tiene la situación impositiva sin definir.

## 1. Preguntas para el board (contestar en una línea cada una)

1. ❓ **Régimen:** ¿hoy estás en el Monotributo o sos responsable inscripto en IVA?
2. ❓ **Categoría:** si sos monotributista, ¿en qué categoría estás y cuánto facturaste en los últimos 12 meses (para saber cuánto margen queda antes de recategorizar)? ¿La actividad registrada incluye servicios de consultoría?
3. ❓ **Titular:** ¿Yellow factura a tu nombre (persona) o hay una sociedad? ¿Tenés punto de venta habilitado para factura electrónica en ARCA?
4. ❓ **Cliente:** el primer cliente, ¿es de Argentina o del exterior? Si es de Argentina, ¿es responsable inscripto (pide factura A) o consumidor final / monotributista?

## 2. Qué factura corresponde según la respuesta

| Tu régimen | Cliente en Argentina | Cliente del exterior |
|---|---|---|
| Monotributo | Factura C (sin IVA discriminado), sea cual sea el cliente | Factura E (exportación de servicios) |
| Responsable inscripto | Factura A si el cliente es responsable inscripto; B si es consumidor final o monotributista. Se suma IVA 21% al precio (el contrato dice "+ IVA si corresponde") | Factura E, sin IVA |

Regla general de ARCA (ex AFIP), a verificar con tu contador antes de la primera emisión 🔵.

## 3. Paso a paso para emitir la factura (con las respuestas cargadas)

1. Confirmar que el cobro se acreditó (el contrato manda: el trabajo empieza con el primer pago). Factura del 50% inicial: dentro de las 24 horas del cierre verbal (`finance.md`).
2. Pedirle al cliente: nombre o razón social, CUIT o DNI (o identificación fiscal del exterior), condición frente al IVA y domicilio.
3. Entrar a arca.gob.ar con clave fiscal → servicio "Comprobantes en línea" → elegir tu nombre como empresa a representar.
4. Si es la primera vez: "ABM Puntos de venta" → crear un punto de venta de factura electrónica (para Factura E, uno habilitado para exportación).
5. "Generar comprobantes" → punto de venta → tipo de comprobante (C, A, B o E según la tabla).
6. Fecha del comprobante = fecha del cobro. Concepto: **Servicios**. Período facturado: desde y hasta del trabajo cubierto por el pago.
7. Datos del receptor: condición frente al IVA, CUIT/DNI y domicilio del paso 2.
8. Detalle: "Honorarios por servicio de consultoría Yellow, 50% inicial según contrato del [fecha]". Moneda: pesos al MEP del día del pago, o dólares si el cliente paga en USD (`pricing.md`). Monto: USD 1.000 (50% de USD 2.000) o su equivalente.
9. Confirmar, descargar el PDF y guardarlo en `cases/<slug>/` con el nombre `factura-<numero>.pdf`.
10. El CFO deja el borrador del mail con la factura en la bandeja; el envío lo aprueba el board. Anotar en `finance.md` (vía learnings) el facturado y el cobrado del mes.
11. Separar el 30% del cobro a la cuenta de reserva (`finance.md`, política de reservas).

## 4. Qué queda después de tus respuestas

Con las 4 respuestas, el CFO reescribe la sección 2 dejando solo tu caso y propone el cambio de la línea "Situación impositiva" de `finance.md` en `learnings/learnings-pending.md` (R1: el playbook no se toca directo).
