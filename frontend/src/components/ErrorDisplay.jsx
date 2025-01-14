import { Box, VStack } from '@chakra-ui/react'
import ErrorMessage from './ErrorMessage'
import ErrorNavigationLinks from './ErrorNavigationLinks'

const ErrorDisplay = ({ error }) => {
  const status = error?.status
  const statusText = error?.statusText
  let errorMessage = error?.errorMessage || 'Что-то пошло не так :('

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="90vh"
      px={4}
      position="relative"
    >
      <VStack spacing={6}>
        <ErrorMessage
          status={status}
          statusText={statusText}
          errorMessage={errorMessage}
        />
        <ErrorNavigationLinks homeNav={false} />
      </VStack>
    </Box>
  )
}

export default ErrorDisplay
