# Good Services: Los 15 principios

**SSOT** del checklist de evaluación de un buen servicio. Basado en *Good Services* de Lou Downe (2020).

---

## Qué es

Service Design (`../02-methodology/service-design.md`) te dice **cómo** se rediseña un servicio. JTBD (`../02-methodology/jtbd.md`) te dice **por qué** la gente lo contrata. **Good Services te dice contra qué se evalúa si el rediseño quedó bien.**

Es un checklist prescriptivo: 15 principios que cualquier servicio bueno cumple. Si tu rediseño los cumple, el servicio funciona. Si no, hay algo para arreglar.

---

## Cuándo se usa en el proceso

Dos momentos:

1. **Durante el diagnóstico** (`../03-process/04-delivery.md` fase 2): chequear el servicio actual contra los 15 principios. Cada principio que falla es un pain point candidato.

2. **Antes de cerrar el proyecto** (`../03-process/04-delivery.md` fase 4): chequear el servicio rediseñado contra los 15 principios. Si alguno sigue fallando, hay refinamiento pendiente.

---

## Los 15 principios

### 1. El servicio tiene que ser fácil de encontrar

Si la gente no sabe que existís, el servicio no existe para ellos. ¿Cómo te encuentra alguien que tiene tu problema?

**Aplicación:** auditar canales de descubrimiento. ¿Aparece tu cliente en una búsqueda de Google? ¿Hay alguien que lo recomiende? ¿Cómo llegó a vos el último cliente?

### 2. Tiene que explicar claramente para qué sirve

El usuario tiene que entender en 10 segundos qué problema resuelve este servicio y si es para él.

**Aplicación:** mirar el primer punto de contacto (web, perfil, propuesta). ¿Una persona ajena al rubro entiende qué hacés? Si dice "interesante, ¿pero qué hacés exactamente?", falló este principio.

### 3. Establece expectativas claras del usuario sobre el servicio

Antes de empezar, el usuario sabe qué va a pasar, en cuánto tiempo, con qué resultado.

**Aplicación:** mirar el momento de "decisión de compra". ¿El cliente sabe qué va a recibir, cuándo, cómo? Las sorpresas en servicios profesionales son ansiedad.

### 4. Le permite al usuario completar el objetivo que vino a buscar

El servicio resuelve el job real, no un proxy del job. Conectar con `../02-methodology/jtbd.md`.

**Aplicación:** si el cliente del psicotécnico viene a "tomar una decisión sobre una persona" pero el servicio le entrega "un informe de 16 páginas para leer", falló este principio.

### 5. Funciona de manera familiar

El servicio se parece a otros servicios que el usuario ya conoce. No le obliga a aprender lógicas nuevas para algo simple.

**Aplicación:** ¿el cliente puede usar el servicio sin entrenamiento? Si requiere "te explico cómo funciona" largo, está mal diseñado.

### 6. No requiere conocimiento previo del usuario

El servicio funciona aunque el usuario no sepa nada del rubro. La jerga interna queda atrás del frontstage.

**Aplicación:** auditar comunicaciones. ¿Usás términos que solo entiende un colega tuyo? ¿El cliente tiene que googlear palabras tuyas?

### 7. Es agnóstico de la estructura organizacional

Al usuario no le importa cómo te organizás vos por dentro. No le pidas que entienda qué área hace qué.

**Aplicación:** si tu cliente tiene que decir "hola, quería saber si esto se lo mando a vos o a tu colega", falló este principio. La estructura interna es invisible.

### 8. Solo requiere los pasos esenciales para completarse

Cada paso que le pedís al usuario suma fricción. Eliminar todos los que no son indispensables.

**Aplicación:** contar pasos del journey. ¿Cuántos clicks, mensajes, decisiones, esperas? ¿Cuáles son indispensables?

### 9. Es consistente a lo largo del tiempo

Un usuario que vuelve recibe la misma experiencia. No tiene que reaprender.

**Aplicación:** si el primer cliente de un servicio tuvo una experiencia y el quinto otra distinta, el servicio no escala.

### 10. No tiene puntos muertos / dead ends

En cada momento del journey, el usuario sabe qué hacer próximamente. No se queda sin opción.

**Aplicación:** los silencios son dead ends. Si después de un email tuyo el cliente espera 3 días sin saber si pasó algo, ahí hay un dead end.

### 11. Es accesible para todos los que lo necesitan

Discapacidades, idiomas, niveles educativos, dispositivos. Si el servicio excluye a parte del público objetivo por accesibilidad, hay un problema.

**Aplicación:** ¿el servicio funciona para alguien que solo lee desde el celular? ¿Para alguien con visión limitada? ¿Para alguien que no es nativo del idioma?

### 12. Empodera al usuario para pedir ayuda

Cuando algo no funciona, el usuario sabe a quién acudir y cómo. Sin esfuerzo.

**Aplicación:** ¿hay un canal claro de "tengo una duda"? ¿La respuesta llega en tiempo razonable? ¿O el usuario tiene que perseguirte?

### 13. Es honesto y transparente

No oculta información que el usuario debería saber. No promete lo que no puede cumplir.

**Aplicación:** revisar comunicaciones de venta. ¿Hay algo que te conviene callar pero el cliente debería saber? Eso es deshonestidad por omisión.

### 14. Está protegido contra el abuso y el error

Si alguien comete un error (incluso intencional), el servicio no se rompe.

**Aplicación:** ¿qué pasa si el cliente no manda algo que tenía que mandar? ¿Si paga tarde? ¿Si malinterpreta una instrucción? El servicio bien diseñado tiene mecanismos para esto.

### 15. Responde rápido al cambio

El servicio se adapta cuando cambian las condiciones del usuario o del contexto.

**Aplicación:** ¿qué pasa si en medio del proyecto el cliente cambia de scope? ¿Si aparece un imprevisto? ¿El servicio tiene flexibilidad o se rompe?

---

## Cómo se aplica al diagnóstico

En la fase de research, hacer este checklist sobre el servicio actual del cliente:

```
Para cada principio del 1 al 15:
- ¿Lo cumple? (Sí / Parcial / No)
- ¿Cómo lo verifiqué? (qué evidencia)
- Si no lo cumple: ¿es un pain point relevante para el job del cliente final?
```

Los principios que fallan **y** afectan el job dominante son los pain points prioritarios.

---

## Cómo se aplica al cierre del proyecto

Antes de entregar el plan de rediseño, chequear:

```
Para cada principio del 1 al 15:
- ¿El rediseño lo mejora? (Sí / No / No aplica)
- Si no aplica: ¿está justificado dentro del scope?
- Si no lo mejora pero debería: ¿se incorpora al plan o se difiere?
```

---

## Limitaciones del framework

- No reemplaza JTBD ni Service Design. Es un checklist de evaluación, no un método de diseño.
- Algunos principios no aplican a todos los servicios. La accesibilidad (11) es crítica en servicios públicos pero menos central en servicios B2B premium.
- Cumplir los 15 principios no garantiza un buen servicio si el job-to-be-done está mal entendido. Primero JTBD, después Good Services.

---

## Lectura de referencia

**Good Services**, Lou Downe. BIS Publishers, 2020. Libro corto y muy aplicable. Cada principio tiene un capítulo con ejemplos.

---

## Changelog del archivo

- **Mayo 2026:** versión inicial v0.3.
