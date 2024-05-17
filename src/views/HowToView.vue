<script setup>
import HelpBox from '@/components/HelpBox.vue';
import Navbar from '@/components/NavBar.vue';</script>
<template>
  <div class="page-container">
    <Navbar icon="back" route="/">
      <img alt="" src="@/assets/images/how-to-play.svg">
    </Navbar>
    <div class="flex flex-col gap-6 mt-20">
      <HelpBox>
        <template #number>01</template>
        <template #title>choose a category</template>
        First, choose a word category, like animals or movies.
        The computer then randomly selects a secret word from that
        topic and shows you blanks for each letter of the word.
      </HelpBox>
      <HelpBox>
        <template #number>02</template>
        <template #title>Guess letters</template>
        Take turns guessing letters. The computer fills in the
        relevant blank spaces if your guess is correct. If it's
        wrong, you lose some health, which empties after eight
        incorrect guesses.
      </HelpBox>
      <HelpBox>
        <template #number>03</template>
        <template #title>Win or lose</template>
        You win by guessing all the letters in the word before your
        health runs out. If the health bar empties before you guess
        the word, you lose.
      </HelpBox>
    </div>
  </div>
</template>
