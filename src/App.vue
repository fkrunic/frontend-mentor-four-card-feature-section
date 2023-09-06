<script setup lang="ts">
import { onMounted } from 'vue';
import Mobile from './components/screens/Mobile.vue'

onMounted(() => {
  document.body.className = 'font-poppins'
})
</script>

<template>
  <Mobile></Mobile>
</template>