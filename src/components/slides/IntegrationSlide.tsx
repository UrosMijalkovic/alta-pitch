'use client';

import { motion } from 'motion/react';

const integrationPoints = [
  { label: "Event-based Architecture", detail: "Kafka integration for real-time events" },
  { label: "REST API", detail: "Full API access for all interactions" },
  { label: "Native Widget", detail: "Embeds seamlessly in your app" },
  { label: "Your Data, Your Control", detail: "Data stays in your infrastructure" },
];

export default function IntegrationSlide() {
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
            Technical Integration
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Seamless, <span className="gradient-text">Secure</span>, Scalable
          </h2>
          <p className="text-xl text-[#8A94A6] max-w-2xl mx-auto">
            Enterprise-grade integration with minimal development effort
          </p>
        </motion.div>

        {/* Architecture diagram */}
        <motion.div
          className="glass rounded-xl p-4 mb-4"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
            {/* OTP App */}
            <motion.div
              className="w-40 h-36 rounded-xl bg-[#52AE30]/10 border-2 border-[#52AE30]/30 flex flex-col items-center justify-center p-3"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="w-16 h-16 rounded-xl bg-[#52AE30] flex items-center justify-center mb-3">
                <span className="text-white font-bold text-lg">OTP</span>
              </div>
              <p className="text-white font-semibold text-center">OTP Bank App</p>
              <p className="text-xs text-[#8A94A6] text-center mt-1">iOS / Android / Web</p>
            </motion.div>

            {/* Connection arrows */}
            <motion.div
              className="flex flex-col items-center gap-2"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.4 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-0.5 bg-[#52AE30]" />
                <svg className="w-4 h-4 text-[#52AE30]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-xs text-[#8A94A6]">REST API</span>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#52AE30] rotate-180" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <div className="w-8 h-0.5 bg-[#52AE30]" />
              </div>
            </motion.div>

            {/* iDojo Platform */}
            <motion.div
              className="w-48 h-36 rounded-xl bg-gradient-to-br from-[#1A222C] to-[#0A0F14] border-2 border-[#52AE30] flex flex-col items-center justify-center p-3 green-glow"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#52AE30] to-[#006837] flex items-center justify-center mb-3">
                <span className="text-white font-bold text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>iD</span>
              </div>
              <p className="text-white font-semibold text-center">iDojo Platform</p>
              <div className="flex gap-2 mt-2">
                <span className="text-xs px-2 py-1 rounded bg-[#52AE30]/20 text-[#52AE30]">Missions</span>
                <span className="text-xs px-2 py-1 rounded bg-[#52AE30]/20 text-[#52AE30]">Rewards</span>
              </div>
            </motion.div>

            {/* Connection to Kafka */}
            <motion.div
              className="flex flex-col items-center gap-2"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-0.5 bg-[#FFB84D]" />
                <svg className="w-4 h-4 text-[#FFB84D]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-xs text-[#8A94A6]">Events</span>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#FFB84D] rotate-180" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <div className="w-8 h-0.5 bg-[#FFB84D]" />
              </div>
            </motion.div>

            {/* OTP Backend */}
            <motion.div
              className="w-40 h-36 rounded-xl bg-[#FFB84D]/10 border-2 border-[#FFB84D]/30 flex flex-col items-center justify-center p-3"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="w-16 h-16 rounded-xl bg-[#1A222C] border-2 border-[#FFB84D]/50 flex items-center justify-center mb-3">
                <svg className="w-8 h-8 text-[#FFB84D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <p className="text-white font-semibold text-center">OTP Backend</p>
              <p className="text-xs text-[#8A94A6] text-center mt-1">Kafka / Events</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Integration points */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {integrationPoints.map((point, index) => (
            <motion.div
              key={point.label}
              className="glass rounded-xl p-5 text-center hover:border-[#52AE30]/50 transition-all"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 + index * 0.1, duration: 0.4 }}
            >
              <div className="w-12 h-12 mx-auto rounded-xl bg-[#52AE30]/20 flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-[#52AE30]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-white font-semibold mb-1">{point.label}</h4>
              <p className="text-sm text-[#8A94A6]">{point.detail}</p>
            </motion.div>
          ))}
        </div>

        {/* Code snippet */}
        <motion.div
          className="mt-4 glass rounded-xl overflow-hidden"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          <div className="bg-[#1A222C] px-4 py-2 border-b border-white/5 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#FF6B6B]" />
              <div className="w-3 h-3 rounded-full bg-[#FFB84D]" />
              <div className="w-3 h-3 rounded-full bg-[#52AE30]" />
            </div>
            <span className="text-xs text-[#8A94A6] ml-2">Event Trigger Example</span>
          </div>
          <pre className="p-4 text-sm overflow-x-auto">
            <code className="text-[#8A94A6]">
              <span className="text-[#9B59B6]">POST</span> <span className="text-[#52AE30]">/api/v1/events</span>{'\n'}
              <span className="text-[#8A94A6]">{'{'}</span>{'\n'}
              <span className="text-[#3498DB]">  &quot;event_type&quot;</span>: <span className="text-[#FFB84D]">&quot;SALARY_RECEIVED&quot;</span>,{'\n'}
              <span className="text-[#3498DB]">  &quot;user_id&quot;</span>: <span className="text-[#FFB84D]">&quot;usr_123456&quot;</span>,{'\n'}
              <span className="text-[#3498DB]">  &quot;metadata&quot;</span>: {'{'} <span className="text-[#3498DB]">&quot;amount&quot;</span>: <span className="text-[#52AE30]">2500.00</span> {'}'}{'\n'}
              <span className="text-[#8A94A6]">{'}'}</span>
            </code>
          </pre>
        </motion.div>
      </div>
    </div>
  );
}
