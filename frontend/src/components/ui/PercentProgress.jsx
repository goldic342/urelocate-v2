import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'

const PercentProgress = ({ value }) => {
  let color = ''

  if (value > 0 && value < 10) color = 'red.700'
  else if (value >= 10 && value < 20) color = 'red.400'
  else if (value >= 20 && value < 60) color = 'yellow.400'
  else if (value >= 60 && value < 80) color = 'green.300'
  else if (value >= 80) color = 'green.400'

  return (
    <CircularProgress
      value={value}
      min={0}
      max={100}
      size={{ base: '120px', md: '156px' }}
      color={color}
    >
      <CircularProgressLabel fontSize={{ base: 'xl', md: '2xl' }}>
        {value}%
      </CircularProgressLabel>
    </CircularProgress>
  )
}

export default PercentProgress
