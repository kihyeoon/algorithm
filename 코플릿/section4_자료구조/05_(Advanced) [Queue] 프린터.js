function queuePrinter(bufferSize, capacities, documents) {
  // 필요한 변수들부터 선언하고 시작

  // 시간이 얼마나 지났는지 기록할 time
  let time = 0;
  // 인쇄 대기 목록이 될 queue
  let queue = [];
  // 대기 목록(queue)에 들어있는 문서의 총 용량을 기록할 total
  let total = 0;

  // 1초마다 벌어질 일을 담을 함수 go (이름 대충 지음)
  const go = () => {
    // 일단 1초 지남
    time += 1;

    // 대기 목록 맨 앞에 있던 문서를 빼서 printed라는 변수에 담기
    let printed = queue.shift();

    // 프린트할 문서가 있었다면 printed라는 변수에 값이 있을거임
    // 값이 있다면 인쇄된 문서의 용량이 될 거임
    // 그러니까 총 용량 total에서 인쇄된 문서 용량을 빼주기
    if (printed) total -= printed;

    // 이제 대기 목록에 다른 문서를 올릴 수 있는지 확인해보자
    // 총 용량 + 인쇄해야 할 리스트 0번째 문서 용량이 capacites를 넘으면 안 됨
    if (total + documents[0] <= capacities) {
      // 안 넘으면 조건문 안으로 들어오겠죠?

      // 리스트에 있던 문서를 빼옴
      let document = documents.shift();
      // 대기 목록 마지막 칸에 문서 넣어주고
      queue[bufferSize - 1] = document;
      // 총 용량에 넣어준 문서 용량도 더해주기
      total += document;

      // 레퍼런스에서는 bufferSize만큼 0으로 채워주고 시작하는데...
      // 배열의 특정 인덱스 값에 값을 넣어주면 앞에 비어있는 인덱스에는 자동으로 empty가 들어감
      // 이 특성을 활용해서 작성한 코드임
    }
  };

  // 자, 이제 문서리스트에 문서가 있거나,
  // 인쇄 대기 목록에 아직 인쇄되지 않은 문서가 남아있을 때
  while (documents.length || queue.length) {
    // 우리가 작성한 함수를 실행시켜줌
    go();
  }

  // 여기까지 왔다면 더이상 인쇄할 문서도, 인쇄 대기중인 문서도 없는거임
  // 여기까지의 총 소모시간인 time을 리턴해주면 끝!
  return time;
}

let bufferSize = 2;
let capacities = 10;
let documents = [7, 4, 5, 6];

let output = queuePrinter(bufferSize, capacities, documents);
console.log(output) // 8