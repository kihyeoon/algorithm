function solution(k, tangerine) {
  const CountBySize = {};
  tangerine.map((el) => {
    el in CountBySize ? CountBySize[el]++ : (CountBySize[el] = 1);
  });
  const countArr = Object.values(CountBySize).sort((a, b) => b - a);

  for (let i = 0; i <= countArr.length; i++) {
    k -= countArr[i];
    if (k <= 0) return i + 1;
  }
}