# Seguridad del OS de un cliente, por opción de arquitectura

CISO de Yellow · 2026-11-13 · Tarea i49mvsag · Acompaña el informe del CTO (tarea 8di2zbqh, `agentes/cto/informes/arquitectura-os-clientes.md`).

Caso de referencia: una nutricionista inquilina del Centro con un agente Administrador (turnos, cobros, facturación), según la decisión del board del 13/11/2026.

Marcas: ✅ confirmado en la fuente citada · 🔵 inferencia del CISO · ❓ falta dato o lo tiene que confirmar un abogado.

## Recomendación desde seguridad

**Opción C (mixta): código y hosting de Yellow, una base Supabase por cliente, creada en la organización de Yellow en plan Pro y región São Paulo, transferible al cliente si se va.** Con tres condiciones previas al primer cliente:

1. El OS no guarda la historia clínica en la primera etapa. El Administrador trabaja con turnos, cobros y facturación; las notas clínicas siguen en el sistema que ya usa la profesional.
2. Contrato de encargado de tratamiento entre la profesional y Yellow (art. 25 de la Ley 25.326), con las cláusulas de la sección 5.
3. Usuarios con segundo factor en lugar del código 5050 (tarea aa1trc6c) y rotación de las claves que quedaron escritas el 12/11.

Por qué C: es la única que separa los datos de cada cliente por base (no por convención de nombres), deja las claves y los planes pagos del lado de Yellow (sin depender de los códigos del celular del cliente) y permite devolver la base entera al cliente con una transferencia de proyecto.

## 1. Lo que hoy hace el OS (punto de partida)

