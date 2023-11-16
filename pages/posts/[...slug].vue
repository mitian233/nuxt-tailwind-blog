<script setup lang="ts">

</script>

<template>
  <main>
    <ContentDoc v-slot="{ doc }">
      <div class="min-h-screen w-full px-10 py-32 md:px-32 md:pt-20">
        <h1 class="text-6xl font-extrabold mt-5 mb-3 font-title-mono">{{ doc.title }}</h1>
        <p class="pb-3">{{doc.date}}</p>
        <div class="font-serif text-xl min-w-fit" id="document">
          <ContentRenderer :value="doc">
            <ContentRendererMarkdown :value="doc" class="w-full post-default prose prose-md">
              {{ doc }}
            </ContentRendererMarkdown>
            <template #empty>
              <p>No content found.</p>
            </template>
          </ContentRenderer>
        </div>
      </div>
    </ContentDoc>
  </main>
</template>

<style scoped>

</style>
