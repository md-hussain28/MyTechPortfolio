/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}", "index.html"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem', // Add padding to ensure centered content has some breathing room
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
      },
      fontFamily: {
        Oswald: ["Oswald", "sans-serif"], // Corrected "sans serif" to "sans-serif"
        Inter: ["Inter", "sans-serif"], // Added fallback font
        Poppins: ["Poppins", "sans-serif"], // Added fallback font
      },
      backgroundImage: {
       
      },
      colors: {
        primary: "#b033fd",
      },
    },
  },
  plugins: [],
}

