import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
  server: {
    // Add the custom MIME type for JSX files
    mimeTypes: {
      'jsx': 'module/javascript',
    },
  },
});
