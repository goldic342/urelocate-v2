import { Box, HStack, Text, Heading, Button } from '@chakra-ui/react'
import { ArrowRight } from 'lucide-react'
const Hero = () => {
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
        <Text textAlign={'center'} variant={'sub'} fontSize={'xl'} maxW={'80%'}>
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
          >
            Начать
          </Button>
          <Button
            variant={'outline'}
            onClick={() => {
              alert('also modal here')
            }}
          >
            Связяться
          </Button>
        </HStack>
      </Box>
    </Box>
  )
}

export default Hero
