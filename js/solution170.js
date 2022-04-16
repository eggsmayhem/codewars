function solution(nums){
  return nums && nums.length ? nums.sort((a,b) => a - b) : [];
}
