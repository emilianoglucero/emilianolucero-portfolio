module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "custom-blue": "rgb(66, 168, 232)",
        "custom-pink": "rgb(253, 200, 246)",
      },
    },
    container: {
      center: true,
    },
    fontSize: {
      xs: "clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)",
      sm: "clamp(0.875rem, 0.8rem + 0.375vw, 1rem)",
      base: "clamp(1rem, 0.9rem + 0.5vw, 1.125rem)",
      lg: "clamp(1.125rem, 1rem + 0.625vw, 1.25rem)",
      xl: "clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)",
      "2xl": "clamp(1.5rem, 1.3rem + 1vw, 1.875rem)",
      "3xl": "clamp(1.875rem, 1.5rem + 1.875vw, 2.344rem)",
      "4xl": "clamp(2.344rem, 1.8rem + 2.72vw, 2.93rem)",
      "5xl": "clamp(2.93rem, 2.2rem + 3.65vw, 3.66rem)",
    },
    textColor: {
      "custom-blue": "rgb(66, 168, 232)",
      "custom-grey": "rgb(240, 240, 240)",
      "custom-pink": "rgb(253, 200, 246)",
      "custom-yellow": "rgb(239, 240, 51)",
    },
    backgroundColor: theme => ({
      ...theme("colors"),
      primary: "rgb(239, 240, 51)",
      secondary: "rgb(253, 200, 246)",
    }),
    fontFamily: {
      ft88: ["ft88", "sans-serif"],
      nb_international_pro: ["nb_international_pro", "sans-serif"],
    },
    gridTemplateColumns: {
      1: "repeat(1, minmax(0, 1fr))",
      2: "repeat(2, minmax(0, 1fr))",
      16: "repeat(16, minmax(0, 1fr))",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  safelist: [
    {
      pattern: /col-start-(\d+)/,
      variants: ["lg"],
    },
    {
      pattern: /col-span-(\d+)/,
      variants: ["lg"],
    },
    {
      pattern: /row-start-(\d+)/,
      variants: ["lg"],
    },
  ],
}
