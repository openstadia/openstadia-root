// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    runtimeConfig: {
        mongoUrl: process.env.MONGO_URL,
    },
    modules: [
        '@nuxtjs/google-fonts',
        'nuxt-gtag'
    ],
    googleFonts: {
        families: {
            Comfortaa: {
                wght: [700],
            },
        }
    },
    gtag: {
        id: 'G-TX034K932H'
    }
})
