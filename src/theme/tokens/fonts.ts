import { defineTokens } from "@chakra-ui/react";

const fallback = `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`;

export const fonts = defineTokens.fonts({
  heading: {
    value: `"Urbanist", ${fallback}`,
  },

  body: {
    value: `"Work Sans", ${fallback}`,
  },

  mono: {
    value: `"Geist Mono", ${fallback}`,
  },
});
