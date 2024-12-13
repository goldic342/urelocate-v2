import { Box, VStack, Text, HStack, Heading } from '@chakra-ui/react'

const AdvicesSection = ({ advices, specialAdvice, specialAdviceButton }) => {
  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        {advices.map((item, index) => (
          <Box
            key={index}
            p={3}
            bg="white"
            borderWidth="1px"
            borderColor="gray.200"
            borderRadius="md"
          >
            <Text>{item}</Text>
          </Box>
        ))}

        {specialAdvice && (
          <Box
            p={4}
            bg="cyan.50"
            borderWidth="2px"
            borderColor="cyan.300"
            borderRadius="lg"
            boxShadow="md"
          >
            <VStack spacing={3} align="stretch">
              <Heading size={'md'}>{specialAdvice.title}</Heading>
              <Text>{specialAdvice.description}</Text>

              <HStack justifyContent="flex-end">{specialAdviceButton}</HStack>
            </VStack>
          </Box>
        )}
      </VStack>
    </Box>
  )
}

export default AdvicesSection
