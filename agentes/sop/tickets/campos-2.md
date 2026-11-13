# Ticket #2 de Campos HR

- Puesto: SOP (Soporte), 2026-11-13
- Tarea: #SOP001 Clasificar el ticket #2 de Campos HR y pasarlo a quien corresponde
- Cliente: Campos HR (cliente interno)

## Qué pide el cliente

Lorena pide dos cosas sobre el sumario estructural del Zulliger:

- Sumar el reflejo: hoy figura solo Fr y falta rF.
- Revisar si el informe tuvo en cuenta el dato del reflejo, aunque no aparezca en el sumario.

## Clasificación

- Clase: falla 🔵 (inferencia, falta confirmar contra la hoja de Zdunic)
- Urgencia: alta, no grave. El informe del candidato no se envió al cliente, no hay datos expuestos, ningún agente caído y Lorena puede seguir trabajando.
- Plazo de la clase: cierre en 5 días hábiles (KR de Soporte).

## Por qué es falla y no pedido nuevo

- ✅ El sumario del Rorschach ya muestra Fr+rF (lib/exner.ts, formatearExner).
- ✅ El motor calcula rF y Fr+rF también para el Zulliger (lib/exner.ts, líneas 299, 627 y 653).
- ✅ El layout del Zulliger muestra solo Fr (lib/exner.ts, formatearZdunic, bloque Autopercepción).
- ✅ El código dice que el layout del Zulliger está "verificado contra la hoja de sumario estructural de Zdunic" (lib/exner.ts, línea 92): lo que promete es copiar la hoja.
- ❓ No pude confirmar que la hoja de Zdunic traiga rF. Si no lo trae, pasa a pedido nuevo y va al CSO. Lorena, que conoce la hoja, lo sabe: la pregunta va en la respuesta.

## Segunda parte: ¿el informe usó rF?

- 🔵 Por lectura del código, sí: el cálculo del Ego suma Fr + rF (lib/exner.ts, línea 459) y la redacción "reflejos presentes" suma Fr + rF (lib/redacciones.ts, líneas 3587 a 3589).
- ❓ Falta confirmarlo con un caso de prueba, que es trabajo de Desarrollo y QA.

## Pasado a

- Desarrollo: #DES001 Mostrar rF en el sumario estructural del Zulliger. Registrado en el traspaso SOP a DES.
- QA verifica después con un caso de prueba (nunca con datos reales). Recién ahí se cierra con Lorena.

## Respuesta propuesta para Lorena (para aprobar por el board, no enviada)

Hola Lorena. Recibimos tu pedido sobre el sumario estructural del Zulliger.

Qué vamos a hacer:

- Sumar rF al sumario, al lado de Fr, como figura en el sumario del Rorschach.
- Revisar con un caso de prueba si el informe del Zulliger tuvo en cuenta el reflejo. Por lo que vemos, el cálculo suma Fr y rF, pero lo vamos a comprobar.

Cuándo: te avisamos el resultado de la revisión antes del 20/11. Hasta que lo confirmemos, no envíes el informe de este caso.

Una pregunta: ¿la hoja de sumario estructural de Zdunic trae rF como línea propia? Si no la trae, lo tratamos como un cambio nuevo y lo coordinamos aparte.
