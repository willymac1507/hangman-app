<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const props = defineProps([
  'route',
  'icon'
]);
</script>
<template>
  <div class="flex justify-between items-center w-full">
    <RouterLink :to="props.route" class="mini-button">
      <img :src="'/src/assets/images/icon-' + props.icon + '.svg'" alt="" width="17.45px">
    </RouterLink>
    <slot></slot>
  </div>
</template>