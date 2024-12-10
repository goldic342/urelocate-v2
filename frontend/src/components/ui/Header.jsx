import { Box, Flex, Spacer, Button, HStack } from '@chakra-ui/react'
import Logo from './Logo'
import ChakraRouterLink from '../ChakraRouterLink'
const Header = () => {
  return (
    <Box as="header" p={5} px={7}>
      <Flex minW={'max-content'} align={'center'}>
        <Logo />
        <Spacer />
        <HStack justify={'center'} align={'center'} spacing={10}>
          <ChakraRouterLink href={'/about'} size="2xl">
            О нас
          </ChakraRouterLink>
          <Button onClick={() => alert('modal here')}>Связаться с нами</Button>
        </HStack>
      </Flex>
    </Box>
  )
}

export default Header
