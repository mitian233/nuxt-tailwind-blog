<script setup lang="ts">

</script>

<template>
  <main>
    <ContentDoc v-slot="{ doc }">
      <div class="min-h-screen px-10 py-32 md:px-32 md:pt-20">
        <h1 class="text-6xl font-extrabold my-5 font-title-mono">{{ doc.title }}</h1>
        <div class="font-serif text-xl text-justify body-text">
          <ContentRenderer :value="doc" />
        </div>
      </div>
    </ContentDoc>
  </main>
</template>

<style scoped>

</style>
