# Diseño y contratación de agentes con el método Campos

Guía del CHRO. Traduce el método de Campos HR (`metodo-campos/`) a una empresa cuyos puestos ocupan agentes, personas o los dos.

## Principio

Los puestos se derivan de la cadena de valor y de los resultados que el negocio necesita, nunca de los agentes disponibles. Primero se define el puesto que hace falta; después se decide quién lo ocupa (Claude Code, otro agente, una persona).

## Cuándo hace falta un puesto nuevo

1. **Función huérfana (de arriba):** la cadena de valor o un objetivo del board exige un resultado que ningún puesto tiene a cargo.
2. **Síntoma (de abajo):** un puesto acumula tareas que no son de su misión, un traspaso se traba seguido, o el CEO termina haciendo trabajo de un Chief.
3. **Alcance de control:** un jefe con más de 7 u 8 reportes directos necesita un nivel intermedio. Hoy el CEO de Yellow tiene 8.

Antes de proponer un puesto nuevo, probar en este orden: (a) ¿lo puede absorber un puesto existente sin juntar perfiles opuestos?, (b) ¿alcanza con una iniciativa o una skill nueva?, (c) recién entonces, puesto nuevo.

## Ficha de alta de un puesto

Toda contratación se propone con esta ficha completa, en la bandeja del board:

| Campo | Qué se escribe |
|---|---|
| Sigla y título | Por la función, no por la persona |
| Reporta a | Quien necesita su resultado y lo puede exigir |
| Agente | Claude Code, clave de API, OpenClaw, Hermes o persona |
| Misión | Para qué existe el puesto, en una frase |
| Criterio | Cómo piensa y decide (competencias); principios concretos, no "actuá como X" |
| Capacidades | Qué archivos del repo lee (skills) |
| Objetivo y KRs | Su aporte al objetivo de la empresa, con 2 a 4 resultados medibles |
| Límites | Qué no puede hacer sin el board |
| Presupuesto | Latidos por mes |
| Traspasos | Qué recibe y qué entrega, de y a quién, con criterio de "listo" |
| Justificación | Qué función huérfana o síntoma resuelve, y por qué no alcanzaba con un puesto existente |

Formato para el alta: un archivo JSON en `agentes/chro/altas/<sigla>.json` con los campos del puesto (`id`, `sigla`, `titulo`, `icono`, `reportaA`, `agente`, `ocupa`, `mision`, `criterio`, `skills`, `limites`, `presupuesto`). Cuando el board aprueba la entrega en la bandeja, el CHRO lo da de alta con `node agentes/os.mjs puesto crear agentes/chro/altas/<sigla>.json` y después carga su objetivo, KRs y traspasos.

## Reglas de diseño (checklist)

1. **Un resultado, un dueño:** ningún KR tiene dos puestos que rindan cuentas.
2. **Segregación:** quien controla no depende del controlado (por eso el CISO reporta al CEO y no al CTO).
3. **Perfiles opuestos no se juntan:** no se fusionan en un puesto funciones que piden criterios contrarios (por ejemplo, vender y auditar).
4. **El puesto no se diseña alrededor del agente disponible.**
5. **Cada puesto con criterio escrito:** sin criterio, el agente decide cada vez distinto.

## Accountability por nivel

El resultado de un puesto depende de su nivel, no solo de su función. Base: Elliott Jaques, *Requisite Organization* (estratos y horizonte temporal de la tarea).

| Nivel | Responde por | Horizonte | Ejemplo en Yellow |
|---|---|---|---|
| Chief (C-level) | Un resultado de negocio de su área | 1 a 2 años | CFO: margen por cliente y gastos de Yellow |
| Responsable o analista | Que un proceso salga bien y a tiempo | 3 a 12 meses | Administración: cobrar a tiempo y registrar cada cobro |
| Operativo | Tareas concretas con criterio de listo | días a semanas | Cargar facturas, mandar recordatorios de pago |

Reglas:

1. **Un Chief nunca responde por un proceso.** Si el KR de un Chief se puede cumplir siguiendo un procedimiento, el KR está un nivel abajo.
2. **En una empresa chica, el Chief absorbe los niveles de abajo como iniciativas**, no como su resultado: el CFO hace el circuito de cobro, pero rinde cuentas por el margen.
3. **La estructura crece con disparadores escritos:** cada puesto de nivel inferior que todavía no existe se anota con el disparador que lo justifica (por ejemplo, "analista de administración bajo el CFO cuando haya 5 clientes activos o más de 10 cobros por mes"). El CHRO revisa los disparadores en cada latido y, cuando uno se cumple, propone el alta con ficha completa.

## Desempeño

El CHRO lee la escalera de accountability del CEO (ruido, señal, problema). Ante un problema sostenido propone, en este orden: ajustar el criterio o las skills del puesto, cambiar de modelo o de agente, rediseñar el puesto (misión, límites, a quién reporta). Nunca borra un puesto: lo propone y decide el board.
