<template>
    <input type="text" placeholder="Search a character"
        class="grow w-0 text-2xl font-bold font-serif text-primary-400 focus:outline-none mr-2" autocomplete="off"
        autocorrect="off" autocapitalize="off" @input="event => $emit('oninput', event.target.value)" />
</template>
<script setup lang="ts">
defineEmits(['oninput']);
</script>
<style>
::placeholder {
    color: #89bbc2 !important;
}
::-ms-input-placeholder {
    color: #89bbc2 !important;
}</style>