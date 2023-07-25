<script setup lang="ts">
defineProps<{id:string}>()
</script>

<template>
  <h4 class="font-sans my-1 no-underline text-2xl font-bold" :id="id">
    <NuxtLink :href="`#${id}`">
      <slot />
    </NuxtLink>
  </h4>
</template>
