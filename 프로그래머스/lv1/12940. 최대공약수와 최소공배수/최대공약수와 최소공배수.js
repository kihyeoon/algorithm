function solution(a, b) {
  let r;
  let ab
  for (ab = a * b; (r = a % b); a = b, b = r) {}
  return [b, ab / b];
}