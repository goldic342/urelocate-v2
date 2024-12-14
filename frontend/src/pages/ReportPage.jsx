import { Container, Button, Flex, Box, Text } from '@chakra-ui/react'
import PercentProgress from '../components/ui/PercentProgress'
import { useSearchParams } from 'react-router-dom'
import AdvicesSection from '../components/AdvicesSection'
import ExpensesSection from '../components/ExpensesSection'
import VacanciesSection from '../components/VacanciesSection'
import useRemoteData from '../hooks/userRemoteData'
import ReportAPI from '../api/report'
import Loader from '../components/Loder'

const ReportPage = () => {
  const [searchParams] = useSearchParams()
  const { data, isLoading, error } = useRemoteData(async () => {
    const reportApi = new ReportAPI()
    const params = searchParams.get('q')

    if (!params) {
      throw new Error('Ошибка при генерации отчета: q параметр отсутсвует')
    }

    return await reportApi.get_report(JSON.parse(atob(params)))
  }, [])

  return (
    <>
      <Loader isLoading={isLoading} error={error} />
      {!isLoading && !error && (
        <Container maxW={'6xl'}>
          <Flex
            justify={'center'}
            direction={'column'}
            align={'center'}
            mt={28}
            mb={20}
          >
            <PercentProgress value={data.percentage} />
            <Text mt={5} color={'gray.500'} maxW={52} textAlign="center">
              Ваш процентный шанс на успешную релокацию
            </Text>
          </Flex>
          <AdvicesSection
            advices={data.advices}
            specialAdvice={{
              title: 'dsjkakaslkjd',
              description: 'sdjakldjksaljdklasjklsda'
            }}
            specialAdviceButton={
              <Button variant={'gradient'}>Связяться</Button>
            }
          />
          <Box mt={12}>
            <ExpensesSection expenses={data.expenses} />
          </Box>

          <Box mt={12}>
            <VacanciesSection vacancies={data.vacancies} />
          </Box>
        </Container>
      )}
    </>
  )
}

export default ReportPage
