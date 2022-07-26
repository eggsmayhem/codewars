//LC Running Sum of 1d array
//

const runningSum = function(nums) {
 
    const answer = new Array(nums.length).fill(0)
    
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = 0; j <=i; j++) {
    //         answer[i]+=nums[j]
    //     }
    // }
    nums.forEach((item, index) => {
        for (let i = 0; i<=index; i++) {
            answer[index]+=nums[i]
        }
    })
    return answer
}; 









