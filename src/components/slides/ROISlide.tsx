'use client';

import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

const metrics = [
  {
    label: "Daily Active Users",
    value: "+22%",
    description: "After gamified onboarding",
    icon: (
      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    color: "#52AE30",
  },
  {
    label: "60-Day Retention",
    value: "+15%",
    description: "With reward-based goal tracking",
    icon: (
      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    color: "#3498DB",
  },
  {
    label: "Deposit Increase",
    value: "+32%",
    description: "After gamified savings features",
    icon: (
      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "#C5A572",
  },
  {
    label: "Online Bill Payments",
    value: "+26%",
    description: "Through engagement mechanics",
    icon: (
      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    color: "#9B59B6",
  },
];

function AnimatedCounter({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    const timeout = setTimeout(() => {
      animationFrame = requestAnimationFrame(animate);
    }, 500);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(animationFrame);
    };
  }, [target, duration]);

  return <span>{count}</span>;
}

export default function ROISlide() {
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
          <span className="text-[#52AE30] text-xs md:text-sm font-medium uppercase tracking-widest mb-2 md:mb-4 block">
            Industry Benchmarks
          </span>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-1 md:mb-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Proven <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-sm md:text-xl text-[#8A94A6] max-w-2xl mx-auto">
            Real results from gamification in banking and fintech
          </p>
        </motion.div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 mb-4 md:mb-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              className="glass rounded-lg md:rounded-xl p-2 md:p-4 relative overflow-hidden group hover:border-[#52AE30]/50 transition-all"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
            >
              {/* Background glow */}
              <div
                className="absolute top-0 right-0 w-16 md:w-24 h-16 md:h-24 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity"
                style={{ backgroundColor: metric.color }}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className="w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center mb-2 md:mb-4"
                  style={{ backgroundColor: `${metric.color}20`, color: metric.color }}
                >
                  {metric.icon}
                </div>

                {/* Value */}
                <motion.span
                  className="text-2xl md:text-4xl font-bold block mb-1"
                  style={{ color: metric.color }}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                >
                  {metric.value}
                </motion.span>

                {/* Label */}
                <p className="text-white font-medium text-[10px] md:text-sm">{metric.label}</p>

                {/* Description */}
                <p className="text-[8px] md:text-xs text-[#8A94A6] mt-0.5 md:mt-1">{metric.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hero metric */}
        <motion.div
          className="glass rounded-lg md:rounded-xl p-4 md:p-6 mb-3 md:mb-4"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <div className="text-center md:text-left">
              <motion.div
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#52AE30] mb-1 md:mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                +<AnimatedCounter target={270} />%
              </motion.div>
              <p className="text-white font-medium text-sm md:text-xl">Transaction Volume Increase</p>
              <p className="text-[10px] md:text-sm text-[#8A94A6] mt-1">After adding gamified financial missions</p>
            </div>

            <div className="hidden md:block w-px h-20 bg-white/10" />

            <div className="flex gap-4 md:gap-8">
              <div className="text-center">
                <div className="text-xl md:text-3xl font-bold text-[#3498DB]">Real</div>
                <p className="text-[10px] md:text-sm text-[#8A94A6]">Industry Data</p>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-3xl font-bold text-[#C5A572]">Proven</div>
                <p className="text-[10px] md:text-sm text-[#8A94A6]">Results</p>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-3xl font-bold text-[#9B59B6]">Trackable</div>
                <p className="text-[10px] md:text-sm text-[#8A94A6]">Metrics</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Sources */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <p className="text-[8px] md:text-[10px] text-[#8A94A6]/70 max-w-3xl mx-auto leading-relaxed">
            *Sources: Tapix summary of Deloitte-referenced findings, Mastercard x Flourish Fi,
            Systematic Review on Gamification in Fintech (2025), Adjust & App Annie report on banking app loyalty
          </p>
        </motion.div>
      </div>
    </div>
  );
}
