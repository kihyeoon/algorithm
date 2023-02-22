function solution(d, budget) {
  let answer = 0;
  d.sort((a, b) => a - b);
  for (const el of d) {
    if (budget < el) break;
    answer ++;
    budget -= el;
  }
  return answer;
}