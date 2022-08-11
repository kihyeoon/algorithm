function readVertically(arr) {
  // arr[0][0] arr[1][0]
  // arr[0][1] arr[1][1] ...
  let longest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (longest < arr[i].length) {
      longest = arr[i].length;
    }
  }

  let result = [];
  for (let i = 0; i < longest; i++) {
    for (let j = 0; j < arr.length; j++) {
      result.push(arr[j][i]);
    }
  }

  return result.filter((el) => el).join("");
}
