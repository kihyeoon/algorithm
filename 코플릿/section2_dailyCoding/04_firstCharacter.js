function firstCharacter(str) {
  let result = str.split(" ").map((el) => el[0]);
  return result.join("");
}
