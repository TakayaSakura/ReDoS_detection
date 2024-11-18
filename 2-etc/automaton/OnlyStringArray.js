class RegexAutomaton {
  constructor() {
    this.currentState = 0;
  }
}

function splitArray(InputRegex) {
  let RegexArray = InputRegex.split("");
  return RegexArray;
}

RegexArray = splitArray("ABCDE");
RegexArray.forEach((symbol, index) => {
    makeAutomaton(symbol,index);
})

function makeAutomaton(symbol,index){
    transition(symbol) {
        switch (this.currentState){
            case 0:
                if (symbol === "A") {
                    this.currentState = 1
                } else {
                    this.currentState = 0
                }
                break;
            
            case 1:
                if (symbol === "B") {
                    this.currentState = 2
                } else {
                    this.currentState = 0
                }
        }
    }
}

//   processInput(RegexArray) {
//     // for (const symbol of RegexArray) {
//     //   this.transition(symbol);
//     //   console.log(symbol);
//     // }
//   }

//   // transition(symbol) {
//   //     switch (this.currentState) {
//   //         case "start":
//   //             if (symbol)
//   //     }
//   // }
// }
// RegexArray[0];
