import { defineStyleConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const buttonTheme = defineStyleConfig({
  baseStyle: {
    fontFamily: "heading",
    fontWeight: "bold",
    borderRadius: "xl",
  },
  sizes: {
    sm: {
      fontSize: "sm",
      px: 3,
      py: 3,
    },
    md: {
      fontSize: "md",
      px: 4,
      py: 4,
    },
    lg: {
      fontSize: "lg",
      px: 12,
      py: 6,
    },
  },
  variants: {
    icon: (props) => ({
      height: "48px",
      width: "48px",
      border: "none",
      bg: mode("gray.800", "gray.200")(props),
      color: mode("gray.200", "gray.500")(props),
      borderRadius: "50%",
      _hover: {
        color: mode("gray.50", "gray.900")(props),
        bg: mode("gray.900", "gray.50")(props),
      },
    }),
    outline: (props) => ({
      border: "2px solid",
      borderColor: mode("gray.900", "gray.50")(props),
      color: mode("gray.900", "gray.50")(props),
      bg: "transparent",
      _hover: {
        color: mode("gray.50", "gray.900")(props),
        bg: mode("gray.900", "gray.50")(props),
      },
    }),
    outlineInverted: (props) => ({
      border: "2px solid",
      borderColor: mode("white", "black")(props),
      color: mode("white", "black")(props),
      bg: "transparent",
      _hover: {
        color: mode("white", "black")(props),
        bg: mode("gray.900", "black")(props),
      },
    }),
    solid: {
      bg: "brand.900",
      color: "brand.50",
      _hover: {
        bg: "brand.600",
      },
    },
  },
  defaultProps: {
    size: "md",
    variant: "solid",
  },
});

export { buttonTheme };
