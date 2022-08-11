//group anagrams
//
const groupAnagrams = function(strs) {
    const map = {}
    
    strs.forEach((item, index) => {
        let sorted = item.split('').sort().join('')
        if (!map[sorted]) {
            map[sorted] = [item]
        }
        else {
            map[sorted].push(item)
        }
    })
    return Object.values(map)
    
    
    
};
