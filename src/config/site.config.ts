import { SITE_URL, GOOGLE_SITE_VERIFICATION, BING_SITE_VERIFICATION } from 'astro:env/server';

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  author: string;
  email: string;
  phone?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  socialLinks: string[];
  twitter?: {
    site: string;
    creator: string;
  };
  verification?: {
    google?: string;
    bing?: string;
  };
  /**
   * Branding configuration
   * Logo files: Replace SVGs in src/assets/branding/
   * Favicon: Replace in public/favicon.svg
   */
  branding: {
    /** Logo alt text for accessibility */
    logo: {
      alt: string;
    };
    /** Favicon path (lives in public/) */
    favicon: {
      svg: string;
    };
    /** Theme colors for manifest and browser UI */
    colors: {
      /** Browser toolbar color (hex) */
      themeColor: string;
      /** PWA splash screen background (hex) */
      backgroundColor: string;
    };
  };
}

const siteConfig: SiteConfig = {
  name: 'Vladimir Koryagin',
  description: 'Technical Writer & Project Support — helping dev teams ship better docs, grants, and content.',
  url: SITE_URL || 'https://korriganjr.github.io',
  ogImage: '/og-default.png',
  author: 'Vladimir Koryagin',
  email: 'vladimir.koryagin7@gmail.com',
  socialLinks: [
    'https://github.com/korriganjr',
    'https://linkedin.com/in/vladimir-koryagin-223a5351',
    'https://t.me/korrigan_jr',
  ],
  verification: {
    google: GOOGLE_SITE_VERIFICATION,
    bing: BING_SITE_VERIFICATION,
  },
  branding: {
    logo: {
      alt: 'Vladimir Koryagin',
    },
    favicon: {
      svg: '/favicon.svg',
    },
    colors: {
      themeColor: '#3B82F6',
      backgroundColor: '#ffffff',
    },
  },
};

export default siteConfig;
