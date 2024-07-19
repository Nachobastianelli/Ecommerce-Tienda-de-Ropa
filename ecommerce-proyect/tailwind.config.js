/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    "darkMode": 'class',
    theme: {
        extend: {
            backgroundImage: {
                "monumento-bandera": "url('https://www.impulsonegocios.com/wp-content/uploads/2021/04/Monumento-a-la-Bandera-de-Rosario.jpg')",
                "SurfImage": "url('https://wallpapercave.com/wp/HagO11E.jpg')",
            },

        },
    },
    plugins: [],
};