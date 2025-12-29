'use client';

import { motion } from 'motion/react';

const painPoints = [
  {
    icon: (
      <svg className="w-5 md:w-8 h-5 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
      </svg>
    ),
    title: "Acquisition ≠ Activation",
    description: "App installs don't become daily banking habits",
    stat: "~90%",
    statLabel: "inactive after 30 days*",
    color: "#FF6B6B",
  },
  {
    icon: (
      <svg className="w-5 md:w-8 h-5 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Salary Migration Bottleneck",
    description: "The #1 KPI that converts users to high-LTV customers",
    stat: "<15%",
    statLabel: "salary migration rate",
    color: "#FFB84D",
  },
  {
    icon: (
      <svg className="w-5 md:w-8 h-5 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Weak Daily Engagement",
    description: "Open when needed, not daily",
    stat: "Low",
    statLabel: "DAU vs MAU ratio*",
    color: "#D20000",
  },
  {
    icon: (
      <svg className="w-5 md:w-8 h-5 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: "Passive Feature Discovery",
    description: "Users don't find the features you've built",
    stat: "~94%",
    statLabel: "features underused*",
    color: "#9B59B6",
  },
  {
    icon: (
      <svg className="w-5 md:w-8 h-5 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Promo Dependency",
    description: "Retention is rented, not owned",
    stat: "Sharp",
    statLabel: "drop-off post-promo*",
    color: "#3498DB",
  },
];

export default function ChallengeSlide() {
  return (
    <div className="h-full w-full flex flex-col justify-center px-4 md:px-12 lg:px-16 py-4 md:py-8">
      {/* Header */}
      <motion.div
        className="mb-4 md:mb-6"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-[#D20000] text-xs md:text-sm font-medium uppercase tracking-widest mb-2 md:mb-4 block">
          The Challenge
        </span>
        <h2
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          The Real Problem
          <br />
          <span className="text-[#8A94A6]">Isn&apos;t Acquisition</span>
        </h2>
      </motion.div>

      {/* Pain points grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-4">
        {painPoints.map((point, index) => (
          <motion.div
            key={point.title}
            className="glass rounded-lg md:rounded-xl p-2 md:p-4 relative overflow-hidden group hover:border-[#D20000]/50 transition-all duration-300 flex flex-col"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
          >
            {/* Background accent */}
            <div
              className="absolute top-0 right-0 w-16 md:w-24 h-16 md:h-24 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity"
              style={{ backgroundColor: point.color }}
            />

            {/* Content wrapper */}
            <div className="flex-1">
              {/* Icon */}
              <div
                className="w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center mb-2 md:mb-3"
                style={{ backgroundColor: `${point.color}20`, color: point.color }}
              >
                {point.icon}
              </div>

              {/* Title */}
              <h3 className="text-xs md:text-sm font-semibold text-white mb-0.5 md:mb-1 leading-tight">
                {point.title}
              </h3>

              {/* Description - hidden on small mobile */}
              <p className="hidden sm:block text-[10px] md:text-xs text-[#8A94A6] leading-relaxed min-h-[2.5rem] md:min-h-[3rem]">
                {point.description}
              </p>
            </div>

            {/* Stat - always at bottom */}
            <div className="pt-2 md:pt-3 border-t border-white/5 mt-auto">
              <div className="flex items-baseline gap-1 md:gap-2">
                <span
                  className="text-xl md:text-2xl font-bold"
                  style={{ color: point.color }}
                >
                  {point.stat}
                </span>
                <span className="text-[8px] md:text-xs text-[#8A94A6] hidden sm:inline">{point.statLabel}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom insight */}
      <motion.div
        className="mt-4 md:mt-6 text-center"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <p className="text-sm md:text-lg text-[#8A94A6] max-w-3xl mx-auto">
          Alta banka&apos;s pain is not acquisition—it&apos;s turning users into{' '}
          <span className="text-[#D20000] font-medium">habitual, high-value customers</span>.
        </p>
      </motion.div>

      {/* Sources footnote */}
      <motion.div
        className="mt-3 md:mt-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <p className="text-[8px] md:text-[10px] text-[#8A94A6]/60 max-w-4xl mx-auto">
          *Sources: UXCam, Business of Apps, Sendbird mobile retention benchmarks 2025; Pendo feature adoption analysis; OneSignal engagement metrics
        </p>
      </motion.div>
    </div>
  );
}
