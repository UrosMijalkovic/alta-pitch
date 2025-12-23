'use client';

import { motion } from 'motion/react';

const painPoints = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
      </svg>
    ),
    title: "Acquisition ≠ Activation",
    description: "App installs don't become daily banking habits",
    stat: "70%",
    statLabel: "users inactive after 30 days",
    color: "#FF6B6B",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Weak Daily Engagement",
    description: "\"Open when needed, not daily\" - no habit formation",
    stat: "2.3x",
    statLabel: "monthly vs weekly opens",
    color: "#52AE30",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: "Passive Feature Discovery",
    description: "Users don't find the features you've built",
    stat: "40%",
    statLabel: "features never used",
    color: "#9B59B6",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Promo Dependency",
    description: "Retention is rented through campaigns, not owned",
    stat: "-45%",
    statLabel: "engagement post-promo",
    color: "#3498DB",
  },
];

export default function ChallengeSlide() {
  return (
    <div className="h-full w-full flex flex-col justify-center px-6 md:px-12 lg:px-16 py-8">
      {/* Header */}
      <motion.div
        className="mb-6"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-[#52AE30] text-sm font-medium uppercase tracking-widest mb-4 block">
          The Challenge
        </span>
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          The Real Problem
          <br />
          <span className="text-[#8A94A6]">Isn&apos;t Acquisition</span>
        </h2>
      </motion.div>

      {/* Pain points grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {painPoints.map((point, index) => (
          <motion.div
            key={point.title}
            className="glass rounded-xl p-4 relative overflow-hidden group hover:border-[#52AE30]/50 transition-all duration-300"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
          >
            {/* Background accent */}
            <div
              className="absolute top-0 right-0 w-24 h-24 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity"
              style={{ backgroundColor: point.color }}
            />

            {/* Icon */}
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
              style={{ backgroundColor: `${point.color}20`, color: point.color }}
            >
              {point.icon}
            </div>

            {/* Title */}
            <h3 className="text-sm font-semibold text-white mb-1 leading-tight">
              {point.title}
            </h3>

            {/* Description */}
            <p className="text-xs text-[#8A94A6] mb-3 leading-relaxed">
              {point.description}
            </p>

            {/* Stat */}
            <div className="pt-3 border-t border-white/5">
              <div className="flex items-baseline gap-2">
                <span
                  className="text-2xl font-bold"
                  style={{ color: point.color }}
                >
                  {point.stat}
                </span>
                <span className="text-xs text-[#8A94A6]">{point.statLabel}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom insight */}
      <motion.div
        className="mt-6 text-center"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <p className="text-lg text-[#8A94A6] max-w-3xl mx-auto">
          OTP&apos;s pain is not acquisition—it&apos;s turning users into{' '}
          <span className="text-[#52AE30] font-medium">habitual, high-value customers</span>.
        </p>
      </motion.div>
    </div>
  );
}
