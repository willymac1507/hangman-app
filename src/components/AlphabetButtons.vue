<script setup>
let props = defineProps([
  'disable'
]);
</script>
<template>
  <div class="mt-32 flex flex-wrap gap-x-2 gap-y-6 justify-center">
    <button v-for="letter in 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'"
            :key="letter"
            :disabled="disable.includes(letter.toLowerCase())"
            class="grow-0 alphabet-button text-2xl text-brand-navy"
            @click="$emit('check', letter)">
      {{
        letter
      }}
    </button>
  </div>
</template>
