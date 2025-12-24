'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const integrationPoints = [
  {
    label: "iFrame Embed",
    detail: "Simple embed in your app, we handle everything",
    icon: (
      <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    label: "Minimal Setup",
    detail: "All widget interactions handled by us",
    icon: (
      <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: "Real-time Updates",
    detail: "WebSocket communication for instant sync",
    icon: (
      <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    label: "Your Data Control",
    detail: "Data stays in your Kafka infrastructure",
    icon: (
      <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
];

export default function IntegrationSlide() {
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
            Technical Integration
          </span>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-1 md:mb-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Simple Embed, <span className="gradient-text">Zero Effort</span>
          </h2>
          <p className="text-sm md:text-xl text-[#8A94A6] max-w-2xl mx-auto">
            We handle everything — you just authenticate the user
          </p>
        </motion.div>

        {/* Architecture diagram */}
        <motion.div
          className="glass rounded-lg md:rounded-xl p-2 md:p-4 mb-2 md:mb-4 overflow-x-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex flex-row items-center justify-center gap-1.5 sm:gap-2 md:gap-4 min-w-[320px]">
            {/* OTP App */}
            <motion.div
              className="w-20 sm:w-24 md:w-40 h-16 sm:h-20 md:h-36 rounded-lg md:rounded-xl bg-[#52AE30]/10 border-2 border-[#52AE30]/30 flex flex-col items-center justify-center p-1.5 sm:p-2 md:p-3 flex-shrink-0"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-16 md:h-16 rounded-md md:rounded-xl bg-white flex items-center justify-center mb-0.5 sm:mb-1 md:mb-3 overflow-hidden">
                <Image src="/otp-logo.png" alt="OTP Bank" width={56} height={56} className="w-5 h-5 sm:w-6 sm:h-6 md:w-14 md:h-14 object-contain" />
              </div>
              <p className="text-white font-semibold text-center text-[9px] sm:text-[10px] md:text-base leading-tight">OTP App</p>
              <p className="text-[7px] sm:text-[8px] md:text-xs text-[#8A94A6] text-center mt-0.5 hidden sm:block">Auth + UUID</p>
            </motion.div>

            {/* Connection arrows - iFrame */}
            <motion.div
              className="flex flex-col items-center gap-0.5 md:gap-2 flex-shrink-0"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.4 }}
            >
              <div className="flex items-center gap-0.5 md:gap-2">
                <div className="w-3 sm:w-4 md:w-8 h-0.5 bg-[#52AE30]" />
                <svg className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-4 md:h-4 text-[#52AE30]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-[7px] sm:text-[8px] md:text-xs text-[#52AE30] font-medium">iFrame</span>
              <div className="flex items-center gap-0.5 md:gap-2">
                <svg className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-4 md:h-4 text-[#52AE30] rotate-180" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <div className="w-3 sm:w-4 md:w-8 h-0.5 bg-[#52AE30]" />
              </div>
            </motion.div>

            {/* iDojo Platform - Central */}
            <motion.div
              className="w-24 sm:w-28 md:w-56 h-18 sm:h-24 md:h-40 rounded-lg md:rounded-xl bg-gradient-to-br from-[#1A222C] to-[#0A0F14] border-2 border-[#52AE30] flex flex-col items-center justify-center p-1.5 sm:p-2 md:p-3 green-glow flex-shrink-0"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-14 md:h-14 rounded-md md:rounded-xl bg-gradient-to-br from-[#52AE30] to-[#006837] flex items-center justify-center mb-0.5 sm:mb-1 md:mb-2 overflow-hidden relative">
                <Image src="/idojo-logo.png" alt="iDojo" width={56} height={56} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#52AE30]/30 to-[#006837]/30 mix-blend-overlay" />
              </div>
              <p className="text-white font-semibold text-center text-[9px] sm:text-[10px] md:text-base mb-0.5 leading-tight">iDojo</p>
              <div className="hidden sm:flex flex-wrap justify-center gap-0.5 md:gap-1.5">
                <span className="text-[6px] md:text-[10px] px-1 py-0.5 rounded bg-[#52AE30]/20 text-[#52AE30]">Widget</span>
                <span className="text-[6px] md:text-[10px] px-1 py-0.5 rounded bg-[#3498DB]/20 text-[#3498DB]">Admin</span>
                <span className="text-[6px] md:text-[10px] px-1 py-0.5 rounded bg-[#9B59B6]/20 text-[#9B59B6]">Socket</span>
              </div>
            </motion.div>

            {/* Connection to Kafka */}
            <motion.div
              className="flex flex-col items-center gap-0.5 md:gap-2 flex-shrink-0"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
            >
              <div className="flex items-center gap-0.5 md:gap-2">
                <div className="w-3 sm:w-4 md:w-8 h-0.5 bg-[#FFB84D]" />
                <svg className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-4 md:h-4 text-[#FFB84D]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-[7px] sm:text-[8px] md:text-xs text-[#FFB84D] font-medium">Kafka</span>
              <div className="flex items-center gap-0.5 md:gap-2">
                <svg className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-4 md:h-4 text-[#FFB84D] rotate-180" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <div className="w-3 sm:w-4 md:w-8 h-0.5 bg-[#FFB84D]" />
              </div>
            </motion.div>

            {/* OTP Backend */}
            <motion.div
              className="w-20 sm:w-24 md:w-40 h-16 sm:h-20 md:h-36 rounded-lg md:rounded-xl bg-[#FFB84D]/10 border-2 border-[#FFB84D]/30 flex flex-col items-center justify-center p-1.5 sm:p-2 md:p-3 flex-shrink-0"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-16 md:h-16 rounded-md md:rounded-xl bg-[#1A222C] border-2 border-[#FFB84D]/50 flex items-center justify-center mb-0.5 sm:mb-1 md:mb-3">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-8 md:h-8 text-[#FFB84D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <p className="text-white font-semibold text-center text-[9px] sm:text-[10px] md:text-base leading-tight">Backend</p>
              <p className="text-[7px] sm:text-[8px] md:text-xs text-[#8A94A6] text-center mt-0.5 hidden sm:block">User Events</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Integration points */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3">
          {integrationPoints.map((point, index) => (
            <motion.div
              key={point.label}
              className="glass rounded-lg md:rounded-xl p-2 md:p-5 text-center hover:border-[#52AE30]/50 transition-all"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 + index * 0.1, duration: 0.4 }}
            >
              <div className="w-8 h-8 md:w-12 md:h-12 mx-auto rounded-lg md:rounded-xl bg-[#52AE30]/20 flex items-center justify-center mb-2 md:mb-3 text-[#52AE30]">
                {point.icon}
              </div>
              <h4 className="text-white font-semibold mb-0.5 md:mb-1 text-xs md:text-base">{point.label}</h4>
              <p className="text-[10px] md:text-sm text-[#8A94A6]">{point.detail}</p>
            </motion.div>
          ))}
        </div>

        {/* How it works - hidden on mobile */}
        <motion.div
          className="hidden md:grid grid-cols-3 gap-3 mt-4"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          <div className="glass rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full bg-[#52AE30] flex items-center justify-center text-white text-xs font-bold">1</div>
              <h4 className="text-white font-medium text-sm">OTP Authenticates</h4>
            </div>
            <p className="text-xs text-[#8A94A6]">User logs in, OTP sends UUID + client name to our server</p>
          </div>
          <div className="glass rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full bg-[#52AE30] flex items-center justify-center text-white text-xs font-bold">2</div>
              <h4 className="text-white font-medium text-sm">We Load Widget</h4>
            </div>
            <p className="text-xs text-[#8A94A6]">Fetch user data, package in widget, return iFrame to your app</p>
          </div>
          <div className="glass rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full bg-[#52AE30] flex items-center justify-center text-white text-xs font-bold">3</div>
              <h4 className="text-white font-medium text-sm">Everything In Widget</h4>
            </div>
            <p className="text-xs text-[#8A94A6]">Rewards, shop, missions — all interactions happen inside our widget</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
