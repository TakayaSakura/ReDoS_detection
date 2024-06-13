class RegexAutomaton {
  constructor() {
    this.currentState = 0;
  }

  processInput(input) {
    for (let i = 0; i < input.length; i++) {
      i = this.transition(input[i], i, input);
    }
  }

  transition(symbol, index, input) {
    switch (this.currentState) {
      case 0:
        if (symbol === "a") {
          this.currentState = 1;
          console.log("a発見");
        } else if (symbol === "a") {
          this.currentState = 1;
          console.log("新たにa発見");
        } else {
          this.currentState = 0;
          console.log("aなかった");
        }
        break;

      case 1:
        if (input.substring(index, index + 1) === "b") {
          this.currentState = 2;
          index += 0;
          console.log("b発見");
        } else if (symbol === "a") {
          this.currentState = 1;
          console.log("新たにa発見");
        } else {
          this.currentState = 0;
          console.log("bなかった");
        }
        break;

      case 2:
        if (symbol === "b") {
          this.currentState = 2;
          console.log("b発見");
        } else if (symbol === "b") {
          this.currentState = 3;
          console.log("b発見");
        } else if (symbol === "a") {
          this.currentState = 1;
          console.log("新たにa発見");
        } else {
          this.currentState = 0;
          console.log("bなかった");
        }
        break;

      case 3:
        if (symbol === "b") {
          this.currentState = 3;
          console.log("b発見");
        } else if (symbol === "a") {
          this.currentState = 1;
          console.log("新たにa発見");
        } else {
          this.currentState = 0;
          console.log("bなかった");
        }
        break;
    }
    return index;
  }
}

const RA = new RegexAutomaton();
RA.processInput("");
