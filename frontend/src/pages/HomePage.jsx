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

        <Image src="https://placehold.co/1920x1280" mt={16} />
        <Box maxW={'4xl'}>
          <Box mt={24}>
            <FeaturesSection />
          </Box>

          <Box mt={20}>
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
