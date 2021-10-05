import { Flex, Text } from "@chakra-ui/react";
import React from "react";

interface Props {}

const Hero = (props: Props) => {
  return (
    <Flex justify="center" align="center" pos="sticky" bg="white" top={0} zIndex="10000">
      <Text
        pb={["4", "10"]}
        fontFamily="pokemon"
        fontSize={["6xl", "7xl"]}
        color="#F2DD4E"
        textShadow="0 1px #808d93,
                    -1px 0 #cdd2d5,
                  -1px 2px #808d93,
                  -2px 1px #cdd2d5,
                  -2px 3px #808d93,
                  -3px 2px #cdd2d5,
                  -3px 4px #808d93,
                  -4px 3px #cdd2d5,
                  -4px 5px #808d93,
                  -5px 4px #cdd2d5,
                  -5px 6px #808d93,
                  -6px 5px #cdd2d5,
                  -6px 7px #808d93,
                  -7px 6px #cdd2d5,
                  -7px 8px #808d93,
                  -8px 7px #cdd2d5"
        css={{ WebkitTextStroke: "5px #3669BA" }}
      >
        Pokédex
      </Text>
    </Flex>
  );
};

export default Hero;
