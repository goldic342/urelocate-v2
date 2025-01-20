import { color, extendTheme } from "@chakra-ui/react";
import "@fontsource/dm-sans";

const transitions = {
  base: "0.3s background ease-in-out, 0.3s filter ease-in-out",
  smooth: "0.4s all cubic-bezier(0.4, 0, 0.2, 1)",
  transform: "transform 0.2s ease-in-out",
  hover: "all 0.2s ease-in",
};

const fonts = {
  heading: `'DM Sans', sans-serif`,
  body: `'DM Sans', sans-serif`,
};

const components = {
  Text: {
    baseStyle: {
      color: "gray.700",
      transition: transitions.base,
    },
    variants: {
      primary: {
        color: "cyan.600",
        fontWeight: "semibold",
      },
      sublight: {
        color: "stone.800",
      },
      default: {
        color: "gray.500",
      },
    },
  },

  Heading: {
    baseStyle: {
      color: "gray.800",
      transition: transitions.base,
    },
    variants: {
      primary: {
        color: "blue.900",
        fontWeight: "bold",
      },
      bold: {
        color: "gray.800",
        fontWeight: "semibold",
      },
      subtle: {
        color: "gray.600",
        fontWeight: "medium",
      },
    },
  },

  Link: {
    baseStyle: {
      color: "black.500",
    },
    variants: {
      colored: {
        color: "cyan.500",
      },
    },
  },
  Button: {
    baseStyle: {
      borderRadius: "full",
      transition: transitions.hover,
      // Why paddings not working here??
      _focus: {
        boxShadow: "outline",
      },
      fontWeight: "extrabold",
    },
    variants: {
      primary: {
        bg: "cyan.500",
        color: "white",
        px: 9,
        py: 6,
        _hover: {
          bg: "cyan.600",
          boxShadow: "md",
        },
        _active: {
          bg: "cyan.800",
          transform: "scale(0.98)",
        },
      },
      outline: {
        px: 9,
        py: 6,
        borderColor: "blackAlpha.400",
        color: "cyan.600",
        _hover: {
          bg: "cyan.50",
        },
      },
      ghost: {
        color: "cyan.600",
        _hover: {
          bg: "cyan.50",
        },
      },
      gradient: {
        bg: "transparent",
        bgGradient: "linear(to-r, cyan.400, blue.400)",
        color: "white",
        px: 9,
        py: 6,
        position: "relative",
        overflow: "hidden",
        _before: {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bgGradient: "linear(to-r, cyan.400, purple.600)",
          opacity: 0,
          transition: "opacity 0.5s ease",
          zIndex: -1,
          filter: "blur(20px)",
          borderRadius: "full",
        },
        _hover: {
          _before: {
            opacity: 0.5,
          },
          transform: "scale(1.02)",
          boxShadow: "xl",
        },
        _active: {
          transform: "scale(0.98)",
        },
      },
    },

    defaultProps: {
      variant: "primary",
      size: "md",
    },
  },
};

const theme = extendTheme({
  components,
  fonts,
  colors: {
    stone: {
      800: "#9795B5",
    },
  },
});

export default theme;
