# Front Stack Develop 🚀

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white) 
---
Este proyecto es un ambicioso esfuerzo para desarrollar un clon mejorado y moderno de Stack Overflow, centrándose exclusivamente en el frontend. Construido con Next.js y TypeScript, "Front Stack Develop" busca ofrecer una experiencia de usuario superior y servir como una plataforma robusta de preguntas y respuestas. Es un proyecto en evolución continua, diseñado para ser una base sólida para futuras expansiones y funcionalidades.

## ✨ Características Principales

*   **Arquitectura Modular de Componentes:** Una estructura de componentes bien organizada y reutilizable que facilita el desarrollo, mantenimiento y escalabilidad de la interfaz de usuario.
*   **Gestión de Autenticación Completa:** Incluye un contexto de autenticación (`AuthContext.tsx`) y componentes dedicados para el inicio de sesión (`Signin.tsx`) y registro (`Signup.tsx`), asegurando una gestión de usuarios robusta.
*   **Funcionalidades Core de Q&A:** Módulos específicos para la gestión de preguntas (`modulos/questions`) y usuarios (`modulos/users`), sentando las bases para una plataforma de preguntas y respuestas completa.
*   **Manejo Eficiente de Datos con React Query:** Integración de `@tanstack/react-query` para una gestión optimizada del estado del servidor, caché y sincronización de datos, mejorando el rendimiento de la aplicación.
*   **Estructura de Rutas Clara y Lógica:** Utilización del sistema de enrutamiento de Next.js (`app/(site)`) para una organización intuitiva de las rutas, incluyendo secciones como `auth`, `blog`, `docs`, `support`, etc.
*   **Soporte para Temas (Claro/Oscuro):** Componente `ThemeToggler.tsx` que permite alternar entre temas claros y oscuros, ofreciendo una experiencia de usuario personalizable.
*   **Contenido Dinámico y Estático:** Capacidad para manejar tanto contenido dinámico (preguntas, respuestas) como documentación estática (blogs, documentos) a través de directorios como `markdown` y rutas dedicadas.

## 🛠️ Tecnologías Utilizadas

Este proyecto se construye sobre una pila de tecnologías modernas y robustas:

*   **Frontend Framework:** Next.js
*   **Lenguaje de Programación:** TypeScript
*   **Manejo de Estado Global:** React Context API
*   **Gestión de Datos y APIs:** React Query (`@tanstack/react-query`)
*   **Cliente HTTP:** Axios
*   **Estilizado:** Probablemente Tailwind CSS (inferido por `postcss.config.js` y `globals.css`)
*   **Control de Versiones:** Git

### Dependencias Clave

*   `next`
*   `react`, `react-dom`
*   `typescript`
*   `axios`
*   `@tanstack/react-query`, `@tanstack/react-query-devtools`
*   `eslint`, `prettier` (para linting y formateo de código)

##  prerequisites Requisitos Previos

Antes de ejecutar este proyecto, asegúrate de tener instalado lo siguiente:

*   **Node.js:** v18.x o superior
*   **npm** o **Yarn** o **pnpm:** Un gestor de paquetes de Node.js
*   **Git:** Para clonar el repositorio

## 🚀 Instrucciones de Instalación

Sigue estos pasos para configurar y ejecutar el proyecto en tu máquina local:

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/alejav0240/front-stack-develop.git
    cd front-stack-develop
    ```

2.  **Instala las dependencias:**
    ```bash
    npm install
    # o
    yarn install
    # o
    pnpm install
    ```

3.  **Configura las variables de entorno:**
    Crea un archivo `.env.local` en la raíz del proyecto y añade las variables de entorno necesarias. Por ejemplo:
    ```
    NEXT_PUBLIC_API_URL=http://localhost:3000/api
    ```
    (Ajusta la URL de la API según tu configuración del backend.)

4.  **Ejecuta el servidor de desarrollo:**
    ```bash
    npm run dev
    # o
    yarn dev
    # o
    pnpm dev
    ```

5.  **Abre tu navegador:**
    Visita `http://localhost:3000` para ver la aplicación en funcionamiento.

## 💡 Guía de Uso

Una vez que la aplicación esté en funcionamiento, podrás:

