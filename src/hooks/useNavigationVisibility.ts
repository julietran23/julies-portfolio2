import { useCallback, useEffect, useState } from 'react';

const scrollThreshold = 10;
const scrollTopReveal = 32;
const pointerTopReveal = 26;

export function useNavigationVisibility() {
  const [isHidden, setIsHidden] = useState(false);
  const reveal = useCallback(() => setIsHidden(false), []);

  useEffect(() => {
    let frame: number | null = null;
    let previousY = Math.max(0, window.scrollY);

    function updateScroll() {
      frame = null;
      const currentY = Math.max(0, window.scrollY);
      const delta = currentY - previousY;

      if (currentY > scrollTopReveal && Math.abs(delta) < scrollThreshold) return;

      setIsHidden(currentY > scrollTopReveal && delta > 0);
      previousY = currentY;
    }

    function queueScrollUpdate() {
      if (frame === null) frame = window.requestAnimationFrame(updateScroll);
    }

    function revealAtTopEdge(event: PointerEvent) {
      if (event.pointerType === 'mouse' && event.clientY <= pointerTopReveal) reveal();
    }

    window.addEventListener('scroll', queueScrollUpdate, { passive: true });
    window.addEventListener('pointermove', revealAtTopEdge, { passive: true });
    return () => {
      if (frame !== null) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', queueScrollUpdate);
      window.removeEventListener('pointermove', revealAtTopEdge);
    };
  }, [reveal]);

  return { isHidden, reveal };
}
