# CLAUDE.md — SAINTS STILLS Web Agent

## Identidad del Proyecto
- **Marca:** SAINTS STILLS — Agencia de Producción Visual con IA
- **Tagline:** "Tu catálogo, listo para vender"
- **Sitio:** `index.html` (single-page, inline styles + Tailwind CDN)
- **Negocio:** Lima, Perú | WhatsApp: +51 912149320 | @saintstillss
- **Contexto completo del negocio:** leer `d:\SISTEMA CLAUDE\SAINT STILLS\AGENTES\_contexto-negocio.md` antes de escribir copy, precios o datos del negocio — nunca inventar cifras

---

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.

---

## Sistema de Diseño — Brand SAINTS STILLS

### Paleta (usar estas variables CSS, nunca colores Tailwind por defecto)
```css
--royal: #1B1BF5          /* azul primario */
--royal-deep: #0D0DAA     /* azul oscuro */
--royal-mid: #2626FF
--royal-light: #4545FF
--white: #FAFAFA
--off: #F0F0F8
--bg: #FFFFFF
--bg-2: #F8F9FC
--text: #121317
--text-muted: #6B7280
--border: rgba(18,19,23,0.10)
```
Gradiente principal: `linear-gradient(135deg, #0D0DAA 0%, #1B1BF5 55%, #4545FF 100%)`

### Tipografía
- **Única fuente:** Montserrat (Google Fonts, pesos 300–800) — NO agregar fuentes serif ni alternativas
- Headings: `clamp()` fluid, `letter-spacing: -0.03em` a `-0.04em`
- Body: `line-height: 1.7`, `font-size: 1rem`

### Efectos visuales (mantener consistencia con el sitio existente)
- Noise texture: SVG fractal noise en `body::before`, `opacity: 0.025`
- Frosted glass: `backdrop-filter: blur(24px)` — nav y modales
- Blobs decorativos: círculos borrosos posicionados absolutamente para profundidad
- Sombras: capas con tint azul, baja opacidad (no `shadow-md` plano)
- Easing: `cubic-bezier(.34,1.56,.64,1)` spring-like — **nunca `transition-all`**
- Animaciones: solo `transform` y `opacity`
- Estados interactivos: hover, focus-visible y active en todo elemento clickeable

---

## Assets del Proyecto

**Buscar assets SOLO dentro de `d:\SISTEMA CLAUDE\SAINT STILLS\WEB\` — no explorar otras carpetas.**

```
brand_assets/logo.jpg              → Logo principal (wave azul, usar siempre en header/footer)
brand_assets/brand guides.png      → Guía visual completa — leer antes de diseñar
HERO/HERO.png                      → Hero principal
HERO/HERO (1).png                  → Variante hero
HERO/HERO (2).png                  → Variante hero
HERO/HERO (3).png                  → Variante hero
RESULTADOS/CATALOGOS ECOMMERCE.png
RESULTADOS/ASISTENCIA CREATIVA.png
RESULTADOS/EDITORIAL MODA.png
RESULTADOS/CAMPAÑAS DE VIDEO.png
RESULTADOS/PRODUCCIÓN COMPLETA.png
```

- Usar assets reales siempre que existan — nunca `placehold.co` donde hay imagen real
- Para imágenes sin asset disponible: `https://placehold.co/WIDTHxHEIGHT`

---

## Estructura del Sitio (secciones en orden)

No crear secciones nuevas ni reordenar sin instrucción explícita del usuario.

1. **Hero** — full-height, stats, CTA principal
2. **Trust Badge Strip** — marquee azul con palabras clave de servicio
3. **Intro** — propuesta de valor breve
4. **Servicios** — 5 filas: Ecommerce, Editorial Moda, Campañas, Video, Dirección Creativa
5. **Proceso** — pasos numerados del flujo de trabajo
6. **Resultados** — portfolio usando imágenes de `RESULTADOS/`
7. **Por qué SAINTS STILLS** — stats y diferenciadores vs. foto tradicional
8. **Testimonios / Clientes** — logos o quotes
9. **FAQ** — accordion de preguntas frecuentes
10. **Instagram CTA** — enlace a @saintstillss
11. **Contacto** — WhatsApp +51 912149320, trust badges (24h respuesta, 5–7 días entrega)
12. **Footer** — logo, links, copyright

---

## Datos del Negocio (para copy y FAQ)

Siempre leer `_contexto-negocio.md` para datos actualizados. Valores clave:
- Precios: S/89–S/199 por producto (según volumen y formato)
- Entrega: 5–7 días hábiles
- Ventaja: 80% más económico que foto tradicional, 10× más rápido
- Formatos: **FORMATO STUDIO** (catálogo limpio) y **FORMATO CREATIVO** (lifestyle, editorial, video)
- Clientes: moda, calzado, accesorios, cosmética, hogar, gastronomía, tecnología, joyería, packaging, lujo

---

## Servidor Local y Screenshots

- **Servidor:** `node serve.mjs` → `http://localhost:3000` (iniciar en background antes de screenshots)
- No iniciar segunda instancia si ya corre
- **Screenshots:** `node screenshot.mjs http://localhost:3000` — guarda en `./temporary screenshots/`
- Siempre screenshot desde localhost, nunca `file:///`
- Comparar contra referencia al menos 2 rondas; no parar hasta que no haya diferencias visibles

---

## Output Defaults

- Single `index.html`, todos los estilos inline, salvo que el usuario indique otro approach
- Tailwind CSS vía CDN: `<script src="https://cdn.tailwindcss.com"></script>`
- Mobile-first responsive

---

## Reglas Duras

- No usar colores Tailwind por defecto (indigo-500, blue-600, etc.) — usar `--royal` y derivados
- No agregar fuentes distintas a Montserrat
- No crear secciones nuevas sin instrucción explícita
- No inventar precios, estadísticas ni datos del negocio — leer `_contexto-negocio.md`
- No buscar assets fuera de `WEB/`
- No usar `transition-all`
- No parar en un solo screenshot pass — mínimo 2 comparaciones
- No "mejorar" un diseño de referencia — matchearlo exactamente
