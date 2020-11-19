import { ChakraProvider } from "@chakra-ui/react";
import { ReactQueryDevtools } from "react-query-devtools";
import theme from "../theme/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <ReactQueryDevtools />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
