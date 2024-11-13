import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  eslintOptions: {
    rules: {
      'no-unused-vars': 'warn',
      'react/prop-types': 'off',
    },
  },
  build: {
    outDir: 'build',
  },
});
