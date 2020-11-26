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
import { fetchSinglePokemon } from "../api/apiCalls";
import { PokemonResult, SinglePokemon } from "../types/global";
import PokemonTypeBadge from "./PokemonTypeBadge";
import { BaseImageUrl } from "../api/axios";
import numeral from "numeral";
interface PokemonCard {
  data: PokemonResult;
}

const PokemonCard = ({ data }: PokemonCard) => {
  const pokemonId = Number(data.url.split("/").slice(-2)[0]);

  const { isLoading, data: PokeData } = useQuery<SinglePokemon>(
    ["pokemon", pokemonId],
    fetchSinglePokemon
  );

  const url = `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.08' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`;

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
        bg={`${PokeData?.types[0].type.name}.light`}
        backgroundImage={url}
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
              #{numeral(pokemonId).format("000")}
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
