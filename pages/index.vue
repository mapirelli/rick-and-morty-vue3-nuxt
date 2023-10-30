<template>
    <SiteHeader>
        <SiteLogo />
        <Paginator :page="currentPage()" :totalPages="totalPages()" @onchange="goToPage" />
    </SiteHeader>
    <SearchBar>
        <SearchInput @oninput="searchByName" />

        <button id="toggleFiltersButton" class="rounded flex p-2 items-center font-sans font-bold text-md uppercase 
                text-primary-700 hover:text-primary-500 focus:outline-none focus:ring"
            @click="filtersMenuVisible = !filtersMenuVisible">
            Filters
            <IconFilter class="w-5 h-4 text-primary-400" v-if="!filtersMenuVisible" />
            <IconXMark class="w-5 h-5 text-primary-400 stroke-2" v-if="filtersMenuVisible" />
        </button>

    </SearchBar>
    <ResultSection :hasData="weGotData()">
        <CharacterCard v-if="weGotData()" v-for="character in data.results" :character="character" />
    </ResultSection>
</template>

<script setup lang="ts">
import { type Info, type Character, type CharacterFilter } from '~/types/interfaces';

const characterFilter = ref<CharacterFilter>({ page: 1 });
const data = await useCharacter<Info<Character>>(characterFilter.value);

const weGotData = (): boolean => {
    if (!data.value)
        return false;
    if (!data.value.results)
        return false;
    return true;
}

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

const searchByName = (name: string): void => {
    if (characterFilter.value.name != name) {
        characterFilter.value.page = 1;
        characterFilter.value.name = name;
    }
};

const filtersMenuVisible = ref(false);

</script>