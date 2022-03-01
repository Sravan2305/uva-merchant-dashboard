const pxValues = {};
for (let i = 0; i < 1500; i++) {
  // pxValues[`${i}px`] = `${i}px`;
}

module.exports = {
  mode: "jit",
  // purge: [
  //   "./pages/**/*.{ts,tsx}",
  //   "./components/**/*.{ts,tsx}",
  // ],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      s: { max: "1023px" },
      xl: "1024px",
    },
    extend: {
      colors: {
        primary: "#FF3D00",
        success: "#22B65D",
        error: "#22B65D",
        "sidebar-blue": "#DFEAF2",
        "text-grey": "#6C7880",
        "navbar-background": "rgba(255, 255, 255, 0.2);",
        "profile-text": "#1C3A4D",
      },
      boxShadow: {
        "card-box-shadow": "2px 2px 10px rgba(0, 0, 0, 0.1)",
      },
      width: {
        ...pxValues,
      },
      height: {
        ...pxValues,
      },
      maxWidth: {
        ...pxValues,
      },
      maxHeight: {
        ...pxValues,
      },
    },
  },
  plugins: [],
};
