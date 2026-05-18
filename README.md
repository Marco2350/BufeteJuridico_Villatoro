# Villatoro & Asociados — Sitio Web

Sitio corporativo del **Bufete Jurídico Villatoro & Asociados** (Honduras) construido con **Astro 4 + TailwindCSS**.

> Diseño premium pensado para transmitir confianza, autoridad y elegancia, y convertir visitantes en clientes mediante CTAs claros y un flujo directo a WhatsApp.

---

## 🚀 Instalación

Requisitos: **Node.js 18.17+** (recomendado 20+) y **npm**.

```bash
npm install
npm run dev
```

Luego abra <http://localhost:4321>.

### Scripts disponibles

| Comando             | Descripción                                       |
| ------------------- | ------------------------------------------------- |
| `npm run dev`       | Levanta el servidor de desarrollo con HMR         |
| `npm run build`     | Compila el sitio a `dist/` listo para producción  |
| `npm run preview`   | Sirve la build de producción para inspeccionarla  |

---

## 📁 Estructura del proyecto

```
.
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── images/
│       └── abogado-hero.png      ← imagen principal del abogado
├── src/
│   ├── assets/                   ← imágenes optimizadas con Astro Assets
│   ├── components/
│   │   ├── Navbar.astro          ← navbar sticky + menú móvil
│   │   ├── Hero.astro            ← sección principal
│   │   ├── Servicios.astro       ← 8 áreas de práctica
│   │   ├── SobreAbogado.astro    ← biografía, valores, credenciales
│   │   ├── Testimonios.astro     ← reseñas con estrellas
│   │   ├── FAQ.astro             ← acordeón accesible
│   │   ├── Contacto.astro        ← formulario + WhatsApp
│   │   ├── Footer.astro          ← contacto, mapa, redes
│   │   ├── WhatsAppButton.astro  ← botón flotante
│   │   └── SEO.astro             ← meta tags + JSON-LD LegalService
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── servicios.astro
│   │   ├── sobre-nosotros.astro
│   │   └── contacto.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.cjs
├── tsconfig.json
└── package.json
```

---

## ✏️ Personalización rápida

Todos los datos del bufete (nombre, teléfono, dirección, etc.) están centralizados en
componentes específicos para que sea fácil cambiarlos:

| Qué quiero cambiar          | Dónde                                                      |
| --------------------------- | ---------------------------------------------------------- |
| **Nombre del bufete**       | `src/components/Navbar.astro`, `Footer.astro`, `SEO.astro` |
| **Teléfono / WhatsApp**     | `src/components/WhatsAppButton.astro`, `Contacto.astro`, `Footer.astro`, `Hero.astro`, `SEO.astro` |
| **Dirección y horarios**    | `src/components/Footer.astro`, `Contacto.astro`, `SEO.astro` |
| **Redes sociales**          | `src/components/Footer.astro` (array de redes)             |
| **Mapa de Google**          | `src/components/Footer.astro` — variable `mapEmbed`        |
| **Áreas de práctica**       | `src/components/Servicios.astro` — array `servicios`       |
| **Testimonios**             | `src/components/Testimonios.astro` — array `testimonios`   |
| **FAQ**                     | `src/components/FAQ.astro` — array `faqs`                  |
| **Colores corporativos**    | `tailwind.config.cjs` — sección `theme.extend.colors`      |
| **Tipografías**             | `src/layouts/BaseLayout.astro` (Google Fonts) + `tailwind.config.cjs` |
| **URL del sitio**           | `astro.config.mjs` — constante `SITE_URL`                  |
| **Imagen del abogado**      | `public/images/abogado-hero.png`                           |

---

## 🔍 SEO

El componente `SEO.astro` ya genera:

- `<title>`, `description`, `keywords`, `canonical`
- **Open Graph** y **Twitter Cards**
- **Structured Data JSON-LD** con `@type: LegalService`, incluyendo dirección,
  horarios, área de servicio, catálogo de servicios y coordenadas GPS — esto es
  clave para aparecer en búsquedas locales de **Google**.
- `geo.region`, `geo.placename` para SEO local Honduras

El sitemap se genera automáticamente con `@astrojs/sitemap` en
`/sitemap-index.xml`. `robots.txt` ya lo referencia.

Antes de publicar, edite `astro.config.mjs` y reemplace `SITE_URL` por su
dominio real.

---

## 📬 Formulario de contacto

Por defecto el formulario **no necesita backend**: al enviarlo, abre WhatsApp
con el mensaje pre-llenado. Si más adelante quiere recibirlo por email, puede
integrar:

- [Formspree](https://formspree.io) (cero código)
- [Web3Forms](https://web3forms.com) (cero código)
- Un endpoint propio con Astro Server Islands

La lógica vive en `src/components/Contacto.astro` (script al final del archivo).

---

## 🎨 Paleta de diseño

| Color           | Hex       | Uso                              |
| --------------- | --------- | -------------------------------- |
| Navy            | `#0A1F44` | Fondo oscuro, textos, navbar     |
| Navy Light      | `#13295A` | Hover de botones primarios       |
| Gold            | `#C9A961` | Acentos, líneas, CTAs            |
| Gold Light      | `#E5C97B` | Hover, gradientes                |
| Cream           | `#FAF7F2` | Fondo principal claro            |
| Ink             | `#1A1A1A` | Texto base                       |

Tipografías: **Playfair Display** (display/serif) + **Inter** (sans).

---

## ⚡ Performance

- HTML comprimido (`compressHTML: true`)
- CSS dividido por componente
- Imágenes con `loading="lazy"`, `decoding="async"` y `fetchpriority="high"` solo en el hero
- Animaciones respetan `prefers-reduced-motion`
- Fuentes con `&display=swap` y preconnect a Google Fonts
- Iconos SVG inline (sin librerías pesadas)

Para auditar: `npm run build && npm run preview` y luego ejecutar Lighthouse.

---

## 📜 Licencia

Código propietario del Bufete Jurídico Villatoro & Asociados. Reutilización con autorización.
