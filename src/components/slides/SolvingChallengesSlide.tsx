'use client';

import { motion } from 'motion/react';

const solutionsMapping = [
  {
    pain: "Acquisition ≠ Activation",
    painDetail: "App installs don't become habits",
    solution: "Onboarding Missions",
    solutionDetail: "Step-by-step activation that rewards feature discovery",
    icon: (
      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
      </svg>
    ),
    color: "#FF6B6B",
  },
  {
    pain: "Salary Migration Bottleneck",
    painDetail: "The #1 KPI that's stuck",
    solution: "Guided Journey",
    solutionDetail: "Visible progress with milestone rewards at each step",
    icon: (
      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    color: "#FFB84D",
  },
  {
    pain: "Weak Daily Engagement",
    painDetail: "Open when needed, not daily",
    solution: "Daily Rewards + Streaks",
    solutionDetail: "Consistent reasons to return with escalating benefits",
    icon: (
      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    color: "#D20000",
  },
  {
    pain: "Passive Feature Discovery",
    painDetail: "Users don't find what you build",
    solution: "Feature Discovery Missions",
    solutionDetail: "Contextual missions introduce features at the right time",
    icon: (
      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    color: "#9B59B6",
  },
  {
    pain: "Promo Dependency",
    painDetail: "Retention is rented, not owned",
    solution: "Systemic Earned Rewards",
    solutionDetail: "Continuous engagement without campaign costs",
    icon: (
      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "#3498DB",
  },
];

export default function SolvingChallengesSlide() {
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
          <span className="text-[#D20000] text-xs md:text-sm font-medium uppercase tracking-widest mb-2 md:mb-4 block">
            Solutions Mapping
          </span>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-1 md:mb-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Solving Alta banka&apos;s <span className="gradient-text">Specific</span> Challenges
          </h2>
          <p className="text-sm md:text-xl text-[#8A94A6] max-w-2xl mx-auto">
            Direct mapping from pain points to proven solutions
          </p>
        </motion.div>

        {/* Solutions table */}
        <div className="space-y-2 md:space-y-3">
          {solutionsMapping.map((item, index) => (
            <motion.div
              key={item.pain}
              className="glass rounded-lg md:rounded-xl overflow-hidden group hover:border-[#D20000]/50 transition-all duration-300"
              initial={{ y: 20, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{
                delay: 0.3 + index * 0.25,
                duration: 0.6,
                ease: "easeOut"
              }}
            >
              <div className="flex flex-col md:flex-row">
                {/* Pain point side */}
                <motion.div
                  className="flex-1 p-2 md:p-3 border-b md:border-b-0 md:border-r border-white/5 relative"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.25, duration: 0.4 }}
                >
                  <div
                    className="absolute top-0 left-0 w-1 h-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <div className="flex items-center gap-2 md:gap-3 pl-2 md:pl-3">
                    <div
                      className="w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${item.color}20`, color: item.color }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xs md:text-sm font-semibold text-white">{item.pain}</h3>
                      <p className="text-[10px] md:text-xs text-[#8A94A6]">{item.painDetail}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Arrow connector */}
                <div className="hidden md:flex items-center justify-center px-4">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.7 + index * 0.25, duration: 0.3, ease: "backOut" }}
                  >
                    <svg className="w-6 h-6 md:w-8 md:h-8 text-[#D20000]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                </div>

                {/* Solution side */}
                <motion.div
                  className="flex-1 p-2 md:p-3 bg-[#D20000]/5 relative"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 + index * 0.25, duration: 0.4 }}
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#D20000] md:hidden" />
                  <div className="flex items-center gap-2 md:gap-3 pl-2 md:pl-0">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-[#D20000]/20 text-[#D20000]">
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xs md:text-sm font-semibold text-white">{item.solution}</h3>
                      <p className="text-[10px] md:text-xs text-[#8A94A6]">{item.solutionDetail}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-4 md:mt-6 text-center"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 md:gap-3 glass rounded-full px-3 md:px-6 py-2 md:py-3">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#D20000] animate-pulse" />
            <p className="text-[#8A94A6] text-xs md:text-base">
              Every solution is{' '}
              <span className="text-[#D20000] font-medium">configurable by Alta banka</span>
              {' '}and{' '}
              <span className="text-[#D20000] font-medium">measurable in real-time</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
