import { useQuery } from "react-query";
import { fetchPokemonEvolutionChain } from "../pages/api/apiCalls";
import { EvolutionChain } from "../types/global";

export default function usePokemonEvolutionChain(pokemonId) {
  return useQuery<EvolutionChain, Error>(
    ["pokemonEvolutionChain", pokemonId],
    fetchPokemonEvolutionChain,
    {
      staleTime: 2000,
    }
  );
}
