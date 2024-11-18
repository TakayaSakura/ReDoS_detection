let input = "ab(cde)+";
let outputArray = [];

for (let i = 0; i < input.length; i++) {
  let currentChar = input[i];

  if (currentChar === "(") {
    let substring = "";
    i++; // skip "("
    while (input[i] !== ")") {
      substring += input[i];
      i++;
    }
    outputArray.push(substring);
  } else {
    outputArray.push(currentChar);
  }
}

console.log(outputArray);
