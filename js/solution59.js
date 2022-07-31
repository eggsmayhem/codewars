//Shuffle the array
//
const shuffle = function(nums, n) {
    //3
    //0,n[3],1,n+1[4],2,n+2[5]
    const ans = []
    for (let i=0; i<n; i++) {
        ans.push(nums[i])
        ans.push(nums[n+i])
    }
    return ans
};
