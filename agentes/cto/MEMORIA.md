# Memoria del CTO (Yellow)

Lo que este puesto aprendió trabajando y no tiene que volver a preguntar. Una línea por hecho, con fecha y fuente. La actualiza el propio puesto al final de cada latido.

- 2026-11-12 | En la nube, `os.mjs` necesita el proxy y su certificado para llegar a Supabase. Desde el commit 4b2fe56 el script los configura solo: alcanza con `node agentes/os.mjs ...`. Fuente: latido CTO y commit 4b2fe56.
- 2026-11-12 | La red de la sesión no deja abrir fathom.ai, tldv.io, read.ai ni developers.google.com; la investigación de herramientas sale de búsquedas web. Fuente: latido CTO.
- 2026-11-12 | Las transcripciones nativas de Meet piden Workspace Business Standard o superior; Gmail personal no transcribe. Fuente: learnings/ingesta/2026-11-12-cto-transcripcion-meet.md.
- 2026-11-12 | Para que la ingesta sepa el cliente, se propuso poner el slug en el título del evento: `[slug] tipo`. Pendiente de aprobación del board. Fuente: misma.
- 2026-11-13 | Vercel Hobby es solo para uso personal o no comercial (vercel.com/legal/terms, sección 4): ningún OS de cliente puede ir en Hobby. Fuente: agentes/cto/informes/arquitectura-os-clientes.md.
- 2026-11-13 | Supabase Free: 2 proyectos en total entre todas las organizaciones, pausa tras 1 semana y sin copias. En Pro, cada proyecto extra suma ~USD 10/mes de cómputo Micro. Fuente: supabase.com/pricing.
- 2026-11-13 | Los agentes de clientes van por la API de Claude (términos comerciales, sin entrenamiento); el plan Max (términos de consumo) no admite acceso automatizado ni cuentas compartidas. Fuente: anthropic.com/legal.
- 2026-11-13 | Desde la sesión en la nube no abren nic.ar (conexión cortada) ni pricing.registrar.cloudflare.com (403); esos precios salen de búsquedas web y van como 🔵. Fuente: latido CTO.
- 2026-11-13 | `node agentes/os.mjs infra` no trae datos hasta que el board cargue VERCEL_TOKEN_LECTURA y SUPABASE_PAT_LECTURA en Vercel. Fuente: latido CTO.
- 2026-11-13 | Paperclip (MIT) es para equipos técnicos; se copian ideas (corte de gasto, tope de rondas de devolución, paquete de equipo), no código. Fuente: agentes/cto/informes/paperclip-2026-11-13.md.
- 2026-11-13 | Console de Anthropic: crédito prepago por organización, vence al año y no se reembolsa; tope mensual en settings/spend-limits (Start USD 500). La docs no explica cómo crear una organización nueva. Fuente: agentes/cto/informes/console-clientes-2026-11-13.md.
