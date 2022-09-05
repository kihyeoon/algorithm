function modulo(num1, num2) {
  let n1 = num1;
  let n2 = num2;
  if (n2 === 0) return "Error: cannot divide by zero";
  for (let i = 0; 0 <= n1; i++) {
    n1 -= n2;
  }
  if (n1 < 0) {
    n1 += n2;
  }
  return n1;
}
