# Cadena de valor de Yellow con el método Campos

- **Puesto:** CHRO, Yellow OS
- **Fecha:** 2026-11-13
- **Tarea:** sqc382pc
- **Para:** el board, que aprueba o veta en la bandeja.
- **Base:** `metodo-campos/cadenas-tipo.md` (plantilla de servicios profesionales), `metodo-campos/framework.md` (bloque 3), `auditoria-organigrama-2026-11-12.md` y `agentes/decisiones.md` (oferta en dos capas del 13/11). Leyenda: ✅ dato del OS o decisión del board, 🔵 lectura del puesto, ❓ falta el dato.
- **Versión para la pantalla:** `agentes/chro/cadena-de-valor.json`.

## Resumen

Yellow es un **taller**: resuelve un problema distinto en cada profesional, así que su flujo es un ciclo que se repite por cliente y no una línea de puestos 🔵. La cadena tiene 9 actividades primarias (7 forman el ciclo) y 8 de soporte. Dos actividades del ciclo no tienen quién rinda cuentas: operar los agentes cada mes y pedir recompra y referidos. El cuello de botella está en vender: hoy no entra ningún profesional al ciclo (0 de 8 llamadas) ✅, y cuando entre, las conversaciones de venta y de diagnóstico dependen de las horas de Agustín 🔵.

## 1. Configuración de valor: taller

- **Por qué taller:** cada profesional llega con un servicio distinto y Yellow lo diagnostica y lo rediseña a medida (capa 1 de la oferta) ✅. Eso es diagnóstico → solución → ejecución → evaluación, el ciclo del taller.
- **Injerto anotado:** la capa 2 (agentes del catálogo cobrados por mes) agrega una operación recurrente por cliente 🔵. No cambia la configuración dominante: cada agente nuevo vuelve a pasar por diagnóstico.
- **Qué corrige respecto de la pantalla actual:** la vista mostraba puestos en fila (CPO → CMO → CSO → COO → CFO). La cadena se arma con actividades (verbo + objeto); el puesto es quién rinde cuentas por cada una.

## 2. Actividades primarias, en el orden del flujo

Primaria = está en el viaje de un cliente concreto y crea lo que el profesional paga (criterios 1 y 2 de `cadenas-tipo.md`).

**1. Generar demanda de profesionales** (fuera del ciclo)

- **Responsable:** CMO ✅
- **Colaboran:** CPO (la oferta que se cuenta)
- **Pasos:** contar la oferta aprobada en el sitio y en contenidos; recibir el pedido de llamada; pasar el lead al CSO con nombre, contacto, origen y problema nombrado.

**2. Vender la propuesta** (fuera del ciclo)

- **Responsable:** CSO ✅
- **Colaboran:** INV (prospectos calificados), CFO (contrato y cobro)
- **Pasos:** llamada de discovery; propuesta con precio en dos partes; contrato firmado; primer pago acreditado; traspaso del cliente al COO.

**3. Diagnosticar el servicio del profesional** (ciclo)

- **Responsable:** COO ✅ (D2 aprobada)
- **Colaboran:** CTO (guarda la transcripción en el caso)
- **Pasos:** entrevista de diagnóstico; transcripción en el caso; mapa del trabajo que su cliente le encarga al profesional (JTBD); dónde se pierde valor y qué tareas se repiten.

**4. Rediseñar la entrega del servicio** (ciclo)

- **Responsable:** COO ✅
- **Colaboran:** CPO (método y catálogo)
- **Pasos:** diseñar el servicio nuevo con el método Yellow; elegir qué agentes del catálogo lo operan; validar con el profesional; pasar al CTO el alcance del sistema a construir.

**5. Instalar los agentes en el servicio del cliente** (ciclo)

- **Responsable:** COO ✅ (D2 aprobada)
- **Colaboran:** CTO (construye), CISO (accesos a los datos de sus clientes)
- **Pasos:** configurar el agente con los datos del profesional; revisar el acceso a los datos de sus clientes; probar con casos reales; reunión de onboarding.

**6. Evaluar y cerrar la etapa** (ciclo)

- **Responsable:** COO ✅
- **Pasos:** validar con el profesional el Listo cuando de la etapa; avisar al CFO que está para facturar; escribir lo aprendido para el CPO.

**7. Facturar y cobrar** (ciclo)

- **Responsable:** CFO ✅ (lo absorbe como iniciativa hasta que el volumen justifique un puesto operativo de administración)
- **Colaboran:** COO (traspaso "facturar")
- **Pasos:** emitir la factura de la etapa o del mes; seguir el pago hasta que se acredita; registrarlo en el caso. Regla del board: nunca se entrega una etapa sin cobrar antes ✅.

**8. Operar los agentes instalados cada mes** (ciclo)

