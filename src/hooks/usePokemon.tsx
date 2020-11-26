import { useQuery } from "react-query";
import { fetchSinglePokemon } from "../api/apiCalls";
import { SinglePokemon } from "../types/global";

export default function usePokemon(pokemonId) {
  return useQuery<SinglePokemon, Error>(
    ["pokemon", pokemonId],
    fetchSinglePokemon,
    {
      staleTime: 2000,
    }
  );
}
