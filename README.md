# Portfolio 2 — Lakhdar Hafsi

Personal developer portfolio built as part of the Noroff Frontend Development programme POR2 CA(Portfolio 2 CA, AUG24FT).

Live site: https://portfolio-2-tau-plum.vercel.app/

---

## Projects Featured

- **CSS Frameworks** — Bootstrap-based social media UI
- **Semester Project 2** — Auction house web app using Noroff API
- **Holidaze (Project Exam 2)** — Holiday venue booking app built with React and Noroff API

---

## Tech Stack

- React + TypeScript + Vite
- Tailwind CSS
- React Router DOM
- Lucide React (icons)
- Resend (contact form emails)
- Vercel (hosting)

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install dependencies

```bash
npm install
```

### Environment variables

Create a `.env` file in the root:
VITE_RESEND_API_KEY=your_resend_api_key_here

### Run locally

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

---

## Folder Structure

src/
├── components/ # Reusable UI components
├── pages/ # Route-level page components
├── data/ # projects.ts — all project data lives here
└── index.css # Tailwind + CSS custom properties
api/
└── contact.ts # Vercel serverless function for contact form

---

## Deployment

Hosted on Vercel with automatic deploys on push to `main`.
The `vercel.json` handles SPA routing rewrites.

---

## Author

Lakhdar Hafsi
GitHub: https://github.com/lacdart2
