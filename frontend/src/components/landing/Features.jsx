import { Flex, Box, Image, Heading, Text, Stack } from '@chakra-ui/react'
import CheckItem from '../ui/CheckItem'
import pic from '../../assets/woman_with_cat.png'

const Features = () => {
  return (
    <Flex justifyContent={'center'} alignItems={'flex-start'} gap={12}>
      <Box boxSize={'lg'}>
        <Image src={pic} />
      </Box>
      <Box>
        <Flex justifyContent={'flex-start'} flexDir={'column'} gap={4}>
          <Heading fontSize={'4xl'} variant={'primary'}>
            Точный прогноз для успешного переезда
          </Heading>
          <Text color={'gray.800'} fontSize={'xl'}>
            Генерируем персональный отчет, чтобы вы знали, насколько реальна
            ваша релокация
          </Text>
        </Flex>
        <Stack direction={'column'} spacing={4} mt={4}>
          <CheckItem content={'Процентная вероятность релокации'} />
          <CheckItem
            content={'Вакансии на ваш стек с поддержкой от работодателя'}
          />
          <CheckItem content={'Расходы на релокацию'} />
        </Stack>
      </Box>
    </Flex>
  )
}

export default Features
