<template>
    <button id="toggleNavigationButton" class="p-2 rounded focus:outline-none focus:ring" @click="navigationMenuVisible = true">
        <IconBars3 class="text-primary-700 stroke-2 h-7 w-7 " />
    </button>
</template>
<script setup lang="ts">
const navigationMenuVisible = useState('navigationMenuVisible', () => false);
</script>