<template>
  <div class="flex flex-col bg-white rounded-xl shadow-lg">
    <img class="rounded-t-xl object-cover" :src="`${character.image}`" :alt="`${character.name}`"/> 
    <div class="px-5 py-6" >
      <div class="font-serif font-bold text-3xl text-grey-700">{{ character.name }}</div>
      <div class="font-sans font-bold text-md text-grey-400">{{ character.species }} - {{ character.gender }}</div>
      <div class="my-6">
        <span class="px-7 py-1 font-sans font-bold text-sm uppercase rounded-lg bg-gray-200 text-gray-800" >{{ character.status }}</span>
      </div>
      <div class="font-sans text-grey-800 text-sm">
          <span class="font-bold">{{ shortName }}</span> origin is <span class="font-bold">{{ character.origin.name }}</span>
          and {{ genderAggettive }} last know location was <span class="font-bold">{{ character.location.name }}.</span>
          {{ genderPronoms }} was first seen in <span class="font-bold">episode {{ firstEpisodeSeen }}</span>
          and last seen in <span class="font-bold">episode {{ lastEpisodeSeen }}</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { type Character } from '~/types/interfaces';

const props = defineProps({
  character: {
    type: Object as PropType<Character>,
    required: true,
  },
});

const shortName = computed(() => {
    return props.character.name.split(' ')[0];
});
const genderAggettive = computed(() => {
  return props.character.gender == 'Male' ? 'his' : 'her';
});
const genderPronoms = computed(() => {
  return props.character.gender == 'Male' ? 'He' : 'She';
});
const firstEpisodeSeen = computed(() => {
  const first = 0;
  return props.character.episode[first].split('/').pop();
});
const lastEpisodeSeen = computed(() => {
  const last = props.character.episode.length - 1;
  return props.character.episode[last].split('/').pop();
});
</script>
