# Muhammad Reyza Ashidiqie — Personal Portfolio

Personal portfolio website built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## Quick Start

### Prerequisites
- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
# Clone or move into the portfolio directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Home page
│   ├── layout.tsx          # Root layout
│   ├── sitemap.ts          # Auto-generated sitemap
│   ├── robots.ts           # robots.txt
│   ├── achievements/       # /achievements + /achievements/[slug]
│   ├── certifications/     # /certifications + /certifications/[slug]
│   └── projects/           # /projects + /projects/[slug]
│
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── sections/           # Hero, About, Education, Skills, etc.
│   ├── cards/              # Achievement, Certification, Project cards
│   └── ui/                 # Badge, Motion, SectionHeader, EmptyState, ThemeProvider
│
├── data/                   # All content data (edit these to update content)
│   ├── profile.ts          # Personal info, social links, CV flag
│   ├── education.ts        # Education history
│   ├── achievements.ts     # Achievements & awards
│   ├── certifications.ts   # Professional certifications
│   ├── skills.ts           # Technical & soft skills
│   ├── projects.ts         # Projects
│   └── experience.ts       # Work & organizational experience
│
└── styles/
    └── globals.css         # Global styles & Tailwind directives

public/
├── images/                 # Profile photo (profile.jpg)
├── certificates/           # Certificate preview images
└── documents/              # CV PDF (cv.pdf)
```

---

## Adding Content

All content is driven by TypeScript data files in `src/data/`. You do **not** need to touch any component files to add content.

### Add your profile photo
Place your photo at `public/images/profile.jpg`.

### Add your CV
1. Place your CV PDF at `public/documents/cv.pdf`
2. Set `cvAvailable: true` in `src/data/profile.ts`

### Add an achievement
Edit `src/data/achievements.ts` and add an entry to the `achievements` array.

### Add a certification
Edit `src/data/certifications.ts` and add an entry to the `certifications` array.

### Add a project
Edit `src/data/projects.ts` and add an entry to the `projects` array.

### Add experience
Edit `src/data/experience.ts` and add an entry to the `experience` array.

---

## Deployment (Vercel)

1. Push the repository to GitHub.
2. Go to [vercel.com](https://vercel.com) → **New Project** → Import your GitHub repo.
3. Vercel auto-detects Next.js. Click **Deploy**.
4. Your site will be live at `your-project.vercel.app`.

**After deployment**, update the base URL in `src/app/sitemap.ts` and `src/app/robots.ts`.

---

## Light / Dark Mode

The site respects the user's system preference on first load and stores the chosen theme in `localStorage`. The toggle button in the navbar switches between modes.

---

## Customization

| What | Where |
|---|---|
| Personal info, social links | `src/data/profile.ts` |
| Theme colors | `tailwind.config.ts` |
| Font | `src/app/layout.tsx` (Google Fonts) |
| Navigation links | `src/components/layout/Navbar.tsx` |
| Sitemap base URL | `src/app/sitemap.ts` |
