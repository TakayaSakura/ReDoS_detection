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
    if (match[i] == match[i + 1]) {
      return true;
    }
  }
  return false;
}

const result = quesCount("a?a?a?b?aaab");
