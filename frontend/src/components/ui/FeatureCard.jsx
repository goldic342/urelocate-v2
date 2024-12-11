import { Flex, Heading, Text } from '@chakra-ui/react'

const FeatureCard = ({ icon, title, description }) => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      h={'100%'}
      minH="250px"
      p={2}
      borderRadius="md"
      transition="transform 0.3s ease"
      _hover={{ transform: 'translateY(-5px)' }}
    >
      {icon}
      <Heading
        size="md"
        mt={4}
        mb={2}
        h="50px"
        display="flex"
        alignItems="center"
      >
        {title}
      </Heading>
      <Text color="gray.600">{description}</Text>
    </Flex>
  )
}
export default FeatureCard
