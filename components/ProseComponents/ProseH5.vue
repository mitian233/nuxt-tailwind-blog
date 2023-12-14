<script setup lang="ts">
defineProps<{id:string}>()
</script>

<template>
  <h5 class="font-sans my-1 no-underline md:text-xl text-base font-bold" :id="id">
    <NuxtLink :href="`#${id}`">
      <slot />
    </NuxtLink>
  </h5>
</template>
