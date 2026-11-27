import { Link } from 'react-router';

import { RouteEntrance } from '../components/RouteEntrance';
import type { Project } from '../data/projects';
import { sectionPath } from '../data/sections';

export function ProjectPage({ project }: { project: Project }) {
  return (
    <article className="project-page" aria-labelledby="project-title">
      <div className="frame project-page__inner">
        <Link className="back-link" to={sectionPath('selected-work')}>Back to Selected Work</Link>
        <RouteEntrance key={project.slug}>
          <header className="project-heading">
            <h1 id="project-title">{project.pageTitle}</h1>
            <p className="project-status">
              {project.comingSoon ? 'Coming soon' : 'Case study in development'}
            </p>
          </header>
        </RouteEntrance>
      </div>
    </article>
  );
}
