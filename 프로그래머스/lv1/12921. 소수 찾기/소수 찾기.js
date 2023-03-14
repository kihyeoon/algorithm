function solution(n) {
  let numbers = new Array(n + 1).fill(true);
  numbers[0] = false;
  numbers[1] = false;

  // 합성수는 false로 교체
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (numbers[i]) {
      // 합성수는 기준수의 배수로 찾는다.
      // 시작을 기준수의 제곱으로 한다.
      // (본인 수 제외, 제곱 값 이전의 수는 기준수보다 작은 소수가 시행될 때 이미 걸러짐)
      // 판단해야 할 수는 기준수의 배수이므로, 기준 수를 더해가며 건너 뛴다.
      for (let j = i * i; j <= n; j += i) {
        numbers[j] = false;
      }
    }
  }

  return numbers.filter((num) => num).length;
}