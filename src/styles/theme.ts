import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    brand: "#1E1F24",
    whiteBrand: "#fff",
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  styles: {
    global: {
      "::-webkit-scrollbar": {
        width: "4px",
        height: "4px",
        background: "brand",
      },
      "::-webkit-scrollbar-track": {
        background: "whiteBrand",
        width: "1rem",
      },
      "::-webkit-scrollbar-thumb": {
        width: "5px",
        background: "brand",
        borderRadius: "0.5rem",
      },
    },
  },
});
