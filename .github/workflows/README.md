# GitHub Workflows Documentation

Este directorio contiene los **GitHub Actions workflows** para el proyecto de portafolio. Automatizan calidad de código, despliegue y seguridad.

## 🔄 Workflows Overview

### 1. **CI/CD Pipeline** (`ci.yml`)

**Triggers:** Push a `main` y Pull Requests a `main`

**Jobs:**

* **Code Quality**: Corre ESLint, chequeos de TypeScript y Prettier
* **Build**: Compila la aplicación Next.js
* **Deploy**: Despliega automáticamente a **Vercel** en `main`
* **Security**: Corre `npm audit` para detectar vulnerabilidades

**Status:** ✅ Corre en cada push a `main` y en PRs

---

### 2. **Preview Deployment** (`preview.yml`)

**Triggers:** Pull Requests a `main`

**Jobs:**

* **Preview**: Despliega una preview en **Vercel**
* **Comment**: Comenta en el PR con la URL del despliegue de preview

**Status:** ✅ Corre en cada PR creado/actualizado

---

### 3. **Security & Dependencies** (`security.yml`)

**Triggers:**

* Schedule semanal (lunes 9 AM UTC)
* Manual dispatch desde GitHub

**Jobs:**

* **Security Audit**: Escanea vulnerabilidades con `npm audit`
* **CodeQL Analysis**: Análisis semántico de GitHub
* **Dependency Review**: Revisa dependencias nuevas en PRs

**Status:** ✅ Corre semanalmente + en PRs

---

### 4. **Dependabot** (`dependabot.yml`)

**Triggers:** Ejecución semanal (lunes 9 AM UTC)

**Updates:**

* **npm packages**: Actualiza dependencias automáticamente
* **GitHub Actions**: Mantiene workflows en la última versión

**Status:** ✅ Dependencias al día automáticamente

---

## 🚀 Setup Instructions

### Required Secrets (para Vercel)

Agrega estos **secrets** en tu repositorio:

```
VERCEL_TOKEN=your_vercel_token
VERCEL_ORG_ID=your_org_id
VERCEL_PROJECT_ID=your_project_id
```

📌 Se generan en tu dashboard de [Vercel](https://vercel.com).

### Cómo agregarlos en GitHub:

1. Ve a tu repositorio
2. Click en **Settings → Secrets and variables → Actions**
3. Crea un **New repository secret** por cada variable

---

## 📋 Workflow Status Badges

Agrega estos badges en tu `README.md`:

```markdown
[![CI/CD Pipeline](https://github.com/kevin-esq/my-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/kevin-esq/my-portfolio/actions/workflows/ci.yml)
[![Security Checks](https://github.com/kevin-esq/my-portfolio/actions/workflows/security.yml/badge.svg)](https://github.com/kevin-esq/my-portfolio/actions/workflows/security.yml)
```

---

## 🔧 Customization

### Cambiar horarios de escaneo

* Edita `.github/workflows/security.yml` → cambia la expresión `cron`.
* Edita `.github/dependabot.yml` → ajusta `schedule.interval` y `schedule.day`.

### Branch Protection (recomendado)

En **Settings → Branches**, crea una regla para `main`:

* ✅ Requerir que los checks pasen
* ✅ Requerir que esté actualizado con `main`
* ✅ Requerir revisión de code owners (opcional)

---

## 🐛 Troubleshooting

**Errores de build**

* Verifica versión de Node.js (`20`)
* Instala dependencias con `npm ci`
* Revisa logs de build en Actions

**Errores de deploy**

* Asegúrate de que los `VERCEL_*` secrets estén configurados
* Revisa logs en Actions y en el dashboard de Vercel

**Errores de seguridad**

* Corre `npm audit` localmente
* Usa `npm audit fix` para resolver vulnerabilidades

---

## 📚 Resources

* [GitHub Actions Documentation](https://docs.github.com/en/actions)
* [Vercel GitHub Integration](https://vercel.com/docs/concepts/git/vercel-for-github)
* [Dependabot Documentation](https://docs.github.com/en/code-security/dependabot)