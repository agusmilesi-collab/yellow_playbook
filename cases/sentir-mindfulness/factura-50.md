# Factura 50% — Adelanto Modelo C

**Documento simulado para validación del proceso Yellow.** La factura fiscal real (tipo, número, CAE en caso de factura electrónica AFIP) se emite desde el sistema fiscal del consultor cuando se ejecute el cobro efectivo.

---

## Emisor

**Agustín Milesi**, operando bajo la marca **Yellow** (UX Strategy).
DNI: [completar].
CUIT: [completar].
Domicilio fiscal: [completar].
Condición frente al IVA: [completar según situación: Monotributo / Responsable Inscripto].
Tipo de comprobante: [Factura A / C / E según situación impositiva y residencia del cliente].

---

## Receptor

**Sentir Mindfulness**, representada por Agustín Milesi.
CUIT: [completar].
Domicilio fiscal: Rosario, Santa Fe, Argentina.
Condición frente al IVA: [completar].

---

## Detalle

| Concepto | Cantidad | Precio unitario | Subtotal |
|---|---|---|---|
| Servicio de UX Strategy, Modelo C (Diagnóstico + acompañamiento). Adelanto del 50% del proyecto sobre Sentir Mindfulness, según carta acuerdo de fecha 2026-05-14 (ver `contrato.md`). | 1 | USD 1.500,00 | USD 1.500,00 |

**Subtotal:** USD 1.500,00
**IVA (si corresponde):** [completar según situación]
**Total a pagar:** **USD 1.500,00** (más IVA si corresponde)

---

## Condiciones

- **Fecha de emisión:** 2026-05-14.
- **Fecha de vencimiento:** 2026-05-15 (fecha de inicio del proyecto; el pago debe estar acreditado antes para activar el arranque, según principio P8 del playbook Yellow).
- **Moneda:** USD. A opción del cliente, puede cancelarse en pesos al tipo de cambio MEP del día del pago.
- **Medio de pago aceptado:** transferencia bancaria, transferencia internacional o pago en USD billete, según preferencia del cliente y disponibilidad operativa.

### Datos bancarios para transferencia

[Completar con datos reales de la cuenta operativa de Yellow al ejecutar el cobro.]

- Cuenta en pesos: [Banco, CBU, alias].
- Cuenta en USD: [Banco, CBU, alias].
- Wise / receptor internacional: [completar si aplica].

---

## Observaciones

- Esta factura corresponde al **50% de adelanto** del proyecto. El 50% restante (USD 1.500) se factura junto con la entrega del documento de cierre al finalizar el proyecto (fecha estimada 2026-08-20).
- El alcance, plazos y compromisos están detallados en la carta acuerdo (`contrato.md`) de fecha 2026-05-14.
- En el caso de cancelación del proyecto por parte del cliente, aplican las condiciones de la cláusula 8 de la carta acuerdo.

---

## Nota interna (no se incluye en el comprobante fiscal)

El cobro efectivo de esta factura implica una transferencia entre dos negocios del mismo titular (Sentir Mindfulness a Yellow). La operación se ejecuta desde la cuenta operativa de Sentir hacia la cuenta operativa de Yellow, ambas separadas según la premisa de `playbook/06-operations/finance.md`. Del monto recibido por Yellow, el 30% se deriva a la cuenta de reserva (impuestos más colchón) según política de reservas del mismo archivo.
