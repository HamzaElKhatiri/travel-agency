import cors from 'cors';
import express, { type Request, type Response } from 'express';
import type { RowDataPacket } from 'mysql2';
import { pool } from './db.js';

const app = express();
const port = Number(process.env.PORT ?? 4000);
const corsOrigin = process.env.CORS_ORIGIN ?? 'http://localhost:5173';

app.use(cors({ origin: corsOrigin }));
app.use(express.json());

type DestinationRow = RowDataPacket & {
  id: number;
  city: string;
  tag: string;
  price: string;
  duration: string;
  description: string;
  image: string;
};

type LeadPayload = {
  fullName?: string;
  email?: string;
  destination?: string;
  budget?: string;
  message?: string;
};

app.get('/api/health', (_request: Request, response: Response) => {
  response.json({ ok: true, service: 'NovaTrips API' });
});

app.get('/api/destinations', async (_request: Request, response: Response) => {
  try {
    const [rows] = await pool.query<DestinationRow[]>('SELECT id, city, tag, price, duration, description, image FROM destinations ORDER BY id ASC');
    response.json({ data: rows });
  } catch {
    response.status(500).json({ error: 'Impossible de charger les destinations.' });
  }
});

app.post('/api/leads', async (request: Request<unknown, unknown, LeadPayload>, response: Response) => {
  const { fullName, email, destination, budget, message } = request.body;

  if (!fullName || !email || !destination || !budget || !message) {
    response.status(400).json({ error: 'Tous les champs sont obligatoires.' });
    return;
  }

  try {
    await pool.execute(
      'INSERT INTO leads (full_name, email, destination, budget, message) VALUES (?, ?, ?, ?, ?)',
      [fullName, email, destination, budget, message]
    );
    response.status(201).json({ ok: true, message: 'Demande reçue par la conciergerie NovaTrips.' });
  } catch {
    response.status(500).json({ error: 'Impossible d’enregistrer la demande.' });
  }
});

app.listen(port, () => {
  console.log(`NovaTrips API listening on http://localhost:${port}`);
});
