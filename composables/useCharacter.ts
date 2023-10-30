
import { type CharacterFilter, type Info } from '~/types/interfaces';

export default async <Info>(characterFilter: CharacterFilter) => {

  const url = 'https://rickandmortyapi.com/api/character';

  const { data, error } = await useFetch<Info>(url, {
    params: characterFilter,
    watch: [characterFilter]
  });

  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: `Could not fetch data from ${url}`,
    });
  }
 
  return data;
}