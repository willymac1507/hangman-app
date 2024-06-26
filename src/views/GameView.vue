<script setup>
import Navbar from '@/components/NavBar.vue';
import Healthbar from '@/components/HealthBar.vue';
import WordLine from '@/components/WordLine.vue';
import AlphabetButtons from '@/components/AlphabetButtons.vue';
import OverlayWindow from '@/components/OverlayWindow.vue';
import { ref } from 'vue';

let paused = ref(false);
let phrase = ['stalham', 'dragons'];
let guessedLetters = ref([]);
let displayPhrase = ref(phrase.map(blankPhrase));
let health = ref(13);

function blankPhrase(value) {
  let regex = new RegExp('[^' + guessedLetters.value.join('') + ']', 'g');
  return value.replaceAll(regex, '-');
}

console.log(displayPhrase);

function showOverlay() {
  paused.value = !paused.value;
};

function checkLetter(chosenLetter) {
  let exists = true;
  phrase.forEach((word) => {
    if (word.search(chosenLetter.toLowerCase()) === -1) {
      exists = false;
    }
  });
  if (!exists) {
    health.value = health.value - 1;
  }
  guessedLetters.value.push(chosenLetter.toLowerCase());
  displayPhrase.value = phrase.map(blankPhrase);
  ;

}
</script>
<template>
  <div class="page-container">
    <Navbar icon="menu" type="button" @pause="showOverlay()">
      <h1 class="text-white text-4xl capitalize ml-4 mr-auto">{{ $route.params.category }}</h1>
      <Healthbar :health="health"/>
    </Navbar>
    <div class="mt-20">
      <WordLine :phrase="displayPhrase"/>
    </div>
    <AlphabetButtons :disable="guessedLetters" @check="(letter) => checkLetter(letter)"/>
  </div>
  <OverlayWindow v-if="paused" title="pause"/>
</template>
