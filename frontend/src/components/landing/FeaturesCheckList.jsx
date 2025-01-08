import { Flex, Box, Image, Heading, Text, Stack } from '@chakra-ui/react'
import CheckItem from '../ui/CheckItem'
import pic from '../../assets/woman_with_cat.png'

const FeaturesCheckList = () => {
  return (
    <Flex
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={{ base: 'column', lg: 'row' }}
      gap={{ base: 10, lg: 20 }}
      px={4}
    >
      <Box
        boxSize={{ base: 'xs', md: 'sm' }}
        display={{ base: 'none', md: 'block' }}
      >
        <Image src={pic} />
      </Box>
      <Box>
        <Flex
          justifyContent={'flex-start'}
          align={{ base: 'center', lg: 'left' }}
          flexDir={'column'}
          gap={4}
        >
          <Heading
            size={{ base: 'xl', md: '2xl' }}
            textAlign={{ base: 'center', lg: 'left' }}
          >
            Точный прогноз для успешного переезда
          </Heading>
          <Text
            color={'gray.800'}
            fontSize={{ base: 'md', md: 'lg' }}
            maxW={'lg'}
            textAlign={{ base: 'center', lg: 'left' }}
          >
            Генерируем персональный отчет, чтобы вы знали, насколько реальна
            ваша релокация
          </Text>
        </Flex>
        <Stack direction={'column'} spacing={4} mt={4}>
          <CheckItem content={'Вероятность релокации в процентах'} />
          <CheckItem
            content={'Вакансии на ваш стек с поддержкой от работодателя'}
          />
          <CheckItem content={'Расходы на релокацию'} />
        </Stack>
      </Box>
    </Flex>
  )
}

export default FeaturesCheckList