*   **Navegar por la plataforma:** Explora las diferentes secciones como `auth`, `blog`, `docs`, `support`.
*   **Registrarte e Iniciar Sesión:** Utiliza los formularios de registro y login para crear una cuenta y acceder a las funcionalidades de usuario.
*   **Explorar Preguntas y Respuestas:** Accede a la sección principal para ver preguntas existentes y participar en la comunidad (una vez que las funcionalidades de Q&A estén completamente implementadas).
*   **Cambiar el Tema:** Si la funcionalidad está activa, usa el `ThemeToggler` para alternar entre el tema claro y oscuro.

### Ejemplo de Estructura de Rutas (Next.js App Router)
```
/app
├── (site)
│   ├── auth
│   │   ├── signin
│   │   │   └── page.tsx
│   │   └── signup
│   │       └── page.tsx
│   ├── blog
│   │   ├── [slug]
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── docs
│   │   ├── [slug]
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── support
│   │   └── page.tsx
│   └── page.tsx  // Página principal
├── layout.tsx
├── globals.css
```

## 📂 Estructura del Proyecto

La estructura del proyecto está diseñada para ser modular y fácil de navegar:
```
front-stack-develop/
├── app/                  # Rutas y páginas principales de Next.js
│   └── (site)/           # Grupo de rutas para el sitio principal
│       ├── auth/         # Rutas de autenticación (signin, signup)
│       ├── blog/         # Rutas para el blog
│       ├── docs/         # Rutas para la documentación
│       ├── support/      # Rutas de soporte
│       └── ...
├── components/           # Componentes UI reutilizables (botones, cards, navbars, etc.)
│   ├── auth/             # Componentes relacionados con autenticación
│   ├── common/           # Componentes de uso general
│   ├── layout/           # Componentes de diseño (headers, footers)
│   ├── modales/          # Componentes de modales
│   └── ...
├── context/              # Contextos de React para manejo de estado global (AuthContext, ToastContext)
├── hooks/                # Hooks personalizados
├── lib/                  # Utilidades y funciones auxiliares
├── modulos/              # Módulos de lógica de negocio (questions, users, etc.)
│   ├── questions/        # Lógica y hooks para preguntas
│   └── users/            # Lógica y hooks para usuarios
├── public/               # Archivos estáticos (imágenes, favicons)
├── styles/               # Estilos globales y configuraciones CSS (globals.css, postcss.config.js)
├── types/                # Definiciones de tipos de TypeScript
├── .env.local            # Variables de entorno (no versionado)
├── next.config.js        # Configuración de Next.js
├── package.json          # Metadatos del proyecto y dependencias
├── tsconfig.json         # Configuración de TypeScript
└── README.md             # Este archivo
```
## ✨ Características Principales

*   **Arquitectura Modular de Componentes:** Una estructura de componentes bien organizada y reutilizable que facilita el desarrollo, mantenimiento y escalabilidad de la interfaz de usuario.
*   **Gestión de Autenticación Completa:** Incluye un contexto de autenticación (`AuthContext.tsx`) y componentes dedicados para el inicio de sesión (`Signin.tsx`) y registro (`Signup.tsx`), asegurando una gestión de usuarios robusta.
*   **Funcionalidades Core de Q&A:** Módulos específicos para la gestión de preguntas (`modulos/questions`) y usuarios (`modulos/users`), sentando las bases para una plataforma de preguntas y respuestas completa.
*   **Manejo Eficiente de Datos con React Query:** Integración de `@tanstack/react-query` para una gestión optimizada del estado del servidor, caché y sincronización de datos, mejorando el rendimiento de la aplicación.
*   **Estructura de Rutas Clara y Lógica:** Utilización del sistema de enrutamiento de Next.js (`app/(site)`) para una organización intuitiva de las rutas, incluyendo secciones como `auth`, `blog`, `docs`, `support`, etc.
*   **Soporte para Temas (Claro/Oscuro):** Componente `ThemeToggler.tsx` que permite alternar entre temas claros y oscuros, ofreciendo una experiencia de usuario personalizable.
*   **Contenido Dinámico y Estático:** Capacidad para manejar tanto contenido dinámico (preguntas, respuestas) como documentación estática (blogs, documentos) a través de directorios como `markdown` y rutas dedicadas.

## 🛠️ Tecnologías Utilizadas

Este proyecto se construye sobre una pila de tecnologías modernas y robustas:

*   **Frontend Framework:** Next.js
*   **Lenguaje de Programación:** TypeScript
*   **Manejo de Estado Global:** React Context API
*   **Gestión de Datos y APIs:** React Query (`@tanstack/react-query`)
*   **Cliente HTTP:** Axios
*   **Estilizado:** Probablemente Tailwind CSS (inferido por `postcss.config.js` y `globals.css`)
*   **Control de Versiones:** Git

