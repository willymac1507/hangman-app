<script setup>
const props = defineProps([
  'phrase'
]);
</script>
<template>
  <div class="flex flex-col gap-y-3">
    <div v-for="word in props.phrase" :key="word" class="flex items-center justify-around">
      <button v-for="letter in word" :key="letter" :disabled="letter === 'a'"
              class="letter-button text-white text-4xl uppercase">{{
          letter
        }}
      </button>
    </div>
  </div>
</template>
