import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputStepper,
  NumberInputField
} from '@chakra-ui/react'

const SimpleNumberInput = ({ value, onChange, ...props }) => {
  return (
    <NumberInput
      {...props}
      value={value}
      w={'100%'}
      onChange={(e) => onChange(e)}
    >
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  )
}

export default SimpleNumberInput
