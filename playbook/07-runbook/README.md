# Runbook: Procedimientos operativos

**SSOT** de los pasos concretos a ejecutar en cada situación.

---

## Diferencia con el resto del playbook

- **`../02-methodology/`** te dice **qué** son las cosas (Service Design, JTBD, Good Services).
- **`../03-process/`** te dice **cómo** funciona cada fase (qué pasa en discovery, en propuesta, en delivery).
- **`../07-runbook/`** te dice **paso a paso qué hacer cuando pasa algo concreto.**

Cuando estás en el momento ("acaba de llegar un prospect, ¿qué hago?"), abrís el runbook, no el playbook conceptual.

---

## Archivos

| Cuándo abrir | Archivo |
|---|---|
| Llega un prospect nuevo | `01-cuando-llega-prospect.md` |
| Hiciste discovery, hay que mandar propuesta | `02-cuando-hay-que-mandar-propuesta.md` |
| El cliente dijo sí, hay que cerrar | `03-cuando-cliente-dijo-si.md` |
| Arranca un proyecto nuevo | `04-cuando-arranca-proyecto.md` |
| Estás en medio del proyecto, fase research | `05-cuando-estas-en-research.md` |
| Estás armando el diagnóstico | `06-cuando-armas-diagnostico.md` |
| Termina el proyecto, hay que cerrar | `07-cuando-termina-proyecto.md` |

---

## Cómo está escrito cada archivo

Cada runbook sigue el mismo formato:

```
# Runbook: [Situación]

## Trigger
[Qué tiene que pasar para abrir este archivo]

## Output esperado
[Qué tiene que estar hecho cuando termines]

## Pasos

### Paso 1: [Nombre]
**Acción:** [qué hacer]
**Archivo a abrir:** [link]
**Tiempo estimado:** [X minutos]

### Paso 2: [Nombre]
...

## Decisiones (if/then)
[Bifurcaciones del flujo]

## Errores comunes
[Cosas que se rompen y cómo salir de ahí]
```

---

## Cómo usar el runbook

1. **Identificá la situación.** ¿Qué acaba de pasar?
2. **Abrí el runbook correspondiente.**
3. **Ejecutá los pasos en orden.** No saltés a menos que el archivo te diga que podés.
4. **Si llegás a una decisión if/then, leela completa antes de elegir.**
5. **Si te trabás, leé "errores comunes".**

---

## Reglas del runbook

1. **Cada paso tiene una acción concreta y un archivo asociado.** No hay pasos vagos.
2. **Cada paso tiene un tiempo estimado.** Si tardás mucho más del estimado, hay un problema (probablemente conceptual, no operativo). Pará y consultá el playbook.
3. **No se duplica conocimiento del playbook.** El runbook linkea al archivo correspondiente, no repite el contenido.
4. **Las decisiones if/then son explícitas.** Sin "depende".
