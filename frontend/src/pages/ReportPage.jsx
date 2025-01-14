import { useState } from 'react'
import { Container, Flex, Box, Text } from '@chakra-ui/react'
import PercentProgress from '../components/ui/PercentProgress'
import { useSearchParams } from 'react-router-dom'
import AdvicesSection from '../components/AdvicesSection'
import ExpensesSection from '../components/ExpensesSection'
import VacanciesSection from '../components/VacanciesSection'
import useRemoteData from '../hooks/userRemoteData'
import ReportAPI from '../api/report'
import Loader from '../components/Loader'
import ContactBtn from '../components/ContactBtn'
import ErrorDisplay from '../components/ErrorDisplay'

const ReportPage = () => {
  const [searchParams] = useSearchParams()
  const [paramsError, setParamsError] = useState('')

  const { data, isLoading, error } = useRemoteData(async () => {
    const reportApi = new ReportAPI()
    const params = searchParams.get('q')

    if (!params) {
      setParamsError('Недействительная ссылка...')
    }

    return await reportApi.get_report(JSON.parse(atob(params)))
  }, [])

  if (paramsError) {
    return <ErrorDisplay error={{ errorMessage: paramsError }} />
  }

  return (
    <>
      <Loader isLoading={isLoading} error={error} />
      {!isLoading && !error && (
        <Container maxW={'6xl'} px={{ base: 4, md: 6 }}>
          <Flex
            justify={'center'}
            direction={'column'}
            align={'center'}
            mt={{ base: 16, md: 28 }}
            mb={{ base: 12, md: 20 }}
          >
            <PercentProgress value={data.percentage} />
            <Text
              mt={5}
              color={'gray.500'}
              maxW={{ base: '100%', md: 52 }}
              textAlign="center"
              px={4}
            >
              Ваш процентный шанс на успешную релокацию
            </Text>
          </Flex>
          <AdvicesSection
            advices={data.advices}
            specialAdvice={{
              title: 'Поможем с переездом',
              description:
                'Устроим логистику, найдем работу, подготовим к собеседованию'
            }}
            specialAdviceButton={
              <ContactBtn variant="gradient">Связаться</ContactBtn>
            }
          />
          <Box mt={{ base: 8, md: 12 }}>
            <ExpensesSection expenses={data.expenses} />
          </Box>
          <Box mt={{ base: 8, md: 12 }} mb={8}>
            <VacanciesSection vacancies={data.vacancies} />
          </Box>
        </Container>
      )}
    </>
  )
}

export default ReportPage
