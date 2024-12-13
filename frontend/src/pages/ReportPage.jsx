import { Container, Button, Flex, Box, Text } from '@chakra-ui/react'
import PercentProgress from '../components/ui/PercentProgress'
import { useSearchParams } from 'react-router-dom'
import AdvicesSection from '../components/AdvicesSection'
import ExpensesSection from '../components/ExpensesSection'
import VacanciesSection from '../components/VacanciesSection'

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
      <Box mt={12}>
        <ExpensesSection
          expenses={{
            total_sum: 1029.32,
            categories: [
              {
                name: 'food',
                category_sum: 138.09,
                items: {
                  'Loaf of Fresh White Bread (500g)': 6.39,
                  'Rice (white), (1kg)': 3.8,
                  'Eggs (regular) (12)': 4.16,
                  'Local Cheese (1kg)': 11.26,
                  'Chicken Fillets (1kg)': 13.59,
                  'Apples (1kg)': 21.13,
                  'Banana (1kg)': 10.2,
                  'Oranges (1kg)': 19.2,
                  'Tomato (1kg)': 19.16,
                  'Potato (1kg)': 11.36,
                  'Onion (1kg)': 5.14,
                  'Lettuce (1 head)': 12.7
                }
              },
              {
                name: 'beverages',
                category_sum: 188.85,
                items: {
                  'Cappuccino (regular)': 91.5,
                  'Coke/Pepsi (0.33 liter bottle)': 15.15,
                  'Water (0.33 liter bottle)': 22.2,
                  'Milk (regular), (1 liter)': 21.3,
                  'Water (1.5 liter bottle)': 38.7
                }
              },
              {
                name: 'dining_out',
                category_sum: 545.4,
                items: {
                  'Meal, Inexpensive Restaurant': 392.4,
                  'McMeal at McDonalds (or Equivalent Combo Meal)': 153
                }
              },
              {
                name: 'alcohol',
                category_sum: 156.98,
                items: {
                  'Domestic Beer (0.5 liter draught)': 98.1,
                  'Bottle of Wine (Mid-Range)': 58.88
                }
              }
            ]
          }}
        />
      </Box>

      <Box mt={12}>
        <VacanciesSection
          vacancies={{
            jobs: [],
            pages: 1,
            hits: 2,
            hits_relocation: 1,
            response_type: 'JOBS',
            response_time: 0.0227069854736328
          }}
        />
      </Box>
    </Container>
  )
}

export default ReportPage
