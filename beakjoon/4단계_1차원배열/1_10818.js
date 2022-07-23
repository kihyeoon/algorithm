const [firstLine, input] = require("fs")
  .readFileSync("1_10818.txt")
  .toString()
  .trim()
  .split("\n");

const count = Number(firstLine);
const newArr = input.split(" ").map(Number);
newArr.sort((a, b) => a - b);

console.log(`${newArr[0]} ${newArr[count - 1]}`);
