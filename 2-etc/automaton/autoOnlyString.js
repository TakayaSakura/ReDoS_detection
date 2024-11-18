// 入力した正規表現の一番最初を分けて考えてしまってる（ChatGPTの辻褄合わせにより一応成立してるだけ）
// コピペ・参考にするの禁止！！
// 参考にしていいのはautoAddPlus.jsだけ（2024/2/2）

function makeAuto(str) {
  var arr = str.split("");
  return arr;
}

var resultArray = makeAuto("abcde");
var result =
  'class RegexAutomaton {\n  constructor() {\n    this.currentState = 0\n  }\n\n  processInput(input) {\n    for (const symbol of input) {\n      this.transition(symbol);\n    }\n  }\n\n  transition(symbol) {\n    switch (this.currentState) {\n      case 0:\n        if (symbol === "' +
  resultArray[0] +
  '" ) {\n          this.currentState = 1;\n          console.log("' +
  resultArray[0] +
  '発見");\n        } else {\n          this.currentState = 0;\n          console.log("' +
  resultArray[0] +
  'なかった");\n        }\n        break;';

resultArray.forEach(function (element, index) {
  if (index < resultArray.length - 1) {
    result +=
      "\n\n      case " +
      (index + 1) +
      ':\n        if (symbol === "' +
      resultArray[index + 1] +
      '") {\n          this.currentState = ' +
      (index + 2) +
      ';\n          console.log("' +
      resultArray[index + 1] +
      '発見");\n        } else if (symbol === "' +
      resultArray[0] +
      '") {\n          this.currentState = 1;\n          console.log("新たに' +
      resultArray[0] +
      '発見");\n        } else { \n          this.currentState = 0;\n          console.log("' +
      resultArray[index + 1] +
      'なかった");\n        }\n        break;';
  }
});

result +=
  '\n    }\n  }\n}\n\nconst RA = new RegexAutomaton();\nRA.processInput("");';

console.log(result);
