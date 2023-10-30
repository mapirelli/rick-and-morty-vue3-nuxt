<template>
    <!-- header section -->
    <header class="sticky top-0 z-40 bg-white py-8">
        <div class="container mx-auto">
            <div class="flex items-center justify-between">
                <SiteLogo/>
                <Paginatior :page="currentPage()" :totalPages="totalPages()" @onchange="goToPage" />
            </div>
        </div>
    </header>
    <!-- result section -->
    <main class="my-6">
        <div class="container mx-auto" >
            <div class="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <CharacterCard v-if="data && data.results" v-for="character in data.results" :character="character" :key="character.id"/>
            </div>
            <div v-if="!data" class="text-center mt-8">
                <p class="text-gray-700">No results found with the search criteria</p>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { type Info, type Character, type CharacterFilter } from '~/types/interfaces';

const characterFilter = ref<CharacterFilter>({page: 1});
const data = await useCharacter<Info<Character>>(characterFilter.value);

const currentPage = (): number => {
    if (characterFilter.value.page)
        return characterFilter.value.page;
    return 1;
};
const totalPages = (): number => {
    if (data && data.value && data.value.info)
        return data.value.info.pages;
    return 1;
}
const goToPage = (page: number): void => {
    characterFilter.value.page = page;
}

</script>