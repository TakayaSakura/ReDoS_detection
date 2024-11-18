function convertString(str) {
  let result = "";

  let numbers = str.match(/\d+/g);
  let difference = 0;
  let num1 = 0;

  if (numbers) {
    num1 = parseInt(numbers[0]);
    let num2 = parseInt(numbers[1]);

    difference = num2 - num1;

    if (str[2] !== "0") {
      let newValue = difference;
      let replacement = str.replace(numbers[1], newValue.toString());
      result = replacement.replace(numbers[0], "0");
    } else {
      result = str;
    }
  } else {
    result = str;
  }

  for (let i = 0; i < num1; i++) {
    result = "a" + result;
  }

  return result;
}

console.log(convertString("a{4,6}")); //aaaaa{0,2}
console.log(convertString("a{10,30}")); //aaaaaaaaaaa{0,20}
