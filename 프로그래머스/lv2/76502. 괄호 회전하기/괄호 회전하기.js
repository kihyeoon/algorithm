const balancedBrackets = (str) => {
  const stack = [];
  const opener = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  let fullBrackets = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] in opener) {
      stack.push(str[i]);
    } else {
      const top = stack.pop();
      const pair = opener[top];
      if (pair !== str[i]) {
        return 0;
      }
    }
    if (!stack.length) fullBrackets++;
  }
  return fullBrackets;
};

function solution(s) {
  for (let i = 0; i < s.length - 1; i++) {
    let BalanceCount = balancedBrackets(s.slice(i) + s.slice(0, i));
    if (!BalanceCount) continue;
    return BalanceCount;
  }
  return 0;
}