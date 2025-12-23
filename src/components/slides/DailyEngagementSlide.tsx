'use client';

import { motion } from 'motion/react';

const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const currentDay = 4; // Thursday (0-indexed)

const dailyRewards = [
  { day: 1, xp: 10, claimed: true },
  { day: 2, xp: 15, claimed: true },
  { day: 3, xp: 20, claimed: true },
  { day: 4, xp: 25, claimed: true },
  { day: 5, xp: 35, claimed: false, special: true },
  { day: 6, xp: 40, claimed: false },
  { day: 7, xp: 100, claimed: false, special: true },
];

export default function DailyEngagementSlide() {
  return (
    <div className="h-full w-full flex flex-col justify-center px-6 md:px-12 lg:px-16 py-6">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <motion.div
          className="mb-6 text-center"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#52AE30] text-sm font-medium uppercase tracking-widest mb-4 block">
            Daily Engagement
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Build <span className="gradient-text">Habits</span>,
            <br />
            Not Campaigns
          </h2>
          <p className="text-xl text-[#8A94A6] max-w-2xl mx-auto">
            Daily login rewards create consistent engagement without expensive promotions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* 7-Day Streak Calendar */}
          <motion.div
            className="glass rounded-xl p-4"
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-white">Weekly Streak</h3>
                <p className="text-sm text-[#8A94A6]">Day {currentDay + 1} of 7</p>
              </div>
              <div className="flex items-center gap-2 bg-[#52AE30]/20 rounded-full px-3 py-1">
                <svg className="w-4 h-4 text-[#52AE30]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                </svg>
                <span className="text-[#52AE30] font-semibold text-sm">{currentDay + 1} day streak!</span>
              </div>
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-2">
              {dailyRewards.map((reward, index) => (
                <motion.div
                  key={reward.day}
                  className={`relative flex flex-col items-center p-3 rounded-xl transition-all ${
                    reward.claimed
                      ? 'bg-[#52AE30]/20 border border-[#52AE30]/30'
                      : index === currentDay
                      ? 'bg-[#52AE30] border border-[#52AE30]'
                      : 'bg-[#1A222C] border border-transparent'
                  } ${reward.special && !reward.claimed ? 'border-[#C5A572]/50' : ''}`}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.05, duration: 0.3 }}
                >
                  {reward.special && (
                    <div className="absolute -top-1 -right-1">
                      <svg className="w-4 h-4 text-[#C5A572]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  )}
                  <span className="text-xs text-[#8A94A6] mb-1">{weekDays[index]}</span>
                  {reward.claimed ? (
                    <div className="w-6 h-6 rounded-full bg-[#52AE30] flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  ) : (
                    <span className={`text-sm font-bold ${index === currentDay ? 'text-white' : 'text-[#8A94A6]'}`}>
                      +{reward.xp}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Streak message */}
            <motion.div
              className="mt-4 p-3 bg-gradient-to-r from-[#52AE30]/10 to-transparent rounded-lg border-l-4 border-[#52AE30]"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <p className="text-white text-sm">
                <span className="font-semibold">Don&apos;t break your streak!</span> Complete Day 5 for{' '}
                <span className="text-[#52AE30] font-bold">+35 bonus XP</span>
              </p>
            </motion.div>
          </motion.div>

          {/* 30-Day Calendar */}
          <motion.div
            className="glass rounded-xl p-4"
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-white">Monthly Challenge</h3>
                <p className="text-sm text-[#8A94A6]">18 of 30 days completed</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-[#C5A572]">+500 XP</p>
                <p className="text-xs text-[#8A94A6]">completion bonus</p>
              </div>
            </div>

            {/* 30-day mini calendar */}
            <div className="grid grid-cols-7 gap-1.5">
              {Array.from({ length: 30 }, (_, i) => {
                const isCompleted = i < 18;
                const isToday = i === 18;
                const isMilestone = (i + 1) % 7 === 0;
                return (
                  <motion.div
                    key={i}
                    className={`w-full aspect-square rounded-lg flex items-center justify-center text-xs font-medium ${
                      isCompleted
                        ? 'bg-[#52AE30]/30 text-[#52AE30]'
                        : isToday
                        ? 'bg-[#52AE30] text-white'
                        : isMilestone
                        ? 'bg-[#C5A572]/20 text-[#C5A572] border border-[#C5A572]/30'
                        : 'bg-[#1A222C] text-[#8A94A6]'
                    }`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.015, duration: 0.2 }}
                  >
                    {isCompleted ? '✓' : i + 1}
                  </motion.div>
                );
              })}
            </div>

            {/* Progress bar */}
            <div className="mt-6">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-[#8A94A6]">Progress</span>
                <span className="text-white font-medium">60%</span>
              </div>
              <div className="h-2 bg-[#1A222C] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#52AE30] to-[#C5A572] rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '60%' }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
              </div>
            </div>

            {/* Milestone rewards */}
            <div className="mt-4 flex justify-between">
              {[7, 14, 21, 30].map((day, index) => (
                <motion.div
                  key={day}
                  className="text-center"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.1 + index * 0.1, duration: 0.3 }}
                >
                  <div
                    className={`w-10 h-10 rounded-full mx-auto mb-1 flex items-center justify-center ${
                      day <= 18
                        ? 'bg-[#52AE30] text-white'
                        : 'bg-[#1A222C] text-[#8A94A6] border border-[#2A323C]'
                    }`}
                  >
                    {day <= 18 ? (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                  </div>
                  <p className="text-xs text-[#8A94A6]">Day {day}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Key metrics */}
        <motion.div
          className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          {[
            { label: 'Average streak length', value: '12 days' },
            { label: 'DAU increase', value: '+45%' },
            { label: 'Retention lift', value: '+38%' },
            { label: 'Avg. sessions/week', value: '5.2' },
          ].map((stat, index) => (
            <div key={stat.label} className="glass rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-[#52AE30]">{stat.value}</p>
              <p className="text-xs text-[#8A94A6] mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
