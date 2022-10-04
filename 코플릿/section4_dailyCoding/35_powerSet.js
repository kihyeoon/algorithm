const powerSet = function (str) {
  // 정렬
  const sorted = str.split("").sort();

  // 중복 제거
  const deduplicated = sorted.reduce((acc, item) => {
    if (acc[acc.length - 1] === item) {
      return acc;
    } else {
      return acc.concat(item);
    }
  });

  let subSets = [];
  const pickOrNot = (idx, subset) => {
    // base case
    if (idx === deduplicated.length) {
      // 마지막 문자까지 검토한 경우
      subSets.push(subset);
      return;
    }

    // recursive case
    // idx번째 문자가 포함되지 않는 경우
    pickOrNot(idx + 1, subset);

    // idx번째 문자가 포함되는 경우
    pickOrNot(idx + 1, subset + deduplicated[idx]);
  };

  pickOrNot(0, ""); // root -> 깊이 우선 탐색의 결과만 구하면 된다

  return subSets.sort();
};
