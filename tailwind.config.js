const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  // Ensures Tailwind includes Flowbite styles
  content: ["./src/**/*.{html,js,jsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        
        strongcyan: "hsl(172, 67%, 45%)",
        verydarkcyan: "hsl(183, 100%, 15%)",
        darkgrayishcyan: "hsl(186, 14%, 43%)",
        grayishcyan: "hsl(184, 14%, 56%)",
        lightgrayishcyan: "hsl(185, 41%, 84%)", 
        verylightgrayishcyan: "hsl(189, 41%, 97%)",
      },
   
    },
  },
  // Enables Flowbite’s custom UI components
  plugins: [flowbite.plugin()],
};
