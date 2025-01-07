import { Container, Heading, Text, Flex, Box } from '@chakra-ui/react'
import Form from '../components/Form'
import { useLoaderData } from 'react-router-dom'

const FormPage = () => {
  const loaderData = useLoaderData()
  return (
    <Container maxW={'6xl'} px={{ base: 4, md: 6 }}>
      <Flex
        justify={'center'}
        direction={'column'}
        align={'center'}
        mt={{ base: 20, md: 92 }}
      >
        <Heading
          textAlign={'center'}
          fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
        >
          Заполните форму
        </Heading>
        <Text
          variant={'sub'}
          textAlign={'center'}
          fontSize={{ base: 'lg', md: 'xl' }}
          mt={4}
          maxW={'xl'}
          px={4}
        >
          Это поможет нам выяснить твои шансы на успех, подобрать подходящие
          вакансии и многое другое.
        </Text>
      </Flex>
      <Box mt={{ base: 20, md: 62 }}>
        <Form formValues={loaderData} />
      </Box>
    </Container>
  )
}

export default FormPage
