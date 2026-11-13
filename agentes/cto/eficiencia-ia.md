# Eficiencia de IA

- **Puesto:** CTO
- **KR:** costo promedio por latido (equivalente API), de USD 0,75 a USD 0,40 al 31/12/2026
- **Base:** promedio de los 10 latidos medidos del 12 y 13/11/2026

## Cómo se forma el costo de un latido

En cada paso (leer un archivo, correr un comando, escribir) el modelo vuelve a recibir todo lo anterior: instrucciones de Claude Code, la skill del latido, lo que leyó y lo que hizo. Por eso el costo crece con dos cosas:

- **Pasos:** un latido de 40 pasos cuesta mucho más que uno de 15 con el mismo trabajo.
- **Tamaño de lo que se carga temprano:** un archivo de 10 KB leído en el paso 3 se reenvía en los 37 pasos siguientes.

El precio depende además del modelo del DPT (por millón de tokens, entrada y salida):

- **Opus 5.5:** USD 4 y 20
- **Sonnet 5.5:** USD 2 y 10
- **Haiku 5.5:** USD 0,10 y 0,50
- **Fable 5.2:** USD 8 y 40

Las relecturas en caché cuestan el 5% de un token nuevo y son más del 90% del total.

## Qué revisar cada jueves

1. `node agentes/os.mjs latidos`: los latidos de la semana con USD y tokens.
2. Los 3 más caros: para cada uno, `node agentes/os.mjs costo <puesto>` y la entrega. Preguntas:
   - ¿Cuántos pasos tuvo? ¿Se repitieron lecturas o comandos?
   - ¿Leyó archivos largos que no usó?
   - ¿La tarea pedía el modelo que tiene el DPT? Una tarea mecánica con Opus es candidata a Sonnet o Haiku.
   - ¿Cuántas tareas entregó? El costo que importa es por entrega aprobada, no por latido.
3. Una mejora propuesta por semana, la de más ahorro, en el informe del jueves.

## Palancas, de más barata a más cara de aplicar

1. **Juntar comandos** en un solo paso (`&&`) y sumar a `os.mjs` lo que un puesto hace siempre en varios pasos.
2. **Achicar lo que se carga en cada latido:** la skill del latido, las fichas `agentes/<puesto>/SKILL.md`, `decisiones.md` y las memorias. Una memoria que pasa de 5 KB se resume.
3. **Agrupar tareas:** dos tareas chicas del mismo puesto en un latido cuestan menos que dos latidos.
4. **Modelo más barato** para un puesto operativo. Lo decide el CHRO en el DPT y lo aprueba el board.

## Límite

El CTO mide y propone. Un cambio en la skill del latido, en la ficha de otro puesto o en el modelo de un DPT va a la bandeja con `--board` y no lo aplica solo. Una mejora que baja el costo pero hace que una entrega se devuelva no sirve: el control es que las entregas sigan aprobándose contra su Listo cuando.
