import { SignJWT, jwtVerify } from 'jose';
import { type SessionUser } from '@repo/auth-shared';
import { CryptoService } from '@repo/crypto';

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

    /*
     * Named for this app, not for the template it was forked from. Nothing ever
     * passes issuer or audience, so every app built on that boilerplate signed
     * and accepted the same maxi-boilerplate pair: two of them sharing an
     * ENCRYPTION_SECRET would each honour tokens minted by the other, and a
     * user account on one becomes a session on the other.
     *
     * Renaming invalidates every token already issued, so everyone is signed out
     * once on the deploy that carries this. That is acceptable here: the app has
     * a handful of admin users and a seven day token lifetime.
     */
    this.issuer = config.issuer ?? 'gfconseil-api';
    this.audience = config.audience ?? 'gfconseil-client';
    this.tokenExpiration = config.tokenExpiration ?? '7d';
  }

  async createToken(user: SessionUser): Promise<string> {
    return await new SignJWT({
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
      isPremium: user.isPremium,
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

  async verifyToken(token: string): Promise<SessionUser | null> {
    try {
      const { payload } = await jwtVerify(token, this.secret, {
        issuer: this.issuer,
        audience: this.audience,
      });

      return {
        id: payload.id as string,
        email: payload.email as string,
        firstName: payload.firstName as string,
        lastName: payload.lastName as string,
        role: payload.role as any,
        isPremium: Boolean(payload.isPremium),
        avatarUrl: payload.avatarUrl as string | null | undefined,
        coverImageUrl: payload.coverImageUrl as string | null | undefined,
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
