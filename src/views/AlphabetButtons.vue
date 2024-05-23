<script setup>
</script>
<template>
  <div class="mt-32 flex flex-wrap gap-x-2 gap-y-6 justify-start">
    <button v-for="letter in 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'"
            :key="letter"
            class="grow-0 alphabet-button text-2xl text-brand-navy">
      {{
        letter
      }}
    </button>
  </div>
</template>
