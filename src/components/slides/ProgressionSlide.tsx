'use client';

import { motion } from 'motion/react';

const levels = [
  { name: 'Starter', xp: 0, color: '#8A94A6', benefits: ['Basic rewards', 'Standard missions'] },
  { name: 'Active', xp: 500, color: '#52AE30', benefits: ['5% bonus XP', 'Daily challenges'] },
  { name: 'Engaged', xp: 1500, color: '#3498DB', benefits: ['10% bonus XP', 'Premium missions', 'Priority support'] },
  { name: 'Premium', xp: 3500, color: '#9B59B6', benefits: ['15% bonus XP', 'Exclusive rewards', 'Early access'] },
  { name: 'Elite', xp: 7500, color: '#C5A572', benefits: ['20% bonus XP', 'VIP status', 'All benefits'] },
];

const currentLevel = 2;
const currentXP = 2100;
const nextLevelXP = 3500;

export default function ProgressionSlide() {
  const progressPercent = ((currentXP - levels[currentLevel].xp) / (nextLevelXP - levels[currentLevel].xp)) * 100;

  return (
    <div className="h-full w-full flex flex-col justify-center px-6 md:px-12 lg:px-16 py-6">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <motion.div
          className="mb-6 text-center"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#52AE30] text-sm font-medium uppercase tracking-widest mb-4 block">
            Progression System
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Make Growth <span className="gradient-text">Visible</span>
          </h2>
          <p className="text-xl text-[#8A94A6] max-w-2xl mx-auto">
            Clear levels and meaningful milestones drive continued engagement
          </p>
        </motion.div>

        {/* Level progression visual */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="relative">
            {/* Progress track */}
            <div className="h-3 bg-[#1A222C] rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${levels[0].color}, ${levels[currentLevel].color})`,
                }}
                initial={{ width: 0 }}
                animate={{ width: `${(currentLevel / (levels.length - 1)) * 100 + (progressPercent / (levels.length - 1))}%` }}
                transition={{ delay: 0.5, duration: 1.2, ease: 'easeOut' }}
              />
            </div>

            {/* Level markers */}
            <div className="flex justify-between mt-6">
              {levels.map((level, index) => (
                <motion.div
                  key={level.name}
                  className="flex flex-col items-center relative"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                >
                  {/* Level indicator */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center -mt-9 relative z-10 border-4 border-[#0A0F14] ${
                      index <= currentLevel ? '' : 'opacity-50'
                    }`}
                    style={{ backgroundColor: level.color }}
                  >
                    {index < currentLevel && (
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                    {index === currentLevel && (
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{ backgroundColor: level.color }}
                        animate={{ scale: [1, 1.4, 1], opacity: [1, 0, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                      />
                    )}
                  </div>

                  {/* Level name */}
                  <span
                    className={`text-sm font-semibold mt-3 ${index === currentLevel ? 'text-white' : 'text-[#8A94A6]'}`}
                    style={{ color: index <= currentLevel ? level.color : undefined }}
                  >
                    {level.name}
                  </span>

                  {/* XP requirement */}
                  <span className="text-xs text-[#8A94A6] mt-1">
                    {level.xp.toLocaleString()} XP
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Current progress card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Progress card */}
          <motion.div
            className="glass rounded-xl p-4 relative overflow-hidden"
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div
              className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl"
              style={{ backgroundColor: levels[currentLevel].color, opacity: 0.1 }}
            />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-[#8A94A6] text-sm">Current Level</p>
                  <p className="text-2xl font-bold" style={{ color: levels[currentLevel].color }}>
                    {levels[currentLevel].name}
                  </p>
                </div>
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${levels[currentLevel].color}20` }}
                >
                  <span className="text-2xl font-bold" style={{ color: levels[currentLevel].color }}>
                    {currentLevel + 1}
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-white font-medium">{currentXP.toLocaleString()} XP</span>
                  <span className="text-[#8A94A6]">{nextLevelXP.toLocaleString()} XP</span>
                </div>
                <div className="h-3 bg-[#1A222C] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: levels[currentLevel].color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercent}%` }}
                    transition={{ delay: 1, duration: 0.8 }}
                  />
                </div>
              </div>

              {/* Near-miss message */}
              <div className="flex items-center gap-2 bg-[#52AE30]/10 rounded-lg p-3">
                <svg className="w-5 h-5 text-[#52AE30]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                <p className="text-sm text-white">
                  You&apos;re <span className="text-[#52AE30] font-bold">{Math.round(progressPercent)}%</span> to unlocking Premium benefits!
                </p>
              </div>
            </div>
          </motion.div>

          {/* Benefits preview */}
          <motion.div
            className="glass rounded-xl p-4"
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Next Level Benefits</h3>
            <div className="space-y-3">
              {levels[currentLevel + 1].benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  className="flex items-center gap-3 p-3 bg-[#1A222C] rounded-lg"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${levels[currentLevel + 1].color}20` }}
                  >
                    <svg
                      className="w-4 h-4"
                      style={{ color: levels[currentLevel + 1].color }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <span className="text-white">{benefit}</span>
                  <span
                    className="ml-auto text-xs px-2 py-1 rounded"
                    style={{ backgroundColor: `${levels[currentLevel + 1].color}20`, color: levels[currentLevel + 1].color }}
                  >
                    Locked
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
