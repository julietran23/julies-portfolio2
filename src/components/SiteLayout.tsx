import { motion, useTransform } from 'motion/react';
import type { MotionStyle, MotionValue } from 'motion/react';
import { useLayoutEffect } from 'react';
import { Outlet, ScrollRestoration, useLocation, useMatches } from 'react-router';

import { useLandingIntro } from '../hooks/useLandingIntro';
import { SiteNavigation } from './SiteNavigation';

interface RouteDetails {
  title: string;
}

export function SiteLayout() {
  const matches = useMatches();
  const details = matches.at(-1)?.handle as RouteDetails | undefined;
  const title = details ? `${details.title} | Julie Tran` : 'Julie Tran | Portfolio';

  const { pathname, hash } = useLocation();
  const isHomePage = pathname === '/';
  const intro = useLandingIntro(isHomePage, isHomePage && (!hash || hash === '#home'));
  const navOpacity = useTransform(intro.reveal, [0.25, 0.86], [0, 1]);
  const navPointerEvents = useTransform(intro.reveal, (value) => value >= 0.35 ? 'auto' : 'none');
  const style: MotionStyle & {
    '--intro-nav-opacity': MotionValue<number>;
    '--intro-nav-pointer-events': MotionValue<'auto' | 'none'>;
  } = {
    '--intro-nav-opacity': navOpacity,
    '--intro-nav-pointer-events': navPointerEvents,
  };

  useLayoutEffect(() => {
    document.title = title;
    document.documentElement.removeAttribute('data-landing-boot');
  }, [title]);

  return (
    <motion.div
      className="site-shell"
      data-homepage={isHomePage}
      style={isHomePage ? style : undefined}
    >
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteNavigation onHome={intro.replay} />
      <main id="main-content" tabIndex={-1}>
        <Outlet context={intro} />
      </main>
      <ScrollRestoration />
    </motion.div>
  );
}
