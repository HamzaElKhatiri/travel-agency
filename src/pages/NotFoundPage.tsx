import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <main className="page section-padding not-found">
      <span className="eyebrow">404</span>
      <h1>Cette escale n’existe pas.</h1>
      <p>Revenez à l’accueil pour reprendre votre itinéraire NovaTrips.</p>
      <Link className="btn btn-primary" to="/">Retour à l’accueil</Link>
    </main>
  );
}
