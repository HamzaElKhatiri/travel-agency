import { Link } from 'react-router-dom';
import DestinationCard from '../components/destinations/DestinationCard';
import StatsSection from '../components/home/StatsSection';
import Card from '../components/ui/Card';
import { destinations, experienceSteps, heroImage } from '../utils/data';

export default function HomePage() {
  return (
    <main>
      <section className="hero section-padding">
        <img className="hero-img" src={heroImage} alt="Paysage de voyage premium au coucher du soleil" />
        <div className="hero-vignette" />
        <div className="hero-content">
          <span className="eyebrow">Agence premium · voyages sur-mesure</span>
          <h1>Des voyages rares, calibrés comme une expérience de luxe.</h1>
          <p>
            NovaTrips conçoit des itinéraires privés, fluides et spectaculaires pour celles et ceux qui veulent voyager moins souvent, mais infiniment mieux.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/contact">Planifier mon départ</Link>
            <Link className="btn btn-ghost" to="/destinations">Voir les collections</Link>
          </div>
        </div>
        <Card className="hero-card" tone="glass" aria-label="Sélection premium">
          <span>Collection signature</span>
          <strong>Été 2026</strong>
          <small>12 places restantes sur les itinéraires privés.</small>
        </Card>
      </section>

      <StatsSection />

      <section className="section section-padding">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Destinations sélectionnées</span>
            <h2>Trois collections pour partir avec style.</h2>
          </div>
          <p>Chaque proposition est ajustée à votre niveau de confort, votre énergie et votre envie d’exclusivité.</p>
        </div>
        <div className="destinations-grid">
          {destinations.map((destination, index) => (
            <DestinationCard key={destination.id} destination={destination} index={index} />
          ))}
        </div>
      </section>

      <section className="experience section-padding">
        <div className="experience-panel">
          <div className="section-heading compact">
            <span className="eyebrow">Méthode Nova</span>
            <h2>Une organisation invisible, une liberté totale.</h2>
          </div>
          <div className="steps">
            {experienceSteps.map((step) => (
              <article className="step" key={step.number}>
                <span>{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band section-padding">
        <div>
          <span className="eyebrow">Départ privé</span>
          <h2>Le voyage que vous cherchez n’existe pas encore. On le dessine.</h2>
        </div>
        <Link className="btn btn-primary" to="/contact">Demander une proposition</Link>
      </section>
    </main>
  );
}
