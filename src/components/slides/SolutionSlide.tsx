'use client';

import { motion } from 'motion/react';

const features = [
  {
    icon: (
      <svg className="w-5 md:w-8 h-5 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "Missions System",
    description: "Guide users step-by-step through meaningful banking actions",
  },
  {
    icon: (
      <svg className="w-5 md:w-8 h-5 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "Progression Levels",
    description: "Visible advancement that motivates engagement",
  },
  {
    icon: (
      <svg className="w-5 md:w-8 h-5 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Daily Engagement",
    description: "Compelling reasons to return every day",
  },
  {
    icon: (
      <svg className="w-5 md:w-8 h-5 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Earned Rewards",
    description: "Tied to actions, not giveaways",
  },
];

export default function SolutionSlide() {
  return (
    <div className="h-full w-full flex flex-col lg:flex-row items-center justify-center px-4 md:px-12 lg:px-16 py-4 md:py-6 gap-4 md:gap-6">
      {/* Left content */}
      <div className="flex-1 max-w-xl w-full">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#D20000] text-xs md:text-sm font-medium uppercase tracking-widest mb-2 md:mb-4 block">
            The Solution
          </span>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-2 md:mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            A Native <span className="gradient-text">Behavioral Engine</span>
          </h2>
          <p className="text-sm md:text-lg text-[#8A94A6] mb-4 md:mb-6">
            Embedded seamlessly into Alta banka&apos;s app experience, driving engagement through proven behavioral mechanics.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-2 gap-2 md:gap-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="glass rounded-lg p-2 md:p-4 group hover:border-[#D20000]/50 transition-all duration-300"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
            >
              <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg bg-[#D20000]/20 text-[#D20000] flex items-center justify-center mb-2 md:mb-3 group-hover:bg-[#D20000]/30 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-white font-semibold text-xs md:text-base mb-0.5 md:mb-1">{feature.title}</h3>
              <p className="text-[10px] md:text-sm text-[#8A94A6] leading-tight">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right - Phone mockup */}
      <motion.div
        className="flex-1 flex justify-center w-full lg:w-auto"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >
        <div className="phone-mockup w-[180px] sm:w-[200px] md:w-[240px] lg:w-[280px]">
          <div className="phone-screen aspect-[9/19] relative">
            <div className="phone-notch" />

            {/* Mock banking app UI */}
            <div className="p-2 md:p-4 pt-6 md:pt-10">
              {/* Header */}
              <div className="flex items-center justify-between mb-3 md:mb-6">
                <div>
                  <p className="text-[8px] md:text-xs text-[#8A94A6]">Good morning,</p>
                  <p className="text-sm md:text-lg font-semibold text-white">Marko</p>
                </div>
                <div className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-[#D20000] flex items-center justify-center">
                  <span className="text-white font-bold text-[10px] md:text-sm">M</span>
                </div>
              </div>

              {/* Balance card */}
              <div className="glass rounded-xl md:rounded-2xl p-2 md:p-4 mb-2 md:mb-4">
                <p className="text-[8px] md:text-xs text-[#8A94A6] mb-0.5 md:mb-1">Total Balance</p>
                <p className="text-lg md:text-2xl font-bold text-white mb-1 md:mb-2">€12,450</p>
                <div className="flex gap-1 md:gap-2">
                  <div className="flex-1 bg-[#D20000] rounded-md md:rounded-lg p-1 md:p-2 text-center">
                    <span className="text-[#1A1A1A] text-[8px] md:text-xs font-medium">Send</span>
                  </div>
                  <div className="flex-1 bg-[#323232] rounded-md md:rounded-lg p-1 md:p-2 text-center">
                    <span className="text-white text-[8px] md:text-xs font-medium">Top up</span>
                  </div>
                </div>
              </div>

              {/* Engagement widget */}
              <motion.div
                className="rounded-xl md:rounded-2xl p-2 md:p-4 relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #D20000 0%, #262626 100%)' }}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <div className="absolute top-0 right-0 w-12 md:w-20 h-12 md:h-20 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <p className="text-white/80 text-[8px] md:text-xs font-medium mb-0.5 md:mb-1">Your Progress</p>
                <p className="text-white font-bold text-xs md:text-lg mb-1 md:mb-2">Level 3 — Active</p>
                <div className="h-1 md:h-2 bg-white/20 rounded-full overflow-hidden mb-1 md:mb-2">
                  <motion.div
                    className="h-full bg-white rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: '65%' }}
                    transition={{ delay: 1, duration: 0.8 }}
                  />
                </div>
                <div className="flex justify-between">
                  <span className="text-white/80 text-[8px] md:text-xs">650 / 1000 XP</span>
                  <span className="text-white text-[8px] md:text-xs font-medium">35% to Level 4</span>
                </div>
              </motion.div>

              {/* Active mission */}
              <motion.div
                className="mt-2 md:mt-4 glass rounded-lg md:rounded-xl p-2 md:p-3"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.5 }}
              >
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-6 h-6 md:w-10 md:h-10 rounded-md md:rounded-lg bg-[#FFB84D]/20 flex items-center justify-center">
                    <svg className="w-3 h-3 md:w-5 md:h-5 text-[#FFB84D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-[10px] md:text-sm font-medium truncate">Savings Champion</p>
                    <p className="text-[#8A94A6] text-[8px] md:text-xs">2 of 5 steps</p>
                  </div>
                  <span className="text-[#D20000] text-[10px] md:text-sm font-bold">+150</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
