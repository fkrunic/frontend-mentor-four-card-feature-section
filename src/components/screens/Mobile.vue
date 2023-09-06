<script setup lang="ts">
import { cards } from '../../data'
import Card from '../Card.vue'
import Banner from '../Banner.vue'
</script>

<template>
  <div class="
    flex 
    flex-col 
    items-center 
    justify-center 
    gap-6
    
    min-h-screen
    
    m-8
    ">
    <Banner class="pb-10"></Banner>
    <Card class="w-full" v-for="card of cards" :card="card"></Card>
  </div>  
</template>