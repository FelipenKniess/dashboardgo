import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    colors: {
      gray: {
        "900": "#FFF",
      },
    },
    global: {
      body: {
        bg: "gray.900",
        color: "gray.50",
      },
    },
  },
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
});
