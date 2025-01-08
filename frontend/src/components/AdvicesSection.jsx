import { Box, VStack, Text, HStack, Heading, Flex } from '@chakra-ui/react'

const AdvicesSection = ({ advices, specialAdvice, specialAdviceButton }) => {
  return (
    <Flex
      direction={'column'}
      justify={'center'}
      align={'center'}
      w="100%"
      px={{ base: 4, md: 0 }}
    >
      <Flex direction={'column'} gap={7} w="100%">
        <Heading alignSelf={'flex-start'} fontSize={{ base: '2xl', md: '3xl' }}>
          Советы
        </Heading>
        <VStack spacing={4} align="stretch" w="100%">
          {advices.map((item, index) => (
            <Box
              key={index}
              p={{ base: 4, md: 5 }}
              bg="white"
              borderWidth="1px"
              borderColor="gray.200"
              borderRadius="md"
            >
              <Text fontSize={{ base: 'sm', md: 'md' }}>{item}</Text>
            </Box>
          ))}
          {specialAdvice && (
            <Box
              p={{ base: 4, md: 6 }}
              bg="cyan.50"
              borderWidth="2px"
              borderColor="cyan.300"
              borderRadius="lg"
              boxShadow="md"
            >
              <VStack spacing={3} align="stretch">
                <Heading size={{ base: 'sm', md: 'md' }}>
                  {specialAdvice.title}
                </Heading>
                <Text fontSize={{ base: 'sm', md: 'md' }}>
                  {specialAdvice.description}
                </Text>
                <HStack justifyContent="flex-end">{specialAdviceButton}</HStack>
              </VStack>
            </Box>
          )}
        </VStack>
      </Flex>
    </Flex>
  )
}

export default AdvicesSection
