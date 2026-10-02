import { serialize } from 'cookie';
import type { ServerEnv } from '@repo/env';

export const AUTH_COOKIE_NAME = 'auth_token';

export const setAuthCookie = (
  resHeaders: Headers,
  token: string,
  expiresAt: Date,
  env: ServerEnv
) => {
  // Derived from the JWT's own exp instead of a hardcoded duration, so the
  // cookie always matches whatever AuthConfig.tokenExpiration actually is —
  // no separate constant to keep in sync by hand.
  const maxAge = Math.max(0, Math.floor((expiresAt.getTime() - Date.now()) / 1000));

  resHeaders.append(
    'Set-Cookie',
    serialize(AUTH_COOKIE_NAME, token, {
      httpOnly: true,
      secure: env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      domain: env.COOKIE_DOMAIN,
      maxAge,
    })
  );
};

export const clearAuthCookie = (resHeaders: Headers, env: ServerEnv) => {
  resHeaders.append(
    'Set-Cookie',
    serialize(AUTH_COOKIE_NAME, '', {
      httpOnly: true,
      secure: env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      domain: env.COOKIE_DOMAIN,
      maxAge: 0,
    })
  );
};
