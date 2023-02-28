function solution(strings, n) {
  let answer = [];
  let indexLetters = [...new Set(strings.map((el) => el[n]))].sort();

  for (let i = 0; i < indexLetters.length; i++) {
    answer.push(...strings.filter((el) => el[n] === indexLetters[i]).sort());
  }

  return answer;
}