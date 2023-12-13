<script setup lang="ts">
import topBar from '~/components/topBar.vue';
import loading from "~/components/loading.vue";
import { useHead, onBeforeRouteUpdate, onBeforeRouteLeave } from "#app";
import {onMounted} from "vue";
const isLoading = ref<boolean>(true);

const waitLoading = () => {
  window.addEventListener('load', ()=>{
    isLoading.value = false;
  })
}

useHead({
  bodyAttrs: {
    class: 'scroll-smooth'
  }
})

onMounted(()=>{
  waitLoading()
})
</script>

<template>
  <div class="bg-base">
    <nuxt-page />
    <top-bar />
    <!--
    <transition name="slide">
      <div v-if="isLoading" class="fixed inset-0 bg-black z-50 flex justify-center">
        <loading />
      </div>
    </transition>
    -->
  </div>
</template>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(-100%);
}
</style>
