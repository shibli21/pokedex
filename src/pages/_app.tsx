import { Box, ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";
import theme from "../theme/theme";

export const queryCache = new QueryCache();

function MyApp({ Component, pageProps, router }) {
  const MotionBox = motion.custom(Box);

  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <AnimatePresence exitBeforeEnter>
        <ChakraProvider theme={theme}>
          <MotionBox
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            key={router.pathname}
          >
            <ReactQueryDevtools />
            <Component {...pageProps} />
          </MotionBox>
        </ChakraProvider>
      </AnimatePresence>
    </ReactQueryCacheProvider>
  );
}

export default MyApp;
