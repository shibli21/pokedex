import {
  Center,
  Container,
  Heading,
  SimpleGrid,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";
import { useQuery } from "react-query";
import { Main } from "../components/Main";
import PokeballLoader from "../components/PokeballLoader";
import PokemonCard from "../components/PokemonCard";
import { Pokemon } from "../types/global";
import { fetchPokemon } from "./api/apiCalls";

export default function Home() {
  const { isLoading, error, data, isError } = useQuery<Pokemon>(
    "pokemons",
    fetchPokemon
  );

  if (isLoading) return <PokeballLoader />;

  if (isError) {
    return <span>Error: {error}</span>;
  }

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
          {data.results.map((pokemon, i) => (
            <PokemonCard data={pokemon} />
          ))}
        </SimpleGrid>
      </Main>
    </Container>
  );
}
