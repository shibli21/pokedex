import {
  Box,
  Center,
  Container,
  Flex,
  Grid,
  ListItem,
  OrderedList,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import NextImage from "next/image";
import React, { Fragment } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useQuery } from "react-query";
import { Main } from "../../components/Main";
import PokeballLoader from "../../components/PokeballLoader";
import PokemonTypeBadge from "../../components/PokemonTypeBadge";
import ProgressBar from "../../components/ProgressBar";
import BoldText from "../../components/TextStyle/BoldText";
import SecondaryText from "../../components/TextStyle/SecondaryText";
import TitleText from "../../components/TextStyle/TitleText";
import { PokemonSpecies, SinglePokemon } from "../../types/global";
import { fetchSinglePokemon, fetchSinglePokemonSpecies } from "../api/apiCalls";
import { BaseImageUrl } from "../api/axios";

const Pokemon = () => {
  const router = useRouter();

  const { isLoading, data } = useQuery<SinglePokemon>(
    ["pokemon", router.query.id],
    fetchSinglePokemon
  );

  const { isLoading: isLoadingPokeSpecies, data: pokeSpecies } = useQuery<
    PokemonSpecies
  >(["pokemonSpecies", router.query.id], fetchSinglePokemonSpecies);

  if (isLoading || isLoadingPokeSpecies) {
    return <PokeballLoader />;
  }

  return (
    <Container maxW="xl">
      <Main>
        <Box as={FaArrowLeft} cursor="pointer" onClick={() => history.back()} />
        <Grid
          gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]}
          gap={["10px", "10px", "40px"]}
          boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
        >
          <Grid
            gridTemplateColumns={["1fr 1fr", "1fr 1fr", "1fr "]}
            gridTemplateRows="repeat(auto-fill, minmax(150px, 1fr))"
            bg={`${data.types[0].type.name}.light`}
            p={["20px", "30px", "30px"]}
            h={["auto", "auto", "80vh"]}
          >
            <Box>
              <Text fontWeight="semibold" fontSize="xl" color="gray.700">
                #00{router.query.id}
              </Text>
              <Text
                textTransform="capitalize"
                fontWeight="bold"
                color="white"
                letterSpacing={1.3}
                fontSize={["2xl", "3xl", "3xl", "3xl"]}
              >
                {data.name}
              </Text>
              <Flex>
                {data.types.map((type) => (
                  <Fragment key={type.type.name}>
                    <PokemonTypeBadge type={type.type.name} />
                  </Fragment>
                ))}
              </Flex>
            </Box>
            <Box>
              <Center>
                <NextImage
                  height="350px"
                  width="350px"
                  src={`${BaseImageUrl}/${router.query.id}.png`}
                />
              </Center>
            </Box>
          </Grid>
          <Box fontSize="xl" p={["0px", "0px", "30px"]}>
            <Tabs variant="soft">
              <TabList
                color="gray.400"
                justifyContent="space-between"
                px={5}
                // mb={2}
              >
                <Tab _selected={{ color: "gray.900" }}> About</Tab>
                <Tab _selected={{ color: "gray.900" }}>Stats</Tab>
                <Tab _selected={{ color: "gray.900" }}>Evolution</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Text
                    textTransform="capitalize"
                    fontSize={["md", "md", "lg"]}
                    mb={4}
                  >
                    {pokeSpecies.flavor_text_entries[0].flavor_text.replace(
                      "\f",
                      " "
                    )}
                  </Text>
                  <TitleText color={`${data.types[0].type.name}.medium`}>
                    Pokedex Data
                  </TitleText>
                  <Grid gridTemplateColumns="1fr 1fr">
                    <BoldText>Species</BoldText>
                    <SecondaryText>{pokeSpecies.genera[7].genus}</SecondaryText>
                    <BoldText>Height</BoldText>
                    <SecondaryText>{data.height}</SecondaryText>
                    <BoldText>Weight</BoldText>
                    <SecondaryText>{data.weight}</SecondaryText>
                    <BoldText>Abilities</BoldText>
                    <OrderedList>
                      {data.abilities.map((ab) => (
                        <SecondaryText key={ab.ability.name}>
                          <ListItem>{ab.ability.name}</ListItem>
                        </SecondaryText>
                      ))}
                    </OrderedList>
                  </Grid>
                  <TitleText color={`${data.types[0].type.name}.medium`}>
                    Training
                  </TitleText>
                  <Grid gridTemplateColumns="1fr 1fr">
                    <BoldText>Catch Rate</BoldText>
                    <SecondaryText>{pokeSpecies.capture_rate}</SecondaryText>
                    <BoldText>Base Friendship</BoldText>
                    <SecondaryText>{pokeSpecies.base_happiness}</SecondaryText>
                    <BoldText>Base Exp</BoldText>
                    <SecondaryText>{data.base_experience}</SecondaryText>
                    <BoldText>Growth Rate</BoldText>
                    <SecondaryText>
                      {pokeSpecies.growth_rate.name}
                    </SecondaryText>
                  </Grid>
                </TabPanel>
                <TabPanel>
                  <TitleText color={`${data.types[0].type.name}.medium`}>
                    Base Stats
                  </TitleText>
                  <Grid
                    alignItems="center"
                    gridTemplateColumns="3fr 1fr 2fr  1fr 1fr"
                    columnGap="15px"
                  >
                    {data.stats.map((stat) => (
                      <Fragment key={stat.stat.name}>
                        <BoldText>{stat.stat.name}</BoldText>
                        <Text color="gray.500">{stat.base_stat}</Text>
                        <ProgressBar
                          bg={`${data.types[0].type.name}.medium`}
                          value={stat.base_stat}
                          max={300}
                        />
                        <Text color="gray.500" justifySelf="flex-end">
                          {stat.base_stat}
                        </Text>
                        <Text color="gray.500" justifySelf="flex-end">
                          {stat.base_stat}
                        </Text>
                      </Fragment>
                    ))}
                  </Grid>
                </TabPanel>
                <TabPanel>
                  <p>three!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Grid>
      </Main>
    </Container>
  );
};

export default Pokemon;
