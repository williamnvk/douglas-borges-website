"use client";

import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";
import { components } from "./components";
import { themeConfig } from "./config";
import { fonts } from "./fonts";

const customTheme = extendTheme({
  styles: {
    global: {
      "html, body": {
        height: "100%",
      },
      body: {
        bg: "white",
        _dark: {
          bg: "gray.800",
        },
      },
      "::-webkit-scrollbar": {
        width: "6px",
        bg: "rgba(0, 0, 0, .1)",
      },
      "::-webkit-scrollbar-track": {
        width: "8px",
        bg: "rgba(0, 0, 0, .2)",
      },
      "::-webkit-scrollbar-thumb": {
        bg: "gray.500",
        _dark: {
          bg: "red",
        },
        borderRadius: "8px",
      },
    },
  },
  fonts,
  colors,
  config: themeConfig,
  components,
  container: {
    lg: "1280px",
    xl: "1440px",
  },
  breakpoints: {
    base: "0em",
    md: "768px",
    lg: "1366px",
    xl: "1440px",
  },
  radii: {
    sm: "4px",
    md: "8px",
    lg: "16px",
    xl: "24px",
  },
});

export default customTheme;
