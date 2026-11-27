import { motion, useTransform } from 'motion/react';
import type { MotionStyle, MotionValue } from 'motion/react';
import { useRef } from 'react';

import type { LandingIntro } from '../hooks/useLandingIntro';

export function Landing({ isPlaying, progress, reveal, skip }: LandingIntro) {
  const greeting = useRef<HTMLHeadingElement>(null);
  const blackout = useTransform(reveal, (value) => 1 - value);
  const skipOpacity = useTransform(reveal, [0.24, 0.88], [0, 1]);
  const captionOpacity = useTransform(progress, [0.4, 0.94], [0, 1]);
  const style: MotionStyle & { '--intro-progress': MotionValue<number> } = { '--intro-progress': progress };

  return (
    <motion.section
      id="home"
      className="landing"
      aria-labelledby="landing-title"
      data-intro-playing={isPlaying}
      style={style}
    >
      <h1 id="landing-title" className="landing__greeting" ref={greeting} tabIndex={-1}>
        <span className="landing__hello">Hello...</span>{' '}
        <span className="landing__name">I'm Julie!</span>
      </h1>
      <div className="landing__character" aria-hidden="true">
        <img src="/images/landing-character.svg" width={124} height={296} alt="" />
      </div>
      <motion.p className="landing__caption" style={{ opacity: captionOpacity }} aria-hidden={isPlaying}>
        Over here...
      </motion.p>
      <motion.div className="landing__blackout" style={{ opacity: blackout }} aria-hidden="true" />
      {isPlaying && (
        <motion.button
          type="button"
          className="landing__skip"
          style={{ opacity: skipOpacity }}
          onClick={() => {
            greeting.current?.focus({ preventScroll: true });
            skip();
          }}
        >
          Skip intro
        </motion.button>
      )}
    </motion.section>
  );
}
