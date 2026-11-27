import { useMotionValue, useScroll, useTransform } from 'motion/react';
import { useLayoutEffect } from 'react';

export function useHomeScroll(isHomePage: boolean) {
  const { scrollY } = useScroll();
  const landingHeight = useMotionValue(window.innerHeight);
  const anchorInset = useMotionValue(0);

  useLayoutEffect(() => {
    if (!isHomePage) return;

    const landing = document.getElementById('home');
    if (!landing) return;

    const measure = () => {
      const { scrollPaddingTop } = getComputedStyle(document.documentElement);
      landingHeight.set(landing.offsetHeight);
      anchorInset.set(Number.parseFloat(scrollPaddingTop) || 0);
    };

    measure();
    scrollY.set(window.scrollY);
    const observer = new ResizeObserver(measure);
    observer.observe(landing);
    return () => observer.disconnect();
  }, [anchorInset, isHomePage, landingHeight, scrollY]);

  const scrollDepth = useTransform(() => scrollY.get() / Math.max(landingHeight.get(), 1));
  const sectionProgress = useTransform(() => (
    scrollY.get() / Math.max(landingHeight.get() - anchorInset.get(), 1)
  ));

  return { landingHeight, scrollDepth, sectionProgress };
}

export type HomeScroll = ReturnType<typeof useHomeScroll>;
