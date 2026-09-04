import { TRPCError } from '@trpc/server';
import { UserRole, type PrismaClient } from '@repo/types';
import type { AuthManager } from '@repo/auth';
import type { LoginInput, RegisterInput, SessionUser } from '@repo/auth-shared';
import { sendEmail } from "@repo/email";

const mapToSessionUser = (user: any): SessionUser => ({
  id: user.id,
  email: user.email,
  firstName: user.firstName,
  lastName: user.lastName,
  role: user.role,
  isPremium: false,
  avatarUrl: user.avatar?.url || null,
  coverImageUrl: user.coverImage?.url || null,
});

const userSelection = {
  id: true,
  email: true,
  firstName: true,
  lastName: true,
  password: true,
  role: true,
  avatar: {
    select: { url: true },
  },
  coverImage: {
    select: { url: true },
  },
};

/*
 * Postgres compares text case-sensitively, so `findUnique` on a raw address is
 * an exact byte match. ensure-admin.ts and the seed both store the address
 * lowercased, which meant signing in as `Guy@x.com` could never find the row
 * written as `guy@x.com`. Every lookup and every create goes through this so
 * the two sides agree on one form.
 */
const normalizeEmail = (email: string): string => email.trim().toLowerCase();

/*
 * A throwaway argon2 hash no supplied password can match, built once per
 * process and reused for every failed lookup.
 *
 * login used to return the moment the lookup missed, so an unknown address
 * answered after a single query while a known one paid for an argon2 verify on
 * top. That difference is tens of milliseconds and measurable from outside,
 * which turns the sign-in form into an account enumeration oracle: anyone can
 * sort a list of addresses into customers and strangers. Verifying against this
 * hash makes the miss cost exactly what a wrong password costs.
 *
 * It comes from auth.hashPassword rather than a literal so its argon2 cost
 * parameters always match the stored hashes; a pasted constant would drift the
 * day those defaults change and reopen the gap. The promise is created on the
 * first login and kept, so the hash is computed once per process, never per
 * request.
 *
 * login awaits it before the lookup rather than inside the miss branch, so the
 * one request that actually computes it is slowed whether it hits or misses.
 * Awaiting it lazily inside the branch put the whole 45ms on the first unknown
 * address of the process, which is the oracle again, once per restart. Measured
 * at 93ms against 49ms before the move.
 */
let dummyPasswordHash: Promise<string> | null = null;

const getDummyPasswordHash = (auth: AuthManager): Promise<string> => {
  dummyPasswordHash ??= auth.hashPassword('no-account-can-match-this-98d2f4a1c7b6');
  return dummyPasswordHash;
};

export const authService = {
  login: async (db: PrismaClient, auth: AuthManager, input: LoginInput) => {
    const email = normalizeEmail(input.email);
    const dummyHash = await getDummyPasswordHash(auth);

    const user = await db.user.findUnique({
      where: { email },
      select: userSelection,
    });

    const passwordMatches = await auth.verifyPassword(input.password, user?.password ?? dummyHash);

    if (!user || !passwordMatches) {
      throw new TRPCError({ code: 'UNAUTHORIZED', message: 'Invalid credentials' });
    }

    const sessionUser = mapToSessionUser(user);
    const token = await auth.createToken(sessionUser);

    return { token, user: sessionUser };
  },

  register: async (db: PrismaClient, auth: AuthManager, input: RegisterInput) => {
    const email = normalizeEmail(input.email);

    const exists = await db.user.findUnique({ where: { email }, select: { id: true } });
    if (exists) {
      throw new TRPCError({ code: 'CONFLICT', message: 'This email is already in use' });
    }

    const passwordHash = await auth.hashPassword(input.password);

    const user = await db.user.create({
      data: {
        email,
        firstName: input.firstName,
        lastName: input.lastName,
        password: passwordHash,
        role: UserRole.USER,
      },
      include: {
        avatar: { select: { url: true } },
        coverImage: { select: { url: true } },
      },
    });

    const sessionUser = mapToSessionUser(user);
    const token = await auth.createToken(sessionUser);

    sendEmail({
      templateName: "welcome",
      mailOptions: {
        to: user.email,
        subject: "Bienvenue sur notre plateforme !",
      },
      props: {
        name: user.firstName,
      }
    });

    return { token, user: sessionUser };
  },
};

export default authService;
