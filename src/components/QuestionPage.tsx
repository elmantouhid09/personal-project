import React, { useState } from 'react';
import { Heart, RefreshCw, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface QuestionPageProps {
  onBack: () => void;
  onReset: () => void;
}

interface CelebrationParticle {
  id: number;
  emoji: string;
  tx: string;
  ty: string;
  rot: string;
  duration: string;
  size: string;
}

export default function QuestionPage({ onBack, onReset }: QuestionPageProps) {
  const [isCelebrated, setIsCelebrated] = useState(false);
  const [particles, setParticles] = useState<CelebrationParticle[]>([]);

  const handleChoice = () => {
    setIsCelebrated(true);
    
    // Generate 60 randomized particles for a luscious celebration burst!
    const emojis = ['❤️', '💖', '💕', '✨', '💍', '🌸', '🎈', '🤍', '🎀', '🦋'];
    const newList: CelebrationParticle[] = [];
    for (let i = 0; i < 60; i++) {
      const angle = Math.random() * Math.PI * 2;
      // Shoot particles outward in a beautiful circle
      const distance = 100 + Math.random() * 260; 
      const tx = `${(Math.cos(angle) * distance).toFixed(0)}px`;
      const ty = `${(Math.sin(angle) * distance).toFixed(0)}px`;
      const rot = `${(Math.random() * 720 - 360).toFixed(0)}deg`;
      const duration = `${(1.6 + Math.random() * 1.4).toFixed(2)}s`;
      const size = `${(18 + Math.random() * 22).toFixed(0)}px`;
      const emoji = emojis[Math.floor(Math.random() * emojis.length)];

      newList.push({
        id: i,
        emoji,
        tx,
        ty,
        rot,
        duration,
        size,
      });
    }
    setParticles(newList);
  };

  const handleRestart = () => {
    setIsCelebrated(false);
    setParticles([]);
    onReset();
  };

  if (isCelebrated) {
    return (
      <div className="relative flex flex-col items-center justify-center text-center max-w-xl mx-auto py-8 px-4">
        {/* Particle Overlay centered around the core content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50">
          {particles.map((p) => (
            <span
              key={p.id}
              className="absolute animate-particle select-none text-center"
              style={{
                fontSize: p.size,
                '--tx': p.tx,
                '--ty': p.ty,
                '--rot': p.rot,
                '--duration': p.duration,
              } as React.CSSProperties}
            >
              {p.emoji}
            </span>
          ))}
        </div>

        {/* Celebration Card */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', damping: 15 }}
          className="bg-white border-2 border-pink-100 p-8 md:p-10 rounded-3xl shadow-lg border-b-8 border-b-pink-400 relative"
        >
          {/* Heart burst decoration */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center border-2 border-pink-200 shadow-sm animate-heartbeat">
            <Heart className="w-9 h-9 text-pink-500 fill-pink-500" />
          </div>

          <div className="mt-4 space-y-6">
            <h2 className="font-display text-5xl md:text-6xl text-pink-600 font-black leading-tight select-none">
              Yayy! 🎉
            </h2>

            {/* Exact success message requested */}
            <p className="text-xl md:text-2xl text-neutral-800 font-extrabold tracking-tight select-none leading-relaxed">
              Yayy! You're stuck with me forever now 🤍🎉
            </p>

            {/* Playful subtext reinforcing the sweet tone */}
            <p className="text-sm md:text-base text-neutral-500 font-medium max-w-sm mx-auto select-none leading-relaxed">
              You made the perfect choice! (Not like you had any other choice anyway 😜) I'm the luckiest person in the world to have you. Happy Birthday, Numa!
            </p>

            <div className="pt-4 flex justify-center">
              <span className="text-3xl select-none animate-bounce">💍🔒✨💕</span>
            </div>
          </div>
        </motion.div>

        {/* Read again from start button/link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-10"
        >
          <button
            onClick={handleRestart}
            className="text-pink-600 hover:text-pink-700 font-extrabold text-base flex items-center gap-2 underline underline-offset-4 cursor-pointer select-none transition-colors duration-200 group"
          >
            <RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
            <span>Read it again from the start 💌</span>
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto py-4 px-2">
      {/* Proposal rings and hearts */}
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-pink-100 rounded-full blur-xs opacity-50 scale-125 animate-pulse" />
        <div className="relative w-16 h-16 bg-white rounded-2xl flex items-center justify-center border border-pink-200 shadow-sm animate-bob">
          <span className="text-3xl select-none">💍</span>
        </div>
        <div className="absolute -top-2 -right-3 text-2xl select-none animate-bounce">✨</div>
        <div className="absolute -bottom-2 -left-2 text-2xl select-none animate-pulse">🤍</div>
      </div>

      {/* Main Question Heading */}
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-pink-600 font-extrabold mb-10 select-none max-w-lg leading-tight">
        Will you be my best friend and everything forever? 💍🤍
      </h2>

      {/* Interactive Options Container */}
      <div className="flex flex-col sm:flex-row gap-5 w-full max-w-md px-4 mt-2">
        {/* YES option */}
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          onClick={handleChoice}
          className="flex-1 py-4 px-6 bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white font-extrabold text-lg rounded-2xl shadow-md border border-pink-300/20 cursor-pointer select-none transition-all duration-300 flex items-center justify-center gap-2 active:scale-95"
        >
          <span>YES 🥹💕</span>
        </motion.button>

        {/* Playful Force choice option */}
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          onClick={handleChoice}
          className="flex-1 py-4 px-6 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-white font-extrabold text-sm rounded-2xl shadow-md border border-amber-300/20 cursor-pointer select-none transition-all duration-300 flex items-center justify-center leading-snug active:scale-95"
        >
          <span>YOU HAVE NO CHOICES LEFT, ACCEPT UR FATE WITH ME 😌</span>
        </motion.button>
      </div>

      {/* Small decorative message */}
      <div className="flex items-center gap-1 mt-10 opacity-75">
        <Sparkles className="w-3.5 h-3.5 text-pink-400 animate-sparkle" />
        <span className="text-xs font-semibold text-neutral-400 tracking-wide select-none font-sans">
          Lock in your answer
        </span>
        <Sparkles className="w-3.5 h-3.5 text-pink-400 animate-sparkle" style={{ animationDelay: '0.6s' }} />
      </div>
    </div>
  );
}
