# 🧱 Full Stack Starter Template — Vite + Tailwind + Express

[![CI Status](https://github.com/DanielnetoDotCom/blank-node-project/actions/workflows/main.yml/badge.svg)](https://github.com/DanielnetoDotCom/blank-node-project/actions)

A reusable full-stack starter project using:

- **Frontend**: React + Vite + Tailwind CSS  
- **Backend**: Express (Node.js)  
- **Extras**: One script to scan all `.js/.jsx/.ts/.tsx` files across frontend and backend

---

## 📁 Project Structure

```
my-project/
├── frontend/         # React app with Vite and Tailwind
├── backend/          # Express server
├── scan-js-files.js  # Utility to list all JS/TS files with content
├── js-files.txt      # Output file from scan script
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone this repo

You can use this repo as a template by clicking **"Use this template"** on GitHub.

Or clone manually:

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
cd YOUR-REPO-NAME
```

### 2. Install dependencies

#### Frontend

```bash
cd frontend
npm install
```

#### Backend

```bash
cd ../backend
npm install
```

### 3. Run the project

#### Start Backend

```bash
cd backend
npm run dev
```

#### Start Frontend

```bash
cd ../frontend
npm run dev
```

---

## 🧪 JS/TS File Scanner

This project includes a utility script to scan all JavaScript/TypeScript files across both frontend and backend and output their contents into a single `.txt` file.

### Run the script:

```bash
node scan-js-files.js
```

### Output:

Creates `js-files.txt` in the root directory with:

- Relative file paths
- Full file contents
- Automatically ignores `node_modules`

---

## 🔄 Reusing This Template

To use this setup in future projects:

- Mark this repo as a **template** in GitHub settings
- Click **"Use this template"** to create a new project
- Or use [`degit`](https://github.com/Rich-Harris/degit):

```bash
npx degit your-username/your-repo-name my-new-app
```

---

## 📌 Notes

- No sensitive data should be stored here
- Keep the structure clean and minimal
- Adapt freely to your project needs

---

## 🧑‍💻 Author

Daniel de Oliveira Santos Neto  
[GitHub Profile](https://github.com/DanielnetoDotCom)
