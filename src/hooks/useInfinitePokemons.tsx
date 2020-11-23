import { useInfiniteQuery } from "react-query";
import { fetchPokemon } from "../pages/api/apiCalls";
import { Pokemons } from "../types/global";

export default function useInfinitePokemons() {
  return useInfiniteQuery<Pokemons>("pokemons", fetchPokemon, {
    getFetchMore: (lastGroup) => {
      lastGroup.cursor = lastGroup.next?.split("&")[0].split("=")[1];
      return lastGroup.cursor;
    },
  });
}
