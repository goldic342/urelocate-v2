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
    <Container maxW={'5xl'} px={{ base: 4, md: 6 }}>
      <Heading fontWeight="bold" mb={5} fontSize={{ base: '2xl', md: '3xl' }}>
        Вакансии
      </Heading>
      <VStack spacing={4} align="stretch">
        {vacancies.jobs.length > 0 ? (
          vacancies.jobs.map((job, index) => (
            <Box
              key={index}
              p={{ base: 3, md: 4 }}
              borderWidth="1px"
              borderRadius="md"
              borderColor="cyan.200"
              transition={'all 0.2s ease-in'}
              _hover={{ bg: 'cyan.100' }}
            >
              <Flex
                direction={{ base: 'column', md: 'row' }}
                justifyContent="space-between"
                alignItems={{ base: 'flex-start', md: 'center' }}
                mb={1}
                gap={2}
              >
                <Link
                  href={job.url}
                  isExternal
                  fontWeight="semibold"
                  fontSize={{ base: 'sm', md: 'md' }}
                >
                  {job.title}{' '}
                  <ExternalLink size={16} style={{ display: 'inline' }} />
                </Link>
                {job.has_relocation && (
                  <Tag size="sm" colorScheme="cyan">
                    Релокация доступна
                  </Tag>
                )}
              </Flex>
              <Text color="cyan.600" mb={4} fontSize={{ base: 'xs', md: 'sm' }}>
                {job.company} - {job.locations}
              </Text>
              <Text
                color="gray.700"
                mb={2}
                fontSize={{ base: 'sm', md: 'md' }}
                dangerouslySetInnerHTML={{ __html: job.description }}
              ></Text>
              <Text color="gray.400" fontSize={{ base: 'xs', md: 'sm' }}>
                {new Date(job.date).toLocaleDateString()}
              </Text>
            </Box>
          ))
        ) : (
          <Text
            textAlign={'center'}
            color={'gray.500'}
            fontSize={{ base: 'sm', md: 'md' }}
          >
            Вакансий не найдено 😢
          </Text>
        )}
      </VStack>
    </Container>
  )
}

export default VacanciesSection
