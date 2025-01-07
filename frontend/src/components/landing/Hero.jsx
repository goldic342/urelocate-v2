import { Box, Stack, Text, Heading, Button } from '@chakra-ui/react'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ContactModal from '../ContactModal'
const Hero = () => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
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
          <Button
            variant={'outline'}
            onClick={() => setIsOpen(true)}
            width={{ base: '100%', sm: 'auto' }}
          >
            Связяться
          </Button>
        </Stack>
      </Box>
      <ContactModal isOpen={isOpen} onClick={() => setIsOpen(false)} />
    </Box>
  )
}

export default Hero
