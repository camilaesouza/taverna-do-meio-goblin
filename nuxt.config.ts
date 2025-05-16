// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    tailwindcss: {},
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        'pinia-plugin-persistedstate/nuxt',
        '@nuxtjs/sitemap'
    ],
    sitemap: {
        siteUrl: 'https://www.tavernadomeiogoblin.com.br',
        trailingSlash: false,
    }
})