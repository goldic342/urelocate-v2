import { Box, Container } from '@chakra-ui/react'
import Hero from '../components/ui/Hero'

const HomePage = () => {
  return (
    <Container maxW={'3xl'}>
      <Box pt={64}>
        <Hero />
      </Box>
    </Container>
  )
}

export default HomePage
