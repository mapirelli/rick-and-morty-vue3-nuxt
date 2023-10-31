<template>
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
</template>
<script setup lang="ts">
import { type CharacterFilter } from '~/types/interfaces';

const filtersModel = useState('filtersModel', () => new Map());
const characterFilter = useState<CharacterFilter>('characterFilter', () => ({}));

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