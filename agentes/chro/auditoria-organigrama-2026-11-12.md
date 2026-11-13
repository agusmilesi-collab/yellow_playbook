# Auditoría del organigrama de Yellow con el método Campos

- **Puesto:** CHRO, Yellow OS
- **Fecha:** 2026-11-12
- **Para:** el board, que aprueba o veta cada decisión en la bandeja.
- **Base:** el OS al 12/11/2026 (`node scripts/os.mjs ver`), `agentes/chro/diseno-de-agentes.md` y `agentes/chro/metodo-campos/framework.md` (checklist de inconsistencias y catálogo de decisiones). Leyenda: ✅ dato del OS, 🔵 lectura del puesto, ❓ falta el dato.

## Resumen

La estructura sirve para llegar al primer cliente: no hace falta crear ni eliminar puestos antes del 31/12/2026 🔵. Hay dos funciones que la cadena de valor exige y nadie tiene a cargo, y las dos se resuelven redefiniendo puestos existentes, sin puestos nuevos: instalar el sistema del cliente y conseguir referidos.

## Cadena de valor de Yellow

**1.** Definir qué se vende y a quién

- **Puesto que rinde cuentas:** CPO (con evidencia del INV) ✅

**2.** Atraer personas que quieren hablar

- **Puesto que rinde cuentas:** CMO ✅

**3.** Convertir conversaciones en propuestas y clientes

- **Puesto que rinde cuentas:** CSO ✅

**4.** Rediseñar el servicio del cliente

- **Puesto que rinde cuentas:** COO (entrega según pipeline) ✅

**5.** Armar e instalar el sistema del cliente

- **Puesto que rinde cuentas:** **nadie** (ver hallazgo 2)

**6.** Cobrar

- **Puesto que rinde cuentas:** CFO ✅

**7.** Que el cliente vuelva y recomiende

- **Puesto que rinde cuentas:** **nadie** (ver hallazgo 3)

**8.** Aprender de cada caso

- **Puesto que rinde cuentas:** COO → CPO (traspaso "aprendido") ✅

**Soporte.** Memoria y herramientas internas

- **Puesto que rinde cuentas:** CTO ✅

**Control.** Seguridad

- **Puesto que rinde cuentas:** CISO, reporta al CEO ✅

**Soporte.** Estructura y puestos

- **Puesto que rinde cuentas:** CHRO ✅

## Hallazgos

1. **Alcance de control del CEO: 8 reportes directos** (CPO, CMO, CSO, COO, CFO, CTO, CISO, CHRO) ✅. Está en el borde de la vara de 7 a 8. Con agentes, la carga de revisión del CEO es baja y la regla 3 del agrupamiento se mueve con el tamaño 🔵. **No hace falta un nivel intermedio todavía.** Se revisa si se suma un noveno puesto: el candidato natural es juntar CMO y CSO bajo un responsable comercial.
2. **Función huérfana: instalar el sistema del cliente.** La frase que recomienda el CEO dice "armo e instalo el sistema" (`learnings/oferta/2026-11-12-ceo-decision-segmento.md`) 🔵. Hoy el COO entrega el caso y el CTO construye herramientas internas ✅; nadie responde por el sistema que se instala en el cliente. Con Lisandro lo tapó el board a mano 🔵 (variante tapada de la función huérfana).
3. **Función huérfana: que el cliente vuelva y recomiende.** La misión de Yellow termina en "vuelvan y los recomienden" ✅. Ningún KR mide recompra ni referidos ✅. El canal de referidos de Lisandro está anotado en `cases/Lisandro/case-notes.md` y no tiene dueño 🔵.
4. **Segregación: sin problemas.** El CISO controla y reporta al CEO, no al CTO ✅. El CFO registra la plata y no la gasta ✅.
5. **Un resultado, un dueño: un caso a vigilar.** "Clientes pagos" (CEO) y "Clientes con contrato, factura y cobro registrados" (CFO) cuentan el mismo cliente ✅. Miden cosas distintas (vender contra registrar y cobrar), así que no hay doble dueño; se deja anotado 🔵.
6. **KR que mide actividad y no resultado:** "Contenidos publicados" (CMO) se puede cumplir sin que llegue nadie 🔵. El resultado del CMO ya está en "Pedidos de llamada desde el sitio". Cambiar KRs es del CEO: queda como sugerencia para su próximo latido.
7. **Criterio escrito: 3 de 10 puestos** (CEO, COO, CHRO) ✅. Los 7 que faltan van en `agentes/chro/criterios-2026-11-12.md`, entregado aparte.

## Decisiones propuestas (catálogo Campos)

**D1.** **Confirmar** la estructura actual hasta el primer cliente

- **Sobre:** Puestos
- **Qué cambia:** Nada
- **Costo de no hacerlo:** Mover puestos ahora distrae del objetivo 🔵

**D2.** **Redefinir** el COO: suma "instalar el sistema del cliente" como parte de la entrega, con un traspaso nuevo COO → CTO ("sistema a construir", listo cuando: alcance aprobado por el cliente)

- **Sobre:** Puesto
- **Qué cambia:** Misión del COO y un traspaso
- **Costo de no hacerlo:** El primer cliente pago cae en el board, como Lisandro 🔵

**D3.** **Redefinir** el CSO: suma "pedir referidos a cada cliente al cerrar una etapa" y un KR de referidos (0 → 2 al 31/12)

- **Sobre:** Puesto
- **Qué cambia:** Misión y KR del CSO (el KR lo carga el CEO)
- **Costo de no hacerlo:** El canal más barato para el primer cliente queda sin dueño 🔵

Por qué no puestos nuevos (orden de `diseno-de-agentes.md`): las dos funciones caben en puestos existentes sin juntar perfiles opuestos. Instalar es entrega (COO) con capacidad técnica comprada al CTO por traspaso; referidos es conversación con el cliente (CSO).

**Decisión pedida:** aprobar D1, D2 y D3, o vetar las que no.
