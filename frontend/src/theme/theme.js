import { extendTheme } from '@chakra-ui/react'
import '@fontsource/roboto'
import '@fontsource/montserrat'

const gradients = {
  primary: 'linear(10deg, cyan.400, cyan.600)',
  reverse: 'linear(40deg, cyan.600, cyan.400)',
  secondary: 'linear(185deg, cyan.300, cyan.500)'
}

const transitions = {
  base: '0.3s background ease-in-out, 0.3s filter ease-in-out',
  smooth: '0.4s all cubic-bezier(0.4, 0, 0.2, 1)',
  transform: 'transform 0.2s ease-in-out',
  hover: 'all 0.25s ease-in'
}

const fonts = {
  heading: `'Montserrat', sans-serif`,
  body: `'Roboto', sans-serif`
}

const components = {
  Text: {
    baseStyle: {
      color: 'gray.700',
      transition: transitions.base
    },
    variants: {
      primary: {
        bgGradient: gradients.reverse,
        bgClip: 'text',
        fontWeight: 'semibold'
      },
      subtle: {
        color: 'gray.500',
        fontStyle: 'italic'
      }
    }
  },

  Heading: {
    baseStyle: {
      color: 'gray.800',
      transition: transitions.base
    },
    variants: {
      primary: {
        bgGradient: gradients.reverse,
        bgClip: 'text',
        fontWeight: 'extrabold'
      },
      bold: {
        color: 'gray.800',
        fontWeight: 'bold'
      },
      subtle: {
        color: 'gray.600',
        fontWeight: 'medium'
      }
    }
  },

  Button: {
    baseStyle: {
      borderRadius: 'lg',
      transition: transitions.hover,
      _focus: {
        boxShadow: 'outline'
      }
    },
    variants: {
      primary: {
        bgGradient: gradients.primary,
        color: 'white',
        _hover: {
          bgGradient: gradients.reverse,
          boxShadow: 'lg'
        },
        _active: {
          bg: 'cyan.700',
          transform: 'scale(0.98)'
        }
      },
      secondary: {
        bg: 'cyan.500',
        bgGradient: gradients.secondary,
        color: 'white',
        _hover: {
          bgGradient: gradients.reverse,
          boxShadow: 'md'
        },
        _active: {
          bg: 'cyan.700'
        }
      },
      outline: {
        borderColor: 'cyan.500',
        color: 'cyan.600',
        _hover: {
          bg: 'cyan.50'
        }
      },
      ghost: {
        color: 'cyan.600',
        _hover: {
          bg: 'cyan.50'
        }
      }
    },

    defaultProps: {
      variant: 'primary',
      size: 'md'
    }
  }
}

const theme = extendTheme({
  components,
  fonts
})

export default theme
