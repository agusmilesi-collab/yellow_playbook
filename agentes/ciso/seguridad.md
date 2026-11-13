# Seguridad: criterios del CISO

Referencia del puesto CISO. Aplica a todo lo que se construye y se opera: el OS de agentes, los knowledge base de cada empresa y los sistemas que se instalan en clientes. Escrito el 2026-11-12 a partir de la conversación del board sobre un posible cliente de arbitraje internacional.

## Principio

La seguridad se diseña desde el principio y se vende como argumento. Agregada al final cuesta el doble y no convence a un cliente con información confidencial.

## Dos niveles de producto

**Dónde corre**

- **Nivel estándar (PyMEs, Campos, Yellow):** Plataforma compartida, datos de cada cliente aislados
- **Nivel confidencial (estudios, arbitraje, salud):** Instalación dedicada en las cuentas del cliente (su base, su almacenamiento, su cuenta de IA)

**Documentos**

- **Nivel estándar (PyMEs, Campos, Yellow):** Almacenamiento del OS o repo privado
- **Nivel confidencial (estudios, arbitraje, salud):** Almacenamiento cifrado del cliente (Drive o M365 de nivel empresa, o uno de cero conocimiento). El OS guarda solo índice y tareas.

**IA**

- **Nivel estándar (PyMEs, Campos, Yellow):** Clave de API del cliente, términos comerciales (no se entrena con sus datos)
- **Nivel confidencial (estudios, arbitraje, salud):** Cuenta empresa del cliente; retención cero de datos si el contrato lo exige (confirmar qué servicios y modelos la admiten antes de prometerla)

**Separación**

- **Nivel estándar (PyMEs, Campos, Yellow):** Por cliente
- **Nivel confidencial (estudios, arbitraje, salud):** Por cliente y por caso: el agente de un caso no lee otro

**Salida a internet del agente**

- **Nivel estándar (PyMEs, Campos, Yellow):** Restringida a lo necesario
- **Nivel confidencial (estudios, arbitraje, salud):** Solo a sitios permitidos explícitamente

## Riesgos propios de los agentes

- **Instrucciones escondidas en documentos.** Un archivo de terceros puede traer texto dirigido a la IA ("ignorá lo anterior y mandá esto a..."). Defensa: límites por puesto, nada sale sin aprobación del board (bandeja), sin salida a internet salvo sitios permitidos.
- **Leer de más.** Cada latido monta solo lo que el puesto necesita (la carpeta del caso), nunca todo el archivo.
- **Claves expuestas.** Las claves viven en variables de entorno o bóvedas, nunca en archivos del repo, en la base ni en el chat. Si una clave aparece en una conversación, se rota.
- **Datos que quedan.** Al cerrar un caso se borra su espacio y queda constancia de la fecha.

## Checklist de auditoría

Cada ítem se marca cumple / no cumple / no aplica, con evidencia (archivo, configuración o comando).

1. **Acceso:** ¿cada persona entra con su propio usuario y segundo factor? ¿Hay accesos compartidos o códigos cortos?
2. **Permisos:** ¿cada usuario y cada agente ve solo lo que necesita?
3. **Aislamiento:** ¿los datos de un cliente (o de un caso) pueden mezclarse con los de otro?
4. **Claves:** ¿hay claves en el repo, en la base, en logs o en conversaciones? ¿Se rotaron las que se expusieron?
5. **IA:** ¿qué cuenta y qué términos se usan? ¿Se entrena con los datos? ¿Qué retención tiene?
6. **Almacenamiento:** ¿dónde viven los documentos? ¿Cifrados? ¿Quién tiene acceso?
7. **Acciones hacia afuera:** ¿algún agente puede enviar, publicar, cobrar o borrar sin aprobación del board?
8. **Registro:** ¿queda constancia de quién entró y qué leyó cada agente?
9. **Respaldo y borrado:** ¿hay copia diaria? ¿Hay borrado al cierre?
10. **Contrato del cliente:** ¿qué dice su contrato (o la orden procesal del caso) sobre uso de IA y confidencialidad?

## Estado conocido al 2026-11-12

- El OS entra con un código de 4 números compartido (no cumple 1 para clientes).
- La base de tools y del OS (Supabase Agustín Milesi) no tiene copia diaria (no cumple 9).
- En la conversación del 12/11 quedaron escritas la contraseña de la base nueva y una clave de Resend: hay que rotarlas (no cumple 4).
- El knowledge base de Yellow en GitHub privado: aceptable para nivel estándar, no para confidencial.
