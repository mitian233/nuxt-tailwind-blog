<script setup lang="ts">
import mainLayout from "@/layouts/mainLayout.vue";
import {useHead} from "#imports";
import { ref } from "vue";

useHead({
  title:'Links - Mikan',
  meta: [
    {name: 'description', content: 'Mikan\'s Homepage'},
  ],
})

type linkItem = {
  name: string,
  site: string,
  siteURL: string,
  icon: string
}

const linkItem = ref<linkItem[]>([
  {
    "name": "Mikan",
    "site": "Aaki's Notebook",
    "siteURL": "https://blog.mikan.ac.cn",
    "icon": "https://gravatar.loli.net/avatar/da416f8013b9815f1e1c81754fffd701?s=300"
  },
  {
    "name": "lz差不多是条咸鱼了",
    "site": "鱼类观测研究所",
    "siteURL": "https://lz233.ac.cn/",
    "icon": "https://gravatar.loli.net/avatar/dd724814547a6199992e86ae57ab3400?s=300"
  },
  {
    "name": "Alpha UMi",
    "site": "Cynosura",
    "siteURL": "https://cynosura.one/",
    "icon": "https://cynosura.one/img/avatar.webp"
  },
  {
    "name": "炖Fish",
    "site": "炖鱼的碎碎念",
    "siteURL": "https://blog.salt-fish.moe/",
    "icon": "https://raw.githubusercontent.com/XiaoMengXinX/blog/master/img/avatar.jpg"
  },
  {
    "name": "Steven Lynn",
    "site": "Steven Lynn的个人博客",
    "siteURL": "https://blog.stv.lol",
    "icon": "https://blog.stv.lol/favicon.ico"
  },
  {
    "name": "高科技大脑指挥部",
    "site": "高科技的指挥中心",
    "siteURL": "https://blog.hightechbrain.net/",
    "icon": "https://blog.hightechbrain.net/img/avatar.png"
  },
  {
    "name": "Cicada000",
    "site": "cicada000.work",
    "siteURL": "https://www.cicada000.work/",
    "icon": "https://s2.loli.net/2023/07/30/trYUscwPFpMTu9L.png"
  },
  {
    "name": "日向花和",
    "site": "hanawahinata.me",
    "siteURL": "https://hanawahinata.me/",
    "icon": "https://hanawahinata.me/assets/img/avatar.jpg"
  }
]);
const isLoading = ref<boolean>(true);

</script>

<template>
  <main-layout>
    <h1 class="text-6xl font-extrabold my-5 font-title-mono">Links</h1>
    <div class="grid md:grid-cols-2">
      <a v-for="(card, index) in linkItem" :href="card.siteURL" class="hoverAnimation">
        <div class="relative rounded-xl overflow-auto p-3 w-full">
          <div class="overflow-hidden relative max-w-md mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-lg flex items-center gap-6 dark:bg-slate-800 dark:highlight-white/5">
            <img v-if="card.icon === ''" class="absolute -left-6 w-28 h-28 rounded-full shadow-lg" src="@/assets/images/default.jpg" :id="'avatar'+index" :alt="'avatar'+card.name"/>
            <img v-else class="absolute -left-6 w-28 h-28 shadow-lg" :src="card.icon" :id="'avatar'+index" :key="index" :alt="'avatar'+card.name"/>
            <div class="min-w-0 py-5 pl-28 pr-5">
              <div class="text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-200">
                {{card.name}}
              </div>
              <div class="text-slate-500 font-medium text-sm sm:text-base leading-tight truncate dark:text-slate-400">
                {{card.site}}
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  </main-layout>
</template>

<style scoped>

</style>
