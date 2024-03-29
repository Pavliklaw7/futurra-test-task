// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@nuxtjs/device',
    '@nuxtjs/tailwindcss',
  ],
  image: {
    dir: 'assets'
  },
  device: {
    refreshOnResize: true
  },
  routeRules: {
    '/': { prerender: true }
  },
  app: {
    head: {
        link: [{ rel: 'icon', type: 'image/png', href: '_nuxt/public/favicon.png' }]
    }
},
})

