import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    assetsInlineLimit: 0, // Disable inlining assets
  },
  // Ensure assets are copied to the build output
  publicDir: 'public',
});