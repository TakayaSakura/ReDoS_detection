const regexpTree = require("regexp-tree");

function analyzeRegex(pattern) {
  const ast = regexpTree.parse(pattern);

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

const pattern = "(a+)*b";
analyzeRegex(pattern);
