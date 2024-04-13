/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        'inner-xl': 'inset 0 0 4px 25% rgb(0, 0, 0)', //not working 
      },

      colors: {
        background: "hsl(var(--background))",
        primary: "hsl(var(--primary))",
        secondary: "--secondary",
        accent: "--accent",

        foreground: "hsla(var(--foreground))",
        btn: {
          background: "hsl(var(--btn-background))",
          "background-hover": "hsl(var(--btn-background-hover))",
        },
      },
    },
  },
  plugins: [],
};
