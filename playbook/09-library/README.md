# Biblioteca Yellow: módulos reusables

**SSOT** del inventario de módulos de sistema operativo reusables entre clientes. Cada proyecto cerrado alimenta esta biblioteca (ver `../03-process/05-handoff.md`); cada proyecto nuevo la consulta antes de construir desde cero (Fase 4 de `../03-process/04-delivery.md`).

---

## Estructura de cada módulo

Cada módulo se documenta con la estructura consistente definida en LRN-001:

- **Problema que resuelve.**
- **Momento de uso** (fase del delivery o momento de operación del cliente).
- **Contenido** (qué es: plantilla, prompt, protocolo, componente).
- **Instrucciones de uso.**
- **Ejemplo de salida.**
- **Caso de origen** (link a `cases/<slug>/`).

Los módulos pesados (plantillas completas, prompts largos) viven en archivos propios dentro de esta carpeta; este README es el índice.

---

## Inventario

### Vertical: sistemas de gestión para líderes de equipo (origen: caso Lisandro)

| Módulo | Tipo | Problema que resuelve | Fuente |
|---|---|---|---|
| Tablero OKR en Notion (vista hacia arriba / hacia abajo) | Plantilla + modelo de datos | El líder reporta con datos en segundos y delega iniciativas con estado visible | `cases/Lisandro/modelo-datos-notion-lisandro.md` |
| Asistente Claude de gestión conectado al tablero | Prompt + configuración | Convertir captura dispersa (reuniones, mensajes) en datos cargados al sistema | `cases/Lisandro/Lisandro Onboarding/` |
| Manual de sistema para el cliente | Plantilla de documento | El cliente opera el sistema sin el consultor presente | `cases/Lisandro/manual-sistema-lisandro.md` |
| Estructura de onboarding en sesiones (R1-R3 + cheatsheet del consultor) | Protocolo | Instalación del sistema en vivo con fricción mínima | `cases/Lisandro/Lisandro Onboarding/` |

### Vertical: profesionales de evaluación (origen: caso psicóloga, pendiente de cierre)

| Módulo | Tipo | Problema que resuelve | Fuente |
|---|---|---|---|
| One-pager de decisión con revelación progresiva | Plantilla (spec) | El cliente final decide en minutos en lugar de leer 16 páginas | `cases/psicologa-rosario/` (se captura al cerrar el piloto) |

---

## Reglas

1. Un módulo entra a la biblioteca cuando funcionó en al menos 1 caso real.
2. Antes de construir cualquier componente en Fase 4, revisar este índice: adaptar supera a rehacer.
3. Tres módulos del mismo vertical son la señal de kit replicable (LRN-001): evaluar productizar.

---

## Changelog del archivo

- **2026-06-10 (v0.1):** versión inicial. Consolidación de LRN-019 (e), activa la parte de biblioteca de LRN-001 (la parte de microsite por cliente sigue diferida en el roadmap). Sembrada con 4 módulos del caso Lisandro y 1 pendiente del caso psicóloga. Aprobado por el owner para consolidación en bloque (sesión 2026-06-10).
