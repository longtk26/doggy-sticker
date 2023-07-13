/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                palette: {
                    lighter: "#F5F3FF",
                    light: "#DDD6FE",
                    primary: "#5B21B6",
                    dark: "#4C1D95",
                },
            },
        },
    },
    plugins: [],
};
