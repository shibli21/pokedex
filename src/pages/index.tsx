import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import Head from "next/head";
import React, { Fragment } from "react";
import { Waypoint } from "react-waypoint";
import { Main } from "../components/Main";
import PokeballLoader from "../components/PokeballLoader";
import PokemonCard from "../components/PokemonCard";
import useInfinitePokemons from "../hooks/useInfinitePokemons";

export default function Home() {
  const { data, isFetchingMore, fetchMore, isLoading } = useInfinitePokemons();

  if (isLoading) return <PokeballLoader />;

  return (
    <>
      <Head>
        <title>Pokédex</title>
      </Head>
      <Container maxW="xl">
        <Main>
          <Heading textAlign="center" mb={8}>
            Pokédex
          </Heading>
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
                {i >= data.length - 1 && (
                  <Waypoint
                    onEnter={({ previousPosition }) => {
                      if (previousPosition !== "above") {
                        fetchMore();
                      }
                    }}
                  />
                )}
              </Fragment>
            ))}
          </SimpleGrid>
          <Center>{isFetchingMore && <Spinner />}</Center>
        </Main>
      </Container>
    </>
  );
}
