/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "250px", // for small devices like mobile phones
      md: "768px", // for medium devices like tablets
      lg: "1024px", // for large devices like laptops and desktops
      xl: "1280px", // for extra-large devices like large desktops
    },
    colors: {
      transparent: "transparent",
      color1: "#000000",
      color2: "#14213d",
      color3: "#fca311",
      color4: "#e5e5e5",
      color5: "#ffffff",
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".hide-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
        ".hide-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
      });
    },
  ],
};
