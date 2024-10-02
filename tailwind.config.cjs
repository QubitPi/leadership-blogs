/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,mjs}"],
  darkMode: "class", // allows toggling dark mode manually
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif", ...defaultTheme.fontFamily.sans],
        Poppins: ["Poppins", "sans-serif", ...defaultTheme.fontFamily.sans],
        WalbaumFraktur: ["WalbaumFraktur"],
        SweynheimPannartz: ["SweynheimPannartz", "SweynheimPannartz", "SweynheimPannartz"],
        PangZhonghuaXingKai: ["PangZhonghuaXingKai"],
        DXRedMailboxBold: ["DXRedMailboxBold", "DXRedMailboxBold", "DXRedMailboxBold"],
        Porson: ["Porson"],
        USDeclaration: ["USDeclaration", "sans-serif", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
