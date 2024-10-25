import { defineStyleConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const buttonTheme = defineStyleConfig({
  baseStyle: {
    fontFamily: "heading",
    fontWeight: "bold",
    borderRadius: "sm",
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
      px: 6,
      py: 6,
    },
  },
  variants: {
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
    }
  },
  defaultProps: {
    size: "md",
    variant: "solid",
  },
});

export { buttonTheme };
