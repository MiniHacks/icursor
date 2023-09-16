import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
  initialColorMode: "light",
  fonts: {
    heading: `'Plus Jakarta Sans', sans-serif`,
    regular: `'Inter', sans-serif`,
  },
  fontSizes: {
    heading: "64px",
    regular: "28px"
  },
  colors: {
    background: "#0C0C0D",
    button: "#FF7847",
    text: "rgba(255, 255, 255, 0.60)",
    orange: "#FF7847",
  }
});
