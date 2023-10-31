<template>
  <div>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Rick and Morty Characters',
  meta: [
    { name: 'description', content: 'Rick and Morty characters search app' }
  ]
});
</script>