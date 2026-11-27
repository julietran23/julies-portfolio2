import { motion, useTransform } from 'motion/react';
import type { MotionValue } from 'motion/react';

import type { HomeScroll } from '../hooks/useHomeScroll';

interface HomeBackdropProps {
  introProgress: MotionValue<number>;
  reducedMotion: boolean;
}

interface GlowPosition {
  x: number;
  y: number;
  diameter: number;
}

const glowPositions = {
  pink: {
    initial: { x: 37.4, y: 50, diameter: 0.576 },
    final: { x: 5, y: 17.3, diameter: 0.771 },
    work: { x: 7, y: 17, diameter: 0.79 },
    lower: { x: 13, y: 24, diameter: 0.85 },
  },
  lime: {
    initial: { x: 66.2, y: 61.1, diameter: 0.431 },
    final: { x: 43.6, y: 32.2, diameter: 0.576 },
    work: { x: 44, y: 31, diameter: 0.585 },
    lower: { x: 49, y: 35, diameter: 0.64 },
  },
} satisfies Record<string, Record<string, GlowPosition>>;

type GlowColor = keyof typeof glowPositions;

function interpolate(start: number, end: number, progress: number) {
  return start + (end - start) * progress;
}

function interpolateGlow(from: GlowPosition, to: GlowPosition, progress: number): GlowPosition {
  return {
    x: interpolate(from.x, to.x, progress),
    y: interpolate(from.y, to.y, progress),
    diameter: interpolate(from.diameter, to.diameter, progress),
  };
}

function easeScroll(start: number, end: number, position: number) {
  const progress = Math.min(1, Math.max(0, (position - start) / (end - start)));
  return progress * progress * (3 - 2 * progress);
}

interface BackdropGlowProps extends HomeBackdropProps {
  color: GlowColor;
  scrollDepth: MotionValue<number>;
}

function BackdropGlow({ color, scrollDepth, introProgress, reducedMotion }: BackdropGlowProps) {
  const positions = glowPositions[color];
  const transform = useTransform(() => {
    const intro = introProgress.get();
    const depth = scrollDepth.get();
    const workProgress = easeScroll(0.1, 1, depth);
    const portraitAdjustment = (1 - intro) * (1 - workProgress);
    let position = interpolateGlow(positions.initial, positions.final, intro);
    if (!reducedMotion) {
      position = interpolateGlow(position, positions.work, workProgress);
      position = interpolateGlow(position, positions.lower, easeScroll(1, 3.2, depth));
    }

    const x = `calc(${position.x}vw + var(--glow-initial-shift-x, 0vw) * ${portraitAdjustment})`;
    const y = `calc(${position.y}svh + var(--glow-initial-shift-y, 0svh) * ${portraitAdjustment})`;
    return `translate3d(${x}, ${y}, 0) scale(${position.diameter})`;
  });
  const opacity = useTransform(() => {
    const depth = scrollDepth.get();
    return 1 - 0.12 * easeScroll(0.1, 1, depth) - 0.045 * easeScroll(1, 3.2, depth);
  });

  return <motion.div className={`home-backdrop__glow home-backdrop__glow--${color}`} style={{ transform, opacity }} />;
}

export function HomeBackdrop({
  introProgress,
  reducedMotion,
  landingHeight,
  scrollDepth,
}: HomeBackdropProps & Pick<HomeScroll, 'landingHeight' | 'scrollDepth'>) {
  const shadeTransform = useTransform(() => {
    const depth = Math.min(1, Math.max(0, scrollDepth.get()));
    // Match the landing's lower edge so the shade is fully present under work content.
    return `translate3d(0, ${(0.6 - depth) * 100}svh, 0)`;
  });
  const shadeOpacity = useTransform(() => {
    const depth = scrollDepth.get();
    const shadeEntry = Math.min(0.09, 64 / Math.max(landingHeight.get(), 1));
    return 0.59 * easeScroll(0, shadeEntry, depth) + 0.025 * easeScroll(1, 3.2, depth);
  });

  return (
    <div className="home-backdrop" aria-hidden="true">
      <BackdropGlow color="pink" scrollDepth={scrollDepth} introProgress={introProgress} reducedMotion={reducedMotion} />
      <BackdropGlow color="lime" scrollDepth={scrollDepth} introProgress={introProgress} reducedMotion={reducedMotion} />
      <motion.div className="home-backdrop__shade" style={{ transform: shadeTransform, opacity: shadeOpacity }} />
    </div>
  );
}
