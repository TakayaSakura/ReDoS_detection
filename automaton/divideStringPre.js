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

makeAuto("ab(cde)+");
