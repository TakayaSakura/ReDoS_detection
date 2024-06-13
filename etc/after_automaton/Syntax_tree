class Node {
  constructor(op, left = null, right = null, char = null) {
    this.op = op;
    this.char = char;
    this.left = left;
    this.right = right;
  }
}

class SyntaxTree {
  constructor(regex, debug = false) {
    this.regex = regex.split("");
    this.currentToken = null;
    this.tree = null;
    this.debug = debug;
  }

  getToken() {
    if (this.regex.length === 0) {
      this.currentToken = "end";
      return;
    }
    const c = this.regex.shift();
    if (c === "|") {
      this.currentToken = "union";
    } else if (c === "(") {
      this.currentToken = "lpar";
    } else if (c === ")") {
      this.currentToken = "rpar";
    } else if (c === "*") {
      this.currentToken = "star";
    } else if (c === "+") {
      this.currentToken = "plus";
    } else {
      this.currentToken = "char";
      this.tokenChar = c;
    }
  }

  makeNode(op, left, right) {
    return new Node(op, left, right);
  }

  makeAtom(c) {
    return new Node("char", null, null, c);
  }

  primary() {
    let x;
    if (this.currentToken === "char") {
      x = this.makeAtom(this.tokenChar);
      this.getToken();
    } else if (this.currentToken === "lpar") {
      this.getToken();
      x = this.parseRegex();
      if (this.currentToken !== "rpar") {
        this.syntaxError("Close paren is expected.");
      }
      this.getToken();
    } else {
      this.syntaxError("Normal character or open paren is expected.");
    }
    return x;
  }

  factor() {
    let x = this.primary();
    if (this.currentToken === "star") {
      x = this.makeNode("closure", x, null);
      this.getToken();
    } else if (this.currentToken === "plus") {
      x = this.makeNode("concat", x, this.makeNode("closure", x, null));
      this.getToken();
    }
    return x;
  }

  term() {
    let x;
    if (["union", "rpar", "end"].includes(this.currentToken)) {
      x = this.makeNode("empty");
    } else {
      x = this.factor();
      while (!["union", "rpar", "end"].includes(this.currentToken)) {
        x = this.makeNode("concat", x, this.factor());
      }
    }
    return x;
  }

  parseRegex() {
    const x = this.term();
    while (this.currentToken === "union") {
      this.getToken();
      x = this.makeNode("union", x, this.term());
    }
    return x;
  }

  makeTree() {
    this.getToken();
    this.tree = this.parseRegex();
    if (this.currentToken !== "end") {
      console.log("Extra character at end of pattern.");
      process.exit(1);
    }
    if (this.debug) {
      console.log("------ Syntax Tree ------");
      this.dumpTree(this.tree);
      console.log();
    }
    return this.tree;
  }

  dumpTree(tree) {
    const op = tree.op;
    if (op === "char") {
      process.stdout.write(`'${tree.char}`);
    } else if (op === "concat") {
      process.stdout.write("(concat ");
      this.dumpTree(tree.left);
      process.stdout.write(" ");
      this.dumpTree(tree.right);
      process.stdout.write(")");
    } else if (op === "union") {
      process.stdout.write("(or ");
      this.dumpTree(tree.left);
      process.stdout.write(" ");
      this.dumpTree(tree.right);
      process.stdout.write(")");
    } else if (op === "closure") {
      process.stdout.write("(closure ");
      this.dumpTree(tree.left);
      process.stdout.write(")");
    } else if (op === "empty") {
      process.stdout.write("Empty");
    } else {
      console.log("This cannot happen.");
      process.exit(1);
    }
  }
}

const r = new SyntaxTree("a(a|b)*a", true);
r.makeTree();
