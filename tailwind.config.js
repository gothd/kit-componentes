module.exports = {
  content: [], // vazio, para não depender de purge
  safelist: [{ pattern: /.*/ }], // gera todas as classes possíveis
  theme: {
    extend: {},
  },
  plugins: [
    require("@benface/tailwindcss-reset"),
  ],
}