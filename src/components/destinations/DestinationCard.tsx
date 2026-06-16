import type { Destination } from '../../types';

type DestinationCardProps = {
  destination: Destination;
  index: number;
};

export default function DestinationCard({ destination, index }: DestinationCardProps) {
  return (
    <article className="destination-card">
      <img src={destination.image} alt={`Voyage premium à ${destination.city}`} />
      <div className="destination-overlay" />
      <div className="card-topline">
        <span>{destination.tag}</span>
        <span>{String(index + 1).padStart(2, '0')}</span>
      </div>
      <div className="destination-content">
        <span className="pill">{destination.mood}</span>
        <h3>{destination.city}</h3>
        <p>{destination.description}</p>
      </div>
      <div className="card-footer">
        <small>{destination.duration}</small>
        <strong>{destination.price}</strong>
      </div>
    </article>
  );
}
