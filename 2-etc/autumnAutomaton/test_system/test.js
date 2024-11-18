const { patternmatching } = require("./summer_system");
const vulnerableRegex = [
  "(a+)+",
  "(a*)*",
  "(a+)*",
  "(a*)+",
  "(a|aa)+",
  "(a|aa)*",
  "(a|a?)+",
  "(a|a?)*",
];
const safeRegex = ["a+", "(a+)?", "(a?)+", "(a|aa)?"];

for (i = 0; i < vulnerableRegex.length; ++i) {
  if (patternmatching(vulnerableRegex[i]) == true) {
    console.log("正しい");
  } else {
    console.log("間違い");
  }
}

for (i = 0; i < safeRegex.length; i++) {
  if (patternmatching(safeRegex[i]) == false) {
    console.log("正しい");
  } else {
    console.log("間違い");
  }
}
