import { Container, Heading, Text, Flex, Box } from '@chakra-ui/react'
import Form from '../components/Form'
import { useLoaderData } from 'react-router-dom'

const FormPage = () => {
  const loaderData = useLoaderData()
  return (
    <Container maxW={'6xl'}>
      <Flex justify={'center'} direction={'column'} align={'center'} mt={92}>
        <Heading textAlign={'center'} fontSize={'5xl'}>
          Заполните форму
        </Heading>
        <Text
          variant={'sub'}
          textAlign={'center'}
          fontSize={'xl'}
          mt={4}
          maxW={'xl'}
        >
          Это поможет нам выяснить твои шансы на успех, подобрать подходящие
          вакансии и многое другое.
        </Text>
      </Flex>
      <Box mt={62}>
        <Form formData={loaderData} />
      </Box>
    </Container>
  )
}

export default FormPage
