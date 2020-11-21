import { Box, Flex } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import React, { Fragment } from "react";
import { CgArrowLongRight } from "react-icons/cg";
import { queryCache, useQuery } from "react-query";
import { fetchPokemonEvolutionChain } from "../pages/api/apiCalls";
import { BaseImageUrl } from "../pages/api/axios";
import { EvolutionChain, SinglePokemon } from "../types/global";

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

  return (
    <Box>
      {data.chain.evolves_to.map((b) => (
        <Fragment>
          <Flex
            p={4}
            align="center"
            justify="space-around"
            border="1px solid"
            borderColor={`${SpData.types[0].type.name}.medium`}
            mb={4}
          >
            <Box>
              <Image
                width="150px"
                height="150px"
                src={`${BaseImageUrl}/${
                  data.chain.species.url.split("/").slice(-2)[0]
                }.png`}
              />
            </Box>
            <Box p={1} color={`${SpData.types[0].type.name}.medium`}>
              <CgArrowLongRight size="30px" />
            </Box>
            <Box>
              <Image
                width="150px"
                height="150px"
                src={`${BaseImageUrl}/${
                  b.species.url.split("/").slice(-2)[0]
                }.png`}
              />
            </Box>
            {b.evolves_to.length >= 1 && (
              <Box p={1} color={`${SpData.types[0].type.name}.medium`}>
                <CgArrowLongRight size="30px" />
              </Box>
            )}
            {b.evolves_to.length >= 1 && (
              <Box>
                {b.evolves_to.map((c) => (
                  <Image
                    width="150px"
                    height="150px"
                    src={`${BaseImageUrl}/${
                      c.species.url.split("/").slice(-2)[0]
                    }.png`}
                  />
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
