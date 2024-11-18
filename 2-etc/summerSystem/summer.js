const { parse } = require("regexp-tree");
// const r_example = "(a+)+";

function patternmatching(regex) {
  const p_example = [
    "+)+",
    "*)*",
    "+)*",
    "*)+",
    "|aa)+",
    "|aa)*",
    "(a|a?)+",
    "(a|a?)*",
  ];
  for (let i = 0; i < p_example.length; i++) {
    if (regex.includes(p_example[i])) {
      return true;
    }
  }
  return false;
}

// const result1 = patternmatching(r_example, p_example);

// if (result1) {
//   const result2 = searchEDA(r_example);
//   if (result2) {
//     console.log("OUT");
//   } else {
//     console.log("SAFE");
//   }
// } else {
//   console.log("SAFE");
// }

function searchEDA(regex) {
  const regexObj = new RegExp(regex);
  const invisibleAst = parse(regexObj);
  const ast = JSON.stringify(invisibleAst, null, 2);
  const quantifierRegex = /"type": "Quantifier"/g;
  const matches = ast.match(quantifierRegex);

  return matches && matches.length >= 2;
}

module.exports = patternmatching;
