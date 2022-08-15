//Top K Frequent 
//
//const topKFrequent = function(nums, k) {
    //array of numbers, number of valuest to return
    const valuesAndCount = []
    for (let i=0; i<nums.length; i++) {
        let tempArr = []
        let count = nums.filter(x=>x===nums[i]).length
        tempArr.push(count)
        tempArr.push(nums[i])
        valuesAndCount.push(tempArr)
    }
    const uniques = valuesAndCount.map(x=>JSON.stringify(x)).filter((item,index,self)=> self.indexOf(item)===index).map(x=>JSON.parse(x))
    const answer = []
    uniques.sort((a,b) => b[0]-a[0])
    console.log(uniques)
    for (let i =0; i< k; i++) {
        answer.push(uniques[i][1])
    }
    return answer
};
