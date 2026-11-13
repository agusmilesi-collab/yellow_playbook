# Guion de la primera llamada

- **Puesto:** CSO (Ventas)
- **Fecha:** 13/11/2026
- **Tarea:** yj77vg7y, guion de la primera llamada
- **Para quién:** Agustín, en llamadas de 20 minutos con profesionales independientes de su red (cualquier rubro)
- **Fuente:** `playbook/03-process/01-discovery.md` (v0.6). Las preguntas son las de ese archivo, recortadas para entrar en 20 minutos.

## Para qué sirve esta llamada

Que el profesional hable y Agustín escuche. En esta llamada no se vende ni se habla de agentes, del OS ni de precio. Se sale con tres cosas: qué le cuesta hoy, cuánto le urge cambiarlo y qué entrega que sus clientes valoran más que lo que cobra.

## Reparto del tiempo

| Bloque | Minutos |
|---|---|
| Apertura | 2 |
| Pregunta 1: el negocio | 3 |
| Pregunta 2: qué le cuesta | 4 |
| Pregunta 3: si no cambia nada | 3 |
| Pregunta 4: chasquear los dedos | 3 |
| Pregunta 5: clientes contentos | 2 |
| Cierre con próximo paso | 3 |
| **Total** | **20** |

Si una respuesta se alarga, se recorta la repregunta, nunca el cierre. El cierre arranca en el minuto 17 aunque falte una pregunta.

## Antes de la llamada (5 minutos)

- Mirar su Instagram, LinkedIn o web: a qué se dedica, hace cuánto, si trabaja solo o con alguien.
- Anotar una hipótesis en una línea: qué creo que le cuesta.
- Tener abierta una hoja para notas literales. Si se graba, avisarle al empezar.

## Apertura (2 minutos)

> "Hola [nombre], gracias por hacerme este lugar. Antes de arrancar, una aclaración: esta llamada es para entender cómo trabajás. No te voy a vender nada hoy. Si veo que te puedo ayudar, en unos días te mando una propuesta concreta. Si veo que no, te lo digo también. ¿Te parece?"

Esperar el sí antes de seguir.

## Las cinco preguntas (15 minutos)

### Pregunta 1: el negocio (3 minutos)

> "Para arrancar, contame tu trabajo en 3 minutos. ¿A qué te dedicás, hace cuánto y cómo funciona hoy?"

- No interrumpir.
- Anotar las palabras que usa para describirse: se usan después en la propuesta.
- Fijarse si habla con orgullo o con cansancio.

### Pregunta 2: qué le cuesta hoy (4 minutos)

> "Si te pidiera que me digas qué te está costando hoy, qué no termina de funcionar como vos querés, ¿qué dirías?"

Si se queda corto, usar una sola de estas:

- "¿Hay algo que sentís que deberías estar facturando y no estás?"
- "¿Hay algún tipo de cliente al que te gustaría llegar y no llegás?"
- "¿Hay algo que tu cliente te dice, o no te dice, que te queda dando vueltas?"

Preguntar siempre, al final: "¿Ya intentaste resolverlo? ¿Cómo?"

### Pregunta 3: si no cambia nada (3 minutos)

> "Imaginate que dejás todo como está y en 6 meses pasa lo mismo. ¿Qué consecuencia tendría eso para vos?"

Cómo leer la respuesta:

- "Y, seguiría como ahora": urgencia baja, probablemente no compre.
- "No aguantaría más", "tendría que cerrar", "me iría a otra cosa": urgencia alta, buen prospecto.

### Pregunta 4: chasquear los dedos (3 minutos)

> "Si pudieras chasquear los dedos y resolver esto mañana, ¿cómo se vería? ¿Qué cambiaría en tu día a día, en tu trabajo y en cómo te sentís?"

Es la pregunta más reveladora: acá cuenta qué quiere comprar. Anotar textual lo que cambiaría en su día, en su facturación y en cómo lo ven los demás.

### Pregunta 5: clientes contentos (2 minutos)

> "Última pregunta. ¿Qué te dicen tus clientes cuando quedan contentos? ¿Hay una frase que escuchás repetida?"

Cómo leer la respuesta:

- Si nombra algo que no cobra (un consejo, una pregunta, algo que hace al pasar): ahí está lo que más valoran de él. Buena señal para el rediseño.
- Si nombra lo que figura en su factura: todavía no lo ve, y las entrevistas a sus clientes lo van a mostrar.

## Cierre con próximo paso (3 minutos)

> "Lo que me contás tiene sentido. Tengo un par de ideas de por dónde podríamos ir. Dejame pensarlo y te mando una propuesta concreta el [día, como máximo 3 días hábiles]. ¿Te la mando por WhatsApp o por mail?"

Antes de cortar:

> "Una cosa más: si avanzamos, lo primero del trabajo es hablar con 2 o 3 de tus clientes. Así el rediseño sale de lo que ellos dicen. Te lo aviso desde ahora para que no te sorprenda."

Al cortar tienen que quedar cerrados:

- El día en que llega la propuesta.
- El canal (WhatsApp o mail).
- El aviso de las 2 o 3 entrevistas a sus clientes.

## Lo que no se hace en la llamada

- No decir un precio, aunque lo pida. Respuesta: "Lo vas a ver en la propuesta, junto con qué incluye."
- No prometer una solución ni nombrar agentes o el OS.
- No comprometer plazos de entrega.

## Señales para cortar con cortesía en el momento

Si aparece alguna de estas, se puede cerrar sin propuesta (lista completa en `playbook/01-identity/icp.md`):

- Pregunta el precio antes de contar el problema.
- Pide una rebaja antes de empezar.
- Solo quiere "más clientes" o cree que todo se arregla con redes.
- Quiere que le hagan piezas, reels o la web.
- Tiene que consultarlo con muchas personas.

## Después de la llamada (15 minutos, el mismo día)

- Pasar las notas a `cases/<slug>/transcript.md` con fecha, nombre y "primera llamada" (traspaso al CTO dentro de las 24 h).
- Marcar entre comillas las frases textuales, sobre todo la de la pregunta 5.
- Cargar la llamada en el OS: `node scripts/os.mjs real cso "Llamadas de discovery" <total>`.
- El CSO arma las notas con `playbook/04-templates/discovery-notes-template.md` y propone avanzar o no.

## Diferencias con el playbook

- **Duración:** el playbook pide 35 minutos; este guion entra en 20 porque así se pide la llamada. Se sacó la profundización opcional y se acortaron las repreguntas. Las cinco preguntas y el cierre quedan iguales.
- **Frase del cierre sobre "Gerente de Experiencia del Cliente":** se sacó, porque el segmento es el profesional independiente y esa frase está pensada para dueños de PyME.
- **Sandler:** se suma después, en la misma iniciativa.
