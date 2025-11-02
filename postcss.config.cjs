module.exports = {
  plugins: [
    require("@tailwindcss/postcss"),
    require("autoprefixer"),
    require("./postcss-flatten.cjs"),
  ],
};