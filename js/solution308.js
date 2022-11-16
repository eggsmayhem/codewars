//LC 53
//
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // for (let i = 1; i < nums.length; i++) {
    //     nums[i] = Math.max(nums[i], nums[i] + nums[i-1]);
    // }
    // return Math.max(...nums)
    let max = -Infinity;
    let curr = 0;
    for (let i = 0; i < nums.length; i++) {
        curr = Math.max(curr + nums[i], nums[i]);
        max = Math.max(curr, max);
    }
    return max;
};
