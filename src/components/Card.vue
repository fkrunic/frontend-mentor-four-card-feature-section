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
    
    shadow-lg 
    rounded-xl 
    
    border-solid
    border-t-2
    " :class="card.borderClass">
    <p>{{ card.title }}</p>
    <p>{{ card.content }}</p>
    <div class="flex flex-row justify-end items-center w-full">
      <img :src="getIconURL(card.tag)">
    </div>
  </div>
</template>

