import { ColorModeScript } from "@chakra-ui/react";
import { Head, Html, Main, NextScript } from "next/document";
import theme from "../theme";

export default function Document(): JSX.Element {
  return (
    <Html lang={"en"}>
      <Head />
      <body style={{ scrollBehavior: "smooth", backgroundColor: "#0C0C0D" }}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
