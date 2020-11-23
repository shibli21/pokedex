import { Grid, Text } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import React, { Fragment } from "react";
import usePokemon from "../hooks/usePokemon";
import PokeballLoader from "./PokeballLoader";
import ProgressBar from "./ProgressBar";
import BoldText from "./TextStyle/BoldText";
import TitleText from "./TextStyle/TitleText";

interface Props {}

const StatsTab = (props: Props) => {
  const router = useRouter();
  const pokemon = usePokemon(router.query.id);

  if (pokemon.isLoading) {
    return <PokeballLoader />;
  }

  const color = `${pokemon.data.types[0].type.name}.medium`;

  return (
    <>
      <TitleText color={color}>Base Stats</TitleText>
      <Grid
        alignItems="center"
        gridTemplateColumns="3fr 1fr 2fr  1fr 1fr"
        columnGap="15px"
      >
        {pokemon.data.stats.map((stat) => (
          <Fragment key={stat.stat.name}>
            <BoldText>{stat.stat.name}</BoldText>
            <Text color="gray.500">{stat.base_stat}</Text>
            <ProgressBar bg={color} value={stat.base_stat} max={300} />
            <Text color="gray.500" justifySelf="flex-end">
              {stat.base_stat}
            </Text>
            <Text color="gray.500" justifySelf="flex-end">
              {stat.base_stat}
            </Text>
          </Fragment>
        ))}
      </Grid>
    </>
  );
};

export default StatsTab;
