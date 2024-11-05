import { buttonTheme as Button } from "./button";
import { accordionTheme as Accordion } from "./accordion";

export const components = {
  Button,
  Accordion,
  FormLabel: {
    baseStyle: {
      display: "flex",
      alignItems: "center",
      fontWeight: "normal",
      fontSize: "sm",
      gap: 2,
    },
  },
};
