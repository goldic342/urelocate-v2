import { Button, Flex, Heading, Text } from '@chakra-ui/react'
import { ArrowRight } from 'lucide-react'

const CTA = () => {
  return (
    <Flex
      p={12}
      borderRadius="2xl"
      border={'solid'}
      borderWidth={'1px'}
      borderColor={'cyan.500'}
      align="flex-start"
      justify="space-between"
      gap={20}
    >
      <Heading mb={2}>Релокация в новую страну</Heading>
      <Flex direction="column" gap={4} maxW={'lg'}>
        <Text>
          Заполни форму, и мы проведем анализ твоего переезда: какие шаги нужно
          сделать, сколько потребуется денег и какие приключения тебя ждут в
          новой стране.
        </Text>
        <Button rightIcon={<ArrowRight />} maxW={'min'} variant={'outline'}>
          Начать
        </Button>
      </Flex>
    </Flex>
  )
}

export default CTA
