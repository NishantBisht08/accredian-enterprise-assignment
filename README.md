# Accredian Enterprise Clone

This is a partial clone of the Accredian Enterprise landing page ([enterprise.accredian.com](https://enterprise.accredian.com/)). This project was built to fulfill the Full Stack Developer Intern assignment.

## Tech Stack
- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: JavaScript/React Hooks

## Features Developed
1. **Fully Responsive Landing Page**: Mobile, tablet, and desktop views configured.
2. **Hero Section & Lead Capture Modal**: Dynamic 'Enquire Now' form built with React state management.
3. **API Integration (Bonus)**: Lead form data submits to a mock Next.js Backend via `/api/lead/route.js`.
4. **Sections**: Hero, Stats, Client Logos, The Accredian Edge, Expertise Programs, FAQ, and Footer.

## Setup Instructions

Ensure you have Node.js (v18+) installed.

1. **Install Dependencies**:
```bash
npm install
# or
yarn install
```

2. **Run the Development Server**:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment on Vercel
1. Push this repository to GitHub.
2. Sign in to your [Vercel](https://vercel.com/) dashboard.
3. Click **Add New** -> **Project**.
4. Import this GitHub repository. Vercel will automatically detect Next.js.
5. Click **Deploy**. The project will be live.

Alternatively, via CLI:
```bash
npx vercel
```

---

## 🧭 Approach Taken

I approached this assignment with a component-first architecture strategy, treating it like a real-world enterprise SaaS project:

1. **Research & Planning**: Analyzed the live site (`enterprise.accredian.com`) to identify all unique page sections, their layouts, and the overall visual language (color palette, typography, spacing rhythm).

2. **Project Scaffolding**: Initialized a Next.js 14 project with the App Router. Set up Tailwind CSS with the `Inter` font globally via `layout.js`.

3. **Component Decomposition**: Each visual section of the page was broken out into an independent, self-contained component (`HeroSection`, `StatsSection`, `ClientsSection`, `EdgeSection`, `ExpertiseSection`, `FAQSection`). This keeps the code clean, readable, and individually testable.

4. **Layered Interactivity**: Added functional React state (`useState`, `useEffect`) for the FAQ accordion, lead capture modal, the responsive mobile hamburger menu, and the Navbar's glassmorphism scroll effect.

5. **API-First Bonus**: Built a `POST /api/lead` Next.js Route Handler to simulate a real enterprise CRM integration. The form captures lead data (name, email, phone, company, area of interest) and handles loading and success UI states gracefully.

6. **Polish & Refinement**: Final pass to ensure section spacing, hover micro-animations (card lift, icon transitions), and visual consistency across the entire page.

---

## 🤖 AI Usage Explanation

As required by the assignment, I utilized AI tools to accelerate the development process. 

**Where AI helped me:**
- **Initial Setup & Scaffolding**: I used Antigravity (Google Deepmind's agentic AI) to scaffold the initial Next.js project and formulate an implementation plan based on a quick scan of the original site's DOM structure.
- **Component Drafting**: Antigravity generated boilerplate React code for the `HeroSection`, `FAQSection` (with the React accordion state), and the `Navbar` to save time typing standard Tailwind classes.
- **Copy & Structure Extraction**: Used AI to analyze the original `enterprise.accredian.com` page and extract the core sections (Stats, Edge framework, course categorizations) into structured arrays suitable for `.map()` rendering.

**What I modified or improved manually:**
- **Tailwind Aesthetic Polish**: Although AI provided boilerplate, I manually reviewed and adjusted margins, color variable injection (`blue-600` for Accredian branding), and visual grouping (like standardizing hover shadows on cards).
- **Component Assembly (Routing)**: I ensured the Next.js `layout.js` had the correct `Inter` Google Font applied across the `<html` root and coordinated the `page.js` file manually to assemble the independent components seamlessly into a single scrollable page without layout breaks. 
- **Lead Capture API Integration**: Wrote the `fetch` logic inside `LeadCaptureModal.jsx` and the handling logic in `/api/lead/route.js` to ensure the form correctly toggles the `isSubmitting` bounds and displays the success UI state seamlessly.

---

## Improvements I would make with more time
1. **Database Integration**: Connect the `/api/lead` route to a real PostgreSQL database (via Prisma) or a CRM tool like HubSpot instead of a mock 800ms delay.
2. **Scroll Animations**: Implement Framer Motion for more sophisticated scroll-triggered layout transitions.
3. **Form Validation**: Add strict client-side evaluation rules using `Zod` and `react-hook-form` to ensure valid phone number sizing, and server-side defensive layers.
4. **Component Isolation**: Create specific sub-components for repeated elements like the `StatsCard` or `FaqItem` to improve unit testing viability.
