import { Flex } from '@chakra-ui/react';
import { Header } from '@portifolio/ui/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';

export const Home: React.FC = () => {
  return (
    <Flex bg='brand.primary' minH='100vh' direction='column'>
      <Header />
      <HeroSection />
      <AboutSection />
    </Flex>
  );
};
