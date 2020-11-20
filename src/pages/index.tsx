import {
  Button,
  Center,
  Container,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import React, { Fragment } from "react";
import { useInfiniteQuery } from "react-query";
import { Main } from "../components/Main";
import PokeballLoader from "../components/PokeballLoader";
import PokemonCard from "../components/PokemonCard";
import { Pokemons } from "../types/global";
import { fetchPokemon } from "./api/apiCalls";

export default function Home() {
  const { data, isFetching, fetchMore, isLoading } = useInfiniteQuery<Pokemons>(
    "pokemons",
    fetchPokemon,
    {
      getFetchMore: (lastGroup) => {
        lastGroup.cursor = lastGroup.next?.split("&")[0].split("=")[1];
        return lastGroup.cursor;
      },
    }
  );

  if (isLoading) return <PokeballLoader />;

  return (
    <Container maxW="xl">
      <Main>
        <Heading>Pokédex</Heading>
        <SimpleGrid
          columns={[1, 1, 1, 2]}
          spacingX="40px"
          spacingY="40px"
          alignSelf="center"
        >
          {data.map((d, i) => (
            <Fragment key={i}>
              {d.results.map((pokemon, i) => (
                <Fragment key={pokemon.name}>
                  <PokemonCard data={pokemon} />
                </Fragment>
              ))}
            </Fragment>
          ))}
        </SimpleGrid>
        <Center>
          <Button
            onClick={() => fetchMore()}
            isLoading={isFetching}
            colorScheme="blue"
          >
            Fetch more pokemons
          </Button>
        </Center>
      </Main>
    </Container>
  );
}
