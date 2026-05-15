# Case notes — Sentir Mindfulness

> Bitácora viva. Decisiones, correcciones del owner, desvíos del playbook, ideas surgidas durante la sesión. No esperar al final — actualizar en cada paso.

## 2026-05-14

- Caso abierto formalmente en el repo. Existe registro en memoria del owner de una auditoría previa el 2026-05-08, pero sin carpeta en `cases/`. Se trata esta sesión como apertura formal.
- Owner aclara estrategia comercial: **B2C como vehículo para llegar a B2B** (individuos en redes → recomendación dentro de la empresa donde trabajan). Sumado: sponsoreo de eventos vía charlas gratuitas (no hay budget para sponsor pagado).
- Owner entrega copy literal de los dos nichos (individuos y empresas). Volcados en `transcript.md`.
- 🔵 Hipótesis temprana a validar con el owner: el nicho EMPRESAS apunta a multinacionales/grandes, pero la mecánica de captación (referral desde individuos + charla en eventos) tiende a generar leads más pequeños o medianos. Posible mismatch entre canal y target.
- ❓ Falta: precios, métricas actuales (leads/mes, conversión, ticket promedio), competencia, qué intentaron antes que no funcionó, plazos, presupuesto disponible para este proyecto.
- Owner pide aún definir foco del caso: web vs. servicio entero. Pendiente confirmación.
- 2026-05-14 (más tarde): foco confirmado en "auditar la web". El servicio entero queda fuera de scope salvo cuando la web lo expone como touchpoint.
- 2026-05-14: owner suma KB del chatbot Lore (`/Users/agusmilesi/Desktop/ChatBot/KB Sentir/`). Aclara que está "sin anichar". Esto cambia tres cosas del diagnóstico:
  - **Discrepancia precio/medios de pago entre web y KB** se vuelve un pain point crítico (Good Services P3, P9): web dice $42.000 online y "transferencia o tarjeta"; KB dice $45.000 y "sin tarjeta ni cuotas". Riesgo operativo (cliente paga distinto a lo que ve), riesgo legal (publicidad engañosa potencial bajo defensa del consumidor) y riesgo de reputación.
  - **Asimetría de soporte:** existe chatbot Lore para individuos con método consultivo de 7 pasos, no hay equivalente para empresas. El nicho corporativo, que el owner declara como el de mayor revenue potencial, no tiene un acompañamiento conversacional comparable.
  - **Nicho declarado no está reflejado en KB ni en web.** El copy del owner ("profesionales 30 a 50, cargos de responsabilidad") es preciso y diferenciado. La web e `individuos.html` describen una persona más genérica ("personas que sienten estrés o ansiedad"). La oportunidad de afinar la voz hacia el nicho está sin capitalizar.
- 2026-05-14: la modalidad Intensiva Julio existe en la KB pero no en `individuos.html`. Touchpoint faltante.
- 2026-05-14: la auditoría se mantiene dentro del scope Yellow porque la web es el primer touchpoint del journey (Service Design P7). Queda fuera: diseñar piezas visuales nuevas, gestionar campañas de tráfico, programar el sitio. La auditoría termina en el plan de rediseño; la ejecución se deriva.
- 2026-05-14 (tras presentar diagnóstico): owner propone giro estratégico mayor: dividir en dos marcas, "Sentir Mindfulness" para individuos y "SM" para empresas. Implicancias detectadas:
  - **Tensión con estrategia previa:** el motor declarado al inicio (individuos → empresas vía referral interno) se vuelve mecánicamente más difícil si el individuo recomienda una marca distinta a la que se transformó. La división puede ser correcta (patrón Calm/Calm for Business validado en mercado), pero exige un motor de captación B2B nuevo o un puente cross-brand explícito.
  - **Pain points que cambian de naturaleza:** pain 1 (mismatch arquitectura/estrategia), 7 (job dominante diluido) y 8 (asimetría de soporte) se reformulan completamente. Pain 5 (inscripción a dominio externo) se vuelve trivial si SM tiene su propio dominio. Pain 9 (nicho declarado ausente) se vuelve más fácil de capitalizar.
  - **Nombre "SM":** carga cultural complicada en castellano (asociación con BDSM, con Servicio Militar). Validar antes de ejecutar.
  - **Pendiente owner:** motivación de la división, escenario de convivencia con estrategia previa, separación operativa real (equipo, salón, dominios, redes), definitividad del nombre SM.
- Diagnóstico actual (`diagnostico.md`) refleja el estado pre-split. Queda en pausa hasta que el owner confirme los cuatro datos pedidos; reescribir para reflejar la decisión de dos marcas si se confirma.
- 2026-05-14 (owner responde): split de marcas confirmado. Motivación = barrera lingüística de "mindfulness" para el decisor corporativo. Separación = identidad + web + IG. Estrategia comercial = se mantiene intacta (mismo problema raíz, dos puertas de marca). Nombre "SM" = placeholder, la marca B2B real puede ser tipo "Bienestar Corporativo".
- Reescritura del diagnóstico: la decisión del split se incorpora como intervención madre que reordena pain points y propuesta. Lo que se mantiene casi sin tocar: pain 2 (discrepancia web/KB), pain 3 (CTA roto), pain 4 (cul-de-sac ondemand), pain 5 (dominio externo, ahora con matiz cross-brand), pain 6 (Intensivo Julio oculto), pain 11 (marcadores de IA). Lo que se reformula: pain 1, 7, 8, 9 y diagnóstico central.
- Hipótesis nueva 🔵 a validar con el owner: el nombre B2B definitivo merece su propio mini-ejercicio de naming (briefing breve + propuesta de 5 a 8 opciones contra criterios). No se decide acá.
- 2026-05-14 (owner aclara dos cosas antes de cerrar el plan):
  - **Pain 6 cae (Intensivo):** la edición intensiva es de tirada única y se gestiona desde la KB del chatbot. La ausencia en `individuos.html` es decisión deliberada, no un touchpoint faltante. Se retira del diagnóstico y sale de la intervención 3.
  - **Pain 3 se reformula (CTA `descanso.html`):** el botón está vacío porque todavía no existe la plataforma de cobro de ondemand. No es bug, es dependencia previa. La pieza ondemand entera (`ondemand.html` + `descanso.html`) queda fuera del scope del plan de rediseño actual hasta que la plataforma exista. La intervención 4 del diagnóstico se reformula como "dependencia bloqueante reconocida".
