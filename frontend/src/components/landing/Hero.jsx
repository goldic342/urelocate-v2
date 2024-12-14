import { Box, HStack, Text, Heading, Button } from '@chakra-ui/react'
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
          fontSize={'6xl'}
          textAlign={'center'}
          variant={'primary'}
        >
          Открой себе новое место для жизни без проблем
        </Heading>
        <Text
          textAlign={'center'}
          variant={'sublight'}
          fontSize={'xl'}
          maxW={'80%'}
        >
          Делаем переезд простым, чтобы вы могли сосредоточиться на главном —
          своей работе и карьерных достижениях.
        </Text>
      </Box>
      <Box display={'flex'} justifyContent={'center'} pt={4}>
        <HStack spacing={4}>
          <Button
            pr={7}
            variant={'primary'}
            rightIcon={<ArrowRight size={22} />}
            onClick={() => navigate('/form')}
          >
            Начать
          </Button>
          <Button
            variant={'outline'}
            onClick={() => {
              setIsOpen(true)
            }}
          >
            Связяться
          </Button>
        </HStack>
      </Box>
      <ContactModal isOpen={isOpen} onClick={() => setIsOpen(false)} />
    </Box>
  )
}

export default Hero
