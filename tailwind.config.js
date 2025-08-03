const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        prata: ["Prata", "serif"],
        outfit: ["Outfit", "sans-serif"],
        allerta: ["Allerta Stencil", "sans-serif"], // Added Allerta Stencil for completeness
      },
    },
  },
  plugins: [],
});
