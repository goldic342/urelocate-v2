import { Container, Button, Flex, Box, Text } from '@chakra-ui/react'
import PercentProgress from '../components/ui/PercentProgress'
import { useSearchParams } from 'react-router-dom'
import AdvicesSection from '../components/AdvicesSection'

const ReportPage = () => {
  const [searchParams] = useSearchParams()

  return (
    <Container maxW={'6xl'}>
      <Flex
        justify={'center'}
        direction={'column'}
        align={'center'}
        mt={28}
        mb={20}
      >
        <PercentProgress value={90} />
        <Text mt={5} color={'gray.500'} maxW={52} textAlign="center">
          Ваш процентный шанс на успешную релокацию
        </Text>
      </Flex>
      <AdvicesSection
        advices={[
          'Повышайте уровень опыта в своей области. Рассмотрите возможность участия в профессиональных курсах или проектах.',
          'Создайте портфолио или завершите сертификационные программы, чтобы повысить доверие работодателей.'
        ]}
        specialAdvice={{
          title: 'dsjkakaslkjd',
          description: 'sdjakldjksaljdklasjklsda'
        }}
        specialAdviceButton={<Button variant={'gradient'}>Связяться</Button>}
      />
    </Container>
  )
}

export default ReportPage
