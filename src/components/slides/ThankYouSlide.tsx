'use client';

import { motion } from 'motion/react';

export default function ThankYouSlide() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center px-6 md:px-12 lg:px-16 py-6 relative overflow-hidden">
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
        className="absolute top-1/4 right-1/3 w-2 h-2 bg-[#52AE30] rounded-full"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-[#52AE30]/50 rounded-full"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.1, duration: 0.3 }}
      />

      {/* Main content */}
      <div className="text-center max-w-4xl relative z-10">
        {/* Thank you text */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-[#F8F9FA]">Thank </span>
          <span className="gradient-text">You</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl text-[#8A94A6] mb-10"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Ready for the demo?
        </motion.p>

        {/* Demo button */}
        <motion.div
          className="mb-12"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-4 glass rounded-2xl px-8 py-5 group hover:border-[#52AE30]/50 transition-all cursor-pointer">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#52AE30] to-[#006837] flex items-center justify-center green-glow group-hover:scale-110 transition-transform">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-white font-semibold text-lg">Demo Presentation</p>
              <p className="text-[#8A94A6] text-sm">See iDojo platform in action</p>
            </div>
            <svg className="w-6 h-6 text-[#52AE30] group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </motion.div>

        {/* Partnership visual */}
        <motion.div
          className="flex items-center justify-center gap-6"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          {/* iDojo logo */}
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
              className="w-3 h-3 rounded-full bg-[#52AE30] animate-pulse"
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

          {/* OTP logo */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-[#52AE30] flex items-center justify-center">
              <span className="text-xl font-bold text-white">OTP</span>
            </div>
            <span className="mt-3 text-sm text-[#8A94A6]">OTP Bank</span>
          </div>
        </motion.div>

        {/* Contact info */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <p className="text-[#8A94A6] text-sm">
            <span className="text-[#52AE30] font-medium">hello@idojo.io</span>
            {' '}&bull;{' '}
            <span className="text-white font-medium">idojo.io</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
