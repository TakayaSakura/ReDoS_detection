const { parse } = require("regexp-tree");

// 解析したい正規表現
const regex = /(a|b)*c/;

// 正規表現を解析して構文木を生成
const ast = parse(regex);

// 構文木を出力
console.log(JSON.stringify(ast, null, 2));
