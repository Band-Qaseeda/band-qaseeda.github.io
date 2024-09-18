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
   accent: "#840000" /* Maroon */,
   neutral: "#000000" /* Black */,

   grayish: "#0D0D0D",

   /* Custom */
   transparent: "transparent",
   gray: colors.gray,
  },
  fontFamily: {
   sans: ["Poppins", ...defaultTheme.fontFamily.sans] /* Default */,
   dmserif: [
    "DM Serif Display",
    ...defaultTheme.fontFamily.serif,
   ] /* Heading */,
  },
 },
 plugins: [],
};
