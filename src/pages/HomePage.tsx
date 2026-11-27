import { ImageIcon } from 'lucide-react';
import { Link, useOutletContext } from 'react-router';

import { HomeBackdrop } from '../components/HomeBackdrop';
import { Landing } from '../components/Landing';
import type { LandingIntro } from '../hooks/useLandingIntro';
import { projectPath, projects } from '../data/projects';

const interests = [
  { name: 'Photography & Videography', note: 'documenting special moments' },
  { name: 'Drinking Boba', note: 'in the lab making new concoctions' },
  { name: 'Meal Prepping', note: 'I love food' },
  { name: 'Traveling', note: 'Next up... Japan!' },
];

export function HomePage() {
  const intro = useOutletContext<LandingIntro>();

  return (
    <div className="homepage">
      <HomeBackdrop introProgress={intro.progress} reducedMotion={intro.reducedMotion} />
      <Landing {...intro} />
      <div className="home-sections">
        <section
          id="selected-work"
          className="home-section work-section"
          aria-labelledby="work-title"
        >
          <div className="frame">
            <h2 id="work-title" className="section-title">Selected Work</h2>
            <ol className="work-index">
              {projects.map((project) => (
                <li key={project.slug}>
                  <Link to={projectPath(project)} className="work-index__link">
                    <span className="work-index__number" aria-hidden="true">{project.number}</span>
                    <span>{project.workTitle}</span>
                    {project.comingSoon && <span className="work-index__status">Coming soon</span>}
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <section id="about-me" className="home-section frame" aria-labelledby="about-title">
          <h2 id="about-title" className="section-title">About Me</h2>
          <p className="section-subtitle">Julie Off the Clock</p>
          <div className="about-grid">
            <div className="portrait-placeholder">
              <ImageIcon size={32} strokeWidth={1.25} aria-hidden="true" />
              <p>Photo carousel in development</p>
            </div>
            <ul className="interests">
              {interests.map(({ name, note }) => (
                <li key={name}>
                  <span>{name}</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section id="skills" className="home-section frame skills-section" aria-labelledby="skills-title">
          <h2 id="skills-title" className="section-title">Skills</h2>
          <div className="skills-content">
            <div className="id-badge" aria-hidden="true">
              <div className="id-badge__card">Julie Tran</div>
            </div>
            <p>Skills details are in development.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
