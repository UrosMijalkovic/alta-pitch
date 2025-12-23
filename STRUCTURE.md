# OTP Pitch Presentation Structure

## Project Overview

This is a Next.js 15 presentation built with:
- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Motion (Framer Motion)
- **Fonts**: DM Sans (body) + Playfair Display (headings)

---

## File Structure

```
otp-pitch/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles, animations, utilities
│   │   ├── layout.tsx           # Root layout with fonts
│   │   └── page.tsx             # Main presentation controller
│   │
│   └── components/
│       └── slides/              # All slide components
│           ├── TitleSlide.tsx
│           ├── ChallengeSlide.tsx
│           ├── InsightSlide.tsx
│           ├── SolutionSlide.tsx
│           ├── MissionsSlide.tsx
│           ├── ProgressionSlide.tsx
│           ├── DailyEngagementSlide.tsx
│           ├── LeaderboardsSlide.tsx
│           ├── SolvingChallengesSlide.tsx
│           ├── BankControlSlide.tsx
│           ├── IntegrationSlide.tsx
│           ├── ROISlide.tsx
│           ├── NextStepsSlide.tsx
│           └── TemplateSlide.tsx  # Use this as a starting point
│
├── STRUCTURE.md                 # This file
└── package.json
```

---

## Brand Colors

```css
/* Primary */
--otp-green: #52AE30;
--otp-green-dark: #006837;
--otp-green-light: #7BC962;

/* Backgrounds */
--rich-dark: #0A0F14;
--dark-surface: #121820;
--card-dark: #1A222C;

/* Text */
--off-white: #F8F9FA;
--text-muted: #8A94A6;

/* Accent */
--accent-gold: #C5A572;
```

---

## How to Add a New Slide

### Step 1: Create the Slide Component

Copy `TemplateSlide.tsx` and modify it:

```tsx
// src/components/slides/YourNewSlide.tsx
'use client';

import { motion } from 'motion/react';

export default function YourNewSlide() {
  return (
    <div className="h-full w-full flex flex-col justify-center px-6 md:px-12 lg:px-16 py-6">
      <div className="max-w-6xl mx-auto w-full">
        {/* Your content here */}
      </div>
    </div>
  );
}
```

### Step 2: Register the Slide

In `src/app/page.tsx`, add your slide:

```tsx
// 1. Import it
import YourNewSlide from '@/components/slides/YourNewSlide';

// 2. Add to slides array
const slides = [
  // ... existing slides
  { id: 14, component: YourNewSlide, label: 'Your Slide' },
];
```

---

## Reusable CSS Classes

### Glass Effect (for cards)
```tsx
className="glass rounded-xl p-4"
// Creates frosted glass card with blur effect
```

### Gradient Text
```tsx
className="gradient-text"
// Green to gold gradient text
```

### Green Glow
```tsx
className="green-glow"
// Adds green box-shadow glow
```

### Phone Mockup
```tsx
<div className="phone-mockup w-[240px]">
  <div className="phone-screen aspect-[9/19] relative">
    <div className="phone-notch" />
    {/* Screen content */}
  </div>
</div>
```

### Progress Bar
```tsx
<div className="h-2 bg-[#1A222C] rounded-full overflow-hidden">
  <motion.div
    className="h-full bg-[#52AE30] rounded-full"
    initial={{ width: 0 }}
    animate={{ width: '75%' }}
    transition={{ duration: 0.8 }}
  />
</div>
```

### Timeline
```tsx
<div className="timeline-item mb-4">
  <div className="timeline-dot">1</div>
  <div className="glass rounded-xl p-4 ml-4">
    {/* Content */}
  </div>
</div>
```

---

## Animation Patterns

### Fade In from Top
```tsx
<motion.div
  initial={{ y: -30, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6 }}
>
```

### Fade In from Bottom
```tsx
<motion.div
  initial={{ y: 30, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ delay: 0.3, duration: 0.5 }}
>
```

### Slide In from Left
```tsx
<motion.div
  initial={{ x: -40, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ delay: 0.4, duration: 0.6 }}
>
```

