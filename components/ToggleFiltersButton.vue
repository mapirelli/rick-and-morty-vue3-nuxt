<template>
    <button id="toggleFiltersButton" class="rounded flex py-2 -mr-2 items-center font-sans font-bold text-md uppercase 
                text-primary-700 hover:text-primary-500 focus:outline-none focus:ring"
        @click="filtersMenuVisible = !filtersMenuVisible">
        <span class="hidden sm:insile md:inline">Filters</span>
        <IconFilter class="w-4 h-4 text-primary-400 mx-2" :class="{'hidden':filtersMenuVisible}" />
        <IconXMark class="w-5 h-5 text-primary-400 stroke-2 mx-2" :class="{ 'hidden': !filtersMenuVisible }" />
    </button>
</template>
<script setup lang="ts">
const filtersMenuVisible = useState('filtersMenuVisible', () => false);
</script>