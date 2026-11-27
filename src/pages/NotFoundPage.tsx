import { Link } from 'react-router';

import { sectionPath } from '../data/sections';

export function NotFoundPage() {
  return (
    <div className="project-page">
      <div className="frame project-page__inner">
        <h1>Page not found</h1>
        <Link className="back-link" to={sectionPath('home')}>Return home</Link>
      </div>
    </div>
  );
}
