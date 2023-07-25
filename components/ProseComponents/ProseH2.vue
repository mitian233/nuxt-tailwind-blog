<script setup lang="ts">
defineProps<{id:string}>()
</script>

<template>
  <h2 class="font-sans mb-2 mt-4 no-underline text-4xl font-bold" :id="id">
    <NuxtLink :href="`#${id}`">
      <slot />
    </NuxtLink>
  </h2>
  <hr/>
</template>
