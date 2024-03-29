const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["IBM Plex Sans", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: "#28305E",
            },
        },
    },

    plugins: [require("@tailwindcss/forms")],
};
