# DES · #DES001 Mostrar rF en el sumario estructural del Zulliger

- Puesto: DES (Linus)
- Fecha: 2026-11-13
- Pedido: ticket #2 de Campos HR
- Repo: ~/Documents/camposhr-site (público), solo en local, sin commit ni push

## Causa

`formatearZdunic` (lib/exner.ts) imprimía en Autopercepción `kv('Fr', aut.Fr)`, que es solo el reflejo de forma. El motor ya calculaba `aut.rF` y `aut.Fr_plus_rF`, y el layout del Rorschach (`formatearExner`) ya imprimía `Fr+rF`. El dato estaba bien; el layout del Zulliger mostraba solo una parte.

## Qué cambié

Un archivo, una línea: `lib/exner.ts` línea 887, dentro de `formatearZdunic`.

```diff
-    kv('Fr', aut.Fr),
+    kv('Fr+rF', aut.Fr_plus_rF),
```

Resultado en el sumario del Zulliger, caso de prueba: `**Fr+rF** 3` (antes `**Fr** 1`).

## El informe, ¿tuvo en cuenta rF?

Sí, con o sin el cambio. Confirmado con el caso de prueba:
- lib/exner.ts línea 459: `Ego_num = 3 * (Fr + rF) + Pares`. Con Fr 1, rF 2 y 0 pares, Ego_num da 9 (3 x 3).
- lib/redacciones.ts líneas 3587 a 3589: `reflejos = Fr + rF`; si supera el corte (0), agrega la lectura `reflejos-presentes` con valor `Fr+rF 3` y su texto para Zulliger.
- Lo que faltaba era solo mostrarlo en el sumario.

## Cómo probarlo

Datos de prueba inventados (sin datos de personas): 4 respuestas del Zulliger, láminas Z1, Z2, Z2, Z3, todas W, FQ o, sin pares. Determinantes: `rF`, `Fr`, `rF`, `F`. Esperado: Fr 1, rF 2, Fr+rF 3, R 4.

1. `cd ~/Documents/camposhr-site`
2. `node --experimental-strip-types ~/Desktop/"Codigo Proyectos"/"yellow playbook"/agentes/des/cambios/campos-2-prueba-rf.ts` (copia del script; usa rutas absolutas a lib/exner.ts y lib/redacciones.ts).
3. Salida esperada:
   - Zulliger: `**3r+(2)/R** 9 / 4 = 2.25 | **(2)** 0 | **Fr+rF** 3 | **FD** 0`
   - Rorschach (control): `**3r+(2)/R** 9 / 4 = 2.25 | **(2)** 0 | **Fr+rF** 3`
   - Lectura Zulliger: `Fr+rF | Fr+rF 3 | Necesita que le reafirmen su valor...`
4. Antes del cambio, el paso 3 mostraba `**Fr** 1` en el Zulliger (reproducido).
5. En pantalla: abrir la ficha psicotécnica de un Zulliger de prueba (por ejemplo Lucía Barrientos en Distribuidora Andina) con una respuesta rF y mirar Autopercepción en el sumario. No usé ni abrí datos reales.

## Qué otras partes pudo tocar

- Solo cambia el texto que arma `formatearSumario` para el layout `zdunic`. Lo lee `SumarioTexto.tsx` y el agente que redacta el informe, porque el mismo texto va a los dos. Búsqueda de `**Fr` y `Fr+rF` en lib y app: ningún otro código lee ese rótulo del texto.
- No cambia ningún cálculo, ni el Rorschach, ni los sumarios ya guardados (se regeneran al abrirlos; los textos guardados antes siguen con `Fr`; no lo verifiqué).
- Sin tests en el repo (package.json no tiene script de test). Corrí el script de prueba y `tsc --noEmit` sin errores en exner.ts.

## Para frenar o decidir (punto 5 del pedido)

No pude verificar si la hoja impresa de Zdunic trae rF como línea propia (no hay copia de la hoja en el repo; el comentario de lib/exner.ts dice "verificado contra la hoja" pero no menciona rF). Elegí `Fr+rF` combinado, igual que el Rorschach, porque no suma una línea ni cambia el orden del layout. Si el board o Lorena quieren Fr y rF en celdas separadas, es un cambio de formato: pedido nuevo.

## Archivos ajenos

`git status` antes de tocar: ya tenían cambios de otra sesión `app/centro/manual/contenido.ts`, `app/centro/normas/contenido.ts` y `AGENTS.md`. No los toqué. El único archivo mío es `lib/exner.ts`.
