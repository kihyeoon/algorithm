let tiling = function (n) {
  const memo = [0, 1, 2];
  if (n <= 2) return memo[n];
  for (let size = 3; size <= n; size++) {
    memo[size] = memo[size - 1] + memo[size - 2];
  }
  return memo[n];
};
