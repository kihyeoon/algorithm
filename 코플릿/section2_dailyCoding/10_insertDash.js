function insertDash(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result = result + str[i];
    if (str[i] % 2 === 1 && str[i + 1] % 2 === 1) {
      result = result + "-";
    }
  }
  return result;
}
