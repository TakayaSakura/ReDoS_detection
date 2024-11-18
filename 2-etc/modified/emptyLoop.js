function splitString(inputString) {
  let pattern = /\?\)\*/;
  let index = inputString.indexOf("*");

  if (index !== -1 && pattern.test(inputString)) {
    let part1 = inputString.slice(0, index + 1);
    let part2 = inputString.slice(index + 1);
    return [part1, part2];
  } else {
    return ["'?)*'が見つかりませんでした。", null];
  }
}

let inputString = "(a?)*bbbb";

let result = splitString(inputString);

console.log(result); //[ '(a?)*', 'bbbb' ]
