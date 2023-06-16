/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{html,js,jsx}"],
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        xsm: "445px",
        sm: "665px",
        md: "768px",
        lg: "1024px",
        xl: "1285px",
        "2xl": "1536px",
      },
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        md: "2rem",
        lg: "13rem",
        xl: "15rem",
        "2xl": "22rem",
      },
    },
    fontSize: {
      sm: "14px",
      md: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "24",
      "3xl": "30px",
    },
  },
  plugins: [],
};
