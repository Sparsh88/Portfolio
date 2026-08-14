# Sparsh Chauhan — Developer Portfolio

A modern, responsive portfolio website built with React, TypeScript, Vite, Tailwind CSS, Three.js, and Framer Motion to showcase full-stack projects, technical skills, certifications, and career milestones.

---

## Live Demo & GitHub

- **Live Portfolio:** [https://portfolio-flame-rho-29.vercel.app/](https://portfolio-flame-rho-29.vercel.app/)
- **GitHub Repository:** [https://github.com/Sparsh88/Portfolio](https://github.com/Sparsh88/Portfolio)

---

## Overview

This portfolio website serves as a central hub presenting software engineering projects, technical proficiencies, professional certifications, and coding achievements. Designed specifically for technical recruiters, evaluators, and hiring managers, the platform provides an interactive overview of full-stack development expertise and core computer science fundamentals.

The application incorporates a Three.js 3D particle background, smooth Framer Motion micro-interactions, dark/light theme options with customizable accent palettes, and a global keyboard command palette (`Ctrl+K`) for rapid navigation.

Built as a lightweight single-page application (SPA), the client communicates with EmailJS for serverless contact messaging without requiring backend infrastructure, ensuring fast page load times and seamless responsiveness across devices.

---

## Problem Statement

- **Static Resume Limitations:** Traditional PDF resumes cannot demonstrate dynamic UI interactions, real-time responsive rendering, or live application workflows.
- **Fragmented Profile Discovery:** Evaluators must typically jump across separate links to view code repositories, live project deployments, certifications, and LeetCode problem-solving profiles.
- **Mobile Usability in Developer Portfolios:** Heavy portfolio templates often suffer from slow initial loads and unoptimized mobile viewports.
- **Contact Inefficiency:** Direct `mailto:` links frequently fail when user email clients are unconfigured, requiring a reliable in-browser delivery mechanism.

---

## Key Features

- **Interactive Three.js 3D Hero:** Dynamic particle background responding to cursor coordinates with typewriter headline cycling and quick action buttons.
- **Categorized Project Showcase:** Interactive catalog with category filters (All, Full Stack, AI/ML, Systems), direct GitHub repository links, live demo links, and modal case studies.
- **Skill Proficiency Matrix:** Visual breakdown of technical competencies across Frontend, Backend, Databases, AI/Machine Learning, and Developer Tools with animated proficiency bars and search filtering.
- **Verified Certifications & Credentials:** Showcase of completed certifications with modal document previews and direct verification links.
- **Career & Education Timeline:** Interactive chronological milestones covering university education, software internships, hackathon achievements, and key milestones.
- **Serverless Contact Form (EmailJS):** Client-side message delivery directly to inbox with form validation, copy-to-clipboard contact info, and toast notifications.
- **Global Command Palette (`Ctrl+K`):** Keyboard-driven search modal allowing users to jump directly to any section, open project demos, or access external profiles.
- **Dynamic Theme Engine:** Dark and light mode toggle with persistent accent color customization stored in React Context.

---

## Tech Stack

| Category | Technology | Purpose |
|---|---|---|
| Frontend Framework | React 18, TypeScript, Vite | Single-page application, strict typing, and high-speed build tooling |
| 3D Graphics | Three.js | Interactive particle canvas in hero section |
| Styling & UI | Tailwind CSS | Utility-first responsive design and layout system |
| Animations | Framer Motion | Scroll-triggered reveals, page transitions, and UI micro-animations |
| Iconography | Lucide React, React Icons | Consistent modern iconography across all sections |
| Contact Messaging | EmailJS (`@emailjs/browser`) | Client-side contact form delivery without backend servers |
| Interactive Utilities | canvas-confetti, clsx, tailwind-merge | Celebration effects and conditional class merging |
| Deployment | Vercel | Production edge hosting with continuous deployment |

---

## Architecture

```text
User Browser
     │
     ├──> React 18 SPA (Vite + TypeScript)
     │         │
     │         ├──> ThemeProvider (Dark/Light Context & Accent Colors)
     │         ├──> Interactive Canvas (Three.js Particle Animation)
     │         ├──> UI Components (Hero, About, Skills, Projects, Timeline, Contact)
     │         └──> Command Palette Modal (Keyboard Shortcut Navigation)
     │
     └──> External Integrations
               ├──> EmailJS API (Serverless Contact Dispatch)
               └──> Vercel Edge Network (Global Asset Delivery)
```

---

## Application Flow

1. **Initial Load:** The client downloads the lightweight Vite bundle from Vercel edge CDN.
2. **Interactive Rendering:** `ThemeProvider` applies saved theme preferences and Three.js initializes the 3D particle canvas.
3. **Exploration & Navigation:** The user navigates via navbar scroll-spy links or opens the `Ctrl+K` command palette.
4. **Project Inspection:** User filters projects by domain, explores technology badges, and opens detailed case studies or live links.
5. **Skill & Credential Verification:** User inspects categorized technical skills and previews verified certificates in modal views.
6. **Direct Contact:** User fills out the contact form; EmailJS delivers the message to the author's inbox and triggers visual toast/confetti confirmation.

---

## Project Structure

```text
Portfolio/
├── public/
│   ├── favicon.svg
│   └── resume.pdf
├── src/
│   ├── assets/                # Static images and icons
│   ├── components/
│   │   ├── about/             # About bio and stats
│   │   ├── certificates/      # Certificate cards and preview modals
│   │   ├── common/            # Navbar, Footer, Cursor, CommandPalette, ScrollProgress
│   │   ├── contact/           # Contact form and EmailJS integration
│   │   ├── hero/              # Hero banner and Three.js canvas
│   │   ├── projects/          # Project cards, filters, and modals
│   │   ├── services/          # Development services offered
│   │   ├── skills/            # Skill categories and proficiency bars
│   │   ├── stats/             # Coding achievements and metrics
│   │   └── timeline/          # Education and experience timeline
│   ├── context/               # Theme and color context providers
│   ├── data/                  # Static portfolio data (projects, skills, timeline)
│   ├── hooks/                 # Custom React utility hooks
│   ├── types/                 # TypeScript interfaces and type definitions
│   ├── utils/                 # Helper utilities and animation variants
│   ├── App.tsx                # Main application layout
│   ├── main.tsx               # DOM root mounting
│   └── index.css              # Tailwind and global CSS
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## Getting Started

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### 1. Clone the Repository

```bash
git clone https://github.com/Sparsh88/Portfolio.git
cd Portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory (optional, for contact form):

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 5. Build for Production

```bash
npm run build
```

---

## Author

**Sparsh Chauhan**  
*Computer Science & Engineering Student | Full Stack Developer*

- **Portfolio:** [portfolio-flame-rho-29.vercel.app](https://portfolio-flame-rho-29.vercel.app/)
- **GitHub:** [@Sparsh88](https://github.com/Sparsh88)
- **LinkedIn:** [linkedin.com/in/sparshchauhan08](https://linkedin.com/in/sparshchauhan08)
- **Email:** [sparshchauhan050@gmail.com](mailto:sparshchauhan050@gmail.com)
