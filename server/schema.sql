CREATE DATABASE IF NOT EXISTS novatrips CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE novatrips;

CREATE TABLE IF NOT EXISTS destinations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  city VARCHAR(120) NOT NULL,
  tag VARCHAR(160) NOT NULL,
  price VARCHAR(40) NOT NULL,
  duration VARCHAR(120) NOT NULL,
  description TEXT NOT NULL,
  image VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS leads (
  id INT AUTO_INCREMENT PRIMARY KEY,
  full_name VARCHAR(160) NOT NULL,
  email VARCHAR(190) NOT NULL,
  destination VARCHAR(160) NOT NULL,
  budget VARCHAR(80) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO destinations (city, tag, price, duration, description, image)
SELECT 'Bali', 'Retraite privée', '2 490€', '10 jours · villas · guide local', 'Un séjour solaire entre jungle, plages confidentielles, tables privées et rituels bien-être.', '/generated/project_9bnhq2_mqgg8lnv-supporting.webp'
WHERE NOT EXISTS (SELECT 1 FROM destinations WHERE city = 'Bali');

INSERT INTO destinations (city, tag, price, duration, description, image)
SELECT 'Islande', 'Road trip cinéma', '3 120€', '8 jours · 4x4 · aurores boréales', 'Glaciers, sources chaudes et itinéraire spectaculaire pensé comme un film grandeur nature.', '/generated/project_9bnhq2_mqgg8lnv-feature.webp'
WHERE NOT EXISTS (SELECT 1 FROM destinations WHERE city = 'Islande');

INSERT INTO destinations (city, tag, price, duration, description, image)
SELECT 'Tokyo', 'Culture futuriste', '2 870€', '9 jours · hôtels design · food tour', 'Une immersion ultra design entre gastronomie, quartiers iconiques et adresses cachées.', '/generated/project_9bnhq2_mqgg8lnv-hero.webp'
WHERE NOT EXISTS (SELECT 1 FROM destinations WHERE city = 'Tokyo');
