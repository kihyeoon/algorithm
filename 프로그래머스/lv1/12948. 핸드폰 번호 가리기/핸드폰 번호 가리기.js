function solution(nums) {
	return "*".repeat(nums.length - 4) + nums.slice(-4);
}