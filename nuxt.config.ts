// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    tailwindcss: {},
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        'pinia-plugin-persistedstate/nuxt',
        'nuxt-simple-sitemap',
    ],
    runtimeConfig: {
        public: {
            siteUrl: process.env.SITE_URL || 'https://taverna-do-meio-goblin.pages.dev'
        }
    },
    sitemap: {
        autoLastmod: true,
        trailingSlash: false,
    }
})