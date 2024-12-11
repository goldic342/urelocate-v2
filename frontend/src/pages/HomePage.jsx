import { Box, Container, Image } from '@chakra-ui/react'
import Hero from '../components/landing/Hero'
import Features from '../components/landing/Features'

const HomePage = () => {
  return (
    <Container
      maxW={'6xl'}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      flexDir={'column'}
    >
      <Box pt={64} maxW={'3xl'}>
        <Hero />
      </Box>

      <Image src="https://placehold.co/1920x1280" mt={16} />
      <Box maxW={'4xl'}>
        <Box mt={24}>
          <Features />
        </Box>
      </Box>
    </Container>
  )
}

export default HomePage
