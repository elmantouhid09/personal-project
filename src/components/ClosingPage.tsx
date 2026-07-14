import React from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { PageProps } from '../types';

export default function ClosingPage({ onNext, onBack }: PageProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center max-w-xl mx-auto py-6 px-4">
      {/* Immersive Heartbeat Visual */}
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-pink-400 rounded-full blur-md opacity-25 scale-125 animate-heartbeat" />
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="relative w-28 h-28 bg-white rounded-full flex items-center justify-center border border-pink-100 shadow-md animate-heartbeat cursor-pointer"
          onClick={onNext}
        >
          <Heart className="w-16 h-16 text-pink-500 fill-pink-500 stroke-[1]" />
          <div className="absolute top-1 right-2 text-xl animate-sparkle">✨</div>
          <div className="absolute bottom-2 left-2 text-xl select-none animate-bounce">🤍</div>
        </motion.div>
      </div>

      {/* Big emotional letter closing with beautiful display font */}
      <div className="space-y-6 mb-8 select-none">
        {/* Caveat accent display for romantic tone */}
        <motion.p
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="font-display text-4xl md:text-5xl text-neutral-800 font-bold leading-relaxed"
        >
          Once again, Happy Birthday, Numa. <span className="inline-block text-pink-500 animate-heartbeat">❤️</span>
        </motion.p>

        {/* Larger I love you statement */}
        <motion.p
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="font-display text-5xl md:text-6xl text-pink-600 font-extrabold tracking-wide"
        >
          I love you. <span className="inline-block text-neutral-400">🤍</span>
        </motion.p>
      </div>

      {/* Decorative floral/sparkly separator */}
      <div className="flex items-center gap-1.5 justify-center mb-4 opacity-75">
        <Sparkles className="w-4 h-4 text-pink-400" />
        <Heart className="w-3.5 h-3.5 text-pink-300 fill-pink-300 animate-pulse" />
        <Sparkles className="w-4 h-4 text-pink-400" />
      </div>
    </div>
  );
}
