// function solution(n) {
//   let answer = n;
//   const nCountOne = n.toString(2).match(/1/g).length;
//   while (true) {
//     answer++;
//     if (nCountOne === answer.toString(2).match(/1/g).length) break;
//   }
//   return answer;
// }

function solution(n, a = n + 1) {
  return n.toString(2).match(/1/g).length === a.toString(2).match(/1/g).length
    ? a
    : solution(n, a + 1);
}
