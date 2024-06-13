//未完成　削除していい

function splitArray(InputRegex) {
  let RegexArray = InputRegex.split("");
  return RegexArray;
}

RegexArray = splitArray("ABCDE");
RegexArray.forEach(function (index, symbol) {
  console.log(symbol);
});

class RegexAutomaton {
  constructor() {
    this.currentState = "start";
  }

  processInput(RegexArray) {
    // for (const symbol of RegexArray) {
    //   this.transition(symbol);
    //   console.log(symbol);
    // }
  }

  // transition(symbol) {
  //     switch (this.currentState) {
  //         case "start":
  //             if (symbol)
  //     }
  // }
}
RegexArray[0];
