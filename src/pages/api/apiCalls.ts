import { HTTP_METHODS } from "../../types/global";
import { createApiRequest } from "./axios";

export const fetchSinglePokemon = async (key, id: any) => {
  return createApiRequest(`/pokemon/${id}`, HTTP_METHODS.GET, {});
};

export const fetchSinglePokemonSpecies = async (key, id: any) => {
  return createApiRequest(`/pokemon-species/${id}`, HTTP_METHODS.GET, {});
};

export const fetchPokemon = async (key, offset = 0) => {
  return createApiRequest(
    `/pokemon?offset=${offset}&limit=6`,
    HTTP_METHODS.GET,
    {}
  );
};

export const fetchPokemonEvolutionChain = async (key, id: any) => {
  return createApiRequest(`/evolution-chain/${id}`, HTTP_METHODS.GET, {});
};
