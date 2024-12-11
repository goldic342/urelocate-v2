import { Box, Flex, Spacer, Button, HStack } from '@chakra-ui/react'
import Logo from './Logo'
import ChakraRouterLink from '../ChakraRouterLink'
const Header = () => {
  return (
    <Box as="header" px={12} py={8}>
      <Flex minW={'max-content'} align={'center'}>
        <Logo />
        <Spacer />
        <HStack justify={'center'} align={'center'} spacing={10}>
          <ChakraRouterLink href={'/about'} size="18px">
            О нас
          </ChakraRouterLink>
          <Button onClick={() => alert('modal here')}>Связаться с нами</Button>
        </HStack>
      </Flex>
    </Box>
  )
}

export default Header
