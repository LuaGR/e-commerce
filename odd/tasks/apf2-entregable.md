# APF2 Entregable único — VÉRTICE

## Objetivo
Dejar `index.html` como página única APF2 de tienda VÉRTICE, simple, sin comentarios, solo HTML5+CSS3.

## Problema
Proyecto actual tiene 4 HTML, `css/` múltiple, sin tabla, sin videos, sin favicon, sin FontAwesome, sin Google Fonts, galería en grid, imágenes >200KB y nombres con espacios/mayúsculas.

## Por qué
Cumplir rúbrica APF2 §§4-9 y lista §13 sin sobre-ingeniería.

## Alcance autorizado
Usuario autorizó implementar en rama `feature/apf2-entregable`. Solo `index.html` + `assets/`. Sin JS. Sin frameworks. Sin comentarios en código. Push/PR decide el usuario.

## Restricciones
- Solo HTML5+CSS3, hoja única `assets/css/styles.css`, `:root` usado, Flexbox con wrap/gap, hover.
- Minúsculas, sin espacios/tildes/eñes. Imágenes ≤200KB. MP4 ≤4MB muted si autoplay. YouTube iframe. Favicon vinculado. 5+ enlaces funcionales. Barra superior. Nav sticky. Tabla thead/tbody. Form required/email/tel/placeholder. FontAwesome CDN. Footer contacto+derechos+enlaces.

## TDD resuelto
- Modo: OFF. Fuente: sin runner en proyecto estático, usuario no pidió TDD.
- Runner: ninguno. Checks ordinarios por tarea: apertura `index.html`, CSS carga, rutas relativas, pesos, sin `script`, sin comentarios.

## Entrega
- Estrategia: `ask-on-risk` (default). Pronóstico ~750 líneas autoría (HTML ~320 + CSS ~430), supera 400. Conteo real desde commits work-unit. Si se abre PR y supera 400, preguntar split vs `size:exception` antes del push. Skills `work-unit-commits`/`chained-pr` por nombre de registro si se hace PR.
- Límite base: `main@4e21991`. Cada tarea cierra con work-unit commit Conventional Commits. Revisión nativa por commit/slice, nunca por checkbox.
- RDD: ON global, se evalúa `review assess --committed-only` por commit.

## Checklist
- [x] T1 Reestructura assets + imágenes ≤200KB + favicon — ruta: inline (subagente no disponible, evidencia: `subagent failed free-tier`). Commit: `7c510e0 chore: reestructura assets e imagenes apf2`
- [x] T2 index.html único 8+ bloques sin comentarios — ruta: inline (misma evidencia). Commit: `4594152 feat: pagina unica apf2 con 8 bloques`
- [x] T3 styles.css único variables/fonts/flex/hover — ruta: inline. Commit: `4ce8abd style: hoja externa apf2 con variables y flexbox`
- [x] T4 videos mp4+youtube + verificación §13 — ruta: inline. Commit: `a429fc8 feat: multimedia y verificacion apf2` (incluye borrado `carrito/contacto/productos.html`, `css/`, `img/` viejos)

## Criterios aceptación
- Abre `index.html` desde carpeta final, CSS/imágenes/videos/favicon cargan, rutas relativas ok.
- 8+ secciones diferenciadas, nav sticky 5+ anclas, tabla, form validado, galería flex wrap, MP4+YouTube, footer completo.
- `grep -ri "<script\|bootstrap\|tailwind" --include="*.html" --include="*.css"` vacío. `grep -r "<!--\|\/\*"` en `index.html`+`styles.css` vacío.
- `find assets/img -size +200k` vacío. `ls -lh assets/videos/*.mp4` ≤4MB. Nombres minúsculas sin espacios.

## Progreso
- Rama creada: `feature/apf2-entregable` desde `main@4e21991`.
- 2026-10-12: documento creado, 4 tareas. Mirror Engram pendiente (subagente/MCP no disponible en este runtime, se reintentará al cierre).

## Evidencia verificación
- 2026-10-12 T1-T4: `grep script/bootstrap/tailwind` vacío. `grep <!--|/\*` en `index.html`+`styles.css` vacío. `find assets/img -size +200k` = 0. MP4 `coleccion.mp4` 50KB ≤4MB muted+loop. YouTube `OaGp5_Sfbss` (The True Cost) verificado vía oembed. Favicon vinculado. 6 anclas `#inicio/#nosotros/#productos/#galeria/#tabla/#contacto`, logo a `index.html`, nav `sticky`, `:root` 11 vars usadas, `display:flex` x20, tabla `thead/tbody`, form `required/email/tel/placeholder`, FontAwesome CDN + Google Fonts Inter, footer completo, 0 refs rotas en 16 rutas `assets/`, HTML 237 líneas + CSS 447 líneas.
- Revisión nativa: `unavailable` — `gentle-ai review assess --base-ref main --committed-only` devuelve `not eligible for immutable receipt review` en runtime `opencode` (solo `claude-code/codex` soportados). Se continúa con checks ordinarios, sin reintentos. Push/PR decide el usuario.
- Rama: `feature/apf2-entregable` con 4 work-unit commits `7c510e0, 4ce8abd, 4594152, a429fc8` sobre `main@4e21991`.

## Siguiente paso
- Entregar: copiar `index.html + assets/ + favicon.ico` a carpeta `apf2_vertice/`, agregar `apf2_vertice.pptx` manual y comprimir. No pushear sin tu orden.
