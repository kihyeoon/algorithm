function solution(arr1, arr2) {
    let answer = 0;
    
    const arr1Length = arr1.length;
    const arr2Length = arr2.length;
    
    if (arr1Length === arr2Length) {
        const arr1Sum = arr1.reduce((acc, cur) => acc + cur);
        const arr2Sum = arr2.reduce((acc, cur) => acc + cur);

        answer = arr1Sum > arr2Sum ? 1 : -1;
        
        if (arr1Sum === arr2Sum) answer = 0;
    } else {
        answer = arr1Length > arr2Length ? 1 : -1;
    }
    
    return answer;
}