function solution(priorities, location) {
    let order = 0;
    let target_index = location; // 목표 프로세스의 위치를 추적하는 변수
    let first = -1;

    while (priorities.length > 0) { 
        first = priorities.shift(); // 첫 번째 프로세스를 꺼낸다
        if (priorities.some((value, index) => value > first)) { // 우선순위가 더 높은 프로세스가 있는지 확인한다
            priorities.push(first); // 우선순위가 더 높은 프로세스가 있다면 꺼낸 프로세스를 다시 큐에 넣는다
        } else {
            order++; // 우선순위가 더 높은 프로세스가 없다면 해당 프로세스를 실행하고 순서를 증가시킨다
            if (target_index === 0) {
                break; // 목표 프로세스가 실행되었다면 반복문을 종료한다
            }
        }
        if (target_index === 0) {
            target_index = priorities.length - 1; // 목표 프로세스가 큐의 마지막으로 이동한다
        } else {
            target_index--; // 목표 프로세스의 위치를 하나 줄인다
        }
    }
    return order;
}
