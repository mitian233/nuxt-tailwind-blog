<script setup lang="ts">
import mainLayout from "@/layouts/mainLayout.vue";
import {useHead} from "#imports";
import {useDayjs} from "#dayjs";
const dayjs = useDayjs();
//import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types';
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
  title: 'Posts - Mikan',
  meta: [
    {name: 'description', content: 'Mikan\'s Homepage'},
  ],
});
</script>

<template>
  <main-layout>
    <h1 class="md:text-6xl text-4xl font-extrabold my-5 font-title-mono">Posts</h1>
    <ContentList :query="{ sort: [{ date: -1 }] }" path="/posts" v-slot="{ list }">
      <ul>
        <li v-for="post in list" :key="post.id" class="py-4">
          <nuxt-link :to="`${post._path}`">
            <div class="md:flex justify-between flex-wrap">
              <div>
                <h2 class="md:text-4xl text-2xl text-primary hover:text-primary-content ease-in-out duration-500">{{
                    post.title
                  }}</h2>
                <p class="text-secondary md:text-base text-sm">{{ dayjs(post.date).format('YYYY/MM/DD HH:mm:ss') }}</p>
                <p>{{ post.discription }}</p>
              </div>
              <div class="md:max-h-[150px] md:w-[250px] w-full my-4 rounded-lg overflow-hidden">
                <img class="w-full" :src="post.cover">
              </div>
            </div>
            <hr/>
          </nuxt-link>
        </li>
      </ul>
    </ContentList>
  </main-layout>
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
