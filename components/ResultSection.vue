<template>
    <div class="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <slot></slot>
    </div>
    <div class="text-center mx-8">
        <div v-if="pending">
            <p class="text-2xl font-serif text-primary-700">Loading ...</p>
        </div>
        <div v-else-if="!hasResults">
            <p class="text-2xl font-serif text-primary-700"><span class="font-bold">We have no results</span> for the given
                search</p>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    hasResults: {
        type: Boolean,
        required: true
    },
    pending: {
        type: Boolean,
        required: true
    }
});
</script>
