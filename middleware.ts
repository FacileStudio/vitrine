import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n';

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for
  // - /api routes
  // - /_next (Next.js internals)
  // - /_vercel (Vercel internals)
  // - Static files (images, fonts, icons, etc.)
  matcher: ['/((?!api|_next|_vercel|icons|Backgrounds|fonts|.*\\..*).*)']
};
