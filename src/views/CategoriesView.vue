<script setup>
import Navbar from '../components/NavBar.vue';</script>
<template>
  <div class="page-container">
    <Navbar icon="back" route="/">
      <img alt="" src="@/assets/images/pick-a-category.svg">
    </Navbar>
    <div class="flex flex-col gap-6 mt-20">
      <button class="category-button">movies</button>
      <button class="category-button">tv shows</button>
      <button class="category-button">countries</button>
      <button class="category-button">capital cities</button>
      <button class="category-button">animals</button>
      <button class="category-button">sports</button>
    </div>
  </div>
</template>