<script setup>
const props = defineProps([
  'type',
  'route',
  'icon'
]);
let $emit = defineEmits([
  'pause'
]);
</script>
<template>
  <div class="flex justify-between items-center w-full">
    <RouterLink v-show="props.type === 'link'" :to="props.route" class="mini-button">
      <img :src="'/src/assets/images/icon-' + props.icon + '.svg'" alt="" width="17.45px">
    </RouterLink>
    <button v-show="props.type === 'button'" class="mini-button" @click="$emit('pause')">
      <img :src="'/src/assets/images/icon-' + props.icon + '.svg'" alt="" width="17.45px">
    </button>
    <slot></slot>
  </div>
</template>