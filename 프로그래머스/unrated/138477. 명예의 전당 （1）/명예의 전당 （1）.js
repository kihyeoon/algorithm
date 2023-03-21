function solution(k, score) {
  let answer = [];

  for (let i = 1; i <= score.length; i++) {
    let HallOfFame = score.slice(0, i).sort((a, b) => b - a);
    answer.push(HallOfFame.length < k ? HallOfFame.pop() : HallOfFame[k - 1]);
  }

  return answer;
}