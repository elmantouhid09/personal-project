import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import BirthdayCard from './components/BirthdayCard';
import FriendshipPage from './components/FriendshipPage';
import WishesPage from './components/WishesPage';
import PlayfulPage from './components/PlayfulPage';
import ClosingPage from './components/ClosingPage';
import QuestionPage from './components/QuestionPage';
import FloatingBackground from './components/FloatingBackground';
import { PageId } from './types';

export default function App() {
  const [page, setPage] = useState<PageId>(1);
  const [direction, setDirection] = useState<number>(1); // 1 = forward, -1 = backward

  const goToNextPage = () => {
    if (page < 6) {
      setDirection(1);
      setPage((prev) => (prev + 1) as PageId);
    }
  };

  const goToPrevPage = () => {
    if (page > 1) {
      setDirection(-1);
      setPage((prev) => (prev - 1) as PageId);
    }
  };

  const resetToStart = () => {
    setDirection(-1);
    setPage(1);
  };

  // Helper to determine which content to render based on page state
  const renderPageContent = () => {
    switch (page) {
      case 1:
        return <BirthdayCard onNext={goToNextPage} />;
      case 2:
        return <FriendshipPage onNext={goToNextPage} onBack={goToPrevPage} />;
      case 3:
        return <WishesPage onNext={goToNextPage} onBack={goToPrevPage} />;
      case 4:
        return <PlayfulPage onNext={goToNextPage} onBack={goToPrevPage} />;
      case 5:
        return <ClosingPage onNext={goToNextPage} onBack={goToPrevPage} />;
      case 6:
        return <QuestionPage onBack={goToPrevPage} onReset={resetToStart} />;
      default:
        return <BirthdayCard onNext={goToNextPage} />;
    }
  };

  // Sleek transition variants matching the 500-700ms ease-in-out request
  const variants = {
    initial: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? 50 : -50,
      scale: 0.98,
    }),
    animate: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.34, 1.56, 0.64, 1], // smooth custom spring-like ease-out
      },
    },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? -50 : 50,
      scale: 0.98,
      transition: {
        duration: 0.5,
        ease: [0.36, 0, 0.66, 1],
      },
    }),
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between items-center bg-radial from-[#fffdf9] to-[#fff5f5] overflow-hidden select-none font-sans py-8 px-4">
      {/* 1. Low-opacity drifting emojis background */}
      <FloatingBackground />

      {/* Decorative top header (subtle progress bar) */}
      <div className="w-full max-w-lg mx-auto z-10 flex flex-col items-center">
        <span className="text-[11px] font-bold text-pink-400/80 uppercase tracking-widest flex items-center gap-1.5 mb-2 select-none">
          <Heart className="w-3 h-3 animate-heartbeat fill-pink-300" />
          <span>Birthday Letter for Numa</span>
          <Heart className="w-3 h-3 animate-heartbeat fill-pink-300" />
        </span>
        
        {/* Progress indicator bar */}
        <div className="w-40 h-1.5 bg-pink-100/50 rounded-full overflow-hidden border border-pink-200/20 select-none">
          <motion.div
            className="h-full bg-gradient-to-r from-pink-400 to-amber-300"
            initial={{ width: '16.66%' }}
            animate={{ width: `${(page / 6) * 100}%` }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          />
        </div>
      </div>

      {/* 2. Primary interactive card stage */}
      <main className="w-full max-w-2xl mx-auto flex-1 flex items-center justify-center z-10 py-6 md:py-10">
        <div className="w-full relative overflow-hidden flex justify-center items-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full flex justify-center focus:outline-hidden"
            >
              {renderPageContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* 3. Bottom Navigation Actions (Pages 2, 3, 4, 5 only) */}
      <footer className="w-full max-w-lg mx-auto z-10 flex flex-col items-center gap-2 select-none pb-4">
        {page >= 2 && page <= 5 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="flex items-center justify-between w-full px-6"
          >
            {/* Back Button */}
            <button
              onClick={goToPrevPage}
              className="px-5 py-2.5 rounded-full border border-pink-200/50 hover:border-pink-300 bg-white/60 hover:bg-white text-pink-600 hover:text-pink-700 font-bold text-sm flex items-center gap-1.5 cursor-pointer select-none transition-all duration-300 shadow-2xs hover:shadow-pink-100/30"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>

            {/* Page Count Bubble */}
            <span className="text-xs font-bold text-pink-400/80 bg-pink-50/50 px-3 py-1 rounded-full border border-pink-200/20">
              {page} of 6
            </span>

            {/* Next / Continue Button */}
            <button
              onClick={goToNextPage}
              className="px-6 py-2.5 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-bold text-sm flex items-center gap-1.5 cursor-pointer select-none transition-all duration-300 shadow-md hover:shadow-pink-200/50 border border-pink-400/20 active:scale-95"
            >
              <span>{page === 5 ? 'Continue' : 'Next'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}

        {/* Mini copyright / dedication note */}
        <p className="text-[10px] text-neutral-400 font-bold tracking-wider uppercase mt-4 select-none">
          Made with Love for Zarin Tasnim Nubaha 🤍
        </p>
      </footer>
    </div>
  );
}
