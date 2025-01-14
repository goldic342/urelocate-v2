import { Box } from '@chakra-ui/react'
import { gbc } from '@yuvalkarif/gradient-blob'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

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
  zIndex = -1,
  ...props
}) => {
  const { gb } = gbc({ cacheChance })
  const [gr, sgr] = useState('0 0')

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
        opacity,
        zIndex
      }}
    >
      <Box
        sx={{
          width,
          height,
          background: color,
          transition: `clip-path ${interval / 1000}s ease-in-out`,
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
  gradient: PropTypes.string,
  zIndex: PropTypes.number
}

export default Blob
