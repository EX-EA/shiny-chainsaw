const targetCalleeName = ["info", "log", "error", " debug"].map(
  (item) => `console.${item}`
);

module.exports = function ({ types, template }) {
  return {
    visitor: {
      CallExpression(path, state) {
        if (path.node.isNew) {
          return;
        }
      },
    },
  };
};
