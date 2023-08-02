import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    mimeTypes: {
      // Change the MIME type for JavaScript files
      'js': 'application/javascript',
    },
  },
});
