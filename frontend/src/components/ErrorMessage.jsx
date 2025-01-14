import { VStack, Heading, Text, Image } from '@chakra-ui/react'
import sadCatPic from '../assets/sad_cat.jpg'

/**
 * ErrorMessage component to display error details.
 *
 * This component can handle two scenarios:
 * 1. When an error object is passed with `status`, `statusText`, and `errorMessage`.
 * 2. When a plain error message string is passed as `errorMessage`.
 *
 */
const ErrorMessage = ({ status, statusText, errorMessage }) => {
  const isSimpleError = !status && !statusText && errorMessage

  return (
    <VStack spacing={4} textAlign="center">
      {!isSimpleError && status && <Heading size="4xl">{status}</Heading>}
      <VStack spacing={0}>
        {!isSimpleError && statusText && (
          <Heading size="xl" color="gray.800">
            {statusText}
          </Heading>
        )}

        {isSimpleError ? (
          <>
            <Image
              width={'150px'}
              height={'150px'}
              src={sadCatPic}
              alt="sad cat :("
            />

            <Heading size={'lg'} mt={4}>
              {errorMessage}
            </Heading>
          </>
        ) : (
          <Text size="lg" color="gray.600">
            {errorMessage}
          </Text>
        )}
      </VStack>
    </VStack>
  )
}

export default ErrorMessage
