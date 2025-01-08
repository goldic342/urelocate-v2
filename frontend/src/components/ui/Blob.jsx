import { Box } from '@chakra-ui/react'
import { gbc } from '@yuvalkarif/gradient-blob'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types' // Import PropTypes

const Blob = ({
  points = 30,
  color = 'cyan.400',
  blur = 100,
  opacity = 0.8,
  interval = 2000,
  width = { base: '250px', md: '300px', lg: '400px' },
  height = { base: '250px', md: '300px', lg: '400px' },
  gradient = 'linear(to-tr, cyan.500, blue.500)',
  cacheChance = 50,
  ...props
}) => {
  const { gb } = gbc({ cacheChance })
  const [gr, sgr] = useState('12, 20')

  useEffect(() => {
    const timer = setTimeout(() => {
      const gradientBlob = gb(points)
      sgr(gradientBlob)
    }, interval)

    return () => clearTimeout(timer)
  }, [gb, points, interval])

  return (
    <Box
      sx={{
        filter: `blur(${blur}px)`,
        opacity
      }}
    >
      <Box
        sx={{
          width,
          height,
          background: color,
          transition: 'clip-path 1s ease-in-out',
          clipPath: `polygon(${gr})`,
          bgGradient: gradient
        }}
        {...props}
      ></Box>
    </Box>
  )
}

Blob.propTypes = {
  points: PropTypes.number,
  color: PropTypes.string,
  blur: PropTypes.number,
  opacity: PropTypes.number,
  interval: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  cacheChance: PropTypes.number,
  gradient: PropTypes.string
}

export default Blob