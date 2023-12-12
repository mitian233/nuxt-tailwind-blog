<template>
  <main>
    <ContentDoc v-slot="{ doc }">
      <div class="min-h-screen py-32 flex flex-row justify-center">
        <div class="w-10/12 md:w-9/12">
          <h1 class="text-6xl font-extrabold mt-5 mb-3 font-title-mono">{{ doc.title }}</h1>
          <p class="pb-3">{{ doc.date }}</p>
          <div class="font-serif text-xl min-w-fit" id="document">
            <ContentRenderer :value="doc">
              <ContentRendererMarkdown :value="doc" class="w-full post-default prose prose-md">
                {{ doc }}
              </ContentRendererMarkdown>
            </ContentRenderer>
          </div>
        </div>
      </div>
    </ContentDoc>
  </main>
</template>
