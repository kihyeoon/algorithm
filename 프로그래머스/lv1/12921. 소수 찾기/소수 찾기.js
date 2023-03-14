function solution(n) {
let numbers = new Array(n + 1).fill(true, 2);

  for (let i = 2; i < Math.sqrt(n); i++) {
    if (numbers[i]) {
      for (let j = i * i; j <= n; j += i) {
        numbers[j] = false;
      }
    }
  }

  return numbers.filter((num) => num).length;
}