<script setup>
</script>
<template>
  <div class="page-container">
    <div class="main-menu-background p-8 relative flex flex-col items-center">
      <img alt="logo" class="absolute -top-14 w-4/5" src="@/assets/images/logo.svg">
      <RouterLink
          class="main-menu-button mt-24 flex flex-col items-center justify-center"
          to="/categories"
      >
        <img alt="" class="h-2/6" src="@/assets/images/icon-play.svg">
      </RouterLink>
      <RouterLink class="main-menu-how-button mt-16 text-heading-s uppercase text-white"
                  to="/how-to-play">how to play
      </RouterLink>
    </div>
  </div>
</template>
