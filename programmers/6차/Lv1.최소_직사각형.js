solution([
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
]);

function solution(sizes) {
  const resize = sizes.map((el) => el.sort((a, b) => b - a));
  return (
    Math.max(...resize.map((el) => el[0])) *
    Math.max(...resize.map((el) => el[1]))
  );
}
