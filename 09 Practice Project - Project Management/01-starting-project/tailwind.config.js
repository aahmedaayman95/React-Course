/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "caret-color": "black", // Replace with your desired color
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".caret-red": {
          caretColor: "#ff0000", // Replace with your desired color
        },
        ".caret-green": {
          caretColor: "#00ff00", // Replace with your desired color
        },
        ".caret-black": {
          caretColor: "#00000", // Replace with your desired color
        },

        // Add more color utilities as needed
      });
    },
  ],
};
