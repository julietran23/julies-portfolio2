import { useEffect } from 'react';
import { Outlet, ScrollRestoration, useMatches } from 'react-router';

import { SiteNavigation } from './SiteNavigation';

interface RouteDetails {
  title: string;
}

export function SiteLayout() {
  const matches = useMatches();
  const details = matches.at(-1)?.handle as RouteDetails | undefined;
  const title = details ? `${details.title} | Julie Tran` : 'Julie Tran | Portfolio';

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteNavigation />
      <main id="main-content" tabIndex={-1}>
        <Outlet />
      </main>
      <ScrollRestoration />
    </>
  );
}
