<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const props = defineProps([
  'route',
  'icon'
]);
</script>
<template>
  <div class="flex justify-between w-full">
    <button class="mini-button" @click="() => { router.push(props.route) }">
      <img :src="'/src/assets/images/icon-' + props.icon + '.svg'" alt="" width="17.45px">
    </button>
    <slot></slot>
  </div>
</template>