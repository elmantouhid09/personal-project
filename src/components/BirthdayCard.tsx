import React from 'react';
import { Gift, Heart, MailOpen } from 'lucide-react';
import { motion } from 'motion/react';
import { PageProps } from '../types';

export default function BirthdayCard({ onNext }: PageProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-6 px-4">
      {/* Decorative Card Visual */}
      <div className="relative mb-8">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="relative w-44 h-44 bg-pink-100 rounded-3xl flex items-center justify-center shadow-md border border-pink-200 animate-bob cursor-pointer group"
          onClick={onNext}
        >
          {/* Bobbing cute emojis */}
          <div className="absolute -top-4 -right-3 text-4xl select-none">🎈</div>
          <div className="absolute -bottom-3 -left-4 text-4xl select-none">🎂</div>
          <div className="absolute -top-5 left-8 text-2xl select-none animate-sparkle">✨</div>
          <div className="absolute -right-4 bottom-8 text-4xl select-none" style={{ animationDelay: '1.2s' }}>🎉</div>

          {/* Letter Peeking out */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-pink-50 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
            <MailOpen className="w-16 h-16 text-pink-500 stroke-[1.2]" />
          </div>

          <div className="absolute inset-0 bg-gradient-to-tr from-pink-300/10 to-amber-200/10 rounded-3xl pointer-events-none" />
        </motion.div>
      </div>

      {/* Title with Caveat Accent & Bold Text */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="space-y-3"
      >
        <h1 className="font-display text-6xl md:text-7xl text-pink-600 font-bold tracking-normal leading-tight select-none">
          Happy Birthday, Numa! 🎂🤍
        </h1>
        {/* Small subtitle with Zarin Tasnim Nubaha name */}
        <p className="text-xs tracking-widest text-amber-600 font-bold uppercase font-sans">
          Zarin Tasnim Nubaha
        </p>
      </motion.div>

      {/* Short Subheading */}
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-base md:text-lg text-neutral-600 font-medium max-w-sm mx-auto mt-5 leading-relaxed"
      >
        I made you something... click below to read it 💌
      </motion.p>

      {/* Start Button */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-8"
      >
        <button
          onClick={onNext}
          className="px-8 py-4 bg-gradient-to-r from-pink-400 to-amber-400 hover:from-pink-500 hover:to-amber-500 text-white font-bold text-lg rounded-full shadow-md hover:shadow-pink-200/50 transition-all duration-300 flex items-center gap-3 cursor-pointer select-none border border-pink-300/20 active:scale-95"
        >
          <Gift className="w-5 h-5 animate-bounce" />
          <span>Start Reading</span>
          <Heart className="w-5 h-5 text-white fill-white animate-heartbeat" />
        </button>
      </motion.div>
    </div>
  );
}
