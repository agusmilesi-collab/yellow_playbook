# Dónde vive el OS de cada cliente: costos y factibilidad

**Puesto:** CTO · **Tarea:** 8di2zbqh · **Fecha:** 2026-11-13 · **Para:** board (decisión)

Referencias: ✅ verificado en la página oficial hoy · 🔵 inferencia o estimación del CTO · ❓ falta el dato.

## Resumen

Recomendación del CTO: **opción C (mixta)**. El código y el hosting quedan en una sola cuenta de Yellow (Vercel Pro), y cada cliente tiene su propia base (un proyecto de Supabase por cliente, dentro de la organización Pro de Yellow). Cuesta USD 45 por mes fijos para Yellow desde el primer cliente pago, más unos USD 21 por mes por cada cliente (base más IA). La opción B (cuentas gratis del cliente) choca con los términos de Vercel: el plan Hobby es solo para uso personal o no comercial, y el OS de una nutricionista es uso comercial.

La infraestructura actual de Yellow no se pudo ver: `node agentes/os.mjs infra` devuelve "Falta VERCEL_TOKEN_LECTURA" y "Falta SUPABASE_PAT_LECTURA" (foto del 2026-11-13 01:50 UTC). Los planes actuales de Yellow quedan ❓.

## 1. Precios con fuente (consultados el 2026-11-13)

| Servicio | Plan | Precio | Qué incluye (lo que importa acá) | Fuente |
|---|---|---|---|---|
| Vercel | Hobby | USD 0 | 1 desarrollador, 200 proyectos, 50 dominios por proyecto, 100 GB de transferencia, 1 M de invocaciones. **Solo uso personal o no comercial.** No se puede comprar uso extra. | ✅ vercel.com/pricing, vercel.com/docs/plans/hobby, vercel.com/legal/terms (sección 4) |
| Vercel | Pro | USD 20/mes por asiento de desarrollador | USD 20 de crédito de uso incluido, 1 TB de transferencia, proyectos y dominios ilimitados, asientos de lectura gratis, roles por miembro, límite de gasto | ✅ vercel.com/pricing, vercel.com/docs/plans/hobby |
| Supabase | Free | USD 0 | 2 proyectos activos en total (suma todas las organizaciones donde uno es dueño o admin), 500 MB de base, se pausa tras 1 semana sin actividad, **sin copias de seguridad** | ✅ supabase.com/pricing, supabase.com/docs/guides/platform/billing-on-supabase |
| Supabase | Pro | desde USD 25/mes por organización | USD 10/mes de crédito de cómputo (cubre 1 proyecto Micro), 8 GB por proyecto, 100.000 usuarios activos, copia diaria guardada 7 días, nunca se pausa | ✅ supabase.com/pricing |
| Supabase | Cómputo por proyecto extra | Micro ~USD 10/mes (USD 0,01344/h); Small ~USD 15/mes | Cada proyecto extra es un servidor propio y paga su cómputo completo. Ejemplo oficial: 2 proyectos Micro en Pro = USD 35/mes | ✅ supabase.com/docs/guides/platform/compute-and-disk, supabase.com/pricing |
| Resend | Free | USD 0 | 3.000 correos/mes, 100 por día, 3 dominios | ✅ resend.com/pricing |
| Resend | Pro | USD 20/mes (50.000 correos) o USD 35/mes (100.000) | Sin límite diario, 10 dominios | ✅ resend.com/pricing |
| Dominio .com | Vercel | USD 12,03/año (alta, renovación y traspaso iguales) | Privacidad del WHOIS incluida. El Pro pago regala el primer año de un dominio en algunas terminaciones | ✅ vercel.com/domains/pricing (resultado de búsqueda sobre la página oficial; la página no abrió desde la sesión) |
| Dominio .com | Cloudflare | USD 11,17/año (alta y renovación) | Precio de costo, sin recargo | ✅ cloudflare.com/products/registrar (modelo de costo); 🔵 el monto sale de pricing.registrar.cloudflare.com vía búsqueda, la página devolvió 403 |
| Dominio .com.ar | NIC Argentina | ARS 8.500/año (alta, renovación y traspaso) | Pide CUIT o CUIL y clave fiscal nivel 2 o más | 🔵 nic.ar/es/nic-argentina/normativavigente vía búsqueda; nic.ar no respondió desde la sesión (conexión cortada), y la tabla no muestra fecha. Confirmar antes de cotizar |
| Claude API | Sonnet 5.5 | USD 2 entrada / USD 10 salida por millón de tokens; lectura de caché USD 0,10 | Términos comerciales | ✅ platform.claude.com/docs/en/about-claude/pricing |
| Claude API | Haiku 5.5 | USD 0,10 entrada / USD 0,50 salida por millón (prompts de hasta 100.000 tokens) | Términos comerciales | ✅ misma |
| Claude API | Opus 5.5 | USD 4 entrada / USD 20 salida por millón | Términos comerciales | ✅ misma |

