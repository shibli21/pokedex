import {
  Badge,
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Progress,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/dist/client/router";
import React from "react";
import { useQuery } from "react-query";
import { Main } from "../../components/Main";
import { SinglePokemon } from "../../types/global";

interface Props {}

const fetchSinglePokemon = async (key, id: any) => {
  const { data } = await axios.get<SinglePokemon>(
    `https://pokeapi.co/api/v2/pokemon/${id}`
  );
  return data;
};

const Pokemon = (props: Props) => {
  const router = useRouter();
  const { isLoading, error, data, isError } = useQuery(
    ["pokemon", router.query.id],
    fetchSinglePokemon
  );

  if (isLoading) return <Box>Loading</Box>;

  if (isError) {
    return <span>Error: {error}</span>;
  }

  return (
    <Container maxW="xl">
      <Main>
        <Grid
          gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]}
          bg="cyan.200"
          p="30px"
          gap="40px"
        >
          <Box>
            <Image
              borderRadius="md"
              src={`https://pokeres.bastionbot.org/images/pokemon/${router.query.id}.png`}
            />
          </Box>
          <Box>
            <Heading>{data.name}</Heading>
            <Heading>{data.height}</Heading>
            <Heading>{data.order}</Heading>
            <HStack>
              {data.types.map((type) => (
                <>
                  <Badge fontSize="1.2em">{type.type.name}</Badge>
                </>
              ))}
            </HStack>

            {data.stats.map((stat) => (
              <>
                <Text>{stat.stat.name}</Text>
                <Progress value={stat.base_stat} />
              </>
            ))}
          </Box>
        </Grid>
      </Main>
    </Container>
  );
};

export default Pokemon;
