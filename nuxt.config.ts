// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  rootDir: './src/',

   runtimeConfig: {
    // Private keys are only available on the server
    VUE_APP_CTF_SPACE_ID: process.env.VUE_APP_CTF_SPACE_ID,
    VUE_APP_CTF_CDA_ACCESS_TOKEN: process.env.VUE_APP_CTF_CDA_ACCESS_TOKEN,

    // Public keys that are exposed to the client
    public: {
      VUE_APP_CTF_SPACE_ID: import.meta.env.VUE_APP_CTF_SPACE_ID,
      VUE_APP_CTF_CDA_ACCESS_TOKEN: import.meta.env.VUE_APP_CTF_CDA_ACCESS_TOKEN,
    }
  },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui'
  ]
})