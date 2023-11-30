function solution(num_list) {
    const times = num_list.reduce((acc, cur) => acc * cur);
    const square = num_list.reduce((acc, cur) => acc + cur) ** 2;
    
    return times > square ? 0 : 1;
}