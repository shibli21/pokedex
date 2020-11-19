import { HTTP_METHODS } from "../../types/global";
import { createApiRequest } from "./axios";

export const fetchSinglePokemon = async (key, id: any) => {
  return createApiRequest(`/pokemon/${id}`, HTTP_METHODS.GET, {});
};

export const fetchSinglePokemonSpecies = async (key, id: any) => {
  return createApiRequest(`/pokemon-species/${id}`, HTTP_METHODS.GET, {});
};

export const fetchPokemon = async () => {
  return createApiRequest(`/pokemon?limit=50`, HTTP_METHODS.GET, {});
};
