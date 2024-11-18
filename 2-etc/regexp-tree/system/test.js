var regexpTree = require("regexp-tree");
function analyzeRegex(pattern) {
  var ast = regexpTree.parse(pattern);
  function checkNestedRepetition(path) {
    if (
      path.node.type === "Repetition" &&
      path.node.expression.type === "Repetition"
    ) {
      console.log("量指定子のネストを検知しました");
      path.stop();
    }
  }
  regexpTree.traverse(ast, {
    Repetition: checkNestedRepetition,
  });
  return 0;
}
var pattern = "(a*)*";
analyzeRegex(pattern);
