'use client';

import { motion } from 'motion/react';

const features = [
  { title: "Unified User Profiles", description: "Activity, progress, rewards, spend" },
  { title: "Behavioral Segmentation", description: "Active, loyal, at-risk, dormant" },
  { title: "Rule-Based Automations", description: "Actions trigger rewards & messages" },
  { title: "Campaign Management", description: "Tied to loyalty mechanics" },
  { title: "Built-in Analytics", description: "Retention, frequency, LTV signals" },
];

const flowExamples = [
  { event: "5 missions done", action: "Segment → Loyal", result: "Premium missions" },
  { event: "No login 7 days", action: "Segment → At-risk", result: "Comeback campaign" },
  { event: "Hits Level 10", action: "Update LTV", result: "Upsell notification" },
];

export default function CRMSlide() {
  return (
    <div className="h-full w-full flex flex-col justify-center px-4 md:px-12 lg:px-16 py-4 md:py-6">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <motion.div
          className="mb-3 md:mb-4 text-center"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#52AE30] text-xs md:text-sm font-medium uppercase tracking-widest mb-1 md:mb-2 block">
            Optional Add-On
          </span>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-1"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            In-House <span className="gradient-text">CRM System</span>
          </h2>
          <p className="text-xs md:text-base text-[#8A94A6] max-w-2xl mx-auto">
            Gamification + CRM working together as one engagement engine
          </p>
        </motion.div>

        {/* Main content - Diagram + Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4">
          {/* Left: Integration Diagram */}
          <motion.div
            className="glass rounded-lg md:rounded-xl p-3 md:p-4"
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h4 className="text-[#52AE30] text-[10px] md:text-xs font-medium uppercase tracking-wider mb-3">
              The Feedback Loop
            </h4>

            {/* Diagram */}
            <div className="space-y-2 md:space-y-3">
              {/* User Actions */}
              <motion.div
                className="bg-[#1A222C] rounded-lg p-2 md:p-3 text-center"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.3 }}
              >
                <p className="text-white font-medium text-xs md:text-sm">User Actions</p>
                <p className="text-[8px] md:text-[10px] text-[#8A94A6]">Transactions, logins, feature usage</p>
              </motion.div>

              {/* Arrow down */}
              <motion.div
                className="flex justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, duration: 0.2 }}
              >
                <svg className="w-4 h-4 md:w-5 md:h-5 text-[#52AE30]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.div>

              {/* Gamification Engine */}
              <motion.div
                className="bg-gradient-to-r from-[#52AE30]/20 to-[#006837]/20 border border-[#52AE30]/30 rounded-lg p-2 md:p-3 text-center"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.3 }}
              >
                <p className="text-[#52AE30] font-semibold text-xs md:text-sm">Gamification Engine</p>
                <p className="text-[8px] md:text-[10px] text-[#8A94A6]">Missions • XP • Levels • Rewards</p>
              </motion.div>

              {/* Bidirectional arrows */}
              <motion.div
                className="flex justify-center items-center gap-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.7, duration: 0.2 }}
              >
                <svg className="w-4 h-4 md:w-5 md:h-5 text-[#3498DB]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <span className="text-[8px] md:text-[10px] text-[#8A94A6]">Events sync both ways</span>
                <svg className="w-4 h-4 md:w-5 md:h-5 text-[#3498DB] rotate-180" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.div>

              {/* CRM System */}
              <motion.div
                className="bg-gradient-to-r from-[#3498DB]/20 to-[#9B59B6]/20 border border-[#3498DB]/30 rounded-lg p-2 md:p-3 text-center"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.3 }}
              >
                <p className="text-[#3498DB] font-semibold text-xs md:text-sm">CRM System</p>
                <p className="text-[8px] md:text-[10px] text-[#8A94A6]">Profiles • Segments • Automations • Campaigns</p>
              </motion.div>

              {/* Arrow down */}
              <motion.div
                className="flex justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.9, duration: 0.2 }}
              >
                <svg className="w-4 h-4 md:w-5 md:h-5 text-[#C5A572]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.div>

              {/* Personalized Response */}
              <motion.div
                className="bg-[#1A222C] rounded-lg p-2 md:p-3 text-center"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.3 }}
              >
                <p className="text-[#C5A572] font-medium text-xs md:text-sm">Personalized Response</p>
                <p className="text-[8px] md:text-[10px] text-[#8A94A6]">Right mission, right user, right time</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Features + Examples */}
          <div className="space-y-3 md:space-y-4">
            {/* Features grid */}
            <motion.div
              className="glass rounded-lg md:rounded-xl p-3 md:p-4"
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h4 className="text-[#52AE30] text-[10px] md:text-xs font-medium uppercase tracking-wider mb-2 md:mb-3">
                CRM Includes
              </h4>
              <div className="grid grid-cols-2 gap-1.5 md:gap-2">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="bg-[#1A222C] rounded-lg p-2 md:p-2.5"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.05, duration: 0.3 }}
                  >
                    <p className="text-white font-medium text-[10px] md:text-xs">{feature.title}</p>
                    <p className="text-[#8A94A6] text-[8px] md:text-[10px]">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Example flows */}
            <motion.div
              className="glass rounded-lg md:rounded-xl p-3 md:p-4"
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <h4 className="text-[#52AE30] text-[10px] md:text-xs font-medium uppercase tracking-wider mb-2 md:mb-3">
                Example Flows
              </h4>
              <div className="space-y-1.5 md:space-y-2">
                {flowExamples.map((flow, index) => (
                  <motion.div
                    key={flow.event}
                    className="flex items-center gap-1.5 md:gap-2 text-[9px] md:text-xs"
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.3 }}
                  >
                    <span className="text-[#52AE30] font-medium whitespace-nowrap">{flow.event}</span>
                    <svg className="w-3 h-3 text-[#8A94A6] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="text-[#3498DB] whitespace-nowrap">{flow.action}</span>
                    <svg className="w-3 h-3 text-[#8A94A6] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="text-[#C5A572] whitespace-nowrap">{flow.result}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom note */}
        <motion.div
          className="mt-3 md:mt-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-3 md:px-5 py-1.5 md:py-2">
            <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#52AE30]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-[#8A94A6] text-[10px] md:text-xs">
              <span className="text-white font-medium">Full details available upon request</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
