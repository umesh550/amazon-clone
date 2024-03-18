/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        AmazonClone: {
          background: "#EAEDED",
          navbar: "#0F1111",
          light_blue: "#232f3a",
          yellow: "#febd69",
          DEFAULT: "#131921",
          color: "#CCCCCC",
          discount: "#cc0c39",
          footer: "#232F3E",
        },
      },
    },
  },
  plugins: [],
};
