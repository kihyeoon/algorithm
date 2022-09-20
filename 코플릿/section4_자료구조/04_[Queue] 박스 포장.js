function paveBox(boxes) {
  // 첫번째 인덱스보다 큰 숫자의 인덱스를 찾음
  // 그 앞에있는 아이템들을 큐어레이에 넣음
  // 위를 반복해서 큐에 쌓고 가장 긴 아이템 배열의 길이 구하기
  let front = 0;
  let queue = [];

  for (let i = 0; i < boxes.length; i++) {
    if (boxes[front] < boxes[i]) {
      queue.push(boxes.slice(front, i));
      front = i;
    }
    if (i === boxes.length - 1) {
      queue.push(boxes.slice(front, i + 1));
    }
  }
  return Math.max(...queue.map((el) => el.length));
}
