'use client';

import { motion } from 'motion/react';

const journeySteps = [
  { label: 'New User', progress: 0, color: '#8A94A6' },
  { label: 'Basic User', progress: 25, color: '#52AE30' },
  { label: 'Engaged User', progress: 50, color: '#52AE30' },
  { label: 'Premium Customer', progress: 75, color: '#C5A572' },
  { label: 'Salary Client', progress: 100, color: '#FFD700' },
];

export default function InsightSlide() {
  return (
    <div className="h-full w-full flex flex-col justify-center px-4 md:px-12 lg:px-16 py-4 md:py-8">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <motion.div
          className="mb-4 md:mb-8 text-center"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#52AE30] text-xs md:text-sm font-medium uppercase tracking-widest mb-2 md:mb-4 block">
            The Insight
          </span>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-2 md:mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Users Need <span className="gradient-text">Progress</span>,
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>Not Just Products
          </h2>
          <p className="text-sm md:text-xl text-[#8A94A6] max-w-2xl mx-auto">
            People are motivated by visible progress toward meaningful goals
          </p>
        </motion.div>

        {/* Journey visualization */}
        <motion.div
          className="mb-4 md:mb-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {/* Progress bar background */}
          <div className="relative">
            <div className="h-1.5 md:h-2 bg-[#1A222C] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#52AE30] via-[#C5A572] to-[#FFD700] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.5, duration: 1.5, ease: 'easeOut' }}
              />
            </div>

            {/* Journey steps */}
            <div className="flex justify-between mt-4 md:mt-8">
              {journeySteps.map((step, index) => (
                <motion.div
                  key={step.label}
                  className="flex flex-col items-center"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.15, duration: 0.5 }}
                >
                  {/* Dot */}
                  <motion.div
                    className="w-4 h-4 md:w-6 md:h-6 rounded-full border-2 md:border-4 border-[#0A0F14] -mt-6 md:-mt-12 mb-2 md:mb-4 relative z-10"
                    style={{ backgroundColor: step.color }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.15, duration: 0.3 }}
                  >
                    {index === journeySteps.length - 1 && (
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{ backgroundColor: step.color }}
                        animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                      />
                    )}
                  </motion.div>

                  {/* Label */}
                  <span
                    className="text-[8px] sm:text-[10px] md:text-sm font-medium text-center leading-tight"
                    style={{ color: step.color }}
                  >
                    {step.label.split(' ').map((word, i) => (
                      <span key={i} className="block sm:inline">{word}{i === 0 && <span className="hidden sm:inline"> </span>}</span>
                    ))}
                  </span>

                  {/* Progress indicator - hidden on mobile */}
                  {index > 0 && (
                    <div className="hidden md:flex mt-2 items-center gap-1">
                      <svg className="w-3 h-3 text-[#52AE30]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs text-[#8A94A6]">+%</span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Key stat */}
        <motion.div
          className="glass rounded-xl md:rounded-2xl p-4 md:p-8 text-center relative overflow-hidden"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          {/* Background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 md:w-64 h-32 md:h-64 bg-[#52AE30]/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <motion.div
              className="text-5xl md:text-7xl lg:text-8xl font-bold gradient-text mb-1 md:mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.1, duration: 0.4, type: 'spring' }}
            >
              3x
            </motion.div>
            <p className="text-base md:text-2xl text-[#F8F9FA] font-medium mb-1 md:mb-2">
              Near-miss moments convert better
            </p>
            <p className="text-sm md:text-base text-[#8A94A6]">
              than generic calls-to-action
            </p>
          </div>

          {/* Decorative elements - hidden on mobile */}
          <div className="hidden md:flex absolute top-4 right-4 gap-1">
            <div className="w-2 h-2 rounded-full bg-[#52AE30]" />
            <div className="w-2 h-2 rounded-full bg-[#52AE30]/50" />
            <div className="w-2 h-2 rounded-full bg-[#52AE30]/25" />
          </div>
        </motion.div>

        {/* Bottom quote */}
        <motion.div
          className="mt-4 md:mt-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <p className="text-sm md:text-lg text-[#8A94A6] italic">
            &ldquo;You&apos;re <span className="text-[#52AE30]">80%</span> to unlocking Premium benefits&rdquo;
            <br />
            <span className="text-xs md:text-sm not-italic">— The psychology that drives action</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
