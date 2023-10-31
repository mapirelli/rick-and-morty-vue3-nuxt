<template>
  <div class="flex gap-2 items-center">
    <button class="rounded-full p-1 focus:outline-none focus:ring" @click="() => $emit('onchange', page - 1)"
      :disabled="page == 1" :class="{
        'text-primary-100': page <= 1,
        'text-primary-500 hover:text-primary-700': page > 1,
      }">
      <IconArrowLeft class="stroke-2" />
    </button>
    <span class="text-2xl font-bold font-serif text-primary-700"><span class="inline">Page</span> <span
        class="text-primary-400">{{ page }}</span> of
      {{ totalPages }}</span>
    <button class="rounded-full p-1 focus:outline-none focus:ring" @click="() => $emit('onchange', page + 1)"
      :disabled="page == totalPages" :class="{
        'text-primary-100': page == totalPages,
        'text-primary-500 hover:text-primary-700': page < totalPages,
      }">
      <IconArrowRight class="stroke-2" />
    </button>
  </div>
</template>
<script setup lang="ts">
defineProps({
  totalPages: {
    type: Number,
    required: true,
  },
  page: {
    type: Number,
    required: true,
  },
});
defineEmits(['onchange']);
</script>