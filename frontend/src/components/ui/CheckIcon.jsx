import { Box } from '@chakra-ui/react'
import { Check } from 'lucide-react'

const CheckIcon = ({ size }) => {
  return (
    <Box
      display={'inline-flex'}
      w={`${size * 2}px`}
      h={`${size * 2}px`}
      alignItems={'center'}
      justifyContent={'center'}
      borderRadius={'50%'}
      bg={'cyan.100'}
    >
      <Check color="#00B5D8" size={size} />
    </Box>
  )
}

export default CheckIcon
