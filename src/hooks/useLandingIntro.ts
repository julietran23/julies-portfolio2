import { animate, useMotionValue, useReducedMotion } from 'motion/react';
import { useCallback, useLayoutEffect, useRef, useState } from 'react';

const introTiming = {
  fadeSeconds: 1,
  holdMilliseconds: 5000,
  moveSeconds: 1.2,
};

export function useLandingIntro(isHomePage: boolean, opensAtGreeting: boolean) {
  const reducedMotion = useReducedMotion() ?? false;
  const [request, setRequest] = useState(opensAtGreeting ? 1 : 0);
  const [isPlaying, setIsPlaying] = useState(opensAtGreeting && !reducedMotion);
  const reveal = useMotionValue(isPlaying ? 0 : 1);
  const progress = useMotionValue(isPlaying ? 0 : 1);
  const startedRequest = useRef(0);
  const finishedRequest = useRef(0);
  const cancelActive = useRef<(() => void) | null>(null);

  const finish = useCallback((finished: number) => {
    cancelActive.current?.();
    finishedRequest.current = Math.max(finishedRequest.current, finished);
    reveal.jump(1);
    progress.jump(1);
    setIsPlaying(false);
  }, [progress, reveal]);

  useLayoutEffect(() => {
    if (!isHomePage) {
      // Keep a fresh Home request pending if the click precedes the route update.
      finish(startedRequest.current);
      return;
    }

    if (request === finishedRequest.current) {
      return;
    }

    startedRequest.current = request;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    if (reducedMotion) {
      finish(request);
      return;
    }

    reveal.jump(0);
    progress.jump(0);
    setIsPlaying(true);

    let holdTimer: number | undefined;
    let stopMove: (() => void) | undefined;
    const fade = animate(reveal, 1, {
      duration: introTiming.fadeSeconds,
      ease: 'easeInOut',
      onComplete: () => {
        holdTimer = window.setTimeout(() => {
          const move = animate(progress, 1, {
            duration: introTiming.moveSeconds,
            ease: [0.38, 0, 0.22, 1],
            onComplete: () => {
              cancelActive.current = null;
              finish(request);
            },
          });
          stopMove = () => move.stop();
        }, introTiming.holdMilliseconds);
      },
    });

    const cancel = () => {
      fade.stop();
      window.clearTimeout(holdTimer);
      stopMove?.();
      if (cancelActive.current === cancel) {
        cancelActive.current = null;
      }
    };

    cancelActive.current = cancel;
    return cancel;
  }, [finish, isHomePage, progress, reducedMotion, request, reveal]);

  const replay = useCallback(() => setRequest((current) => current + 1), []);
  const skip = useCallback(() => finish(request), [finish, request]);

  return { isPlaying, progress, reducedMotion, replay, reveal, skip };
}

export type LandingIntro = ReturnType<typeof useLandingIntro>;
