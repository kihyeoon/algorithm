function solution(s) {
  const counts = s.match(/\d+/g).reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .map(([key, _]) => Number(key));
}