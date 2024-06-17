class State {
  constructor(isAccept = false) {
    this.isAccept = isAccept;
    this.transitions = {};
  }

  addTransition(symbol, state) {
    if (!this.transitions[symbol]) {
      this.transitions[symbol] = [];
    }
    this.transitions[symbol].push(state);
  }
}

class NFA {
  constructor(start, accept) {
    this.start = start;
    this.accept = accept;
  }

  static concatenate(nfa1, nfa2) {
    nfa1.accept.isAccept = false;
    nfa1.accept.addTransition("ε", nfa2.start);
    return new NFA(nfa1.start, nfa2.accept);
  }

  static kleeneStar(nfa) {
    const start = new State();
    const accept = new State(true);

    start.addTransition("ε", nfa.start);
    start.addTransition("ε", accept);

    nfa.accept.isAccept = false;
    nfa.accept.addTransition("ε", nfa.start);
    nfa.accept.addTransition("ε", accept);

    return new NFA(start, accept);
  }
}

const aStart = new State();
const aAccept = new State(true);
aStart.addTransition("a", aAccept);
const aNFA = new NFA(aStart, aAccept);

const bStart = new State();
const bAccept = new State(true);
bStart.addTransition("b", bAccept);
const bNFA = new NFA(bStart, bAccept);

const abNFA = NFA.concatenate(aNFA, bNFA);

const abStarNFA = NFA.kleeneStar(abNFA);

console.log(abStarNFA);
