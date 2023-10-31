<template>
    <SiteHeader>
        <SiteLogo />
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
                        <FiltersMenu />
                    </div>
                </transition>
            </section>
        </div>
    </div>

    <div class="px-4 pt-16 pb-10 bg-gradient-to-b from-primary-200">
        <section class="container mx-auto" :class="{ 'blur-sm': filtersMenuVisible }">
            <ResultSection :pending="pending" :has-results="data != null">
                <CharacterCard v-if="data != null" v-for="character in data.results" :character="character" />
            </ResultSection>
        </section>
    </div>
</template>
<script setup lang="ts">
import { type Info, type Character, type CharacterFilter } from '~/types/interfaces';

clearNuxtState([
    'characterFilter',
    'filtersModel',
    'filtersMenuVisible',
    'navigationMenuVisible',
]);

//Fetch data logic
const characterFilter = useState<CharacterFilter>('characterFilter', () => ({ page: 1 }));
const url = 'https://rickandmortyapi.com/api/character';

//Filters menu logic
const filtersMenuVisible = useState('filtersMenuVisible', () => false);

const { data, pending } = await useFetch<Info<Character[]>>(url, {
    params: characterFilter,
    transform: (newData) => {
        if (characterFilter.value.page == 1) {
            window.scrollTo(0, 0);
        } else {
            const currResults = data.value ? data.value.results : null;
            if (newData.results && currResults) {
                newData.results.forEach((character) => {
                    currResults.push(character);
                });
                newData.results = currResults;
            }
        }
        return newData;
    }
});

//Search input logic
const searchByName = (name: string): void => {
    if (characterFilter.value.name != name) {
        characterFilter.value.page = 1;
        characterFilter.value.name = name;
    }
};

onMounted(() => {
    window.addEventListener("scroll", handleScroll)
})

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll)
})

const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        if (characterFilter.value.page && data.value && data.value.info)
            if (data.value.info.pages > characterFilter.value.page)
                characterFilter.value.page = characterFilter.value.page + 1;
    }
};

</script>