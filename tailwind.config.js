/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
            colors: {
                primary: {
                    DEFAULT: '#005f73', // Deep Teal
                    light: '#0a9396',
                    dark: '#003e4d',
                },
                secondary: {
                    DEFAULT: '#94d2bd', // Soft Green
                    light: '#e9d8a6', // Sand/Gold accent
                },
                surface: {
                    DEFAULT: '#ffffff',
                    soft: '#f8f9fa',
                    dark: '#212529',
                },
                accent: '#ee9b00', // Warm accent for buttons/highlights
                danger: '#ae2012',
            },
            boxShadow: {
                'glow': '0 4px 14px 0 rgba(0, 95, 115, 0.15)',
                'glow-hover': '0 10px 24px 0 rgba(0, 95, 115, 0.25)',
            },
            screens: {
                's24': '360px', // Galaxy S24 Base width approx
                'xs': '412px', // Larger androids
            }
        },
    },
    plugins: [],
}
