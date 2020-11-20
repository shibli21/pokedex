import {
  Box,
  Flex,
  Grid,
  Image,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import NextImage from "next/image";
import React, { Fragment } from "react";
import { useQuery } from "react-query";
import { fetchSinglePokemon } from "../pages/api/apiCalls";
import { PokemonResult, SinglePokemon } from "../types/global";
import PokemonTypeBadge from "./PokemonTypeBadge";
import { BaseImageUrl } from "../pages/api/axios";

interface PokemonCard {
  data: PokemonResult;
}

const PokemonCard = ({ data }: PokemonCard) => {
  const pokemonId = Number(data.url.split("/").slice(-2)[0]);

  const { isLoading, data: PokeData } = useQuery<SinglePokemon>(
    ["pokemon", pokemonId],
    fetchSinglePokemon
  );

  if (isLoading) {
    return (
      <Stack bg="white" p="5" borderRadius="15px">
        <Skeleton startColor="pink.500" endColor="orange.500" height="20px" />
        <Skeleton startColor="pink.500" endColor="orange.500" height="20px" />
        <Skeleton startColor="pink.500" endColor="orange.500" height="20px" />
        <Skeleton startColor="pink.500" endColor="orange.500" height="20px" />
        <Skeleton startColor="pink.500" endColor="orange.500" height="20px" />
      </Stack>
    );
  }

  return (
    <NextLink href={`/pokemon/${pokemonId}`} scroll={false}>
      <Box
        p="5"
        borderRadius="15px"
        bg={`${PokeData?.types[0].type.name}.light`}
        boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
        cursor="pointer"
        _hover={{
          transform: "scale(1.05)",
          transition: "all .4s  ease-out",
        }}
      >
        <Grid gridTemplateColumns="1fr 1fr">
          <Box>
            <Text fontWeight="semibold" fontSize="xl" color="gray.700">
              #00{pokemonId}
            </Text>
            <Text
              textTransform="capitalize"
              fontWeight="bold"
              fontSize={["xl", "2xl", "2xl", "3xl"]}
              color="white"
              letterSpacing={1.3}
            >
              {data.name}
            </Text>
            <Flex>
              {PokeData.types.map((type, i) => (
                <Fragment key={i}>
                  <PokemonTypeBadge type={type.type.name} />
                </Fragment>
              ))}
            </Flex>
          </Box>
          <Box mt={"-60px"}>
            <NextImage
              width="220px"
              height="220px"
              src={`${BaseImageUrl}/${pokemonId}.png`}
            />
          </Box>
        </Grid>
      </Box>
    </NextLink>
  );
};

export default PokemonCard;
