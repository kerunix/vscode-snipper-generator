import { tools } from './tools/tools'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  imports: {
    dirs: ['constants'],
  },

  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
  ],
  compatibilityDate: '2024-11-13',
  colorMode: {
    classSuffix: '',
  },
  hooks: {
    'pages:extend': function (pages) {
      tools.forEach((tool) => {
        pages.push({
          name: tool.slug,
          path: `/tools/${tool.slug}`,
          file: `~/tools/pages/${tool.slug}.vue`,
          meta: {
            title: tool.name,
            description: tool.description,
            layout: 'tool',
          },
        })
      })
    },
  },
})
