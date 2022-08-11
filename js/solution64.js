 */
const groupAnagrams = function(strs) {
    const answer = []
    
    function makeHash(word) {
        const table = new Array(26).fill(0)
        for (let i=0; i<word.length; i++) {
            const alphaIndex = word[i].charCodeAt() - 97
            table[alphaIndex]++
        }
        
        return table.join('|')
    }
    
    const map = {}
    strs.forEach(item => {
        const hashed = makeHash(item)
        if (!map[hashed]) {
            map[hashed] = [item]
        }
        else {
            map[hashed].push(item)
        }
    })
    
    return Object.values(map)
    
};
