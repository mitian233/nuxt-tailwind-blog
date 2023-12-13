<script setup lang="ts">
import mainLayout from "@/layouts/mainLayout.vue";
import {useHead} from "#imports";
useHead({
  title:'About - Mikan',
  meta: [
    {name: 'description', content: 'Mikan\'s Homepage'},
  ],
})
</script>

<template>
  <main-layout>
    <h1 class="text-6xl font-extrabold my-5 font-title-mono">About</h1>
    <div class="font-serif text-xl body-text">
      <ContentDoc />
    </div>
  </main-layout>
</template>

<style scoped>

</style>
