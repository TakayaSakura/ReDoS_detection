var resultArray = makeAuto("ab+");
function makeAuto(input) {
  let arr = [];

  for (let i = 0; i < input.length; i++) {
    let currentChar = input[i];

    if (currentChar === "(") {
      let substring = "";
      i++;
      while (input[i] !== ")" && i < input.length) {
        if (input[i] === "+") {
          arr.push(substring);
          arr.push("+");
          substring = "";
        } else {
          substring += input[i];
        }
        i++;
      }
      if (substring !== "") {
        arr.push(substring);
      }
    } else {
      arr.push(currentChar);
    }
  }
  console.log(arr);
  return arr;
}

var result =
  "class RegexAutomaton {\n  constructor() {\n    this.currentState = 0;\n  }\n\n  processInput(input) {\n    for (let i = 0; i < input.length; i++) {\n      i = this.transition(input[i], i, input);\n    }\n  }\n\n  transition(symbol, index, input) {\n    switch (this.currentState) {";

resultArray.forEach(function (element, index) {
  if (index < resultArray.length) {
    if (element == "+" && resultArray[index + 1] == "+") {
      //elementはresultArray[index]と同値
      result +=
        "\n\n      case " +
        index +
        ':\n        if (symbol === "' +
        resultArray[index - 1] +
        '") {\n          this.currentState = ' +
        index +
        ';\n          console.log("' +
        resultArray[index - 1] +
        '発見");\n        } else if (symbol === "' +
        resultArray[index - 1] +
        '") {\n          this.currentState = ' +
        (index + 1) +
        ';\n          console.log("' +
        resultArray[index - 1] +
        '発見");\n        } else if (symbol === "' +
        resultArray[0] +
        '") {\n          this.currentState = 1;\n          console.log("新たに' +
        resultArray[0] +
        '発見");\n        } else { \n          this.currentState = 0;\n          console.log("' +
        resultArray[index - 1] +
        'なかった");\n        }\n        break;';
    } else if (element == "+" && resultArray[index - 1] == "+") {
      result +=
        "\n\n      case " +
        index +
        ':\n        if (symbol === "' +
        resultArray[index - 2] +
        '") {\n          this.currentState = ' +
        index +
        ';\n          console.log("' +
        resultArray[index - 2] +
        '発見");\n        } else if (symbol === "' +
        resultArray[0] +
        '") {\n          this.currentState = 1;\n          console.log("新たに' +
        resultArray[0] +
        '発見");\n        } else { \n          this.currentState = 0;\n          console.log("' +
        resultArray[index - 2] +
        'なかった");\n        }\n        break;';
    } else if (element == "+") {
      result +=
        "\n\n      case " +
        (index - 1 + resultArray[index - 1].length) +
        ":\n        if (input.substring(index, index + " +
        resultArray[index - 1].length +
        ') === "' +
        resultArray[index - 1] +
        '") {\n          this.currentState = ' +
        (index + -1 + resultArray[index - 1].length) +
        ";\n          index += " +
        (resultArray[index - 1].length - 1) +
        ';\n          console.log("' +
        resultArray[index - 1] +
        '発見");\n        } else if (symbol === "' +
        resultArray[0] +
        '") {\n          this.currentState = 1;\n          console.log("新たに' +
        resultArray[0] +
        '発見");\n        } else { \n          this.currentState = 0;\n          console.log("' +
        resultArray[index - 1] +
        'なかった");\n        }\n        break;';
    } else if (resultArray[index + 1] == "+") {
      result +=
        "\n\n      case " +
        index +
        ":\n        if (input.substring(index, index + " +
        resultArray[index].length +
        ') === "' +
        resultArray[index] +
        '") {\n          this.currentState = ' +
        (index + resultArray[index].length) +
        ";\n          index += " +
        (resultArray[index].length - 1) +
        ';\n          console.log("' +
        resultArray[index] +
        '発見");\n        } else if (symbol === "' +
        resultArray[0] +
        '") {\n          this.currentState = 1;\n          console.log("新たに' +
        resultArray[0] +
        '発見");\n        } else { \n          this.currentState = 0;\n          console.log("' +
        resultArray[index] +
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
  '\n    }\n    return index;\n  }\n}\n\nconst RA = new RegexAutomaton();\nRA.processInput("");';

console.log(result);
