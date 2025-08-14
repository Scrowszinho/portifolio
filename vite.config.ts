import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({
      routesDirectory: 'src/app/routes',
      target: 'react',
      autoCodeSplitting: true,
    }),
    tsconfigPaths(),
    react(),
  ],
});
