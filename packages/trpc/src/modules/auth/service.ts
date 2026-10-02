import { TRPCError } from '@trpc/server';
import { type PrismaClient } from '@repo/types';
import type { AuthManager } from '@repo/auth';
import type { LoginInput, SessionUser } from '@repo/auth-shared';

const mapToSessionUser = (user: any): SessionUser => ({
  id: user.id,
  email: user.email,
  firstName: user.firstName,
  lastName: user.lastName,
  role: user.role,
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
  status: true,
  avatar: {
    select: { url: true },
  },
  coverImage: {
    select: { url: true },
  },
};

export const authService = {
  login: async (
    db: PrismaClient,
    auth: AuthManager,
    input: LoginInput,
    meta?: { ipAddress?: string; userAgent?: string }
  ) => {
    const user = await db.user.findUnique({
      where: { email: input.email.toLowerCase() },
      select: userSelection,
    });

    if (!user || !(await auth.verifyPassword(input.password, user.password))) {
      throw new TRPCError({ code: 'UNAUTHORIZED', message: 'Invalid credentials' });
    }

    if (user.status !== 'ACTIVE')
      throw new TRPCError({ code: 'FORBIDDEN', message: 'Account disabled' });

    const sessionUser = mapToSessionUser(user);
    const { token, expiresAt } = await auth.createSession(sessionUser, meta);

    return { token, expiresAt, user: sessionUser };
  },
};

export default authService;
