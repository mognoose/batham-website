// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
     }
    },

   runtimeConfig: {
    public: {
      VUE_APP_CTF_SPACE_ID: process.env.VUE_APP_CTF_SPACE_ID,
      VUE_APP_CTF_CDA_ACCESS_TOKEN: process.env.VUE_APP_CTF_CDA_ACCESS_TOKEN,
    }
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui'
  ]
})