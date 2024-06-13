let blacklist = ["\\+\\)\\+", "\\|\\.\\)+", "\\.\\+\\*\\.\\+", "\\+\\$"];
let target_regex = /a.+b.+c/;

let result = blacklist.map(function (regex) {
  let pattern = new RegExp(regex);
  return pattern.test(target_regex);
});

if (result.includes(true)) {
  console.log("ReDoS脆弱性");
} else {
  console.log("ReDoS低い");
}
