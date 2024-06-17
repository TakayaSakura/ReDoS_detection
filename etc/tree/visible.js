const { parse } = require("regexp-tree");
const graphviz = require("graphviz"); // graphvizライブラリが必要です

// 解析したい正規表現
const regex = /a(b|c)*d/;

// 正規表現を解析して構文木を生成
const ast = parse(regex);

// 構文木をGraphvizの形式に変換して視覚化
const g = graphviz.digraph("G");

function addNode(parent, node) {
  const id = node.type + Math.random();
  const newNode = g.addNode(id, { label: node.type });
  if (parent) {
    g.addEdge(parent, newNode);
  }
  if (node.expressions) {
    node.expressions.forEach((child) => addNode(newNode, child));
  } else if (node.expression) {
    addNode(newNode, node.expression);
  }
}

addNode(null, ast.body);

// Graphvizのdot形式で出力
console.log(g.to_dot());
