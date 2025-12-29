'use client';

import { motion } from 'motion/react';

const features = [
  { title: "Unified User Profiles", description: "Activity, progress, rewards, spend history" },
  { title: "Behavioral Segmentation", description: "Active, loyal, at-risk, dormant users" },
  { title: "Rule-Based Automations", description: "Actions trigger rewards & messages" },
  { title: "Campaign Management", description: "Tied to loyalty mechanics" },
  { title: "Built-in Analytics", description: "Retention, frequency, LTV signals" },
];

export default function CRMSlide() {
  return (
    <div className="h-full w-full flex flex-col justify-center px-4 md:px-12 lg:px-16 py-3 md:py-8">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <motion.div
          className="mb-2 md:mb-8 text-center"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#D20000] text-[10px] md:text-sm font-medium uppercase tracking-widest mb-1 md:mb-3 block">
            Optional Add-On
          </span>
          <h2
            className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-1 md:mb-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            In-House <span className="gradient-text">CRM System</span>
          </h2>
          <p className="text-xs md:text-lg text-[#8A94A6] max-w-2xl mx-auto">
            Gamification + CRM working together as one engagement engine
          </p>
        </motion.div>

        {/* Main content - Diagram + Features */}
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-2 md:gap-6">
          {/* Left: Integration Diagram */}
          <motion.div
            className="glass rounded-lg md:rounded-2xl p-2 md:p-6"
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h4 className="text-[#D20000] text-[10px] md:text-sm font-medium uppercase tracking-wider mb-1.5 md:mb-5">
              The Feedback Loop
            </h4>

            {/* Diagram */}
            <div className="space-y-1 md:space-y-4">
              {/* User Actions */}
              <motion.div
                className="bg-[#323232] rounded-md md:rounded-xl p-1.5 md:p-4 text-center"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.3 }}
              >
                <p className="text-white font-semibold text-[10px] md:text-base">User Actions</p>
                <p className="text-[8px] md:text-sm text-[#8A94A6] mt-0.5 hidden sm:block">Transactions, logins, feature usage</p>
              </motion.div>

              {/* Arrow down - animated */}
              <motion.div
                className="flex justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, duration: 0.2 }}
              >
                <motion.svg
                  className="w-3 h-3 md:w-6 md:h-6 text-[#D20000]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  animate={{ y: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </motion.svg>
              </motion.div>

              {/* Gamification Engine */}
              <motion.div
                className="bg-gradient-to-r from-[#D20000]/20 to-[#262626]/20 border border-[#D20000]/40 rounded-md md:rounded-xl p-1.5 md:p-4 text-center"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.3 }}
              >
                <p className="text-[#D20000] font-bold text-[10px] md:text-base">Gamification</p>
                <p className="text-[8px] md:text-sm text-[#8A94A6] mt-0.5 hidden sm:block">Missions • XP • Levels</p>
              </motion.div>

              {/* Bidirectional arrows - animated */}
              <motion.div
                className="flex justify-center items-center gap-1 md:gap-3"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.7, duration: 0.2 }}
              >
                <motion.svg
                  className="w-3 h-3 md:w-6 md:h-6 text-[#3498DB]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  animate={{ y: [0, 3, 0] }}
                  transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </motion.svg>
                <span className="text-[8px] md:text-sm text-[#8A94A6] hidden sm:inline">Events sync</span>
                <motion.svg
                  className="w-3 h-3 md:w-6 md:h-6 text-[#3498DB] rotate-180"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ repeat: Infinity, duration: 1, ease: "easeInOut", delay: 0.5 }}
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </motion.svg>
              </motion.div>

              {/* CRM System */}
              <motion.div
                className="bg-gradient-to-r from-[#3498DB]/20 to-[#9B59B6]/20 border border-[#3498DB]/40 rounded-md md:rounded-xl p-1.5 md:p-4 text-center"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.3 }}
              >
                <p className="text-[#3498DB] font-bold text-[10px] md:text-base">CRM System</p>
                <p className="text-[8px] md:text-sm text-[#8A94A6] mt-0.5 hidden sm:block">Profiles • Segments</p>
              </motion.div>

              {/* Arrow down - animated */}
              <motion.div
                className="flex justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.9, duration: 0.2 }}
              >
                <motion.svg
                  className="w-3 h-3 md:w-6 md:h-6 text-[#D20000]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  animate={{ y: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut", delay: 0.3 }}
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </motion.svg>
              </motion.div>

              {/* Personalized Response */}
              <motion.div
                className="bg-[#323232] rounded-md md:rounded-xl p-1.5 md:p-4 text-center"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.3 }}
              >
                <p className="text-[#D20000] font-semibold text-[10px] md:text-base">Personalized</p>
                <p className="text-[8px] md:text-sm text-[#8A94A6] mt-0.5 hidden sm:block">Right mission, right time</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Features */}
          <motion.div
            className="glass rounded-lg md:rounded-2xl p-2 md:p-6 flex flex-col"
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h4 className="text-[#D20000] text-[10px] md:text-sm font-medium uppercase tracking-wider mb-1.5 md:mb-5">
              CRM Includes
            </h4>
            <div className="flex-1 grid grid-cols-1 gap-1 md:gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="bg-[#323232] rounded-md md:rounded-xl p-1.5 md:p-4 flex items-start gap-1.5 md:gap-3"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.08, duration: 0.3 }}
                >
                  <div className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-[#D20000] mt-1 md:mt-1.5 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold text-[10px] md:text-base leading-tight">{feature.title}</p>
                    <p className="text-[#8A94A6] text-[8px] md:text-sm mt-0.5 hidden sm:block">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom note */}
        <motion.div
          className="mt-2 md:mt-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-1.5 md:gap-2 glass rounded-full px-3 md:px-6 py-1.5 md:py-2.5">
            <svg className="w-3 h-3 md:w-5 md:h-5 text-[#D20000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-[#8A94A6] text-[10px] md:text-sm">
              <span className="text-white font-medium">Full details upon request</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
