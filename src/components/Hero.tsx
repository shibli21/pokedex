import { Flex, Text } from "@chakra-ui/react";
import React from "react";

interface Props {}

const Hero = (props: Props) => {
  return (
    <Flex justify="center" align="center" h="20vh">
      <Text fontFamily="pokemon" fontSize="7xl" color="gray.700">
        Pokédex
      </Text>
    </Flex>
  );
};

export default Hero;
