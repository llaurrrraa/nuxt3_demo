// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  "app": {
    "head": {
      "viewport": "width=500, initial-scale=1",
      "title": "Laura's nuxt-practice",
      "meta": [
        { "name": "description", "content": "Laura's Nuxt practice" },
        { "property": "title", "content": "Nuxt3" },
        { "property": "og:title", "content": "Nuxt3 Basic"},
        { "property": "og:url", "content": "http://localhost: 3000/"},
        { "property": "og:description", "content": "This is written by Laura"},
      ]
    }
  },
  devtools: { 
    enabled: true 
  },
  "modules": [
    [
      '@pinia/nuxt', {
        'autoImports': ['defineStore', 'acceptHMRUpdate'],
      },
    ],
    '@element-plus/nuxt',
    ['@nuxtjs/google-fonts', {
      families: {
        'Open Sans': [300, 500, 700]
      }
    }] 
  ],
  "imports": {
    "dirs": [ 'stores' ]
  },
  css: [
    "~/assets/style/main.scss",
  ],
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL || 'http://localhost:3000',
      websiteName: process.env.WEBSITE_NAME || '桃園市政府儀表板',
      websiteDescription: process.env.WEBSITE_DESCRIPTION || '呈現桃園市各項指標的儀表板',
      apiUrl: process.env.API_URL
    }
  },
})