### Scale In
```tsx
<motion.div
  initial={{ scale: 0.9, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ delay: 0.5, duration: 0.4 }}
>
```

### Staggered List Items
```tsx
{items.map((item, index) => (
  <motion.div
    key={item.id}
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
  >
    {/* Item content */}
  </motion.div>
))}
```

### Animated Progress Bar
```tsx
<motion.div
  className="h-full bg-[#52AE30] rounded-full"
  initial={{ width: 0 }}
  animate={{ width: `${percentage}%` }}
  transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
/>
```

### Pulsing Element
```tsx
<motion.div
  animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
  transition={{ repeat: Infinity, duration: 2 }}
/>
```

---

## Slide Layout Patterns

### Standard Centered Layout
```tsx
<div className="h-full w-full flex flex-col justify-center px-6 md:px-12 lg:px-16 py-6">
  <div className="max-w-6xl mx-auto w-full">
    {/* Header */}
    <motion.div className="mb-6 text-center">
      <span className="text-[#52AE30] text-sm font-medium uppercase tracking-widest mb-4 block">
        Section Label
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-2"
          style={{ fontFamily: "'Playfair Display', serif" }}>
        Main <span className="gradient-text">Title</span>
      </h2>
      <p className="text-lg text-[#8A94A6] max-w-2xl mx-auto">
        Subtitle description text
      </p>
    </motion.div>

    {/* Content */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* Cards */}
    </div>
  </div>
</div>
```

### Two Column Layout (Content + Visual)
```tsx
<div className="h-full w-full flex flex-col lg:flex-row items-center justify-center px-6 md:px-12 lg:px-16 py-6 gap-6">
  {/* Left: Content */}
  <div className="flex-1 max-w-xl">
    {/* Text and cards */}
  </div>

  {/* Right: Visual (phone mockup, diagram, etc.) */}
  <div className="flex-1 flex justify-center">
    {/* Visual element */}
  </div>
</div>
```

---

## Common Components

### Stat Card
```tsx
<div className="glass rounded-xl p-4">
  <p className="text-xs text-[#8A94A6] mb-1">Label</p>
  <p className="text-2xl font-bold text-[#52AE30]">+40%</p>
  <p className="text-xs text-[#8A94A6] mt-1">Description</p>
</div>
```

### Feature Card
```tsx
<div className="glass rounded-xl p-4 hover:border-[#52AE30]/50 transition-all">
  <div className="w-10 h-10 rounded-lg bg-[#52AE30]/20 text-[#52AE30] flex items-center justify-center mb-3">
    {/* Icon */}
  </div>
  <h3 className="text-white font-semibold mb-1">Title</h3>
  <p className="text-sm text-[#8A94A6]">Description</p>
</div>
```

### Badge/Pill
```tsx
<span className="px-3 py-1 rounded-full text-xs font-medium bg-[#52AE30]/20 text-[#52AE30]">
  Label
</span>
```

### Insight Box
```tsx
<div className="inline-flex items-center gap-3 glass rounded-full px-6 py-3">
  <div className="w-2 h-2 rounded-full bg-[#52AE30] animate-pulse" />
  <p className="text-[#8A94A6]">
    Key insight with <span className="text-[#52AE30] font-medium">highlighted text</span>
  </p>
</div>
```

---

## Keyboard Navigation

Built-in keyboard controls:
- **→ / ↓ / Space**: Next slide
- **← / ↑**: Previous slide
- **Home**: First slide
- **End**: Last slide

---

## Running the Project

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

---

## Tips for Extending

1. **Keep slides self-contained**: Each slide should be a single component
2. **Use consistent spacing**: `px-6 md:px-12 lg:px-16 py-6` for outer, `gap-4` for grids
3. **Stagger animations**: Use `delay: 0.2 + index * 0.1` for lists
4. **Test viewport fit**: Slides should fit without scrolling on 1080p screens
5. **Use the color palette**: Stick to the defined brand colors for consistency
