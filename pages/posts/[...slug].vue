<script setup lang="ts">
import mainLayout from "@/layouts/mainLayout.vue";
const { $timeFormat } = useNuxtApp();
</script>

<template>
  <ContentDoc v-slot="{ doc }">
    <main-layout>
      <h1 class="text-6xl font-extrabold mt-5 mb-3 font-title-mono">{{ doc.title }}</h1>
      <p class="pb-3">{{ $timeFormat(doc.date) }}</p>
      <div class="font-serif text-xl min-w-fit" id="document">
        <ContentRenderer :value="doc">
          <ContentRendererMarkdown :value="doc" class="w-full post-default prose prose-md">
            {{ doc }}
          </ContentRendererMarkdown>
        </ContentRenderer>
      </div>
    </main-layout>
  </ContentDoc>
</template>
