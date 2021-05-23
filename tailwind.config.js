const colors = require('tailwindcss/colors');
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            green: colors.green,
        },
    },
    fontFamily: {
        sans: ['Open sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
