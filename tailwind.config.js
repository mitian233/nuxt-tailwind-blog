/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    fontFamily: {
      'sans': ['Jost', 'Noto Sans SC', 'sans-serif'],
      'serif': ['Playfair Display', 'Noto Serif SC', 'serif'],
      'mono': ['IBM Plex Mono', 'monospace'],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

