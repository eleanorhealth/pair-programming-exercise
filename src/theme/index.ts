import { extendTheme } from "@chakra-ui/react";

const THEME = extendTheme({
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
  styles: {
    global: {
      "html, body": {
        backgroundColor: "#f9fafb",
      },
      a: {
        color: "#1950CC",
      },
    },
  },
});

export default THEME;
