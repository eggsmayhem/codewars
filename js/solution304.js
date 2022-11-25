//LC 169
//
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const val = nums.length/2;
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
      hash[nums[i]] = (hash[nums[i]] || 0) + 1;
      if (hash[nums[i]] > val) return nums[i] 
  }
};
