import { Avatar, Badge, Circle, Flex, Float, Text } from '@chakra-ui/react';
import MePhoto from '@portifolio/assets/me.jpg';
import useLanguage from '@portifolio/hooks/translate';
import { Code2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Flex
      bg='#21262d4d'
      py={20}
      width='100%'
      alignItems='center'
      gap={16}
      justifyContent='space-between'
      flexDir='column'
      id='about'
    >
      <Text fontSize='5xl' color='base.white' fontWeight='bold'>
        {t('aboutMe')}
      </Text>
      <Flex
        alignItems='center'
        gap={12}
        flexDirection={{
          base: 'column',
          sm: 'column',
          md: 'column',
          lg: 'row',
        }}
      >
        <Avatar.Root colorPalette='green' variant='subtle' w={80} h={80}>
          <Avatar.Image src={MePhoto} />
          <Avatar.Fallback name='Dari Ann' />
          <Float placement='bottom-center' offsetX='1' offsetY='1'>
            <Circle bg='brand.pink' size={20}>
              <Code2 color='white' />
            </Circle>
          </Float>
        </Avatar.Root>
        <Flex direction='column' gap={3}>
          <Text
            fontSize='medium'
            color='gray.50'
            maxW={{
              base: 500,
              lg: 600,
            }}
            textAlign={{
              base: 'center',
              lg: 'unset',
            }}
            px={{
              base: 4,
              lg: 0,
            }}
          >
            {t('aboutMeText')}
          </Text>
          <Text
            fontSize='x-large'
            textAlign={{
              base: 'center',
              lg: 'unset',
            }}
            fontWeight='semibold'
            color='base.white'
          >
            {t('aboutTechs')}
          </Text>

          <Flex
            alignItems='center'
            px={{
              base: 4,
              lg: 0,
            }}
            gap={3}
          >
            {['React', 'Angular', 'Vue.js', 'TypeScript', 'JavaScript'].map(
              (tech) => (
                <Badge
                  key={tech}
                  variant='solid'
                  fontSize='medium'
                  bg='base.black'
                  px={2}
                >
                  {tech}
                </Badge>
              ),
            )}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
