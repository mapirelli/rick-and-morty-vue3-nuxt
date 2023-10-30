import { type Endpoints } from '~/types/interfaces';

export default async <Endpoints>() => {

  const url = "https://rickandmortyapi.com/api";

  const { data , error } = await useFetch<Endpoints>(url);

  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: `Could not fetch data from ${url}`,
    });
  }
  
  return data;
}