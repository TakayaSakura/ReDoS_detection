let blacklist = ["\\+\\)\\+", "\\|\\.\\)+", "\\.\\+\\*\\.\\+", "\\+\\$"];
let target_regex = /a.+b.+c/;

let result = blacklist.map(function (regex) {
  let pattern = new RegExp(regex); // 文字列を正規表現オブジェクトに変換
  return pattern.test(target_regex); // パターンがtarget_regexにマッチするか確認
});

if (result.includes(true)) {
  console.log("ReDoS脆弱性のある正規表現です");
} else {
  console.log("ReDoSを引き起こす可能性の低い正規表現です");
}
