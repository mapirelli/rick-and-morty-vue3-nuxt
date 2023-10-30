<template>
  <button class="mr-3 px-4 py-1 min-w-[8%] uppercase rounded-lg font-bold text-sm text-center
      border border-primary-500 
      hover:border-primary-400 hover:
      focus:outline-none focus:ring" :class="{
        'text-primary-300 bg-primary-700': isSelected(),
        'text-primary-700': !isSelected()
      }" @click="() => $emit('onclick', group, name, !isSelected())">
    {{ name }}
    <!--<span class="flex items-center justify-center">{{ name }}<IconXMark class="h-4 w-4 stroke-2" v-if="isSelected()" /></span>-->
  </button>
</template>
<script setup lang="ts">

const props = defineProps({
  group: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const filtersModel = useState('filtersModel', () => new Map());

const isSelected = (): boolean => {
  const state = filtersModel.value;
  if (!state.has(props.group)) {
    return false;
  }
  if (!state.get(props.group).has(props.name)) {
    return false;
  }
  return state.get(props.group).get(props.name);
};

defineEmits(['onclick']);

</script>