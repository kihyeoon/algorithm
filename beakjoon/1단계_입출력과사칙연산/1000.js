const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : __filename.split("/").pop().slice(0, -3) + ".txt" // 1000.txt
  )
  .toString()
  .trim()
  .split(" ");

var a = parseInt(input[0]);
var b = parseInt(input[1]);

console.log(a + b);
