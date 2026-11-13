# Cobro del primer cliente: transferencia, ARS 500.000 en dos pagos

- **Puesto:** CFO
- **Fecha:** 13/11/2026
- **Tarea:** jq2lffuq (vence 16/11/2026)
- **Decisión que aplica:** precio y cobro del primer cliente, `agentes/decisiones.md`, 13/11/2026 ✅

## Medio de cobro elegido

Transferencia bancaria a la cuenta de Agustín ✅ (decisión del board, 13/11/2026).

- **Comisión:** 0%. Las transferencias inmediatas de usuarios finales son gratuitas ✅ (BCRA, consultado 13/11/2026)
- **Plazo:** inmediato, 24 horas todos los días ✅ (BCRA)
- **Moneda:** pesos. Se cobra en ARS, sin tipo de cambio
- **Qué necesita el cliente:** el CBU o alias de Agustín y el CUIT del titular para verificar el destino

Mercado Pago y Payoneer quedan fuera para este cliente: cobran comisión (Mercado Pago 2,99% a 6,49% más IVA 🔵) y el cliente es de Argentina. Se retoman solo si un cliente pide tarjeta o paga desde el exterior.

## Los dos pagos

| Pago | Condición |
|---|---|
| 1: ARS 250.000 | Antes de empezar. Sin este pago no arranca el diagnóstico |
| 2: ARS 250.000 | Antes de la entrega o de la reunión de onboarding, lo que ocurra primero |

Regla: nunca se entrega una parte sin haber cobrado antes el pago que la habilita (aprendizaje del caso Lisandro, que pagó solo el primer tramo y no terminó el onboarding ✅).

## Datos de la cuenta: los completa el board

El CFO no escribe ni guarda números de cuenta. El board completa estos campos en el mensaje al cliente en el momento de enviarlo, y no en este archivo ni en el repo.

- **Titular:** [TITULAR DE LA CUENTA]
- **CUIT del titular:** [CUIT]
- **Banco:** [BANCO]
- **Tipo de cuenta:** caja de ahorro en pesos [CONFIRMAR]
- **CBU:** [CBU, 22 DÍGITOS]
- **Alias:** [ALIAS]

Pregunta al board ❓: ¿la cuenta es caja de ahorro personal o cuenta a nombre del monotributo? Para el monotributo es la misma persona; alcanza con que el titular coincida con quien factura.

## Mensaje al cliente para el primer pago

Para mandar por WhatsApp o correo cuando el cliente confirme. Lo envía el board.

> Hola [NOMBRE]. Para arrancar, te paso los datos para el primer pago de ARS 250.000:
>
> Titular: [TITULAR DE LA CUENTA]
> CUIT: [CUIT]
> Banco: [BANCO]
> CBU: [CBU]
> Alias: [ALIAS]
>
> Cuando lo transfieras, mandame el comprobante y agendamos el primer encuentro. El segundo pago, también de ARS 250.000, se hace antes de la reunión de entrega. Por cada pago te mando la factura.

## Mensaje al cliente para el segundo pago

> Hola [NOMBRE]. Ya está todo listo para la entrega del [FECHA]. Antes de esa reunión te pido el segundo pago de ARS 250.000 a la misma cuenta (alias [ALIAS]). Con el comprobante confirmamos el horario.

## Paso a paso del cobro

1. El cliente confirma: el board le manda el mensaje del primer pago con los datos completos.
2. Llega el comprobante: el board verifica en el homebanking que el dinero entró (el comprobante solo no alcanza).
3. El board avisa al CFO en el OS: fecha y monto acreditado. El CFO lo anota en el estado de resultados del mes.
4. Factura C por ARS 250.000 (Agustín es monotributista ✅). La emite el board hasta que el agente Administrador aprenda a hacerlo (lo construye el CTO).
5. Recién entonces se agenda el primer encuentro.
6. Antes de la entrega: mensaje del segundo pago y se repiten los pasos 2 a 4.

## Qué queda para el board

1. Completar los datos de la cuenta en el mensaje al enviarlo (nunca en el repo ni en el OS).
2. ❓ Confirmar si la cuenta es personal y si el titular coincide con quien factura.
3. Recomendación del CFO: el contrato modelo (`agentes/cfo/contrato-modelo.md`) todavía dice USD 2.000 y cobra el segundo pago después de la entrega. Hay que actualizarlo a ARS 500.000 y segundo pago antes de la entrega. Propongo hacerlo como tarea nueva del CFO.

## Fuentes

- `agentes/decisiones.md`, 13/11/2026: "ARS 500.000 en dos pagos de ARS 250.000, el primero antes de empezar y el segundo antes de la entrega o de la reunión de onboarding, por transferencia a la cuenta de Agustín (el CFO pide el CBU)".
- Devolución del board a la tarea jq2lffuq: "Transferencia a mi cuenta. Luego pedime cbu."
- BCRA, "Conocer los límites de las transferencias inmediatas" (consultado 13/11/2026): https://www.bcra.gob.ar/conocer-los-limites-de-las-transferencias-inmediatas/