### Términos de uso que deciden la arquitectura

- **Vercel Hobby, uso comercial:** "You shall only use the Services under a Hobby plan for your personal or non-commercial use." (✅ vercel.com/legal/terms, sección 4). Los términos no definen "comercial". Las respuestas del foro de Vercel citan la guía de uso justo: comercial es cualquier despliegue que da ganancia a alguien que participó en el proyecto, incluido un consultor pagado que escribe el código (🔵 community.vercel.com, no es la página oficial; la sección de la guía oficial salió vacía al abrirla). Conclusión del CTO: un OS que Yellow cobra, o que usa un consultorio para cobrar, es comercial. **Hobby no sirve para ningún cliente, ni en la cuenta de Yellow ni en la del cliente.**
- **Vercel, terceros:** la sección 12 prohíbe revender el servicio, "make the Services available to any third party" y usarlo "for timesharing or service bureau purposes or otherwise for the benefit of a third-party" (✅ vercel.com/legal/terms). 🔵 Lectura del CTO: Yellow no revende Vercel, vende su propio software alojado ahí, que es el uso normal de una agencia en Pro. La frase "for the benefit of a third-party" es amplia; si el board quiere certeza, se consulta a ventas de Vercel antes del primer cliente.
- **Supabase:** el uso se limita a "Customer's internal business purposes" y no se puede "make available the Services ... to any third party" (✅ supabase.com/terms, sección 2). 🔵 Mismo criterio que Vercel: el cliente usa el software de Yellow, no la consola de Supabase. Los términos no distinguen el plan gratis.
- **Resend:** los términos no restringen el uso comercial del plan gratis ni el envío en nombre de clientes; remiten a una política de uso aceptable que no se pudo leer (✅ resend.com/legal/terms-of-service; ❓ la política).
- **Anthropic, API:** "Anthropic may not train models on Customer Content from Services", y permite usar la API "to power products and services Customer makes available to its own customers and end users" (✅ anthropic.com/legal/commercial-terms). **Los agentes de clientes van por API.**
- **Anthropic, plan Max:** los términos de consumo son para individuos, prohíben acceder "through automated or non-human means" salvo con una clave de API, y prohíben compartir la cuenta (✅ anthropic.com/legal/consumer-terms, secciones 2 y 3). 🔵 El Max de Agustín sirve para trabajar Yellow, no para operar los agentes de un cliente.

## 2. Las tres opciones

| | A) Todo en cuentas de Yellow, una base para todos | B) Cuentas propias del cliente, planes gratis | C) Mixta (recomendada): hosting de Yellow, una base por cliente |
|---|---|---|---|
| Código | Un solo código y un solo proyecto de Vercel para todos los clientes | Una copia del código por cliente, en su cuenta | Un solo código y un solo proyecto de Vercel |
| Datos | Una base compartida, separada por cliente con reglas de acceso por fila | Base gratis del cliente | Un proyecto de Supabase por cliente, en la organización Pro de Yellow |
| Dominio | Subdominio de Yellow o dominio del cliente apuntado al proyecto | Dominio del cliente | Igual que A |
| ¿Cumple términos? | Sí, en Pro | **No** en Vercel Hobby (uso comercial). Cumple solo si el cliente paga Vercel Pro | Sí, en Pro |
| Costo fijo para Yellow | USD 45/mes (Vercel Pro 20 + Supabase Pro 25) | USD 0 | USD 45/mes (igual que A) |
| Costo por cliente para Yellow | Base: USD 0 (entra en el proyecto común). IA: ~USD 11/mes 🔵 | USD 0 | Base: USD 10/mes (Micro; el primero lo cubre el crédito). IA: ~USD 11/mes 🔵 |
| Costo para el cliente | Dominio propio si lo quiere: ARS 8.500/año (.com.ar) o USD 11-12/año (.com) | Vercel Pro USD 20/mes (obligatorio para cumplir) + dominio + IA con su tarjeta (~USD 11/mes 🔵) | Igual que A |
| Aislamiento de datos | Débil: un error en una regla de acceso muestra datos de un cliente a otro | Total | Fuerte: cada cliente tiene su servidor de base |
| Acceso de Agustín | Directo | El problema conocido: los códigos de verificación llegan al correo o al teléfono del cliente; Hobby tiene un solo asiento y compartir la cuenta viola términos | Directo |
| Si el cliente se va | Hay que extraer sus filas de la base común | Se lleva todo; Yellow pierde acceso | Se le exporta su base o se le transfiere el proyecto a su propia organización de Supabase 🔵 (verificar el procedimiento de transferencia antes de prometerlo) |
| Copias de seguridad | Diarias, 7 días | **Ninguna** en Free | Diarias, 7 días, por cliente |
| Trabajo de Yellow por cliente nuevo | Bajo | Alto (crear cuentas, código, claves, en cada cliente) | Bajo a medio |

