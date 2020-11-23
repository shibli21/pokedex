import { Box, Grid, ListItem, OrderedList, Text } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import numeral from "numeral";
import React from "react";
import usePokemon from "../hooks/usePokemon";
import usePokemonSpecies from "../hooks/usePokemonSpecies";
import usePokemonType from "../hooks/usePokemonTypes";
import { getIdFromUrl } from "../utils/getIdFromUrl";
import PokeballLoader from "./PokeballLoader";
import PokemonTypeBadge from "./PokemonTypeBadge";
import BoldText from "./TextStyle/BoldText";
import SecondaryText from "./TextStyle/SecondaryText";
import TitleText from "./TextStyle/TitleText";

interface Props {}

const AboutTab = (props: Props) => {
  const router = useRouter();
  const pokemon = usePokemon(router.query.id);
  const pokemonSpecies = usePokemonSpecies(router.query.id);

  if (pokemon.isLoading || pokemonSpecies.isLoading) {
    return <PokeballLoader />;
  }

  if (pokemon.error || pokemonSpecies.error) {
    return <Box>{pokemon.error.message || pokemonSpecies.error.message}</Box>;
  }

  const pokemonType = usePokemonType(
    getIdFromUrl(pokemon.data.types[0].type.url)
  );

  const color = `${pokemon.data.types[0].type.name}.medium`;

  return (
    <>
      <Box textTransform="capitalize" fontSize={["md", "md", "lg"]} mb={4}>
        {pokemonSpecies.data.flavor_text_entries
          .filter((b) => b.language.name === `en`)
          .slice(1, 4)
          .map((d, i) => (
            <Text key={i}>{d.flavor_text.replace("\f", " ")}</Text>
          ))}
      </Box>
      <TitleText color={color}>Pokédex Data</TitleText>
      <Grid gridTemplateColumns="1fr 1fr">
        <BoldText>Species</BoldText>
        <SecondaryText>
          {pokemonSpecies.data.genera.length > 0
            ? pokemonSpecies.data.genera.filter(
                (g) => g.language.name === `en`
              )[0].genus
            : "----"}
        </SecondaryText>
        <BoldText>Height</BoldText>
        <SecondaryText>
          {numeral(pokemon.data.height * 0.1).format("0.0[0]")}m (
          {numeral(pokemon.data.height * 0.328084).format("0.0[0]")}
          ft)
        </SecondaryText>
        <BoldText>Weight</BoldText>
        <SecondaryText>
          {numeral(pokemon.data.weight * 0.1).format("0.0[00]")}kg
        </SecondaryText>
        <BoldText>Abilities</BoldText>
        {pokemon.data.abilities.length > 0 ? (
          <OrderedList>
            (
            {pokemon.data.abilities.map((ab) => (
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
          {!pokemonType.isLoading &&
            pokemonType.data.damage_relations.double_damage_from.map((d) => (
              <PokemonTypeBadge key={d.name} noName type={d.name} />
            ))}
        </Box>
      </Grid>
      <TitleText color={color}>Training</TitleText>
      <Grid gridTemplateColumns="1fr 1fr">
        <BoldText>Catch Rate</BoldText>
        <SecondaryText>{pokemonSpecies.data.capture_rate}</SecondaryText>
        <BoldText>Base Friendship</BoldText>
        <SecondaryText>{pokemonSpecies.data.base_happiness}</SecondaryText>
        <BoldText>Base Exp</BoldText>
        <SecondaryText>{pokemon.data.base_experience}</SecondaryText>
        <BoldText>Growth Rate</BoldText>
        <SecondaryText>
          {pokemonSpecies.data.growth_rate?.name
            ? pokemonSpecies.data.growth_rate.name
            : "----"}
        </SecondaryText>
      </Grid>
    </>
  );
};

export default AboutTab;
