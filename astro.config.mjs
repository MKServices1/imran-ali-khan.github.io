import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Update this once a custom domain is purchased (see README "Custom domain" section).
// Deployed as a GitHub Pages project site under the MKServices1 account
// (this repo isn't named after the account, so it doesn't get the root-domain treatment).
const SITE_URL = 'https://mkservices1.github.io';
const BASE_PATH = '/imran-ali-khan.github.io/';

export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  integrations: [
    tailwind({ applyBaseStyles: false }),
  ],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
