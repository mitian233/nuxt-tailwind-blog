<script setup lang="ts">
import mainLayout from "@/layouts/mainLayout.vue";
import {useHead} from "#imports";

useHead({
  title:'Projects - Mikan',
  meta: [
    {name: 'description', content: 'Mikan\'s Homepage'},
  ],
})
</script>

<template>
  <main-layout>
    <h1 class="md:text-6xl text-4xl font-extrabold my-5 font-title-mono">Projects</h1>
    <div class="font-serif md:text-xl text-base body-text">
      <ContentDoc />
    </div>
  </main-layout>
</template>

<style scoped>

</style>

