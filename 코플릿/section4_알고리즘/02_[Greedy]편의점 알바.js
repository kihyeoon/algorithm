function partTimeJob(k) {
  let count = 0;
  const wallet = [500, 100, 50, 10, 5, 1];

  for (let i = 0; i < wallet.length; i++) {
    if (k === 0) break;
    count += Math.floor(Number(k / wallet[i]));
    k %= wallet[i];
  }
  return count;
}

function partTimeJob2(k) {
  let result = 0;
  const wallet = [500, 100, 50, 10, 5, 1];
  for (let i = 0; i < wallet.length; i++) {
    if (k > 0) {
      const sum = Math.floor(k / wallet[i]);
      result += sum;
      k = k - wallet[i] * sum;
    }
  }
  return result;
}
