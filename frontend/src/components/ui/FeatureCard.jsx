import { Flex, Heading, Text } from '@chakra-ui/react'

const FeatureCard = ({ icon, title, description }) => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      h={'100%'}
      minH={{ base: '200px', md: '250px' }}
      p={{ base: 4, md: 6 }}
      borderRadius="md"
      transition="transform 0.3s ease"
      _hover={{ transform: 'translateY(-5px)' }}
    >
      {icon}
      <Heading
        size={{ base: 'sm', md: 'md' }}
        mt={4}
        mb={2}
        h="50px"
        display="flex"
        alignItems="center"
      >
        {title}
      </Heading>
      <Text color="gray.600" fontSize={{ base: 'sm', md: 'md' }}>
        {description}
      </Text>
    </Flex>
  )
}
export default FeatureCard
