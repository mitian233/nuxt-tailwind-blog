<script setup lang="ts">
import {useHead} from "#imports";
/*
const isLoading = ref<boolean>(true);
const postsData = ref<{[key:string]:any}[]>([]);
queryContent('/posts').find().then((data) => {
  postsData.value = data;
  console.log(postsData.value);
  isLoading.value = false;
});
*/
useHead({
  title:'Posts - Mikan',
  meta: [
    {name: 'description', content: 'Mikan\'s Homepage'},
  ],
})
</script>

<template>
  <main>
    <div class="min-h-screen px-10 py-32 md:px-32 md:py-20">
      <h1 class="text-6xl font-extrabold my-5 font-title-mono">Posts</h1>
      <ContentList path="/posts" v-slot="{ list }">
        <ul>
          <li v-for="post in list" :key="post.id" class="py-4">
            <nuxt-link :to="`${post._path}`">
              <div class="md:flex justify-between flex-wrap">
                <div>
                  <h2 class="text-4xl text-primary hover:text-primary-content ease-in-out duration-500">{{ post.title }}</h2>
                  <p class="text-secondary">{{post.date}}</p>
                  <p>{{post.discription}}</p>
                </div>
                <img class="max-w-full max-h-full w-1/6 my-4 rounded-lg" :src="post.cover">
              </div>
              <hr/>
            </nuxt-link>
          </li>
        </ul>
      </ContentList>
    </div>
  </main>
  <!--
  <div class="min-h-screen px-10 py-32 md:px-32 md:py-20">
    <h1 class="text-6xl font-extrabold my-5 font-title-mono">Posts</h1>
    <div class="text-xl text-justify body-text">
      <transition name="slide" mode="out-in">
        <div v-if="isLoading" class="text-center text-3xl">
          <p><span class="loading loading-ring loading-lg"></span></p>
          <p>Loading...</p>
        </div>
        <div v-else>
          <ul>
            <li v-for="post in postsData" :key="post.id" class="py-4">
              <nuxt-link :to="`${post._path}`">
                <h2 class="text-4xl text-primary hover:text-primary-content ease-in-out duration-500">{{ post.title }}</h2>
                <p class="text-secondary">{{post.date}}</p>
                <p>{{post.discription}}</p>
                <hr/>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
  -->
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(30%);
}
</style>
