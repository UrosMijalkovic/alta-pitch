'use client';

import { motion } from 'motion/react';

const timelineSteps = [
  {
    week: "Week 1-2",
    title: "Configuration Workshop",
    description: "Define missions, rewards, and progression tailored to OTP's goals",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    week: "Week 2-3",
    title: "Mission Design for OTP",
    description: "Create banking-specific journeys: onboarding, card activation, salary migration",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    week: "Week 3-4",
    title: "Integration & Testing",
    description: "Connect to OTP systems, validate event flows, QA testing",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    week: "Week 5",
    title: "Pilot Launch",
    description: "Go live with selected user segment, monitor and optimize",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
];

export default function NextStepsSlide() {
  return (
    <div className="h-full w-full flex flex-col justify-center px-6 md:px-12 lg:px-16 py-6">
      <div className="max-w-5xl mx-auto w-full">
        {/* Header */}
        <motion.div
          className="mb-6 text-center"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#52AE30] text-sm font-medium uppercase tracking-widest mb-4 block">
            Next Steps
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Let&apos;s Build This <span className="gradient-text">Together</span>
          </h2>
          <p className="text-xl text-[#8A94A6] max-w-2xl mx-auto">
            A clear path from today to transforming banking behavior
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="mb-6">
          {timelineSteps.map((step, index) => (
            <motion.div
              key={step.week}
              className="timeline-item mb-4 last:mb-0"
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.15, duration: 0.5 }}
            >
              <div className="timeline-dot">{index + 1}</div>
              <div className="glass rounded-xl p-4 ml-4 hover:border-[#52AE30]/50 transition-all group">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#52AE30]/20 text-[#52AE30] group-hover:bg-[#52AE30]/30 transition-colors"
                  >
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-[#52AE30] font-medium text-sm">{step.week}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-1">{step.title}</h3>
                    <p className="text-[#8A94A6]">{step.description}</p>
                  </div>
                  {index === timelineSteps.length - 1 && (
                    <motion.div
                      className="flex items-center gap-2 px-4 py-2 bg-[#52AE30] rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.8, duration: 0.3, type: 'spring' }}
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white font-medium text-sm">Go Live</span>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <div className="glass rounded-2xl p-6 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#52AE30]/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <motion.h3
                className="text-2xl md:text-3xl font-bold text-white mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.1, duration: 0.4 }}
              >
                Ready to Transform Banking Behavior?
              </motion.h3>

              <p className="text-base text-[#8A94A6] mb-4 max-w-2xl mx-auto">
                Schedule a discovery call to explore how iDojo can help OTP Bank achieve its engagement and retention goals.
              </p>

              {/* Partnership logos */}
              <div className="flex items-center justify-center gap-6 mb-4">
                <motion.div
                  className="flex flex-col items-center"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.4 }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#52AE30] to-[#006837] flex items-center justify-center green-glow">
                    <span className="text-2xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>iD</span>
                  </div>
                  <span className="mt-2 text-sm text-[#8A94A6]">iDojo</span>
                </motion.div>

                <motion.div
                  className="text-[#52AE30]"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.3, duration: 0.3 }}
                >
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.div>

                <motion.div
                  className="flex flex-col items-center"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.4 }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#52AE30] flex items-center justify-center">
                    <span className="text-xl font-bold text-white">OTP</span>
                  </div>
                  <span className="mt-2 text-sm text-[#8A94A6]">OTP Bank</span>
                </motion.div>
              </div>

              {/* Contact info */}
              <motion.div
                className="inline-flex items-center gap-4 glass rounded-full px-6 py-3"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.4 }}
              >
                <div className="w-2 h-2 rounded-full bg-[#52AE30] animate-pulse" />
                <span className="text-[#8A94A6]">
                  Contact us at{' '}
                  <span className="text-[#52AE30] font-medium">hello@idojo.io</span>
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
