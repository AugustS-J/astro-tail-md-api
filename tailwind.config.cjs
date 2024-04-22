/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries'),
    ],
    theme: {
        extend: {
            colors: {
                'persianmosaic': {
                    100: '#196673',
                    200: '#367480',
                    300: '#4e838e',
                    400: '#64929b',
                    500: '#7aa1a9',
                    600: '#90b0b7',
                    700: '#bbcfd3',
                    800: '#d2dfe2',
                    900: '#e8eff0',
                  },
            },
            fontFamily: {
                'sans': ['"Prompt"', ...defaultTheme.fontFamily.sans],
                'display': ['"Roboto"', 'monospace'], // Adds a new `font-display` class
            },
        },
    },
  };