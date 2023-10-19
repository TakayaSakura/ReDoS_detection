let blacklist = ["\\+\\)+", "\\|\\.\\)+", "\\."];
let target_regex = /(a+)+b/;

let result = blacklist.map(function (regex) {
  let pattern = new RegExp(regex); // 文字列を正規表現オブジェクトに変換
  return pattern.test(target_regex); // パターンがtarget_regexにマッチするか確認
});

console.log(result);
