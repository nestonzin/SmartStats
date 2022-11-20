import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import "src/components/Carousel/embla.css";
import { IconProvider, DEFAULT_ICON_CONFIGS } from "@icon-park/react";

function MyApp({ Component, pageProps }: AppProps) {
  const IconConfig = { ...DEFAULT_ICON_CONFIGS, prefix: "icon" };
  return (
    <ChakraProvider theme={theme}>
      <IconProvider value={IconConfig}>
        <Component {...pageProps} />
      </IconProvider>
    </ChakraProvider>
  );
}

export default MyApp;
