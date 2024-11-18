const { parse } = require("regexp-tree");

function patternmatching(regex, patterns) {
  for (let i = 0; i < patterns.length; i++) {
    if (regex.includes(patterns[i])) {
      return true;
    }
  }
  return false;
}

function searchEDA(regex) {
  const regexObj = new RegExp(regex);
  const invisibleAst = parse(regexObj);
  const ast = JSON.stringify(invisibleAst, null, 2);
  const quantifierRegex = /"type": "Quantifier"/g;
  const matches = ast.match(quantifierRegex);

  return matches && matches.length >= 2;
}

module.exports = {
  patternmatching,
  searchEDA,
};
