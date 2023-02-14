process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
  const [a, b] = data.split(" ").map(Number);
  console.log(("*".repeat(a) + `\n`).repeat(b));
});