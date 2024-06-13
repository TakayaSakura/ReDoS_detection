let blacklist = ["+)+", "|.)+", ".+"];

let target_regex = "/(a+)+b/";

let result = blacklist.map(function (target_regex) {
  return target_regex.includes(blacklist);
});
console.log(result); //[ false, false, false ]
