<script setup lang="ts">
import UserCard from "~/components/userCard.vue";
import { onMounted } from "vue";
import {useHead} from "#imports";

import bg from '../assets/images/res029011_training.jpg';

const { $scrollReveal } = useNuxtApp();
const data = ref<any>(null);
const retScroll = (data:any)=>{
  data.reveal('.homepageReveal',{
    delay: 300,
    duration: 1600,
    scale: 0.1,
    reset: false
  })
}
onMounted(()=>{
  if (process.client) {
    retScroll($scrollReveal)
  }
})
useHead({
  title:'Home - Mikan',
  meta: [
    {name: 'description', content: 'Mikan\'s Homepage'},
  ],
})
</script>

<template>
  <div id="page1" class="h-screen">
    <div class="absolute z-2 w-full overflow-hidden" >
      <div class="absolute z-0 min-h-screen md:w-[50vw] w-full bg-secondary-content bg-opacity-50 md:bg-opacity-100">
      </div>

      <div class="z-1 h-screen w-[100vw] overflow-hidden text-right" :style="{background:'url(\''+bg+'\') no-repeat fixed center',backgroundSize:'cover'}">
        <!--<img class="inline h-screen" src="assets/images/vladimir-malyavko-vdQGc0lSd1c-unsplash.jpg" alt="">-->
      </div>
    </div>
    <div class="absolute min-h-screen w-full md:p-24 p-14 flex flex-col justify-center z-3">
      <user-card />
    </div>
  </div>
</template>

<style scoped>

</style>
