import { PrismaClient as PrismaClientBase } from './generated/client/index.js';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is not set');
}

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);

// the hash must never cross the wire, so a query has to ask for it by name
const createPrisma = () =>
  new PrismaClientBase({
    adapter,
    log: ['error', 'warn'],
    omit: { user: { password: true } },
  });

export type PrismaClient = ReturnType<typeof createPrisma>;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? createPrisma();

if (typeof process !== 'undefined' && process.env?.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

export * from './generated/client/index.js';
