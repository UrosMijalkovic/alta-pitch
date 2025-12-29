'use client';

import { motion } from 'motion/react';

const controlFeatures = [
  {
    title: "Mission Configuration",
    description: "Define what behaviors earn rewards",
    icon: (
      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Reward Management",
    description: "Set XP amounts and shop costs",
    icon: (
      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Real-time Analytics",
    description: "Track engagement as it happens",
    icon: (
      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "User Segmentation",
    description: "Target different user groups",
    icon: (
      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];


export default function BankControlSlide() {
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
            Bank Control
          </span>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-1 md:mb-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Your Platform, <span className="gradient-text">Your Rules</span>
          </h2>
          <p className="text-sm md:text-xl text-[#8A94A6] max-w-2xl mx-auto">
            Full administrative control with zero regulatory risk
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4">
          {/* Admin Dashboard Mock */}
          <motion.div
            className="glass rounded-lg md:rounded-2xl overflow-hidden"
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {/* Dashboard header */}
            <div className="bg-[#323232] p-2 md:p-4 border-b border-white/5 flex items-center gap-2 md:gap-3">
              <div className="flex gap-1 md:gap-1.5">
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#FF6B6B]" />
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#FFB84D]" />
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#D20000]" />
              </div>
              <span className="text-xs md:text-sm text-[#8A94A6]">Admin Dashboard — Alta banka</span>
            </div>

            {/* Dashboard content */}
            <div className="p-3 md:p-6">
              {/* Stats row */}
              <div className="grid grid-cols-3 gap-2 md:gap-4 mb-3 md:mb-4">
                {[
                  { label: 'Active Users', value: '24,521', change: '+12%' },
                  { label: 'Missions Done', value: '8,432', change: '+28%' },
                  { label: 'XP Distributed', value: '1.2M', change: '+45%' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="bg-[#323232] rounded-lg md:rounded-xl p-2 md:p-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                  >
                    <p className="text-[8px] md:text-xs text-[#8A94A6] mb-0.5 md:mb-1">{stat.label}</p>
                    <p className="text-sm md:text-xl font-bold text-white">{stat.value}</p>
                    <span className="text-[8px] md:text-xs text-[#D20000]">{stat.change}</span>
                  </motion.div>
                ))}
              </div>

              {/* Analytics section */}
              <div className="grid grid-cols-2 gap-2 md:gap-3">
                {/* Engagement Chart */}
                <div className="bg-[#262626] rounded-lg md:rounded-xl p-2 md:p-3">
                  <p className="text-[8px] md:text-xs text-[#8A94A6] mb-2">Weekly Engagement</p>
                  <div className="flex items-end gap-1 h-12 md:h-16">
                    {[35, 45, 38, 52, 48, 65, 72].map((height, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 bg-[#D20000] rounded-t"
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ delay: 0.6 + i * 0.05, duration: 0.4 }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-1 text-[6px] md:text-[8px] text-[#8A94A6]">
                    <span>Mon</span>
                    <span>Sun</span>
                  </div>
                </div>

                {/* Conversion Funnel */}
                <div className="bg-[#262626] rounded-lg md:rounded-xl p-2 md:p-3">
                  <p className="text-[8px] md:text-xs text-[#8A94A6] mb-2">Salary Migration Funnel</p>
                  <div className="space-y-1">
                    {[
                      { label: 'Started', value: 100, color: '#D20000' },
                      { label: 'Form Sent', value: 72, color: '#FF3333' },
                      { label: 'Completed', value: 48, color: '#D20000' },
                    ].map((step, i) => (
                      <motion.div
                        key={step.label}
                        className="relative"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + i * 0.1, duration: 0.3 }}
                      >
                        <div
                          className="h-3 md:h-4 rounded"
                          style={{
                            width: `${step.value}%`,
                            backgroundColor: step.color,
                          }}
                        />
                        <div className="flex justify-between text-[6px] md:text-[8px] mt-0.5">
                          <span className="text-[#8A94A6]">{step.label}</span>
                          <span className="text-white">{step.value}%</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Line chart area */}
              <div className="bg-[#262626] rounded-lg md:rounded-xl p-2 md:p-3 mt-2 md:mt-3">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-[8px] md:text-xs text-[#8A94A6]">Mission Completion Trend</p>
                  <div className="flex gap-2 text-[6px] md:text-[8px]">
                    <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#D20000]" />This Week</span>
                    <span className="flex items-center gap-1 text-[#8A94A6]"><span className="w-1.5 h-1.5 rounded-full bg-[#3498DB]" />Last Week</span>
                  </div>
                </div>
                <svg className="w-full h-10 md:h-14" viewBox="0 0 200 50" preserveAspectRatio="none">
                  {/* Last week line */}
                  <motion.path
                    d="M0,40 Q25,35 50,38 T100,32 T150,28 T200,25"
                    fill="none"
                    stroke="#3498DB"
                    strokeWidth="1.5"
                    strokeOpacity="0.4"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                  />
                  {/* This week line */}
                  <motion.path
                    d="M0,38 Q25,30 50,28 T100,20 T150,15 T200,8"
                    fill="none"
                    stroke="#D20000"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.9, duration: 1 }}
                  />
                  {/* Glow effect */}
                  <motion.path
                    d="M0,38 Q25,30 50,28 T100,20 T150,15 T200,8"
                    fill="none"
                    stroke="#D20000"
                    strokeWidth="4"
                    strokeOpacity="0.3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.9, duration: 1 }}
                  />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Features & Compliance */}
          <div className="space-y-3 md:space-y-6">
            {/* Control features */}
            <motion.div
              className="grid grid-cols-2 gap-2 md:gap-4"
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {controlFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="glass rounded-lg md:rounded-xl p-2 md:p-4 hover:border-[#D20000]/50 transition-all"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[#D20000]/20 text-[#D20000] flex items-center justify-center mb-2 md:mb-3">
                    {feature.icon}
                  </div>
                  <h4 className="text-white font-medium text-xs md:text-sm">{feature.title}</h4>
                  <p className="text-[10px] md:text-xs text-[#8A94A6] mt-0.5 md:mt-1">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* GDPR Compliance card */}
            <motion.div
              className="glass rounded-lg md:rounded-2xl p-3 md:p-6"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-[#D20000] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 md:w-7 md:h-7 text-[#1A1A1A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[#D20000] text-base md:text-xl">✓</span>
                    <h3 className="text-sm md:text-lg font-semibold text-white">GDPR-aligned by design</h3>
                  </div>
                  <p className="text-xs md:text-base text-[#8A94A6]">
                    No personal data ingestion, storage, or profiling
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
