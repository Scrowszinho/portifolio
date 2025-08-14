import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';

// Import the generated route tree
import { routeTree } from './routeTree.gen';
import { Providers } from '@portifolio/themes/providers/Providers';
import { TranslateProvider } from './app/libs/hooks/translate';
import '@fontsource-variable/inter';

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <TranslateProvider>
        <RouterProvider router={router} />
      </TranslateProvider>
    </Providers>
  </StrictMode>,
);