### Cálculo del costo por cliente (🔵, estimación del CTO)

- **IA:** los latidos medidos de Yellow cuestan entre USD 0,46 y USD 1,12 en equivalente API (`node agentes/os.mjs latidos`, 2026-11-12; esos latidos son de puestos que leen mucho contexto). Un Administrador de consultorio con 1 latido por día hábil (22 por mes) a ~USD 0,50 en Sonnet 5.5 da **~USD 11/mes**. Con Haiku 5.5 (20 veces más barato por token) podría bajar a menos de USD 1/mes si la calidad alcanza; lo mide la tarea by1lhnyi (guía de modelos).
- **Correo:** si todos los clientes envían desde un dominio de Yellow, Resend Free alcanza hasta 3.000 correos por mes y 100 por día en total. Pasar a Pro (USD 20/mes) cuando se supere eso o cuando más de 3 clientes quieran enviar desde su propio dominio.
- **Hosting:** un consultorio usa muy poco; el crédito de USD 20 de Vercel Pro debería cubrir los primeros clientes 🔵. Se controla con el límite de gasto de Pro.
- **Total C:** fijo USD 45/mes + ~USD 21/mes por cliente (10 de base + 11 de IA). Con 1 cliente: ~USD 66/mes. Con 5: ~USD 150/mes (USD 30 por cliente). Con 10: ~USD 255/mes (USD 25,50 por cliente). El abono mensual de los agentes tiene que cubrir eso con margen; lo calcula el CFO.

### Desde cuántos clientes conviene cada plan pago

- **Vercel Pro:** desde el primer cliente pago. Hobby no permite uso comercial.
- **Supabase Pro:** desde el primer cliente pago. Free da 2 proyectos en total (Yellow ya usa al menos uno ❓), se pausa y no tiene copias, que el CISO ya marcó como "no cumple 9".
- **Resend Pro:** cuando el total pase 3.000 correos/mes o 100/día, o haya más de 3 dominios propios.
- **Antes del primer cliente pago no se paga nada nuevo:** la prueba con una inquilina se puede hacer en los planes gratis mientras no se cobre (🔵 una prueba sin cobro no es comercial; si hay cobro, Pro desde ese día).

## 3. Paso a paso para instalar un cliente nuevo (opción C)

Lo hace el CTO salvo donde dice "persona".

1. **Persona (board):** firma del cliente y alcance aprobado (traspaso COO → CTO, snos4533).
2. Elegir el slug del cliente (convención del repo: `<oficio>-<ciudad>` o `<apellido>-<oficio>`).
3. **Persona (board):** crear el proyecto de Supabase del cliente en la organización Pro de Yellow, región São Paulo 🔵 (la más cercana; confirmar con el CISO por datos de salud). Tocar claves es del board.
4. Correr las migraciones del OS sobre la base nueva (script del repo del OS; ❓ hoy no existe, es una tarea a crear).
5. Cargar la empresa del cliente en el OS: puestos del catálogo contratados (de a uno, empezando por Administrador), límites y presupuesto.
6. **Persona (board):** cargar en Vercel las variables del cliente (URL de su base y su clave de servicio), sin pegarlas en ningún archivo ni chat.
7. Dominio: subdominio de Yellow (sin costo) o dominio del cliente. Si es propio, **persona (cliente)** lo registra a su nombre en NIC Argentina con su CUIT y clave fiscal, y apunta el DNS al proyecto de Vercel según lo que indique el panel.
8. Si el cliente quiere enviar correos desde su dominio: **persona (cliente o board)** carga los registros DNS que pide Resend.
9. Crear los usuarios del cliente con su propio correo y segundo factor (depende de aa1trc6c del CISO: hoy el OS entra con un código compartido).
10. Prueba: un latido del Administrador con datos de prueba, revisado por el board, antes de cargar pacientes reales.

## 4. Quién tiene las claves

| Clave | Opción C | Quién la toca |
|---|---|---|
| Cuenta de Vercel de Yellow | Agustín, con segundo factor | Board |
| Organización de Supabase de Yellow | Agustín; el cliente puede tener lectura de su proyecto si lo pide ❓ (verificar roles por proyecto en Supabase) | Board |
| Clave de servicio de la base de cada cliente | Solo en las variables de Vercel | Board |
| Clave de API de Claude | Una de Yellow por cliente, para medir el gasto de cada uno 🔵 (o un espacio de trabajo por cliente en la consola, ❓ verificar) | Board |
| Dominio del cliente | El cliente, a su nombre | Cliente |
| Usuarios del OS | Cada persona el suyo | Cada persona |

