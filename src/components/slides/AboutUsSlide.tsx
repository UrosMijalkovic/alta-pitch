'use client';

import { motion } from 'motion/react';

const stats = [
  { value: '2015', label: 'Founded', icon: '🚀' },
  { value: '10+', label: 'Gaming Veterans', icon: '👥' },
  { value: '1M+', label: 'Players Worldwide', icon: '🌍' },
  { value: '6', label: 'Games Shipped', icon: '🎮' },
];

const expertise = [
  { title: 'iDojo Platform', description: 'Gamification as a service', color: '#52AE30' },
  { title: 'Celebrities', description: 'Celebrity-driven experiences', color: '#C5A572' },
  { title: 'Education & Brands', description: 'Engagement solutions', color: '#3498DB' },
  { title: 'Sport', description: 'Karate / Karate Combat', color: '#9B59B6' },
];

export default function AboutUsSlide() {
  return (
    <div className="h-full w-full flex flex-col justify-center px-4 md:px-12 lg:px-16 py-4 md:py-6">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <motion.div
          className="mb-4 md:mb-6 text-center"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#52AE30] text-xs md:text-sm font-medium uppercase tracking-widest mb-2 md:mb-4 block">
            Miracle Dojo
          </span>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-1 md:mb-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Who <span className="gradient-text">We Are</span>
          </h2>
          <p className="text-sm md:text-lg text-[#8A94A6] max-w-2xl mx-auto">
            Gamification pioneers with a decade of game development expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {/* Left: Stats + Expertise */}
          <div className="space-y-3 md:space-y-4">
            {/* Stats grid */}
            <motion.div
              className="grid grid-cols-4 md:grid-cols-2 gap-2 md:gap-3"
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="glass rounded-lg md:rounded-xl p-2 md:p-4 text-center"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                >
                  <span className="text-lg md:text-2xl mb-1 md:mb-2 block">{stat.icon}</span>
                  <p className="text-lg md:text-2xl font-bold text-[#52AE30]">{stat.value}</p>
                  <p className="text-[10px] md:text-xs text-[#8A94A6] mt-0.5 md:mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Expertise areas */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-1 gap-2"
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {expertise.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="glass rounded-lg p-2 md:p-3 flex items-center gap-2 md:gap-3 group hover:border-[#52AE30]/50 transition-all"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                >
                  <div
                    className="w-1 md:w-2 h-6 md:h-8 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <div>
                    <p className="text-white font-medium text-xs md:text-sm">{item.title}</p>
                    <p className="text-[10px] md:text-xs text-[#8A94A6]">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Tagline - hidden on mobile */}
            <motion.div
              className="hidden md:flex items-center gap-2 pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#52AE30] to-[#006837] flex items-center justify-center">
                <span className="text-white font-bold text-xs" style={{ fontFamily: "'Playfair Display', serif" }}>iD</span>
              </div>
              <p className="text-[#8A94A6] text-sm">
                <span className="text-white font-medium">Gamification Pioneers</span> — Turning engagement into habit
              </p>
            </motion.div>
          </div>

          {/* Right: Video */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="w-full max-w-xl aspect-video glass rounded-xl md:rounded-2xl relative overflow-hidden group">
              {/* Video element */}
              <video
                className="absolute inset-0 w-full h-full object-cover"
                src="/portfolio.m4v"
                autoPlay
                loop
                muted
                playsInline
              />

              {/* Overlay gradient for better text visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Animated border */}
              <div className="absolute inset-0 rounded-xl md:rounded-2xl border-2 border-[#52AE30]/30 pointer-events-none" />

              {/* Corner accents - hidden on mobile */}
              <div className="hidden md:block absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-[#52AE30] rounded-tl pointer-events-none" />
              <div className="hidden md:block absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-[#52AE30] rounded-tr pointer-events-none" />
              <div className="hidden md:block absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-[#52AE30] rounded-bl pointer-events-none" />
              <div className="hidden md:block absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-[#52AE30] rounded-br pointer-events-none" />

              {/* Label */}
              <div className="absolute bottom-2 md:bottom-3 left-2 md:left-3 flex items-center gap-1 md:gap-2 pointer-events-none">
                <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-[#52AE30] animate-pulse" />
                <span className="text-white text-[10px] md:text-xs font-medium drop-shadow-lg">Our Games</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
