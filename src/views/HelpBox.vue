<script setup>
</script>
<template>
  <div class="text-container">
    <div class="flex gap-4 text-heading-xs mb-4">
      <h3 class="text-brand-blue">
        <slot name="number"></slot>
      </h3>
      <h3 class="text-brand-navy uppercase">
        <slot name="title"></slot>
      </h3>
    </div>
    <p class="text-brand-lilac text-help">
      <slot></slot>
    </p>
  </div>
</template>
