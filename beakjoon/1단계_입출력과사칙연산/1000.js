let fs = require("fs");
let input = fs.readFileSync("1000.txt").toString().split(" ");

var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a + b);
