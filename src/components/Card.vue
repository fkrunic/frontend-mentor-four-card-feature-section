<script setup lang="ts">
import { CardDetails } from '../data';

defineProps<{card: CardDetails}>()

const getIconURL = (tag: string) => {
    return new URL(`../assets/icon-${tag}.svg`, import.meta.url).href
}
</script>

<template>
  <div class="
    flex 
    flex-col 
    items-start
    gap-1

    p-6
    
    shadow-lg 
    shadow-very-dark-blue/20
    rounded-lg 
    
    border-solid
    border-t-4

    desktop:p-8
    " :class="card.borderClass">
    <p class="font-bold text-lg text-very-dark-blue">{{ card.title }}</p>
    <p class="text-xs text-grayish-blue leading-5">{{ card.content }}</p>
    <div class="flex flex-row justify-end items-center w-full pt-8">
      <img class="w-14 h-14" :src="getIconURL(card.tag)">
    </div>
  </div>
</template>

