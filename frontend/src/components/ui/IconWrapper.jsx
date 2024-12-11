import { Box } from '@chakra-ui/react'

const IconWrapper = ({ children }) => {
  return (
    <Box bg="cyan.100" p={3} borderRadius="full">
      {children}
    </Box>
  )
}

export default IconWrapper
