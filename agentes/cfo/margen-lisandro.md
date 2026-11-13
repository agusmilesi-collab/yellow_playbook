# Margen del caso Lisandro y meta de margen por cliente

- **Tarea:** s8900o0h
- **Fecha:** 13/11/2026
- **Puesto:** CFO
- **Fuentes:** `cases/Lisandro/contrato-lisandro.md`, `cases/Lisandro/case-notes.md`, `cases/Lisandro/propuesta-lisandro4.md`, `playbook/06-operations/finance.md` y `pricing.md`.
- **Convención (R5):** ✅ sale de un registro · 🔵 inferencia · ❓ falta el dato.

## 1. Ingresos del caso

- **Precio del contrato:** ARS: 500.000 · USD: ❓ (sin tipo de cambio de cada pago) · Fecha: ❓ · Estado: ✅ contratado. Fuente: contrato, cláusula 4
- **Primer pago (50%):** ARS: 250.000 · USD: ❓ · Fecha: ❓ · Estado: 🔵 cobrado, sin confirmar. Fuente: `finance.md`, tracking de junio
- **Segundo pago (50%, post-onboarding):** ARS: 250.000 · USD: ❓ · Fecha: ❓ · Estado: ❓. Fuente: `case-notes.md`: "¿segunda mitad cobrada?" abierto
- **Total:** ARS: **500.000 contratado; 250.000 🔵 cobrado** · USD: **~400-500 🔵**. Fuente: `case-notes.md` y `pricing.md` dan "~USD 400-500" sin tipo de cambio

## 2. Costos del caso

- **Notion y Claude del cliente:** USD: 0 para Yellow. Fuente: ✅ contrato, cláusula 11: los paga el cliente
- **Herramientas de Agustín durante el caso (Claude, Google Workspace):** USD: ❓. Fuente: `finance.md` estima USD 25-30/mes de herramientas 🔵; falta cuánto se usó para este caso y cuántos meses duró
- **Horas de Agustín (venta, armado, onboarding R1-R3, manual, refinamiento):** USD: ❓ horas × ❓ costo por hora. Fuente: No hay registro de horas en el repo
- **Latidos de los puestos:** USD: 0. Fuente: El caso es de junio; el OS empezó en noviembre
- **Total costos:** USD: **❓**

## 3. Margen del caso

**Margen = (ingresos cobrados − costos) / ingresos cobrados. Hoy: ❓**, porque faltan las horas, el costo por hora y si se cobró la segunda mitad.

Simulación, para que el board vea qué cambia con cada dato (no es un dato del caso): con ingresos de USD 450 🔵, herramientas USD 26 🔵 y la hora de Agustín valuada en USD 10 (valor de referencia de la sección 4, sin aprobar):

- **20 horas del caso (supuesto):** Costo total: 226 · Margen: 50%
- **40 horas del caso (supuesto):** Costo total: 426 · Margen: 5%
- **60 horas del caso (supuesto):** Costo total: 626 · Margen: -39%

Lectura: con cualquier valuación de la hora, el caso Lisandro tuvo margen bajo o negativo. Es coherente con lo que dice `pricing.md`: fue precio de caso fundacional, fuera de la escalera, y no sirve de referencia.

## 4. Propuesta de meta de margen por cliente

El 60% (propuesta inicial del CEO) solo tiene sentido si se fija cuánto vale la hora de Agustín. Cálculo con el Modelo B de `pricing.md` (USD 2.000, 60-80 horas):

- Margen 60% ⇒ costos ≤ USD 800 por cliente.
- Menos herramientas y latidos del caso (USD 100 🔵, una suscripción mensual): quedan USD 700 para las horas.
- USD 700 / 60-80 horas = **USD 8,75 a 11,70 por hora**.

Es decir: "60% de margen" es lo mismo que decir "la hora de Agustín cuesta unos USD 10 y el resto es ganancia de Yellow".

**Recomendación por defecto:** mantener la meta en **60%**, con la hora de Agustín valuada en **USD 10** como costo de referencia y las horas registradas por caso (sin registro de horas, el KR no se puede medir). La tarifa horaria efectiva (USD 25-33 según `pricing.md`) se sigue aparte, como dato.
**Alternativa:** medir margen sin horas (solo costos de terceros y latidos), con meta 90%. Es más fácil de medir pero no dice si el precio paga el trabajo.

## 5. Preguntas para el board

1. ❓ Fecha y monto de cada pago de Lisandro, y tipo de cambio del día (para el equivalente en USD).
2. ❓ ¿Se cobró la segunda mitad?
3. ❓ ¿Cuántas horas le llevó el caso, aunque sea estimado (venta, armado, onboarding, refinamiento)?
4. ❓ ¿Aprobás valuar la hora de Agustín en USD 10 para el cálculo de margen y empezar a registrar horas por caso?
