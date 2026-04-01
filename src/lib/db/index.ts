import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema'

// Connexion PostgreSQL — utilise DATABASE_URL depuis .env.local
const connectionString = process.env.DATABASE_URL!

if (!connectionString) {
  throw new Error('DATABASE_URL manquant dans les variables d\'environnement')
}

// Pool de connexions : max 10 en production, 1 pour les scripts one-shot
const isScript = process.env.IS_SCRIPT === 'true'
const client = postgres(connectionString, {
  max: isScript ? 1 : 10,
  connect_timeout: 30,
  idle_timeout: isScript ? 0 : 30,
})

export const db = drizzle(client, { schema })

export default db
