# Tickets de Campos HR: cómo se leen y cómo se contestan

- **Cliente:** Campos HR (interno; el board es socio).
- **Dónde están:** tablas `tickets` y `ticket_mensajes` de la base de Campos. Las credenciales están en `~/Documents/camposhr-site/.env.local`; se usan desde la Mac y nunca se copian.
- **Lo que ve el cliente:** os.camposhr.com/os/tickets. Cada ticket tiene su conversación.

## Estados

- **Nuevo:** lo cargó el cliente y Soporte todavía no lo tomó.
- **En curso:** Soporte lo tomó. Se pone sin mensaje.
- **Bloqueado:** Soporte necesita una respuesta del cliente. La pregunta va en la conversación, en una línea. Cuando el cliente contesta, vuelve a En curso.
- **Hecho:** el cambio está verificado por QA y publicado por el board. Soporte escribe en dos o tres líneas qué se hizo.
- **Descartado:** no se hace, con el motivo en la conversación.

## Comandos

Todo se hace con `node agentes/sop/tickets.mjs`, desde la raíz del repo yellow playbook. La herramienta busca las credenciales sola, así que nunca hay que cargarlas en la terminal:

- `abiertos`: los tickets en Nuevo, En curso y Bloqueado, con quién escribió último.
- `ver <N>`: un ticket con toda su conversación.
- `estado <N> "<estado>"`: lo cambia.
- `mensaje <N> "<texto>"`: escribe en la conversación, firmado "Tony · Soporte Yellow".

## Reglas

- Sin fórmulas ni burocracia: una línea para preguntar y dos o tres para cerrar.
- No se usa `tickets.respuesta`: quedó reemplazado por la conversación.
- Nunca se copian datos de candidatos o pacientes a nada de Yellow. El caso se nombra por el número de ticket.
- No se tocan otras tablas de Campos ni su código: el código lo corrige Desarrollo.
