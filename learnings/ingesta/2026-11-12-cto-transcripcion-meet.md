# Transcripción de Meet: comparación de cuatro opciones

- **Puesto:** CTO (Ingeniería y memoria), Yellow OS
- **Fecha:** 2026-11-12
- **Foco:** Ingesta de reuniones (obj-cto)
- **Tarea:** vbm88toh
- **Para:** el board (Agustín), que elige la herramienta (tarea 6kipwmwq)

Este archivo es trabajo del puesto y queda fuera de `playbook/` por la regla R1.

---

## 1. Qué tiene que resolver la herramienta

La Definition of Done del foco dice: una transcripción de Meet llega a `cases/<cliente>/transcript.md` con su fecha y tipo de reunión, y `case-notes.md` queda actualizado, sin que Agustín copie nada a mano.

De ahí salen cuatro criterios:

1. **Transcribe bien en español rioplatense.** Si el texto sale mal, alguien lo corrige a mano y se rompe el DoD.
2. **El texto sale solo.** Hace falta una API, un webhook o una integración (Zapier o Google Drive) que entregue el texto sin que nadie lo descargue.
3. **Precio para una persona.** Hoy Yellow tiene un solo usuario que graba.
4. **Dónde queda guardado.** El límite del puesto dice que las transcripciones completas viven en el repo y nunca en la web del OS. Cualquiera de estas herramientas guarda una copia en su propia nube. Eso no choca con el límite, que habla del OS, pero el board tiene que saberlo antes de grabar a un cliente.

## 2. Comparación

Los precios son por usuario por mes, en dólares. No pude abrir las páginas oficiales de precios desde esta sesión, porque la red no deja salir a esos dominios. Los números vienen de reseñas de 2026 que no coinciden entre sí, así que se marcan 🔵 y hay que confirmarlos antes de pagar.

### Google Workspace (Meet nativo)

- **Precio:** hace falta Business Standard o superior (🔵 USD 14 anual). Con ese plan ya alcanza para automatizar.
- **Cómo sale el texto:** un Google Doc en el Drive de quien organiza, más la API de Meet y un aviso cuando el archivo está listo.
- **Bot en la llamada:** no.
- **Español:** sí.
- **A favor:** nadie extra en la llamada y nada guardado fuera de Google.
- **En contra:** si Yellow usa una cuenta Gmail personal, no hay transcripción y hay que pasar a Workspace.

### Fathom

- **Precio:** gratis e ilimitado para transcribir. Para automatizar, 🔵 Premium a USD 16-20.
- **Cómo sale el texto:** API pública, webhooks y Zapier (texto a Google Drive).
- **Bot en la llamada:** sí, aunque hay grabación sin bot 🔵.
- **Español:** bueno, según una comparación hecha por tl;dv.
- **A favor:** el camino a Zapier y Drive más armado.
- **En contra:** en el plan gratis, las funciones Premium (Zapier incluido) se limitan a 5 llamadas por mes.

### tl;dv

- **Precio:** gratis e ilimitado para transcribir. Para automatizar, Pro a 🔵 USD 18 anual o 29 mensual.
- **Cómo sale el texto:** API y webhooks desde Pro, y Zapier (a Google Drive).
- **Bot en la llamada:** sí.
- **Español:** primero en un test en español hecho por tl;dv.
- **A favor:** el plan gratis más generoso y la mejor evidencia en español.
- **En contra:** la API exige pagar Pro.

### Read.ai

- **Precio:** gratis hasta 5 reuniones por mes y de hasta 1 h. Pro a 🔵 USD 15-20.
- **Cómo sale el texto:** TXT y envío a Google Docs y Notion. La API no tiene documentación pública que se pueda verificar.
- **Bot en la llamada:** sí.
- **Español:** sin datos.
- **A favor:** nada para este caso.
- **En contra:** plan gratis demasiado chico y API dudosa.

## 3. Cómo llegaría cada una a `cases/<cliente>/`

