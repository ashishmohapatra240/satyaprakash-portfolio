/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            keyframes: {
                reflectGroup: {
                    '0%': { transform: 'translateX(-100%) skewX(-20deg)' },
                    '20%': { transform: 'translateX(170%) skewX(-20deg)' },
                    '100%': { transform: 'translateX(150%) skewX(-20deg)' },
                },
            },
            animation: {
                reflectGroup: 'reflectGroup 5s linear infinite',
            },
        },
    },
    plugins: [],
} 