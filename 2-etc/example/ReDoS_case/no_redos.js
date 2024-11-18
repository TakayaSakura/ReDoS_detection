//正規表現の末尾に$が存在していないためすぐ終わる
let string = "abcdefghijklmnopqrstuvwxyzABC@";
let regex = /^(([a-zA-Z0-9])+)+/;
let pattern = new RegExp(regex);

console.log(pattern.test(string)); //true
