import { Heading } from '@chakra-ui/react'
import ChakraRouterLink from '../ChakraRouterLink'

const Logo = () => {
  return (
    <ChakraRouterLink href={'/'} _hover={{ textDecoration: 'none' }}>
      <Heading fontSize={{ base: '2xl', lg: '3xl' }} variant={'bold'}>
        URELOCATE
      </Heading>
    </ChakraRouterLink>
  )
}

export default Logo
