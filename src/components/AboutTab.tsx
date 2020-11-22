import { Box, Grid, ListItem, OrderedList, Text } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import React from "react";
import { queryCache } from "react-query";
import { PokemonSpecies, SinglePokemon } from "../types/global";
import BoldText from "./TextStyle/BoldText";
import SecondaryText from "./TextStyle/SecondaryText";
import TitleText from "./TextStyle/TitleText";

interface Props {}

const AboutTab = (props: Props) => {
  const router = useRouter();
  const data = queryCache.getQueryData<SinglePokemon>([
    "pokemon",
    router.query.id,
  ]);

  const pokeSpecies = queryCache.getQueryData<PokemonSpecies>([
    "pokemonSpecies",
    router.query.id,
  ]);

  const color = `${data.types[0].type.name}.medium`;

  return (
    <>
      <Text textTransform="capitalize" fontSize={["md", "md", "lg"]} mb={4}>
        {pokeSpecies.flavor_text_entries
          .filter((b) => b.language.name === `en`)
          .slice(1, 4)
          .map((d) => (
            <Box>{d.flavor_text.replace("\f", " ")}</Box>
          ))}
      </Text>
      <TitleText color={color}>Pokédex Data</TitleText>
      <Grid gridTemplateColumns="1fr 1fr">
        <BoldText>Species</BoldText>
        <SecondaryText>
          {pokeSpecies.genera.length > 0
            ? pokeSpecies.genera.filter((g) => g.language.name === `en`)[0]
                .genus
            : "----"}
        </SecondaryText>
        <BoldText>Height</BoldText>
        <SecondaryText>{data.height}</SecondaryText>
        <BoldText>Weight</BoldText>
        <SecondaryText>{data.weight}</SecondaryText>
        <BoldText>Abilities</BoldText>
        {data.abilities.length > 0 ? (
          <OrderedList>
            (
            {data.abilities.map((ab) => (
              <SecondaryText key={ab.ability.name}>
                <ListItem>{ab.ability.name}</ListItem>
              </SecondaryText>
            ))}
            )
          </OrderedList>
        ) : (
          <SecondaryText>----</SecondaryText>
        )}
      </Grid>
      <TitleText color={color}>Training</TitleText>
      <Grid gridTemplateColumns="1fr 1fr">
        <BoldText>Catch Rate</BoldText>
        <SecondaryText>{pokeSpecies.capture_rate}</SecondaryText>
        <BoldText>Base Friendship</BoldText>
        <SecondaryText>{pokeSpecies.base_happiness}</SecondaryText>
        <BoldText>Base Exp</BoldText>
        <SecondaryText>{data.base_experience}</SecondaryText>
        <BoldText>Growth Rate</BoldText>
        <SecondaryText>
          {pokeSpecies.growth_rate?.name
            ? pokeSpecies.growth_rate.name
            : "----"}
        </SecondaryText>
      </Grid>
    </>
  );
};

export default AboutTab;
