import { Box } from '@chakra-ui/react'
import ChakraRouterLink from './ChakraRouterLink'

const ErrorNavigationLinks = ({ homeNav = true, githubNav = true }) => {
  if (!homeNav && !githubNav) {
    throw new Error('At least one of props homeNav or githubNav must be true')
  }
  return (
    <Box textAlign="center">
      {homeNav && (
        <ChakraRouterLink href="/" color="cyan.400">
          На главную
        </ChakraRouterLink>
      )}
      {homeNav && githubNav && <> | </>}
      {githubNav && (
        <ChakraRouterLink
          href="https://github.com/goldic342/urelocate-v2/issues/new"
          color="cyan.400"
        >
          Github issue
        </ChakraRouterLink>
      )}
    </Box>
  )
}
export default ErrorNavigationLinks
