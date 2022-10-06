solution("ab cd ef GH IK", 25);

function solution(s, n) {
  let answer = "";
  const little = "abcdefghijklmnopqrstuvwxyz";
  const large = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") answer += " ";
    else if (s[i].toLowerCase() === s[i]) {
      answer += little[(little.indexOf(s[i]) + n) % 26];
    } else {
      answer += large[(large.indexOf(s[i]) + n) % 26];
    }
  }
  return answer;
}
