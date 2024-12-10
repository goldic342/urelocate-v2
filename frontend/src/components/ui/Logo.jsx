import { Heading } from '@chakra-ui/react'
import ChakraRouterLink from '../ChakraRouterLink'

const Logo = () => {
  return (
    <ChakraRouterLink href={'/'} _hover={{ textDecoration: 'none' }}>
      <Heading fontSize={'3xl'} variant={'bold'}>
        URELOCATE
      </Heading>
    </ChakraRouterLink>
  )
}

export default Logo
