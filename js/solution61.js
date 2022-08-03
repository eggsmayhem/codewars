//LC Jewels and Stones
//
const numJewelsInStones = function(jewels, stones) {
    const jewelArr = jewels.split('')
    const stonesArr = stones.split('')
    let count = 0
    
    stonesArr.forEach(x => {
        if (jewels.includes(x)) {
            count++
        }
    })
    return count
    
};
