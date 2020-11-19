import { Box, Container, Heading, Wrap, WrapItem } from "@chakra-ui/react";
import axios from "axios";
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
        <Wrap spacing="30px" justify="center">
          {data.results.map((pokemon, i) => (
            <WrapItem key={i}>
              <PokemonCard data={pokemon} />
            </WrapItem>
          ))}
        </Wrap>
      </Main>
    </Container>
  );
}
