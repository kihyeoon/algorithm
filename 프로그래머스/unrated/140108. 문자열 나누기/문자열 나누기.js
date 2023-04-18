function solution(s) {
  let x = "";
  let countX = 0;
  let countNotX = 0;
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    if (x === "") x = s[i];
    if (s[i] === x) countX++;
    else if (s[i] !== x) countNotX++;
    if (countX === countNotX) {
      answer++;
      x = "";
    }
  }
  if (x !== "") answer++;
  return answer;
}