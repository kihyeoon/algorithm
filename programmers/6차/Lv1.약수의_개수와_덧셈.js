solution(13, 17);

function solution(left, right) {
  let result = 0;
  for (let i = left; i <= right; i++) {
    let idx = 0;
    for (let j = 0; j <= i; j++) {
      if (i % j === 0) idx++;
    }
    if (idx % 2 === 0) result += i;
    else result -= i;
  }
  return result;
}

function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}
