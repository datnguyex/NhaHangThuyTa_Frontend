/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
    darkMode: 'selector',
    mode: 'jit',
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        //o day dinh nghia 1 so mau hay khoang cach ma tailwind khong co
        // nhung da duoc fig voi jit
        extend: {
            screens: {
                xs: { min: '300px', max: '600px' }, // breakpoint từ 400px đến 600px
            },
        },
    },
    plugins: [],
};
