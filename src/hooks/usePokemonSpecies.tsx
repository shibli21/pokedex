import { useQuery } from "react-query";
import { fetchSinglePokemonSpecies } from "../api/apiCalls";
import { PokemonSpecies } from "../types/global";

export default function usePokemonSpecies(pokemonId) {
  return useQuery<PokemonSpecies, Error>(
    ["pokemonSpecies", pokemonId],
    fetchSinglePokemonSpecies,
    {
      staleTime: 2000,
    }
  );
}
