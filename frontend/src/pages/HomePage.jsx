import { Box, Container } from '@chakra-ui/react'
import Hero from '../components/landing/Hero'
import FeaturesCheckList from '../components/landing/FeaturesCheckList'
import FeaturesSection from '../components/landing/FeaturesSection'
import CTA from '../components/landing/CTA'
import Blob from '../components/ui/Blob'

const HomePage = () => {
  return (
    <Container
      maxW={'6xl'}
      px={{ base: 4, md: 6 }}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      flexDir={'column'}
      overflow={'visible'}
      position={'relative'}
    >
      <Box
        zIndex={-1}
        position={'absolute'}
        top={{ base: -20, sm: 15, lg: 15 }}
        right={{ base: 0, sm: 10, lg: 20 }}
      >
        <Blob blur={100} opacity={1} cacheChance={90} interval={3000} />
      </Box>
      <Box
        zIndex={-1}
        position={'absolute'}
        display={{ base: 'none', md: 'block' }}
        top={{ base: 0, sm: 40, lg: 40 }}
        left={{ base: 100, sm: 300, lg: 500 }}
      >
        <Blob
          blur={100}
          gradient="linear(to-tl blue.500 cyan.500)"
          width={{ base: '150px', sm: '200px', lg: '200px' }}
          height={{ base: '150px', sm: '200px', lg: '200px' }}
          interval={4000}
          opacity={0.5}
        />
      </Box>

      <Box pt={{ base: 28, md: 48, lg: 64 }} maxW={'3xl'} width="100%">
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
