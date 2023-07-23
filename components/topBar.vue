<script setup lang="ts">
const showMenu = ref<boolean>(false)
function toggleMenu():void {
  showMenu.value = !showMenu.value
}

import { onBeforeRouteUpdate } from "#app";
onBeforeRouteUpdate((to, from, next) => {
  next();
  showMenu.value = false;
})

</script>

<template>
  <transition name="slide-up">
    <div v-if="showMenu" id="menu" class="fixed inset-0 min-h-screen w-screen bg-black text-white">
      <div id="menu" class="w-full md:mx-40 md:pt-24 pt-14 pb-14 text-center md:text-left flex flex-col justify-center">
        <nuxt-link class="router-link" to="/"><p class="md:ml-4">Home</p></nuxt-link>
        <nuxt-link class="router-link" to="/about"><p class="md:ml-4">About</p></nuxt-link>
      </div>
      <div class="md:px-40 md:text-left px-20 text-center">
        <p>2023 ©Harada Ayase All Rights Reserved. </p>
        <p>Website design: <a href="https://github.com/mitian233">Mikan</a></p>
      </div>
    </div>
  </transition>
  <button v-on:click="toggleMenu" class="fixed w-10 h-10 top-10 right-10">
    <div class="h-full w-full bg-black border-white border-2 flex flex-col justify-center text-center duration-500 ease-in-out hover:border-opacity-0">
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
.router-link{
  @apply text-4xl hover:bg-white hover:text-black ease-in-out duration-300 py-2;
}

a {
  @apply hover:bg-white hover:text-black ease-in-out duration-300;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.5s ease;
}

.slide-up-leave-to,
.slide-up-enter-from {
  opacity: 100;
  transform: translateY(-100%);
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
