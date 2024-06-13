//並列な量指定子(+)とネストした量指定子(+)に未対応
//（）に複数の文字が含まれていた場合に未対応
//二重以上の（）のネストに未対応

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
          console.log("発見できなかった");
        }
        break;

      case 1:
        if (symbol === "b") {
          this.currentState = 1;
          console.log("b発見");
        } else if (symbol === "b") {
          this.currentState = 2;
          console.log("b発見");
        } else if (symbol === "a") {
          this.currentState = 1;
          console.log("新たにa発見");
        } else {
          this.currentState = 0;
          console.log("発見できなかった");
        }
        break;

      case 2:
        if (symbol === "b") {
          this.currentState = 1;
          console.log("b発見");
        } else if (symbol === "b") {
          this.currentState = 2;
          console.log("b発見");
        } else if (symbol === "a") {
          this.currentState = 1;
          console.log("a発見");
        } else {
          this.currentState = 0;
          console.log("発見できなかった");
        }
        break;
    }
  }
}

const RA = new RegexAutomaton();
RA.processInput("abcde");
