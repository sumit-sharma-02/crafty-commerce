/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      arvo: ["Arvo", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-google": `linear-gradient(180deg, rgb(50, 107, 200), rgb(52, 168, 83), rgb(102, 75, 0), rgb(210, 87, 75))`,
      },
      keyframes: {
        bounce: {
          "0%, 100%": {
            transform: "translateY(-25%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
      animation: {
        bounce: "bounce 1s ease-in-out infinite",
      },
      width: {
        150: "150px",
        190: "190px",
        225: "225px",
        275: "275px",
        300: "300px",
        340: "340px",
        350: "350px",
        375: "375px",
        460: "460px",
        656: "656px",
        880: "880px",
        508: "508px",
      },
      height: {
        80: "80px",
        150: "150px",
        225: "225px",
        300: "300px",
        340: "340px",
        370: "370px",
        420: "420px",
        510: "510px",
        600: "600px",
        650: "650px",
        685: "685px",
        800: "800px",
        "90vh": "90vh",
      },
      minWidth: {
        210: "210px",
        350: "350px",
        620: "620px",
      },
      screens: {
        xsm: "375px",
        "2xs": "320px",
        // md: "768px",
        // lg: "1024px",
        // xl: "1440px",
        // "2xl": "2560px",
      },
      colors: {
        primary: "rgb(224,39,70,1)",
        primaryDarkShade: "rgb(177,5,34,1)",
        secondary: "rgb(14,205,224,1)",
        ternary: "rgb(255,165,0,1)",
        fournary: "#03a685",
        backdropBlur: "rgb(119 119 119 / 27%)",
        facebook: "#1877f2",
        twitter: "rgb(29, 155, 240)",
        instagram:
          "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
        pinterest: "#c00",
        youtube: "rgb(255, 0, 0)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("@tailwindcss/line-clamp")],
};
