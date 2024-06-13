//並列な量指定子(+)とネストした量指定子(+)に対応済み
//（）に複数の文字が含まれていた場合に対応済み
//二重以上の（）のネストに未対応
function makeAuto(input) {
  let arr = [];

  for (let i = 0; i < input.length; i++) {
    let currentChar = input[i];

    if (currentChar === "(") {
      let substring = "";
      i++;
      arr.push("(");
      while (input[i] !== ")" && i < input.length) {
        if (input[i] === "+") {
          arr.push(substring);
          arr.push("+");
          substring = "";
        } else {
          substring += input[i];
        }
        i++;
      }
      if (substring !== "") {
        arr.push(substring);
      }
      arr.push(")");
    } else {
      arr.push(currentChar);
    }
  }

  console.log(arr);
  return arr;
}

makeAuto("ab(cde+fg+)+hi");
makeAuto("a(b+)+");

// outputArray = [ab, cde, fg]
//                     +

// function Seito(_namae, _seiseki) {
//   this.namae = _namae;
//   this.seiseki = _seiseki;
// }
// var kumi = [];
// kumi[0] = new Seito("山田太郎", 95);
// kumi[1] = new Seito("田中一郎", 73);
// kumi[2] = new Seito("鈴木花子", 86);
// for (i = 0; i < kumi.length; i++) {
//   console.log(kumi[i].namae + "：" + kumi[i].seiseki + "点");
// }
