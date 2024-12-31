import scrollbar from "tailwind-scrollbar"; //Tailwind scollbar.

import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#FF80B4",
        secondary: "#0B4B2C",
        accent: "#FF80B4",
        Gold: "#FDCB15",
        Gray700: "#AAAAAA",
        black: "#000000",
        Gray100: "#F2F2F2",
        Gray300: "#D8D8D8",
        Gray800: "#373737",
        Gray200: "#E4E4E4",
        Gray750: "#666666",
        "Selected-Option": "#F6F6F6",
        Background: "#FDFAF7",
      },
    },
  },
  plugins: [scrollbar],
  variants: {
    scrollbar: ["rounded"],
  },
} satisfies Config;