/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        cupcake: {
          ...require("daisyui/src/theming/themes")["cupcake"],
          "primary": "#3CA69B",
          "secondary": "#D9D9D9",
          "accent": "#1C4039",
          "neutral": "#A6A6A6",
          "base-100": "#3CA692",   
          "base-text": "#0D0D0D"
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          "primary": "#213140",
          "secondary": "#73A2BF",
          "accent": "#9AC7D9",
          "neutral": "#4A738C",
          "base-100": "#0A0B0D",  
          "base-text":  '#F2F2F2'
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
