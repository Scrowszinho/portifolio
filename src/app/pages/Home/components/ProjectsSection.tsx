import { Flex, SimpleGrid, Text } from '@chakra-ui/react';
import useLanguage from '@portifolio/hooks/translate';
import { ProjectCard } from '@portifolio/ui/ProjectCard';
import CRMImage from '@portifolio/assets/crm.png';
import TriconnectImage from '@portifolio/assets/triconnect.png';
import ReviseImage from '@portifolio/assets/revise.png';

const PROJECTS_DATA = [
  {
    title: 'CRM',
    description:
      'Sistema CRM completo para gestão de relacionamento com clientes',
    image: CRMImage,
    technologies: [
      'React',
      'TypeScript',
      'Chakra UI',
      'Tanstack',
      'Vite',
      'Nx',
    ],
  },
  {
    title: 'Triconnect',
    description:
      'Plataforma PDV focado em facilitar a gestão de pedidos e estoques de pequenos ou grandes comerciantes',
    image: TriconnectImage,
    technologies: ['React', 'React Native', 'TypeScript', 'Vite', 'Chakra UI'],
  },
  {
    title: 'Revise',
    description: 'Sistema para upload de documentos para contrato de seguros',
    image: ReviseImage,
    technologies: ['React', 'TypeScript', 'Nx', 'Node.Js'],
  },
];

export const ProjectsSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Flex
      direction='column'
      w='100%'
      h='100%'
      minH='100vh'
      alignItems='center'
      gap={6}
      py={40}
    >
      <Text
        fontSize={{
          base: 'xx-large',
          lg: '5xl',
        }}
        color='base.white'
        fontWeight='bold'
        mb={8}
      >
        {t('projectsHighlights')}
      </Text>
      <SimpleGrid
        columns={{
          base: 1,
          lg: 3,
          md: 2,
        }}
        gap={8}
        w='80%'
      >
        {PROJECTS_DATA.map((item, index) => (
          <ProjectCard {...item} key={index} />
        ))}
      </SimpleGrid>
    </Flex>
  );
};
