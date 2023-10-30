<template>
    <SiteHeader>
        <SiteLogo />
        <Paginator :page="currentPage()" :totalPages="totalPages()" @onchange="goToPage" />
    </SiteHeader>
    <SearchBar>
        <SearchInput @oninput="searchByName" />
    </SearchBar>
    <ResultSection :hasData="(data && data.results) != null">
        <CharacterCard v-if="data && data.results" v-for="character in data.results" :character="character"
            :key="character.id" />
    </ResultSection>
</template>

<script setup lang="ts">
import { type Info, type Character, type CharacterFilter } from '~/types/interfaces';

const characterFilter = ref<CharacterFilter>({ page: 1 });
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

const searchByName = (name: string): void => {
    if (characterFilter.value.name != name) {
        characterFilter.value.page = 1;
        characterFilter.value.name = name;
    }
};

</script>