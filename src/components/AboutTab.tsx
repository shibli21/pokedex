import { Box, Grid, ListItem, OrderedList, Text } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import numeral from "numeral";
import React from "react";
import { queryCache, useQuery } from "react-query";
import { fetchSinglePokemonType } from "../pages/api/apiCalls";
import { PokemonSpecies, PokemonType, SinglePokemon } from "../types/global";
import { getIdFromUrl } from "../utils/getIdFromUrl";
import PokemonTypeBadge from "./PokemonTypeBadge";
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

  const { isLoading, data: pokemonType } = useQuery<PokemonType>(
    ["pokemonType", getIdFromUrl(data.types[0].type.url)],
    fetchSinglePokemonType,
    {
      refetchOnWindowFocus: false,
    }
  );

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
        <SecondaryText>
          {numeral(data.height * 0.1).format("0.0[0]")}m (
          {numeral(data.height * 0.328084).format("0.0[0]")}
          ft)
        </SecondaryText>
        <BoldText>Weight</BoldText>
        <SecondaryText>
          {numeral(data.weight * 0.1).format("0.0[00]")}kg
        </SecondaryText>
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
        <BoldText>Weakness</BoldText>
        <Box>
          {!isLoading &&
            pokemonType.damage_relations.double_damage_from.map((d) => (
              <PokemonTypeBadge noName type={d.name} />
            ))}
        </Box>
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
