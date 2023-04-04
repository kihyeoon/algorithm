function solution(n, m, sections) {
  let count = 0;
  let startPoint = 1;

  sections.forEach((section) => {
    if (section >= startPoint) {
      count++;
      startPoint = section + m;
    }
  });

  return count;
}