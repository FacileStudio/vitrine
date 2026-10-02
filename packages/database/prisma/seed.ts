import { PrismaClient } from '../src/generated/client/index.js';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';
import { CryptoService } from '@repo/crypto';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is not set');
}

if (!process.env.ENCRYPTION_SECRET) {
  throw new Error('ENCRYPTION_SECRET environment variable is not set');
}

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({
  adapter: new PrismaPg(pool),
  log: ['error', 'warn'],
});
const crypto = new CryptoService({ ENCRYPTION_KEY: process.env.ENCRYPTION_SECRET });

type Db = typeof prisma;

async function seedAdmin(db: Db) {
  const email = (process.env.DEFAULT_ADMIN_EMAIL ?? 'admin@example.com').toLowerCase();
  const password = process.env.DEFAULT_ADMIN_PASSWORD ?? 'admin123';

  if (await db.user.findUnique({ where: { email } })) {
    console.log(`Admin user already exists: ${email}`);
    return;
  }

  await db.user.create({
    data: {
      email,
      firstName: process.env.DEFAULT_ADMIN_FIRST_NAME ?? 'Admin',
      lastName: process.env.DEFAULT_ADMIN_LAST_NAME ?? 'User',
      password: await crypto.hash.heavy(password),
      emailVerified: true,
      role: 'ADMIN',
    },
  });
  console.log(`Created admin user: ${email}`);
}

// add further idempotent seeders here (projects, studio, contacts...)
async function main() {
  console.log('Start seeding...');
  await seedAdmin(prisma);
  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
