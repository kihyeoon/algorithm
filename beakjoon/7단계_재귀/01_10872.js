const input = require("fs").readFileSync("01_10872.txt").toString().trim();

let result = 1;

for (let i = input; i >= 1; i--) {
  result *= i;
}

console.log(result);
