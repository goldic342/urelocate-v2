import { Container, Button, Flex, Box } from '@chakra-ui/react'
import PercentProgress from '../components/ui/PercentProgress'
import { useSearchParams } from 'react-router-dom'
import AdvicesSection from '../components/AdvicesSection'

const ReportPage = () => {
  const [searchParams] = useSearchParams()

  return (
    <Container maxW={'6xl'}>
      <Flex justify={'center'} align={'center'} mt={28} mb={20}>
        <PercentProgress value={90} />
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
