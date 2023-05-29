/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue",
    ],
    theme: {
        extend: {
            colors: {
                // https://www.tailwindshades.com/
                'openstadia': {
                    DEFAULT: '#D85B40',
                    50: '#F7DED8',
                    100: '#F4CFC8',
                    200: '#EDB2A6',
                    300: '#E69584',
                    400: '#DF7862',
                    500: '#D85B40',
                    600: '#BA4026',
                    700: '#8B301C',
                    800: '#5D2013',
                    900: '#2E1009',
                    950: '#170805'
                },
            }
        },
    },
    plugins: [
        // require('@tailwindcss/forms'),
    ],
}

