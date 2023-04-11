function solution(babbling) {
  const pronounce = ["aya", "ye", "woo", "ma"];
  let count = 0;

  babbling.forEach((word) => {
    let isPossible = true;
    let prevPronounce = "";

    for (let i = 0; i < word.length; ) {
      let found = false;

      for (const p of pronounce) {
        if (word.startsWith(p, i) && prevPronounce !== p) {
          found = true;
          prevPronounce = p;
          i += p.length;
          break;
        }
      }

      if (!found) {
        isPossible = false;
        break;
      }
    }

    if (isPossible) {
      count++;
    }
  });

  return count;
}