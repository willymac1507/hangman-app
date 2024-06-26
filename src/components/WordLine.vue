<script setup>
const props = defineProps([
  'phrase'
]);
</script>
<template>
  <div class="flex flex-col gap-y-3">
    <div v-for="word in props.phrase" :key="word" class="flex items-center justify-around">
      <div v-for="letter in word"
           :key="letter"
           :class="letter === '-' ? 'text-transparent' : 'text-white'"
           class="letter-button text-4xl uppercase">
        <div>
          {{ letter }}
        </div>
      </div>
    </div>
    <button @click="chosenLetters.push('s')">Check</button>
  </div>
</template>
