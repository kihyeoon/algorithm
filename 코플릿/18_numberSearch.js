function numberSearch(str) {
  if (!str) return 0;

  let num = str
    .split("")
    .map(Number)
    .filter((el) => el > 0)
    .reduce((acc, cur) => acc + cur);

  const isInclude = (el) => {
    const numArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", " "];
    return !numArr.includes(el);
  };

  let strLength = str.split("").filter(isInclude).length;

  return Math.round(num / strLength);
}
