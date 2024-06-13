class RegexAutomaton {
  constructor() {
    this.currentState = 0;
  }

  processInput(input) {
    for (const symbol of input) {
      this.transition(symbol);
    }
  }

  transition(symbol) {
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
        if (symbol === "b") {
          this.currentState = 2;
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
        if (symbol === "c") {
          this.currentState = 3;
          console.log("c発見");
        } else if (symbol === "a") {
          this.currentState = 1;
          console.log("新たにa発見");
        } else {
          this.currentState = 0;
          console.log("cなかった");
        }
        break;

      case 3:
        if (symbol === "d") {
          this.currentState = 4;
          console.log("d発見");
        } else if (symbol === "a") {
          this.currentState = 1;
          console.log("新たにa発見");
        } else {
          this.currentState = 0;
          console.log("dなかった");
        }
        break;

      case 4:
        if (symbol === "e") {
          this.currentState = 5;
          console.log("e発見");
        } else if (symbol === "a") {
          this.currentState = 1;
          console.log("新たにa発見");
        } else {
          this.currentState = 0;
          console.log("eなかった");
        }
        break;

      case 5:
        if (symbol === "e") {
          this.currentState = 5;
          console.log("e発見");
        } else if (symbol === "a") {
          this.currentState = 1;
          console.log("新たにa発見");
        } else {
          this.currentState = 0;
          console.log("eなかった");
        }
        break;
    }
  }
}

const RA = new RegexAutomaton();
RA.processInput("abababcdeeeeebabba");
