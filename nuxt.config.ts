// https://nuxt.com/docs/api/configuration/nuxt-config
// https://content.nuxtjs.org/api/configuration
export default defineNuxtConfig({
  // @ts-ignore
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@nuxt/content'
  ],
  content: {},
  plugins:[],
  app: {
    head: {
      title: 'Mikan',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com'},
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true},
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=Jost&family=Noto+Sans+SC&family=Noto+Serif+SC&family=Playfair+Display&family=Poppins&display=swap" rel="stylesheet'},
      ],
    },
  },
  css:[
      {src:'~/assets/css/main.css'},
    {src: 'bootstrap-icons/font/bootstrap-icons.css'},
    {src: 'bootstrap-icons/bootstrap-icons.svg'}
  ],
  devtools: { enabled: true },
})
