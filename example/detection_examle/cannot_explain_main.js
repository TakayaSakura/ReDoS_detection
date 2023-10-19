let blacklist = ["+)+", "|.)+", ".+"];

let target_regex = "/(a+)+b/";

console.log(target_regex.includes(blacklist));
