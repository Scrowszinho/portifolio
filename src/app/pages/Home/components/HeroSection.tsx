import { Button, Flex, Text } from '@chakra-ui/react';
import useLanguage from '@portifolio/hooks/translate';
import { Download } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Flex
      direction='column'
      w='100%'
      h='100%'
      minH='100vh'
      alignItems='center'
      justifyContent='center'
      gap={6}
      py={40}
    >
      <Flex direction='column' gap={0} alignItems='center'>
        <Text as='p' fontSize='medium' color='gray.50'>
          {t('helloMessage')}
        </Text>
        <Text
          as='h1'
          fontSize='6xl'
          fontWeight='bold'
          color='base.white'
          textAlign='center'
        >
          {`Luis Gustavo Godoy Camargo`}
        </Text>
        <Text
          as='h2'
          fontSize={{
            base: '2xl',
            lg: '4xl',
          }}
          fontWeight='semibold'
          color='brand.blue'
        >
          {t('professionalLevel')}
        </Text>
      </Flex>
      <Text color='gray.50' fontSize='lg' maxW='48rem' textAlign='center'>
        {t('professionalMessage')}
      </Text>
      <Flex alignItems='center' gap={3}>
        <Button>
          <Download />
          <Text>Baixar Currículo</Text>
        </Button>
      </Flex>
    </Flex>
  );
};
