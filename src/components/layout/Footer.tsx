import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer section-padding">
      <Link className="brand" to="/" aria-label="NovaTrips accueil">
        <span className="brand-mark">N</span>
        <span>NovaTrips</span>
      </Link>
      <p>© 2026 NovaTrips. Voyages privés, expériences rares.</p>
      <div className="footer-links" aria-label="Liens secondaires">
        <Link to="/destinations">Collections</Link>
        <Link to="/contact">Conciergerie</Link>
      </div>
    </footer>
  );
}
