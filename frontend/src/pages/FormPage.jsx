import { Container, Heading, Text, Flex } from '@chakra-ui/react'
import Form from '../components/Form'

const FormPage = () => {
  return (
    <Container>
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
      <Form />
    </Container>
  )
}

export default FormPage
