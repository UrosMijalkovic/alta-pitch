'use client';

import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

const metrics = [
  {
    label: "Daily Active Users",
    current: "12%",
    target: "+40%",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    color: "#52AE30",
  },
  {
    label: "Feature Activation",
    current: "35%",
    target: "+60%",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "#3498DB",
  },
  {
    label: "Salary Migration",
    current: "8%",
    target: "+25%",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    color: "#C5A572",
  },
  {
    label: "90-Day Retention",
    current: "42%",
    target: "+35%",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
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
            ROI Projection
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Measurable <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-xl text-[#8A94A6] max-w-2xl mx-auto">
            Every metric trackable in real-time with clear ROI visibility
          </p>
        </motion.div>

        {/* Metrics grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              className="glass rounded-xl p-4 relative overflow-hidden group hover:border-[#52AE30]/50 transition-all"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
            >
              {/* Background glow */}
              <div
                className="absolute top-0 right-0 w-24 h-24 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity"
                style={{ backgroundColor: metric.color }}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${metric.color}20`, color: metric.color }}
                >
                  {metric.icon}
                </div>

                {/* Label */}
                <p className="text-[#8A94A6] text-sm mb-2">{metric.label}</p>

                {/* Target */}
                <div className="flex items-end gap-2">
                  <motion.span
                    className="text-4xl font-bold"
                    style={{ color: metric.color }}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                  >
                    {metric.target}
                  </motion.span>
                  <span className="text-[#8A94A6] text-sm mb-1">target</span>
                </div>

                {/* Current baseline */}
                <p className="text-xs text-[#8A94A6] mt-2">
                  Current: <span className="text-white">{metric.current}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact summary */}
        <motion.div
          className="glass rounded-xl p-6"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Engagement lift */}
            <div className="text-center">
              <motion.div
                className="text-5xl md:text-6xl font-bold text-[#52AE30] mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                <AnimatedCounter target={40} />%
              </motion.div>
              <p className="text-white font-medium">Engagement Lift</p>
              <p className="text-sm text-[#8A94A6] mt-1">Average across all metrics</p>
            </div>

            {/* Cost reduction */}
            <div className="text-center border-x border-white/5 px-8">
              <motion.div
                className="text-5xl md:text-6xl font-bold text-[#3498DB] mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                <AnimatedCounter target={60} />%
              </motion.div>
              <p className="text-white font-medium">Lower Acquisition Cost</p>
              <p className="text-sm text-[#8A94A6] mt-1">Through organic engagement</p>
            </div>

            {/* LTV increase */}
            <div className="text-center">
              <motion.div
                className="text-5xl md:text-6xl font-bold text-[#C5A572] mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                <AnimatedCounter target={25} />%
              </motion.div>
              <p className="text-white font-medium">Higher Customer LTV</p>
              <p className="text-sm text-[#8A94A6] mt-1">From salary migration</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom note */}
        <motion.div
          className="mt-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-3 glass rounded-full px-6 py-3">
            <svg className="w-5 h-5 text-[#52AE30]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <p className="text-[#8A94A6]">
              All projections based on{' '}
              <span className="text-[#52AE30] font-medium">industry benchmarks</span>
              {' '}and{' '}
              <span className="text-[#52AE30] font-medium">similar implementations</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
