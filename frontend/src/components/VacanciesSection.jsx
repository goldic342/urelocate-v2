import {
  Box,
  Flex,
  Text,
  Link,
  VStack,
  Tag,
  Heading,
  Container
} from '@chakra-ui/react'
import { ExternalLink } from 'lucide-react'
const VacanciesSection = ({ vacancies }) => {
  return (
    <Container maxW={'5xl'}>
      <Heading fontWeight="bold" mb={5}>
        Вакансии
      </Heading>
      <VStack spacing={4} align="stretch">
        {vacancies.jobs.length > 0 ? (
          vacancies.jobs.map((job, index) => (
            <Box
              key={index}
              p={4}
              borderWidth="1px"
              borderRadius="md"
              borderColor="cyan.200"
              transition={'all 0.2s ease-in'}
              _hover={{ bg: 'cyan.100' }}
            >
              <Flex justifyContent="space-between" alignItems="center" mb={1}>
                <Link href={job.url} isExternal fontWeight="semibold">
                  {job.title}{' '}
                  <ExternalLink size={16} style={{ display: 'inline' }} />
                </Link>
                {job.has_relocation && (
                  <Tag size="sm" colorScheme="cyan">
                    Релокация доступна
                  </Tag>
                )}
              </Flex>
              <Text color="cyan.600" mb={4}>
                {job.company} - {job.locations}
              </Text>
              <Text
                color="gray.700"
                mb={2}
                dangerouslySetInnerHTML={{ __html: job.description }}
              ></Text>
              <Text color="gray.400">
                {new Date(job.date).toLocaleDateString()}
              </Text>
            </Box>
          ))
        ) : (
          <Text textAlign={'center'} color={'gray.500'}>
            Вакансий не найдено 😢
          </Text>
        )}
      </VStack>
    </Container>
  )
}

export default VacanciesSection
