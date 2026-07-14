import React from 'react';
import { Heart, Sparkles, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { PageProps } from '../types';

export default function WishesPage({ onNext, onBack }: PageProps) {
  return (
    <div className="flex flex-col items-center max-w-2xl mx-auto py-4 px-2">
      {/* Decorative Golden Wish Accent */}
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-amber-400 rounded-full blur-xs opacity-20 animate-ping" />
        <div className="relative w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center border border-amber-200">
          <Star className="w-7 h-7 text-amber-500 fill-amber-400 animate-sparkle" />
        </div>
        <div className="absolute -top-1 -right-1 text-xl animate-pulse">💫</div>
        <div className="absolute -bottom-1 -left-2 text-xl" style={{ animationDelay: '0.8s' }}>🌸</div>
      </div>

      <h2 className="font-display text-4xl md:text-5xl text-amber-600 font-bold mb-6 text-center select-none">
        My Heartfelt Wishes ✨
      </h2>

      {/* Decorative Wishes Box */}
      <div className="relative w-full bg-white/75 backdrop-blur-xs border border-amber-100 p-6 md:p-8 rounded-3xl shadow-sm mb-6 border-b-4 border-b-amber-300">
        <span className="absolute top-4 left-4 text-3xl opacity-20 select-none">✨</span>
        <span className="absolute bottom-4 right-4 text-3xl opacity-20 select-none">✨</span>
        
        {/* Exact text requested */}
        <p className="relative text-neutral-700 font-medium text-base md:text-lg leading-relaxed text-center font-sans z-10 first-letter:text-2xl first-letter:font-bold first-letter:text-amber-500">
          Numa, I hope life gives you every happiness you've ever dreamed of. I pray that you achieve all your goals, succeed in everything you work for, and never lose the kind heart that makes you so special. No matter how busy life gets or where it takes us, I hope our friendship never changes. Thank you for being the incredible best friend that you are. You'll always have a special place in my life, and I'll always be grateful that I got to call you my best friend. Wishing you endless happiness, good health, success, and beautiful memories. Take care of yourself, Numa—you deserve nothing but the very best.
        </p>

        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-amber-100 border border-amber-200 text-amber-700 px-3 py-1 rounded-full text-xs font-bold shadow-xs flex items-center gap-1">
          <Heart className="w-3 h-3 text-pink-500 fill-pink-500 animate-heartbeat" />
          <span>For Nubaha</span>
        </div>
      </div>

      {/* Golden accent bar */}
      <div className="h-1 w-24 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 rounded-full mb-2" />
    </div>
  );
}
