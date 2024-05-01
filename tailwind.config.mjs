/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "obscure": "#1d232a"
        },
      },
      "cupcake",
      "dark",
    ],
  },
  plugins: [require("daisyui")],
};
