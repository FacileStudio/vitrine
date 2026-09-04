import { PrismaClient } from '@repo/database';
import { hash as argon2Hash } from 'argon2';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is not set');
}

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
  adapter,
  log: ['error', 'warn'],
});

const email = (process.env.DEFAULT_ADMIN_EMAIL ?? 'admin@example.com').toLowerCase();
const password = process.env.DEFAULT_ADMIN_PASSWORD ?? 'admin123';
const firstName = process.env.DEFAULT_ADMIN_FIRST_NAME ?? 'Admin';
const lastName = process.env.DEFAULT_ADMIN_LAST_NAME ?? 'User';

async function main() {
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    console.log(`Admin user already exists: ${email}`);
    return;
  }

  const hashedPassword = await argon2Hash(password);
  await prisma.user.create({
    data: {
      email,
      firstName,
      lastName,
      password: hashedPassword,
      emailVerified: true,
      role: 'ADMIN',
    },
  });
  console.log(`Created admin user: ${email}`);
}

main()
  .catch((e) => {
    console.error('Failed to ensure admin user:', e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());


  