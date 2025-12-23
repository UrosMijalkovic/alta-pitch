'use client';

import { motion } from 'motion/react';

/**
 * TEMPLATE SLIDE
 * Copy this file and rename it to create new slides.
 *
 * Usage:
 * 1. Copy this file: cp TemplateSlide.tsx YourNewSlide.tsx
 * 2. Rename the component function
 * 3. Add to page.tsx slides array
 * 4. Customize content below
 */

// Example data - replace with your own
const exampleItems = [
  {
    title: "Item One",
    description: "Description for the first item",
    stat: "+25%",
    color: "#52AE30",
  },
  {
    title: "Item Two",
    description: "Description for the second item",
    stat: "+40%",
    color: "#3498DB",
  },
  {
    title: "Item Three",
    description: "Description for the third item",
    stat: "+60%",
    color: "#9B59B6",
  },
  {
    title: "Item Four",
    description: "Description for the fourth item",
    stat: "+80%",
    color: "#C5A572",
  },
];

export default function TemplateSlide() {
  return (
    <div className="h-full w-full flex flex-col justify-center px-6 md:px-12 lg:px-16 py-6">
      <div className="max-w-6xl mx-auto w-full">

        {/* ============================================
            HEADER SECTION
            - Section label (small, green, uppercase)
            - Main title with gradient text
            - Subtitle description
        ============================================ */}
        <motion.div
          className="mb-6 text-center"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Label */}
          <span className="text-[#52AE30] text-sm font-medium uppercase tracking-widest mb-4 block">
            Section Label
          </span>

          {/* Main Title - use gradient-text class for highlighted words */}
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Main Title with <span className="gradient-text">Highlight</span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-[#8A94A6] max-w-2xl mx-auto">
            A brief description or subtitle that explains the slide content
          </p>
        </motion.div>

        {/* ============================================
            CONTENT SECTION
            Options:
            - Grid of cards (shown below)
            - Two-column layout
            - Single centered content
            - Timeline
            - Table
        ============================================ */}

        {/* Example: 4-column grid of cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {exampleItems.map((item, index) => (
            <motion.div
              key={item.title}
              className="glass rounded-xl p-4 relative overflow-hidden group hover:border-[#52AE30]/50 transition-all"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
            >
              {/* Background glow effect */}
              <div
                className="absolute top-0 right-0 w-20 h-20 rounded-full blur-2xl opacity-10 group-hover:opacity-20 transition-opacity"
                style={{ backgroundColor: item.color }}
              />

              {/* Card content */}
              <div className="relative z-10">
                {/* Icon placeholder - replace with actual icon */}
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                  style={{ backgroundColor: `${item.color}20`, color: item.color }}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                {/* Title */}
                <h3 className="text-white font-semibold mb-1">{item.title}</h3>

                {/* Description */}
                <p className="text-sm text-[#8A94A6] mb-3">{item.description}</p>

                {/* Stat */}
                <div className="pt-3 border-t border-white/5">
                  <span className="text-2xl font-bold" style={{ color: item.color }}>
                    {item.stat}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ============================================
            BOTTOM SECTION (Optional)
            - Call to action
            - Key insight
            - Additional context
        ============================================ */}
        <motion.div
          className="mt-6 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-3 glass rounded-full px-6 py-3">
            <div className="w-2 h-2 rounded-full bg-[#52AE30] animate-pulse" />
            <p className="text-[#8A94A6]">
              Key insight or call-to-action with{' '}
              <span className="text-[#52AE30] font-medium">highlighted text</span>
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}


/* ============================================
   ALTERNATIVE LAYOUTS
   Uncomment and modify as needed
============================================ */

/*
// TWO COLUMN LAYOUT (Content + Visual)
export default function TwoColumnSlide() {
  return (
    <div className="h-full w-full flex flex-col lg:flex-row items-center justify-center px-6 md:px-12 lg:px-16 py-6 gap-6">
      {/* Left: Content *}
      <div className="flex-1 max-w-xl">
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#52AE30] text-sm font-medium uppercase tracking-widest mb-4 block">
            Section
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}>
            Title Here
          </h2>
          <p className="text-lg text-[#8A94A6] mb-6">
            Description text
          </p>
        </motion.div>

        {/* Feature list or cards *}
        <div className="space-y-3">
          {/* Items here *}
        </div>
      </div>

      {/* Right: Visual *}
      <motion.div
        className="flex-1 flex justify-center"
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {/* Phone mockup, diagram, image, etc. *}
        <div className="phone-mockup w-[240px]">
          <div className="phone-screen aspect-[9/19] relative">
            <div className="phone-notch" />
            {/* Screen content *}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
*/

/*
// COMPARISON TABLE LAYOUT
export default function ComparisonSlide() {
  const rows = [
    { problem: "Problem 1", solution: "Solution 1" },
    { problem: "Problem 2", solution: "Solution 2" },
  ];

  return (
    <div className="h-full w-full flex flex-col justify-center px-6 md:px-12 lg:px-16 py-6">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header *}

        {/* Table *}
        <div className="space-y-3">
          {rows.map((row, index) => (
            <motion.div
              key={index}
              className="glass rounded-xl overflow-hidden"
              initial={{ x: index % 2 === 0 ? -30 : 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
            >
              <div className="flex flex-col md:flex-row">
                <div className="flex-1 p-4 border-b md:border-b-0 md:border-r border-white/5">
                  <p className="text-white">{row.problem}</p>
                </div>
                <div className="flex-1 p-4 bg-[#52AE30]/5">
                  <p className="text-white">{row.solution}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
*/
