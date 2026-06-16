import { useMemo, useState } from 'react';
import DestinationCard from '../components/destinations/DestinationCard';
import { destinations } from '../utils/data';

const moods = ['Toutes', 'Solaire', 'Aventure', 'Urbain'] as const;
type MoodFilter = typeof moods[number];

export default function DestinationsPage() {
  const [filter, setFilter] = useState<MoodFilter>('Toutes');

  const filteredDestinations = useMemo(() => {
    if (filter === 'Toutes') {
      return destinations;
    }
    return destinations.filter((destination) => destination.mood === filter);
  }, [filter]);

  return (
    <main className="page section-padding">
      <section className="page-hero compact-hero">
        <span className="eyebrow">Collections privées</span>
        <h1>Destinations premium, rythme parfaitement maîtrisé.</h1>
        <p>Filtrez les inspirations NovaTrips et choisissez la direction initiale. Le reste sera entièrement personnalisé.</p>
      </section>

      <section className="filter-panel" aria-label="Filtrer les destinations">
        {moods.map((mood) => (
          <button key={mood} className={filter === mood ? 'filter active' : 'filter'} type="button" onClick={() => setFilter(mood)}>
            {mood}
          </button>
        ))}
      </section>

      {filteredDestinations.length > 0 ? (
        <section className="destinations-grid page-grid">
          {filteredDestinations.map((destination, index) => (
            <DestinationCard key={destination.id} destination={destination} index={index} />
          ))}
        </section>
      ) : (
        <section className="empty-state">
          <h2>Aucune collection disponible</h2>
          <p>Essayez un autre filtre ou contactez la conciergerie pour un voyage totalement confidentiel.</p>
        </section>
      )}
    </main>
  );
}
