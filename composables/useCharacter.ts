
import { type CharacterFilter, type Info, type Character } from '~/types/interfaces';

export default async (characterFilter: CharacterFilter, infiniteScroll: boolean) => {

  const url = 'https://rickandmortyapi.com/api/character';

  const { data, pending, error } = await useFetch<Info<Character[]>>(url, {
    params: characterFilter,
    watch: [characterFilter],
    transform: (newData) => {
      if (infiniteScroll && characterFilter.page)  {
        if (characterFilter.page > 1) {
          const currResults = data.value ? data.value.results : null;
          if (currResults && newData.results) {
            newData.results.forEach((character) => {
              currResults.push(character);
            });
            newData.results = currResults;
          }
        }
      }
      return newData;
    }
  });

  return { data, pending, error };
}