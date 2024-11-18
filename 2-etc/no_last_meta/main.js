//課題点
//function quesStrJudgeにおいて//(ab)+などの終端が+の正規表現の繰り返しに対応不可
//（そもそもこれ((ab)+)の繰り返し正規表現が正規表現DoSを引き起こすのか調べる
function quesCount(regex) {
  let count = 0;

  for (let i = 0; i < regex.length; i++) {
    if (regex[i] === "?") {
      count++;
    }

    if (count >= 4) {
      const regex_m = /\?([^?]+)\?/g;
      const match = regex.match(regex_m);

      if (quesStrJudge(match)) {
        console.log("正規表現DoSが発生する可能性があります");
        return true;
      } else {
        console.log("正規表現DoSが発生する確率は低いです");
        return false;
      }
    }
  }

  console.log("正規表現DoSが発生する可能性は低いです");
  return false;
}

function quesStrJudge(match) {
  for (let i = 0; i < match.length - 1; i++) {
    let multipleRegex = match[i].split("");
    if (match[i] == match[i + 1] && match[i].length - 1 == 1) {
      return true;
    } else if (
      match[i] == match[i + 1] &&
      multipleRegex[1] == "(" &&
      multipleRegex[match[i].length - 2] == ")"
    ) {
      return true;
    }
  }
  return false;
}

// const result = quesCount("a?a?a?b?aaab");
// const result = quesCount("(ab)?(ab)?(ab)?(ab)?abababab");
const result = quesCount("ab?ab?ab?ab?abababab");
