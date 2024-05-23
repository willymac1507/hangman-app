<script setup>
import Navbar from '@/components/NavBar.vue';
import Healthbar from '@/components/HealthBar.vue';
import WordLine from '@/components/WordLine.vue';
import AlphabetButtons from '@/views/AlphabetButtons.vue';</script>
<template>
  <div class="page-container">
    <Navbar icon="menu" route="/">
      <h1 class="text-white text-4xl capitalize ml-4 mr-auto">{{ $route.params.category }}</h1>
      <Healthbar/>
    </Navbar>
    <div class="mt-20">
      <WordLine :phrase="['isaac', 'mccloy']"/>
    </div>
    <AlphabetButtons/>
  </div>
</template>
