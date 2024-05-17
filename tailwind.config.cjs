/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'mobile': 'url(@/assets/images/background-mobile.svg)',
                'tablet': 'url(@/assets/images/background-tablet.svg)',
                'desktop': 'url(@/assets/images/background-desktop.svg)',
                'title': 'linear-gradient(to bottom, #67b6ff, #ffffff)',
            },
            colors: {
                brand: {
                    navy: '#261676',
                    blue: '#2643ff',
                },
            }
        }
    },
    plugins: []
};
