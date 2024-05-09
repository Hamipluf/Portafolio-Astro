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
          "primary": "#F2F2F2",
          "secondary": "#F29E38",
          "accent": "#328C6B",
          "neutral": "#A64153",
          "base-100": "#733F2D",
          ".base-text": {
            "font-family": "Montserrat, sans-serif",
            "color": "#201f1e",
          },
          ".secondary-text": {
            "font-family": "Lato, sans-serif",
            "color": "#727374",
          },
          ".hero-text": {
            "background-image":
            "linear-gradient(to bottom right, #733F2D 20%, #F29E38 30%, #F2F2F2 )",
            "font-family": "Poetsen One, sans-serif"
          },
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          "primary": "#191919",
          "secondary": "#DDAC4B",
          "accent": "#A61D42",
          "neutral": "#4A738C",
          "base-100": "#363438",
          ".base-text": {
            "font-family": "Kanit , sans-serif",
            "color": "#F1F1F1",
          },
          ".secodary-text": {
            "font-family": "Josefin Sans , sans-serif",
          },
          ".hero-text": {
            "background-image":
            "linear-gradient(to bottom right, #363438 20%, #DDAC4B 30%, #191919 )",
            "font-family": "Poetsen One, sans-serif"
          },
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
