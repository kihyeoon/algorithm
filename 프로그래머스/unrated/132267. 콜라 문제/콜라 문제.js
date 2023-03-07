function solution(a, b, n) {
  let answer = 0;
  let 나머지, coke;

  while (n >= a) {
    나머지 = n % a;
    coke = ((n - 나머지) / a) * b;
    answer += coke;
    n = 나머지 + coke;
  }

  return answer;
}