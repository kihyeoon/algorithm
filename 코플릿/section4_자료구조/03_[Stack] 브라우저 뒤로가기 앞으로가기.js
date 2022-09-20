function browserStack(actions, start) {
  // 반복문 돌려서 actions의 길이만큼 순회
  // 문자열이면 cur을 prev에 push, cur에 문자열 할당
  // -1 이면 cur을 next에 push, prev마지막 요소를 cur에 할당 & pop
  // 1이면 cur을 prev에 push, next 마지막 요소를 cur에 할당 & pop
  if (typeof start !== "string") return false;

  let cur = start;
  let prev = [];
  let next = [];

  for (let item of actions) {
    if (typeof item === "string") {
      prev.push(cur);
      cur = item;
      next = [];
    }
    if (item === -1 && prev.length !== 0) {
      next.push(cur);
      cur = prev.pop();
    }
    if (item === 1 && next.length !== 0) {
      prev.push(cur);
      cur = next.pop();
    }
  }
  return [prev, cur, next];
}