El repo vive en GitHub. Para que el texto llegue sin que Agustín copie nada, algo tiene que escribir el archivo. Hay dos caminos:

- **A. Zapier.** La herramienta avisa que terminó la reunión, Zapier crea o actualiza el archivo en GitHub. Sirve con Fathom y con tl;dv. No hace falta código, pero suma otra cuenta (Zapier) y el plan gratis de Zapier tiene un límite de tareas por mes.
- **B. Script del OS.** Un comando nuevo (por ejemplo `node agentes/os.mjs ingerir`) le pide a la API las reuniones nuevas, arma el `transcript.md` y agrega la entrada en `case-notes.md`. Sirve con Workspace (API de Meet más Docs), con Fathom y con tl;dv Pro. Corre en el latido del CTO, así que el texto llega en el próximo latido y no en el momento.

Con cualquiera de los dos hay un problema que la herramienta no resuelve: **cómo sabe a qué cliente pertenece la reunión.** Propuesta: el título del evento en el calendario lleva el slug y el tipo, por ejemplo `[psicologa-rosario] discovery`. El script o el Zap lee el título y elige la carpeta. Si el título no trae slug, la transcripción queda en una bandeja (`cases/_sin-asignar/`) y no se pierde.

## 4. Recomendación

**Probar tl;dv gratis con una reunión real, y decidir el pago después de leer el texto.**

- Es la opción con mejor evidencia en español y no cuesta nada probarla.
- Si el texto sale bien, pasar a Pro (🔵 USD 18 por mes) para tener API y armar el camino B, que no depende de Zapier.
- Si Yellow ya tiene Google Workspace Business Standard (❓), la primera opción pasa a ser Meet nativo: no hay bot en la llamada, la copia queda en el Drive propio y no se paga nada extra.
- Fathom queda segundo. Si tl;dv transcribe mal, se prueba Fathom con la misma reunión.
- Read.ai queda descartado.

## 5. Lo que el board tiene que responder

1. ❓ ¿Yellow tiene Google Workspace pago, o usa una cuenta Gmail personal? Esto decide entre Meet nativo y una herramienta externa.
2. ❓ ¿Está bien que entre un bot a las llamadas con clientes? ¿Se le avisa al cliente antes de grabar? Recomendación: avisar siempre, con una línea en la invitación.
3. ❓ ¿Hay presupuesto para unos USD 18 por mes, o la ingesta tiene que andar con planes gratis?
4. ❓ ¿Se acepta la convención de poner el slug en el título del evento?

Con la respuesta a la 1 y la 3 se cierra la tarea 6kipwmwq, y el CTO arma la ingesta (tarea dlzbj61j) en el latido siguiente.

## Fuentes

- Meet nativo, planes que transcriben: [iamtypist.dev](https://iamtypist.dev/blog/google-meet-transcript), [koalendar.com](https://koalendar.com/blog/google-meet-pricing-plans)
- API de Meet para transcripciones: [Google, transcripts.entries](https://developers.google.com/workspace/meet/api/reference/rest/v2/conferenceRecords.transcripts.entries), [Google, eventos de Meet](https://developers.google.com/workspace/events/guides/events-meet)
- Fathom: [sonix.ai](https://sonix.ai/resources/fathom-review-pricing/), [costbench.com](https://costbench.com/software/ai-meeting-assistants/fathom/free-plan/), [Zapier, Fathom a Google Drive](https://zapier.com/apps/fathom/integrations/google-drive)
- tl;dv: [laxis.com](https://www.laxis.com/blog/tldv-review/), [toolradar.com](https://toolradar.com/tools/tldv/pricing), [tl;dv, test en español](https://tldv.io/it/blog/spanish-meeting-transcription-tools/)
- Read.ai: [dupple.com](https://dupple.com/learn/read-ai-pricing), [fireflies.ai](https://fireflies.ai/blog/fireflies-vs-read-ai/), [xpay.sh](https://www.xpay.sh/agent-ready-index/read-ai-transcription/)
