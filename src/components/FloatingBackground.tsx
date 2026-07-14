import React, { useMemo } from 'react';
import { FloatingEmojiItem } from '../types';

const EMOJIS = ['🤍', '❤️', '💕', '✨', '🎀', '🦋'];

export default function FloatingBackground() {
  const items = useMemo(() => {
    const list: FloatingEmojiItem[] = [];
    // 24 drifting emojis for beautiful background distribution
    for (let i = 0; i < 24; i++) {
      const emoji = EMOJIS[i % EMOJIS.length];
      const left = `${(i * 4.2 + Math.random() * 4) % 96 + 2}%`; // keep within 2% - 98% range
      const delay = `${-(Math.random() * 25).toFixed(1)}s`; // negative delay spreads them out instantly
      const duration = `${(18 + Math.random() * 14).toFixed(1)}s`; // slow, gentle drifting
      const drift = `${(Math.random() * 80 - 40).toFixed(0)}px`;
      const rotation = `${(Math.random() * 240 - 120).toFixed(0)}deg`;
      const fontSize = `${(16 + Math.random() * 18).toFixed(0)}px`;
      const opacity = parseFloat((0.08 + Math.random() * 0.10).toFixed(3)); // delicate and low opacity

      list.push({
        id: i,
        emoji,
        delay,
        drift,
        rotation,
        duration,
        left,
        fontSize,
        opacity,
      });
    }
    return list;
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-transparent select-none">
      {items.map((item) => (
        <span
          key={item.id}
          className="absolute bottom-0 text-center animate-float inline-block select-none"
          style={{
            left: item.left,
            fontSize: item.fontSize,
            '--delay': item.delay,
            '--drift': item.drift,
            '--rotation': item.rotation,
            '--duration': item.duration,
            '--float-opacity': item.opacity,
          } as React.CSSProperties}
        >
          {item.emoji}
        </span>
      ))}
    </div>
  );
}
