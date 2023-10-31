<template>
    <SiteHeader>
        <SiteLogo />
        <Paginator :page="currentPage()" :total-pages="totalPages()" @onchange="goToPage" />
        <ToggleNavigationButton />
    </SiteHeader>

    <div class="fixed z-30 w-full">
        <div class="px-4">
            <section class="container mx-auto">
                <SearchBar class="-mt-[30px]">
                    <SearchInputText @oninput="searchByName" />
                    <ToggleFiltersButton />
                </SearchBar>
            </section>
        </div>
    </div>

    <div class="fixed z-20 w-full">
        <div class="px-4">
            <section class="container mx-auto">
                
                <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1"
                    enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
                    leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">

                    <div v-if="filtersMenuVisible" class="bg-primary-300 rounded-b-3xl px-8 pt-8 pb-4">
                        <div class="flex flex-col pt-8">
                            <HeaderSubtitle>Gender</HeaderSubtitle>
                            <div class="flex flex-wrap gap-2 pt-2 pb-6">
                                <FilterButton group="Gender" name="Male" @onclick="toggleFilter" />
                                <FilterButton group="Gender" name="Female" @onclick="toggleFilter" />
                                <FilterButton group="Gender" name="Genderless" @onclick="toggleFilter" />
                                <FilterButton group="Gender" name="Unknown" @onclick="toggleFilter" />
                            </div>
                            <HeaderSubtitle>Status</HeaderSubtitle>
                            <div class="flex flex-wrap gap-2  pt-2 pb-6">
                                <FilterButton group="Status" name="Alive" @onclick="toggleFilter" />
                                <FilterButton group="Status" name="Dead" @onclick="toggleFilter" />
                                <FilterButton group="Status" name="Unknown" @onclick="toggleFilter" />
                            </div>
                            <HeaderSubtitle>Species</HeaderSubtitle>
                            <div class="flex flex-wrap gap-2  pt-2 pb-6">
                                <FilterButton group="Species" name="Human" @onclick="toggleFilter" />
                                <FilterButton group="Species" name="Alien" @onclick="toggleFilter" />
                                <FilterButton group="Species" name="Mythological Creature" @onclick="toggleFilter" />
                            </div>
                        </div>
                    </div>
                </transition>
            </section>
        </div>
    </div>

    <div class="px-4 pt-16 pb-10 bg-gradient-to-b from-primary-200" >
        <section class="container mx-auto" :class="{ 'blur-sm': filtersMenuVisible }">
            <ResultSection :has-results="weGotData()">
                <CharacterCard v-if="weGotData()" v-for="character in data.results" :character="character" />
            </ResultSection>
        </section>
    </div>
</template>

<script setup lang="ts">
import { type Info, type Character, type CharacterFilter } from '~/types/interfaces';

//Fetch data logic
const characterFilter = ref<CharacterFilter>({ page: 1 });
const data = await useCharacter<Info<Character>>(characterFilter.value);
const weGotData = (): boolean => {
    if (!data.value)
        return false;
    if (!data.value.results)
        return false;
    return true;
}

//Paginator logic
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

//Search input logic
const searchByName = (name: string): void => {
    if (characterFilter.value.name != name) {
        characterFilter.value.page = 1;
        characterFilter.value.name = name;
    }
};

//Filters menu logic
const filtersMenuVisible = useState('filtersMenuVisible', () => false);
const filtersModel = useState('filtersModel', () => new Map());
const toggleFilter = (group: string, name: string, value: boolean): void => {
    const state = filtersModel.value;
    state.set(group, new Map());
    state.get(group).set(name, value);
    
    characterFilter.value.page = 1;
    
    if (group == 'Gender') {
        characterFilter.value.gender = value ? name : undefined;
    }
    if (group == 'Status') {
        characterFilter.value.status = value ? name : undefined;
    }
    if (group == 'Species') {
        characterFilter.value.species = value ? name : undefined;
    }
}
</script>