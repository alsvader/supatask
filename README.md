# 🚀 My React + Vite + Supabase Project

This is a modern web application starter using:

- **React 19**
- **Vite** for blazing-fast builds
- **TailwindCSS** for utility-first styling
- **daisyUI** for beautiful component styling
- **Supabase** as the backend and auth solution
- **Biome** for code formatting and linting
- **pnpm** for fast, efficient dependency management
- **Node.js v22.13.0**

---

## 🧱 Project Structure

```bash
├── public/                   # Static assets
├── src/                      # Application source code
│   ├── api/                  # API utilities and Supabase queries
│   │   └── tasks/
│   │       ├── index.ts
│   │       └── types.ts
│   ├── app                   # Main app configuration (routing, layouts, etc.)
│   │   ├── index.tsx
│   │   └── router.tsx
│   ├── assets
│   │   └── react.svg
│   ├── components            # Reusable components
│   │   ├── AuthForm.tsx
│   │   ├── AuthLayout.tsx
│   │   ├── AuthProvider.tsx
│   │   ├── Loading.tsx
│   │   ├── ProtectedRoute.tsx
│   │   ├── Tasks
│   │   │   ├── TaskForm.tsx
│   │   │   ├── TaskItem.tsx
│   │   │   ├── TaskList.tsx
│   │   │   └── index.ts
│   │   ├── index.tsx
│   │   └── types.ts
│   ├── context                # React context providers
│   │   └── AuthContext.ts
│   ├── hooks                  # Custom React hooks
│   │   ├── useAuth.tsx
│   │   └── useForm.tsx
│   ├── pages                  # Page-level components
│   │   ├── Dashboard
│   │   │   └── index.tsx
│   │   ├── SignIn
│   │   │   └── index.tsx
│   │   ├── SignUp
│   │   │   └── index.tsx
│   │   └── index.ts
│   ├── utils                   # Supabase client, helpers, etc.
│   │   ├── constants.ts
│   │   └── supabase.ts
│   ├── index.css
│   ├── main.tsx                # App entry point
│   └── vite-env.d.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
````

## ⚙️ Setup Instructions

### 1. Clone the repository


```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
````

### 2. Install dependencies

```bash
pnpm install
```

### 3. Configure environment variables

```bash
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-anon-key
````

### 4. Start the development server

```bash
pnpm dev
```


## 🧠 Tooling Overview

### 🔧 Biome

Biome is used for formatting and linting.

- Lint code:

```bash
pnpm lint
````

- Lint fix

```bash
pnpm lint:fix
```

### 🎨 TailwindCSS + daisyUI
TailwindCSS is configured with daisyUI for fast, themeable UI development.

## 🔐 Supabase Integration
Supabase is used for:

- Authentication
- Database and storage
- Realtime features
- The client is initialized in:

```bash
src/utils/supabase.ts
```
Use environment variables for connection details.

## 📦 Production Build
To generate an optimized production build:

```bash
pnpm build
````

## ✨ Credits

Built with ❤️ using React, Vite, PNPM, Supabase, TailwindCSS, daisyUI, and Biome.
