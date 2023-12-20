import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#D1D5DB",
        tertiary: '#6B7280',
        // accent: "#C084FC",
        accent: "#6B72FA",
        dark: "#202938",
        light: "#FFFFFF",
        // You can add more colors as needed
      },
    },
  },
  plugins: [],
};
export default config;
