import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { PokemonResult } from "../types/global";
import NextLink from "next/link";

interface PokemonCard {
  data: PokemonResult;
}

const PokemonCard = ({ data }: PokemonCard) => {
  const pokemonId = Number(data.url.split("/").slice(-2)[0]);

  return (
    <NextLink href={`/pokemon/${pokemonId}`}>
      <Box
        p="5"
        maxW="320px"
        borderWidth="1px"
        bg="cyan.200"
        boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
        cursor="pointer"
        _hover={{
          transform: "scale(1.05)",
          transitionDuration: ".2s",
        }}
      >
        <Image
          borderRadius="md"
          src={`https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png`}
        />
        <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
          {data.name}
        </Text>
      </Box>
    </NextLink>
  );
};

export default PokemonCard;
