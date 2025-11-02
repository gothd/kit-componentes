// postcss-flatten.js
module.exports = () => ({
  postcssPlugin: "postcss-flatten",
  AtRule: {
    layer: (atRule) => {
      atRule.replaceWith(atRule.nodes);
    },
    property: (atRule) => {
      atRule.remove();
    },
    theme: (atRule) => {
      atRule.replaceWith(atRule.nodes);
    },
    plugin: (atRule) => {
      atRule.replaceWith(atRule.nodes);
    },
    supports: (atRule) => {
      // remove o wrapper e mantém o conteúdo
      atRule.replaceWith(atRule.nodes);
    },
  },
});
module.exports.postcss = true;
