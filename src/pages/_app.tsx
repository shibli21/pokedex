import { Box, ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { ReactQueryDevtools } from "react-query-devtools";
import theme from "../theme/theme";

function MyApp({ Component, pageProps, router }) {
  const MotionBox = motion.custom(Box);

  return (
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
  );
}

export default MyApp;
