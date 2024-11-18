/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JS, JSX, TS, TSX files in the src directory
  ],
  theme: {
    extend: {
      colors: {
        orangeRed: "#FF4545",
        muteOrange: "#FBD288",
        gradientYellow: "#FCF596",
      },
    },
  },
  plugins: [],
};
