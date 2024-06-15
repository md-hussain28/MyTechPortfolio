/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}","index.html"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
      },
      fontFamily: {
        Oswald: ["Oswald", "sans serif"],
        Inter: ["Inter"],
        Poppins: ["Poppins"],
      },
      backgroundImage: {
        heroLight:
          "url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')",
        heroDark:
          "url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')",
      },
      colors: {
        primary: "#b033fd",
      },
    },
    },
  plugins: [],
}

