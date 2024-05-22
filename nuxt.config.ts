// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  imports: {
    dirs: ['constants'],
  },
  modules: ['@nuxt/ui'],
  ui: {
    icons: ['carbon'],
  },
})
