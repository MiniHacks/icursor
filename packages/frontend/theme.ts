import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
  initialColorMode: "light",
  fonts: {
    heading: `'Plus Jakarta Sans', sans-serif`,
    regular: `'Inter', sans-serif`,
  },
  fontSizes: {
    heading: "80px",
    regular: "36px"
  },
  colors: {
    background: "#0C0C0D",
    button: "#FF7847",
    text: "rgba(255, 255, 255, 0.60)",
    orange: "#FF7847",
  }
});
