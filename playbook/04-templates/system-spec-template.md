# Plantilla: Spec del sistema operativo

**SSOT** de la especificación del sistema vivo. Es el entregable final del Modelo B (junto con el prototipo manual) y el contrato de build de la Fase 4 (Modelo C / ejecución).

Para el proceso, ver `../03-process/04-delivery.md` Fases 3 y 4. Para módulos reusables existentes, revisar `../09-library/` antes de especificar desde cero.

---

## Estructura obligatoria

```markdown
# Spec del sistema: [Nombre del cliente / proyecto]

**Caso:** [slug] · **Fecha:** [Fecha] · **Versión:** [Borrador / Validada por prototipo]

---

## 1. Objetivo del sistema

[Una frase: qué entregable rediseñado produce y a qué drivers del Value Map sirve.]

## 2. Input del profesional

[Qué pone el profesional para que salga una instancia. Regla: el input es el que ya genera naturalmente en su trabajo (notas crudas, audio, resultados de tests, planilla). Si el sistema le pide trabajo nuevo, está mal especificado.]

## 3. Output

[El entregable rediseñado que recibe el cliente final: formato, soporte, estructura. El cliente final lo recibe sin saber que existe un sistema atrás.]

## 4. Componentes

| # | Componente | Tipo (plantilla / prompt / integración / microsite / protocolo) | ¿Existe en biblioteca? | Costo de build |
|---|---|---|---|---|

## 5. Flujo de operación

[Paso a paso numerado: desde que el profesional tiene el input hasta que el cliente final recibe el output. Marcar qué hace el profesional, qué hace el sistema y cuánto tarda cada paso.]

## 6. Prototipo manual

- **Instancia generada:** [link o referencia]
- **Cliente final que la recibió:** [perfil]
- **Reacción:** [qué dijo, frase textual si hay] [✅ / ❌]

## 7. Criterio de "sistema listo"

1. El profesional genera al menos 1 instancia sin asistencia.
2. El input requerido es el que ya genera naturalmente.
3. El cliente final recibe el output sin ver el sistema.

## 8. Estimación de build

- **Alcance:** [chico / medio / grande]
- **Plazo estimado:** [semanas, dentro del techo de 3 meses del proyecto]
- **Dependencias del cliente:** [cuentas, accesos, decisiones]

## 9. Pendientes (❓)

- [Decisiones abiertas antes de construir]
```

---

## Reglas

- Sin prototipo manual validado (sección 6 con reacción ✅), la spec sigue en borrador y la Fase 4 se frena.
- Todo componente se chequea contra `../09-library/` antes de especificarse desde cero.

---

## Changelog del archivo

- **2026-06-10 (v0.1):** versión inicial. Consolidación de LRN-017 (la spec era el entregable que cerraba el Modelo B según LRN-014 y carecía de plantilla). Aprobado por el owner para consolidación en bloque (sesión 2026-06-10).
