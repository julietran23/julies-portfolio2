import { ChevronDown, Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import type { MouseEvent } from 'react';
import { Link, useLocation } from 'react-router';

import { projectPath, projects } from '../data/projects';
import { sectionPath, sections } from '../data/sections';
import { useNavigationVisibility } from '../hooks/useNavigationVisibility';

interface SiteNavigationProps {
  onHome: () => void;
}

const projectMenuId = 'selected-work-projects';

export function SiteNavigation({ onHome }: SiteNavigationProps) {
  const { key, pathname } = useLocation();
  const { isHidden, reveal } = useNavigationVisibility();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [areProjectsOpen, setProjectsOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  const menuToggle = useRef<HTMLButtonElement>(null);
  const projectControls = useRef<HTMLDivElement>(null);
  const projectsToggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMenuOpen(false);
    setProjectsOpen(false);
  }, [key]);

  useEffect(() => {
    reveal();
  }, [pathname, reveal]);

  useEffect(() => {
    if (!isMenuOpen && !areProjectsOpen) return;

    function closeOnOutsideClick(event: PointerEvent) {
      if (!(event.target instanceof Node)) return;
      if (!projectControls.current?.contains(event.target)) setProjectsOpen(false);
      if (!header.current?.contains(event.target)) setMenuOpen(false);
    }

    document.addEventListener('pointerdown', closeOnOutsideClick);
    return () => document.removeEventListener('pointerdown', closeOnOutsideClick);
  }, [areProjectsOpen, isMenuOpen]);

  function followLink(event: MouseEvent<HTMLAnchorElement>, isHome = false) {
    if (
      event.defaultPrevented || event.button !== 0 ||
      event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
    ) return;

    setMenuOpen(false);
    setProjectsOpen(false);

    if (isHome) {
      reveal();
      onHome();
    }
  }

  return (
    <header
      ref={header}
      className="site-header"
      data-hidden={isHidden}
      data-menu-open={isMenuOpen}
      data-projects-open={areProjectsOpen}
      onBlur={(event) => {
        if (event.relatedTarget instanceof Node && !event.currentTarget.contains(event.relatedTarget)) {
          setMenuOpen(false);
          setProjectsOpen(false);
        }
      }}
      onKeyDown={(event) => {
        if (event.key !== 'Escape') return;

        if (areProjectsOpen) {
          event.preventDefault();
          setProjectsOpen(false);
          projectsToggle.current?.focus();
        } else if (isMenuOpen) {
          event.preventDefault();
          setMenuOpen(false);
          menuToggle.current?.focus();
        }
      }}
    >
      <div className="site-header__inner">
        <button
          className="nav-toggle"
          type="button"
          ref={menuToggle}
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          onClick={() => {
            setMenuOpen((open) => !open);
            setProjectsOpen(false);
          }}
        >
          {isMenuOpen ? <X size={17} aria-hidden="true" /> : <Menu size={17} aria-hidden="true" />}
          Menu
        </button>
        <nav id="primary-navigation" className="site-nav" aria-label="Primary">
          {sections.map(({ id, label }) => {
            if (id !== 'selected-work') {
              return (
                <Link key={id} to={sectionPath(id)} onClick={(event) => followLink(event, id === 'home')}>
                  {label}
                </Link>
              );
            }

            return (
              <div
                className="site-nav__work"
                key={id}
                ref={projectControls}
                onBlur={(event) => {
                  if (event.relatedTarget instanceof Node && !event.currentTarget.contains(event.relatedTarget)) {
                    setProjectsOpen(false);
                  }
                }}
              >
                <div className="site-nav__work-controls">
                  <Link to={sectionPath(id)} onClick={(event) => followLink(event)}>{label}</Link>
                  <button
                    type="button"
                    className="site-nav__work-toggle"
                    ref={projectsToggle}
                    aria-label="Selected Work projects"
                    aria-expanded={areProjectsOpen}
                    aria-controls={projectMenuId}
                    onClick={() => setProjectsOpen((open) => !open)}
                  >
                    <ChevronDown size={16} aria-hidden="true" />
                  </button>
                </div>
                <ul className="site-nav__projects" id={projectMenuId} hidden={!areProjectsOpen}>
                  {projects.map((project) => (
                    <li key={project.slug}>
                      <Link
                        to={projectPath(project)}
                        aria-current={pathname === projectPath(project) ? 'page' : undefined}
                        onClick={(event) => followLink(event)}
                      >
                        {project.workTitle}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
