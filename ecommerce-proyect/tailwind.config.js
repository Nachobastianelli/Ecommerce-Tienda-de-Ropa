/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    "darkMode": 'class',
    theme: {
        extend: {
            backgroundImage: {
                "monumento-bandera": "url('https://www.impulsonegocios.com/wp-content/uploads/2021/04/Monumento-a-la-Bandera-de-Rosario.jpg')",
                "SurfImage": "url('https://wallpapercave.com/wp/HagO11E.jpg')",
                "WormXp": "url('https://wallpapercave.com/wp/wp2754868.jpg')"
            }, fontFamily: {
                pixel: ['"Pixelify Sans"', 'sans-serif'],
                init: ['Honk', 'sans-serif'],
                macondo: ['Macondo', 'sans-serif']
            }, keyframes: {
                typing: {
                    "0%": {
                        width: "0%",
                        visibility: "hidden"
                    },
                    "100%": {
                        width: "100%"
                    }
                },
                blink: {
                    "50%": {
                        borderColor: "transparent"
                    },
                    "100%": {
                        borderColor: "white"
                    }
                }
            },
            animation: {
                typing: "typing 2s steps(20) infinite alternate, blink .7s infinite"
            }

        },
    },
    plugins: [],
};