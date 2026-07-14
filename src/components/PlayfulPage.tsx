import React from 'react';
import { Heart, Lock, ShieldAlert, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { PageProps } from '../types';

export default function PlayfulPage({ onNext, onBack }: PageProps) {
  return (
    <div className="flex flex-col items-center max-w-2xl mx-auto py-4 px-2">
      {/* Playful Stickers / Badges */}
      <div className="relative mb-6 flex items-center justify-center gap-4">
        {/* Playful Heart Lock */}
        <div className="relative w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center border-2 border-pink-300 animate-bob">
          <Lock className="w-6 h-6 text-pink-500 stroke-[2]" />
          <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-300 absolute top-4 left-4" />
        </div>

        {/* Winking sticker */}
        <div className="text-4xl animate-wave select-none bg-amber-100 border-2 border-amber-300 p-2 rounded-2xl shadow-xs">
          😉
        </div>

        {/* Alert/Teasing sticker */}
        <div className="w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center border border-rose-200 animate-pulse">
          <ShieldAlert className="w-5 h-5 text-rose-500 stroke-[2]" />
        </div>
      </div>

      <h2 className="font-display text-4xl md:text-5xl text-pink-600 font-bold mb-6 text-center select-none">
        A Tiny Warning... 😜
      </h2>

      {/* Decorative Playful Box */}
      <div className="relative w-full bg-pink-50/50 backdrop-blur-xs border-2 border-dashed border-pink-200 p-6 md:p-8 rounded-3xl shadow-sm mb-6 overflow-hidden">
        {/* Background playful floating shapes */}
        <div className="absolute top-2 right-4 text-xs font-bold text-pink-300/40 tracking-widest select-none font-mono uppercase rotate-12">
          PROPERTY OF ME 🔒
        </div>
        <div className="absolute bottom-2 left-4 text-xs font-bold text-pink-300/40 tracking-widest select-none font-mono uppercase -rotate-12">
          NO REFUNDS 😌
        </div>

        {/* Exact text requested */}
        <p className="relative text-neutral-800 font-bold text-lg md:text-xl leading-relaxed text-center font-sans z-10">
          "And yes, I get to call you my girlfriend, my friend, my best friend—whatever I want, 'cause you're mine. <span className="inline-block animate-bounce text-2xl">😌</span> And if anyone else tries to come between us... they'll have to suffer the consequences. Hahahaha. <span className="inline-block animate-pulse text-2xl">😂</span>"
        </p>

        {/* Playful mini badge */}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-rose-500 text-white px-3 py-1 rounded-full text-xs font-black shadow-md tracking-wider uppercase flex items-center gap-1 select-none">
          <span>Official Proclamation</span>
        </div>
      </div>

      {/* Fun warning divider */}
      <div className="flex items-center gap-1 mb-2">
        <Sparkles className="w-4 h-4 text-pink-400 animate-sparkle" />
        <span className="text-xs font-extrabold text-pink-600/80 tracking-widest uppercase select-none">
          Mine &amp; Mine Only
        </span>
        <Sparkles className="w-4 h-4 text-pink-400 animate-sparkle" style={{ animationDelay: '0.5s' }} />
      </div>
    </div>
  );
}
