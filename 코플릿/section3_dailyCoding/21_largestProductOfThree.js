function largestProductOfThree(arr) {
  // 최대값 변수를 선언
  // 3중 for문을 돌리면서 최대값과 비교
  // 만약 더 크면 최대값에 저장

  let max = arr[0] * arr[1] * arr[2];

  for (let i = 0; i <= arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      for (let k = j + 1; k <= arr.length; k++) {
        if (max < arr[i] * arr[j] * arr[k]) {
          max = arr[i] * arr[j] * arr[k];
        }
      }
    }
  }
  return max;
}
