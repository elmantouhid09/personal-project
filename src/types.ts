/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface PageProps {
  onNext: () => void;
  onBack?: () => void;
}

export type PageId = 1 | 2 | 3 | 4 | 5 | 6;

export interface FloatingEmojiItem {
  id: number;
  emoji: string;
  delay: string;
  drift: string;
  rotation: string;
  duration: string;
  left: string;
  fontSize: string;
  opacity: number;
}
