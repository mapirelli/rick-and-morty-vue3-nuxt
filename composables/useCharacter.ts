
import { type CharacterFilter, type Info, type Character } from '~/types/interfaces';

export default async (characterFilter: CharacterFilter) => {

  const url = 'https://rickandmortyapi.com/api/character';

  const { data, pending, error } = await useFetch<Info<Character[]>>(url, {
    params: characterFilter,
    watch: [characterFilter]
  });

  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: `Could not fetch data from ${url}`,
    });
  }
 
  return { data, pending };
}