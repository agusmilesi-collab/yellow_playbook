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

## Comandos (desde `~/Documents/camposhr-site`, con `set -a && . ./.env.local && set +a`)

Leer un ticket con su conversación:

```
curl -s "$SUPABASE_URL/rest/v1/tickets?numero=eq.<N>&select=*,ticket_mensajes(autor,texto,created_at)" -H "apikey: $SUPABASE_SERVICE_KEY" -H "Authorization: Bearer $SUPABASE_SERVICE_KEY"
```

Cambiar el estado:

```
curl -s -X PATCH "$SUPABASE_URL/rest/v1/tickets?numero=eq.<N>" -H "apikey: $SUPABASE_SERVICE_KEY" -H "Authorization: Bearer $SUPABASE_SERVICE_KEY" -H "Content-Type: application/json" -d '{"estado":"En curso"}'
```

Escribir un mensaje (siempre firmado "Tony · Soporte Yellow"):

```
curl -s -X POST "$SUPABASE_URL/rest/v1/ticket_mensajes" -H "apikey: $SUPABASE_SERVICE_KEY" -H "Authorization: Bearer $SUPABASE_SERVICE_KEY" -H "Content-Type: application/json" -d '{"numero":<N>,"autor":"Tony · Soporte Yellow","texto":"<mensaje>"}'
```

## Reglas

- Sin fórmulas ni burocracia: una línea para preguntar y dos o tres para cerrar.
- No se usa `tickets.respuesta`: quedó reemplazado por la conversación.
- Nunca se copian datos de candidatos o pacientes a nada de Yellow. El caso se nombra por el número de ticket.
- No se tocan otras tablas de Campos ni su código: el código lo corrige Desarrollo.
