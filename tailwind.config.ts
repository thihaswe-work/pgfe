import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: "0.688rem",
      sm: "0.812rem",
      base: "1rem",
      md: "1.188rem",
      lg: "1.438rem",
      xl: "1.750rem",
      "1xl": "2.062rem",
      "2xl": "2.500rem",
      "3xl": "3.000rem",
      "4xl": "5.5rem",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        textColor: "var(--textColor)",
        sectionColor: "var(--sectionColor)",
        secondBgColor: "var(--secondBgColor)",
      },
      screens: {
        "1xl": "1440px",
        "4xl": "2560px",
      },
    },
  },
  plugins: [],
} satisfies Config;
