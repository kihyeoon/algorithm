let output = boringBlackjack([1, 2, 3, 4]);
console.log(output); // 1

function boringBlackjack(cards) {
  // 배열에 들어있는 숫자들 중 3개를 뽑아서 더한 값이 소수인지 판별
  // 소수라면 배열에 넣고, 소수가 아니라면 배열에 넣지 않는다.
  // 배열의 길이를 리턴한다.

  // 1. 3개를 뽑는 모든 경우의 수를 구한다.
  // 2. 뽑은 3개의 숫자를 더한다.
  // 3. 더한 숫자가 소수인지 판별한다.
  // 4. 소수라면 배열에 넣는다.
  // 5. 배열의 길이를 리턴한다.

  let result = [];
  let sum = 0;

  function pick(cards, toGo, soFar) {
    if (toGo === 0) {
      result.push(soFar);
      return;
    }
    for (let i = 0; i < cards.length; i++) {
      let current = cards[i];
      let removed = cards.slice(0, i).concat(cards.slice(i + 1, cards.length));
      pick(removed, toGo - 1, soFar.concat(current));
    }
  }
  pick(cards, 3, []);

  for (let i = 0; i < result.length; i++) {
    sum = result[i].reduce((acc, cur) => acc + cur);
    if (isPrime(sum)) {
      result[i] = sum;
    } else {
      result.splice(i, 1);
      i--;
    }
  }

  return result.length;

  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
}

//! reference
function boringBlackjack(cards) {
  let count = 0;

  // 1. cards 에서 카드 3장 뽑기
  let length = cards.length;
  // 카드 뽑는 방식은 첫 카드를 cards 의 0번 index 부터 고정해 놓고 1씩 뒤로 옮겨간다
  for (let i = 0; i < length; i++) {
    // 두 번째 카드의 인덱스는 첫 카드 + 1에서 시작해야 하고
    for (let j = i + 1; j < length; j++) {
      // 세 번째 카드의 인덱스는 두 번째 카드 + 1에서 시작해야 한다
      for (let k = j + 1; k < length; k++) {
        const number = cards[i] + cards[j] + cards[k];
        // 세 카드의 합이 소수이면 경우의 수 + 1
        if (isPrime(number)) count++;
      }
    }
  }

  //2. 소수 판별
  function isPrime(number) {
    // 2부터 비교하기 시작해서 나누어 떨어지는 수가 있으면 소수가 아니다
    // for 문 조건을 number/2 로 해도 되는 이유는 i > number/2 가 되면 몫이 절대 0이 될수 없기 때문에
    // number/2 까지만 비교해 보아도 소수 판별이 가능하다
    for (let i = 2; i < number / 2; i++) {
      if (number % i === 0) return false;
    }
    return true;
  }

  return count;
}
