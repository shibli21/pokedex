import { useQuery } from "react-query";
import { fetchSinglePokemonType } from "../pages/api/apiCalls";
import { PokemonType } from "../types/global";

export default function usePokemonType(pokemonId) {
  return useQuery<PokemonType, Error>(
    ["pokemonType", pokemonId],
    fetchSinglePokemonType,
    {
      staleTime: 2000,
    }
  );
}
