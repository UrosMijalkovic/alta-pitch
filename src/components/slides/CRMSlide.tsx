'use client';

import { motion } from 'motion/react';

const features = [
  {
    title: "Unified User Profiles",
    description: "Activity, progress, rewards, spend — all in one place",
    icon: (
      <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: "Behavioral Segmentation",
    description: "Active, loyal, at-risk, and dormant user clusters",
    icon: (
      <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Rule-Based Automations",
    description: "Actions trigger rewards, offers, and messages",
    icon: (
      <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Campaign Management",
    description: "Tied directly to loyalty mechanics",
    icon: (
      <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
  },
  {
    title: "Built-in Analytics",
    description: "Retention, frequency, LTV signals",
    icon: (
      <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

const results = [
  "One system to understand, engage, and retain users",
  "Faster campaigns, clearer ROI, full data ownership",
];

export default function CRMSlide() {
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
            Optional Add-On
          </span>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-1 md:mb-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            In-House <span className="gradient-text">CRM System</span>
          </h2>
          <p className="text-sm md:text-xl text-[#8A94A6] max-w-2xl mx-auto">
            Boost engagement fully with our integrated customer database
          </p>
        </motion.div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {/* Left: Description */}
          <motion.div
            className="glass rounded-lg md:rounded-xl p-4 md:p-6"
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-[#52AE30] to-[#006837] flex items-center justify-center">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold text-base md:text-lg">Full Customer Database</h3>
                <p className="text-[#8A94A6] text-xs md:text-sm">Built around real user behavior</p>
              </div>
            </div>

            <p className="text-[#8A94A6] text-xs md:text-sm mb-4 leading-relaxed">
              A complete campaign system that understands your users. Not just data storage —
              actionable intelligence tied directly to engagement mechanics.
            </p>

            {/* Results */}
            <div className="space-y-2 md:space-y-3">
              {results.map((result, index) => (
                <motion.div
                  key={result}
                  className="flex items-start gap-2"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-[#52AE30] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white text-xs md:text-sm">{result}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Features */}
          <motion.div
            className="space-y-2 md:space-y-3"
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h4 className="text-[#52AE30] text-xs md:text-sm font-medium uppercase tracking-wider mb-3">
              Includes
            </h4>
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="glass rounded-lg md:rounded-xl p-3 md:p-4 flex items-start gap-3 hover:border-[#52AE30]/50 transition-all"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.08, duration: 0.4 }}
              >
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[#52AE30]/20 text-[#52AE30] flex items-center justify-center flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h5 className="text-white font-medium text-xs md:text-sm">{feature.title}</h5>
                  <p className="text-[#8A94A6] text-[10px] md:text-xs mt-0.5">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom note */}
        <motion.div
          className="mt-4 md:mt-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 md:gap-3 glass rounded-full px-4 md:px-6 py-2 md:py-3">
            <svg className="w-4 h-4 md:w-5 md:h-5 text-[#52AE30]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-[#8A94A6] text-xs md:text-sm">
              <span className="text-white font-medium">Full details available upon request</span>
              {' '}— Let&apos;s discuss if this fits your needs
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
