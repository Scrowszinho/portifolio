import { Badge, Card, Image } from '@chakra-ui/react';

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: Array<string>;
  image: string;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  technologies,
  description,
  image,
  title,
}) => {
  return (
    <Card.Root
      transition='0.3s'
      _hover={{
        scale: '105%',
      }}
      bg='brand.secondary'
      border='1px solid'
      borderColor='gray.100'
      borderRadius={16}
    >
      <Image borderTopRadius={16} src={image} alt={title} w='100%' h='100%' />
      <Card.Header>
        <Card.Title color='base.white' fontSize='x-large'>
          {title}
        </Card.Title>
        <Card.Description color='gray.50'>{description}</Card.Description>
      </Card.Header>
      <Card.Footer mt={4} display='flex' flexWrap='wrap' gap={2}>
        {technologies.map((tech) => (
          <Badge
            key={tech}
            variant='outline'
            borderColor='gray.50'
            px={2}
            bg='brand.primary'
            borderRadius={6}
            color='gray.50'
          >
            {tech}
          </Badge>
        ))}
      </Card.Footer>
    </Card.Root>
  );
};
