import { Menu, X } from 'lucide-react';
import { useRef, useState } from 'react';
import { Link } from 'react-router';

import { sectionPath, sections } from '../data/sections';

export function SiteNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);

  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === 'Escape' && isOpen) {
          setIsOpen(false);
          toggle.current?.focus();
        }
      }}
    >
      <div className="site-header__inner">
        <Link className="site-name" to={sectionPath('home')} onClick={() => setIsOpen(false)}>
          Julie Tran
        </Link>
        <button
          className="nav-toggle"
          type="button"
          ref={toggle}
          aria-controls="primary-navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          Menu
        </button>
        <nav id="primary-navigation" className="site-nav" aria-label="Primary" data-open={isOpen}>
          {sections.map(({ id, label }) => (
            <Link key={id} to={sectionPath(id)} onClick={() => setIsOpen(false)}>
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
