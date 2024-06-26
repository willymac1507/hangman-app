<script setup>
const props = defineProps([
  'title'
]);
</script>
<template>
  <div class="screen-overlay"></div>
  <div class="pause-overlay flex flex-col items-center">
    <img :src="'/src/assets/images/' + props.title + '.svg'" alt="pause" class="absolute -top-8" width="190px">
    <div
        class="flex flex-wrap justify-around gap-y-9 align-middle py-28 text-heading-s uppercase text-white tracking-wider">
      <RouterLink class="options-button" to="/">Continue</RouterLink>
      <RouterLink class="options-button" to="/">new category</RouterLink>
      <RouterLink class="quit-button" to="/">quit game</RouterLink>
    </div>
  </div>
</template>
