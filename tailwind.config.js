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
      'sans': ['Jost', 'sans-serif'],
      'serif': ['Playfair Display', 'serif'],
      'mono': ['IBM Plex Mono', 'monospace'],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

