# Cómo paga cada cliente la IA desde la Console de Anthropic

- **Puesto:** CTO
- **Tarea:** uyggey32
- **Fecha:** 2026-11-13
- **Para:** board (revisión)

Referencias: ✅ confirmado en documentación oficial hoy · 🔵 inferencia del CTO · ❓ la documentación no lo dice.

## Resumen

Los cinco puntos de la tarea se confirman, con dos matices. La documentación no explica cómo se crea una organización nueva (❓), y una cuenta puede estar en varias organizaciones con el mismo correo (✅). El paso a paso del final funciona sin que la tarjeta pase por el board.

## Cada punto

### 1. Una cuenta puede ser miembro de varias organizaciones: confirmado

- **Qué dice:** quien es miembro de varias organizaciones de la Console con el mismo correo cambia de una a otra desde el menú de sus iniciales, abajo a la izquierda, y la activa lleva una tilde. ✅
- **Fuente:** support.claude.com/en/articles/13371040-logging-in-to-your-console-account
- **Matiz:** la documentación no dice cuántas organizaciones puede crear un mismo correo (❓). Un artículo de ayuda sobre unirse a una organización tampoco lo aclara. ✅ support.claude.com/en/articles/14793921-find-and-join-a-console-organization

### 2. Cómo se invita a un miembro y con qué permisos: confirmado

- **Cómo:** un Admin entra a platform.claude.com/settings/members, toca "+ Invite", escribe hasta 50 correos, elige el rol y toca "Send Invites". La invitación vence a las tres semanas. Solo un Admin puede invitar. ✅
- **Fuente:** support.claude.com/en/articles/13443764-invite-members-to-the-claude-console
- **Roles (✅ platform.claude.com/docs/en/manage-claude/admin-api y support.claude.com/en/articles/10186004):**
  - user: usa el playground.
  - claude_code_user: playground y Claude Code.
  - developer: además maneja claves de API y ve uso y costo.
  - billing: ve uso y costo y maneja los datos de pago; no maneja claves.
  - admin: todo lo anterior y administra usuarios.
- **Matiz:** los artículos de ayuda no dicen si el invitado necesita una cuenta previa ni describen cómo acepta (❓).

### 3. La tarjeta y el crédito van por organización, y los workspaces los comparten: confirmado

- **Qué dice:** el crédito y el uso se muestran por organización en la página de Billing. ✅ support.claude.com/en/articles/8977456-how-do-i-pay-for-my-api-usage
- **Workspaces:** la documentación los presenta como forma de separar proyectos "manteniendo la facturación y la administración centralizadas" de la organización. ✅ platform.claude.com/docs/en/manage-claude/workspaces
- **Matiz:** el rol billing de cada workspace se hereda del rol billing de la organización y no se asigna a mano. ✅ misma página.

### 4. Tope de gasto mensual: confirmado

- **Cómo:** en platform.claude.com/settings/spend-limits, al lado de "Monthly spend limit", se toca "Set limit" o "Adjust limit" y se escribe el valor. No puede superar el tope del nivel de la organización. ✅ platform.claude.com/docs/en/api/rate-limits
- **Topes por nivel:** Start USD 500, Build USD 1.000, Scale USD 200.000 por mes. Una organización nueva puede empezar en el nivel Evaluation con límites menores. ✅ misma página.
- **Qué pasa al llegar:** las llamadas devuelven un error HTTP 400 ("You have reached your specified API usage limits") hasta que se suba o se quite el tope. Si se llega al tope del nivel, devuelve 429 hasta el día 1 a las 00:00 UTC. ✅ misma página.
- **Por workspace:** se puede poner un tope mensual menor que el de la organización. No se puede poner en el workspace Default. ✅ support.claude.com/en/articles/9796807-create-and-manage-workspaces-in-the-claude-console
- **Matiz:** la documentación que leí no dice quién puede cambiar el tope más allá de "tu organización". Asumo que el Admin (🔵).

### 5. El crédito es prepago: confirmado, con tres condiciones

