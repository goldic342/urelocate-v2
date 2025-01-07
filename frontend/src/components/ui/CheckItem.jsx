import { HStack, Text } from '@chakra-ui/react'
import CheckIcon from './CheckIcon'

const CheckItem = ({ content, size = 12, ...props }) => {
  return (
    <HStack spacing={3}>
      <CheckIcon size={size} />
      <Text fontSize={{ base: 'md', md: 'lg' }} textAlign={'left'} {...props}>
        {content}
      </Text>
    </HStack>
  )
}

export default CheckItem
