import { Button, Flex, Heading, Text } from '@chakra-ui/react'
import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const CTA = () => {
  const navigate = useNavigate()
  return (
    <Flex
      p={{ base: 6, md: 12 }}
      borderRadius="2xl"
      border={'solid'}
      borderWidth={'1px'}
      borderColor={'cyan.500'}
      align="flex-start"
      justify="space-between"
      flexDirection={{ base: 'column', md: 'row' }}
      gap={{ base: 6, md: 20 }}
    >
      <Heading
        mb={2}
        size={{ base: 'lg', md: 'xl' }}
        textAlign={{ base: 'center', md: 'left' }}
      >
        Релокация в новую страну
      </Heading>
      <Flex
        direction="column"
        gap={4}
        maxW={'lg'}
        align={{ base: 'center', md: 'flex-start' }}
      >
        <Text textAlign={{ base: 'center', md: 'left' }}>
          Заполни форму, и мы проведем анализ твоего переезда: какие шаги нужно
          сделать, сколько потребуется денег и какие приключения тебя ждут в
          новой стране.
        </Text>
        <Button
          rightIcon={<ArrowRight />}
          maxW={{ base: '100%', md: 'min' }}
          variant={'outline'}
          onClick={() => navigate('/form')}
        >
          Начать
        </Button>
      </Flex>
    </Flex>
  )
}

export default CTA
