function makeAuto(str) {
  var arr = str.split("");
  return arr;
}

var resultArray = makeAuto("abcde+");
var result =
  "class RegexAutomaton {\n  constructor() {\n    this.currentState = 0\n  }\n\n  processInput(input) {\n    for (const symbol of input) {\n      this.transition(symbol);\n    }\n  }\n\n  transition(symbol) {\n    switch (this.currentState) {";

resultArray.forEach(function (element, index) {
  if (index < resultArray.length) {
    if (element == "+") {
      result +=
        "\n\ncase " +
        index +
        ':\n        if (symbol === "' +
        resultArray[index - 1] +
        '") {\n          this.currentState = ' +
        index +
        ';\n          console.log("' +
        resultArray[index - 1] +
        '発見");\n        } else if (symbol === "' +
        resultArray[0] +
        '") {\n          this.currentState = 1;\n          console.log("新たに' +
        resultArray[0] +
        '発見");\n        } else { \n          this.currentState = 0;\n          console.log("' +
        resultArray[index - 1] +
        'なかった");\n        }\n        break;';
    } else {
      result +=
        "\n\n      case " +
        index +
        ':\n        if (symbol === "' +
        resultArray[index] +
        '") {\n          this.currentState = ' +
        (index + 1) +
        ';\n          console.log("' +
        resultArray[index] +
        '発見");\n        } else if (symbol === "' +
        resultArray[0] +
        '") {\n          this.currentState = 1;\n          console.log("新たに' +
        resultArray[0] +
        '発見");\n        } else { \n          this.currentState = 0;\n          console.log("' +
        resultArray[index] +
        'なかった");\n        }\n        break;';
    }
  }
});

result +=
  '\n    }\n  }\n}\n\nconst RA = new RegexAutomaton();\nRA.processInput("");';

console.log(result);
