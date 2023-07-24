<script setup lang="ts">
import {useHead} from "#imports";

useHead({
  title:'Projects - Mikan',
  meta: [
    {name: 'description', content: 'Mikan\'s Homepage'},
  ],
})
</script>

<template>
  <div class="min-h-screen px-10 py-32 md:px-32 md:pt-20">
    <h1 class="text-6xl font-extrabold my-5 font-title-mono">Projects</h1>
    <div class="font-serif text-xl text-justify body-text">
      <ContentDoc />
    </div>
  </div>
</template>

<style scoped>

</style>

