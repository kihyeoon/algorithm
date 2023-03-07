function solution(foods) {
  const answer = [];
  let food = 0;

  for (let i = 1; i < foods.length; i++) {
    food = foods[i] % 2 ? foods[i] - 1 : foods[i];
    if (!food) continue;

    answer.push(i.toString().repeat(food / 2));
  }

  return [...answer, "0", ...[...answer].reverse()].join("");
}