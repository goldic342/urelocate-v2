import { FormControl, FormHelperText, FormLabel, Stack } from '@chakra-ui/react'

const InputsWrapper = ({ spacing = 20, items, direction = 'row' }) => {
  return (
    <Stack spacing={spacing} direction={direction} w="100%">
      {items.map((item) => (
        <FormControl key={item.label} w="100%">
          <FormLabel>{item.label}</FormLabel>
          {item.element}
          {item.help && <FormHelperText>{item.help}</FormHelperText>}
        </FormControl>
      ))}
    </Stack>
  )
}

export default InputsWrapper
