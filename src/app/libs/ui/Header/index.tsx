import { Flex, Image, Text } from '@chakra-ui/react';
import useLanguage from '../../hooks/translate';

const navItems = [
  { key: 'about', href: '#about' },
  { key: 'skills', href: '#skills' },
  { key: 'projects', href: '#projects' },
  { key: 'experience', href: '#experience' },
  { key: 'contact', href: '#contact' },
];

export const Header: React.FC = () => {
  const { t } = useLanguage();
  return (
    <Flex
      as='header'
      position='fixed'
      top={0}
      zIndex={50}
      bg='brand.primary'
      borderBottom='1px solid'
      borderColor='gray.100'
      alignItems='center'
      justifyContent='space-around'
      w='100%'
      px={4}
      py={4}
    >
      <Image />
      <Flex alignItems='center' gap={8}>
        {navItems.map((item, index) => (
          <Text
            color='gray.50'
            transition='0.3s'
            key={index}
            cursor='pointer'
            _hover={{
              color: 'base.white',
            }}
          >
            {t(item.key)}
          </Text>
        ))}
      </Flex>
      <Flex></Flex>
    </Flex>
  );
};
