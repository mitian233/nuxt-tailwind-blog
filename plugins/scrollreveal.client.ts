import { defineNuxtPlugin } from "#app";
// @ts-ignore
import scrollReveal from 'scrollreveal';

export default defineNuxtPlugin((nuxtApp) => {
    let data = scrollReveal();
    return {
        provide: {
            scrollReveal: data
        }
    }
})
