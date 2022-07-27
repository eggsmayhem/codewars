//LC Build and Array from Permutation
//
const buildArray = function(nums) {
    const answer = new Array(nums.length).fill(0)
    nums.forEach((item, index) => {
        answer[index] = nums[item]
    })
    return answer
};
