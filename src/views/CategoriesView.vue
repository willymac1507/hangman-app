<script setup>
import Navbar from '../components/NavBar.vue';</script>
<template>
  <div class="page-container">
    <Navbar icon="back" route="/" type="link">
      <img alt="" src="@/assets/images/pick-a-category.svg">
    </Navbar>
    <div class="flex flex-col gap-6 mt-20 items-center">
      <RouterLink class="category-button" to="/play/movies">movies</RouterLink>
      <RouterLink class="category-button" to="/play/tv-shows">tv shows</RouterLink>
      <RouterLink class="category-button" to="/play/countries">countries</RouterLink>
      <RouterLink class="category-button" to="/play/capital-cities">capital cities</RouterLink>
      <RouterLink class="category-button" to="/play/animals">animals</RouterLink>
      <RouterLink class="category-button" to="/play/sports">sports</RouterLink>
    </div>
  </div>
</template>