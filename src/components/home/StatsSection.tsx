import { stats } from '../../utils/data';

export default function StatsSection() {
  return (
    <section className="stats-wrap section-padding" aria-label="Chiffres clés NovaTrips">
      <div className="stats-grid">
        {stats.map((stat) => (
          <article className="stat-card" key={stat.value}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
