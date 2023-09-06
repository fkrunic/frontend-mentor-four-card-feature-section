<script setup lang="ts">
defineProps<{
  title: string,
  content: string, 
  iconURL: string,
  borderColor: string
}>()
</script>

<template>
  <div class="flex flex-col items-start shadow-lg">
    <p>{{ title }}</p>
    <p>{{ content }}</p>
    <div class="flex flex-row justify-end items-center">
      <img :src="iconURL">
    </div>
  </div>
</template>

