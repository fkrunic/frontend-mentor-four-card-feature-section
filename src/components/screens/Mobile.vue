<script setup lang="ts">
import { cards } from '../../data'
import Card from '../Card.vue'
import Banner from '../Banner.vue'
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <Banner></Banner>
    <Card v-for="card of cards" :card="card"></Card>
  </div>  
</template>