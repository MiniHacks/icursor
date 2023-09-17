import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
  initialColorMode: "dark",
  fonts: {
    heading: `'Plus Jakarta Sans', sans-serif`,
    regular: `'Inter', sans-serif`,
  },
  fontSizes: {
    heading: "64px",
    regular: "20px"
  },
  colors: {
    background: "#0C0C0D",
    backgroundLighter: "#262628",
    button: "#FF7847",
    text: "rgba(255, 255, 255, 0.60)",
    orange: "#FF7847",
  }
});
