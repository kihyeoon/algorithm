function solution(num_list) {
    const newList = [];
    num_list.reduceRight((acc, cur) => {
        newList.push(cur);
    }, 0)
    return newList;
}