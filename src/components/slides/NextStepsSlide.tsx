'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const timelineSteps = [
  {
    week: "Week 1-2",
    title: "Configuration Workshop",
    description: "Define missions, rewards, and progression tailored to OTP's goals",
  },
  {
    week: "Week 2-4",
    title: "Mission Design for OTP",
    description: "Create banking-specific journeys: onboarding, card activation, salary migration",
  },
  {
    week: "Week 4-5",
    title: "Integration & Testing",
    description: "Connect to OTP systems, validate event flows, QA testing",
  },
  {
    week: "Week 6",
    title: "Pilot Launch",
    description: "Go live with selected user segment, monitor and optimize",
  },
];

export default function NextStepsSlide() {
  return (
    <div className="h-full w-full flex flex-col justify-center px-4 md:px-12 lg:px-16 py-4">
      <div className="max-w-5xl mx-auto w-full">
        {/* Header */}
        <motion.div
          className="mb-3 md:mb-4 text-center"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#52AE30] text-xs md:text-sm font-medium uppercase tracking-widest mb-1 md:mb-2 block">
            Next Steps
          </span>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-1"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Let&apos;s Build This <span className="gradient-text">Together</span>
          </h2>
          <p className="text-xs md:text-base text-[#8A94A6] max-w-2xl mx-auto">
            A clear path from today to transforming banking behavior
          </p>
        </motion.div>

        {/* Timeline - horizontal on larger screens */}
        <motion.div
          className="mb-3 md:mb-4 glass rounded-lg md:rounded-xl p-3 md:p-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
            {timelineSteps.map((step, index) => (
              <motion.div
                key={step.week}
                className="relative"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
              >
                {/* Connector line - hidden on mobile */}
                {index < timelineSteps.length - 1 && (
                  <div className="hidden md:block absolute top-3 md:top-4 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#52AE30] to-[#52AE30]/30" />
                )}

                <div className="flex md:flex-col items-start md:items-center gap-2 md:gap-0 md:text-center">
                  {/* Step number */}
                  <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    index === timelineSteps.length - 1
                      ? 'bg-[#52AE30] text-white'
                      : 'bg-[#52AE30]/20 text-[#52AE30]'
                  }`}>
                    <span className="text-xs md:text-sm font-bold">{index + 1}</span>
                  </div>

                  <div className="flex-1 md:mt-2">
                    <span className="text-[#52AE30] font-medium text-[10px] md:text-xs">{step.week}</span>
                    <h3 className="text-xs md:text-sm font-semibold text-white mt-0.5">{step.title}</h3>
                    <p className="text-[8px] md:text-xs text-[#8A94A6] mt-0.5 leading-tight">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <div className="glass rounded-lg md:rounded-xl p-3 md:p-4 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 md:w-64 h-48 md:h-64 bg-[#52AE30]/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <motion.h3
                className="text-lg md:text-2xl font-bold text-white mb-1 md:mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.9, duration: 0.4 }}
              >
                Ready to Transform Banking Behavior?
              </motion.h3>

              
              {/* Partnership logos */}
              <div className="flex items-center justify-center gap-3 md:gap-4 mb-2 md:mb-3">
                <motion.div
                  className="flex flex-col items-center"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.4 }}
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-[#52AE30] to-[#006837] flex items-center justify-center green-glow overflow-hidden relative">
                    <Image src="/idojo-logo.png" alt="iDojo" width={48} height={48} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#52AE30]/30 to-[#006837]/30 mix-blend-overlay" />
                  </div>
                  <span className="mt-0.5 md:mt-1 text-[8px] md:text-xs text-[#8A94A6]">iDojo</span>
                </motion.div>

                <motion.div
                  className="text-[#52AE30]"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.1, duration: 0.3 }}
                >
                  <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.div>

                <motion.div
                  className="flex flex-col items-center"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.4 }}
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-white flex items-center justify-center overflow-hidden">
                    <Image src="/otp-logo.png" alt="OTP Bank" width={40} height={40} className="w-8 h-8 md:w-10 md:h-10 object-contain" />
                  </div>
                  <span className="mt-0.5 md:mt-1 text-[8px] md:text-xs text-[#8A94A6]">OTP Bank</span>
                </motion.div>
              </div>

              {/* Contact info */}
              <motion.div
                className="inline-flex items-center gap-2 md:gap-3 glass rounded-full px-3 md:px-4 py-1.5 md:py-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.4 }}
              >
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#52AE30] animate-pulse" />
                <span className="text-xs md:text-sm text-[#8A94A6]">
                  Contact us at{' '}
                  <span className="text-[#52AE30] font-medium">mijalkovic@miracledojo.com</span>
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
