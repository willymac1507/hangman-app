<script setup>
const props = defineProps(['health']);
// const =
// props.
</script>
<template>
  <div class="flex justify-between items-center gap-4">
    <div class="h-5 rounded-full bg-white w-16 p-1 mr-auto">
      <!--      <div class="w-12 w-11 w-10 w-9 w-8 w-7 w-6 w-5 w-4 w-3 w-2 w-1"></div>-->
      <div :class="'w-' + props.health"
           class="h-3 rounded-full bg-brand-navy"
      ></div>
    </div>
    <img alt="heart" src='@/assets/images/icon-heart.svg' width="26.16px">
  </div>
</template>