### Dependencias Clave

*   `next`
*   `react`, `react-dom`
*   `typescript`
*   `axios`
*   `@tanstack/react-query`, `@tanstack/react-query-devtools`
*   `eslint`, `prettier` (para linting y formateo de código)

##  prerequisites Requisitos Previos

Antes de ejecutar este proyecto, asegúrate de tener instalado lo siguiente:

*   **Node.js:** v18.x o superior
*   **npm** o **Yarn** o **pnpm:** Un gestor de paquetes de Node.js
*   **Git:** Para clonar el repositorio

## 🚀 Instrucciones de Instalación

Sigue estos pasos para configurar y ejecutar el proyecto en tu máquina local:

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/alejav0240/front-stack-develop.git
    cd front-stack-develop
    ```

2.  **Instala las dependencias:**
    ```bash
    npm install
    # o
    yarn install
    # o
    pnpm install
    ```

3.  **Configura las variables de entorno:**
    Crea un archivo `.env.local` en la raíz del proyecto y añade las variables de entorno necesarias. Por ejemplo:
    ```
    NEXT_PUBLIC_API_URL=http://localhost:3000/api
    ```
    (Ajusta la URL de la API según tu configuración del backend.)

4.  **Ejecuta el servidor de desarrollo:**
    ```bash
    npm run dev
    # o
    yarn dev
    # o
    pnpm dev
    ```

5.  **Abre tu navegador:**
    Visita `http://localhost:3000` para ver la aplicación en funcionamiento.

## 💡 Guía de Uso

Una vez que la aplicación esté en funcionamiento, podrás:

*   **Navegar por la plataforma:** Explora las diferentes secciones como `auth`, `blog`, `docs`, `support`.
*   **Registrarte e Iniciar Sesión:** Utiliza los formularios de registro y login para crear una cuenta y acceder a las funcionalidades de usuario.
*   **Explorar Preguntas y Respuestas:** Accede a la sección principal para ver preguntas existentes y participar en la comunidad (una vez que las funcionalidades de Q&A estén completamente implementadas).
*   **Cambiar el Tema:** Si la funcionalidad está activa, usa el `ThemeToggler` para alternar entre el tema claro y oscuro.

### Ejemplo de Estructura de Rutas (Next.js App Router)
```
/app
├── (site)
│   ├── auth
│   │   ├── signin
│   │   │   └── page.tsx
│   │   └── signup
│   │       └── page.tsx
│   ├── blog
│   │   ├── [slug]
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── docs
│   │   ├── [slug]
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── support
│   │   └── page.tsx
│   └── page.tsx  // Página principal
├── layout.tsx
├── globals.css
```

## 📂 Estructura del Proyecto

La estructura del proyecto está diseñada para ser modular y fácil de navegar:
```
front-stack-develop/
├── app/                  # Rutas y páginas principales de Next.js
│   └── (site)/           # Grupo de rutas para el sitio principal
│       ├── auth/         # Rutas de autenticación (signin, signup)
│       ├── blog/         # Rutas para el blog
│       ├── docs/         # Rutas para la documentación
│       ├── support/      # Rutas de soporte
│       └── ...
├── components/           # Componentes UI reutilizables (botones, cards, navbars, etc.)
│   ├── auth/             # Componentes relacionados con autenticación
│   ├── common/           # Componentes de uso general
│   ├── layout/           # Componentes de diseño (headers, footers)
│   ├── modales/          # Componentes de modales
│   └── ...
├── context/              # Contextos de React para manejo de estado global (AuthContext, ToastContext)
├── hooks/                # Hooks personalizados
├── lib/                  # Utilidades y funciones auxiliares
├── modulos/              # Módulos de lógica de negocio (questions, users, etc.)
│   ├── questions/        # Lógica y hooks para preguntas
│   └── users/            # Lógica y hooks para usuarios
├── public/               # Archivos estáticos (imágenes, favicons)
├── styles/               # Estilos globales y configuraciones CSS (globals.css, postcss.config.js)
├── types/                # Definiciones de tipos de TypeScript
├── .env.local            # Variables de entorno (no versionado)
├── next.config.js        # Configuración de Next.js
├── package.json          # Metadatos del proyecto y dependencias
├── tsconfig.json         # Configuración de TypeScript
└── README.md             # Este archivo
```