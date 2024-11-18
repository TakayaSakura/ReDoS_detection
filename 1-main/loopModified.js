//課題点ある
//課題点：(ab(c?))?*bbbbという正規表現があったら26~34行目の処理で、
//空配列の中の(とか?に反応してしまって正しく処理できないから修正しようね。
//abc*bbbbとかc*bbbbのように、安易にこの正規表現に修正していいのか考えようね。
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

let inputString = "(((c?)*)?)*";

let result = splitString(inputString);

// console.log(result); //[ '(a?)*', 'bbbb' ]

resultString = result[0].split("");

// これは0617活動報告（複数文字の空ループに対応）
let loopStartString = resultString.indexOf("(") + 1;
let loopEndString = resultString.indexOf("?");
let loopStringArray = [];
for (let i = loopStartString; i < loopEndString; i++) {
  loopStringArray.push(resultString[i]);
}

let loopString = loopStringArray.join("");

let BeforeQuestionRegex = loopString + "*";
let ModifiedRegex = BeforeQuestionRegex + result[1];
console.log(ModifiedRegex);
//ここまで

//これは0603活動報告（一文字の空ループに対応）報告書書いたらこのコードコメントアウトする
let beforeQuestion = result[0].indexOf("?");
let oneBeforeQuestionRegex =
  result[0].substring(beforeQuestion - 1, beforeQuestion) + "*";
let oneModifiedRegex = oneBeforeQuestionRegex + result[1];
console.log(oneModifiedRegex);
//ここまで

let empty;
let regexWithoutEmpty;

for (let i = 0; i < result.length; i++) {
  if (result[i] && result[i].includes("*") && result[i].includes("?")) {
    empty = result[i];
  } else {
    regexWithoutEmpty = result[i];
  }
}

console.log(empty); // (a?)*
console.log(regexWithoutEmpty); // bbbb
