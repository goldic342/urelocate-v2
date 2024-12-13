import {
  FormControl,
  FormHelperText,
  FormLabel,
  HStack
} from '@chakra-ui/react'

const HInputsWrapper = ({ spacing = 20, items }) => {
  return (
    <HStack spacing={spacing}>
      {items.map((item) => (
        <FormControl key={item.label}>
          <FormLabel>{item.label}</FormLabel>
          {item.element}
          {item.help && <FormHelperText>{item.help}</FormHelperText>}
        </FormControl>
      ))}
    </HStack>
  )
}

export default HInputsWrapper
