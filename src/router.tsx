import { createBrowserRouter } from 'react-router';

import { SiteLayout } from './components/SiteLayout';
import { projectPath, projects } from './data/projects';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ProjectPage } from './pages/ProjectPage';

export const router = createBrowserRouter([
  {
    Component: SiteLayout,
    children: [
      { index: true, Component: HomePage },
      ...projects.map((project) => ({
        path: projectPath(project),
        element: <ProjectPage project={project} />,
        handle: { title: project.pageTitle },
      })),
      { path: '*', Component: NotFoundPage, handle: { title: 'Page not found' } },
    ],
  },
]);
