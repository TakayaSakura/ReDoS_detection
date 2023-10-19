//let blacklist = "";

//  /^(([a-zA-Z0-9])+)+$/

let string = "abcdefghhhhhhhhhhhhhhhhifdfidsjj@";
let regex = /(([a-zA-Z0-9])+)+/;
let pattern = new RegExp(regex);

console.log(pattern.test(string));
