<script setup lang="ts">
defineProps<{id:string}>()
</script>

<template>
  <h6 class="font-sans my-1 no-underline md:text-xl text-base font-bold" :id="id">
    <NuxtLink :href="`#${id}`">
      <slot />
    </NuxtLink>
  </h6>
</template>
