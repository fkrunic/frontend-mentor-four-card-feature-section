<script setup lang="ts">
import { onMounted } from 'vue';


onMounted(() => {
  document.body.className = 'font-poppins'
})
</script>

<template>
  <div class="flex items-center justify-center min-h-screen">
    <p class="text-3xl underline font-bold">
      Hello world!
    </p>
  </div>
</template>