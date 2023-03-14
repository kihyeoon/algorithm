function solution(s) {
  return [...s].map((el, i) => [...s.slice(0, i), ""].reverse().indexOf(el));
}