import { useQuery } from "react-query";
import { fetchPokemonEvolutionChain } from "../api/apiCalls";
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
