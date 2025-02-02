/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
    darkMode: 'selector',
    mode: 'jit',
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                manrope: ['Manrope', 'sans-serif'],
                'mtd-valky': ['MTDValky', 'sans-serif'],
            },
            screens: {
                xs: { min: '300px', max: '600px' },
            },
        },
    },
    plugins: [],
};
