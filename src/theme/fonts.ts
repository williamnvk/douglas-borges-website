import type { DeepPartial, Theme } from "@chakra-ui/react";
import "@fontsource/urbanist";
import "@fontsource/work-sans";

export const fonts: DeepPartial<Theme["fonts"]> = {
  heading: `"Urbanist"`,
  body: `"Work Sans", sans-serif`,
};
