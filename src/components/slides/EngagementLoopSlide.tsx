'use client';

import { motion } from 'motion/react';
import { useState } from 'react';

const dailyMissionExamples = ['Check balance', 'Make a payment', 'Login daily'];
const journeyMissionExamples = ['Become Salary Client', 'Activate card', 'Refer a friend'];
const shopExamples = ['Discounts', 'Partner rewards', 'Exclusive offers'];
const levelUpExamples = ['Status tiers', 'Unlocks', 'Tier rewards'];

export default function EngagementLoopSlide() {
  const [expandedBox, setExpandedBox] = useState<string | null>(null);

  const toggleBox = (box: string) => {
    setExpandedBox(expandedBox === box ? null : box);
  };

  return (
    <div className="h-full w-full flex flex-col justify-center px-3 sm:px-4 md:px-8 lg:px-12 py-2 sm:py-3 md:py-4">
      <div className="max-w-4xl mx-auto w-full">
        {/* Header */}
        <motion.div
          className="mb-2 sm:mb-2 md:mb-3 text-center"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#D20000] text-[10px] sm:text-xs md:text-sm font-medium uppercase tracking-widest mb-1 md:mb-2 block">
            Core Mechanics
          </span>
          <h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-0.5 md:mb-1"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            The Engagement <span className="gradient-text">Loop</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#8A94A6] max-w-2xl mx-auto">
            How daily actions become lasting loyalty
          </p>
        </motion.div>

        {/* Loop Diagram */}
        <div className="relative glass rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-4 lg:p-5">
          {/* SVG Loop Line (background) - hidden on mobile */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
            viewBox="0 0 400 450"
            preserveAspectRatio="xMidYMid meet"
          >
            <motion.path
              d="M 200 420
                 C 50 420, 20 300, 20 200
                 C 20 100, 50 30, 200 30"
              fill="none"
              stroke="url(#loopGradient)"
              strokeWidth="2"
              strokeDasharray="8 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: 1,
                opacity: 1,
                strokeDashoffset: [0, -24]
              }}
              transition={{
                pathLength: { delay: 1.3, duration: 0.8 },
                opacity: { delay: 1.3, duration: 0.3 },
                strokeDashoffset: {
                  delay: 2.1,
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
            />
            <defs>
              <linearGradient id="loopGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#D20000" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#FF6666" stopOpacity="0.4" />
              </linearGradient>
            </defs>
          </svg>

          {/* Mission Types Row */}
          <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 mb-1.5 sm:mb-2 md:mb-2">
            {/* Daily Missions */}
            <motion.div
              className="relative flex-1 max-w-[160px] sm:max-w-[180px] md:max-w-[200px]"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              onClick={() => toggleBox('daily')}
              onMouseEnter={() => window.innerWidth >= 768 && setExpandedBox('daily')}
              onMouseLeave={() => window.innerWidth >= 768 && setExpandedBox(null)}
            >
              <div className={`glass rounded-md sm:rounded-lg md:rounded-xl p-2 sm:p-2.5 md:p-3 border transition-all cursor-pointer ${expandedBox === 'daily' ? 'border-[#D20000]' : 'border-[#D20000]/30 hover:border-[#D20000]'}`}>
                <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5 sm:mb-1 md:mb-1">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-md sm:rounded-lg bg-[#D20000]/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-[#D20000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold text-[10px] sm:text-xs md:text-sm leading-tight">Daily Missions</h3>
                </div>
                <p className="text-[8px] sm:text-[9px] md:text-xs text-[#8A94A6] leading-tight">Short-term tasks that build habits</p>
              </div>

              {/* Expand on tap/hover */}
              <motion.div
                className="absolute top-full left-0 right-0 mt-1 glass rounded-md sm:rounded-lg p-1.5 sm:p-2 md:p-3 z-20"
                initial={{ opacity: 0, y: -5, scale: 0.95 }}
                animate={{
                  opacity: expandedBox === 'daily' ? 1 : 0,
                  y: expandedBox === 'daily' ? 0 : -5,
                  scale: expandedBox === 'daily' ? 1 : 0.95
                }}
                style={{ pointerEvents: expandedBox === 'daily' ? 'auto' : 'none' }}
              >
                {dailyMissionExamples.map((example, i) => (
                  <div key={i} className="flex items-center gap-1.5 py-0.5">
                    <div className="w-1 h-1 rounded-full bg-[#D20000] flex-shrink-0" />
                    <span className="text-[8px] sm:text-[9px] md:text-xs text-white">{example}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Journey Missions */}
            <motion.div
              className="relative flex-1 max-w-[160px] sm:max-w-[180px] md:max-w-[200px]"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              onClick={() => toggleBox('journey')}
              onMouseEnter={() => window.innerWidth >= 768 && setExpandedBox('journey')}
              onMouseLeave={() => window.innerWidth >= 768 && setExpandedBox(null)}
            >
              <div className={`glass rounded-md sm:rounded-lg md:rounded-xl p-2 sm:p-2.5 md:p-3 border transition-all cursor-pointer ${expandedBox === 'journey' ? 'border-[#D20000]' : 'border-[#D20000]/30 hover:border-[#D20000]'}`}>
                <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5 sm:mb-1 md:mb-1">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-md sm:rounded-lg bg-[#D20000]/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-[#D20000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold text-[10px] sm:text-xs md:text-sm leading-tight">Journey Missions</h3>
                </div>
                <p className="text-[8px] sm:text-[9px] md:text-xs text-[#8A94A6] leading-tight">Long-term goals for adoption</p>
              </div>

              {/* Expand on tap/hover */}
              <motion.div
                className="absolute top-full left-0 right-0 mt-1 glass rounded-md sm:rounded-lg p-1.5 sm:p-2 md:p-3 z-20"
                initial={{ opacity: 0, y: -5, scale: 0.95 }}
                animate={{
                  opacity: expandedBox === 'journey' ? 1 : 0,
                  y: expandedBox === 'journey' ? 0 : -5,
                  scale: expandedBox === 'journey' ? 1 : 0.95
                }}
                style={{ pointerEvents: expandedBox === 'journey' ? 'auto' : 'none' }}
              >
                {journeyMissionExamples.map((example, i) => (
                  <div key={i} className="flex items-center gap-1.5 py-0.5">
                    <div className="w-1 h-1 rounded-full bg-[#D20000] flex-shrink-0" />
                    <span className="text-[8px] sm:text-[9px] md:text-xs text-white">{example}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Arrow down */}
          <motion.div
            className="flex justify-center mb-1 sm:mb-1.5 md:mb-1.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#D20000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>

          {/* Earn Currency + XP */}
          <motion.div
            className="flex justify-center mb-1 sm:mb-1.5 md:mb-1.5"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            <div className="glass rounded-md sm:rounded-lg md:rounded-xl p-2 sm:p-2.5 md:p-3 border-2 border-[#D20000] bg-[#D20000]/10 green-glow">
              <div className="flex items-center gap-2 sm:gap-2 md:gap-3">
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-[#D20000]/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-4 md:h-4 text-[#D20000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <h3 className="text-white font-bold text-xs sm:text-sm md:text-sm">Earn Currency + XP</h3>
                  <p className="text-[8px] sm:text-[9px] md:text-xs text-[#8A94A6]">Every action rewards progress</p>
                </div>
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-[#D20000]/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-4 md:h-4 text-[#D20000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Split arrows */}
          <motion.div
            className="flex justify-center gap-10 sm:gap-14 md:gap-20 mb-1 sm:mb-1.5 md:mb-1.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.3 }}
          >
            <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 text-[#D20000] -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 text-[#D20000] rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>

          {/* Shop and Level Up Row */}
          <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 mb-1 sm:mb-1.5 md:mb-1.5">
            {/* Shop */}
            <motion.div
              className="relative"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              onClick={() => toggleBox('shop')}
              onMouseEnter={() => window.innerWidth >= 768 && setExpandedBox('shop')}
              onMouseLeave={() => window.innerWidth >= 768 && setExpandedBox(null)}
            >
              <div className={`glass rounded-md sm:rounded-lg md:rounded-xl p-2 sm:p-2.5 md:p-3 border transition-all cursor-pointer text-center min-w-[80px] sm:min-w-[100px] md:min-w-[120px] ${expandedBox === 'shop' ? 'border-[#D20000]' : 'border-[#D20000]/30 hover:border-[#D20000]'}`}>
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-7 md:h-7 rounded-md sm:rounded-lg bg-[#D20000]/20 flex items-center justify-center mx-auto mb-1 sm:mb-1 md:mb-1">
                  <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-[#D20000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-[10px] sm:text-xs md:text-xs">Spend in Shop</h3>
              </div>

              {/* Expand */}
              <motion.div
                className="absolute top-full left-0 right-0 mt-1 glass rounded-md sm:rounded-lg p-1.5 sm:p-2 md:p-3 z-20"
                initial={{ opacity: 0, y: -5, scale: 0.95 }}
                animate={{
                  opacity: expandedBox === 'shop' ? 1 : 0,
                  y: expandedBox === 'shop' ? 0 : -5,
                  scale: expandedBox === 'shop' ? 1 : 0.95
                }}
                style={{ pointerEvents: expandedBox === 'shop' ? 'auto' : 'none' }}
              >
                {shopExamples.map((example, i) => (
                  <div key={i} className="flex items-center gap-1.5 py-0.5">
                    <div className="w-1 h-1 rounded-full bg-[#D20000] flex-shrink-0" />
                    <span className="text-[8px] sm:text-[9px] md:text-xs text-white">{example}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Level Up */}
            <motion.div
              className="relative"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              onClick={() => toggleBox('levelup')}
              onMouseEnter={() => window.innerWidth >= 768 && setExpandedBox('levelup')}
              onMouseLeave={() => window.innerWidth >= 768 && setExpandedBox(null)}
            >
              <div className={`glass rounded-md sm:rounded-lg md:rounded-xl p-2 sm:p-2.5 md:p-3 border transition-all cursor-pointer text-center min-w-[80px] sm:min-w-[100px] md:min-w-[120px] ${expandedBox === 'levelup' ? 'border-[#D20000]' : 'border-[#D20000]/30 hover:border-[#D20000]'}`}>
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-7 md:h-7 rounded-md sm:rounded-lg bg-[#D20000]/20 flex items-center justify-center mx-auto mb-1 sm:mb-1 md:mb-1">
                  <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-[#D20000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-[10px] sm:text-xs md:text-xs">Level Up</h3>
              </div>

              {/* Expand */}
              <motion.div
                className="absolute top-full left-0 right-0 mt-1 glass rounded-md sm:rounded-lg p-1.5 sm:p-2 md:p-3 z-20"
                initial={{ opacity: 0, y: -5, scale: 0.95 }}
                animate={{
                  opacity: expandedBox === 'levelup' ? 1 : 0,
                  y: expandedBox === 'levelup' ? 0 : -5,
                  scale: expandedBox === 'levelup' ? 1 : 0.95
                }}
                style={{ pointerEvents: expandedBox === 'levelup' ? 'auto' : 'none' }}
              >
                {levelUpExamples.map((example, i) => (
                  <div key={i} className="flex items-center gap-1.5 py-0.5">
                    <div className="w-1 h-1 rounded-full bg-[#D20000] flex-shrink-0" />
                    <span className="text-[8px] sm:text-[9px] md:text-xs text-white">{example}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Merge arrows */}
          <motion.div
            className="flex justify-center gap-10 sm:gap-14 md:gap-20 mb-1 sm:mb-1.5 md:mb-1.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.3 }}
          >
            <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 text-[#D20000] rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 text-[#D20000] -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>

          {/* Rewards */}
          <motion.div
            className="flex justify-center mb-1 sm:mb-1.5 md:mb-1.5"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.4 }}
          >
            <div className="glass rounded-md sm:rounded-lg md:rounded-xl p-2 sm:p-2.5 md:p-3 border border-[#FFD700]/50 bg-gradient-to-r from-[#FFD700]/10 to-[#FFA500]/10">
              <div className="flex items-center gap-2 md:gap-2">
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-7 md:h-7 rounded-full bg-[#FFD700]/20 flex items-center justify-center">
                  <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-[#FFD700]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <h3 className="text-[#FFD700] font-bold text-xs sm:text-sm md:text-sm">REWARDS</h3>
              </div>
            </div>
          </motion.div>

          {/* Arrow down to Motivation */}
          <motion.div
            className="flex justify-center mb-1 sm:mb-1.5 md:mb-1.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.3 }}
          >
            <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 text-[#D20000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>

          {/* Motivation */}
          <motion.div
            className="flex justify-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.4 }}
          >
            <div className="glass rounded-md sm:rounded-lg md:rounded-xl p-2 sm:p-2.5 md:p-3 border border-[#D20000]/50 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#D20000]/0 via-[#D20000]/20 to-[#D20000]/0"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              />
              <div className="flex items-center gap-2 md:gap-2 relative z-10">
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-[#D20000]/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-4 md:h-4 text-[#D20000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <h3 className="text-white font-bold text-xs sm:text-sm md:text-sm">MOTIVATION</h3>
                  <p className="text-[8px] sm:text-[9px] md:text-xs text-[#8A94A6]">Want more rewards & status</p>
                </div>
                <motion.div
                  className="flex-shrink-0"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 text-[#D20000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
                  </svg>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Loop indicator - desktop only */}
          <motion.div
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <div className="flex flex-col items-center gap-1">
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <svg className="w-4 h-4 text-[#D20000]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </motion.div>
              <span className="text-[10px] text-[#8A94A6] writing-vertical">LOOP</span>
            </div>
          </motion.div>

          {/* Mobile loop indicator */}
          <motion.div
            className="flex md:hidden justify-center mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
          >
            <div className="flex items-center gap-1.5 text-[#8A94A6]">
              <motion.svg
                className="w-3 h-3 text-[#D20000]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </motion.svg>
              <span className="text-[9px]">Continuous loop</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom callout */}
        <motion.div
          className="mt-2 sm:mt-2 md:mt-3 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.5 }}
        >
          <p className="text-sm sm:text-base md:text-lg text-white font-medium">
            Sustained engagement = <span className="text-[#D20000] font-bold">Loyalty</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
