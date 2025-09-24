# 🚀 Kevin Esquivel - Full-Stack Developer Portfolio

[![CI/CD Pipeline](https://github.com/kevin-esq/my-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/kevin-esq/my-portfolio/actions/workflows/ci.yml)
[![Security Checks](https://github.com/kevin-esq/my-portfolio/actions/workflows/security.yml/badge.svg)](https://github.com/kevin-esq/my-portfolio/actions/workflows/security.yml)
[![Preview Deployment](https://img.shields.io/badge/Preview-Deployed-brightgreen)](https://my-portfolio-kevin-esquivel.vercel.app)

**¡Hola! Soy Kevin Esquivel**, un desarrollador Full-Stack apasionado con más de 2 años de experiencia creando aplicaciones web y móviles que resuelven problemas reales. Este portafolio muestra mi trayectoria profesional, proyectos destacados y habilidades técnicas.

---

## 🌟 Acerca de Mí

Soy un desarrollador Full-Stack con sólida experiencia en tecnologías modernas. Me especializo en crear aplicaciones escalables y mantenibles con un enfoque en la experiencia del usuario y las mejores prácticas de desarrollo.

### 📍 Ubicación

Chetumal, Quintana Roo, México

### 🎯 Disponibilidad

✅ **Disponible para proyectos freelance y colaboraciones**

### 💼 Experiencia Profesional

#### Full-Stack Developer | Mayasur Systems (2024 - Presente)

- Desarrollo de aplicaciones móviles y web con enfoque en rendimiento y UX
- Integración de GPS y funcionalidades avanzadas en React Native
- Configuración de infraestructura de red (Mikrotik, TP-Link)
- Mejora del 25% en el rendimiento de aplicaciones

#### Technology Intern | Universidad Autónoma de Q. Roo (2022 - 2023)

- Desarrollo de sistemas de gestión de inventario con Power Apps y SharePoint
- Implementación de soluciones QR para seguimiento y auditoría
- Reducción del 40% en tiempo de auditorías

### 🎓 Educación

**Técnico en Programación de Computadoras** | CBTIS 214 (2020 - 2023)

- Programación Orientada a Objetos (Java, C#)
- Desarrollo Web (HTML, CSS, JavaScript)
- Sistemas de Gestión de Bases de Datos
- Análisis y Diseño de Sistemas

---

## 🛠️ Stack Tecnológico

### Frontend

- **React** & **Next.js 15** - Framework principal
- **TypeScript** - Tipado estático
- **TailwindCSS** - Estilos y diseño
- **React Native** - Desarrollo móvil
- **Angular** - Framework alternativo

### Backend

- **Java** & **Spring Boot** - APIs robustas
- **C# .NET** - Aplicaciones empresariales
- **Node.js** & **Express.js** - Backend JavaScript
- **RESTful APIs** - Diseño de APIs

### Bases de Datos

- **PostgreSQL** & **MySQL** - Bases de datos relacionales
- **SQL Server** - Enterprise solutions
- **MongoDB** - NoSQL
- **Redis** - Caching

### Herramientas & DevOps

- **Git** - Control de versiones
- **Docker** - Containerización
- **VS Code** & **IntelliJ** - Entornos de desarrollo
- **Postman** - Testing de APIs
- **JUnit** & **Maven** - Testing y gestión de dependencias

---

## 📁 Estructura del Proyecto

```
my-portfolio/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── [locale]/          # Internacionalización
│   │   ├── globals.css        # Estilos globales
│   │   └── layout.tsx         # Layout principal
│   ├── components/            # Componentes React
│   │   ├── features/          # Componentes por funcionalidad
│   │   ├── layout/            # Componentes de layout
│   │   └── ui/                # Componentes UI básicos
│   ├── data/                  # Datos estáticos
│   │   ├── projects.ts        # Proyectos
│   │   ├── experience.ts      # Experiencia laboral
│   │   ├── skills.ts          # Habilidades técnicas
│   │   └── types.ts           # Definiciones TypeScript
│   ├── locales/               # Archivos de traducción
│   │   ├── en.json           # Inglés
│   │   └── es.json           # Español
│   └── providers/             # Context providers
├── public/                    # Archivos estáticos
└── .github/                   # Workflows de GitHub Actions
```

---

## 🚀 Proyectos Destacados

### 🔗 Link Management API

**Tecnologías:** C# .NET, RESTful APIs, Clean Architecture

- API RESTful para acortamiento de URLs
- Arquitectura limpia y mantenible
- Manejo robusto de errores y validación

### 📦 Inventory Management System

**Tecnologías:** Java, Spring Boot, JPA, JUnit

- Sistema backend modular para operaciones de inventario
- Implementación completa de JPA
- Testing unitario exhaustivo

### 🦊 Wildlife Conservation App

**Tecnologías:** React Native, TypeScript, GPS Integration

- Aplicación móvil con funcionalidades GPS
- Validación de formularios avanzada
- Interfaz paginada para mejor UX

---

## ✨ Características del Portafolio

### 🎨 Diseño Moderno

- **Responsive Design** - Optimizado para todos los dispositivos
- **Tema Oscuro/Claro** - Conmutación automática según preferencias del sistema
- **Animaciones Suaves** - Transiciones y efectos visuales elegantes
- **Gradientes Personalizados** - Esquema de colores verde/esmeralda

### 🌐 Internacionalización

- **Soporte Multi-idioma** - Inglés y Español
- **Traducción Completa** - Todo el contenido traducido
- **SEO Optimizado** - Meta tags localizados

### ⚡ Performance

- **Next.js 15** - Última versión con App Router
- **TypeScript** - Tipado estático para mejor rendimiento
- **Optimización de Imágenes** - Carga lazy y optimización automática
- **Code Splitting** - Carga de módulos bajo demanda

### 🔧 Automatización

- **CI/CD Pipeline** - Despliegue automático con GitHub Actions
- **Preview Deployments** - Despliegues automáticos de PRs
- **Security Audits** - Escaneo semanal de vulnerabilidades
- **Dependabot** - Actualización automática de dependencias

---

## 🏃‍♂️ Cómo Ejecutar el Proyecto

### Prerrequisitos

- **Node.js 20** o superior
- **npm** o **yarn**

### Instalación

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/kevin-esq/my-portfolio.git
   cd my-portfolio
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   # o
   npm ci
   ```

3. **Ejecutar en modo desarrollo**

   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

### Scripts Disponibles

- `npm run dev` - Servidor de desarrollo con Turbopack
- `npm run build` - Construir para producción
- `npm run start` - Servidor de producción
- `npm run lint` - Ejecutar ESLint
- `npm run type-check` - Verificar tipos TypeScript
- `npm run format:check` - Verificar formato con Prettier

---

## 📊 Estado del Proyecto

### 🟢 CI/CD Pipeline

[![CI/CD Pipeline](https://github.com/kevin-esq/my-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/kevin-esq/my-portfolio/actions/workflows/ci.yml)

### 🟢 Security Checks

[![Security Checks](https://github.com/kevin-esq/my-portfolio/actions/workflows/security.yml/badge.svg)](https://github.com/kevin-esq/my-portfolio/actions/workflows/security.yml)

### 🟢 Preview Deployment

[![Preview Deployment]([https://img.shields.io/badge/Preview-Deployed-brightgreen)](https://my-portfolio-kevin-esquivel.vercel.app/)

---

## 📞 Contacto

¿Interesado en trabajar conmigo? ¡Hablemos!

### 📧 Información de Contacto

- **Email:** kevin.esquivel@example.com
- **Ubicación:** Chetumal, Quintana Roo, México
- **Disponibilidad:** Proyectos freelance y colaboraciones
- **Tiempo de Respuesta:** Dentro de 24 horas

### 🔗 Enlaces

- **Portafolio:** [kevin-esquivel.vercel.app](https://kevin-esquivel.vercel.app)
- **GitHub:** [github.com/kevin-esq](https://github.com/kevin-esq)
- **LinkedIn:** [linkedin.com/in/kevin-esquivel](https://linkedin.com/in/kevin-esquivel)

### 💼 ¿Buscas un desarrollador?

Estoy disponible para:

- ✅ Proyectos Full-Stack
- ✅ Aplicaciones Web Modernas
- ✅ APIs RESTful
- ✅ Aplicaciones Móviles (React Native)
- ✅ Consultoría Técnica
- ✅ Code Reviews

---

## 🤝 Agradecimientos

Este portafolio fue construido con:

- **Next.js 15** - React Framework
- **TailwindCSS** - Utility-first CSS framework
- **TypeScript** - JavaScript with syntax for types
- **Vercel** - Deployment platform
- **GitHub Actions** - CI/CD automation

---

**¡Gracias por visitar mi portafolio!** 🚀

_Desarrollado con ❤️ por Kevin Esquivel_
