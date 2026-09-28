const SITE_URL = import.meta.env.VITE_SITE_URL || 'http://localhost:3000';

// project media paths are relative to the public site, full URLs such as a gallery CDN pass through untouched
export const siteAsset = (path: string) => new URL(path, SITE_URL).href;
