function isIsogram(str) {
  str = str.toUpperCase();
  let arr = [...str];
  let isIso = true;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        isIso = false;
        break;
      }
    }
  }
  return isIso;
}
