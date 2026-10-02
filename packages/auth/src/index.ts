import { SignJWT, jwtVerify, decodeJwt } from 'jose';
import { type SessionUser } from '@repo/auth-shared';
import { CryptoService } from '@repo/crypto';
import { prisma } from '@repo/database';

export interface SessionMeta {
  ipAddress?: string;
  userAgent?: string;
}

export interface AuthConfig {
  encryptionSecret: string;
  issuer?: string;
  audience?: string;
  tokenExpiration?: string;
}

export class AuthManager {
  private readonly secret: Uint8Array;
  private readonly crypto: CryptoService;
  private readonly issuer: string;
  private readonly audience: string;
  private readonly tokenExpiration: string;

  constructor(config: AuthConfig) {
    this.secret = new TextEncoder().encode(config.encryptionSecret);

    this.crypto = new CryptoService({ ENCRYPTION_KEY: config.encryptionSecret });

    this.issuer = config.issuer ?? 'maxi-boilerplate-api';
    this.audience = config.audience ?? 'maxi-boilerplate-client';
    this.tokenExpiration = config.tokenExpiration ?? '7d';
  }

  async createToken(user: SessionUser): Promise<string> {
    return await new SignJWT({
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
      avatarUrl: user.avatarUrl,
      coverImageUrl: user.coverImageUrl,
    })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setIssuer(this.issuer)
      .setAudience(this.audience)
      .setExpirationTime(this.tokenExpiration)
      .sign(this.secret);
  }

  async createSession(
    user: SessionUser,
    meta?: SessionMeta
  ): Promise<{ token: string; expiresAt: Date }> {
    const token = await this.createToken(user);
    const { exp } = decodeJwt(token);
    const expiresAt = new Date((exp ?? 0) * 1000);

    await prisma.session.create({
      data: {
        id: crypto.randomUUID(),
        userId: user.id,
        token,
        expiresAt,
        ipAddress: meta?.ipAddress,
        userAgent: meta?.userAgent,
      },
    });

    return { token, expiresAt };
  }

  async deleteSession(token: string): Promise<void> {
    await prisma.session.deleteMany({ where: { token } });
  }

  // Expired sessions are also deleted lazily whenever their token is next
  // verified, but an abandoned account's row otherwise lingers forever.
  // Call this periodically (see apps/backend) to actually reclaim them.
  async pruneExpiredSessions(): Promise<number> {
    const { count } = await prisma.session.deleteMany({
      where: { expiresAt: { lt: new Date() } },
    });
    return count;
  }

  async verifyToken(token: string): Promise<SessionUser | null> {
    try {
      // The signature/issuer/audience/expiry check. Its payload (role,
      // status, etc.) is intentionally not used below — trusting it would
      // mean a role change or a disabled account doesn't take effect until the token
      // naturally expires. The live values come from the DB join instead,
      // which we're already hitting for the session-revocation check.
      await jwtVerify(token, this.secret, {
        issuer: this.issuer,
        audience: this.audience,
      });

      const session = await prisma.session.findUnique({
        where: { token },
        include: {
          user: {
            select: {
              id: true,
              email: true,
              firstName: true,
              lastName: true,
              role: true,
              status: true,
              avatar: { select: { url: true } },
              coverImage: { select: { url: true } },
            },
          },
        },
      });

      if (!session || session.expiresAt < new Date()) {
        if (session) {
          await prisma.session.deleteMany({ where: { token } });
        }
        return null;
      }

      const { user } = session;
      if (user.status !== 'ACTIVE') {
        return null;
      }

      return {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
        avatarUrl: user.avatar?.url ?? null,
        coverImageUrl: user.coverImage?.url ?? null,
      };
    } catch (error) {
      // Erreur de signature, expiration, etc.
      return null;
    }
  }

  async hashPassword(password: string): Promise<string> {
    return await this.crypto.hash.heavy(password);
  }

  async verifyPassword(password: string, hash: string): Promise<boolean> {
    return await this.crypto.verify.heavy(hash, password);
  }

  encryptData(text: string): string {
    return this.crypto.encrypt(text);
  }

  decryptData(data: string): string {
    return this.crypto.decrypt(data);
  }
}

export type { SessionUser } from '@repo/auth-shared';
