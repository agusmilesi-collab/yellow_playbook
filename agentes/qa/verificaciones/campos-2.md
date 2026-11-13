# QA · #QA001 Verificar la corrección del ticket #2 de Campos (#DES001)

- Puesto: QA (Kaoru)
- Fecha: 2026-11-13
- Cambio verificado: #DES001 Mostrar rF en el sumario estructural del Zulliger
- Repo: ~/Documents/camposhr-site, cambio solo en local (sin commit, sin push, sin build)
- Resultado: aprobado, con dos avisos para el board antes y después de publicar

## Qué se verificó

| Punto | Resultado |
|---|---|
| El cambio de Desarrollo es solo `lib/exner.ts` | ✅ una línea, 887 |
| El sumario del Zulliger muestra Fr+rF | ✅ en los cinco casos |
| El resto del sumario no cambia | ✅ 72 líneas, cambia 1 |
| El Rorschach no cambia | ✅ 65 líneas, 0 cambios |
| El informe suma Fr+rF | ✅ en los cinco casos |
| Los sumarios guardados se recalculan al abrir | ❌ quedan con Fr |

## 1. El diff

`git status`: modificados `app/centro/manual/contenido.ts`, `app/centro/normas/contenido.ts` y `lib/exner.ts`; sin seguimiento `AGENTS.md`. Los tres primeros que no son `lib/exner.ts` son de otra sesión, como avisó Desarrollo.

`git diff lib/exner.ts`, función `formatearZdunic`:

```diff
-    kv('Fr', aut.Fr),
+    kv('Fr+rF', aut.Fr_plus_rF),
```

## 2. El script de Desarrollo

`node --experimental-strip-types agentes/des/cambios/campos-2-prueba-rf.ts` (1 Fr, 2 rF, 1 F). Se vio lo mismo que dice `agentes/des/cambios/campos-2.md`:
- Zulliger: `**3r+(2)/R** 9 / 4 = 2.25 | **(2)** 0 | **Fr+rF** 3 | **FD** 0`
- Rorschach: `**Fr+rF** 3`
- Lectura del informe: `Fr+rF 3`

## 3. Prueba propia con otros casos

Script: `agentes/qa/verificaciones/campos-2-prueba-qa.ts`. Datos inventados, sin personas: respuestas W, FQ o, contenido Na, láminas Z1 a Z3 (Zulliger) o I (Rorschach).

| Caso | Zulliger y Rorschach |
|---|---|
| Sin reflejos (F, F, M, F) | Fr+rF 0, Ego_num 0, sin lectura |
| Solo rF | Fr+rF 1, Ego_num 3, lectura `Fr+rF 1` |
| Solo Fr | Fr+rF 1, Ego_num 3, lectura `Fr+rF 1` |
| 2 Fr y 3 rF | Fr+rF 5, Ego_num 15, lectura `Fr+rF 5` |

En los cuatro casos el Zulliger y el Rorschach dan el mismo número, el sumario y el informe coinciden, y el Zulliger conserva `FD` en la misma línea.

## 4. El resto del sumario

Comparé el texto completo del sumario armado con `lib/exner.ts` de HEAD contra el modificado, con un protocolo de 8 respuestas (Fr, rF, M, FC, rF+FD, F, CF, Fr, con pares y localizaciones W y D):
- Zulliger: 72 líneas en las dos versiones; cambia solo `**Fr** 2` por `**Fr+rF** 4`.
- Rorschach: 65 líneas en las dos versiones; ninguna cambia.

## 5. ¿Se recalculan los sumarios guardados al abrirlos?

No. Desarrollo escribió "se regeneran al abrirlos", y el código dice otra cosa:
- La ficha lee el texto guardado: `app/os/psicotecnicos/ficha/[id]/page.tsx` línea 524, `const texto = textoDelSumario(s.crudo);`.
- `textoDelSumario` (`lib/exner.ts` 800 a 806) devuelve `crudo.texto` tal cual; solo le agrega el Estilo si falta.
- El texto se escribe en `sumario_exner.crudo.texto` únicamente desde `POST /api/os/sumario` (`app/api/os/sumario/route.ts` línea 157), que dispara el botón "Calcular sumario" (`Calcular.tsx`).
- El agente que redacta el informe lee ese mismo texto guardado.

Consecuencia: después de publicar, todo Zulliger calculado antes sigue mostrando `Fr` (sin rF) hasta que alguien aprieta "Calcular sumario" en su ficha. Eso incluye la evaluación del ticket #2. El número del informe ya estaba bien (lo calcula sobre el JSON, que siempre tuvo rF).

## 6. Lo que el cambio movió alrededor

- Pintado de la hoja: el rótulo `Fr+rF` tiene banda (máximo 0) por el corte de la lectura `reflejos-presentes`. Antes el Zulliger mostraba `Fr` sin banda. Ahora, con un reflejo o más, la celda del Zulliger sale en rojo con flecha hacia arriba, igual que en el Rorschach y en línea con lo que dice el informe. Desarrollo no lo mencionó.
- Queda desactualizado el comentario de `lib/redacciones.ts` líneas 2697 y 2698 ("la hoja del Zulliger muestra Fr a secas"). No afecta el funcionamiento.
- Ese mismo comentario sugiere que la hoja impresa de Zdunic trae Fr solo. Si Lorena quiere Fr y rF en celdas separadas, es un pedido nuevo (lo mismo planteó Desarrollo). ❓

## 7. Observación sobre la entrega de Desarrollo

El Listo cuando de #DES001 pide `agentes/des/tickets/campos-2.md`; la entrega está en `agentes/des/cambios/campos-2.md`. El contenido cumple; cambia solo la carpeta.

## Para el board antes de publicar

1. Publicar `lib/exner.ts` sin sumar los otros archivos modificados (son de otra sesión y el repo es público).
2. Después de publicar, apretar "Calcular sumario" en la ficha del Zulliger del ticket #2 (y en los Zulliger con rF que se quieran ver bien) para que el texto guardado pase a `Fr+rF`. Es una escritura en la base de Campos: la hace el board o la evaluadora, nunca QA.
