'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// Slide Components
import TitleSlide from '@/components/slides/TitleSlide';
import AboutUsSlide from '@/components/slides/AboutUsSlide';
import ChallengeSlide from '@/components/slides/ChallengeSlide';
import InsightSlide from '@/components/slides/InsightSlide';
import SolutionSlide from '@/components/slides/SolutionSlide';
import MissionsSlide from '@/components/slides/MissionsSlide';
import ProgressionSlide from '@/components/slides/ProgressionSlide';
import DailyEngagementSlide from '@/components/slides/DailyEngagementSlide';
import LeaderboardsSlide from '@/components/slides/LeaderboardsSlide';
import SolvingChallengesSlide from '@/components/slides/SolvingChallengesSlide';
import BankControlSlide from '@/components/slides/BankControlSlide';
import IntegrationSlide from '@/components/slides/IntegrationSlide';
import ROISlide from '@/components/slides/ROISlide';
import NextStepsSlide from '@/components/slides/NextStepsSlide';
import ThankYouSlide from '@/components/slides/ThankYouSlide';

const slides = [
  { id: 1, component: TitleSlide, label: 'Title' },
  { id: 2, component: AboutUsSlide, label: 'About Us' },
  { id: 3, component: ChallengeSlide, label: 'Challenge' },
  { id: 4, component: InsightSlide, label: 'Insight' },
  { id: 5, component: SolutionSlide, label: 'Solution' },
  { id: 6, component: MissionsSlide, label: 'Missions' },
  { id: 7, component: ProgressionSlide, label: 'Progression' },
  { id: 8, component: DailyEngagementSlide, label: 'Daily Engagement' },
  { id: 9, component: LeaderboardsSlide, label: 'Leaderboards' },
  { id: 10, component: SolvingChallengesSlide, label: 'Solutions Map' },
  { id: 11, component: BankControlSlide, label: 'Bank Control' },
  { id: 12, component: IntegrationSlide, label: 'Integration' },
  { id: 13, component: ROISlide, label: 'ROI' },
  { id: 14, component: NextStepsSlide, label: 'Next Steps' },
  { id: 15, component: ThankYouSlide, label: 'Thank You' },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < slides.length) {
      setDirection(index > currentSlide ? 1 : -1);
      setCurrentSlide(index);
    }
  }, [currentSlide]);

  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide(prev => prev + 1);
    }
  }, [currentSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(prev => prev - 1);
    }
  }, [currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'Home') {
        e.preventDefault();
        goToSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        goToSlide(slides.length - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, goToSlide]);

  const CurrentSlideComponent = slides[currentSlide].component;

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <main className="h-screen w-screen overflow-hidden relative bg-[#0A0F14]">
      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Grid pattern background */}
      <div className="fixed inset-0 grid-pattern opacity-50" />

      {/* Gradient orbs */}
      <div className="fixed top-[-30%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#52AE30]/5 blur-[150px] pointer-events-none" />
      <div className="fixed bottom-[-30%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#006837]/5 blur-[120px] pointer-events-none" />

      {/* Slide container */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.3 },
            scale: { duration: 0.3 },
          }}
          className="absolute inset-0"
        >
          <CurrentSlideComponent />
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`nav-dot ${index === currentSlide ? 'active' : ''}`}
            aria-label={`Go to slide ${index + 1}: ${slide.label}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-[#121820] z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-[#52AE30] to-[#7BC962]"
          initial={{ width: 0 }}
          animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
      </div>

      {/* Slide counter */}
      <div className="fixed bottom-8 right-8 z-50 text-sm text-[#8A94A6] font-medium">
        <span className="text-[#52AE30]">{String(currentSlide + 1).padStart(2, '0')}</span>
        <span className="mx-2">/</span>
        <span>{String(slides.length).padStart(2, '0')}</span>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        disabled={currentSlide === 0}
        className={`fixed left-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full glass flex items-center justify-center transition-all ${
          currentSlide === 0
            ? 'opacity-30 cursor-not-allowed'
            : 'hover:bg-[#52AE30]/20 hover:border-[#52AE30]'
        }`}
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        disabled={currentSlide === slides.length - 1}
        className={`fixed right-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full glass flex items-center justify-center transition-all ${
          currentSlide === slides.length - 1
            ? 'opacity-30 cursor-not-allowed'
            : 'hover:bg-[#52AE30]/20 hover:border-[#52AE30]'
        }`}
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Keyboard hint */}
      <div className="fixed bottom-8 left-8 z-50 flex items-center gap-2 text-xs text-[#8A94A6]">
        <kbd className="px-2 py-1 rounded bg-[#1A222C] border border-[#2A323C] text-[10px]">
          <span className="sr-only">Arrow keys</span>
        </kbd>
        <span>Use arrow keys to navigate</span>
      </div>
    </main>
  );
}
