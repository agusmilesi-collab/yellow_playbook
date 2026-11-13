# Reunión del board con CEO, CTO, CHRO y CPO

- **Fecha:** 2026-11-13
- **Convoca:** el board (Agustín)
- **Participan:** CEO, CTO, CHRO, CPO
- **Formato:** cada puesto deja su postura en `agentes/reuniones/2026-11-13-<puesto>.md`; el CEO arma el acta en `agentes/reuniones/2026-11-13-acta.md`.

## Lo que planteó el board

Es lo que dijo el board, ordenado por tema. Ninguna de estas ideas está aprobada como decisión todavía: la reunión tiene que convertirlas en un plan y en decisiones concretas.

### 1. Qué vende Yellow: el OS es una empresa

- Yellow vende un OS que es una empresa. Cada cliente recibe la misma estructura: la "carcasa de empresa", con Bandeja, Organigrama, Objetivos y Tareas.
- Por eso la barra lateral tiene que ser muy simple, para que el dueño pueda orquestar sin ayuda. Esas cuatro secciones son las que el board está mejorando ahora.
- El servicio: Yellow evalúa el negocio del cliente, mapea y arma su cadena de valor, y le contrata los agentes que hagan falta.

### 2. Precio: sin costos fijos para el cliente

- Las chances de vender son más altas si el cliente no tiene costos fijos fuera de la IA, y la IA la paga con su propia tarjeta de crédito.
- Infraestructura en cuentas del cliente y en planes gratis: un Vercel y un Supabase a nombre del cliente. Si hace falta, una cuenta de Gmail por cliente (por ejemplo, os.yellow.<nombre>@gmail.com).
- Cobrarle USD 20 de Vercel y USD 25 de Supabase por mes es un costo muy grande para un profesional independiente.
- Sin suscripciones: precio fijo. Yellow no cobra el uso de los empleados; los paga el cliente con sus tokens.
- Es el precio que el board quiere impulsar ahora, por ejemplo para el primer MVP: el OS con 1 empleado que le habla al cliente por Telegram (un secretario o algo así). No hay que construir el secretario todavía.

### 3. Prioridades, en orden

1. **Terminar el OS de Yellow:** probarlo, que sea intuitivo y fácil de usar, con buena experiencia de uso.
2. **Armar la biblioteca de empleados o de equipos.** Al board le gusta la idea de "contratar una agencia de marketing". Yellow mismo va a necesitar un equipo de ventas y marketing, y un equipo del CTO con ingenieros, QA, diseñador, experto en IA, CISO, etc.
3. **Primero, el equipo de desarrollo y soporte:**
   - El cliente le pide algo a su agente (por ejemplo, el secretario de un consultorio): "pasale este ticket a Yellow".
   - El agente de soporte de Yellow hace el triage y lo deriva al CTO o a los desarrolladores. Si es grave, lo escala al board.
   - Este equipo tiene que poder poner en línea el OS y la biblioteca, entregarle a cada cliente lo que necesita y darle soporte.
4. En simultáneo: resolver el costo fijo para el cliente e ir redondeando la propuesta.

### 4. A quién le vende Yellow y por qué

- El board viene del marketing y de la administración de empresas (MBA); no programa.
- Los buenos programadores (por ejemplo, los que despidieron de Globant) apuntan a grandes empresas para automatizar procesos. El board no quiere competir ahí: no tiene experiencia para esa escala y está todo el mundo.
- Yellow apunta al profesional chico:
  - nadie le apunta;
  - no necesita tanta especialización técnica;
  - con poco, para él es un gran cambio;
  - un buen programador no le arma un sistema por 500.000 pesos.
- Yellow apunta a volumen. Después puede elegir 3 o 4 profesiones y venderles a todos el mismo sistema.

## Contexto que ya existe (leer antes de opinar)

- `agentes/decisiones.md`: en especial, la oferta en dos capas (13/11) y el precio del primer cliente.
- `agentes/cto/informes/arquitectura-os-clientes.md`: la opción C, que el board eligió. Pone la infraestructura en la cuenta de Yellow y cuesta unos USD 45 por mes fijos más unos USD 21 por cliente. El planteo de hoy la contradice.
- `agentes/ciso/seguridad-os-clientes.md` y `agentes/ciso/datos-de-pacientes.md`.
- `agentes/chro/cadena-de-valor.md`: la cadena de valor de Yellow, entregada hoy.
- `agentes/chro/accountability-y-crecimiento-2026-11-12.md`: el plan de crecimiento con disparadores.

## Agregado del board durante la reunión

### 5. El objetivo del CTO: que el OS lo use cualquiera

- El objetivo del CTO es que el OS sea muy fácil de usar, y que hablar con los agentes también lo sea.
- La visión es la de Steve Jobs: esto no es para un nicho, es para todo el mundo.

### 6. Paperclip (código abierto, licencia MIT)

- El board pregunta si se pueden aprovechar partes de Paperclip: https://github.com/paperclipai/paperclip, documentación en https://docs.paperclip.ing/
- Cómo arman sus equipos de agentes: ingeniería (https://paperclip.ing/solutions/engineering/), operaciones (https://paperclip.ing/solutions/operations/) y ventas y marketing (https://paperclip.ing/solutions/sales-marketing/).
- Lo que tiene, según la lectura previa del 13/11:
  - empresas, organigrama, objetivos y tareas con un solo responsable;
  - latidos, presupuestos por agente y aprobaciones del board;
  - adaptadores para Claude Code y canales de chat;
  - un equipo de ingeniería de agentes (el CTO parte el trabajo, el programador trabaja en una copia aislada, QA verifica con evidencia y un humano aprueba);
  - una bandeja solo de decisiones, vigilancia del trabajo trabado y un recibo de costo por corrida.
- Choques con el planteo de hoy:
  - necesita un servidor propio (Node y Postgres), así que no corre en Vercel gratis;
  - su experiencia de uso está pensada para equipos técnicos;
  - Yellow pasaría a depender de la hoja de ruta de otra empresa.
- Lo que hay que decidir: usarlo como motor, tomar solo sus ideas, o probarlo antes de decidir.
