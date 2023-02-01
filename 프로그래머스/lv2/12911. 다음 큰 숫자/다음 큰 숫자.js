function solution(n) {
    let answer = n + 1;
    let length = n.toString(2).replace(/[0]/g, '').length
    while (answer.toString(2).replace(/[0]/g, '').length != length) {
        answer++
    }
    return answer;
}