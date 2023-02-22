function solution(s, n) {
  let answer = "";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") answer += " ";
    else if (s[i].toLowerCase() === s[i]) {
      answer += lower[(lower.indexOf(s[i]) + n) % 26];
    } else if (s[i].toUpperCase() === s[i]) {
      answer += upper[(upper.indexOf(s[i]) + n) % 26];
    }
  }
  return answer;
}