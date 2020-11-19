import { Box, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

interface Props {}

const PokeballLoader = (props: Props) => {
  const MotionBox = motion.custom(Box);

  const bounceTransition = {
    y: {
      duration: 0.7,
      yoyo: Infinity,
      ease: "easeOut",
    },
    rotate: {
      duration: 2,
      yoyo: Infinity,
      ease: "easeOut",
    },
  };

  return (
    <MotionBox
      overflow="hidden"
      h="100vh"
      w="100vw"
      transition={{
        ease: "easeInOut",
        duration: 1,
      }}
    >
      <MotionBox
        transition={bounceTransition}
        animate={{
          y: ["100%", "-100%"],
          rotate: ["360deg", "-360deg"],
        }}
        mt="45vh"
        mx="auto"
        width="80px"
        height="80px"
        bg="white"
        borderRadius="50%"
        pos="relative"
        _after={{
          content: `""`,
          position: "absolute",
          width: "80px",
          borderRadius: "50%",
          height: "30px",
          borderBottom: "4px solid black",
          top: "43%",
          transform: "translateY(-50%)",
        }}
        _before={{
          content: `""`,
          position: "absolute",
          width: "23px",
          borderRadius: "50%",
          height: "23px",
          backgroundColor: "black",
          top: "58%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        border="1px solid black"
        overflow="hidden"
      >
        <Box
          pos="absolute"
          bg="white"
          h="10px"
          w="10px"
          top="58%"
          left="50%"
          transform="translate(-50%, -50%)"
          borderRadius="50%"
          zIndex="100"
        />

        <Box
          bg="red.500"
          h="45px"
          w="80px"
          borderRadius="1% 100% 70% 70% / 39% 0% 30% 30%"
        ></Box>
        <Box bg="#ffffff" h="43px" w="80px"></Box>
      </MotionBox>
    </MotionBox>
  );
};

export default PokeballLoader;
