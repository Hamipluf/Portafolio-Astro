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
            "color": "#9898A0",
          },
          ".avatar-image": {
            'background-image': 'url("/assets/perfil-color.jpeg")',
            'background-repeat': 'no-repeat',
            'background-position': 'center',
            'background-size': 'contain',
          },
          ".secondary-text": {
            "font-family": "Lato, sans-serif",
            "color": "#727374",
          },
          ".profile-image": {
            'background-image': 'url("/assets/perfil-color.jpeg")',
            'background-position': '50% 20%',
            'background-repeat': 'no-repeat',
            'background-size': 'cover',
            'border-radius': '1%',
            'box-shadow': '-10px 15px 27px -12px rgb(242,158,56)'
          },
          ".hero-text": {
            "background-image":
              "linear-gradient(to bottom right, #733F2D 20%, #F29E38 30%, #F2F2F2 )",
            "font-family": "Poetsen One, sans-serif"
          },
          ".name_title": {
            "color": "transparent",
            "padding": " 0 5px",
            "text-transform": "uppercase",
            "-webkit-text-stroke": " 1px #201f1e",
            "text-stroke": "1px #201f1e",
          },
        },
      },
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          "primary": "#0f0f0f",
          "secondary": "#7046f3",
          "accent": "#f1f1f3",
          "neutral": "#edecf1",
          "base-100": "#e6e5e8",
          ".avatar-image": {
            'background-image': 'url("/assets/perfil-gris.jpeg")',
            'background-repeat': 'no-repeat',
            'background-size': 'contain',
            'background-position': "center"
          },
          ".base-text": {
            "color": "#9898A0",
          },
          ".secondary-text": {
            "font-family": "Josefin Sans, sans-serif",
          },
          ".hero-text": {
            'background-image':
              "linear-gradient(to bottom right, #e6e5e8 20%, #7046f3 30%, #0f0f0f )",
            "font-family": "PT Mono, monospace"
          },
          ".profile-image": {
            'background-image': 'url("/assets/perfil-gris.jpeg")',
            'background-position': '50% 20%',
            'background-size': 'cover',
            'border-radius': '1%',
            'box-shadow': '-10px 15px 5px 0px rgba(255,255,255,1)'
          },
          ".name_title": {
            "color": "transparent",
            "padding": " 0 5px",
            "text-transform": "uppercase",
            "-webkit-text-stroke": " 0.5px #f1f1f3",
            "text-stroke": "0.5px #f1f1f3",
          },
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
