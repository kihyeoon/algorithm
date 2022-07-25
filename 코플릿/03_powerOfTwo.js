function powerOfTwo(num) {
  if (num === 1) {
    return true;
  }
  result = 2;
  while (num > result) {
    result *= 2;
  }
  return result === num;
}