- ✅ El OS de cada empresa es un único documento JSON en la tabla `tools_config` de la base Supabase de Agustín, identificado por la clave `os-<empresa>` y el usuario `agustin`. Fuente: `agentes/os.mjs`, líneas 72 y 89 a 104.
- ✅ El script accede con la clave de servicio (en la nube, inyectada por el proxy como secreto de red; el agente no la ve). Fuente: `agentes/os.mjs`, líneas 81 a 92.
- ✅ La clave de servicio de Supabase pasa por encima de las políticas RLS ("has the `bypassrls` attribute") y nunca debe usarse en el navegador. Fuente: [Supabase, Row Level Security](https://supabase.com/docs/guides/database/postgres/row-level-security), consultado 2026-11-13.
- 🔵 Consecuencia: hoy la separación entre empresas depende de que el script pida la clave correcta. Cualquier proceso con esa clave lee el documento de cualquier empresa. Sirve para Yellow y Campos; no sirve para datos de pacientes.

## 2. Marco legal que aplica a las tres opciones

| # | Regla | Fuente |
|---|---|---|
| L1 | Los datos de salud son datos sensibles. | ✅ Ley 25.326, art. 2. [Infoleg](https://servicios.infoleg.gob.ar/infolegInternet/anexos/60000-64999/64790/norma.htm) |
| L2 | Los profesionales de la salud pueden recolectar y tratar datos de salud de sus pacientes, respetando el secreto profesional. | ✅ Ley 25.326, art. 8 (mismo enlace) |
| L3 | El responsable debe adoptar medidas técnicas y organizativas de seguridad; se prohíbe registrar datos en sistemas sin condiciones de integridad y seguridad. | ✅ Ley 25.326, art. 9 (mismo enlace) |
| L4 | Quien interviene en el tratamiento queda obligado al secreto, aun terminada la relación. | ✅ Ley 25.326, art. 10 (mismo enlace) |
| L5 | Quien trata datos por cuenta de otro (Yellow respecto de la profesional) no puede usarlos para otro fin ni cederlos, y al terminar el servicio los destruye, salvo autorización expresa para guardarlos hasta dos años. | ✅ Ley 25.326, art. 25 (mismo enlace) |
| L6 | Ese servicio se rige por un contrato que dice que el encargado actúa solo según instrucciones del responsable, con los niveles de seguridad y la confidencialidad del prestador. Las obligaciones de seguridad del art. 9 también recaen en el encargado. | ✅ Decreto 1558/2001, reglamentación del art. 25. [argentina.gob.ar](https://www.argentina.gob.ar/normativa/nacional/decreto-1558-2001-70368/texto) |
| L7 | Se prohíbe transferir datos a países sin protección adecuada, salvo consentimiento expreso del titular o cláusulas contractuales que prevean la protección. | ✅ Ley 25.326, art. 12, y Decreto 1558/2001, art. 12 (mismos enlaces) |
| L8 | Países adecuados: UE y EEE, Reino Unido, Suiza, Guernsey, Jersey, Isla de Man, Islas Feroe, Canadá (sector privado), Andorra, Nueva Zelanda, Uruguay, Israel (datos automatizados). Ni Estados Unidos ni Brasil están en la lista. | ✅ Disposición DNPDP 60-E/2016, art. 3, modificada por Resolución AAIP 34/2019. [Disposición 60/2016](https://www.argentina.gob.ar/normativa/nacional/267922/texto), [Res. 34/2019](https://www.boletinoficial.gob.ar/detalleAviso/primera/202373/20190226) |
| L9 | Para esos países se usan las cláusulas modelo de la AAIP; si el contrato difiere de los modelos, se presenta a la autoridad dentro de los 30 días corridos de firmado. La Resolución 198/2023 sumó las cláusulas de la Red Iberoamericana sin derogar las de 2016. | ✅ Disposición 60/2016, arts. 1 y 2; [Res. AAIP 198/2023, Boletín Oficial](https://www.boletinoficial.gob.ar/detalleAviso/primera/296189/20231018) |
| L10 | Medidas de seguridad recomendadas para datos en medios informatizados, con un apartado para datos sensibles y un procedimiento ante incidentes. | ✅ Resolución AAIP 47/2018 (deroga las Disposiciones 11/06 y 9/08). [argentina.gob.ar](https://www.argentina.gob.ar/normativa/nacional/resolución-47-2018-312662/texto) |
| L11 | La historia clínica es del paciente: puede pedir copia y se le entrega dentro de las 48 horas. | ✅ Ley 26.529, art. 14. [Infoleg](https://servicios.infoleg.gob.ar/infolegInternet/anexos/160000-164999/160432/texact.htm) |
| L12 | La historia clínica es inviolable. El profesional es depositario, debe impedir el acceso de personas no autorizadas y conservarla al menos 10 años desde la última actuación. | ✅ Ley 26.529, art. 18 (mismo enlace) |
| L13 | La historia clínica informatizada debe asegurar integridad, autenticidad, inalterabilidad, perdurabilidad y recuperabilidad, con accesos restringidos y control de modificaciones. | ✅ Ley 26.529, art. 13 (mismo enlace) |
| L14 | Toda actividad sobre información clínica resguarda la confidencialidad; quien interviene guarda reserva salvo orden judicial o autorización del paciente. | ✅ Ley 26.529, art. 2, incs. c y d (mismo enlace) |
| L15 | Existe un programa federal de historia clínica electrónica; el paciente es titular de sus datos y puede conocer la información en todo momento. | ✅ Ley 27.706, art. 8, reglamentada por Decreto 393/2023. [argentina.gob.ar](https://www.argentina.gob.ar/normativa/nacional/ley-27706-380710/texto) |

Lectura para Yellow:

- 🔵 La profesional es la responsable de la base y la depositaria de la historia clínica. Yellow es encargado de tratamiento (L5, L6). El agente que opera el OS forma parte del encargado y queda alcanzado por el secreto (L4).
- 🔵 Ninguna de las tres opciones evita la transferencia internacional: la base de Supabase más cercana está en São Paulo (`sa-east-1`, no hay región en Argentina; [Supabase, Regions](https://supabase.com/docs/guides/platform/regions)), y Vercel y Anthropic operan desde Estados Unidos. Brasil y Estados Unidos no están en la lista de L8. Hace falta consentimiento expreso del paciente o cláusulas contractuales (L7, L9).
- ❓ Los acuerdos de tratamiento de datos estándar de Supabase, Vercel y Anthropic no son las cláusulas modelo de la AAIP. Si se usan en lugar del consentimiento, puede corresponder presentarlos ante la AAIP (L9). Lo tiene que confirmar un abogado antes del primer cliente.
- 🔵 Guardar la historia clínica en el OS suma las exigencias de L13 (inalterabilidad, control de modificaciones) y la conservación de 10 años (L12). Por eso la recomendación deja la historia clínica fuera del OS en la primera etapa.
- ❓ Si la base de la profesional debe inscribirse en el registro de la AAIP (Ley 25.326, art. 21). El texto del artículo alcanza a archivos privados "destinados a proporcionar informes"; la aplicación a un consultorio la confirma un abogado.

## 3. Datos técnicos que usan las opciones

| # | Dato | Fuente (consultada 2026-11-13) |
|---|---|---|
| T1 | Supabase Free: hasta 2 proyectos activos, se pausa tras 1 semana sin actividad, sin backups. | ✅ [Supabase Pricing](https://supabase.com/pricing) |
| T2 | Supabase Pro: desde USD 25 por mes por organización, incluye USD 10 de cómputo; cada proyecto extra en Micro suma USD 10. | ✅ [Supabase Pricing](https://supabase.com/pricing) |
| T3 | Backups diarios automáticos: Pro guarda 7 días, Team 14. PITR desde unos USD 100 por mes. Free: exportar a mano con `supabase db dump`. | ✅ [Supabase, Backups](https://supabase.com/docs/guides/platform/backups) |
| T4 | Miembros de una organización Supabase con rol Owner, Administrator o Developer en cualquier plan; roles por proyecto y de solo lectura solo en Team o Enterprise. | ✅ [Supabase, Access control](https://supabase.com/docs/guides/platform/access-control) |
| T5 | Un proyecto Supabase se puede transferir a otra organización (el que transfiere es owner del origen y miembro del destino; no cambia de región). | ✅ [Supabase, Project transfer](https://supabase.com/docs/guides/platform/project-transfer) |
| T6 | Supabase Auth ofrece segundo factor por app autenticadora (TOTP). | ✅ [Supabase, MFA](https://supabase.com/docs/guides/auth/auth-mfa) |
| T7 | Vercel Hobby: "You shall only use the Services under a Hobby plan for your personal or non-commercial use." | ✅ [Vercel Terms, sección 4](https://vercel.com/legal/terms) |
| T8 | Vercel Hobby no tiene funciones de equipo; Pro cobra USD 20 por usuario desarrollador por mes. | ✅ [Vercel, Hobby plan](https://vercel.com/docs/plans/hobby) |
| T9 | Anthropic no entrena modelos con el contenido del cliente de sus servicios comerciales, y lo trata como información confidencial del cliente. | ✅ [Anthropic Commercial Terms, secciones B y E.1](https://www.anthropic.com/legal/commercial-terms) |
| T10 | La API comercial de Anthropic borra entradas y salidas dentro de los 30 días, salvo acuerdo distinto (por ejemplo, retención cero), políticas de uso u obligación legal. | ✅ [Anthropic Privacy Center](https://privacy.claude.com/en/articles/7996866-how-long-do-you-store-my-organization-s-data) |

## 4. Riesgos y mitigación por opción

### A) Todo en las cuentas de Yellow, un solo código, un proyecto o una base por cliente

| Tema | Riesgo | Mitigación |
|---|---|---|
| Aislamiento | Si se usa una sola base con un documento por cliente (como hoy), los datos de pacientes de dos profesionales quedan separados solo por el nombre de la clave; la clave de servicio los ve a todos (§1). Un error de código o una instrucción escondida en un documento muestra datos de otro cliente. **Crítico.** | Un proyecto Supabase por cliente (T2). Si se comparte base, RLS en todas las tablas y un usuario por profesional, nunca la clave de servicio en la app (fuente de §1). |
| Claves | Yellow guarda todas las claves: un solo descuido expone a todos los clientes. | Una clave por proyecto, como secreto de red del entorno de cada cliente (patrón actual de `os.mjs`). Rotación al irse un cliente y ante cualquier exposición. |
| Acceso de Agustín | Simple: entra con su cuenta. | Usuario propio con segundo factor en Supabase, Vercel y GitHub. |
| Acceso de los agentes | Un mismo entorno de Claude Code con la clave de un proyecto con varios clientes cruza datos. | Un entorno de nube por cliente, con solo el secreto de su base. |
| Códigos de dos pasos | Sin problema: las cuentas son de Yellow. | Códigos en la app autenticadora de Agustín, con códigos de recuperación guardados fuera del repo. |
| Respaldo | Con Pro, copia diaria de 7 días (T3). | Plan Pro desde el primer cliente con datos de pacientes. |
| Si el cliente se va | Yellow tiene que devolver y después destruir (L5); la profesional conserva 10 años la historia clínica (L12). | Exportación completa al cliente, transferencia del proyecto (T5) o borrado con constancia de fecha. |
| Legal | Yellow es encargado (L5, L6). Transferencia a Brasil y EEUU (L7, L8). | Contrato de §5 y consentimiento del paciente (ver `datos-de-pacientes.md`). |

### B) Cuentas propias del cliente en planes gratis

| Tema | Riesgo | Mitigación |
|---|---|---|
| Uso comercial | El sitio de una profesional que cobra es uso comercial; Vercel Hobby lo prohíbe (T7). | Vercel Pro en la cuenta del cliente (T8) o hosting en la cuenta de Yellow. |
| Respaldo | Supabase Free no tiene backups y se pausa tras una semana sin uso (T1). **Crítico** con datos de pacientes (L3, L13). | Plan Pro en la cuenta del cliente, a su cargo, o exportación diaria automatizada a un almacenamiento del cliente. |
| Códigos de dos pasos | Los códigos llegan al celular del cliente; Agustín depende de que el cliente los pase por chat cada vez, y un código pasado por chat queda escrito. Sin segundo factor, la cuenta queda débil. **Alto.** | El cliente invita a Agustín como miembro de su organización Supabase con rol Developer (T4). En Vercel requiere Pro (T8). Nunca se comparte la semilla del autenticador. |
| Claves | El cliente es dueño de las claves; Yellow necesita una para el agente y no hay quién la rote. | El cliente genera la clave y la carga él mismo como secreto; Yellow documenta la rotación. |
| Aislamiento | Máximo: cada cliente en su cuenta. | Ninguna extra. |
| Si el cliente se va | Simple: los datos ya son suyos. Yellow tiene que borrar sus copias (L5). | Quitar a Agustín y a los agentes de la organización y rotar la clave. |

### C) Mixta: código y hosting de Yellow, una base por cliente (recomendada)

| Tema | Riesgo | Mitigación |
|---|---|---|
| Aislamiento | Separación por base. El riesgo que queda es que el código común traiga datos de una base a otra. | Un proyecto Supabase por cliente; la app conecta con la base del cliente según el usuario que entra; RLS en todas las tablas. Pruebas de que un usuario de un cliente no lee otra base antes de cada instalación. |
| Claves | Yellow guarda una clave por cliente. | Secreto de red por entorno de cliente, nunca en archivos ni en el chat; rotación al irse el cliente y ante exposición; inventario de claves sin el valor (qué clave, de qué cliente, fecha de rotación). |
| Acceso de Agustín | Usuario propio con segundo factor; la profesional también entra con su usuario y segundo factor (T6). | Sin códigos compartidos (tarea aa1trc6c). |
| Acceso de los agentes | El agente del cliente X no tiene que poder llegar a la base del cliente Y. | Un entorno de nube por cliente con solo su secreto y salida a internet restringida a lo necesario (criterio de `seguridad.md`). |
| Códigos de dos pasos | Sin problema: la organización Supabase es de Yellow. | Igual que A. |
| Respaldo | Pro, copia diaria de 7 días (T3). | Plan Pro desde el primer cliente con datos de pacientes; prueba de restauración una vez por trimestre. |
| Si el cliente se va | La base se puede transferir a una organización del cliente (T5) o exportar; después Yellow destruye lo que le quede (L5). | Procedimiento de salida en el contrato (§5) con constancia de fecha. |
| Legal | Igual que A. | Igual que A. |

### Resumen

| | A | B | C |
|---|---|---|---|
| Aislamiento entre clientes | Débil con base compartida, bueno con proyecto por cliente | Máximo | Bueno |
| Claves | Yellow, todas juntas | Cliente, Yellow depende de él | Yellow, una por cliente |
| Códigos de dos pasos | Sin problema | Problema | Sin problema |
| Respaldo | Pro | No en Free | Pro |
| Salida del cliente | Exportar o transferir | Ya es suyo | Transferir o exportar |
| Críticos abiertos | 1 si la base es compartida | 2 (respaldo, uso comercial) | 0 con las condiciones previas |

## 5. Qué debe decir el contrato sobre los datos

Contrato entre la profesional (responsable) y Yellow (encargado), con base en L5, L6, L7, L11 y L12:

1. **Propiedad:** los datos de los pacientes y la base son de la profesional. Yellow no adquiere ningún derecho sobre ellos.
2. **Finalidad e instrucciones:** Yellow y sus agentes tratan los datos solo para el servicio contratado y según instrucciones de la profesional; no los usan para otro fin ni los ceden (L5, L6).
3. **Confidencialidad:** Yellow, Agustín y los agentes guardan secreto, también después de terminado el contrato (L4).
4. **Seguridad:** medidas mínimas: usuarios con segundo factor, una base por cliente, copia diaria, registro de accesos, salida a internet restringida (L3, L10).
5. **Subencargados y país:** lista de proveedores (Supabase, Vercel, Anthropic, Resend si se usa), dónde guardan los datos y con qué términos (T9, T10). Cambios de proveedor se avisan antes.
6. **Transferencia internacional:** la base vive en Brasil y los proveedores operan en EEUU; se cubre con el consentimiento del paciente o con cláusulas modelo de la AAIP (L7, L9). ❓ Cuál de las dos lo decide el abogado.
7. **Incidentes:** Yellow avisa a la profesional dentro de un plazo fijo (propuesta 🔵: 48 horas) con la naturaleza del incidente, los datos afectados y las medidas tomadas (L10).
8. **Derechos del paciente:** Yellow ayuda a la profesional a entregar copia de los datos dentro de las 48 horas (L11).
9. **Salida:** al terminar, Yellow entrega la base completa en formato abierto o la transfiere a una cuenta de la profesional, y después destruye todas las copias y deja constancia de la fecha (L5). La conservación de 10 años de la historia clínica queda a cargo de la profesional (L12).
10. **IA:** se usa una cuenta comercial donde el proveedor no entrena con los datos (T9); retención de 30 días salvo acuerdo de retención cero (T10). ❓ Si una profesional exige retención cero, confirmar con Anthropic qué servicios la admiten antes de prometerla.

## 6. Para el board

- **Aprobar la opción C** como arquitectura de seguridad para clientes con datos de pacientes (recomendada).
- **Aprobar que el OS no guarde historia clínica** en la primera etapa.
- **Tarea de Agustín sugerida:** consulta a un abogado de datos personales sobre el consentimiento del paciente, la vía para la transferencia internacional (consentimiento o cláusulas) y el registro ante la AAIP (❓ de §2). Llevar este informe y `datos-de-pacientes.md`.
- Hallazgo crítico para el KR (si se elige A con base compartida): aislamiento por convención. Queda en la auditoría de la tarea sw910gh8.
