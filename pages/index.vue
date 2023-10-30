<template>
    <!-- header section -->
    <header class="sticky top-0 z-40 bg-white pt-8 pb-14">
        <div class="container mx-auto">
            <div class="flex items-center justify-between">
                <SiteLogo/>
                <Paginatior :page="currentPage()" :totalPages="totalPages()" @onchange="goToPage" />
            </div>
        </div>
    </header>

    <!-- search section -->
    <section class="container mx-auto">   
        <!-- search input -->
        <div class="fixed container -mt-[28px] z-40 rounded-full bg-white shadow-search px-8 py-3">
            <div class="flex justify-between items-center">
                <input v-model.trim="search" type="text" placeholder="Search a character" 
                    class="grow text-2xl font-bold font-serif text-primary-400 focus:outline-none"
                    autocomplete="off" autocorrect="off" autocapitalize="off" 
                    @focus="searchInputFocused = true"
                    @blur="searchInputFocused = false" />
            </div>
        </div>
    </section>

    <!-- result section -->
    <main class="mt-16 mb-10">
        <div class="container mx-auto" >
            <div class="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <CharacterCard v-if="data && data.results" v-for="character in data.results" :character="character" :key="character.id"/>
            </div>
            <div v-if="!data" class="text-center mt-8">
                <p class="text-2xl font-serif text-primary-700"><span class="font-bold">We have no results</span> with the given search criteria</p>
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

const search = ref('');
const searchInputFocused = ref(false);
watch(search, () => {
    if (characterFilter.value.name != search.value) {
        characterFilter.value.name = search.value;
    }
});

</script>