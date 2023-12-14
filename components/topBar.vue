<script setup lang="ts">
const showMenu = ref<boolean>(false)

function toggleMenu(): void {
  showMenu.value = !showMenu.value
}

import {onBeforeRouteUpdate} from "#app";

onBeforeRouteUpdate((to, from, next) => {
  next();
  showMenu.value = false;
})

</script>

<template>
  <transition name="slide-down">
    <div v-if="showMenu" id="menu" class="fixed inset-0 min-h-screen w-screen bg-black text-white">
      <div id="menu" class="w-full md:mx-40 md:pt-24 pt-24 pb-14 text-center md:text-left flex flex-col justify-center">
        <nuxt-link class="router-link" to="/"><p class="md:ml-4">Home</p></nuxt-link>
        <nuxt-link class="router-link" to="/posts"><p class="md:ml-4">Posts</p></nuxt-link>
        <nuxt-link class="router-link" to="/projects"><p class="md:ml-4">Projects</p></nuxt-link>
        <nuxt-link class="router-link" to="/links"><p class="md:ml-4">Links</p></nuxt-link>
        <nuxt-link class="router-link" to="/about"><p class="md:ml-4">About</p></nuxt-link>
      </div>
      <div class="md:px-40 md:text-left px-20 text-center">
        <p>2023 ©Harada Ayase All Rights Reserved. </p>
        <!--<div class="flex flex-row items-center">
          <p class="inline">Picture Copyright:&nbsp;</p>
          <div class="inline-block">
            <svg width="32" height="32" class="UP8CN" viewBox="0 0 32 32" version="1.1" aria-hidden="false">
              <desc lang="en-US">Unsplash logo</desc>
              <title id="unsplash">Unsplash</title>
              <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z" style="fill:#ffffff;fill-opacity:1"></path>
            </svg>
          </div>
          <p class="inline font-['Noto_Sans_SC']">&nbsp;Unsplash</p>
        </div>-->
        <p>Website design: <a href="http://github.com/mitian233/nuxt-tailwind-blog">Mikan</a></p>
      </div>
    </div>
  </transition>
  <button v-on:click="toggleMenu" class="fixed w-10 h-10 top-10 right-10">
    <div
        class="h-full w-full bg-black border-white border-2 flex flex-col justify-center text-center duration-500 ease-in-out hover:border-opacity-0">
      <transition name="fade" mode="out-in">
        <div v-if="!showMenu">
          <i class="bi bi-list text-white text-2xl"></i>
        </div>
        <div v-else>
          <i class="bi bi-x text-white text-2xl"></i>
        </div>
      </transition>
    </div>
  </button>
</template>

<style scoped>
.router-link {
  @apply text-4xl hover:bg-white hover:text-black ease-in-out duration-300 py-2 font-['IBM_Plex_Mono'];
}

a {
  @apply hover:bg-white hover:text-black ease-in-out duration-300;
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.5s ease;
}

.slide-down-leave-to,
.slide-down-enter-from {
  opacity: 100;
  transform: translateY(-100%);
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.5s ease;
}

.slide-up-leave-to,
.slide-up-enter-from {
  opacity: 0;
  transform: translateY(100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
