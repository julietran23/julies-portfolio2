import { MotionConfig } from 'motion/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router/dom';

import { router } from './router';
import './styles/tokens.css';
import './styles/base.css';
import './styles/navigation.css';
import './styles/home.css';
import './styles/project.css';

const root = document.getElementById('root');

if (!root) {
  throw new Error('The site root element is missing.');
}

createRoot(root).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <RouterProvider router={router} />
    </MotionConfig>
  </StrictMode>,
);
