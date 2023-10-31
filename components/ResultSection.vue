<template>
    <div class="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <slot></slot>
    </div>
    <div v-if="!hasResults" class="text-center mt-8">
        <p class="text-2xl font-serif text-primary-700"><span class="font-bold">We have no results</span> for the given
            search</p>
    </div>
</template>
<script setup lang="ts">
defineProps({
    hasResults: {
        type: Boolean,
        required: true
    }
});
</script>
