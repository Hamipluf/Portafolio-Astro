/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
        'permanent': ['Sedgwick Ave Display', 'cursive'],
      },
    },
  },
  daisyui: {
    themes: [
      {
        cupcake: {
          ...require("daisyui/src/theming/themes")["cupcake"],
          "primary": "#027368",
          "secondary": "#04D9C4",
          "accent": "#F205B3",
          "neutral": "#F2B705",
          "base-100": "#F28705",
          ".base-text": {
            "color": "#0D0D0D",
          },
          ".secodary-text": {
            "color": "#D8D9D7",
          },
          ".hero-text": {
            "background-image":
            "linear-gradient(to bottom right, #027368 20%, #F205B3 30%, #04D9C4)",
            "font-family": "Permanent Marker, cursive"
          },
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          "primary": "#213140",
          "secondary": "#73A2BF",
          "accent": "#9AC7D9",
          "neutral": "#4A738C",
          "base-100": "#0A0B0D",
          ".base-text": {
            "color": "#F2F1EB",
          },
          ".secodary-text": {
            "color": "#A0A697",
          },
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
