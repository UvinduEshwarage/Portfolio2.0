# Uvindu Nethmina Eshwarage — Portfolio

A sleek, high-performance portfolio built with **Next.js 14**, **Tailwind CSS**, and modern web design principles.

## Design System

- **Color:** Dark mono base (`#080808`) with acid yellow accents (`#e8ff47`)
- **Typography:** Bebas Neue (display), DM Sans (body), Space Mono (labels/code)
- **Aesthetic:** Industrial / editorial — sharp, intentional, memorable

## Features

- ✅ Animated typewriter hero with role cycling
- ✅ Filterable projects grid with hover effects
- ✅ Skills section with marquee strip
- ✅ Contact form with send animation
- ✅ Mobile-responsive with hamburger menu
- ✅ Noise texture overlay for depth
- ✅ Scroll-aware sticky navbar
- ✅ CSS-only animations with staggered reveals
- ✅ Custom scrollbar & text selection styling

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Add Your Photo
Replace the placeholder in `components/Hero.jsx` with:
```jsx
import Image from 'next/image'
// ...
<Image src="/your-photo.jpg" alt="Uvindu" fill className="object-cover" />
```
Place the image in the `/public` folder.

### Update Projects
Edit the `projects` array in `components/Projects.jsx` with your real project data including GitHub/demo links.

### Download CV
Add your CV as `/public/cv.pdf` — the download button is already wired up.

### Social Links
Update href values in `components/Footer.jsx` and `components/Contact.jsx` with your real profiles.

## Deployment

Deploy to Vercel (recommended):
```bash
npx vercel
```

Or build for production:
```bash
npm run build
npm start
```

## Tech Stack
- Next.js 14 (App Router)
- React 18
- Tailwind CSS 3
- Google Fonts (Bebas Neue, DM Sans, Space Mono)
