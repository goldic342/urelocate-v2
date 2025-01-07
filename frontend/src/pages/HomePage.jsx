import { Box, Container } from '@chakra-ui/react'
import Hero from '../components/landing/Hero'
import FeaturesCheckList from '../components/landing/FeaturesCheckList'
import FeaturesSection from '../components/landing/FeaturesSection'
import CTA from '../components/landing/CTA'

const HomePage = () => {
  return (
    <Container
      maxW={'6xl'}
      px={{ base: 4, md: 6 }}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      flexDir={'column'}
    >
      <Box pt={{ base: 20, md: 48, lg: 64 }} maxW={'3xl'} width="100%">
        <Hero />
      </Box>
      <Box maxW={'4xl'} width="100%">
        <Box mt={{ base: 32, md: 48, lg: 56 }}>
          <FeaturesSection />
        </Box>
        <Box mt={{ base: 20, md: 32, lg: 48 }}>
          <FeaturesCheckList />
        </Box>
      </Box>
      <Box mt={20} width="100%">
        <CTA />
      </Box>
    </Container>
  )
}

export default HomePage
