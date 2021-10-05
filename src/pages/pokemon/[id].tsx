import {
  Box,
  Center,
  Container,
  Flex,
  Grid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  HStack,
} from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import NextImage from "next/image";
import numeral from "numeral";
import React, { Fragment } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { BaseImageUrl } from "../../api/axios";
import AboutTab from "../../components/AboutTab";
import EvolutionTab from "../../components/EvolutionTab";
import { Main } from "../../components/Main";
import PokeballLoader from "../../components/PokeballLoader";
import PokemonTypeBadge from "../../components/PokemonTypeBadge";
import StatsTab from "../../components/StatsTab";
import usePokemon from "../../hooks/usePokemon";
import usePokemonSpecies from "../../hooks/usePokemonSpecies";
import { getIdFromUrl } from "../../utils/getIdFromUrl";

const Pokemon = () => {
  const router = useRouter();

  const pokemon = usePokemon(router.query.id);
  const pokemonSpecies = usePokemonSpecies(router.query.id);

  if (pokemon.isLoading || pokemonSpecies.isLoading) {
    return <PokeballLoader />;
  }

  if (pokemon.error || pokemonSpecies.error) {
    return <Box>{pokemon.error.message || pokemonSpecies.error.message}</Box>;
  }

  const bg = `${pokemon.data.types[0]?.type?.name}.light` || "red.500";

  const url = `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.08' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`;

  return (
    <>
      <Head>
        <title>Pokédex | {pokemon.data.name}</title>
      </Head>
      <Container maxW="5xl">
        <Main>
          <Box>
            <HStack _hover={{ color: bg }} onClick={() => history.back()} cursor="pointer" display="inline-flex">
              <Box as={FaArrowLeft} />
              <Text>back</Text>
            </HStack>
          </Box>
          <Grid
            gridTemplateColumns={["1fr", "1fr", "1fr "]}
            gap={["10px", "10px", "40px"]}
            boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
          >
            <Grid
              gridTemplateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr"]}
              gridTemplateRows="repeat(auto-fill, minmax(150px, 1fr))"
              bg={bg}
              backgroundImage={url}
              p={["20px", "30px", "30px"]}
              // h={["auto", "auto", "80vh"]}
            >
              <Box>
                <Text fontWeight="semibold" fontSize="xl" color="gray.700">
                  #{numeral(router.query.id).format("000")}
                </Text>
                <Text
                  textTransform="capitalize"
                  fontWeight="bold"
                  color="white"
                  letterSpacing={1.3}
                  fontSize={["2xl", "3xl", "3xl", "3xl"]}
                >
                  {pokemon.data.name}
                </Text>
                <Flex>
                  {pokemon.data.types.length > 0 &&
                    pokemon.data.types.map((type) => (
                      <Fragment key={type.type.name}>
                        <PokemonTypeBadge type={type.type.name} />
                      </Fragment>
                    ))}
                </Flex>
              </Box>
              <Box>
                <Center>
                  <NextImage height="350px" width="350px" src={`${BaseImageUrl}/${router.query.id}.png`} />
                </Center>
              </Box>
            </Grid>
            <Box fontSize="xl" p={["0px", "0px", "30px"]}>
              <Tabs variant="soft">
                <TabList color="gray.400" justifyContent="space-between" px={5}>
                  <Tab _selected={{ color: "gray.900" }}> About</Tab>
                  <Tab _selected={{ color: "gray.900" }}>Stats</Tab>
                  <Tab _selected={{ color: "gray.900" }}>Evolution</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <AboutTab />
                  </TabPanel>
                  <TabPanel>
                    <StatsTab />
                  </TabPanel>
                  <TabPanel>
                    {pokemonSpecies.data.evolution_chain && (
                      <EvolutionTab id={getIdFromUrl(pokemonSpecies.data.evolution_chain.url)} />
                    )}
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
          </Grid>
        </Main>
      </Container>
    </>
  );
};

export default Pokemon;
