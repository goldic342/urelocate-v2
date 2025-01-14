import { Box, VStack } from '@chakra-ui/react'
import { useRouteError, isRouteErrorResponse } from 'react-router-dom'
import Blob from '../components/ui/Blob'
import ErrorNavigationLinks from '../components/ErrorNavigationLinks'
import ErrorMessage from '../components/ErrorMessage'

const ErrorPage = () => {
  const error = useRouteError()

  let status = 500
  let statusText = 'Error'
  let errorMessage

  if (isRouteErrorResponse(error)) {
    status = error.status
    statusText = error.statusText
    errorMessage = error.data?.message || errorMessage
  } else if (error instanceof Error) {
    errorMessage = error.message || errorMessage
  }

  return (
    <>
      <Blob
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100vh"
        blur={100}
        opacity={0.4}
        color="blue.400"
        cacheChance={90}
        interval={2000}
      />

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        px={4}
        position="relative"
      >
        <VStack spacing={2}>
          <ErrorMessage
            status={status}
            errorMessage={errorMessage}
            statusText={statusText}
          />
          <ErrorNavigationLinks />
        </VStack>
      </Box>
    </>
  )
}

export default ErrorPage
