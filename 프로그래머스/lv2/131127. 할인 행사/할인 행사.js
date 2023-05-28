function solution(want, number, discount) {
    // 정현이가 원하는 제품을 key로, 원하는 수량을 value로 가지는 객체를 만듭니다.
    let wantObject = {};
    for(let i = 0; i < want.length; i++) {
        wantObject[want[i]] = number[i];
    }

    let answer = 0;
    for(let i = 0; i <= discount.length - 10; i++) {
        // wantObject를 복사하고, 각 할인 제품이 복사한 객체에 존재하면 해당 제품의 수량을 감소시킵니다.
        let wantCopy = {...wantObject};
        for(let j = i; j < i + 10; j++) {
            if(discount[j] in wantCopy && wantCopy[discount[j]] > 0) {
                wantCopy[discount[j]]--;
            }
        }

        // 복사한 객체의 모든 제품의 수량이 0이 되면, wantObject를 만족하는 것이므로 정답 카운터를 1 증가시킵니다.
        if(Object.values(wantCopy).every(num => num === 0)) {
            answer++;
        }
    }

    return answer;
}
