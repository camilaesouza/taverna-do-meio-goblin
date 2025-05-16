export default defineNuxtRouteMiddleware(() => {
    if (process.server) {
        const host = useRequestHeaders(['host']).host
        if (host && host.includes('.pages.dev')) {
            return navigateTo('https://www.tavernadomeiogoblin.com.br', { redirectCode: 301 })
        }
    }
})
