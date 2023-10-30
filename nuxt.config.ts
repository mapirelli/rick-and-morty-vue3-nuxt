// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  components: [
    { path: '~/components', extensions: ['vue'] },
    { path: '~/components/icons', extensions: ['vue'] }
  ],
})