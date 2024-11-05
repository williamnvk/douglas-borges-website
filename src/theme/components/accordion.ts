import { accordionAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(accordionAnatomy.keys);

const custom = definePartsStyle({
  base: {
    border: "none",
  },
  container: {
    border: "none",
    bg: "gray.700",
    mb: 4,
    borderRadius: "6px",
    _dark: {
      bg: "gray.700",
    },
  },
  root: {
    border: "none",
    borderRadius: "4px",
    overflow: "hidden",
  },
  panel: {
    border: "none",
  },
  button: {
    border: "none",
    borderWidth: 0,
    padding: 4,
    borderBottomWidth: 1,
    borderColor: "gray.500",
    fontSize: "18px",
    fontFamily: "heading",
    _dark: {
      borderColor: "gray.500",
    },
  },
  icon: {
    border: "none",
    background: "gray.600",
    borderRadius: "full",
    color: "gray.400",
    _dark: {
      background: "gray.600",
      color: "gray.400",
    },
  },
});

export const accordionTheme = defineMultiStyleConfig({
  variants: { custom },
});
