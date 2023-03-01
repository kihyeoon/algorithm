function solution(citations) {
  citations.sort((a, b) => b - a);

  let answer = 0;
  for (let i = citations.length - 1; i >= 0; i--) {
    if (i >= citations[i]) citations.pop();
  }
  return citations.length;
}