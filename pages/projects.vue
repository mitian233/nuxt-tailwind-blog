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
  <div class="min-h-screen py-32 flex flex-row justify-center">
    <div class="w-10/12 md:w-9/12">
      <h1 class="text-6xl font-extrabold my-5 font-title-mono">Projects</h1>
      <div class="font-serif text-xl body-text">
        <ContentDoc />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

