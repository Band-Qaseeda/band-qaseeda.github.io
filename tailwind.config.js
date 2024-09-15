import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
 mode: "jit",
 content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
 theme: {
  colors: {
   /* Default */
   primary: "#ffffff" /* White */,
   accent: "#85144b" /* Maroon */,
   neutral: "#000000" /* Black */,

   /* Custom */
   transparent: "transparent",
   gray: colors.gray,
  },
  fontFamily: {
   sans: ["Inter", ...defaultTheme.fontFamily.sans] /* Default */,
   dosis: ["Dosis", ...defaultTheme.fontFamily.sans] /* Links */,
   dmserif: [
    "DM Serif Display",
    ...defaultTheme.fontFamily.serif,
   ] /* Heading */,
  },
 },
 plugins: [],
};
