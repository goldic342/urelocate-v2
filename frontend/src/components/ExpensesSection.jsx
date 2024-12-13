import { useState } from 'react'
import {
  Flex,
  Heading,
  VStack,
  Text,
  Box,
  HStack,
  Container,
  ScaleFade,
  Divider
} from '@chakra-ui/react'

const ExpensesSection = ({ expenses }) => {
  const [selectedCategory, setSelectedCategory] = useState(null)

  const categoriesRu = {
    food: 'Еда',
    beverages: 'Напитки',
    dining_out: 'Рестораны',
    alcohol: 'Алкоголь'
  }

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(selectedCategory === categoryName ? null : categoryName)
  }

  return (
    <Container maxW="5xl" py={8}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        borderRadius="2xl"
        gap={6}
        position="relative"
        overflow="hidden"
      >
        <VStack flex={1} align="start" spacing={6} zIndex={1} width="full">
          <Heading mb={4}>
            Траты в месяц:{' '}
            <Heading color={'cyan.500'} display={'inline-block'}>
              {expenses.total_sum.toFixed(2)}$
            </Heading>
          </Heading>

          <VStack width="full" spacing={4} align="stretch">
            {expenses.categories.map((category) => (
              <Box
                key={category.name}
                borderWidth={2}
                borderColor={'cyan.200'}
                borderRadius="xl"
                p={3}
                cursor="pointer"
                transition="all 0.3s ease"
                bg={
                  selectedCategory === category.name
                    ? 'transparent'
                    : 'transparent'
                }
                _hover={{
                  transform: 'translateX(10px)',
                  boxShadow: 'md'
                }}
                onClick={() => handleCategoryClick(category.name)}
                position="relative"
                overflow="hidden"
              >
                <HStack justify="space-between" position="relative" zIndex={2}>
                  <Text
                    fontWeight="bold"
                    color={
                      selectedCategory === category.name
                        ? 'gray.800'
                        : 'inherit'
                    }
                    fontSize="lg"
                  >
                    {categoriesRu[category.name]}
                  </Text>
                  <Text fontWeight="semibold" fontSize="md">
                    {category.category_sum.toFixed(2)}$
                  </Text>
                </HStack>

                <ScaleFade
                  in={selectedCategory === category.name}
                  unmountOnExit
                >
                  {selectedCategory === category.name && (
                    <>
                      <Divider
                        my={2}
                        borderColor={'gray.200'}
                        borderWidth={1.5}
                      />
                      <VStack
                        align="stretch"
                        pl={4}
                        spacing={2}
                        animate={{ opacity: 1, transition: { duration: 0.3 } }}
                      >
                        {Object.entries(category.items).map(
                          ([itemName, price]) => (
                            <HStack
                              key={itemName}
                              justify="space-between"
                              fontSize="sm"
                              opacity={0.8}
                              _hover={{ opacity: 1 }}
                              transition="opacity 0.2s"
                            >
                              <Text color={'gray.800'}>{itemName}</Text>
                              <Text color={'gray.600'} fontWeight="semibold">
                                {price.toFixed(2)}$
                              </Text>
                            </HStack>
                          )
                        )}
                      </VStack>
                    </>
                  )}
                </ScaleFade>
              </Box>
            ))}
          </VStack>
        </VStack>
      </Flex>
    </Container>
  )
}

export default ExpensesSection
