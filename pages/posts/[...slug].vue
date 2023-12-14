<script setup lang="ts">
import mainLayout from "@/layouts/mainLayout.vue";
import {useDayjs} from "#dayjs";
const dayjs = useDayjs();
</script>

<template>
  <ContentDoc v-slot="{ doc }">
    <main-layout>
      <h1 class="md:text-6xl text-4xl font-extrabold mt-5 mb-3 font-title-mono">{{ doc.title }}</h1>
      <p class="md:text-base text-sm pb-3">{{ dayjs(doc.date).format('YYYY/MM/DD HH:mm:ss') }}</p>
      <div class="font-serif md:text-xl min-w-fit" id="document">
        <ContentRenderer :value="doc">
          <ContentRendererMarkdown :value="doc" class="w-full post-default prose prose-md">
            {{ doc }}
          </ContentRendererMarkdown>
        </ContentRenderer>
      </div>
    </main-layout>
  </ContentDoc>
</template>
