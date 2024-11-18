let regex = /^(([a-zA-Z0-9])+)+$/;
let testInput = "abcdefghijklmnopqrstuvwxyzAB@";

let pattern = new RegExp(regex);

function detectReDoS(input) {
  // let isTimeout = false;

  // setTimeout(() => {
  //   isTimeout = true;
  // }, 10000);

  const startTime = Date.now();

  pattern.test(input);

  const endTime = Date.now();

  const processTime = endTime - startTime;

  // console.log(processTime);

  if (processTime > 10000) {
    console.log("ReDoS脆弱性を検出しました" + processTime / 1000 + "秒");
  } else {
    console.log(
      "ReDoS脆弱性は検出されませんでした" + processTime / 1000 + "秒"
    );
  }
}

detectReDoS(testInput);
