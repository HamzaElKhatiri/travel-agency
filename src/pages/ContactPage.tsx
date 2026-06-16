import { type ChangeEvent, type FormEvent, useState } from 'react';
import Button from '../components/ui/Button';
import type { AsyncState, ContactFormValues } from '../types';
import { destinations } from '../utils/data';

const initialValues: ContactFormValues = {
  fullName: '',
  email: '',
  destination: '',
  budget: '',
  message: ''
};

export default function ContactPage() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [status, setStatus] = useState<AsyncState>('idle');
  const [notice, setNotice] = useState('');

  function updateField(event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  }

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');
    setNotice('');

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      });

      if (!response.ok) {
        throw new Error('La demande n’a pas pu être transmise.');
      }

      setStatus('success');
      setNotice('Votre demande est bien reçue. La conciergerie NovaTrips revient vers vous sous 24h ouvrées.');
      setValues(initialValues);
    } catch {
      setStatus('error');
      setNotice('Le serveur est indisponible pour le moment. Vous pouvez relancer l’envoi dans quelques instants.');
    }
  }

  return (
    <main className="page section-padding">
      <section className="contact-page-grid">
        <div className="contact-copy">
          <span className="eyebrow">Départ privé</span>
          <h1>Racontez-nous le voyage que vous n’avez pas encore trouvé.</h1>
          <p>
            Réponse sous 24h ouvrées avec une première direction créative, un budget indicatif et les meilleures fenêtres de départ.
          </p>
          <div className="contact-proof">
            <strong>24/7</strong>
            <span>assistance humaine pendant votre séjour</span>
          </div>
        </div>

        <form className="contact-form" onSubmit={submitForm}>
          <label>
            Nom complet
            <input name="fullName" type="text" value={values.fullName} onChange={updateField} placeholder="Votre nom" required />
          </label>
          <label>
            Email
            <input name="email" type="email" value={values.email} onChange={updateField} placeholder="vous@exemple.com" required />
          </label>
          <label>
            Inspiration
            <select name="destination" value={values.destination} onChange={updateField} required>
              <option value="" disabled>Choisir une destination</option>
              {destinations.map((destination) => (
                <option key={destination.id} value={destination.city}>{destination.city}</option>
              ))}
              <option value="Sur-mesure complet">Sur-mesure complet</option>
            </select>
          </label>
          <label>
            Budget indicatif
            <select name="budget" value={values.budget} onChange={updateField} required>
              <option value="" disabled>Choisir une enveloppe</option>
              <option value="2 000€ - 4 000€">2 000€ - 4 000€</option>
              <option value="4 000€ - 8 000€">4 000€ - 8 000€</option>
              <option value="8 000€ et plus">8 000€ et plus</option>
            </select>
          </label>
          <label>
            Votre idée du voyage parfait
            <textarea name="message" value={values.message} onChange={updateField} placeholder="Rythme, envies, dates, niveau de confort..." rows={5} required />
          </label>
          <Button type="submit" disabled={status === 'loading'}>
            {status === 'loading' ? 'Envoi en cours...' : 'Demander une proposition'}
          </Button>
          {notice && <p className={`form-notice ${status}`}>{notice}</p>}
        </form>
      </section>
    </main>
  );
}
