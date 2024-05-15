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
          ".name_title": {
            "color": "transparent",
            "padding":" 0 5px",
            "text-transform": "uppercase",
            "-webkit-text-stroke":" 1px #201f1e",
            "text-stroke": "1px #201f1e",
          }
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          "primary": "#0f0f0f",
          "secondary": "#7046f3",
          "accent": "#f1f1f3",
          "neutral": "#edecf1",
          "base-100": "#e6e5e8",
          ".base-text": {
            "color": "#101010",
          },
          ".secodary-text": {
            "font-family": "Josefin Sans , sans-serif",
          },
          ".hero-text": {
            "background-image":
            "linear-gradient(to bottom right, #363438 20%, #DDAC4B 30%, #191919 )",
            "font-family": "Poetsen One, sans-serif"
          },
          ".hero-text": {
            "background-image":
            "linear-gradient(to bottom right, #e6e5e8 20%, #7046f3 30%, #0f0f0f )",
            "font-family": "PT Mono, monospace"
          },
          ".name_title": {
            "color": "transparent",
            "padding":" 0 5px",
            "text-transform": "uppercase",
            "-webkit-text-stroke":" 0.5px #f1f1f3",
            "text-stroke": "0.5px #f1f1f3",
          }
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
