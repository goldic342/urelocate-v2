import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'

const PercentProgress = ({ value }) => {
  let color = ''

  if (0 < value < 10) color = 'red.700'
  else if (10 < value < 20) color = 'red.400'
  else if (20 < value < 60) color = 'yellow.400'
  else if (60 < value < 80) color = 'green.300'
  else if (80 < value) color = 'green.400'

  return (
    <CircularProgress value={value} min={0} max={100} size={128} color={color}>
      <CircularProgressLabel>{value}%</CircularProgressLabel>
    </CircularProgress>
  )
}

export default PercentProgress
