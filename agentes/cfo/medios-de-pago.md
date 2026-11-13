# Cómo cobrar USD 2.000 desde Argentina: 3 opciones

- **Tarea:** jq2lffuq
- **Fecha de consulta de todas las fuentes:** 13/11/2026
- **Puesto:** CFO
- **Supuesto:** el cobro es de USD 2.000 en dos pagos de USD 1.000 (50% / 50%, `pricing.md`). Las comisiones se calculan sobre USD 1.000 por pago.
- **Aviso:** varias cifras salen de guías de terceros, no del tarifario oficial; están marcadas 🔵 y hay que confirmarlas en la app antes del primer cobro.

## Comparación

### 1. Transferencia bancaria (pesos o USD)

- **Para qué cliente:** Cliente en Argentina con cuenta bancaria
- **Comisión:** 0%. Las transferencias inmediatas de usuarios finales son gratuitas ✅ (BCRA)
- **Costo sobre USD 1.000:** USD 0
- **Plazo de acreditación:** Inmediato, 24 h todos los días ✅ (BCRA). Tope: USD 12.500 por día en moneda extranjera ✅
- **Qué necesita el cliente:** CBU/CVU o alias de Agustín. En USD: que el cliente tenga caja de ahorro en dólares
- **Qué necesita Agustín:** Caja de ahorro en pesos (y en dólares, para cobrar en USD)

### 2. Mercado Pago (link de pago)

- **Para qué cliente:** Cliente en Argentina que quiere pagar con tarjeta o en cuotas
- **Comisión:** Link con acreditación inmediata: 6,49% + IVA 🔵; a 30 días: 2,99% + IVA 🔵. Cuotas sin interés: costo extra (3 cuotas ~10,49%) 🔵
- **Costo sobre USD 1.000:** USD 78,50 inmediata / USD 36,20 a 30 días (con IVA 21%)
- **Plazo de acreditación:** Inmediato pagando la comisión alta; 30 días con la baja 🔵
- **Qué necesita el cliente:** Tarjeta o cuenta de Mercado Pago; Agustín genera el link
- **Qué necesita Agustín:** Cuenta de Mercado Pago

### 3. Payoneer (cliente del exterior)

- **Para qué cliente:** Cliente fuera de Argentina
- **Comisión:** Recibir USD por transferencia: 1% (mínimo USD 1) 🔵. Retirar a banco argentino: hasta 2% 🔵
- **Costo sobre USD 1.000:** USD 10 + hasta USD 20 = hasta USD 30
- **Plazo de acreditación:** Al recibir: 🔵 1 a 3 días hábiles ❓ (sin fuente oficial). Retiro a banco: ❓
- **Qué necesita el cliente:** Que pague por transferencia a la cuenta de recepción en USD de Payoneer o por solicitud de pago. Con tarjeta: 3% 🔵
- **Qué necesita Agustín:** Cuenta Payoneer verificada; Factura E (ver `como-facturar.md`)

**Wise quedó fuera:** las fuentes se contradicen sobre si hoy acepta usuarios nuevos en Argentina (Rankia y Global66 hablan de funciones limitadas; El Cronista publicó que dejó de recibir nuevos usuarios). Payoneer tiene operación en Argentina documentada por la propia empresa.

## Recomendación

**Por defecto: transferencia bancaria** para cualquier cliente en Argentina. Cuesta 0, acredita en el momento y USD 1.000 entra holgado en el tope diario. Si el cliente paga en pesos, se toma el MEP del día de cada pago (`pricing.md`).

- Si el cliente pide pagar con tarjeta o en cuotas: Mercado Pago **a 30 días**, y el costo (~3,6% con IVA) se suma al precio o lo absorbe Yellow; decisión del board ❓. La acreditación inmediata (~7,9%) no conviene.
- Si el cliente es del exterior: Payoneer, con transferencia (no tarjeta). Costo total estimado hasta 3%.

## Qué tiene que decidir el board

1. Aprobar la transferencia bancaria como medio por defecto (recomendado).
2. Si se ofrece Mercado Pago, ¿la comisión la paga el cliente o Yellow?
3. ❓ ¿Agustín ya tiene caja de ahorro en dólares, cuenta de Mercado Pago o cuenta Payoneer? Con eso se sabe qué hay que abrir antes del primer cliente.

## Fuentes (consultadas el 13/11/2026)

- BCRA, "Conocer los límites de las transferencias inmediatas": https://www.bcra.gob.ar/conocer-los-limites-de-las-transferencias-inmediatas/
- Mercado Pago Argentina, link de pago: https://www.mercadopago.com.ar/herramientas-para-vender/link-de-pago
- Simulador de comisiones Mercado Pago 2026 (tercero): https://app.spomsolutions.com/herramientas/comisiones-mercado-pago-2026
- Payoneer, "Estrategias para usar y mover tus fondos en Argentina": https://www.payoneer.com/es/resources/business/estrategias-para-usar-y-mover-tus-fondos-en-argentina/
- Payoneer, centro de ayuda (tarifa de recepción en USD): https://payoneer.custhelp.com/app/answers/detail/a_id/38762
- Finder, reseña de Payoneer (tarjeta 3%): https://www.finder.com/ca/payoneer-review
- Rankia, cómo enviar dinero del extranjero a Argentina: https://www.rankia.com.ar/blog/mejores-cuentas-bancarias-argentina/4250874-como-enviar-dinero-extranjero-argentina
- El Cronista, tema Wise: https://www.cronista.com/tema/wise/
