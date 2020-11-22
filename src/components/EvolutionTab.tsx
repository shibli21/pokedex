import { Box, Flex } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import { CgArrowLongRight } from "react-icons/cg";
import { queryCache, useQuery } from "react-query";
import { fetchPokemonEvolutionChain } from "../pages/api/apiCalls";
import { BaseImageUrl } from "../pages/api/axios";
import { EvolutionChain, SinglePokemon } from "../types/global";
import { getIdFromUrl } from "../utils/getIdFromUrl";

interface Props {
  id: string;
}

const EvolutionTab = ({ id }: Props) => {
  const router = useRouter();
  const SpData = queryCache.getQueryData<SinglePokemon>([
    "pokemon",
    router.query.id,
  ]);

  const { isLoading, data } = useQuery<EvolutionChain>(
    ["evolutionChain", id],
    fetchPokemonEvolutionChain
  );

  if (isLoading) {
    return <h1>Loading</h1>;
  }
  const color = `${SpData.types[0].type.name}.medium`;

  return (
    <Box>
      {data.chain.evolves_to.map((b) => (
        <Fragment>
          <Flex
            p={4}
            align="center"
            justify="space-around"
            border="1px solid"
            borderColor={color}
            mb={4}
          >
            <Box cursor="pointer">
              <Link href={`/pokemon/${getIdFromUrl(data.chain.species.url)}`}>
                <Image
                  width="150px"
                  height="150px"
                  src={`${BaseImageUrl}/${getIdFromUrl(
                    data.chain.species.url
                  )}.png`}
                />
              </Link>
            </Box>
            <Box p={1} color={color}>
              <CgArrowLongRight size="30px" />
            </Box>
            <Box cursor="pointer">
              <Link href={`/pokemon/${getIdFromUrl(b.species.url)}`}>
                <Image
                  width="150px"
                  height="150px"
                  src={`${BaseImageUrl}/${getIdFromUrl(b.species.url)}.png`}
                />
              </Link>
            </Box>
            {b.evolves_to.length >= 1 && (
              <Box p={1} color={color}>
                <CgArrowLongRight size="30px" />
              </Box>
            )}
            {b.evolves_to.length >= 1 && (
              <Box cursor="pointer">
                {b.evolves_to.map((c) => (
                  <Link href={`/pokemon/${getIdFromUrl(c.species.url)}`}>
                    <Image
                      width="150px"
                      height="150px"
                      src={`${BaseImageUrl}/${getIdFromUrl(c.species.url)}.png`}
                    />
                  </Link>
                ))}
              </Box>
            )}
          </Flex>
        </Fragment>
      ))}
    </Box>
  );
};

export default EvolutionTab;
