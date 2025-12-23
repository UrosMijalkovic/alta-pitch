'use client';

import { motion } from 'motion/react';

export default function TitleSlide() {
  return (
    <div className="h-full w-full flex items-center justify-center relative overflow-hidden px-8">
      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 border border-[#52AE30]/20 rounded-full"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      />
      <motion.div
        className="absolute bottom-32 right-32 w-48 h-48 border border-[#52AE30]/10 rounded-full"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-2 h-2 bg-[#52AE30] rounded-full"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-[#52AE30]/50 rounded-full"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.1, duration: 0.3 }}
      />

      {/* Main content */}
      <div className="text-center max-w-4xl relative z-10">
        {/* Partnership badge */}
        <motion.div
          className="inline-flex items-center gap-3 mb-8 px-6 py-3 glass rounded-full"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="text-sm font-medium text-[#8A94A6]">iDojo</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#52AE30]" />
          <span className="text-sm font-medium text-[#52AE30]">OTP Bank</span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <span className="text-[#F8F9FA]">Transforming</span>
          <br />
          <span className="gradient-text">Banking Behavior</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-[#8A94A6] mb-8 max-w-2xl mx-auto leading-relaxed"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          A Native Engagement Engine for OTP Bank
        </motion.p>

        {/* Visual representation */}
        <motion.div
          className="flex items-center justify-center gap-8"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {/* iDojo logo placeholder */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#52AE30] to-[#006837] flex items-center justify-center green-glow">
              <span className="text-2xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>iD</span>
            </div>
            <span className="mt-3 text-sm text-[#8A94A6]">iDojo</span>
          </div>

          {/* Connection line */}
          <div className="flex items-center gap-2">
            <motion.div
              className="w-12 h-0.5 bg-gradient-to-r from-[#52AE30] to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            />
            <motion.div
              className="w-3 h-3 rounded-full bg-[#52AE30] animate-pulse-green"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.2, duration: 0.3 }}
            />
            <motion.div
              className="w-12 h-0.5 bg-gradient-to-l from-[#52AE30] to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            />
          </div>

          {/* OTP logo placeholder */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-[#52AE30] flex items-center justify-center">
              <span className="text-xl font-bold text-white">OTP</span>
            </div>
            <span className="mt-3 text-sm text-[#8A94A6]">OTP Bank</span>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <span className="text-xs text-[#8A94A6]">Press arrow to continue</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <svg className="w-5 h-5 text-[#52AE30]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
