import type { DeepPartial, Theme } from "@chakra-ui/react";
import "@fontsource/urbanist";

export const fonts: DeepPartial<Theme["fonts"]> = {
  heading: `"Urbanist"`,
  body: `sans-serif`,
  mono: `"Roboto Slab"`,
};
