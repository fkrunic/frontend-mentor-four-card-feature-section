<script setup lang="ts">
import { onMounted } from 'vue';
import Mobile from './components/screens/Mobile.vue'
import Desktop from './components/screens/Desktop.vue'

onMounted(() => {
  document.body.className = 'font-poppins'
})
</script>

<template>
  <Mobile class="desktop:hidden"></Mobile>
  <Desktop class="hidden desktop:flex"></Desktop>
</template>