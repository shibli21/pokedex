import { Box, Container, Heading, Wrap, WrapItem } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { Main } from "../components/Main";
import PokemonCard from "../components/PokemonCard";
import { Pokemon } from "../types/global";

const fetchPokemon = async () => {
  const { data } = await axios.get<Pokemon>(
    "https://pokeapi.co/api/v2/pokemon?limit=50"
  );
  return data;
};

export default function Home() {
  const { isLoading, error, data, isError } = useQuery(
    "pokemons",
    fetchPokemon
  );
  console.log("Home -> data", data);

  if (isLoading) return <Box>Loading</Box>;

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
