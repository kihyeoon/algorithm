function solution(priorities, location) {
  // 각 프로세스를 { location, priority } 형태의 객체로 변환하여 큐에 저장합니다.
  let queue = priorities.map((priority, index) => {
    return {
      location: index,
      priority: priority,
    };
  });

  let order = 0;

  while (queue.length > 0) {
    // 첫 번째 프로세스를 꺼냅니다.
    let currentProcess = queue.shift();

    // 꺼낸 프로세스의 우선순위가 큐 내 다른 프로세스의 우선순위보다 높은지 확인합니다.
    if (queue.some((process) => process.priority > currentProcess.priority)) {
      // 꺼낸 프로세스의 우선순위가 낮다면, 다시 큐의 끝에 넣습니다.
      queue.push(currentProcess);
    } else {
      // 꺼낸 프로세스의 우선순위가 가장 높다면, 프로세스를 실행하고 순서를 증가시킵니다.
      order++;

      // 만약 꺼낸 프로세스가 찾는 프로세스라면, 실행 순서를 반환하고 종료합니다.
      if (currentProcess.location === location) {
        return order;
      }
    }
  }
}