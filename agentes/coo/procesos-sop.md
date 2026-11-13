# Procesos (SOPs) de Yellow: cómo los escribe y mantiene el COO

Guía del COO. Un SOP describe un trabajo que se repite y que cruza puestos: qué lo dispara, qué pasos tiene, quién hace cada uno, cuándo está listo y a quién se entrega. Lo que hace un solo puesto vive en su ficha (`agentes/<puesto>/SKILL.md`); lo que necesita a dos o más puestos vive en un SOP (método Campos HR).

## Dónde viven

**Procesos del servicio al cliente (discovery, propuesta, cierre, entrega, traspaso)**

- **Dónde:** `playbook/03-process/`
- **Cómo se cambia:** Es conocimiento estable: el COO propone el cambio como learning en `learnings/learnings-pending.md` y el board lo aprueba (regla R1 del repo)

**Procesos internos de la empresa (latido, bandeja, alta de puesto, ingesta de reuniones, publicación de contenido)**

- **Dónde:** `agentes/coo/procesos/<nombre>.md`
- **Cómo se cambia:** El COO lo escribe y lo deja en la bandeja; vale cuando el board lo aprueba

## Formato de un SOP

```
# <Nombre del proceso>

- Dueño (rinde cuentas): <puesto>
- Disparador: <qué evento lo arranca>
- Entradas: <qué tiene que existir antes de empezar>
- Salida: <qué existe cuando termina>
- Listo cuando: <criterio verificable>
- Frecuencia: <cada cuánto pasa>

## Pasos

### Paso 1: <qué se hace>
- **Quién:** <puesto o persona>
- **Herramienta o archivo:** <herramienta o archivo>
- **Listo cuando:** <condición verificable>

## Traspasos
- <de quién a quién se pasa el trabajo, en qué estado y por qué canal>

## Errores frecuentes y cómo se evitan

## Historial
- <fecha>: <qué cambió y por qué>
```

## Reglas

1. **Se documenta lo que pasa, no lo ideal:** primero se escribe cómo se hace hoy, después se mejora.
2. **Un SOP está vigente cuando se probó:** se usó al menos una vez en un caso real y se corrigió con lo que pasó.
3. **Cada paso tiene un solo dueño** y un criterio de "listo" que se puede verificar.
4. **Los traspasos son donde se pierde el trabajo:** cada uno dice qué se entrega, en qué estado, cuándo, por qué canal y quién recibe.
5. **Cuando una entrega vuelve de la bandeja por un error de proceso,** el COO revisa el SOP que corresponde y lo corrige.
6. **Borrar antes de agregar:** si un paso no cambia el resultado, se saca.
