
## 🗂 Estructura principal:

| Carpeta | ¿Qué contiene? |  
|:--------|:----------------|
| `/app` | Aquí están las **páginas y rutas** (`app router`) del sitio. Cada carpeta puede tener un `page.tsx`, `layout.tsx`, y `head.tsx`. |
| `/components` | **Componentes reutilizables**: botones, cards, secciones como About, Blog, Hero, etc. |
| `/markdown` | Archivos `.mdx` que probablemente cargues dinámicamente como documentos o posts. |
| `/public` | Imágenes, íconos y archivos estáticos accesibles directamente desde el navegador. |
| `/src/app` | Parece que aquí tienes **global styles** (`globals.css`) y **layout base** (`layout.tsx`) para toda la app. |
| `/types` | **Interfaces y tipos** TypeScript (para datos de blog, FAQ, menús, etc.). |
| Archivos raíz | Configuración del proyecto (`next.config.js`, `tsconfig.json`, `package.json`, etc.).

---

## 🧠 Sobre `/app` (App Router)

Tu ruta principal es `/app/(site)`, que contiene:

| Ruta | ¿Qué es? |
|:-----|:---------|
| `auth/signin/page.tsx` | Página de **iniciar sesión**. |
| `auth/signup/page.tsx` | Página de **registrarse**. |
| `blog/page.tsx` | Página de listado de **blogs**. |
| `blog/blog-details/page.tsx` | Página de **detalle** de blog. |
| `docs/page.tsx` | Página de **documentos** (quizá usando los .mdx de `/markdown`). |
| `support/page.tsx` | Página de **soporte**. |
| `error/page.tsx` | Página de **error 404** o personalizada. |
| `layout.tsx` | **Layout general** de las páginas bajo `(site)`. |
| `head.tsx` | **Metadata** de las páginas: títulos, descripciones, etc. |
| `page.tsx` | Seguramente el **home** del sitio. |

El patrón `(site)` indica que es un **grupo de rutas**, útil para separar áreas (como una sección "admin" después).

---

## ⚙️ Cositas técnicas que veo:

- Estás usando **TypeScript** (`.tsx`, `.ts`).
- Manejas **contextos** (`/app/context/ToastContext.tsx`) → probablemente para mostrar notificaciones tipo "toast".
- Estás usando **ESLint**, **Prettier** → normas de código automáticas.
- Usas **TailwindCSS** o algún sistema de estilos compatible (por `postcss.config.js`).

---

## 🛠️ ¿Qué significa trabajar así en Next.js?

- Cada `page.tsx` **es una página** en tu sitio web.
- Cada `layout.tsx` **esqueleto o estructura** de esas páginas (Navbar, Footer, etc.).
- Puedes **anidar** rutas fácilmente (como `blog/blog-details`).
- Puedes usar **archivos MDX** para contenido dinámico de documentos o posts (markdown + react).
- Con **tipado fuerte** en los datos (TypeScript en `/types`).