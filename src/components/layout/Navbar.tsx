import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { cn } from '../../utils/cn';

const links = [
  { label: 'Accueil', to: '/' },
  { label: 'Destinations', to: '/destinations' },
  { label: 'Contact', to: '/contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="nav-wrap">
      <Link className="brand" to="/" aria-label="NovaTrips accueil" onClick={() => setIsOpen(false)}>
        <span className="brand-mark">N</span>
        <span>NovaTrips</span>
      </Link>

      <button className="menu-button" type="button" aria-label="Ouvrir la navigation" aria-expanded={isOpen} onClick={() => setIsOpen((value) => !value)}>
        <span />
        <span />
      </button>

      <nav className={cn('nav-links', isOpen && 'is-open')} aria-label="Navigation principale">
        {links.map((link) => (
          <NavLink key={link.to} to={link.to} onClick={() => setIsOpen(false)} className={({ isActive }) => cn(isActive && 'active')}>
            {link.label}
          </NavLink>
        ))}
      </nav>

      <Link className="nav-cta" to="/contact">Créer mon voyage</Link>
    </header>
  );
}
