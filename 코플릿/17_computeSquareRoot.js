function computeSquareRoot(num) {
  const diffs = [1, 0.1, 0.01, 0.001];
  let base = 1;
  for (let i = 0; i < diffs.length; i++) {
    while (base * base < num) {
      base = base + diffs[i];
    }

    if (base * base === num) {
      return base;
    } else {
      base = base - diffs[i];
    }
  }
  return Number(base.toFixed(2));
}
