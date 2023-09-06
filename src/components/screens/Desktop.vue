<script setup lang="ts">
import { cards } from '../../data'
import Card from '../Card.vue'
import Banner from '../Banner.vue'
</script>

<template>
  <div class="flex flex-col items-center gap-16 min-h-screen">
    <Banner class="w-[35rem] mt-20"></Banner>
    <div class="flex flex-row items-center gap-8">
      <div class="flex flex-col w-[21rem]">
        <Card :card="cards[0]"></Card>
      </div>
      <div class="flex flex-col gap-8 w-[21rem]">
        <Card :card="cards[1]"></Card>
        <Card :card="cards[2]"></Card>
      </div>
      <div class="flex flex-col w-[21rem]">
        <Card :card="cards[3]"></Card>
      </div>
    </div>
  </div>
</template>