Los agentes y el CTO nunca ven claves (límite del puesto).

## 5. Qué pasa si el cliente se va

- **C:** Yellow le entrega una exportación de su base (o le transfiere el proyecto a su organización de Supabase, a confirmar), da de baja su empresa en el OS y borra el proyecto con fecha registrada (criterio del CISO, "datos que quedan"). El dominio es del cliente: lo apunta adonde quiera. El código del OS es de Yellow y no se entrega, salvo que el contrato diga otra cosa (❓ lo define el contrato modelo del CFO).
- **A:** igual, pero hay que extraer sus filas de una base compartida: más trabajo y más riesgo de error.
- **B:** el cliente se queda con todo, incluida una copia del código de Yellow.

## 6. Seguridad (parte del CISO)

El CISO ya tiene en curso la tarea i49mvsag ("Seguridad del OS de un cliente: confidencialidad, claves y datos de pacientes por opción de arquitectura") y la dud4pj65 (qué exige manejar datos de pacientes). No se creó otra. Lo que el CTO le pasa para esas tareas:

- La tabla de niveles de `agentes/ciso/seguridad.md` pone a salud en **nivel confidencial**, que pide instalación dedicada en cuentas del cliente. Una nutricionista con datos de pacientes cae ahí. 🔵 La opción C (base aislada por cliente) es un paso intermedio; si el CISO concluye que hace falta la cuenta del cliente, la base de C se transfiere a una organización de Supabase del cliente (en Pro, ~USD 25/mes a cargo del cliente) sin cambiar el código ni el hosting.
- 🔵 En Argentina los datos de salud son datos sensibles (Ley 25.326); el CISO confirma qué obliga.

## 7. Recomendación (marcada como tal)

**Recomiendo la opción C.** Cumple los términos de Vercel y Supabase, aísla los datos de cada cliente, deja que Agustín opere sin depender de códigos de verificación del cliente y permite pasar un cliente a su propia base si el CISO lo exige. A queda descartada por aislamiento débil para datos de salud; B queda descartada porque en planes gratis viola los términos de Vercel y, pagando Pro, cuesta más para el cliente y más trabajo para Yellow.

## 8. Preguntas para el board

1. **¿Aprobás la opción C?** Por defecto: sí.
2. **¿Aprobás pagar Vercel Pro (USD 20/mes) y Supabase Pro (USD 25/mes) recién cuando se firme el primer cliente pago?** Por defecto: sí, y la prueba sin cobro se hace en planes gratis.
3. **Dominio por defecto del cliente:** subdominio de Yellow (sin costo) o dominio propio del cliente a su nombre. Por defecto: subdominio, y dominio propio si el cliente lo pide y lo paga. ❓ ¿Qué dominio de Yellow se usa para los subdominios?
4. **IA:** ¿Yellow paga la API e incluye el costo en el abono, o cada cliente pone su tarjeta? Por defecto: Yellow paga, con una clave por cliente para medir, y el CFO lo incluye en el precio.
5. **¿Consultamos a Vercel** la cláusula "for the benefit of a third-party" antes del primer cliente? Por defecto: no hace falta para un primer cliente; sí antes de pasar de 5.
6. Para ver la infraestructura actual, faltan las variables `VERCEL_TOKEN_LECTURA` y `SUPABASE_PAT_LECTURA` en Vercel. Cargarlas es tocar claves: tarea del board.

## Fuentes (todas consultadas el 2026-11-13)

- https://vercel.com/pricing
- https://vercel.com/docs/plans/hobby
- https://vercel.com/legal/terms (secciones 2, 4 y 12)
- https://vercel.com/docs/limits/fair-use-guidelines
- https://vercel.com/domains/pricing (vía búsqueda web)
- https://community.vercel.com/t/question-about-commercial-usage/23321 (no oficial)
- https://supabase.com/pricing
- https://supabase.com/docs/guides/platform/billing-on-supabase
- https://supabase.com/docs/guides/platform/compute-and-disk
- https://supabase.com/terms (sección 2)
- https://resend.com/pricing
- https://resend.com/legal/terms-of-service
- https://www.cloudflare.com/products/registrar/
- https://pricing.registrar.cloudflare.com/ (vía búsqueda web; 403 al abrir)
- https://nic.ar/es/nic-argentina/normativavigente (vía búsqueda web; nic.ar no respondió)
- https://platform.claude.com/docs/en/about-claude/pricing
- https://www.anthropic.com/legal/commercial-terms
- https://www.anthropic.com/legal/consumer-terms
