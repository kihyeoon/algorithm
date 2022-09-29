const binarySearch = function (arr, target) {
  // 오름차순 정렬된 배열의 left와 right을 만든다.
  let left = 0;
  let right = arr.length - 1;
  // left와 right의 순서가 바뀌지 않을 때 까지만 반복한다.
  while (left <= right) {
    // 중간값인 middle을 만든다.
    let middle = parseInt((left + right) / 2);
    // 만약 미들 인덱스의 값이 목표값이면 인덱스를 리턴한다.
    if (arr[middle] === target) return middle;
    // 목표값보다 미들 인덱스의 값이 크다면 미들을 포함한 오른쪽 범위는 필요 없으므로 버린다.
    if (arr[middle] > target) right = middle - 1;
    // 반대로 작다면 미들을 포함한 왼쪽 범위를 버린다.
    else left = middle + 1;
  }
  // 타겟값이 발견되지 않으면 -1을 리턴한다.
  return -1;
};
