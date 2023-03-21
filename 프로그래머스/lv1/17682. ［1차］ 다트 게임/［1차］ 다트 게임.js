function solution(dartResult) {
  const answerArr = [0, 0, 0];
  let round = -1;

  for (let i = 0; i < dartResult.length; i++) {
    if (!Number.isNaN(Number(dartResult[i]))) {
      if (Number(dartResult[i]) === 0 && answerArr[round] === 1) {
        answerArr[round] = 10;
        continue;
      }
      round += 1;
      answerArr[round] = Number(dartResult[i]);
    } else if (dartResult[i] === "D") {
      answerArr[round] = answerArr[round] ** 2;
    } else if (dartResult[i] === "T") {
      answerArr[round] = answerArr[round] ** 3;
    } else if (dartResult[i] === "*") {
      answerArr[round] = answerArr[round] * 2;
      answerArr[round - 1] = answerArr[round - 1] * 2;
    } else if (dartResult[i] === "#") {
      answerArr[round] = answerArr[round] * -1;
    }
  }

  return answerArr.reduce((acc, cur) => acc + cur);
}