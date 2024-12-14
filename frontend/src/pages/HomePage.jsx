import { Box, Container, Image } from '@chakra-ui/react'
import Hero from '../components/landing/Hero'
import FeaturesCheckList from '../components/landing/FeaturesCheckList'
import Footer from '../components/ui/Footer'
import FeaturesSection from '../components/landing/FeaturesSection'
import CTA from '../components/landing/CTA'

const HomePage = () => {
  return (
    <>
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

        <Box maxW={'4xl'}>
          <Box mt={48}>
            <FeaturesSection />
          </Box>

          <Box mt={28}>
            <FeaturesCheckList />
          </Box>
        </Box>
        <Box mt={18}>
          <CTA />
        </Box>
      </Container>
    </>
  )
}

export default HomePage
