
# Test Project

A modern **Next.js 14** application bootstrapped with **Vite** and managed using **pnpm**.  
This project is structured with a clean and modular folder design, uses **React Query (TanStack Query)** for data fetching, and includes **shadcn/ui** components for a consistent UI.

---

## 🚀 Tech Stack

- [Next.js 14 (App Router)](https://nextjs.org/docs/app)
- [Vite](https://vitejs.dev/)
- [React Query (TanStack Query)](https://tanstack.com/query)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [pnpm](https://pnpm.io/) – Fast, disk space efficient package manager

---

## 📂 Project Structure

```

.
├── app/                # Next.js app router pages, templates, layouts
│   ├── api/            # API hooks (React Query)
│   ├── components/     # Shared UI components (Button, Input, etc.)
│   ├── templates/      # Page templates (Login, Dashboard, etc.)
│   ├── styles/         # Global styles
│   └── lib/            # Utilities (fonts, metadata, react-query provider)
├── public/             # Static assets
├── .gitignore
├── package.json
└── pnpm-lock.yaml

````

---

## 🛠️ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/AysanZ/test.git
cd test
````

### 2. Install dependencies (with pnpm)

```bash
pnpm install
```

### 3. Run the development server

```bash
pnpm run dev
```

The app will be available at **[http://localhost:3000](http://localhost:3000)**.

---

## ⚡ Available Scripts

* `pnpm dev` → Start dev server
* `pnpm build` → Build the project for production
* `pnpm start` → Start production server
* `pnpm lint` → Run ESLint

---

## 🔑 Features

* ✅ Authentication flow (Login with API call → store user in localStorage → Dashboard with ProtectedRoute)
* ✅ Modular component-based architecture
* ✅ Loading + Error handling via **React Query**
* ✅ Accessible UI with **shadcn/ui** + **Tailwind CSS**
* ✅ Dark mode ready (via Tailwind classes)
* ✅ Git commits follow [Conventional Commits](https://www.conventionalcommits.org/)

---

## 🔒 Authentication Flow

1. User logs in → API call fetches data
2. User data is stored in `localStorage`
3. Protected routes (like Dashboard) check `localStorage` for user
4. Logout clears `localStorage` and redirects to Login

---