- **Qué dice:** el uso de la API se cobra con créditos prepagos. Quien tenga rol Admin o Billing los compra en la página Billing con "Buy credits" y quedan disponibles al instante. ✅ support.claude.com/en/articles/8977456-how-do-i-pay-for-my-api-usage
- **Recarga automática:** se define un saldo mínimo y un saldo objetivo; al bajar del mínimo, compra solo. Si al activarla el saldo ya está por debajo, cobra en el acto. ✅ misma página.
- **Vence:** los créditos vencen al año de la compra, sin prórroga. ✅ misma página.
- **No reembolsable:** toda compra de créditos es sin reembolso. ✅ misma página.
- **Sin dato:** el monto mínimo de compra no figura en la ayuda oficial (❓).

## Paso a paso para dar de alta a un cliente

Supuestos de la decisión del 13/11: una cuenta de Gmail por cliente (osyellow.<nombre>@gmail.com) cuya contraseña tiene el board, y la IA la paga el cliente con su tarjeta.

1. **Board:** crea la cuenta de Gmail osyellow.<nombre>@gmail.com y guarda la contraseña en su gestor.
2. **Board:** entra a platform.claude.com con esa cuenta y crea la organización del cliente (nombre del cliente). La documentación no explica este paso, así que se verifica en pantalla (❓).
3. **Board:** en Members, invita el correo personal del cliente con el rol billing (🔵). Ese rol permite cargar la tarjeta y comprar créditos sin darle claves de API.
4. **Cliente:** acepta la invitación (tiene tres semanas), entra a Billing, carga su tarjeta y compra los primeros créditos.
5. **Cliente o board:** en Billing activa la recarga automática con un saldo mínimo y uno objetivo chicos (🔵 por ejemplo, mínimo USD 5 y objetivo USD 20; el monto exacto lo define el board).
6. **Board:** en settings/spend-limits pone un tope mensual bajo (🔵 por ejemplo USD 30) para el primer mes. Sube con el uso real.
7. **Board:** en Settings, crea una clave de API para ese cliente. El CTO la guarda como variable de entorno del OS del cliente en Vercel, nunca en el repo ni en una tarea.
8. **CTO:** corre un latido de prueba del agente Administrador y verifica el costo en la página Usage.

Cómo queda la tarjeta: la carga el cliente en su propia sesión. El board nunca la ve ni la pasa por ningún canal (🔵: depende del paso 3).

## Riesgos y preguntas para el board

- **Pregunta 1:** ¿la tarjeta la carga el cliente (paso 3, recomendado) o el board la toma por teléfono? Opción por defecto: el cliente la carga. Con la contraseña del Gmail el board podría hacerlo él, pero la tarjeta pasaría por el board.
- **Pregunta 2:** ¿tope inicial de gasto mensual por cliente? Opción por defecto: USD 30, ajustable.
- **Riesgo 1:** los créditos vencen al año y no se devuelven. Comprar poco y recargar automático evita perder saldo. ✅
- **Riesgo 2:** si el cliente se va, el board tiene la contraseña del Gmail y puede borrar la clave de API o archivar el workspace. Un workspace archivado archiva sus claves. ✅ platform.claude.com/docs/en/manage-claude/workspaces
- **Riesgo 3:** Anthropic limita a organizaciones nuevas al nivel Evaluation. Un cliente nuevo podría topar antes de lo esperado; el nivel sube solo con el uso. ✅ platform.claude.com/docs/en/api/rate-limits
- **Riesgo 4:** la Console y claude.ai son cuentas separadas aunque compartan correo. Un cliente con su propia suscripción de claude.ai no la usa para la API del OS. ✅ resultados de ayuda sobre inicio de sesión de la Console.

## Fuentes (leídas 2026-11-13)

- support.claude.com/en/articles/13371040-logging-in-to-your-console-account
- support.claude.com/en/articles/13443764-invite-members-to-the-claude-console
- support.claude.com/en/articles/14793921-find-and-join-a-console-organization
- support.claude.com/en/articles/10186004-api-console-roles-and-permissions
- support.claude.com/en/articles/8977456-how-do-i-pay-for-my-api-usage
- support.claude.com/en/articles/9796807-create-and-manage-workspaces-in-the-claude-console
- platform.claude.com/docs/en/api/rate-limits
- platform.claude.com/docs/en/manage-claude/workspaces
- platform.claude.com/docs/en/manage-claude/admin-api
