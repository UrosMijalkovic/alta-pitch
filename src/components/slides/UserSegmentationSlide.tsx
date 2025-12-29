'use client';

import { motion } from 'motion/react';

const segments = [
  {
    name: "Students",
    icon: "🎓",
    color: "#D20000",
    highlight: true,
    journey: [
      { step: "Open first account", xp: 50 },
      { step: "Get student card", xp: 100 },
      { step: "First online payment", xp: 75 },
      { step: "Build credit history", xp: 200 },
    ],
    outcome: "Future credit line customers",
  },
  {
    name: "Young Professionals",
    icon: "💼",
    color: "#3498DB",
    highlight: false,
    journey: [
      { step: "Salary migration", xp: 200 },
      { step: "Credit card activation", xp: 150 },
      { step: "First loan inquiry", xp: 100 },
    ],
    outcome: "Premium product adoption",
  },
  {
    name: "Families",
    icon: "🏠",
    color: "#9B59B6",
    highlight: false,
    journey: [
      { step: "Joint account setup", xp: 100 },
      { step: "Savings goal created", xp: 75 },
      { step: "Insurance discovery", xp: 150 },
    ],
    outcome: "Cross-sell opportunities",
  },
];

export default function UserSegmentationSlide() {
  return (
    <div className="h-full w-full flex flex-col justify-center px-4 md:px-12 lg:px-16 py-3 md:py-6">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <motion.div
          className="mb-2 md:mb-6 text-center"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#D20000] text-[10px] md:text-sm font-medium uppercase tracking-widest mb-1 md:mb-4 block">
            User Segmentation
          </span>
          <h2
            className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-1 md:mb-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Personalized Journeys for <span className="gradient-text">Every Cluster</span>
          </h2>
          <p className="text-xs md:text-xl text-[#8A94A6] max-w-2xl mx-auto">
            Different audiences, tailored missions, same engagement engine
          </p>
        </motion.div>

        {/* Segments grid */}
        <div className="grid grid-cols-3 gap-1.5 md:gap-4">
          {segments.map((segment, index) => (
            <motion.div
              key={segment.name}
              className={`glass rounded-md md:rounded-xl p-2 md:p-4 relative overflow-hidden ${
                segment.highlight ? 'border-[#D20000]/50 ring-1 ring-[#D20000]/30' : ''
              }`}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
            >
              {/* Highlight badge */}
              {segment.highlight && (
                <div className="absolute top-1 right-1 md:top-2 md:right-2 px-1 md:px-1.5 py-0.5 rounded text-[6px] md:text-[10px] bg-[#D20000] text-[#1A1A1A] font-medium">
                  Key Focus
                </div>
              )}

              {/* Background glow for highlighted */}
              {segment.highlight && (
                <div className="absolute top-0 right-0 w-16 md:w-24 h-16 md:h-24 bg-[#D20000]/10 rounded-full blur-2xl" />
              )}

              <div className="relative z-10">
                {/* Icon and name */}
                <div className="flex items-center gap-1 md:gap-2 mb-1.5 md:mb-3">
                  <span className="text-lg md:text-3xl">{segment.icon}</span>
                  <div>
                    <h3 className="text-white font-semibold text-[10px] md:text-base leading-tight">{segment.name}</h3>
                    <p className="text-[7px] md:text-xs text-[#8A94A6] hidden sm:block">{segment.outcome}</p>
                  </div>
                </div>

                {/* Journey steps */}
                <div className="space-y-1 md:space-y-2">
                  {segment.journey.map((step, stepIndex) => (
                    <motion.div
                      key={step.step}
                      className="flex items-center justify-between text-[8px] md:text-xs"
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 + stepIndex * 0.05, duration: 0.3 }}
                    >
                      <div className="flex items-center gap-1">
                        <div
                          className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: segment.color }}
                        />
                        <span className="text-[#8A94A6] truncate">{step.step}</span>
                      </div>
                      <span
                        className="font-medium flex-shrink-0 ml-1"
                        style={{ color: segment.color }}
                      >
                        +{step.xp}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Progress indicator */}
                <div className="mt-2 md:mt-3 pt-1.5 md:pt-2 border-t border-white/5">
                  <div className="flex items-center justify-between text-[7px] md:text-[10px] text-[#8A94A6] mb-0.5 md:mb-1">
                    <span>Progress</span>
                    <span style={{ color: segment.color }}>
                      {segment.highlight ? '68%' : `${30 + index * 15}%`}
                    </span>
                  </div>
                  <div className="h-0.5 md:h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: segment.color }}
                      initial={{ width: 0 }}
                      animate={{ width: segment.highlight ? '68%' : `${30 + index * 15}%` }}
                      transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Student focus callout */}
        <motion.div
          className="mt-2 md:mt-6 glass rounded-md md:rounded-xl p-2 md:p-5"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="flex flex-row items-center gap-2 md:gap-6">
            <div className="flex items-center gap-1.5 md:gap-3 flex-shrink-0">
              <div className="w-8 h-8 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-[#D20000]/20 flex items-center justify-center">
                <span className="text-lg md:text-3xl">🎓</span>
              </div>
              <div>
                <h3 className="text-white font-semibold text-[10px] md:text-lg leading-tight">Students Strategy</h3>
                <p className="text-[8px] md:text-sm text-[#8A94A6] hidden sm:block">Future premium customers</p>
              </div>
            </div>

            <div className="flex-1 grid grid-cols-3 gap-1 md:gap-4">
              <div className="text-center">
                <motion.p
                  className="text-sm md:text-2xl font-bold text-[#D20000]"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, duration: 0.3 }}
                >
                  5x
                </motion.p>
                <p className="text-[7px] md:text-xs text-[#8A94A6]">LTV vs cost</p>
              </div>
              <div className="text-center border-x border-white/5">
                <motion.p
                  className="text-sm md:text-2xl font-bold text-[#3498DB]"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.1, duration: 0.3 }}
                >
                  73%
                </motion.p>
                <p className="text-[7px] md:text-xs text-[#8A94A6]">Credit cards</p>
              </div>
              <div className="text-center">
                <motion.p
                  className="text-sm md:text-2xl font-bold text-[#D20000]"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.3 }}
                >
                  +40%
                </motion.p>
                <p className="text-[7px] md:text-xs text-[#8A94A6]">Online pay</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
