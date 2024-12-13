import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputStepper,
  NumberInputField
} from '@chakra-ui/react'

const SimpleNumberInput = ({ value, onChange, ...props }) => {
  return (
    <NumberInput {...props} value={value} onChange={(e) => onChange(e)}>
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  )
}

export default SimpleNumberInput
