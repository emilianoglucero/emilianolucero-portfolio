module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "custom-blue": "rgb(66, 168, 232)",
        "custom-pink": "rgb(253, 200, 246)",
        "custom-yellow": "rgb(255, 214, 10)",
        "custom-orange": "#ff4d00",
        "custom-grey": "rgb(240, 240, 240)",
        "custom-black": "rgb(6, 8, 7)",
        "custom-purple": "rgb(175, 159, 212)",
        "custom-light-green": "rgb(225, 244, 123)",
      },
    },
    container: {
      center: true,
    },
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1rem" }],
      sm: ["0.875rem", { lineHeight: "1.25rem" }],
      base: ["1rem", { lineHeight: "1.5rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["1.25rem", { lineHeight: "1.75rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
      "5xl": ["3rem", { lineHeight: "1" }],
    },
    textColor: {
      "custom-blue": "rgb(66, 168, 232)",
      "custom-grey": "rgb(240, 240, 240)",
      "custom-pink": "rgb(253, 200, 246)",
      "custom-yellow": "rgb(239, 240, 51)",
      "pallete-violet": "#614c8d",
      "custom-black": "rgb(6, 8, 7)",
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
