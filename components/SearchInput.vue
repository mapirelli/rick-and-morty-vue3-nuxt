<template>
    <input type="text" placeholder="Search a character"
        class="grow text-2xl font-bold font-serif text-primary-400 focus:outline-none" autocomplete="off" autocorrect="off"
        autocapitalize="off" @input="event => $emit('oninput', event.target.value)" />
</template>
<script setup lang="ts">
defineEmits(['oninput']);
</script>
        