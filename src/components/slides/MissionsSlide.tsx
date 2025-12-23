'use client';

import { motion } from 'motion/react';

const missionCategories = [
  {
    title: "Onboarding",
    color: "#52AE30",
    missions: [
      { step: "Complete your profile", xp: 50, done: true },
      { step: "Enable biometrics", xp: 30, done: true },
      { step: "Set up notifications", xp: 20, done: false },
    ],
    progress: 66,
  },
  {
    title: "Card Activation",
    color: "#3498DB",
    missions: [
      { step: "Activate your card", xp: 50, done: true },
      { step: "Add to digital wallet", xp: 40, done: false },
      { step: "Make 3 contactless payments", xp: 60, done: false },
    ],
    progress: 33,
  },
  {
    title: "Savings Journey",
    color: "#9B59B6",
    missions: [
      { step: "Create a savings goal", xp: 40, done: true },
      { step: "Save 5 times", xp: 75, done: true },
      { step: "Reach first milestone", xp: 100, done: true },
    ],
    progress: 100,
  },
  {
    title: "Salary Migration",
    color: "#C5A572",
    missions: [
      { step: "Request salary change form", xp: 30, done: true },
      { step: "Submit to employer", xp: 50, done: true },
      { step: "Receive first salary", xp: 200, done: false },
    ],
    progress: 66,
  },
];

export default function MissionsSlide() {
  return (
    <div className="h-full w-full flex flex-col justify-center px-4 md:px-12 lg:px-16 py-4 md:py-6">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div
          className="mb-4 md:mb-6 text-center"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#52AE30] text-xs md:text-sm font-medium uppercase tracking-widest mb-2 md:mb-4 block">
            How It Works
          </span>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-1 md:mb-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Guided <span className="gradient-text">Journeys</span>,
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>Not Feature Lists
          </h2>
          <p className="text-sm md:text-xl text-[#8A94A6] max-w-2xl mx-auto">
            Step-by-step missions transform complex actions into achievable goals
          </p>
        </motion.div>

        {/* Mission cards grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
          {missionCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="glass rounded-lg md:rounded-2xl overflow-hidden group hover:border-[#52AE30]/50 transition-all duration-300"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
            >
              {/* Category header */}
              <div
                className="p-2 md:p-3 relative overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${category.color}20, ${category.color}05)` }}
              >
                <div
                  className="absolute top-0 right-0 w-12 md:w-16 h-12 md:h-16 rounded-full blur-2xl"
                  style={{ backgroundColor: category.color, opacity: 0.2 }}
                />
                <div className="flex items-center justify-between relative z-10">
                  <h3 className="font-semibold text-white text-xs md:text-base">{category.title}</h3>
                  {category.progress === 100 && (
                    <span className="px-1.5 md:px-2 py-0.5 rounded-full text-[8px] md:text-xs font-medium bg-[#52AE30] text-white">
                      Complete
                    </span>
                  )}
                </div>
                <div className="mt-2 md:mt-3 h-1 md:h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: category.color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${category.progress}%` }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                  />
                </div>
                <p className="text-[10px] md:text-xs mt-1 md:mt-2" style={{ color: category.color }}>
                  {category.progress}% complete
                </p>
              </div>

              {/* Mission steps */}
              <div className="p-2 md:p-3 space-y-1.5 md:space-y-2">
                {category.missions.map((mission, mIndex) => (
                  <motion.div
                    key={mission.step}
                    className="flex items-start gap-2 md:gap-3"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 + mIndex * 0.05, duration: 0.4 }}
                  >
                    <div
                      className={`w-4 h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        mission.done
                          ? 'bg-[#52AE30]'
                          : 'border-2 border-[#2A323C]'
                      }`}
                    >
                      {mission.done && (
                        <svg className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-[10px] md:text-sm leading-tight ${mission.done ? 'text-[#8A94A6]' : 'text-white'}`}>
                        {mission.step}
                      </p>
                    </div>
                    <span
                      className={`text-[8px] md:text-xs font-medium px-1 md:px-2 py-0.5 rounded flex-shrink-0 ${
                        mission.done
                          ? 'bg-[#52AE30]/20 text-[#52AE30]'
                          : 'bg-[#1A222C] text-[#8A94A6]'
                      }`}
                    >
                      +{mission.xp}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom insight */}
        <motion.div
          className="mt-4 md:mt-6 text-center"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 md:gap-4 glass rounded-full px-3 md:px-6 py-2 md:py-3">
            <svg className="w-4 h-4 md:w-5 md:h-5 text-[#52AE30]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <p className="text-[#8A94A6] text-xs md:text-base">
              Each completed mission unlocks the next, creating a{' '}
              <span className="text-[#52AE30] font-medium">natural progression path</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
