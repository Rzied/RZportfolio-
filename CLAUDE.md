# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Portfolio personnel "Mind-Blowing" pour Zied RJEB - Développeur Full-Stack & Consultant RPA.
Site vitrine moderne avec animations, mettant en avant les compétences en développement web et l'expertise RPA.

## Tech Stack

- **Framework**: Next.js 16+ (App Router) avec TypeScript
- **Styling**: Tailwind CSS (CSS variables pour theming)
- **Animations**: Framer Motion
- **Icons**: Lucide React, SVG custom

## Commands

```bash
# Development
cd portfolio
npm run dev          # Start dev server on localhost:3000
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Dependencies
npm install          # Install dependencies
```

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page (main portfolio)
│   └── globals.css         # Global styles + theme variables
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Navigation with scroll effects
│   │   └── Footer.tsx      # Footer with scroll-to-top
│   └── sections/
│       ├── Hero.tsx        # Hero with typing animation
│       ├── About.tsx       # About section + stats
│       ├── Skills.tsx      # Skills with progress bars
│       ├── Projects.tsx    # Projects (Maison Janah featured)
│       ├── RPA.tsx         # RPA consulting section
│       ├── Experience.tsx  # Timeline experience
│       └── Contact.tsx     # Contact form
└── lib/
    └── utils.ts            # Utility functions (cn)
```

## Key Features

1. **Hero Section**: Typing animation cycling through roles, animated particles background
2. **Projects**: Maison Janah highlighted as featured project with detailed description
3. **RPA Section**: Dedicated section showcasing RPA consulting expertise with animated progress circles
4. **Experience Timeline**: Expandable timeline with company details and achievements
5. **Contact Form**: Working form with validation and success state

## Design Patterns

- Client components with `'use client'` directive for interactivity
- Framer Motion for scroll-triggered animations (`useInView`)
- CSS variables for theming (light/dark mode support)
- Gradient accents using `bg-gradient-to-r` from primary to purple-600
- Consistent spacing with `container mx-auto px-4`

## Content Updates

To update portfolio content, edit the data arrays in each section component:
- Hero roles: `components/sections/Hero.tsx`
- About highlights: `components/sections/About.tsx`
- Skills: `components/sections/Skills.tsx`
- Projects: `components/sections/Projects.tsx`
- Experience: `components/sections/Experience.tsx`

## Deployment

The site is ready for deployment on Vercel, Netlify, or any Node.js hosting platform.
Run `npm run build` to create production build.
