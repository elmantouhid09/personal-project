import React from 'react';
import { BookOpen, GraduationCap, Heart, Quote, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { PageProps } from '../types';

export default function FriendshipPage({ onNext, onBack }: PageProps) {
  return (
    <div className="flex flex-col items-center max-w-2xl mx-auto py-4 px-2">
      {/* Visual Journey Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="relative">
          <BookOpen className="w-10 h-10 text-pink-400 stroke-[1.5]" />
          <span className="absolute -bottom-1 -right-1 bg-pink-100 text-[10px] font-bold text-pink-600 px-1 rounded-full border border-pink-200">
            Cl-7
          </span>
        </div>
        
        <div className="h-[1px] w-12 bg-gradient-to-r from-pink-300 to-amber-300 relative">
          <Heart className="w-3.5 h-3.5 text-pink-400 fill-pink-100 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="relative">
          <GraduationCap className="w-11 h-11 text-amber-500 stroke-[1.5]" />
          <span className="absolute -bottom-1 -right-1 bg-amber-100 text-[10px] font-bold text-amber-700 px-1 rounded-full border border-amber-200">
            Uni
          </span>
        </div>
      </div>

      <h2 className="font-display text-4xl md:text-5xl text-pink-600 font-bold mb-6 text-center select-none">
        Our Friendship Journey ✨
      </h2>

      {/* Decorative Quote Box */}
      <div className="relative w-full bg-white/75 backdrop-blur-xs border border-pink-100 p-6 md:p-8 rounded-3xl shadow-sm mb-6">
        <Quote className="absolute top-4 left-4 w-10 h-10 text-pink-200 rotate-180 opacity-60 pointer-events-none" />
        
        {/* Exact text requested */}
        <p className="relative text-neutral-700 font-medium text-base md:text-lg leading-relaxed text-center font-sans z-10 first-letter:text-2xl first-letter:font-bold first-letter:text-pink-500">
          From the very first day we became friends back in Class 7, I never imagined we'd still be standing beside each other all these years later. Now you're in your first semester of university and I'm already in my second, and looking back, it's amazing how much we've grown while our friendship has stayed just as strong. Through my happiest moments and my lowest ones, you've always been there for me. You've listened, supported, encouraged, and reminded me that I was never alone. I honestly can't thank you enough for everything you've done for me over the years.
        </p>

        <Quote className="absolute bottom-4 right-4 w-10 h-10 text-pink-200 opacity-60 pointer-events-none" />
        
        <div className="absolute -bottom-2 -right-2 text-2xl select-none animate-bounce">🎒</div>
        <div className="absolute -top-3 -left-3 text-2xl select-none animate-pulse">🎓</div>
      </div>

      {/* Cute gold sparkles divider */}
      <div className="flex items-center gap-1.5 mb-2">
        <Sparkles className="w-4 h-4 text-amber-400 animate-sparkle" />
        <span className="text-xs font-bold text-amber-600/70 tracking-widest uppercase select-none">
          Always by your side
        </span>
        <Sparkles className="w-4 h-4 text-amber-400 animate-sparkle" style={{ animationDelay: '1s' }} />
      </div>
    </div>
  );
}
