<template>

    <SiteHeader>
        <SiteLogo />
        <Paginator :page="currentPage()" :totalPages="totalPages()" @onchange="goToPage" />
        <button class="rounded focus:outline-none focus:ring" @click="menuVisible = true" >
            <IconBars3 class="text-primary-700 stroke-2 h-7 w-7"/>
        </button>
    </SiteHeader>

    <section class="container mx-auto">
        <SearchBar>
            <SearchInput @oninput="searchByName" />
            <button id="toggleFiltersButton" class="rounded flex p-2 -mr-2 gap-2 items-center font-sans font-bold text-md uppercase 
                text-primary-700 hover:text-primary-500 focus:outline-none focus:ring"
                @click="filtersMenuVisible = !filtersMenuVisible">
                Filters
                <IconFilter class="w-5 h-4 text-primary-400" v-if="!filtersMenuVisible" />
                <IconXMark class="w-5 h-5 text-primary-400 stroke-2" v-if="filtersMenuVisible" />
            </button>
        </SearchBar>
    </section>

    <section class="container mx-auto">
        <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
            <div v-if="filtersMenuVisible" class="fixed container mx-auto z-30 bg-primary-300 rounded-b-3xl px-8 pt-8 pb-4">
                <div class="flex flex-col pt-8">
                    <HeaderSubtitle>Gender</HeaderSubtitle>
                    <div class="flex pt-2 pb-6">
                        <SearchFilter group="Gender" name="Male" @onclick="toggleFilter" />
                        <SearchFilter group="Gender" name="Female" @onclick="toggleFilter" />
                        <SearchFilter group="Gender" name="Genderless" @onclick="toggleFilter" />
                        <SearchFilter group="Gender" name="Unknown" @onclick="toggleFilter" />
                    </div>
                    <HeaderSubtitle>Status</HeaderSubtitle>
                    <div class="flex pt-2 pb-6">
                        <SearchFilter group="Status" name="Alive" @onclick="toggleFilter" />
                        <SearchFilter group="Status" name="Dead" @onclick="toggleFilter" />
                        <SearchFilter group="Status" name="Unknown" @onclick="toggleFilter" />
                    </div>
                    <HeaderSubtitle>Species</HeaderSubtitle>
                    <div class="flex pt-2 pb-6">
                        <SearchFilter group="Species" name="Human" @onclick="toggleFilter" />
                        <SearchFilter group="Species" name="Alien" @onclick="toggleFilter" />
                        <SearchFilter group="Species" name="Mythological Creature" @onclick="toggleFilter" />
                    </div>
                </div>
            </div>
        </transition>
    </section>

    <section class="container mx-auto mt-16 mb-10" :class="{ 'blur-sm': filtersMenuVisible }" >
        <ResultSection :hasData="weGotData()">
            <CharacterCard v-if="weGotData()" v-for="character in data.results" :character="character" />
        </ResultSection>
    </section>

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
const filtersMenuVisible = ref(false);
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

//Menu logic
const menuVisible = ref(false);

</script>