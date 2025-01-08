import { Box, Stack, Text, Heading, Button } from '@chakra-ui/react'
import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import ContactBtn from '../ContactBtn'
const Hero = () => {
  const navigate = useNavigate()
  return (
    <Box>
      <Box
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        flexDir={'column'}
        gap={3}
      >
        <Heading
          as={'h1'}
          fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
          textAlign={'center'}
          variant={'primary'}
        >
          Открой себе новое место для жизни без проблем
        </Heading>
        <Text
          textAlign={'center'}
          variant={'sublight'}
          fontSize={{ base: 'lg', md: 'xl' }}
          maxW={{ base: '95%', md: '80%' }}
        >
          Делаем переезд простым, чтобы вы могли сосредоточиться на главном —
          своей работе и карьерных достижениях.
        </Text>
      </Box>
      <Box display={'flex'} justifyContent={'center'} pt={4}>
        <Stack
          direction={{ base: 'column', sm: 'row' }}
          spacing={4}
          w={{ base: '100%', sm: 'auto' }}
        >
          <Button
            pr={7}
            variant={'primary'}
            rightIcon={<ArrowRight size={22} />}
            onClick={() => navigate('/form')}
            width={{ base: '100%', sm: 'auto' }}
          >
            Начать
          </Button>
          <ContactBtn variant={'outline'} width={{ base: '100%', sm: 'auto' }}>
            Связяться
          </ContactBtn>
        </Stack>
      </Box>
    </Box>
  )
}

export default Hero
