import { ChakraProvider as DefaultChakraProvider } from '@chakra-ui/react';
import { system } from '@portifolio/themes/index';
import { Toaster } from './toaster';

interface ChakraProviderProps {
  children: React.ReactNode;
}

const ChakraProvider: React.FC<ChakraProviderProps> = ({ children }) => {
  return (
    <DefaultChakraProvider value={system}>
      <Toaster />
      {children}
    </DefaultChakraProvider>
  );
};

export const Providers: React.FC<ChakraProviderProps> = ({ children }) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};
