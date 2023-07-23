<script setup lang="ts">
import {useHead} from "#imports";
const userName:string = "Mikan";
</script>

<template>
  <div class="w-fit flex flex-col">
    <div class="md:w-[40vw]">
      <p class="md:text-8xl text-4xl md:mb-5">Hello!</p>
      <p class="md:text-6xl text-2xl md:mb-3">
        I'm
        <span
            class="hover:text-orange-600 ease duration-500 font-extralight font-['IBM_Plex_Mono']"
            v-on:mouseover="ifIconShow = true"
            v-on:mouseleave="ifIconShow = false">
          {{userName}}
        </span>
        <transition name="fade">
          <span v-if="ifIconShow">🍊</span>
        </transition>
      </p>
      <div id="myJobs" class="md:text-4xl text-xl">
        <p>
          <span class="font-mono"><i class="bi bi-arrow-right"></i></span>
          <span class="font-sans">Student</span>
        </p>
        <p>
          <span class="font-mono"><i class="bi bi-arrow-right"></i></span>
          <span class="font-mono">Full Stack Developer</span>
        </p>
        <p>
          <span class="font-mono"><i class="bi bi-arrow-right"></i></span>
          <span class="font-serif">Photographer</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data: () => {
    return {
      ifIconShow: false,
    }
  },
}
</script>

<style scoped>

#myJobs p {
  @apply md:mb-2
}

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

.slide-leave-to,
.slide-enter-from {
  opacity: 100;
  transform: translateY(-100%);
}
</style>
