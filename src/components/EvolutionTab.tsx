import { Box, Flex } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import { CgArrowLongRight } from "react-icons/cg";
import usePokemonEvolutionChain from "../hooks/useEvolutionChain";
import usePokemon from "../hooks/usePokemon";
import { BaseImageUrl } from "../pages/api/axios";
import { getIdFromUrl } from "../utils/getIdFromUrl";

interface Props {
  id: string;
}

const EvolutionTab = ({ id }: Props) => {
  const router = useRouter();

  const pokemon = usePokemon(router.query.id);

  const evolutionChain = usePokemonEvolutionChain(id);

  if (evolutionChain.isLoading || pokemon.isLoading) {
    return <h1>Loading</h1>;
  }

  const color = `${pokemon.data.types[0].type.name}.medium`;

  return (
    <Box>
      {evolutionChain.data.chain.evolves_to.map((b) => (
        <Fragment key={b.species.name}>
          <Flex
            p={4}
            align="center"
            justify="space-around"
            border="1px solid"
            borderColor={color}
            mb={4}
          >
            <Box cursor="pointer">
              <Link
                href={`/pokemon/${getIdFromUrl(
                  evolutionChain.data.chain.species.url
                )}`}
              >
                <Box>
                  <Image
                    width="150px"
                    height="150px"
                    src={`${BaseImageUrl}/${getIdFromUrl(
                      evolutionChain.data.chain.species.url
                    )}.png`}
                  />
                </Box>
              </Link>
            </Box>
            <Box p={1} color={color}>
              <CgArrowLongRight size="30px" />
            </Box>
            <Box cursor="pointer">
              <Link href={`/pokemon/${getIdFromUrl(b.species.url)}`}>
                <Box>
                  <Image
                    width="150px"
                    height="150px"
                    src={`${BaseImageUrl}/${getIdFromUrl(b.species.url)}.png`}
                  />
                </Box>
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
                  <Link
                    key={c.species.name}
                    href={`/pokemon/${getIdFromUrl(c.species.url)}`}
                  >
                    <Box>
                      <Image
                        key={c.species.name}
                        width="150px"
                        height="150px"
                        src={`${BaseImageUrl}/${getIdFromUrl(
                          c.species.url
                        )}.png`}
                      />
                    </Box>
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