- **Responsable:** **nadie** (función huérfana, ver sección 4)
- **Colaboran hoy, sin mandato:** COO y CTO
- **Pasos:** revisar que cada agente cumpla su Listo cuando; corregir lo que falla; medir el costo mensual de cada agente; informar al profesional qué hizo su equipo en el mes.

**9. Pedir recompra y referidos** (ciclo, cierra la vuelta)

- **Responsable:** **nadie** (función huérfana; D3 pendiente del board)
- **Colaboran hoy, sin mandato:** CSO y COO
- **Pasos:** proponer el agente siguiente del catálogo al cerrar una etapa; pedir un referido; cuando el profesional suma un agente, volver a la actividad 3.

## 3. Actividades de soporte

Soporte = abastece a todos los clientes a la vez, por atrás y con otro ritmo.

| Actividad | Responsable |
|---|---|
| Diseñar la oferta y el catálogo de agentes | CPO (colabora INV) |
| Investigar el mercado y calificar prospectos | INV |
| Mantener el método con lo aprendido | CPO (colabora COO) |
| Construir los agentes y la memoria interna | CTO (colabora CISO) |
| Proteger los datos de los clientes y de sus clientes | CISO |
| Administrar el margen y los gastos | CFO |
| Diseñar la estructura y los puestos | CHRO |
| Dirigir la empresa | CEO |

- **Diseñar la oferta va en soporte** 🔵: sirve a todos los clientes y no está en el viaje de uno. Si el board la considera el lugar donde el negocio se gana o se pierde, pasa a primaria sin cambiar el responsable.
- **Mantener el método** es la capacidad que la plantilla marca como la que separa al taller maduro del inmaduro: que el método viva en el playbook y no en la cabeza de Agustín.
- **Construir los agentes va en soporte:** cada agente del catálogo se construye una vez y se instala en muchos clientes. Lo que se hace por cliente (configurar e instalar) está en la primaria 5.

## 4. Ciclo por cliente

Diagnosticar (3) → Rediseñar (4) → Instalar (5) → Evaluar y cerrar (6) → Facturar y cobrar (7) → Operar cada mes (8) → Recompra y referidos (9) → vuelve a Diagnosticar (3) con el agente siguiente.

- **Entrada al ciclo:** Generar demanda (1) y Vender (2), una sola vez por profesional.
- **Por qué vuelve:** la decisión del board dice que los agentes se suman de a uno y que nunca se automatiza un servicio sin rediseñarlo antes ✅. Cada agente nuevo pasa otra vez por diagnóstico.

## 5. Funciones huérfanas

**Operar los agentes instalados cada mes** (nueva en esta cadena)

- **Qué falta:** el profesional paga un abono mensual por los agentes ✅ y ningún puesto responde por que funcionen después del onboarding. El COO entrega e instala; el CTO construye para todos 🔵.
- **Cuándo duele:** desde el primer agente instalado. Hoy no hay ninguno, así que no hace falta resolverlo antes del primer cliente 🔵.
- **Propuesta (para decidir con el primer cliente):** sumarla al COO como parte de la entrega, con el CTO como colaborador para lo técnico. Prueba antes de un puesto nuevo (criterio 2): cabe en un puesto existente sin juntar perfiles opuestos.

**Pedir recompra y referidos** (ya detectada en la auditoría del 12/11)

- **Estado:** D3 (sumarla al CSO con un KR de referidos 0 → 2) sigue pendiente del board ✅.
- **Recomendación por defecto:** aprobar D3. La recompra en este modelo es sumar el agente siguiente, que es una venta.

## 6. Cuello de botella

- **Hoy: Vender la propuesta (actividad 2).** Ningún profesional entró al ciclo: 0 de 8 llamadas de discovery y 0 de 3 propuestas ✅. La lista de 10 nombres (tarea 97mowmzs de Agustín) traba las llamadas del CSO ✅.
- **Cuando haya clientes: las horas de Agustín en reuniones** 🔵. Los agentes no pueden hacer la llamada de discovery ni la entrevista de diagnóstico; las hace Agustín. Es el cuello típico del taller: la misma persona vende, diagnostica y aprueba.
- **Qué protege el cuello:** guion de discovery y de diagnóstico escritos (COO y CSO), transcripción automática (CTO) y el diagnóstico armado por un agente antes de la reunión, para que la hora de Agustín sea solo conversación.

## 7. Decisión pedida al board

1. **Aprobar esta cadena** como la que lee la vista de Objetivos del OS (opción recomendada).
2. **Aprobar D3** (recompra y referidos al CSO).
3. **Dejar anotada** la huérfana "Operar los agentes cada mes" para resolverla con el primer agente instalado; propuesta por defecto: al COO.
